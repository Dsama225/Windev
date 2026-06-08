export function resolveSection(route) {
    const name = route.name ?? '';
    const path = route.path ?? '';

    if (name === 'home' || path === '/') return 'home';
    if (path.startsWith('/workspace')) return 'workspace';
    if (path.startsWith('/software/subscribe')) return 'subscribe';
    if (path.startsWith('/software/native-connectors')) return 'native-connectors';
    if (path.startsWith('/software/')) return 'software-suite';
    if (path.startsWith('/download')) return 'download';
    if (path.startsWith('/pc-soft')) return 'pcsoft';

    return 'other';
}

export function shouldTrackPageView(route) {
    if (!route.name) {
        return false;
    }

    return Boolean(route.matched.at(-1)?.components?.default);
}

export function detectDeviceType() {
    const width = window.innerWidth;
    if (width < 768) return 'mobile';
    if (width < 1024) return 'tablet';
    return 'desktop';
}

export function detectScreenBucket() {
    const width = window.innerWidth;
    if (width < 768) return '0-767';
    if (width < 1024) return '768-1023';
    if (width < 1440) return '1024-1439';
    return '1440+';
}

export function detectBrowserFamily() {
    const ua = navigator.userAgent;
    if (ua.includes('Firefox')) return 'Firefox';
    if (ua.includes('Edg')) return 'Edge';
    if (ua.includes('Chrome')) return 'Chrome';
    if (ua.includes('Safari')) return 'Safari';
    return 'Other';
}
