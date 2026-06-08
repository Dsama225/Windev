<template>
    <AdminAssetUploadField
        v-model="model"
        :label="label"
        :preview-alt="previewAlt"
        :route-name="routeName"
        kind="image"
        accept="image/jpeg,image/png,image/gif,image/webp,image/svg+xml"
        placeholder="/img/… ou /uploads/cms/…"
        browse-label="Envoyer une image"
    />
</template>

<script setup>
import AdminAssetUploadField from './AdminAssetUploadField.vue';

const model = defineModel({ type: String, default: '' });

defineProps({
    label: { type: String, default: 'Image' },
    previewAlt: { type: String, default: '' },
    routeName: { type: String, default: '' },
});
</script>
