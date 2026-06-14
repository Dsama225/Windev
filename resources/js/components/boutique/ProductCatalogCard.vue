<template>
    <article class="boutique-card">
        <RouterLink class="boutique-card__link" :to="productDetailPath(product)">
            <div class="boutique-card__visual">
                <div class="boutique-card__logo-slot" aria-hidden="true">
                    <img
                        v-if="logoImage"
                        class="boutique-card__logo"
                        :src="logoImage.path"
                        :alt="logoImage.alt || `Logo ${product.name}`"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event)"
                    />
                </div>
                <p class="boutique-card__tagline">{{ product.tagline }}</p>
                <figure v-if="packageImage" class="boutique-card__figure">
                    <img
                        :src="packageImage.path"
                        :alt="packageImage.alt || product.name"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event)"
                    />
                </figure>
            </div>
            <div class="boutique-card__body">
                <h2 class="boutique-card__title">{{ product.name }}</h2>
                <p v-if="product.description" class="boutique-card__copy">{{ product.description }}</p>
                <p class="boutique-card__meta">
                    <span>{{ formatProductPrice(product.price) }}</span>
                    <span v-if="product.stock > 0"> · En stock</span>
                    <span v-else> · Rupture</span>
                </p>
            </div>
        </RouterLink>
    </article>
</template>

<script setup>
import { computed } from 'vue';
import { formatProductPrice, productDetailPath, resolveProductDisplayImages } from '../../utils/productCatalogDisplay';

const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
});

const displayImages = computed(() => resolveProductDisplayImages(props.product));

const logoImage = computed(() => displayImages.value.logo);

const packageImage = computed(() => displayImages.value.package);

function onImageError(event) {
    event.target.style.visibility = 'hidden';
}
</script>

<style scoped>
.boutique-card {
    height: 100%;
    padding: 0.85rem;
    border-radius: 1.1rem;
    background: var(--color-input-bg);
    border: 1px solid var(--color-border-strong);
    box-shadow: var(--shadow-glass);
    text-align: center;
}

.boutique-card__link {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: inherit;
    text-decoration: none;
}

.boutique-card__link:hover .boutique-card__title {
    color: var(--color-brand);
}

.boutique-card__visual {
    flex: 0 0 auto;
}

.boutique-card__logo-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 3.25rem;
    margin-bottom: 0.35rem;
}

.boutique-card__logo {
    display: block;
    max-width: 9.75rem;
    width: 100%;
    height: auto;
    margin: 0 auto;
}

html.theme-dark .boutique-card__logo {
    filter: brightness(0) invert(1);
}

.boutique-card__tagline {
    min-height: 2.5rem;
    margin: 0 0 0.5rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color-eyebrow);
    line-height: 1.4;
}

.boutique-card__figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 9.5rem;
    margin: 0 0 0.55rem;
}

.boutique-card__figure img {
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
    max-height: 9.5rem;
    margin: 0 auto;
    object-fit: contain;
}

.boutique-card__body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    margin-top: auto;
}

.boutique-card__title {
    margin: 0 0 0.35rem;
    font-size: 1.05rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: var(--color-brand-strong);
}

.boutique-card__copy {
    flex: 1 1 auto;
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.45;
    color: var(--color-text-secondary);
}

.boutique-card__meta {
    margin: 0.55rem 0 0;
    font-size: 0.88rem;
    font-weight: 700;
    color: var(--color-text-primary);
}
</style>
