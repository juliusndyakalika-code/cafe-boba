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
 * Custom URL scheme for the Piki app, e.g. 'piki'.
 *
 * This is the ONE value that makes "open the app directly" work, on both
 * Android and iOS. It is empty because Piki has not published a scheme:
 * piki.co.tz returns 500, has no apple-app-site-association, and has no
 * archived snapshots, so it could not be discovered — and a wrong guess is
 * worse than none (Android silently bounces to the Play Store, iOS Safari
 * throws a "Cannot Open Page" alert).
 *
 * To find it: open the Piki app, share any restaurant, and look at the link.
 * If it starts with something like "piki://", put that word here. If it is an
 * https:// link on a Piki domain, it's an App Link — put the full URL in
 * PIKI_URL instead and the OS will route it to the app.
 */
export const PIKI_APP_SCHEME = '';
