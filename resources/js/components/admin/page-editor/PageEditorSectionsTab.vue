<template>
    <AdminPanel title="Sections de contenu" centered>
        <p class="admin-muted">
            Liste ordonnée <code>payload.sections[]</code> — titres, texte HTML, listes et cartes illustrées.
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
                    <button type="button" class="admin-btn admin-btn--danger admin-btn--compact" @click="removeSection(index)">Supprimer</button>
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
                <span>Corps (HTML ou texte)</span>
                <textarea v-model="section.body" rows="6" placeholder="<p>…</p>" />
            </label>
            <label class="admin-field">
                <span>Liste à puces (une ligne = un item)</span>
                <textarea :value="listText(section)" rows="4" placeholder="Item 1&#10;Item 2" @input="updateList(section, $event.target.value)" />
            </label>

            <section class="admin-page-editor-section__cards">
                <header class="admin-page-editor-section__cards-head">
                    <strong>Cartes de la section</strong>
                    <button type="button" class="admin-btn admin-btn--secondary admin-btn--compact" @click="editor.addSectionCard(index)">
                        Ajouter une carte
                    </button>
                </header>

                <p v-if="!section.cards?.length" class="admin-muted">Aucune carte dans cette section.</p>

                <article
                    v-for="(card, cardIndex) in section.cards ?? []"
                    :key="cardIndex"
                    class="admin-page-editor-section__card"
                >
                    <header class="admin-page-editor-section__card-head">
                        <span>Carte {{ cardIndex + 1 }}</span>
                        <button type="button" class="admin-btn admin-btn--danger admin-btn--compact" @click="removeSectionCard(index, cardIndex)">
                            Supprimer
                        </button>
                    </header>
                    <AdminImageUploadField v-model="card.image_src" label="Image" :route-name="routeName" :preview-alt="card.image_alt" />
                    <label class="admin-field">
                        <span>Texte alternatif image</span>
                        <input v-model="card.image_alt" type="text" />
                    </label>
                    <label class="admin-field">
                        <span>Titre de la carte</span>
                        <input v-model="card.title" type="text" />
                    </label>
                    <label class="admin-field">
                        <span>Texte</span>
                        <textarea v-model="card.body" rows="3" />
                    </label>
                    <div class="admin-grid admin-grid--2">
                        <label class="admin-field">
                            <span>Lien (optionnel)</span>
                            <input v-model="card.link" type="text" placeholder="/software/windev" />
                        </label>
                        <label class="admin-field">
                            <span>Libellé du lien</span>
                            <input v-model="card.link_label" type="text" placeholder="En savoir plus" />
                        </label>
                    </div>
                </article>
            </section>
        </article>
    </AdminPanel>
</template>

<script setup>
import AdminImageUploadField from '../AdminImageUploadField.vue';
import AdminPanel from '../AdminPanel.vue';

const props = defineProps({
    sections: { type: Array, required: true },
    editor: { type: Object, required: true },
    routeName: { type: String, default: '' },
});

async function removeSection(index) {
    if (!window.confirm('Supprimer cette section et ses cartes ?')) {
        return;
    }

    await props.editor.removeSection(index, props.routeName);
}

async function removeSectionCard(sectionIndex, cardIndex) {
    if (!window.confirm('Supprimer cette carte ?')) {
        return;
    }

    await props.editor.removeSectionCard(sectionIndex, cardIndex, props.routeName);
}

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

.admin-page-editor-section__cards {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px dashed color-mix(in oklab, var(--color-text-secondary) 18%, transparent);
}

.admin-page-editor-section__cards-head {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
}

.admin-page-editor-section__card {
    margin-top: 0.75rem;
    padding: 0.85rem;
    border-radius: 0.65rem;
    background: rgba(255, 255, 255, 0.75);
    border: 1px solid rgba(11, 31, 77, 0.08);
}

.admin-page-editor-section__card-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    margin-bottom: 0.65rem;
    font-size: 0.9rem;
}
</style>
