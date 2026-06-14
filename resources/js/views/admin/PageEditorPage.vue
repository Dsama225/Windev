<template>
    <div class="admin-page admin-page-editor">
        <p v-if="loading" class="admin-muted">Chargement de la page…</p>
        <p v-else-if="error" class="admin-error" role="alert">{{ error }}</p>

        <template v-else>
            <div class="admin-page-editor__head">
                <RouterLink :to="adminRoute('pages')" class="admin-page-editor__back">← Retour aux pages</RouterLink>
                <div class="admin-page-editor__head-meta">
                    <div>
                        <h1 class="admin-page-editor__title">{{ page.title }}</h1>
                        <p class="admin-page-editor__path">
                            <code>{{ page.path }}</code>
                            · {{ pageTypeMeta(page.page_type).label }}
                            · <span class="admin-badge" :class="pageStatusClass(form.status)">{{ pageStatusLabel(form.status) }}</span>
                        </p>
                        <p v-if="pageTypeMeta(page.page_type).hint" class="admin-muted admin-page-editor__type-hint">
                            {{ pageTypeMeta(page.page_type).hint }}
                        </p>
                    </div>
                    <div class="admin-table__actions">
                        <a :href="page.path" target="_blank" rel="noopener" class="admin-btn admin-btn--ghost admin-btn--compact">Voir sur le site</a>
                        <button type="button" class="admin-btn admin-btn--secondary admin-btn--compact" @click="preview">Prévisualiser</button>
                        <button type="button" class="admin-btn admin-btn--primary admin-btn--compact" :disabled="saving" @click="save">Enregistrer</button>
                    </div>
                </div>
            </div>

            <nav class="admin-filter-tabs admin-page-editor__tabs" aria-label="Sections éditeur">
                <button
                    v-for="tab in tabs"
                    :key="tab.id"
                    type="button"
                    class="admin-filter-tab"
                    :class="{ 'admin-filter-tab--active': activeTab === tab.id }"
                    @click="activeTab = tab.id"
                >
                    {{ tab.label }}
                </button>
            </nav>

            <form class="admin-form admin-form--wide" @submit.prevent="save">
                <PageEditorGeneralTab
                    v-show="activeTab === 'general'"
                    :form="form"
                    :page-status-hint="pageStatusHint"
                />
                <PageEditorAlertTab v-show="activeTab === 'alert'" :alert-form="alertForm" />
                <PageEditorHeroTab v-show="activeTab === 'hero'" :hero-form="heroForm" :route-name="routeName" />
                <PageEditorComponentsTab
                    v-show="activeTab === 'components'"
                    :components="components"
                    :editor="editor"
                    :route-name="routeName"
                    :loading="loading"
                />
                <PageEditorSectionsTab
                    v-show="activeTab === 'sections'"
                    :sections="sections"
                    :editor="editor"
                    :route-name="routeName"
                    :loading="loading"
                />
                <PageEditorLinksTab
                    v-show="activeTab === 'links'"
                    :links="links"
                    :editor="editor"
                    :loading="loading"
                />
                <PageEditorDocumentsTab
                    v-show="activeTab === 'documents'"
                    :documents="documents"
                    :editor="editor"
                    :route-name="routeName"
                    :page-title="page?.title ?? ''"
                    :loading="loading"
                />
                <PageEditorMediaTab
                    v-show="activeTab === 'media'"
                    :media="media"
                    :editor="editor"
                    :route-name="routeName"
                    :loading="loading"
                />
                <PageEditorConnectorTab
                    v-show="activeTab === 'connector'"
                    :features="features"
                    :resource-links="resourceLinks"
                    :editor="editor"
                    :loading="loading"
                />
                <PageEditorPublicationTab v-show="activeTab === 'publication'" :publication-body="publicationBody" />
                <PageEditorHomeTab v-show="activeTab === 'home'" :home-form="homeForm" />

                <p v-if="message" class="admin-success">{{ message }}</p>
                <p v-if="saveError" class="admin-error" role="alert">{{ saveError }}</p>
            </form>
            <AdminToastStack />
        </template>
    </div>
