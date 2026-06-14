<template>
    <AppNavbar />
    <main class="boutique-page pb-10">
        <BoutiqueSuiteLine />

        <section class="section-shell boutique-page__content" :aria-labelledby="product ? 'product-detail-title' : undefined">
            <nav class="boutique-page__breadcrumb" aria-label="Fil d'Ariane">
                <RouterLink class="boutique-page__breadcrumb-link" to="/boutique">Boutique</RouterLink>
                <span aria-hidden="true">/</span>
                <span>{{ product?.name ?? 'Produit' }}</span>
            </nav>

            <p v-if="loading" class="boutique-page__status">Chargement du produit…</p>

            <div v-else-if="error" class="boutique-page__card glass-frame boutique-page__empty">
                <h1 class="boutique-page__title">Produit introuvable</h1>
                <p class="boutique-page__status boutique-page__status--error" role="alert">{{ error }}</p>
                <RouterLink class="ui-button ui-button-ghost boutique-page__back-btn" to="/boutique">
                    Retour à la boutique
                </RouterLink>
            </div>

            <div v-else-if="product" class="boutique-page__layout glass-frame">
                <article class="boutique-page__main">
                    <header v-if="logoImage" class="boutique-page__product-header">
                        <figure class="boutique-page__logo-figure">
                            <img
                                class="boutique-page__logo-img"
                                :src="logoImage.path"
                                :alt="logoImage.alt || product.name"
                                loading="eager"
                                decoding="async"
                                @error="onImageError($event)"
                            />
                        </figure>
                    </header>

                    <p v-if="product.category" class="boutique-page__eyebrow">{{ product.category.name }}</p>
                    <h1 id="product-detail-title" class="boutique-page__title">{{ product.name }}</h1>
                    <p v-if="product.tagline" class="boutique-page__tagline">{{ product.tagline }}</p>

                    <section class="boutique-page__gallery" aria-label="Images du produit">
                        <figure v-if="activeImage" class="boutique-page__hero-figure">
                            <img
                                class="boutique-page__hero-image"
                                :src="activeImage.path"
                                :alt="activeImage.alt || product.name"
                                loading="eager"
                                decoding="async"
                                @error="onImageError($event)"
                            />
                        </figure>
                        <div v-if="product.images.length > 1" class="boutique-page__thumbs">
                            <button
                                v-for="image in product.images"
                                :key="image.id"
                                type="button"
                                class="boutique-page__thumb"
                                :class="{ 'boutique-page__thumb--active': activeImage?.id === image.id }"
                                :aria-label="image.alt || product.name"
                                @click="activeImageId = image.id"
                            >
                                <img
                                    :src="image.path"
                                    :alt="image.alt || product.name"
                                    loading="lazy"
                                    decoding="async"
                                    @error="onImageError($event)"
                                />
                            </button>
                        </div>
                    </section>

                    <p v-if="product.description" class="boutique-page__description">{{ product.description }}</p>
                </article>

                <aside class="boutique-page__sidebar" aria-label="Informations produit">
                    <p class="boutique-page__price">{{ formatPrice(product.price) }}</p>

                    <p
                        class="ui-badge boutique-page__stock"
                        :class="{ 'boutique-page__stock--out': product.stock <= 0 }"
                    >
                        {{ product.stock > 0 ? 'En stock' : 'Rupture de stock' }}
                    </p>
                    <p v-if="product.stock > 0" class="boutique-page__stock-qty">
                        {{ product.stock }} unité(s) disponible(s)
                    </p>

                    <div class="boutique-page__actions">
                        <button
                            type="button"
                            class="ui-button ui-button-primary boutique-page__action"
                            :disabled="product.stock <= 0"
                            @click="orderModalOpen = true"
                        >
                            Commander
                        </button>
                        <RouterLink
                            v-if="product.link_path"
                            class="ui-button ui-button-ghost boutique-page__action"
                            :to="product.link_path"
                        >
                            En savoir plus
                        </RouterLink>
                        <RouterLink class="ui-button ui-button-ghost boutique-page__action" to="/software/subscribe">
                            S'abonner
                        </RouterLink>
                        <RouterLink class="boutique-page__text-link" to="/boutique">← Tous les produits</RouterLink>
                    </div>

                    <div class="boutique-page__sidebar-block">
                        <h2 class="boutique-page__sidebar-heading">Besoin d'aide ?</h2>
                        <p class="boutique-page__sidebar-text">
                            Contactez notre équipe commerciale pour obtenir un devis ou des informations sur les offres
                            d'abonnement.
                        </p>
                        <RouterLink class="boutique-page__text-link" to="/pc-soft/contact">
                            Formulaire de contact
                        </RouterLink>
                    </div>
                </aside>
            </div>
        </section>
    </main>
    <AppFooter />

    <ProductOrderModal
        :open="orderModalOpen"
        :product-slug="product?.slug ?? ''"
        :product-name="product?.name ?? ''"
        @close="orderModalOpen = false"
    />
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import AppFooter from '../components/AppFooter.vue';
import AppNavbar from '../components/AppNavbar.vue';
import BoutiqueSuiteLine from '../components/boutique/BoutiqueSuiteLine.vue';
import ProductOrderModal from '../components/boutique/ProductOrderModal.vue';
import { useProductDetail } from '../composables/useProductDetail';
import { formatProductPrice } from '../utils/productCatalogDisplay';

