import { computed, ref } from 'vue';
import { defineStore } from 'pinia';

const CONSENT_KEY = 'pcsoft-cookie-consent';
const PREFERENCES_KEY = 'pcsoft-cookie-preferences';

function readPreferences() {
    try {
        const raw = localStorage.getItem(PREFERENCES_KEY);
        return raw ? JSON.parse(raw) : { analytics: false, marketing: false };
    } catch {
        return { analytics: false, marketing: false };
    }
}

export const useConsentStore = defineStore('consent', () => {
    const decision = ref(localStorage.getItem(CONSENT_KEY));
    const preferences = ref(readPreferences());

    const hasDecision = computed(() => Boolean(decision.value));

    const analyticsAllowed = computed(() => {
        if (decision.value === 'accepted') {
            return true;
        }
        if (decision.value === 'custom') {
            return Boolean(preferences.value?.analytics);
        }
        return false;
    });

    function persist() {
        if (decision.value) {
            localStorage.setItem(CONSENT_KEY, decision.value);
        }
        localStorage.setItem(PREFERENCES_KEY, JSON.stringify(preferences.value));
    }

    const acceptAll = () => {
        decision.value = 'accepted';
        preferences.value = { analytics: true, marketing: true };
        persist();
    };

    const refuseAll = () => {
        decision.value = 'refused';
        preferences.value = { analytics: false, marketing: false };
        persist();
    };

    const manage = () => {
        decision.value = 'custom';
        persist();
    };

    function setPreferences(next) {
        preferences.value = { ...preferences.value, ...next };
        decision.value = 'custom';
        persist();
    }

    return {
        decision,
        preferences,
        hasDecision,
        analyticsAllowed,
        acceptAll,
        refuseAll,
        manage,
        setPreferences,
    };
});
