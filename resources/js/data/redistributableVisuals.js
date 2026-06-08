import { localPublicUrl, officialStorageUrl } from '../utils/pcsoftImages.js';

const BASE = 'img/redistribution-img';

function visual(file, storageFile = file) {
    const local = `${BASE}/${file}`;
    return {
        file,
        label: file,
        url: localPublicUrl(local),
        downloadUrl: localPublicUrl(local),
        fallback: officialStorageUrl(
            storageFile.startsWith('visual/') || storageFile.startsWith('2026/')
                ? storageFile
                : `visual/${storageFile}`,
        ),
    };
}

/** Gallery aligned with https://windev.com/pcsoft/visuals.html */
export const redistributableVisualRows = [
    {
        key: 'logos',
        columns: 4,
        items: [
            { ...visual('logo-windev.png', 'visual/logo-windev.png'), label: 'Logo WINDEV' },
            { ...visual('logo-webdev.png', 'visual/logo-webdev.png'), label: 'Logo WEBDEV' },
            {
                ...visual('logo-windev-mobile.png', 'visual/logo-windev-mobile.png'),
                label: 'Logo WINDEV Mobile',
            },
            { ...visual('logo-pcsoft.png', 'visual/logo-pcsoft.png'), label: 'Logo PC SOFT' },
        ],
    },
    {
        key: 'packages',
        columns: 4,
        items: [
            {
                ...visual('package-windev.png', '2026/package-windev.png'),
                label: 'Pack WINDEV 2026',
            },
            {
                ...visual('package-webdev.png', '2026/package-webdev.png'),
                label: 'Pack WEBDEV 2026',
            },
            {
                ...visual('package-windev-mobile.png', '2026/package-windev-mobile.png'),
                label: 'Pack WINDEV Mobile 2026',
            },
            { ...visual('logo-jaune.png', '2026/logo-jaune.png'), label: 'Logo 2026 (jaune)' },
        ],
    },
    {
        key: 'composite',
        columns: 2,
        items: [
            {
                ...visual(
                    'packages-windev-webdev-windev-mobile-2026.png',
                    '2026/packages-windev-webdev-windev-mobile-2026.png',
                ),
                label: 'Packs WINDEV, WEBDEV et WINDEV Mobile 2026',
            },
            { ...visual('hfsql.png', 'visual/hfsql.png'), label: 'Logo HFSQL' },
        ],
    },
];