const route = useRoute();
const slug = computed(() => route.params.slug);
const orderModalOpen = ref(false);

const { product, loading, error, activeImage, activeImageId, logoImage } = useProductDetail(slug);

function formatPrice(price) {
    return formatProductPrice(price);
}

function onImageError(event) {
    event.target.style.visibility = 'hidden';
}
</script>

<style scoped>
.boutique-page {
    color: var(--color-text-primary);
}

.boutique-page__content {
    margin-top: 0.45rem;
}

.boutique-page__breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.85rem;
    font-size: 0.88rem;
    color: var(--color-text-secondary);
}

.boutique-page__breadcrumb-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.boutique-page__breadcrumb-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.boutique-page__card,
.boutique-page__layout {
    padding: clamp(1rem, 2vw, 1.45rem);
}

.boutique-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.8rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    align-items: start;
}

.boutique-page__product-header {
    margin-bottom: 0.75rem;
}

.boutique-page__logo-figure {
    margin: 0;
}

.boutique-page__logo-img {
    display: block;
    max-width: min(100%, 14rem);
    height: auto;
}

html.theme-dark .boutique-page__logo-img {
    filter: brightness(0) invert(1);
}

.boutique-page__eyebrow {
    margin: 0 0 0.35rem;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-eyebrow);
}

.boutique-page__title {
    margin: 0 0 0.5rem;
    font-size: clamp(1.25rem, 2.5vw, 1.65rem);
    font-weight: 800;
    line-height: 1.25;
    color: var(--color-brand-strong);
    text-transform: uppercase;
}

.boutique-page__tagline {
    margin: 0 0 1rem;
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--color-eyebrow);
}

.boutique-page__gallery {
    margin-bottom: 1.25rem;
}

.boutique-page__hero-figure {
    margin: 0 0 0.75rem;
    padding: 0.75rem;
    border-radius: var(--radius-lg);
    background: var(--color-input-bg);
    border: 1px solid var(--color-border-strong);
}

.boutique-page__hero-image {
    display: block;
    width: 100%;
    max-height: 16rem;
    margin: 0 auto;
    object-fit: contain;
}

.boutique-page__thumbs {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.boutique-page__thumb {
    width: 4.25rem;
    height: 4.25rem;
    padding: 0.25rem;
    border: 2px solid var(--color-border-strong);
    border-radius: var(--radius-lg);
    background: var(--color-input-bg);
    cursor: pointer;
}

.boutique-page__thumb--active {
    border-color: var(--color-brand);
}

.boutique-page__thumb img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.boutique-page__description {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
    white-space: pre-line;
}

.boutique-page__sidebar {
    display: grid;
    gap: 0.65rem;
    align-content: start;
    padding: clamp(0.85rem, 1.5vw, 1.1rem);
    border-radius: var(--radius-lg);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    border: 1px solid var(--color-border);
}

.boutique-page__price {
    margin: 0;
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--color-brand-strong);
}

.boutique-page__stock {
    width: fit-content;
    margin: 0;
}

.boutique-page__stock--out {
    border-color: color-mix(in oklab, #b91c1c 35%, transparent);
    color: #b91c1c;
}

.boutique-page__stock-qty {
    margin: 0;
    font-size: 0.85rem;
    color: var(--color-text-secondary);
}

.boutique-page__actions {
    display: grid;
    gap: 0.55rem;
    margin-top: 0.35rem;
}

.boutique-page__action {
    width: 100%;
    text-decoration: none;
}

.boutique-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
    font-size: 0.9rem;
}

.boutique-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.boutique-page__sidebar-block {
    margin-top: 0.75rem;
    padding-top: 0.85rem;
    border-top: 1px solid var(--color-border);
}

.boutique-page__sidebar-heading {
    margin: 0 0 0.45rem;
    font-size: 0.95rem;
    font-weight: 700;
}

.boutique-page__sidebar-text {
    margin: 0 0 0.55rem;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.boutique-page__status {
    margin: 0;
    text-align: center;
    color: var(--color-text-secondary);
}

.boutique-page__status--error {
    color: #b91c1c;
}

.boutique-page__empty {
    max-width: 36rem;
    margin-inline: auto;
    text-align: center;
}

.boutique-page__back-btn {
    margin-top: 0.75rem;
    text-decoration: none;
}

@media (max-width: 768px) {
    .boutique-page__layout {
        grid-template-columns: 1fr;
    }
}
</style>
