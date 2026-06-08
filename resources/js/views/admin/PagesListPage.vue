<template>
    <div class="admin-page">
        <div class="admin-page__head">
            <div>
                <h1 class="admin-page__title">Éditeur de page</h1>
                <p class="admin-muted">{{ pages.length }} page(s) catalogue public.</p>
            </div>
            <button type="button" class="admin-btn admin-btn--secondary" :disabled="syncing" @click="syncCatalog">
                {{ syncing ? 'Synchronisation…' : 'Synchroniser le catalogue' }}
            </button>
        </div>

        <p v-if="loading" class="admin-muted">Chargement…</p>
        <p v-else-if="error" class="admin-error" role="alert">{{ error }}</p>

        <table v-else class="admin-table">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Chemin</th>
                    <th>Type</th>
                    <th>Statut</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr v-for="page in pages" :key="page.route_name">
                    <td>{{ page.title }}</td>
                    <td><code>{{ page.path }}</code></td>
                    <td>{{ pageTypeMeta(page.page_type).label }}</td>
                    <td>
                        <span class="admin-badge" :class="pageStatusClass(page.status)">
                            {{ pageStatusLabel(page.status) }}
                        </span>
                    </td>
                    <td class="admin-table__actions">
                        <RouterLink :to="adminPageEditorPath(page.route_name)" class="admin-btn admin-btn--ghost admin-btn--compact">
                            Éditer
                        </RouterLink>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { pageStatusClass, pageStatusLabel, pageTypeMeta } from '../../data/adminCmsMeta';
import { adminCmsService } from '../../services/adminCmsService';
import { adminPageEditorPath } from '../../utils/adminPageRoute';

const pages = ref([]);
const loading = ref(true);
const syncing = ref(false);
const error = ref('');

async function loadPages() {
    loading.value = true;
    error.value = '';

    try {
        pages.value = await adminCmsService.listPages();

        if (!pages.value.length) {
            await adminCmsService.syncRoutes();
            pages.value = await adminCmsService.listPages();
        }
    } catch {
        error.value = 'Impossible de charger les pages.';
    } finally {
        loading.value = false;
    }
}

async function syncCatalog() {
    syncing.value = true;

    try {
        await adminCmsService.syncRoutes();
        pages.value = await adminCmsService.listPages();
    } catch {
        error.value = 'Échec de la synchronisation.';
    } finally {
        syncing.value = false;
    }
}

onMounted(loadPages);
</script>
