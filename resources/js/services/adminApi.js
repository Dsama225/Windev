import axios from 'axios';

const adminApi = axios.create({
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

let csrfInitialized = false;

adminApi.interceptors.request.use((config) => {
    if (config.data instanceof FormData) {
        delete config.headers['Content-Type'];
    }

    return config;
});

export async function ensureAdminCsrfCookie() {
    if (csrfInitialized) {
        return;
    }

    await axios.get('/sanctum/csrf-cookie', { withCredentials: true, timeout: 10_000 });
    csrfInitialized = true;
}

export default adminApi;
