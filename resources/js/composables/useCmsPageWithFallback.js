import { computed, unref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { isCmsRouteIntegrated } from '../data/cmsPublicRollout';
import {
    cmsAlert,
    cmsComponents,
    cmsHero,
    cmsPublicationBody,
    cmsSections,
    hasCmsPayload,
    pickCmsOrFallback,
    resolveCmsDocumentTitle,
} from '../utils/cmsPageHelpers';
import { useCmsPage } from './useCmsPage';

function resolveRouteName(routeNameSource) {
    return typeof routeNameSource === 'function' ? routeNameSource() : unref(routeNameSource);
}

/**
 * Charge le CMS uniquement si la route est dans CMS_PUBLIC_ROUTES (liste blanche).
 * Les vues conservent leur rendu statique tant que la route n'est pas activée.
 */
export function useCmsPageWithFallback(routeNameSource, options = {}) {
    const route = useRoute();
    const resolvedRouteName = computed(() => resolveRouteName(routeNameSource));

    const integrationEnabled = computed(() => {
        if (options.enabled === false) {
            return false;
        }

        const routeName = resolvedRouteName.value;

        if (!routeName) {
            return false;
        }

        if (options.forceEnabled === true) {
            return true;
        }

        return isCmsRouteIntegrated(routeName);
    });

    const activeRouteName = computed(() => (integrationEnabled.value ? resolvedRouteName.value : null));

    const { page, loading, reload } = useCmsPage(activeRouteName);

    const hasCmsContent = computed(() => integrationEnabled.value && hasCmsPayload(page.value));
    const isPreview = computed(() => Boolean(route.query.preview));

    const alert = computed(() => cmsAlert(page.value));
    const hero = computed(() => cmsHero(page.value));
    const components = computed(() => cmsComponents(page.value));
    const sections = computed(() => cmsSections(page.value));
    const publicationBody = computed(() => cmsPublicationBody(page.value));

    function pickField(cmsValue, fallback) {
        if (!integrationEnabled.value || !hasCmsContent.value) {
            return fallback;
        }

        return pickCmsOrFallback(cmsValue, fallback);
    }

    function applyDocumentTitle(fallbackTitle = '') {
        watch(
            () => [integrationEnabled.value, page.value?.title],
            () => {
                if (!integrationEnabled.value) {
                    document.title = fallbackTitle;
                    return;
                }

                document.title = resolveCmsDocumentTitle(page.value, fallbackTitle);
            },
            { immediate: true },
        );
    }

    return {
        page,
        loading,
        reload,
        integrationEnabled,
        hasCmsContent,
        isPreview,
        alert,
        hero,
        components,
        sections,
        publicationBody,
        pickField,
        applyDocumentTitle,
    };
}
