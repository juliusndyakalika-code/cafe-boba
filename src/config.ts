// Central place for the shop's outbound ordering links.

/** WhatsApp number in international format, no "+" and no spaces. */
export const WHATSAPP_PHONE = '255687886869';

/**
 * Piki: Food, Drinks & Groceries — by POD Services Tanzania Limited.
 * Verified against both app stores; the Android package and the iOS bundle id
 * are both "com.food.ordering".
 */
export const PIKI_ANDROID_PACKAGE = 'com.food.ordering';
export const PIKI_IOS_APP_ID = '1494331554';

export const PIKI_PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${PIKI_ANDROID_PACKAGE}`;
export const PIKI_APP_STORE_URL = `https://apps.apple.com/tz/app/id${PIKI_IOS_APP_ID}`;

/**
 * Piki's web storefront — used as the desktop fallback.
 * Replace with the exact Cafe Boba store link once Piki provides one.
 */
export const PIKI_URL = 'https://www.piki.co.tz';

/**
 * Optional custom URL scheme for the Piki app, e.g. 'piki'.
 * Piki has not published one and their domain is currently down, so this is
 * left empty on purpose: an unregistered scheme makes iOS Safari throw a
 * "Cannot Open Page" alert. Fill it in only if Piki confirms the scheme —
 * openPiki() will then try it first on iOS before falling back to the store.
 */
export const PIKI_APP_SCHEME = '';
