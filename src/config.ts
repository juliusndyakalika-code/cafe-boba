// Central place for the shop's outbound ordering links.

/** WhatsApp number in international format, no "+" and no spaces. */
export const WHATSAPP_PHONE = '255687886869';

/**
 * Cafe Boba's storefront on duka.direct (merchant 63f754c7d6aecbd5aff7aa24),
 * as produced by the app's own Share action.
 *
 * s.duka.direct is a verified App Link / Universal Link domain — it serves
 * assetlinks.json for android_app com.app.dukadirect with handle_all_urls, and
 * an apple-app-site-association claiming appID 3WRR497G52.com.duka.direct on
 * paths ["*"]. So on a phone with the app installed the OS hands this straight
 * to duka.direct without the browser ever making the request.
 *
 * Every other case is handled by duka.direct's own redirector, so we don't
 * need to branch on platform: Android without the app lands on the Play Store
 * listing, and desktop lands on https://duka.direct.
 *
 * Must be reached by a real link the user taps — iOS does not reliably fire
 * Universal Links for JS-driven navigation such as window.location or
 * window.open, so these are plain <a href> elements, never onClick handlers.
 */
export const DUKA_STORE_URL = 'https://s.duka.direct/gttdl';
