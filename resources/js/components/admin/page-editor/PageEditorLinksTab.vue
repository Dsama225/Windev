<template>
    <AdminPanel title="Liens & PDF" centered>
        <p class="admin-muted">
            <code>payload.links[]</code> — liens internes, documents PDF (<code>/documents/{slug}/download</code>) ou externes.
        </p>
        <button type="button" class="admin-btn admin-btn--secondary" @click="editor.addLink()">Ajouter un lien</button>

        <table v-if="links.length" class="admin-table admin-page-editor-links__table">
            <thead>
                <tr>
                    <th>Libellé</th>
                    <th>Type</th>
                    <th>Cible</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(link, index) in links" :key="index">
                    <td><input v-model="link.label" type="text" class="admin-page-editor-inline-input" /></td>
                    <td>
                        <select v-model="link.type" class="admin-page-editor-inline-input">
                            <option value="internal">Interne</option>
                            <option value="document">Document PDF</option>
                            <option value="external">Externe</option>
                        </select>
                    </td>
                    <td>
                        <input
                            v-model="link.target"
                            type="text"
                            class="admin-page-editor-inline-input"
                            :placeholder="link.type === 'document' ? 'slug-du-pdf' : '/software/windev'"
                        />
                    </td>
                    <td>
                        <button type="button" class="admin-btn admin-btn--danger admin-btn--compact" @click="editor.removeLink(index)">×</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-else class="admin-muted">Aucun lien défini.</p>
    </AdminPanel>
</template>

<script setup>
import AdminPanel from '../AdminPanel.vue';

defineProps({
    links: { type: Array, required: true },
    editor: { type: Object, required: true },
});
</script>

<style scoped>
.admin-page-editor-links__table {
    margin-top: 1rem;
}

.admin-page-editor-inline-input {
    width: 100%;
    min-width: 120px;
    padding: 0.4rem 0.5rem;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 28%, transparent);
    border-radius: var(--radius-sm);
    font: inherit;
    font-size: 0.88rem;
}
</style>
