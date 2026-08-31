import {
  DUKA_ANDROID_PACKAGE,
  DUKA_APP_SCHEME,
  DUKA_APP_STORE_URL,
  DUKA_PLAY_STORE_URL,
  DUKA_URL,
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
 * Android intent URL that launches the installed duka.direct app, falling back
 * to the Play Store listing when it isn't installed.
 *
 * Requires DUKA_APP_SCHEME. Chrome forces CATEGORY_BROWSABLE onto every
 * intent:// it handles and only matches activities that declare it — deep-link
 * activities do, launcher activities do not. So an intent built from
 * action=MAIN/category=LAUNCHER can never resolve from a browser; only a real
 * scheme works here.
 */
function androidIntentUrl() {
  return [
    'intent://open#Intent',
    `scheme=${DUKA_APP_SCHEME}`,
    `package=${DUKA_ANDROID_PACKAGE}`,
    `S.browser_fallback_url=${encodeURIComponent(DUKA_PLAY_STORE_URL)}`,
    'end',
  ].join(';');
}

/** Where a plain "Order on duka.direct" link should point on this device. */
export function dukaHref() {
  switch (detectPlatform()) {
    case 'android':
      return DUKA_PLAY_STORE_URL;
    case 'ios':
      return DUKA_APP_STORE_URL;
    default:
      return DUKA_URL;
  }
}

/**
 * Open duka.direct. On mobile this goes to the app's store listing, which
 * shows "Open" when the app is already installed — without a published URL
 * scheme there is no way to reach an app from a browser. Desktop opens the
 * duka.direct website in a new tab.
 */
export function openDuka() {
  const platform = detectPlatform();

  if (platform === 'android') {
    window.location.href = DUKA_APP_SCHEME ? androidIntentUrl() : DUKA_PLAY_STORE_URL;
    return;
  }

  if (platform === 'ios') {
    if (DUKA_APP_SCHEME) {
      // Try the app directly, then fall back to the store if we're still here.
      const timer = setTimeout(() => {
        window.location.href = DUKA_APP_STORE_URL;
      }, 1500);
      document.addEventListener(
        'visibilitychange',
        () => {
          if (document.hidden) clearTimeout(timer);
        },
        { once: true },
      );
      window.location.href = `${DUKA_APP_SCHEME}://`;
      return;
    }
    window.location.href = DUKA_APP_STORE_URL;
    return;
  }

  window.open(DUKA_URL, '_blank', 'noopener,noreferrer');
}
