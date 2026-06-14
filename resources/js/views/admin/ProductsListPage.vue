<template>
    <div class="admin-page">
        <div class="admin-page__head">
            <div class="admin-page__filters">
                <label class="admin-field admin-field--inline">
                    <span>Recherche</span>
                    <input v-model="filters.q" type="search" placeholder="Nom, slug…" @input="debouncedLoad" />
                </label>
                <label class="admin-field admin-field--inline">
                    <span>Catégorie</span>
                    <select v-model="filters.category_id" @change="loadProducts">
                        <option value="">Toutes</option>
                        <option v-for="category in categories" :key="category.id" :value="String(category.id)">
                            {{ category.name }}
                        </option>
                    </select>
                </label>
                <label class="admin-field admin-field--inline">
                    <span>Statut</span>
                    <select v-model="filters.status" @change="loadProducts">
                        <option value="">Tous</option>
                        <option value="active">Actif</option>
                        <option value="inactive">Inactif</option>
                    </select>
                </label>
            </div>
            <div class="admin-page__actions">
                <RouterLink :to="adminRoute('products/categories')" class="admin-btn admin-btn--secondary">
                    Catégories
                </RouterLink>
                <RouterLink :to="adminRoute('products/new')" class="admin-btn admin-btn--primary">
                    Ajouter un produit
                </RouterLink>
            </div>
        </div>

        <p v-if="loading" class="admin-muted">Chargement…</p>
        <p v-else-if="error" class="admin-error" role="alert">{{ error }}</p>

        <table v-else class="admin-table">
            <thead>
                <tr>
                    <th>Produit</th>
                    <th>Catégorie</th>
                    <th>Prix</th>
                    <th>Stock</th>
                    <th>Statut</th>
                    <th>Visibilité</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>
                        <strong>{{ product.name }}</strong>
                        <br />
                        <code>{{ product.slug }}</code>
                    </td>
                    <td>{{ product.category?.name ?? '—' }}</td>
                    <td>{{ formatPrice(product.price) }}</td>
                    <td>{{ product.stock }}</td>
                    <td>
                        <span class="admin-badge" :class="product.status === 'active' ? 'admin-badge--success' : 'admin-badge--muted'">
                            {{ product.status === 'active' ? 'Actif' : 'Inactif' }}
                        </span>
                    </td>
                    <td class="admin-muted">
                        <span v-if="product.show_on_home">Accueil</span>
                        <span v-if="product.show_on_home && product.show_in_navbar"> · </span>
                        <span v-if="product.show_in_navbar">Menu</span>
                        <span v-if="!product.show_on_home && !product.show_in_navbar">—</span>
                    </td>
                    <td class="admin-table__actions">
                        <RouterLink
                            :to="adminRoute(`products/${product.id}`)"
                            class="admin-btn admin-btn--ghost admin-btn--compact"
                        >
                            Éditer
                        </RouterLink>
                        <button
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--danger"
                            @click="removeProduct(product)"
                        >
                            Supprimer
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <p v-if="!loading && !error && !products.length" class="admin-muted">Aucun produit trouvé.</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { adminProductsService } from '../../services/adminProductsService';
import { adminRoute } from '../../utils/adminPath';
import { formatProductPrice } from '../../utils/productCatalogDisplay';

const products = ref([]);
const categories = ref([]);
const loading = ref(true);
const error = ref('');
const filters = ref({ q: '', category_id: '', status: '' });
let debounceTimer = null;

function formatPrice(price) {
    return formatProductPrice(price);
}

async function loadProducts() {
    loading.value = true;
    error.value = '';

    try {
        const params = {};
        if (filters.value.q) {
            params.q = filters.value.q;
        }
        if (filters.value.category_id) {
            params.category_id = filters.value.category_id;
        }
        if (filters.value.status) {
            params.status = filters.value.status;
        }
        products.value = await adminProductsService.listProducts(params);
    } catch {
        error.value = 'Impossible de charger les produits.';
    } finally {
        loading.value = false;
    }
}

function debouncedLoad() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(loadProducts, 300);
}

async function loadCategories() {
    try {
        categories.value = await adminProductsService.listCategories();
    } catch {
        categories.value = [];
    }
}

async function removeProduct(product) {
    if (!window.confirm(`Supprimer le produit « ${product.name} » ?`)) {
        return;
    }

    try {
        await adminProductsService.deleteProduct(product.id);
        await loadProducts();
    } catch {
        error.value = 'Échec de la suppression.';
    }
}

onMounted(async () => {
    await loadCategories();
    await loadProducts();
});
</script>

<style scoped>
.admin-page__filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.admin-page__actions {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}
</style>
