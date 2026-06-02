/** PC SOFT CDN + local public/img paths with runtime fallback. */

export const PCSOFT_STORAGE_BASE = 'https://windev.com/storage/en_US/img';

/**
 * @param {string} storagePath e.g. "home/cross-plateformes.png" or "/home/foo.png"
 */
export function officialStorageUrl(storagePath) {
    const normalized = storagePath.replace(/^\//, '');
    return `${PCSOFT_STORAGE_BASE}/${normalized}`;
}

/**
 * @param {string} publicPath path under public/, e.g. "img/home/cross-plateformes.png"
 */
export function localPublicUrl(publicPath) {
    const normalized = publicPath.replace(/^\/+/, '');
    return `/${normalized}`;
}

/**
 * Prefer local file; attach official URL for @error fallback.
 * @param {string} publicPath
 * @param {string} storagePath
 */
export function pcsoftImage(publicPath, storagePath) {
    return {
        src: localPublicUrl(publicPath),
        fallback: officialStorageUrl(storagePath),
    };
}

/**
 * @param {Event} event
 * @param {string} fallbackUrl
 */
export function applyImageFallback(event, fallbackUrl) {
    const img = event.target;
    if (!img || img.dataset.fallbackApplied === '1') {
        return;
    }
    img.dataset.fallbackApplied = '1';
    img.src = fallbackUrl;
}

export const DOWNLOAD_LINKS = {
    windevExpress: 'https://download.windev.com/uk/index.awp',
    windevMobileExpress: 'https://download.windev.com/uk/index.awp',
    downloadCenter: 'https://download.windev.com/uk/index.awp',
    subscriptionVersion: 'https://download.windev.com/uk/index.awp',
    dongleVersion: 'https://download.windev.com/uk/dongle.awp',
};

export const SHARED_IMAGES = {
    crossPlatform: pcsoftImage('img/home/cross-plateformes.png', 'home/cross-plateformes.png'),
    packagesSuite: pcsoftImage(
        'img/2026/packages-windev-webdev-windev-mobile-2026.png',
        '2026/packages-windev-webdev-windev-mobile-2026.png',
    ),
    pcsoftLogoDark: {
        src: '/pcsoft/LOGO_PCSOFT_Dark.svg',
        fallback: 'https://logo.assets.pcsoft.fr/svg/LOGO_PCSOFT_Dark.svg',
    },
};
