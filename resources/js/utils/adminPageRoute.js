/** Séparateur pour les route_name (ex. software.windev) dans les URLs admin. */
const SLUG_DOT = '--';

/**
 * Chemin éditeur admin pour un route_name catalogue.
 * Évite les points dans le segment d'URL (conflits router / rechargements en dev).
 */
export function adminPageEditorPath(routeName) {
    const slug = String(routeName).replace(/\./g, SLUG_DOT);

    return `/windevadmin/pages/${slug}`;
}

/**
 * route_name catalogue à partir du paramètre de route admin.
 */
export function routeNameFromAdminSlug(slug) {
    return String(slug).split(SLUG_DOT).join('.');
}

/**
 * Redirige les anciennes URLs avec points vers le slug encodé.
 */
export function normalizeAdminPageEditorRoute(to) {
    const slug = to.params.routeSlug;

    if (typeof slug === 'string' && slug.includes('.')) {
        return {
            name: 'admin.page-editor',
            params: { routeSlug: String(slug).replace(/\./g, SLUG_DOT) },
            replace: true,
        };
    }

    return true;
}
