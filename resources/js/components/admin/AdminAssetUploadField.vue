<template>
    <div class="admin-asset-upload">
        <label class="admin-field">
            <span>{{ label }}</span>
            <div class="admin-asset-upload__row">
                <input v-model="model" type="text" :placeholder="placeholder" />
                <label class="admin-btn admin-btn--secondary admin-btn--compact admin-asset-upload__browse">
                    {{ uploading ? 'Envoi…' : browseLabel }}
                    <input
                        ref="fileInput"
                        type="file"
                        class="admin-asset-upload__input"
                        :accept="accept"
                        :disabled="uploading || !routeName"
                        @change="onFileSelected"
                    />
                </label>
                <button
                    v-if="model"
                    type="button"
                    class="admin-btn admin-btn--danger admin-btn--compact"
                    :disabled="clearing"
                    @click="clearAsset"
                >
                    {{ clearing ? 'Suppression…' : 'Supprimer' }}
                </button>
            </div>
            <p v-if="uploadError" class="admin-error admin-asset-upload__error" role="alert">{{ uploadError }}</p>
        </label>

        <img
            v-if="kind === 'image' && model"
            :src="model"
            :alt="previewAlt || label"
            class="admin-asset-upload__preview admin-asset-upload__preview--image"
            loading="lazy"
        />

        <div v-else-if="kind === 'document' && model" class="admin-asset-upload__preview admin-asset-upload__preview--document">
            <a :href="model" target="_blank" rel="noopener" class="admin-asset-upload__doc-link">
                📄 {{ documentName }}
            </a>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { adminCmsService } from '../../services/adminCmsService';
import { deleteCmsAsset } from '../../utils/cmsAssets';

const model = defineModel({ type: String, default: '' });

const props = defineProps({
    label: { type: String, default: 'Fichier' },
    previewAlt: { type: String, default: '' },
    routeName: { type: String, default: '' },
    kind: { type: String, default: 'image' },
    accept: { type: String, default: 'image/jpeg,image/png,image/gif,image/webp,image/svg+xml' },
    placeholder: { type: String, default: '/uploads/cms/…' },
    browseLabel: { type: String, default: 'Parcourir' },
});

const emit = defineEmits(['uploaded']);

const fileInput = ref(null);
const uploading = ref(false);
const clearing = ref(false);
const uploadError = ref('');

const documentName = computed(() => {
    const value = model.value ?? '';

    return value.split('/').pop() || 'Document';
});

async function clearAsset() {
    if (!model.value) {
        return;
    }

    if (!window.confirm('Supprimer ce fichier de la page ?')) {
        return;
    }

    clearing.value = true;
    uploadError.value = '';

    try {
        await deleteCmsAsset(props.routeName, model.value);
        model.value = '';
    } catch {
        uploadError.value = 'Échec de la suppression du fichier.';
    } finally {
        clearing.value = false;
    }
}

async function onFileSelected(event) {
    const file = event.target.files?.[0];

    if (!file || !props.routeName) {
        return;
    }

    uploading.value = true;
    uploadError.value = '';

    try {
        const asset = await adminCmsService.uploadAsset(props.routeName, file, props.kind);
        model.value = asset.url ?? asset.path ?? '';
        emit('uploaded', asset);
    } catch {
        uploadError.value = 'Échec de l’envoi du fichier.';
    } finally {
        uploading.value = false;
        event.target.value = '';
    }
}
</script>

<style scoped>
.admin-asset-upload__row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
}

.admin-asset-upload__row input[type='text'] {
    flex: 1 1 12rem;
    min-width: 0;
}

.admin-asset-upload__browse {
    position: relative;
    cursor: pointer;
    white-space: nowrap;
}

.admin-asset-upload__input {
    position: absolute;
    inset: 0;
    opacity: 0;
    cursor: pointer;
}

.admin-asset-upload__error {
    margin: 0.35rem 0 0;
    font-size: 0.82rem;
}

.admin-asset-upload__preview {
    margin-top: 0.5rem;
}

.admin-asset-upload__preview--image {
    display: block;
    max-width: 12rem;
    max-height: 8rem;
    object-fit: contain;
    border-radius: 0.45rem;
    border: 1px solid rgba(11, 31, 77, 0.1);
}

.admin-asset-upload__preview--document {
    padding: 0.5rem 0.65rem;
    border-radius: 0.45rem;
    background: rgba(0, 88, 217, 0.06);
    border: 1px solid rgba(11, 31, 77, 0.08);
}

.admin-asset-upload__doc-link {
    color: #0058d9;
    text-decoration: none;
    font-size: 0.88rem;
    word-break: break-all;
}
</style>
