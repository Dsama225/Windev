import { pcsoftImage } from '../utils/pcsoftImages.js';

/** Images aligned with https://windev.com/ */

export const homeSuiteCrossPlatform = pcsoftImage(
    'img/home/cross-plateformes.png',
    'home/cross-plateformes.png',
);

export const homeHeroBackground = pcsoftImage('img/home/neo-fond.jpg', '2024/neo-fond.jpg');

export const homeHeroBadge = pcsoftImage('img/home/nouveau.svg', '2024/nouveau.svg');

export const homeCrossDevices = pcsoftImage(
    'img/home/fond_cross-plateformes_1.png',
    '2025/fond_cross-plateformes_1.png',
);

export const homeSeminar = pcsoftImage(
    'img/home/new-version-update_accueil.jpg',
    '2026/new-version-update_accueil.jpg',
);

export const homeHeroVersionMobile = pcsoftImage(
    'img/new-version-update_accueil_mobile.jpg',
    '2026/new-version-update_accueil_mobile.jpg',
);

export const homeDatabases = pcsoftImage('img/home/all-the-databases.jpg', '2014/all-the-databases.jpg');

export const homePackages = pcsoftImage(
    'img/2026/packages-windev-webdev-windev-mobile-2026.png',
    '2026/packages-windev-webdev-windev-mobile-2026.png',
);

export const homeSuiteLogo = pcsoftImage(
    'img/home/logo_windev-suite_texte-noir-light.svg',
    '2024/logo_windev-suite_texte-noir-light.svg',
);

export const homeProducts = [
    {
        id: 'windev',
        title: 'WINDEV',
        icons: 'Windows · Linux · .NET',
        description: 'Create Windows, .Net, Linux and Mac applications 10 times faster.',
        imageAlt: 'WINDEV 2026',
        logo: pcsoftImage('img/home/logo-windev.png', 'logo/logo-windev.png'),
        package: pcsoftImage('img/home/windev-available.png', '2026/windev-available.png'),
    },
    {
        id: 'webdev',
        title: 'WEBDEV',
        icons: 'Web · SaaS · Intranet',
        description: 'Create Intranet & Internet sites and applications 10 times faster.',
        imageAlt: 'WEBDEV 2026',
        logo: pcsoftImage('img/home/logo-webdev.png', 'logo/logo-webdev.png'),
        package: pcsoftImage('img/home/webdev-available.png', '2026/webdev-available.png'),
    },
    {
        id: 'mobile',
        title: 'WINDEV Mobile',
        icons: 'Android · iOS · UWP',
        description: 'Create applications for iOS, Android, Windows 10 IoT, and more in a few hours.',
        imageAlt: 'WINDEV Mobile 2026',
        logo: pcsoftImage('img/home/logo-windev-mobile.png', 'logo/logo-windev-mobile.png'),
        package: pcsoftImage('img/home/windev-mobile-available.png', '2026/windev-mobile-available.png'),
    },
];

const customerLogoFiles = [
    'porsche.jpg',
    'seiko.jpg',
    'clarins.jpg',
    'bristol.jpg',
    'pmf.jpg',
    'bridgestone.jpg',
    'quiksilver.jpg',
    'johndeere.jpg',
    'shell.jpg',
    'segafredo.jpg',
    'bollinger.jpg',
    'honda.jpg',
    'kenzo.jpg',
    'l-oreal.jpg',
    'siemens.jpg',
];

export const homeCustomerLogos = customerLogoFiles.map((file) =>
    pcsoftImage(`img/home/logos/${file}`, `logos/${file}`),
);
