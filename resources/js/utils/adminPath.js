const DEFAULT_ADMIN_PATH = 'windevadmin';

function normalizeSlug(value) {
    return String(value ?? DEFAULT_ADMIN_PATH).replace(/^\/+|\/+$/g, '');
}

/**
 * Chemin de base de l'admin (ex. /windevadmin), aligné sur config/cms.php côté Laravel.
 */
export function adminBasePath() {
    const el = document.getElementById('admin-app');
    const fromDom = el?.dataset?.adminBasePath;
    const fromWindow = typeof window !== 'undefined' ? window.__ADMIN_CONFIG__?.basePath : null;

    return `/${normalizeSlug(fromDom ?? fromWindow ?? DEFAULT_ADMIN_PATH)}`;
}

/**
 * Construit un chemin sous l'admin (ex. adminRoute('pages') → /windevadmin/pages).
 */
export function adminRoute(subpath = '') {
    const base = adminBasePath();

    if (!subpath) {
        return base;
    }

    const normalized = String(subpath).replace(/^\/+/, '');

    return normalized ? `${base}/${normalized}` : base;
}
