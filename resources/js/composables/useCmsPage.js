import { ref, unref, watch } from 'vue';
import { useRoute } from 'vue-router';
import api from '../services/api';
import { encodeCmsRouteName } from '../utils/cmsPageHelpers';

export function useCmsPage(routeNameSource) {
    const page = ref(null);
    const loading = ref(false);
    const route = useRoute();

    async function load() {
        const routeName = typeof routeNameSource === 'function'
            ? routeNameSource()
            : unref(routeNameSource);

        if (!routeName) {
            page.value = null;
            return;
        }

        loading.value = true;

        try {
            const params = route.query.preview ? { preview: route.query.preview } : {};
            const { data } = await api.get(`/pages/${encodeCmsRouteName(routeName)}`, {
                params,
                skipGlobalLoading: true,
            });
            page.value = data;
        } catch {
            page.value = null;
        } finally {
            loading.value = false;
        }
    }

    watch(
        () => [
            typeof routeNameSource === 'function' ? routeNameSource() : unref(routeNameSource),
            route.query.preview,
        ],
        load,
        { immediate: true },
    );

    return { page, loading, reload: load };
}
