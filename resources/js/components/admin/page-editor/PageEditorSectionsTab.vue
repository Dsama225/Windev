<template>
    <AdminPanel title="Sections de contenu" centered>
        <p class="admin-muted">
            Liste ordonnée <code>payload.sections[]</code> — titres, HTML, listes, tableaux. Consommée par
            <code>PageSections</code> et les layouts support / connecteurs.
        </p>
        <div class="admin-table__actions admin-page-editor-sections__toolbar">
            <button type="button" class="admin-btn admin-btn--primary" @click="editor.addSection()">Ajouter une section</button>
        </div>

        <p v-if="!sections.length" class="admin-muted">Aucune section. Ajoutez au moins une section pour le corps de la page.</p>

        <article v-for="(section, index) in sections" :key="section.id + index" class="admin-page-editor-section">
            <header class="admin-page-editor-section__head">
                <strong>Section {{ index + 1 }}</strong>
                <span class="admin-muted"><code>{{ section.id }}</code></span>
                <div class="admin-table__actions">
                    <button type="button" class="admin-btn admin-btn--ghost admin-btn--compact" :disabled="index === 0" @click="editor.moveSection(index, -1)">↑</button>
                    <button type="button" class="admin-btn admin-btn--ghost admin-btn--compact" :disabled="index === sections.length - 1" @click="editor.moveSection(index, 1)">↓</button>
                    <button type="button" class="admin-btn admin-btn--danger admin-btn--compact" @click="editor.removeSection(index)">Supprimer</button>
                </div>
            </header>
            <label class="admin-field">
                <span>Identifiant (id)</span>
                <input v-model="section.id" type="text" />
            </label>
            <label class="admin-field">
                <span>Titre</span>
                <input v-model="section.title" type="text" />
            </label>
            <label class="admin-field">
                <span>Corps (HTML)</span>
                <textarea v-model="section.body" rows="6" placeholder="<p>…</p>" />
            </label>
            <label class="admin-field">
                <span>Liste à puces (une ligne = un item)</span>
                <textarea :value="listText(section)" rows="4" placeholder="Item 1&#10;Item 2" @input="updateList(section, $event.target.value)" />
            </label>
        </article>
    </AdminPanel>
</template>

<script setup>
import AdminPanel from '../AdminPanel.vue';

const props = defineProps({
    sections: { type: Array, required: true },
    editor: { type: Object, required: true },
});

function listText(section) {
    return (section.list ?? []).join('\n');
}

function updateList(section, value) {
    section.list = value
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
}
</script>

<style scoped>
.admin-page-editor-sections__toolbar {
    margin-bottom: 1rem;
}

.admin-page-editor-section {
    margin-top: 1rem;
    padding: 1rem;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 20%, transparent);
    border-radius: var(--radius-md);
    background: color-mix(in oklab, var(--color-brand) 4%, transparent);
}

.admin-page-editor-section__head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 1rem;
    margin-bottom: 0.75rem;
}
</style>
