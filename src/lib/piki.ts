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
 * browser, falling back to the Play Store listing when it isn't installed.
 *
 * This requires PIKI_APP_SCHEME. Chrome forces CATEGORY_BROWSABLE onto every
 * intent:// it handles and only matches activities that declare it — deep-link
 * activities do, launcher activities do not. So an intent built from
 * action=MAIN/category=LAUNCHER can never resolve from a browser; it silently
 * falls through to the Play Store. Only a real scheme works here.
 */
function androidIntentUrl() {
  return [
    `intent://open#Intent`,
    `scheme=${PIKI_APP_SCHEME}`,
    `package=${PIKI_ANDROID_PACKAGE}`,
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
    // Without a real scheme there is no way to reach the app from a browser,
    // so go straight to the Play Store listing — it shows "Open" when Piki is
    // already installed.
    window.location.href = PIKI_APP_SCHEME ? androidIntentUrl() : PIKI_PLAY_STORE_URL;
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