</template>

<script setup>
import { computed, defineAsyncComponent, onMounted, ref, watch } from 'vue';
import PageEditorComponentsTab from '../../components/admin/page-editor/PageEditorComponentsTab.vue';
import { createPageEditorState } from '../../composables/usePageEditorPayload';
import { PAGE_STATUSES, pageStatusClass, pageStatusLabel, pageTypeMeta } from '../../data/adminCmsMeta';
import { defaultActiveTab, editorTabsForPageType } from '../../data/pageEditorTabs';
import { adminCmsService } from '../../services/adminCmsService';
import { adminRoute } from '../../utils/adminPath';

const PageEditorAlertTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorAlertTab.vue'));
const PageEditorHeroTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorHeroTab.vue'));
const PageEditorSectionsTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorSectionsTab.vue'));
const PageEditorLinksTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorLinksTab.vue'));
const PageEditorDocumentsTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorDocumentsTab.vue'));
const PageEditorMediaTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorMediaTab.vue'));
const PageEditorConnectorTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorConnectorTab.vue'));
const PageEditorPublicationTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorPublicationTab.vue'));
const PageEditorHomeTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorHomeTab.vue'));
const PageEditorGeneralTab = defineAsyncComponent(() => import('../../components/admin/page-editor/PageEditorGeneralTab.vue'));
const AdminToastStack = defineAsyncComponent(() => import('../../components/admin/AdminToastStack.vue'));

const props = defineProps({
    routeName: {
        type: String,
        required: true,
    },
});

const loading = ref(true);
const saving = ref(false);
const error = ref('');
const saveError = ref('');
const message = ref('');
const page = ref(null);
const activeTab = ref('general');

const editor = createPageEditorState();
const { form, alertForm, heroForm, sections, components, links, documents, media, features, resourceLinks, publicationBody, homeForm, hydrateFromPage, buildPayload } = editor;

const tabs = computed(() => editorTabsForPageType(page.value?.page_type ?? 'product'));

const pageStatusHint = computed(() => PAGE_STATUSES.find((s) => s.value === form.status)?.hint ?? '');

watch(
    () => page.value?.page_type,
    (type) => {
        const allowed = editorTabsForPageType(type ?? 'product').map((t) => t.id);
        if (!allowed.includes(activeTab.value)) {
            activeTab.value = defaultActiveTab(type);
        }
    },
);

async function loadPage() {
    loading.value = true;
    error.value = '';
    try {
        page.value = await adminCmsService.getPage(props.routeName);
        hydrateFromPage(page.value);
        activeTab.value = defaultActiveTab(page.value.page_type);
    } catch {
        error.value = 'Page introuvable.';
    } finally {
        loading.value = false;
    }
}

async function save() {
    saving.value = true;
    message.value = '';
    saveError.value = '';
    try {
        page.value = await adminCmsService.updatePage(props.routeName, {
            title: form.title,
            meta_description: form.meta_description,
            status: form.status,
            payload: buildPayload(page.value?.payload ?? {}),
        });
        hydrateFromPage(page.value);
        message.value = 'Page enregistrée.';
    } catch {
        saveError.value = 'Échec lors de l’enregistrement.';
    } finally {
        saving.value = false;
    }
}

async function preview() {
    const { token } = await adminCmsService.createPreviewToken(props.routeName);
    const target = page.value?.path ?? '/';
    const separator = target.includes('?') ? '&' : '?';
    window.open(`${target}${separator}preview=${token}`, '_blank');
}

watch(() => props.routeName, loadPage, { immediate: true });
</script>

<style scoped>
.admin-page-editor__type-hint {
    margin: 0.35rem 0 0;
    font-size: 0.88rem;
}
</style>
