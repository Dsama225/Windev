import { localPublicUrl } from '../utils/pcsoftImages.js';
import { NEW_FEATURES_EBOOK_EN, NEW_FEATURES_PDF_EN } from './newFeatures2026Content.js';

/** PDF brochures and ebooks aligned with https://windev.com/windev */

/** @param {string} publicPath @param {string} officialUrl */
export function pcsoftDocument(publicPath, officialUrl) {
    return {
        href: localPublicUrl(publicPath),
        fallback: officialUrl,
    };
}

export const windevNewFeatures2026En = pcsoftDocument(
    'downloads/windev/wx2026-features-en.pdf',
    NEW_FEATURES_PDF_EN,
);

export const windevNewFeatures2026Fr = pcsoftDocument(
    'downloads/windev/wx2026-features-fr.pdf',
    'https://fr.pcsoft-windev-webdev.com/brochure-WX2026.pdf?202510201505',
);

export const windevNewFeatures2026EbookEn = NEW_FEATURES_EBOOK_EN;

export const windevNewFeatures2026EbookFr = 'https://pcsoft.fr/annonce2025/ebook';

export const windevBrochureEn = pcsoftDocument(
    'downloads/windev/windev-brochure-en.pdf',
    'https://us.pcsoft-windev-webdev.com/windev-us.pdf?202305241106',
);

export const windevBrochureFr = pcsoftDocument(
    'downloads/windev/windev-brochure-fr.pdf',
    'https://fr.pcsoft-windev-webdev.com/brochureWD2024.pdf?202305231154',
);

export const windevBrochureEs = pcsoftDocument(
    'downloads/windev/windev-brochure-es.pdf',
    'https://es.pcsoft-windev-webdev.com/windev-es.pdf?202305241106',
);

export const windevBrochureEbookEn = 'https://windev.com/windev/ebook';

export const windevBrochureEbookFr = 'https://pcsoft.fr/windev/ebook';

export const windevBrochureEbookEs = 'https://windev.es/windev/ebook';
