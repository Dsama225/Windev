<template>
    <div class="admin-page">
        <p v-if="loading" class="admin-muted">Chargement…</p>
        <p v-else-if="error" class="admin-error" role="alert">{{ error }}</p>

        <form v-else class="admin-form admin-form--wide" @submit.prevent="save">
            <div class="admin-page__head">
                <RouterLink :to="adminRoute('products')" class="admin-btn admin-btn--ghost">← Retour</RouterLink>
                <button type="submit" class="admin-btn admin-btn--primary" :disabled="saving">
                    {{ saving ? 'Enregistrement…' : 'Enregistrer' }}
                </button>
            </div>

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
                    <span>Catégorie</span>
                    <select v-model="form.category_id">
                        <option value="">Aucune</option>
                        <option v-for="category in categories" :key="category.id" :value="String(category.id)">
                            {{ category.name }}
                        </option>
                    </select>
                </label>
                <label class="admin-field">
                    <span>Accroche</span>
                    <input v-model="form.tagline" type="text" />
                </label>
                <label class="admin-field">
                    <span>Prix (F CFA)</span>
                    <input v-model.number="form.price" type="number" min="0" step="1" />
                </label>
                <label class="admin-field">
                    <span>Stock</span>
                    <input v-model.number="form.stock" type="number" min="0" step="1" />
                </label>
                <label class="admin-field">
                    <span>Statut</span>
                    <select v-model="form.status">
                        <option value="active">Actif</option>
                        <option value="inactive">Inactif</option>
                    </select>
                </label>
                <label class="admin-field">
                    <span>Ordre d'affichage</span>
                    <input v-model.number="form.sort_order" type="number" min="0" step="1" />
                </label>
                <label class="admin-field">
                    <span>Lien client</span>
                    <input v-model="form.link_path" type="text" placeholder="/software/windev" />
                </label>
            </div>

            <label class="admin-field">
                <span>Description</span>
                <textarea v-model="form.description" rows="5" />
            </label>

            <div class="admin-form__checks">
                <label class="admin-field admin-field--inline">
                    <input v-model="form.show_on_home" type="checkbox" />
                    <span>Afficher sur l'accueil</span>
                </label>
                <label class="admin-field admin-field--inline">
                    <input v-model="form.show_in_navbar" type="checkbox" />
                    <span>Afficher dans le menu Logiciels</span>
                </label>
            </div>

            <section v-if="isEditing" class="admin-panel">
                <h2 class="admin-panel__title">Images</h2>
                <div class="admin-form__grid">
                    <label class="admin-field">
                        <span>Fichier image</span>
                        <input ref="fileInput" type="file" accept="image/*" @change="onFileSelected" />
                    </label>
                    <label class="admin-field">
                        <span>Texte alternatif</span>
                        <input v-model="imageAlt" type="text" />
                    </label>
                    <label class="admin-field admin-field--inline">
                        <input v-model="imagePrimary" type="checkbox" />
                        <span>Image principale</span>
                    </label>
                </div>
                <button
                    type="button"
                    class="admin-btn admin-btn--secondary"
                    :disabled="!selectedFile || uploading"
                    @click="uploadImage"
                >
                    {{ uploading ? 'Envoi…' : 'Ajouter l\'image' }}
                </button>

                <ul v-if="images.length" class="admin-image-list">
                    <li v-for="image in images" :key="image.id" class="admin-image-list__item">
                        <img :src="image.path" :alt="image.alt || form.name" class="admin-image-list__thumb" />
                        <div>
                            <p>{{ image.alt || 'Sans légende' }}</p>
                            <p class="admin-muted">
                                {{ image.is_primary ? 'Principale' : 'Secondaire' }} · ordre {{ image.sort_order }}
                            </p>
                        </div>
                        <button
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--danger"
                            @click="removeImage(image)"
                        >
                            Supprimer
                        </button>
                    </li>
                </ul>
                <p v-else class="admin-muted">Aucune image pour ce produit.</p>
            </section>
            <p v-else class="admin-muted">Enregistrez le produit pour ajouter des images.</p>
        </form>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { adminProductsService } from '../../services/adminProductsService';
import { adminRoute } from '../../utils/adminPath';

const route = useRoute();
const router = useRouter();

const isEditing = computed(() => route.name === 'admin.product-editor-existing');

const productId = computed(() => {
    if (!isEditing.value) {
        return null;
    }

    const id = Number(route.params.id);

    return Number.isFinite(id) && id > 0 ? id : null;
});

