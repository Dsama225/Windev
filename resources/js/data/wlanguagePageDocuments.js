import { pcsoftDocument } from './windevPageDocuments.js';

/** Liens PDF alignés sur les autres pages produit (HFSQL, WDMSG). */

export {
    windevNewFeatures2026En as wlanguageNewFeaturesPdf,
    windevBrochureEn as wlanguageWindevBrochureEn,
} from './windevPageDocuments.js';

export { webdevBrochureEn as wlanguageWebdevBrochureEn } from './webdevPageDocuments.js';

export { windevMobileBrochureEn as wlanguageWindevMobileBrochureEn } from './windevMobilePageDocuments.js';

export const wlanguageUniversalConnectorsPdf = pcsoftDocument(
    'downloads/visuels/universal-access-to-data.pdf',
    'https://us.pcsoft-windev-webdev.com/visuels/universal-access-to-data.pdf?202510211134',
);

export const wlanguageCrossPlatformDevPdf = pcsoftDocument(
    'downloads/visuels/multi-platform-development.pdf',
    'https://us.pcsoft-windev-webdev.com/visuels/multi-platform-development.pdf?202510211134',
);

export const WLANGUAGE_TECHNICAL_VIDEOS_URL = 'https://windev.com/pcsoft/videos.html';
