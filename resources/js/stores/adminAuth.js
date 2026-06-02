import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { adminAuthService } from '../services/adminAuthService';
import { ensureCsrfCookie } from '../services/api';

export const AUTH_CHECK_TIMEOUT_MS = 15_000;

function withAuthTimeout(promise, ms = AUTH_CHECK_TIMEOUT_MS) {
    return Promise.race([
        promise,
        new Promise((_, reject) => {
            setTimeout(() => {
                const error = new Error('Auth check timeout');
                error.code = 'ECONNABORTED';
                error.userMessage = 'Le serveur met trop de temps a repondre.';
                reject(error);
            }, ms);
        }),
    ]);
}

let fetchMePromise = null;

export const useAdminAuthStore = defineStore('adminAuth', () => {
    const user = ref(null);
    const loading = ref(false);
    const checked = ref(false);

    const isAuthenticated = computed(() => Boolean(user.value));
    const needsAuthCheck = computed(() => !checked.value);

    async function fetchMe() {
        if (fetchMePromise) {
            return fetchMePromise;
        }

        loading.value = true;

        fetchMePromise = (async () => {
            try {
                const me = await withAuthTimeout(
                    (async () => {
                        await ensureCsrfCookie();
                        return adminAuthService.me();
                    })(),
                );
                user.value = me ?? null;
            } catch {
                user.value = null;
            } finally {
                loading.value = false;
                checked.value = true;
                fetchMePromise = null;
            }
        })();

        return fetchMePromise;
    }

    async function login(email, password, remember = false) {
        loading.value = true;
        try {
            await ensureCsrfCookie();
            const result = await adminAuthService.login(email, password, remember);
            if (!result.mfa_required) {
                user.value = result;
                checked.value = true;
            }
            return result;
        } finally {
            loading.value = false;
        }
    }

    async function verifyMfa(challengeToken, code) {
        loading.value = true;
        try {
            await ensureCsrfCookie();
            user.value = await adminAuthService.verifyMfa(challengeToken, code);
            checked.value = true;
            return user.value;
        } finally {
            loading.value = false;
        }
    }

    async function logout() {
        loading.value = true;
        try {
            await adminAuthService.logout();
        } finally {
            user.value = null;
            loading.value = false;
            checked.value = true;
        }
    }

    return {
        user,
        loading,
        checked,
        isAuthenticated,
        needsAuthCheck,
        fetchMe,
        login,
        verifyMfa,
        logout,
    };
});
