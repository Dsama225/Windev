import { computed, ref, watch } from 'vue';
import { productsService } from '../services/productsService';

export function useProductDetail(slugSource) {
    const product = ref(null);
    const loading = ref(true);
    const error = ref('');
    const activeImageId = ref(null);

    const activeImage = computed(() => {
        if (!product.value?.images?.length) {
            return product.value?.primary_image ?? null;
        }

        return product.value.images.find((image) => image.id === activeImageId.value)
            ?? product.value.primary_image
            ?? product.value.images[0];
    });

    const logoImage = computed(() => {
        if (!product.value) {
            return null;
        }

        const images = product.value.images ?? [];
        return images.find((image) => !image.is_primary) ?? null;
    });

    async function load(slug) {
        if (!slug) {
            return;
        }

        loading.value = true;
        error.value = '';
        product.value = null;
        activeImageId.value = null;

        try {
            const data = await productsService.show(slug);
            product.value = data;
            activeImageId.value = data.primary_image?.id ?? data.images?.[0]?.id ?? null;
            document.title = `${data.name} — Boutique PC SOFT`;
        } catch {
            error.value = 'Ce produit n\'existe pas ou n\'est plus disponible.';
            document.title = 'Produit introuvable — PC SOFT';
        } finally {
            loading.value = false;
        }
    }

    watch(
        slugSource,
        (slug) => load(slug),
        { immediate: true },
    );

    return {
        product,
        loading,
        error,
        activeImage,
        activeImageId,
        logoImage,
        reload: load,
    };
}
