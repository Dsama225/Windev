import { ref } from 'vue';
import { defineStore } from 'pinia';

const FALLBACK_REDIRECTS = {
    'support.online-help': 'https://help.windev.com/en-US/',
    'support.forums': 'https://forum.pcsoft.fr/en-US/index.awp',
    'support.faq': 'https://faq.windev.com/index.awp',
    'support.online-repository': 'https://repository.windev.com/',
};

export const useRedirectStore = defineStore('redirects', () => {
    const map = ref({ ...FALLBACK_REDIRECTS });

    function urlForRoute(routeName) {
        return map.value?.[routeName] ?? FALLBACK_REDIRECTS[routeName] ?? null;
    }

    function hydrate(redirects) {
        if (redirects && typeof redirects === 'object') {
            map.value = { ...FALLBACK_REDIRECTS, ...redirects };
        }
    }

    function setRouteUrl(routeName, url) {
        map.value = { ...map.value, [routeName]: url || null };
    }

    function setRoutes(payload = {}) {
        map.value = { ...map.value, ...payload };
    }

    return { map, urlForRoute, hydrate, setRouteUrl, setRoutes };
});
