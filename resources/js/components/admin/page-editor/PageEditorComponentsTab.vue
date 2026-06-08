<template>
    <AdminPanel title="Composants de page" centered>
        <div class="pec-header">
            <p class="admin-muted pec-header__hint">
                Blocs dynamiques (<code>payload.components[]</code>) : cartes, carrousels, sections et boutons.
            </p>
            <div class="pec-view-toggle" role="group" aria-label="Mode d’affichage">
                <button
                    type="button"
                    class="pec-view-toggle__btn"
                    :class="{ 'pec-view-toggle__btn--active': viewMode === 'list' }"
                    title="Liste"
                    @click="viewMode = 'list'"
                >
                    ☰
                </button>
                <button
                    type="button"
                    class="pec-view-toggle__btn"
                    :class="{ 'pec-view-toggle__btn--active': viewMode === 'grid' }"
                    title="Grille"
                    @click="viewMode = 'grid'"
                >
                    ⊞
                </button>
            </div>
        </div>

        <section class="pec-add" aria-label="Ajouter un composant">
            <p class="pec-add__label">Ajouter un composant</p>
            <div class="pec-add__types">
                <button
                    v-for="t in PAGE_COMPONENT_TYPES"
                    :key="t.value"
                    type="button"
                    class="pec-add-type"
                    :title="t.description"
                    @click="handleAdd(t.value)"
                >
                    <span class="pec-add-type__icon" aria-hidden="true">{{ t.icon }}</span>
                    <span>{{ t.label }}</span>
                </button>
            </div>
            <details class="pec-add-variants">
                <summary>Variantes rapides (cartes)</summary>
                <div class="pec-add-variants__list">
                    <button
                        v-for="variant in CARD_QUICK_VARIANTS"
                        :key="variant.id"
                        type="button"
                        class="admin-btn admin-btn--secondary admin-btn--compact"
                        @click="handleAddVariant(variant)"
                    >
                        {{ variant.label }}
                    </button>
                </div>
            </details>
        </section>

        <div v-if="loading" class="pec-skeleton" aria-busy="true" aria-label="Chargement des composants">
            <div v-for="n in 3" :key="n" class="pec-skeleton__card" />
        </div>

        <div
            v-else-if="!components.length"
            class="pec-empty"
        >
            <div class="pec-empty__icon" aria-hidden="true">📦</div>
            <p class="pec-empty__title">Aucun composant pour l’instant</p>
            <p class="admin-muted pec-empty__text">
                Composez votre page avec des cartes, carrousels, sections ou boutons. Utilisez les boutons ci-dessus pour commencer.
            </p>
        </div>

        <div
            v-else
            class="pec-list"
            :class="{ 'pec-list--grid': viewMode === 'grid' }"
        >
            <article
                v-for="(component, index) in components"
                :key="component.id + '-' + index"
                class="pec-card"
                :class="{
                    'pec-card--expanded': expandedIndex === index,
                    'pec-card--preview': previewIndex === index,
                    'pec-card--dragging': dragIndex === index,
                    'pec-card--drop-target': dropIndex === index && dragIndex !== null && dragIndex !== index,
                }"
                @dragover.prevent="onDragOver(index)"
                @drop.prevent="onDrop(index)"
            >
                <header class="pec-card__head">
                    <button
                        type="button"
                        class="pec-card__handle"
                        draggable="true"
                        title="Glisser pour réordonner"
                        aria-label="Poignée de déplacement"
                        @dragstart="onDragStart(index, $event)"
                        @dragend="onDragEnd"
                    >
                        ☰
                    </button>
                    <span class="pec-card__type-icon" aria-hidden="true">{{ getPageComponentMeta(component.type).icon }}</span>
                    <span class="comp-badge" :class="getPageComponentMeta(component.type).badge">
                        {{ getPageComponentMeta(component.type).label }}
                    </span>
                    <span class="pec-card__index">#{{ index + 1 }}</span>
                    <div class="pec-card__preview" :class="{ 'pec-card__preview--with-thumb': hasThumb(component) }">
                        <img
                            v-if="hasThumb(component)"
                            :src="thumbSrc(component)"
                            alt=""
                            class="pec-card__thumb"
                        />
                        <div v-else class="pec-card__thumb pec-card__thumb--placeholder" aria-hidden="true" />
                        <p class="pec-card__summary">{{ getComponentPreviewSummary(component) }}</p>
                    </div>
                    <div class="pec-card__actions">
                        <button
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--icon"
                            title="Monter"
                            :disabled="index === 0"
                            @click="move(index, -1)"
                        >
                            ↑
                        </button>
                        <button
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--icon"
                            title="Descendre"
                            :disabled="index === components.length - 1"
                            @click="move(index, 1)"
                        >
                            ↓
                        </button>
                        <button
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--icon"
                            :title="expandedIndex === index ? 'Réduire' : 'Éditer'"
                            :aria-expanded="expandedIndex === index"
                            @click="toggleEdit(index)"
                        >
                            ✏️
                        </button>
                        <button
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--icon"
                            :title="previewIndex === index ? 'Masquer l’aperçu' : 'Aperçu'"
                            @click="togglePreview(index)"
                        >
                            👁️
                        </button>
                        <button
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--icon"
                            title="Dupliquer"
                            @click="duplicate(index)"
                        >
                            📋
                        </button>
                        <button
                            type="button"
                            class="admin-btn admin-btn--danger admin-btn--compact admin-btn--icon"
                            title="Supprimer"
                            @click="remove(index)"
                        >
                            🗑️
                        </button>
                    </div>
                </header>

                <div v-if="previewIndex === index" class="pec-card__preview-panel">
                    <p class="admin-muted pec-card__preview-label">Aperçu</p>
                    <div class="pec-preview-block">
                        <template v-if="component.type === 'card'">
                            <strong v-if="component.title">{{ component.title }}</strong>
                            <p v-if="component.body">{{ component.body }}</p>
                            <p v-if="component.link" class="admin-muted"><code>{{ component.link }}</code></p>
                        </template>
                        <template v-else-if="component.type === 'carousel'">
                            <p>{{ component.slides?.length ?? 0 }} diapositive(s)</p>
                            <ul v-if="component.slides?.length" class="pec-preview-list">
                                <li v-for="(slide, si) in component.slides" :key="si">
                                    {{ slide.title || slide.body || `Diapositive ${si + 1}` }}
                                </li>
                            </ul>
                        </template>
                        <template v-else-if="component.type === 'section'">
                            <strong v-if="component.title">{{ component.title }}</strong>
                            <div v-if="component.body" class="pec-preview-html" v-html="component.body" />
                        </template>
                        <template v-else-if="component.type === 'button'">
                            <span class="pec-preview-btn" :data-variant="component.variant">{{ component.label || 'Bouton' }}</span>
                            <p v-if="component.target" class="admin-muted"><code>{{ component.target }}</code></p>
                        </template>
                    </div>
                </div>

                <div v-show="expandedIndex === index" class="pec-card__body">
                    <template v-if="component.type === 'card'">
                        <AdminImageUploadField v-model="component.image_src" label="Image" :route-name="routeName" :preview-alt="component.image_alt" />
                        <label class="admin-field">
                            <span>Texte alternatif</span>
                            <input v-model="component.image_alt" type="text" />
                        </label>
                        <label class="admin-field">
                            <span>Titre</span>
                            <input v-model="component.title" type="text" />
                        </label>
                        <label class="admin-field">
                            <span>Paragraphe</span>
                            <textarea v-model="component.body" rows="3" />
                        </label>
                        <div class="admin-grid admin-grid--2">
                            <label class="admin-field">
                                <span>Lien (optionnel)</span>
                                <input v-model="component.link" type="text" placeholder="/software/windev" />
                            </label>
                            <label class="admin-field">
                                <span>Libellé du lien</span>
                                <input v-model="component.link_label" type="text" placeholder="En savoir plus" />
                            </label>
                        </div>
                    </template>

                    <template v-else-if="component.type === 'carousel'">
                        <div class="admin-table__actions">
                            <button type="button" class="admin-btn admin-btn--secondary admin-btn--compact" @click="editor.addCarouselSlide(index)">
                                Ajouter une diapositive
                            </button>
                        </div>
                        <div v-for="(slide, slideIndex) in component.slides" :key="slideIndex" class="admin-page-editor-component__slide">
                            <header class="admin-page-editor-component__slide-head">
                                <span>Diapositive {{ slideIndex + 1 }}</span>
                                <button
                                    v-if="component.slides.length > 1"
                                    type="button"
                                    class="admin-btn admin-btn--danger admin-btn--compact"
                                    @click="removeCarouselSlide(index, slideIndex)"
                                >
                                    Supprimer
                                </button>
                            </header>
                            <AdminImageUploadField v-model="slide.image_src" label="Image" :route-name="routeName" />
                            <label class="admin-field">
                                <span>Titre</span>
                                <input v-model="slide.title" type="text" />
                            </label>
                            <label class="admin-field">
                                <span>Texte</span>
                                <textarea v-model="slide.body" rows="2" />
                            </label>
                        </div>
                    </template>

                    <template v-else-if="component.type === 'section'">
                        <label class="admin-field">
                            <span>Titre de section</span>
                            <input v-model="component.title" type="text" />
                        </label>
                        <label class="admin-field">
                            <span>Contenu (HTML autorisé)</span>
                            <textarea v-model="component.body" rows="5" placeholder="<p>…</p>" />
                        </label>
                    </template>

                    <template v-else-if="component.type === 'button'">
                        <label class="admin-field">
                            <span>Libellé</span>
                            <input v-model="component.label" type="text" />
                        </label>
                        <label class="admin-field">
                            <span>Cible (URL ou chemin)</span>
                            <input v-model="component.target" type="text" />
                        </label>
                        <label class="admin-field">
                            <span>Style</span>
                            <select v-model="component.variant">
                                <option value="primary">Principal</option>
                                <option value="secondary">Secondaire</option>
                                <option value="ghost">Discret</option>
                            </select>
                        </label>
                    </template>
                </div>
            </article>
        </div>

    </AdminPanel>
