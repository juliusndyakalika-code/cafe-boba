import {
  PIKI_ANDROID_PACKAGE,
  PIKI_APP_SCHEME,
  PIKI_APP_STORE_URL,
  PIKI_PLAY_STORE_URL,
  PIKI_URL,
} from '../config';

type Platform = 'android' | 'ios' | 'other';

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return 'android';
  // iPadOS 13+ reports as a Mac, so check for touch support too.
  if (/iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1)) {
    return 'ios';
  }
  return 'other';
}

/**
 * Android intent URL that launches the installed Piki app straight from the
 * browser. If Piki isn't installed, Chrome follows browser_fallback_url to the
 * Play Store listing instead of dead-ending.
 */
function androidIntentUrl() {
  return [
    'intent://#Intent',
    `package=${PIKI_ANDROID_PACKAGE}`,
    'action=android.intent.action.MAIN',
    'category=android.intent.category.LAUNCHER',
    `S.browser_fallback_url=${encodeURIComponent(PIKI_PLAY_STORE_URL)}`,
    'end',
  ].join(';');
}

/** Where a plain "Order on Piki" link should point on this device. */
export function pikiHref() {
  switch (detectPlatform()) {
    case 'android':
      return PIKI_PLAY_STORE_URL;
    case 'ios':
      return PIKI_APP_STORE_URL;
    default:
      return PIKI_URL;
  }
}

/**
 * Open the Piki app. Android launches it directly; iOS goes to the App Store
 * card, which shows "Open" when Piki is already installed. Desktop opens the
 * web storefront in a new tab.
 */
export function openPiki() {
  const platform = detectPlatform();

  if (platform === 'android') {
    window.location.href = androidIntentUrl();
    return;
  }

  if (platform === 'ios') {
    if (PIKI_APP_SCHEME) {
      // Try the app directly, then fall back to the store if we're still here.
      const timer = setTimeout(() => {
        window.location.href = PIKI_APP_STORE_URL;
      }, 1500);
      const cancel = () => {
        if (document.hidden) clearTimeout(timer);
      };
      document.addEventListener('visibilitychange', cancel, { once: true });
      window.location.href = `${PIKI_APP_SCHEME}://`;
      return;
    }
    window.location.href = PIKI_APP_STORE_URL;
    return;
  }

  window.open(PIKI_URL, '_blank', 'noopener,noreferrer');
}
