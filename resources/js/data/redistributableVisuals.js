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
            { ...visual('logo-windev.png', 'visual/logo-windev.png'), label: 'WINDEV logo' },
            { ...visual('logo-webdev.png', 'visual/logo-webdev.png'), label: 'WEBDEV logo' },
            {
                ...visual('logo-windev-mobile.png', 'visual/logo-windev-mobile.png'),
                label: 'WINDEV Mobile logo',
            },
            { ...visual('logo-pcsoft.png', 'visual/logo-pcsoft.png'), label: 'PC SOFT logo' },
        ],
    },
    {
        key: 'packages',
        columns: 4,
        items: [
            {
                ...visual('package-windev.png', '2026/package-windev.png'),
                label: 'WINDEV 2026 package',
            },
            {
                ...visual('package-webdev.png', '2026/package-webdev.png'),
                label: 'WEBDEV 2026 package',
            },
            {
                ...visual('package-windev-mobile.png', '2026/package-windev-mobile.png'),
                label: 'WINDEV Mobile 2026 package',
            },
            { ...visual('logo-jaune.png', '2026/logo-jaune.png'), label: '2026 logo (yellow)' },
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
                label: 'WINDEV, WEBDEV and WINDEV Mobile 2026 packages',
            },
            { ...visual('hfsql.png', 'visual/hfsql.png'), label: 'HFSQL logo' },
        ],
    },
];
