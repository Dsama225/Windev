<template>
    <AdminPanel title="Médias" centered>
        <p class="admin-muted">
            <code>payload.media[]</code> — images par rôle (<code>hero</code> géré dans l’onglet Hero). URLs depuis
            <RouterLink to="/windevadmin/media">Médias</RouterLink>.
        </p>
        <button type="button" class="admin-btn admin-btn--secondary" @click="editor.addMedia()">Ajouter un média</button>

        <div v-for="(item, index) in media" :key="index" class="admin-page-editor-media-row">
            <label class="admin-field admin-field--inline">
                <span>Rôle</span>
                <input v-model="item.role" type="text" placeholder="image, sidebar…" />
            </label>
            <label class="admin-field">
                <span>URL</span>
                <input v-model="item.src" type="text" placeholder="/img/…" />
            </label>
            <label class="admin-field">
                <span>Alt</span>
                <input v-model="item.alt" type="text" />
            </label>
            <button type="button" class="admin-btn admin-btn--danger admin-btn--compact" @click="editor.removeMedia(index)">Supprimer</button>
        </div>
        <p v-if="!media.length" class="admin-muted">Aucun média additionnel.</p>
    </AdminPanel>
</template>

<script setup>
import AdminPanel from '../AdminPanel.vue';

defineProps({
    media: { type: Array, required: true },
    editor: { type: Object, required: true },
});
</script>

<style scoped>
.admin-page-editor-media-row {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr auto;
    gap: 0.75rem;
    align-items: end;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid color-mix(in oklab, var(--color-text-secondary) 16%, transparent);
}

@media (max-width: 768px) {
    .admin-page-editor-media-row {
        grid-template-columns: 1fr;
    }
}
</style>
