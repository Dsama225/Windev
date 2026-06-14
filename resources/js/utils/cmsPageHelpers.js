export function encodeCmsRouteName(routeName) {
    return String(routeName).replace(/\./g, '--');
}

export function hasCmsPayload(page) {
    if (!page?.payload || typeof page.payload !== 'object') {
        return false;
    }

    return Object.keys(page.payload).some((key) => {
        const value = page.payload[key];

        if (value === null || value === undefined || value === '') {
            return false;
        }

        if (Array.isArray(value)) {
            return value.length > 0;
        }

        if (typeof value === 'object') {
            return Object.keys(value).length > 0;
        }

        return true;
    });
}

export function cmsAlert(page) {
    return page?.payload?.alert ?? null;
}

export function cmsHero(page) {
    return page?.payload?.hero ?? null;
}

export function cmsComponents(page) {
    return page?.payload?.components ?? [];
}

export function cmsSections(page) {
    return page?.payload?.sections ?? [];
}

export function cmsPublicationBody(page) {
    return page?.payload?.body ?? '';
}

export function pickCmsOrFallback(cmsValue, fallback) {
    if (cmsValue === null || cmsValue === undefined || cmsValue === '') {
        return fallback;
    }

    if (Array.isArray(cmsValue) && cmsValue.length === 0) {
        return fallback;
    }

    return cmsValue;
}

export function resolveCmsDocumentTitle(page, fallbackTitle = '') {
    const cmsTitle = page?.title?.trim();

    if (!cmsTitle) {
        return fallbackTitle;
    }

    return cmsTitle;
}
