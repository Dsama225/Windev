import axios from 'axios';
import { shouldSkipGlobalLoading, useLoadingStore } from '../stores/loading';

const api = axios.create({
    baseURL: '/api/v1',
    timeout: 15_000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true,
});

let piniaInstance = null;
let interceptorsAttached = false;
let csrfInitialized = false;

function loadingStore() {
    if (!piniaInstance) {
        return null;
    }

    return useLoadingStore(piniaInstance);
}

function trackLoadingStart(config) {
    if (shouldSkipGlobalLoading(config)) {
        return;
    }

    loadingStore()?.startRequest();
}

function trackLoadingEnd(config) {
    if (!config || shouldSkipGlobalLoading(config)) {
        return;
    }

    loadingStore()?.endRequest();
}

function enrichTimeoutError(error) {
    const isTimeout =
        error.code === 'ECONNABORTED' ||
        (typeof error.message === 'string' && error.message.toLowerCase().includes('timeout'));

    if (isTimeout) {
        error.userMessage = 'Le serveur met trop de temps à répondre.';
    }

    return error;
}

/**
 * Branche les intercepteurs de chargement global (à appeler après createPinia).
 */
export function setupApiInterceptors(pinia) {
    piniaInstance = pinia;

    if (interceptorsAttached) {
        return;
    }

    interceptorsAttached = true;

    api.interceptors.request.use(
        (config) => {
            trackLoadingStart(config);
            return config;
        },
        (error) => Promise.reject(enrichTimeoutError(error)),
    );

    api.interceptors.response.use(
        (response) => {
            trackLoadingEnd(response.config);
            return response;
        },
        (error) => {
            trackLoadingEnd(error.config);
            return Promise.reject(enrichTimeoutError(error));
        },
    );
}

export async function ensureCsrfCookie() {
    if (csrfInitialized) {
        return;
    }

    const store = loadingStore();
    store?.startRequest();

    try {
        await axios.get('/sanctum/csrf-cookie', { withCredentials: true, timeout: 10_000 });
        csrfInitialized = true;
    } catch (error) {
        csrfInitialized = false;
        throw enrichTimeoutError(error);
    } finally {
        store?.endRequest();
    }
}

export default api;
