import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { isValidAdminRole } from '../data/adminRoles';
import { adminAuthService } from '../services/adminAuthService';
import { ensureAdminCsrfCookie } from '../services/adminApi';

export const AUTH_CHECK_TIMEOUT_MS = 15_000;

function withAuthTimeout(promise, ms = AUTH_CHECK_TIMEOUT_MS) {
    return Promise.race([
        promise,
        new Promise((_, reject) => {
            setTimeout(() => {
                const error = new Error('Auth check timeout');
                error.code = 'ECONNABORTED';
                error.userMessage = 'Le serveur met trop de temps à répondre.';
                reject(error);
            }, ms);
        }),
    ]);
}

function acceptUser(me) {
    if (!me || !isValidAdminRole(me.role)) {
        return null;
    }

    return me;
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
                        await ensureAdminCsrfCookie();
                        return adminAuthService.me();
                    })(),
                );
                user.value = acceptUser(me);
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
            await ensureAdminCsrfCookie();
            const result = await adminAuthService.login(email, password, remember);
            user.value = acceptUser(result);
            checked.value = true;

            return result;
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
        logout,
    };
});
