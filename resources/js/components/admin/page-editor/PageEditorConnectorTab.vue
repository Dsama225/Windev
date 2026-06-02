<template>
    <div class="admin-page-editor-connector">
        <AdminPanel title="Fonctionnalités connecteur" centered>
            <p class="admin-muted"><code>payload.features[]</code> — tableau label / valeur (pages connecteurs natives).</p>
            <button type="button" class="admin-btn admin-btn--secondary" @click="editor.addFeature()">Ajouter une ligne</button>
            <table v-if="features.length" class="admin-table">
                <thead>
                    <tr>
                        <th>Libellé</th>
                        <th>Valeur</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, index) in features" :key="index">
                        <td><input v-model="row.label" type="text" class="admin-page-editor-inline-input" /></td>
                        <td><input v-model="row.value" type="text" class="admin-page-editor-inline-input" /></td>
                        <td>
                            <button type="button" class="admin-btn admin-btn--danger admin-btn--compact" @click="editor.removeFeature(index)">×</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </AdminPanel>

        <AdminPanel title="Liens ressources (colonne droite)" centered>
            <p class="admin-muted"><code>payload.resource_links[]</code> — groupes de liens dans la colonne latérale.</p>
            <button type="button" class="admin-btn admin-btn--secondary" @click="editor.addResourceGroup()">Ajouter un groupe</button>

            <article v-for="(group, gIndex) in resourceLinks" :key="gIndex" class="admin-page-editor-resource-group">
                <header class="admin-page-editor-section__head">
                    <label class="admin-field" style="flex:1">
                        <span>Nom du groupe</span>
                        <input v-model="group.group" type="text" placeholder="Documentation" />
                    </label>
                    <button type="button" class="admin-btn admin-btn--danger admin-btn--compact" @click="editor.removeResourceGroup(gIndex)">Supprimer le groupe</button>
                </header>
                <button type="button" class="admin-btn admin-btn--ghost admin-btn--compact" @click="editor.addResourceLink(gIndex)">+ Lien</button>
                <div v-for="(link, lIndex) in group.links" :key="lIndex" class="admin-page-editor-resource-link">
                    <input v-model="link.label" type="text" placeholder="Libellé" class="admin-page-editor-inline-input" />
                    <select v-model="link.type" class="admin-page-editor-inline-input">
                        <option value="internal">Interne</option>
                        <option value="document">PDF</option>
                        <option value="external">Externe</option>
                    </select>
                    <input v-model="link.target" type="text" placeholder="Cible" class="admin-page-editor-inline-input" />
                    <button type="button" class="admin-btn admin-btn--danger admin-btn--icon" @click="editor.removeResourceLink(gIndex, lIndex)">×</button>
                </div>
            </article>
        </AdminPanel>
    </div>
</template>

<script setup>
import AdminPanel from '../AdminPanel.vue';

defineProps({
    features: { type: Array, required: true },
    resourceLinks: { type: Array, required: true },
    editor: { type: Object, required: true },
});
</script>

<style scoped>
.admin-page-editor-connector {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.admin-page-editor-resource-group {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: var(--radius-md);
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 18%, transparent);
}

.admin-page-editor-resource-link {
    display: grid;
    grid-template-columns: 1fr 120px 1fr auto;
    gap: 0.5rem;
    margin-top: 0.5rem;
    align-items: center;
}

.admin-page-editor-section__head {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
}
</style>
