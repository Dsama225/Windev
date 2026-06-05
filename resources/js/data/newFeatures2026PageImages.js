import { pcsoftImage } from '../utils/pcsoftImages.js';

export const newFeaturesBanner = pcsoftImage(
    'img/newfeatures/banner-new-version.jpg',
    '2026/new-version-update_accueil.jpg',
);

export const newFeaturesHero = pcsoftImage('img/newfeatures/hero.png', '2026/newfeatures/hero.png');

export const newFeaturesPackages = pcsoftImage(
    'img/newfeatures/packages-windev-webdev-windev-mobile-2026.png',
    '2026/packages-windev-webdev-windev-mobile-2026.png',
);

export const newFeaturesBadge = pcsoftImage('img/newfeatures/nouveau.svg', '2024/nouveau.svg');

export function featureImage(filename) {
    return pcsoftImage(`img/newfeatures/${filename}`, `2026/newfeatures/${filename}`);
}

export const conversationalAiIdeVideo = {
    src: '/video/newfeatures/conversational-ai-environment.mp4',
    fallback: 'https://windev.com/storage/en_US/videos/newfeatures/2026/conversational-ai-environment.mp4',
};
