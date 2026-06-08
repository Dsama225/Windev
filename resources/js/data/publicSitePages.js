/**
 * 31 pages publiques avec composant Vue (spec §18.1, router/index.js).
 * Catalogue des pages publiques Vue (router/index.js).
 */
import definitions from '../../../resources/data/public-site-pages.json';

export const PUBLIC_SITE_PAGES = definitions;

export const PUBLIC_SITE_PAGE_COUNT = PUBLIC_SITE_PAGES.length;

export const PUBLIC_SITE_ROUTE_NAMES = PUBLIC_SITE_PAGES.map((page) => page.route_name);

export function isPublicSitePage(routeName) {
    return PUBLIC_SITE_ROUTE_NAMES.includes(routeName);
}

export function publicSitePageByRoute(routeName) {
    return PUBLIC_SITE_PAGES.find((page) => page.route_name === routeName) ?? null;
}
