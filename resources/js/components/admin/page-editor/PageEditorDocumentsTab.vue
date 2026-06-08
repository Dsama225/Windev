<template>
    <AdminPanel title="Documents de la page" centered>
        <p class="admin-muted">
            PDF et fichiers rattachés à <strong>{{ pageTitle }}</strong> — stockés dans
            <code>payload.documents[]</code> et affichés selon la page éditée.
        </p>

        <div class="admin-page-editor-documents__upload">
            <label class="admin-btn admin-btn--primary admin-btn--compact admin-page-editor-documents__browse">
                {{ uploading ? 'Envoi en cours…' : 'Téléverser un PDF' }}
                <input
                    type="file"
                    class="admin-page-editor-documents__input"
                    accept="application/pdf,.pdf"
                    :disabled="uploading"
                    @change="onUpload"
                />
            </label>
            <p v-if="uploadError" class="admin-error" role="alert">{{ uploadError }}</p>
        </div>

        <p v-if="!documents.length" class="admin-muted">Aucun document pour cette page.</p>

        <article
            v-for="(doc, index) in documents"
            :key="doc.id || index"
            class="admin-page-editor-document"
        >
            <header class="admin-page-editor-document__head">
                <strong>Document {{ index + 1 }}</strong>
                <div class="admin-table__actions">
                    <button type="button" class="admin-btn admin-btn--ghost admin-btn--compact" @click="addAsLink(doc)">
                        Ajouter comme lien
                    </button>
                    <button type="button" class="admin-btn admin-btn--danger admin-btn--compact" @click="remove(index)">
                        Supprimer
                    </button>
                </div>
            </header>

            <label class="admin-field">
                <span>Libellé affiché</span>
                <input v-model="doc.label" type="text" placeholder="Brochure WINDEV 2026" />
            </label>

            <p class="admin-muted admin-page-editor-document__meta">
                <code>{{ doc.url }}</code>
                <span v-if="doc.size"> · {{ formatSize(doc.size) }}</span>
            </p>

            <iframe
                v-if="doc.url"
                :src="doc.url"
                class="admin-page-editor-document__preview"
                title="Aperçu PDF"
            />
        </article>
    </AdminPanel>
</template>

<script setup>
import { ref } from 'vue';
import AdminPanel from '../AdminPanel.vue';
import { useAdminToast } from '../../../composables/useAdminToast';

const props = defineProps({
    documents: { type: Array, required: true },
    editor: { type: Object, required: true },
    routeName: { type: String, required: true },
    pageTitle: { type: String, default: '' },
});

const toast = useAdminToast();
const uploading = ref(false);
const uploadError = ref('');

async function onUpload(event) {
    const file = event.target.files?.[0];

    if (!file) {
        return;
    }

    uploading.value = true;
    uploadError.value = '';

    try {
        const asset = await props.editor.uploadDocument(file, props.routeName);
        toast.push(`Document « ${asset.label} » ajouté.`);
    } catch {
        uploadError.value = 'Échec du téléversement du PDF.';
    } finally {
        uploading.value = false;
        event.target.value = '';
    }
}

function addAsLink(doc) {
    props.editor.addLinkFromDocument(doc);
    toast.push('Lien document ajouté dans l’onglet Liens & PDF.', 'info');
}

async function remove(index) {
    const doc = props.documents[index];

    if (!doc) {
        return;
    }

    if (!window.confirm(`Supprimer le document « ${doc.label || doc.filename || 'Document'} » ?`)) {
        return;
    }

    try {
        await props.editor.removeDocument(index, props.routeName);
        toast.push('Document supprimé.', 'warning');
    } catch {
        toast.push('Échec de la suppression du document.', 'error');
    }
}

function formatSize(bytes) {
    if (!bytes) {
        return '';
    }

    if (bytes < 1024) {
        return `${bytes} o`;
    }

    return `${Math.round(bytes / 1024)} Ko`;
}
</script>

<style scoped>
.admin-page-editor-documents__upload {
    margin-bottom: 1rem;
}

.admin-page-editor-documents__browse {
    position: relative;
    cursor: pointer;
    display: inline-flex;
}

.admin-page-editor-documents__input {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
}

.admin-page-editor-document {
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid rgba(11, 31, 77, 0.1);
    border-radius: 0.75rem;
    background: rgba(255, 255, 255, 0.7);
}

.admin-page-editor-document__head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
}

.admin-page-editor-document__meta {
    margin: 0.35rem 0 0.75rem;
    font-size: 0.82rem;
    word-break: break-all;
}

.admin-page-editor-document__preview {
    width: 100%;
    min-height: 280px;
    border: 1px solid rgba(11, 31, 77, 0.1);
    border-radius: 0.5rem;
    background: #fff;
}
</style>