</template>

<script setup>
import { ref } from 'vue';
import AdminImageUploadField from '../AdminImageUploadField.vue';
import AdminPanel from '../AdminPanel.vue';
import './page-editor-ui.css';
import {
    CARD_QUICK_VARIANTS,
    getComponentPreviewSummary,
    getPageComponentMeta,
    PAGE_COMPONENT_TYPES,
} from '../../../data/pageEditorComponents';
import { useAdminToast } from '../../../composables/useAdminToast';

const props = defineProps({
    components: { type: Array, required: true },
    editor: { type: Object, required: true },
    routeName: { type: String, default: '' },
    loading: { type: Boolean, default: false },
});

const toast = useAdminToast();
const viewMode = ref('list');
const expandedIndex = ref(null);
const previewIndex = ref(null);
const dragIndex = ref(null);
const dropIndex = ref(null);

function handleAdd(type) {
    props.editor.addComponent(type);
    expandedIndex.value = props.components.length - 1;
    previewIndex.value = null;
    toast.push(`${getPageComponentMeta(type).label} ajouté(e).`);
}

function handleAddVariant(variant) {
    props.editor.addComponent(variant.type, variant.preset ?? {});
    expandedIndex.value = props.components.length - 1;
    toast.push(`${variant.label} ajouté(e).`);
}

