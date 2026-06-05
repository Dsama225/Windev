import { localPublicUrl } from '../utils/pcsoftImages.js';
import { windevNewFeatures2026En, windevBrochureEn } from './windevPageDocuments.js';
import { webdevBrochureEn } from './webdevPageDocuments.js';

export { windevNewFeatures2026En as hfsqlNewFeaturesPdf };

export const hfsqlBrochurePdf = {
    href: localPublicUrl('downloads/hfsql/hfsql-us.pdf'),
    fallback: 'https://us.pcsoft-windev-webdev.com/hfsql_US.pdf',
};

export const hfsqlEbookUrl = 'https://windev.com/hfsql/ebook';

export const hfsqlWindevBrochureEn = windevBrochureEn;

export const hfsqlWebdevBrochureEn = webdevBrochureEn;

export const hfsqlWindevMobileBrochureEn = {
    href: localPublicUrl('downloads/windev-mobile/windev-mobile-brochure-en.pdf'),
    fallback: 'https://us.pcsoft-windev-webdev.com/windev-mobile-us.pdf?202305241106',
};

export const hfsqlUniversalConnectorsPdf = {
    href: localPublicUrl('downloads/visuels/universal-access-to-data.pdf'),
    fallback: 'https://us.pcsoft-windev-webdev.com/visuels/universal-access-to-data.pdf?202510211134',
};

export const hfsqlCrossPlatformDevPdf = {
    href: localPublicUrl('downloads/visuels/multi-platform-development.pdf'),
    fallback: 'https://us.pcsoft-windev-webdev.com/visuels/multi-platform-development.pdf?202510211134',
};
