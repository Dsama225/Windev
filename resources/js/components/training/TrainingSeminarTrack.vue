<template>
    <article class="seminar-track" :aria-labelledby="'track-' + track.id">
        <h3 :id="'track-' + track.id" class="seminar-track__title">{{ track.title }}</h3>
        <p class="seminar-track__hint">{{ hint }}</p>

        <div v-if="track.layout === 'flow'" class="seminar-track__flow-wrap">
            <div class="seminar-track__flow">
                <template v-for="(seminar, index) in track.flow" :key="seminar.id">
                    <TrainingSeminarBox :seminar="seminar" :theme="track.theme" />
                    <span
                        v-if="index < track.flow.length - 1"
                        class="seminar-track__arrow"
                        aria-hidden="true"
                    >
                        →
                    </span>
                </template>
            </div>
            <div v-if="track.secondary?.length" class="seminar-track__secondary">
                <TrainingSeminarBox
                    v-for="seminar in track.secondary"
                    :key="seminar.id"
                    :seminar="seminar"
                    :theme="track.theme"
                />
            </div>
        </div>

        <div v-else-if="track.layout === 'single'" class="seminar-track__single">
            <TrainingSeminarBox
                v-for="seminar in track.flow"
                :key="seminar.id"
                :seminar="seminar"
                :theme="track.theme"
            />
        </div>

        <div v-else-if="track.layout === 'grid'" class="seminar-track__grid">
            <TrainingSeminarBox
                v-for="seminar in track.flow"
                :key="seminar.id"
                :seminar="seminar"
                theme="thematic"
                :color="seminar.color"
            />
        </div>

        <p class="seminar-track__customize">{{ customizeNote }}</p>

        <div v-if="track.packages?.length" class="seminar-track__packages">
            <p class="seminar-track__packages-label">{{ packagesLabel }}</p>
            <ul class="seminar-track__packages-list">
                <li v-for="pkg in track.packages" :key="pkg">{{ pkg }}</li>
            </ul>
        </div>

        <p class="seminar-track__quote">
            <a :href="quoteUrl" target="_blank" rel="noopener noreferrer" class="seminar-track__quote-link">
                {{ quoteLabel }}
            </a>
        </p>
    </article>
</template>

<script setup>
import TrainingSeminarBox from './TrainingSeminarBox.vue';

defineProps({
    track: { type: Object, required: true },
    hint: { type: String, required: true },
    customizeNote: { type: String, required: true },
    packagesLabel: { type: String, required: true },
    quoteLabel: { type: String, required: true },
    quoteUrl: { type: String, required: true },
});
</script>

<style scoped>
.seminar-track {
    margin-bottom: 1.75rem;
}

.seminar-track__title {
    margin: 0 0 0.35rem;
    font-size: 1rem;
    font-weight: 800;
    color: #c9a000;
    text-transform: none;
}

.seminar-track__hint {
    margin: 0 0 0.75rem;
    font-size: 0.82rem;
    font-style: italic;
    color: #5f6f8c;
}

.seminar-track__flow {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.25rem;
}

.seminar-track__arrow {
    font-size: 1.25rem;
    font-weight: 700;
    color: #8896ab;
    padding: 0 0.15rem;
    user-select: none;
}

.seminar-track__secondary {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.65rem;
    padding-left: 0.25rem;
}

.seminar-track__single {
    display: flex;
}

.seminar-track__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
}

.seminar-track__customize {
    margin: 0.65rem 0 0;
    font-size: 0.82rem;
    font-style: italic;
    color: #5f6f8c;
}

.seminar-track__packages {
    margin-top: 0.5rem;
}

.seminar-track__packages-label {
    margin: 0 0 0.25rem;
    font-size: 0.88rem;
    font-weight: 700;
}

.seminar-track__packages-list {
    margin: 0;
    padding-left: 1.1rem;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.seminar-track__quote {
    margin: 0.45rem 0 0;
    text-align: right;
    font-size: 0.86rem;
}

.seminar-track__quote-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.seminar-track__quote-link:hover {
    text-decoration: underline;
}

@media (max-width: 720px) {
    .seminar-track__flow {
        flex-direction: column;
        align-items: flex-start;
    }

    .seminar-track__arrow {
        transform: rotate(90deg);
    }
}
</style>
