<template>
    <article v-if="component.type === 'card'" class="cms-card ui-card glass-frame">
        <img
            v-if="component.image_src"
            :src="component.image_src"
            :alt="component.image_alt || component.title || ''"
            class="cms-card__image"
            loading="lazy"
            decoding="async"
        />
        <div class="cms-card__body">
            <h3 v-if="component.title" class="cms-card__title">{{ component.title }}</h3>
            <p v-if="component.body" class="cms-card__text">{{ component.body }}</p>
            <a
                v-if="component.link"
                :href="component.link"
                class="cms-card__link"
            >
                {{ component.link_label || 'En savoir plus' }}
            </a>
        </div>
    </article>

    <section v-else-if="component.type === 'section'" class="cms-section-block">
        <h3 v-if="component.title" class="cms-section-block__title">{{ component.title }}</h3>
        <div v-if="component.body" class="cms-section-block__body" v-html="component.body" />
    </section>

    <a
        v-else-if="component.type === 'button' && component.target"
        :href="component.target"
        class="cms-button"
        :data-variant="component.variant ?? 'primary'"
    >
        {{ component.label || 'Bouton' }}
    </a>
</template>

<script setup>
defineProps({
    component: {
        type: Object,
        required: true,
    },
    focused: {
        type: Boolean,
        default: false,
    },
});
</script>

<style scoped>
.cms-card {
    display: grid;
    gap: 1rem;
    margin-top: 3%;
    padding: 1.25rem;
}

.cms-card__image {
    width: 100%;
    max-height: 220px;
    object-fit: cover;
    border-radius: var(--radius-md, 0.65rem);
}

.cms-card__title {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 600;
}

.cms-card__text {
    margin: 0;
    line-height: 1.6;
    font-size: 1.05rem;
}

.cms-card__link {
    display: inline-block;
    margin-top: 0.75rem;
    color: var(--color-brand, #0058d9);
    font-weight: 600;
    text-decoration: none;
}

.cms-section-block__title {
    margin: 0 0 0.75rem;
    font-size: 1.2rem;
}

.cms-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1rem;
    border-radius: 0.55rem;
    font-weight: 600;
    text-decoration: none;
    background: var(--color-brand, #0058d9);
    color: #fff;
}

.cms-button[data-variant='secondary'] {
    background: #42526f;
}

.cms-button[data-variant='ghost'] {
    background: transparent;
    color: var(--color-brand, #0058d9);
    border: 1px solid currentColor;
}
</style>
