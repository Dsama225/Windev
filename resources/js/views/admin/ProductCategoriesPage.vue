<template>
    <div class="admin-page">
        <div class="admin-page__head">
            <RouterLink :to="adminRoute('products')" class="admin-btn admin-btn--ghost">← Produits</RouterLink>
            <button type="button" class="admin-btn admin-btn--primary" @click="startCreate">Nouvelle catégorie</button>
        </div>

        <form v-if="editing" class="admin-form admin-form--wide" @submit.prevent="saveCategory">
            <h2 class="admin-panel__title">{{ editingId ? 'Modifier la catégorie' : 'Nouvelle catégorie' }}</h2>
            <div class="admin-form__grid">
                <label class="admin-field">
                    <span>Nom *</span>
                    <input v-model="form.name" type="text" required />
                </label>
                <label class="admin-field">
                    <span>Slug</span>
                    <input v-model="form.slug" type="text" placeholder="Généré automatiquement si vide" />
                </label>
                <label class="admin-field">
                    <span>Ordre</span>
                    <input v-model.number="form.sort_order" type="number" min="0" />
                </label>
                <label class="admin-field">
                    <span>Statut</span>
                    <select v-model="form.status">
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </label>
            </div>
            <label class="admin-field">
                <span>Description</span>
                <textarea v-model="form.description" rows="3" />
            </label>
            <div class="admin-page__actions">
                <button type="submit" class="admin-btn admin-btn--primary" :disabled="saving">
                    {{ saving ? 'Enregistrement…' : 'Enregistrer' }}
                </button>
                <button type="button" class="admin-btn admin-btn--ghost" @click="cancelEdit">Annuler</button>
            </div>
        </form>

        <p v-if="loading" class="admin-muted">Chargement…</p>
        <p v-else-if="error" class="admin-error" role="alert">{{ error }}</p>

        <table v-else class="admin-table">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Slug</th>
                    <th>Produits</th>
                    <th>Statut</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr v-for="category in categories" :key="category.id">
                    <td>{{ category.name }}</td>
                    <td><code>{{ category.slug }}</code></td>
                    <td>{{ category.products_count ?? 0 }}</td>
                    <td>{{ category.status === 'active' ? 'Active' : 'Inactive' }}</td>
                    <td class="admin-table__actions">
                        <button type="button" class="admin-btn admin-btn--ghost admin-btn--compact" @click="startEdit(category)">
                            Éditer
                        </button>
                        <button
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--danger"
                            @click="removeCategory(category)"
                        >
                            Supprimer
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { adminProductsService } from '../../services/adminProductsService';
import { adminRoute } from '../../utils/adminPath';

const categories = ref([]);
const loading = ref(true);
const saving = ref(false);
const error = ref('');
const editing = ref(false);
const editingId = ref(null);
const form = ref({
    name: '',
    slug: '',
    description: '',
    sort_order: 0,
    status: 'active',
});

async function loadCategories() {
    loading.value = true;
    error.value = '';

    try {
        categories.value = await adminProductsService.listCategories();
    } catch {
        error.value = 'Impossible de charger les catégories.';
    } finally {
        loading.value = false;
    }
}

function startCreate() {
    editingId.value = null;
    form.value = { name: '', slug: '', description: '', sort_order: 0, status: 'active' };
    editing.value = true;
}

function startEdit(category) {
    editingId.value = category.id;
    form.value = {
        name: category.name,
        slug: category.slug,
        description: category.description ?? '',
        sort_order: category.sort_order ?? 0,
        status: category.status ?? 'active',
    };
    editing.value = true;
}

function cancelEdit() {
    editing.value = false;
    editingId.value = null;
}

async function saveCategory() {
    saving.value = true;
    error.value = '';

    try {
        const payload = {
            ...form.value,
            slug: form.value.slug || undefined,
        };

        if (editingId.value) {
            await adminProductsService.updateCategory(editingId.value, payload);
        } else {
            await adminProductsService.createCategory(payload);
        }

        editing.value = false;
        editingId.value = null;
        await loadCategories();
    } catch {
        error.value = 'Échec de l\'enregistrement.';
    } finally {
        saving.value = false;
    }
}

async function removeCategory(category) {
    if (!window.confirm(`Supprimer la catégorie « ${category.name} » ?`)) {
        return;
    }

    try {
        await adminProductsService.deleteCategory(category.id);
        await loadCategories();
    } catch {
        error.value = 'Impossible de supprimer (catégorie peut-être utilisée).';
    }
}

onMounted(loadCategories);
</script>

<style scoped>
.admin-form__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 0.75rem;
}

.admin-panel__title {
    margin: 0 0 1rem;
    font-size: 1.1rem;
}

.admin-page__actions {
    display: flex;
    gap: 0.5rem;
}
</style>
