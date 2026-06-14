import { onMounted, ref } from 'vue';
import { productsService } from '../services/productsService';

export function useProductsCatalog(placement = null) {
    const products = ref([]);
    const loading = ref(false);
    const error = ref('');

    async function load(extraParams = {}) {
        loading.value = true;
        error.value = '';

        try {
            const params = { ...extraParams };
            if (placement) {
                params.placement = placement;
            }
            products.value = await productsService.list(params);
        } catch {
            products.value = [];
            error.value = 'Impossible de charger les produits.';
        } finally {
            loading.value = false;
        }
    }

    onMounted(() => load());

    return { products, loading, error, reload: load };
}
