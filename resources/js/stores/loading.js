import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

/** Clé Axios (`config.skipGlobalLoading`) pour exclure une requête du compteur global. */
export const SKIP_GLOBAL_LOADING = 'skipGlobalLoading';

export function shouldSkipGlobalLoading(config) {
    return Boolean(config?.[SKIP_GLOBAL_LOADING]);
}

export const useLoadingStore = defineStore('loading', () => {
    const pendingCount = ref(0);
    const blockingBoot = ref(false);
    const lastError = ref(null);

    const isLoading = computed(() => pendingCount.value > 0);

    function startRequest() {
        pendingCount.value += 1;
    }

    function endRequest() {
        pendingCount.value = Math.max(0, pendingCount.value - 1);
    }

    function reset() {
        pendingCount.value = 0;
    }

    function setBlockingBoot(value) {
        blockingBoot.value = Boolean(value);
    }

    function setLastError(error) {
        if (error == null) {
            lastError.value = null;
            return;
        }

        if (typeof error === 'string') {
            lastError.value = error;
            return;
        }

        const message =
            error?.response?.data?.message ??
            error?.message ??
            'Une erreur est survenue.';

        lastError.value = message;
    }

    function clearLastError() {
        lastError.value = null;
    }

    async function withLoading(fn) {
        startRequest();
        try {
            return await fn();
        } finally {
            endRequest();
        }
    }

    return {
        pendingCount,
        blockingBoot,
        lastError,
        isLoading,
        startRequest,
        endRequest,
        reset,
        setBlockingBoot,
        setLastError,
        clearLastError,
        withLoading,
    };
});
