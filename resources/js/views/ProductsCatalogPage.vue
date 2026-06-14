<template>
    <AppNavbar />
    <main class="boutique-page pb-10">
        <BoutiqueSuiteLine />

        <section class="section-shell boutique-page__hero" aria-label="Carrousel WINDEV Suite">
            <HomeHeroCarousel />
        </section>

        <section class="section-shell boutique-page__content" aria-labelledby="boutique-title">
            <div class="boutique-page__card glass-frame">
                <header class="boutique-page__header">
                    <p class="boutique-page__eyebrow">Catalogue</p>
                    <h1 id="boutique-title" class="boutique-page__title">Boutique PC SOFT</h1>
                    <p class="boutique-page__lead">
                        Découvrez l'ensemble des produits disponibles sur la plateforme.
                    </p>
                </header>

                <div class="boutique-page__layout">
                    <aside class="boutique-page__sidebar" aria-label="Filtrer par catégorie">
                        <h2 class="boutique-page__sidebar-heading">Catégories</h2>
                        <ul class="boutique-page__category-list">
                            <li>
                                <button
                                    type="button"
                                    class="boutique-page__category-btn"
                                    :class="{ 'boutique-page__category-btn--active': !selectedCategory }"
                                    @click="selectCategory('')"
                                >
                                    Toutes les catégories
                                </button>
                            </li>
                            <li v-for="category in categoryOptions" :key="category.slug">
                                <button
                                    type="button"
                                    class="boutique-page__category-btn"
                                    :class="{ 'boutique-page__category-btn--active': selectedCategory === category.slug }"
                                    @click="selectCategory(category.slug)"
                                >
                                    {{ category.name }}
                                </button>
                            </li>
                        </ul>
                    </aside>

                    <div class="boutique-page__main">
                        <p v-if="loading" class="boutique-page__status">Chargement du catalogue…</p>
                        <p v-else-if="error" class="boutique-page__status boutique-page__status--error" role="alert">{{ error }}</p>

                        <div v-else-if="products.length" class="boutique-page__grid" role="list">
                            <ProductCatalogCard
                                v-for="item in products"
                                :key="item.slug"
                                role="listitem"
                                :product="item"
                            />
                        </div>

                        <p v-else class="boutique-page__status">Aucun produit disponible.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AppFooter from '../components/AppFooter.vue';
import AppNavbar from '../components/AppNavbar.vue';
import BoutiqueSuiteLine from '../components/boutique/BoutiqueSuiteLine.vue';
import HomeHeroCarousel from '../components/HomeHeroCarousel.vue';
import ProductCatalogCard from '../components/boutique/ProductCatalogCard.vue';
import { useProductsCatalog } from '../composables/useProductsCatalog';
import { productsService } from '../services/productsService';

const { products, loading, error, reload } = useProductsCatalog();
const categoryOptions = ref([]);
const selectedCategory = ref('');

function selectCategory(slug) {
    selectedCategory.value = slug;
    reload({ category: slug || undefined });
}

onMounted(async () => {
    try {
        categoryOptions.value = await productsService.categories();
    } catch {
        categoryOptions.value = [];
    }

    document.title = 'Boutique — PC SOFT';
});
</script>

<style scoped>
.boutique-page {
    color: var(--color-text-primary);
}

.boutique-page__hero {
    margin-bottom: 0.85rem;
}

.boutique-page__content {
    margin-top: 0;
}

.boutique-page__card {
    padding: clamp(1rem, 2vw, 1.6rem);
}

.boutique-page__header {
    text-align: center;
    margin-bottom: 1.25rem;
}

.boutique-page__eyebrow {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-eyebrow);
}

.boutique-page__title {
    margin: 0.35rem 0 0.5rem;
    font-size: clamp(1.65rem, 4vw, 2.35rem);
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.03em;
    color: var(--color-brand-strong);
    text-transform: uppercase;
}

.boutique-page__lead {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.boutique-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.5rem);
    grid-template-columns: minmax(200px, 240px) minmax(0, 1fr);
    align-items: start;
}

.boutique-page__sidebar {
    padding: clamp(0.85rem, 1.5vw, 1.1rem);
    border-radius: var(--radius-lg);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    border: 1px solid var(--color-border);
}

.boutique-page__sidebar-heading {
    margin: 0 0 0.75rem;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-eyebrow);
}

.boutique-page__category-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.35rem;
}

.boutique-page__category-btn {
    width: 100%;
    padding: 0.55rem 0.7rem;
    border: 1px solid transparent;
    border-radius: var(--radius-lg);
    background: transparent;
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
}

.boutique-page__category-btn:hover {
    color: var(--color-brand);
    background: color-mix(in oklab, var(--color-brand) 8%, transparent);
}

.boutique-page__category-btn--active {
    color: var(--color-brand-strong);
    background: color-mix(in oklab, var(--color-brand) 12%, transparent);
    border-color: color-mix(in oklab, var(--color-brand) 30%, transparent);
}

.boutique-page__main {
    min-width: 0;
}

.boutique-page__grid {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: stretch;
}

.boutique-page__status {
    margin: 0;
    text-align: center;
    color: var(--color-text-secondary);
}

.boutique-page__status--error {
    color: #b91c1c;
}

@media (min-width: 1100px) {
    .boutique-page__grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media (max-width: 768px) {
    .boutique-page__layout {
        grid-template-columns: 1fr;
    }

    .boutique-page__category-list {
        grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
    }

    .boutique-page__category-btn {
        text-align: center;
    }
}

@media (max-width: 640px) {
    .boutique-page__grid {
        grid-template-columns: 1fr;
    }
}
</style>
