import { pcsoftDocument } from './windevPageDocuments.js';

/** Liens alignés sur https://windev.com/nativeconnectors/as400.htm */

export {
    windevNewFeatures2026En as as400NewFeaturesPdf,
    windevBrochureEn as as400WindevBrochureEn,
} from './windevPageDocuments.js';

export { webdevBrochureEn as as400WebdevBrochureEn } from './webdevPageDocuments.js';

export { windevMobileBrochureEn as as400WindevMobileBrochureEn } from './windevMobilePageDocuments.js';

export const as400UniversalConnectorsPdf = pcsoftDocument(
    'downloads/visuels/universal-access-to-data.pdf',
    'https://us.pcsoft-windev-webdev.com/visuels/universal-access-to-data.pdf?202510211134',
);

export const as400CrossPlatformDevPdf = pcsoftDocument(
    'downloads/visuels/multi-platform-development.pdf',
    'https://us.pcsoft-windev-webdev.com/visuels/multi-platform-development.pdf?202510211134',
);

export const AS400_BROCHURE_ROUTE = '/software/windev/as400';

export const AS400_FEATURES_URL = 'https://windev.com/nativeconnectors/ANAS400.htm';

export const AS400_TECHNICAL_VIDEOS_URL = 'https://windev.com/pcsoft/videos.html';
