import { pcsoftDocument } from './windevPageDocuments.js';

/** Liens PDF alignés sur https://windev.com/windev/wdetatu.htm */

export {
    windevNewFeatures2026En as reportsQueriesNewFeaturesPdf,
    windevBrochureEn as reportsQueriesWindevBrochureEn,
} from './windevPageDocuments.js';

export { webdevBrochureEn as reportsQueriesWebdevBrochureEn } from './webdevPageDocuments.js';

export { windevMobileBrochureEn as reportsQueriesWindevMobileBrochureEn } from './windevMobilePageDocuments.js';

export const reportsQueriesUniversalConnectorsPdf = pcsoftDocument(
    'downloads/visuels/universal-access-to-data.pdf',
    'https://us.pcsoft-windev-webdev.com/visuels/universal-access-to-data.pdf?202510211134',
);

export const reportsQueriesCrossPlatformDevPdf = pcsoftDocument(
    'downloads/visuels/multi-platform-development.pdf',
    'https://us.pcsoft-windev-webdev.com/visuels/multi-platform-development.pdf?202510211134',
);

export const REPORTS_QUERIES_TECHNICAL_VIDEOS_URL = 'https://windev.com/pcsoft/videos.html';
