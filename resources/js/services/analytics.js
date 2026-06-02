import api from './api';
import { SKIP_GLOBAL_LOADING } from '../stores/loading';
import { useConsentStore } from '../stores/consent';
import {
    detectBrowserFamily,
    detectDeviceType,
    detectScreenBucket,
    resolveSection,
    shouldTrackPageView,
} from '../utils/analytics';

const VISITOR_COOKIE = 'pcsoft_vid';
const SESSION_COOKIE = 'pcsoft_sid';
const BATCH_INTERVAL_MS = 5000;

let queue = [];
let flushTimer = null;
let sessionStarted = false;
let pageCount = 0;
let sessionStartedAt = null;
let enabled = null;
let initialized = false;

function readCookie(name) {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name, value, maxAgeSeconds) {
    const secure = window.location.protocol === 'https:' ? '; Secure' : '';
    document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax${secure}`;
}

function generateUuid() {
    if (crypto.randomUUID) {
        return crypto.randomUUID();
    }

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function ensureIds() {
    let visitorId = readCookie(VISITOR_COOKIE);
    if (!visitorId) {
        visitorId = generateUuid();
        writeCookie(VISITOR_COOKIE, visitorId, 60 * 60 * 24 * 395);
    }

    let sessionId = readCookie(SESSION_COOKIE);
    if (!sessionId) {
        sessionId = generateUuid();
        writeCookie(SESSION_COOKIE, sessionId, 60 * 30);
    }

    return { visitorId, sessionId };
}

function clearAnalyticsCookies() {
    document.cookie = `${VISITOR_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
    document.cookie = `${SESSION_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax`;
}

async function checkEnabled() {
    if (enabled !== null) {
        return enabled;
    }

    try {
        const { data } = await api.get('/analytics/health', { [SKIP_GLOBAL_LOADING]: true });
        enabled = Boolean(data.data?.enabled);
    } catch {
        enabled = false;
    }

    return enabled;
}

function scheduleFlush() {
    if (flushTimer) {
        return;
    }

    flushTimer = window.setTimeout(async () => {
        flushTimer = null;
        await flush();
    }, BATCH_INTERVAL_MS);
}

async function flush() {
    if (queue.length === 0) {
        return;
    }

    const consent = useConsentStore();
    if (!consent.analyticsAllowed) {
        queue = [];
        return;
    }

    if (!(await checkEnabled())) {
        queue = [];
        return;
    }

    const events = [...queue];
    queue = [];

    const { visitorId, sessionId } = ensureIds();

    try {
        await api.post(
            '/analytics/events',
            {
                visitor_id: visitorId,
                session_id: sessionId,
                events,
            },
            { [SKIP_GLOBAL_LOADING]: true },
        );
    } catch {
        queue.unshift(...events);
    }
}

function enqueue(event) {
    queue.push(event);
    scheduleFlush();
}

function startSessionIfNeeded() {
    if (sessionStarted) {
        return;
    }

    sessionStarted = true;
    sessionStartedAt = Date.now();
    pageCount = 0;

    enqueue({
        type: 'session_start',
        timestamp: new Date().toISOString(),
        meta: {
            device_type: detectDeviceType(),
            browser_family: detectBrowserFamily(),
            screen_bucket: detectScreenBucket(),
        },
    });
}

function endSession() {
    if (!sessionStarted) {
        return;
    }

    enqueue({
        type: 'session_end',
        timestamp: new Date().toISOString(),
        duration_seconds: sessionStartedAt ? Math.round((Date.now() - sessionStartedAt) / 1000) : 0,
        page_count: pageCount,
    });

    sessionStarted = false;
    flush();
}

export function trackPageView(route) {
    const consent = useConsentStore();
    if (!consent.analyticsAllowed || !shouldTrackPageView(route)) {
        return;
    }

    startSessionIfNeeded();
    pageCount += 1;

    enqueue({
        type: 'page_view',
        timestamp: new Date().toISOString(),
        path: route.path,
        route_name: route.name,
        section: resolveSection(route),
        referrer: document.referrer || null,
        meta: {
            device_type: detectDeviceType(),
            browser_family: detectBrowserFamily(),
            screen_bucket: detectScreenBucket(),
        },
    });
}

export function trackNavigationClick({ label, href, menu }) {
    const consent = useConsentStore();
    if (!consent.analyticsAllowed) {
        return;
    }

    startSessionIfNeeded();

    enqueue({
        type: 'navigation_click',
        timestamp: new Date().toISOString(),
        path: window.location.pathname,
        meta: {
            label,
            href,
            menu,
            device_type: detectDeviceType(),
            browser_family: detectBrowserFamily(),
        },
    });
}

export function initAnalytics(consentStore) {
    if (initialized) {
        return;
    }

    initialized = true;

    if (consentStore.analyticsAllowed) {
        checkEnabled();
    } else if (consentStore.decision === 'refused' || consentStore.decision === 'custom') {
        clearAnalyticsCookies();
    }

    window.addEventListener('beforeunload', endSession);

    consentStore.$subscribe((_mutation, state) => {
        const allowed = state.decision === 'accepted' || (state.decision === 'custom' && state.preferences?.analytics);
        if (allowed) {
            checkEnabled();
            return;
        }

        queue = [];
        clearAnalyticsCookies();
        sessionStarted = false;
    });
}