function move(index, direction) {
    props.editor.moveComponent(index, direction);
    if (expandedIndex.value === index) {
        expandedIndex.value = index + direction;
    } else if (expandedIndex.value === index + direction) {
        expandedIndex.value = index;
    }
    toast.push('Composant déplacé.', 'info', 2200);
}

async function remove(index) {
    const component = props.components[index];

    if (!window.confirm(`Supprimer ce composant (${getPageComponentMeta(component?.type).label}) ?`)) {
        return;
    }

    await props.editor.removeComponent(index, props.routeName);

    if (expandedIndex.value === index) {
        expandedIndex.value = null;
    } else if (expandedIndex.value !== null && expandedIndex.value > index) {
        expandedIndex.value -= 1;
    }
    if (previewIndex.value === index) {
        previewIndex.value = null;
    } else if (previewIndex.value !== null && previewIndex.value > index) {
        previewIndex.value -= 1;
    }
    toast.push('Composant supprimé.', 'warning');
}

async function removeCarouselSlide(componentIndex, slideIndex) {
    if (!window.confirm('Supprimer cette diapositive ?')) {
        return;
    }

    await props.editor.removeCarouselSlide(componentIndex, slideIndex, props.routeName);
}

function duplicate(index) {
    props.editor.duplicateComponent(index);
    expandedIndex.value = index + 1;
    toast.push('Composant dupliqué.');
}

function toggleEdit(index) {
    expandedIndex.value = expandedIndex.value === index ? null : index;
    if (expandedIndex.value === index) {
        previewIndex.value = null;
    }
}

function togglePreview(index) {
    previewIndex.value = previewIndex.value === index ? null : index;
}

function hasThumb(component) {
    if (component.type === 'card') {
        return Boolean(component.image_src?.trim());
    }
    if (component.type === 'carousel') {
        return Boolean(component.slides?.[0]?.image_src?.trim());
    }
    return false;
}

function thumbSrc(component) {
    if (component.type === 'card') {
        return component.image_src;
    }
    if (component.type === 'carousel') {
        return component.slides?.[0]?.image_src ?? '';
    }
    return '';
}

function onDragStart(index, event) {
    dragIndex.value = index;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', String(index));
}

function onDragOver(index) {
    if (dragIndex.value === null) {
        return;
    }
    dropIndex.value = index;
}

function onDrop(index) {
    if (dragIndex.value === null || dragIndex.value === index) {
        onDragEnd();
        return;
    }
    const from = dragIndex.value;
    props.editor.reorderComponents(from, index);
    if (expandedIndex.value === from) {
        expandedIndex.value = index;
    } else if (expandedIndex.value !== null) {
        const exp = expandedIndex.value;
        if (from < exp && index >= exp) {
            expandedIndex.value = exp - 1;
        } else if (from > exp && index <= exp) {
            expandedIndex.value = exp + 1;
        }
    }
    toast.push('Ordre mis à jour.', 'info', 2200);
    onDragEnd();
}

function onDragEnd() {
    dragIndex.value = null;
    dropIndex.value = null;
}
</script>

<style scoped>
.pec-add-variants {
    margin-top: 0.75rem;
    font-size: 0.88rem;
}

.pec-add-variants summary {
    cursor: pointer;
    color: var(--color-brand);
    font-weight: 500;
}

.pec-add-variants__list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
    margin-top: 0.5rem;
}

.admin-page-editor-component__slide {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px dashed color-mix(in oklab, var(--color-text-secondary) 18%, transparent);
}

.admin-page-editor-component__slide-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}
</style>
