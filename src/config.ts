// Central place for the shop's outbound ordering links.

/** WhatsApp number in international format, no "+" and no spaces. */
export const WHATSAPP_PHONE = '255687886869';

/**
 * duka.direct — food & grocery delivery in Dar es Salaam, by Selcom Paytech
 * Limited. Identifiers verified against both stores; note the Android package
 * and the iOS bundle id differ.
 */
export const DUKA_ANDROID_PACKAGE = 'com.app.dukadirect';
export const DUKA_IOS_APP_ID = '1509485417';

export const DUKA_PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${DUKA_ANDROID_PACKAGE}`;
export const DUKA_APP_STORE_URL = `https://apps.apple.com/tz/app/id${DUKA_IOS_APP_ID}`;

/** duka.direct's website — used as the desktop destination. */
export const DUKA_URL = 'https://duka.direct';

/**
 * Custom URL scheme for the duka.direct app, e.g. 'dukadirect'.
 *
 * This is the ONE value that makes "open the app directly" work, on both
 * Android and iOS. It is empty because duka.direct has not published a
 * scheme: the site serves no apple-app-site-association and no
 * assetlinks.json (both 404), so there are no App Links to piggyback on and
 * the scheme could not be discovered. A wrong guess is worse than none —
 * Android silently bounces to the Play Store and iOS Safari throws a
 * "Cannot Open Page" alert.
 *
 * To find it: open the duka.direct app, share any shop or product, and look
 * at the link. If it starts with something like "dukadirect://", put that
 * word here. If it is an https:// link on a duka.direct domain, it's an App
 * Link — put the full URL in DUKA_URL instead and the OS routes it to the app.
 */
export const DUKA_APP_SCHEME = '';