const categories = ref([]);
const images = ref([]);
const loading = ref(true);
const saving = ref(false);
const uploading = ref(false);
const error = ref('');
const fileInput = ref(null);
const selectedFile = ref(null);
const imageAlt = ref('');
const imagePrimary = ref(false);

const form = ref({
    name: '',
    slug: '',
    category_id: '',
    description: '',
    tagline: '',
    price: 0,
    stock: 0,
    status: 'active',
    link_path: '',
    sort_order: 0,
    show_on_home: false,
    show_in_navbar: false,
});

function applyProduct(product) {
    form.value = {
        name: product.name ?? '',
        slug: product.slug ?? '',
        category_id: product.category_id ? String(product.category_id) : '',
        description: product.description ?? '',
        tagline: product.tagline ?? '',
        price: product.price ?? 0,
        stock: product.stock ?? 0,
        status: product.status ?? 'active',
        link_path: product.link_path ?? '',
        sort_order: product.sort_order ?? 0,
        show_on_home: Boolean(product.show_on_home),
        show_in_navbar: Boolean(product.show_in_navbar),
    };
    images.value = product.images ?? [];
}

function buildPayload() {
    return {
        ...form.value,
        category_id: form.value.category_id ? Number(form.value.category_id) : null,
        slug: form.value.slug || undefined,
    };
}

async function loadCategories() {
    categories.value = await adminProductsService.listCategories();
}

async function loadProduct() {
    if (!isEditing.value) {
        loading.value = false;
        error.value = '';
        return;
    }

    if (!productId.value) {
        loading.value = false;
        error.value = 'Identifiant produit invalide.';
        return;
    }

    loading.value = true;
    error.value = '';

    try {
        const product = await adminProductsService.getProduct(productId.value);
        applyProduct(product);
    } catch {
        error.value = 'Produit introuvable.';
    } finally {
        loading.value = false;
    }
}

async function save() {
    saving.value = true;
    error.value = '';

    try {
        const payload = buildPayload();

        if (isEditing.value) {
            const product = await adminProductsService.updateProduct(productId.value, payload);
            applyProduct(product);
        } else {
            const product = await adminProductsService.createProduct(payload);
            await router.replace({ name: 'admin.product-editor-existing', params: { id: product.id } });
            applyProduct(product);
        }
    } catch {
        error.value = 'Échec de l\'enregistrement.';
    } finally {
        saving.value = false;
    }
}

function onFileSelected(event) {
    selectedFile.value = event.target.files?.[0] ?? null;
}

async function uploadImage() {
    if (!selectedFile.value || !productId.value) {
        return;
    }

    uploading.value = true;
    error.value = '';

    try {
        await adminProductsService.uploadImage(
            productId.value,
            selectedFile.value,
            imageAlt.value,
            imagePrimary.value,
        );
        const product = await adminProductsService.getProduct(productId.value);
        images.value = product.images ?? [];
        selectedFile.value = null;
        imageAlt.value = '';
        imagePrimary.value = false;
        if (fileInput.value) {
            fileInput.value.value = '';
        }
    } catch (err) {
        const apiMessage = err.response?.data?.message;
        const validationError = err.response?.data?.errors?.file?.[0];

        error.value = validationError ?? apiMessage ?? 'Échec de l\'envoi de l\'image.';
    } finally {
        uploading.value = false;
    }
}

async function removeImage(image) {
    if (!window.confirm('Supprimer cette image ?')) {
        return;
    }

    try {
        await adminProductsService.deleteImage(productId.value, image.id);
        images.value = images.value.filter((item) => item.id !== image.id);
    } catch {
        error.value = 'Échec de la suppression de l\'image.';
    }
}

async function initPage() {
    try {
        await loadCategories();
        await loadProduct();
    } catch {
        error.value = 'Impossible de charger le formulaire.';
        loading.value = false;
    }
}

onMounted(initPage);

watch(
    () => [route.name, route.params.id],
    () => initPage(),
);
</script>

<style scoped>
.admin-form__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 0.75rem;
}

.admin-form__checks {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.admin-panel {
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--admin-border, #e5e7eb);
}

.admin-panel__title {
    margin: 0 0 1rem;
    font-size: 1.1rem;
}

.admin-image-list {
    list-style: none;
    margin: 1rem 0 0;
    padding: 0;
    display: grid;
    gap: 0.75rem;
}

.admin-image-list__item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.5rem;
    border: 1px solid var(--admin-border, #e5e7eb);
    border-radius: 0.5rem;
}

.admin-image-list__thumb {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    background: #f8fafc;
    border-radius: 0.35rem;
}
</style>
