import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

const CONSENT_KEY = 'pcsoft-cookie-consent';

export const useConsentStore = defineStore('consent', () => {
    const decision = ref(localStorage.getItem(CONSENT_KEY));
    const hasDecision = computed(() => Boolean(decision.value));

    const acceptAll = () => {
        decision.value = 'accepted';
        localStorage.setItem(CONSENT_KEY, decision.value);
    };

    const refuseAll = () => {
        decision.value = 'refused';
        localStorage.setItem(CONSENT_KEY, decision.value);
    };

    const manage = () => {
        decision.value = 'managed';
        localStorage.setItem(CONSENT_KEY, decision.value);
    };

    return {
        decision,
        hasDecision,
        acceptAll,
        refuseAll,
        manage,
    };
});
