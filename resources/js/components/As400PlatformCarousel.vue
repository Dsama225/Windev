<template>
    <div
        class="as400-platform-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Exemples d'applications multiplateformes avec données AS/400"
        @mouseenter="pause"
        @mouseleave="resume"
    >
        <div class="as400-platform-carousel__stage">
            <Transition name="as400-platform-fade" mode="out-in">
                <figure :key="currentSlide.id" class="as400-platform-carousel__figure">
                    <img
                        class="as400-platform-carousel__image"
                        :src="currentSlide.image.src"
                        :alt="currentSlide.alt"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, currentSlide.image.fallback)"
                    />
                </figure>
            </Transition>
        </div>
        <div class="as400-platform-carousel__controls" aria-hidden="true">
            <button type="button" class="as400-platform-carousel__dot" aria-label="Précédent" @click="prev">‹</button>
            <span class="as400-platform-carousel__indicator">{{ activeIndex + 1 }} / {{ slides.length }}</span>
            <button type="button" class="as400-platform-carousel__dot" aria-label="Suivant" @click="next">›</button>
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { applyImageFallback } from '../utils/pcsoftImages.js';

const props = defineProps({
    slides: {
        type: Array,
        required: true,
    },
    intervalMs: {
        type: Number,
        default: 4500,
    },
});

const activeIndex = ref(0);
let timerId = null;

const currentSlide = computed(() => props.slides[activeIndex.value] ?? props.slides[0]);

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

function next() {
    activeIndex.value = (activeIndex.value + 1) % props.slides.length;
}

function prev() {
    activeIndex.value = (activeIndex.value - 1 + props.slides.length) % props.slides.length;
}

function pause() {
    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}

function resume() {
    pause();
    timerId = setInterval(next, props.intervalMs);
}

onMounted(resume);
onBeforeUnmount(pause);
</script>

<style scoped>
.as400-platform-carousel {
    display: grid;
    gap: 0.5rem;
}

.as400-platform-carousel__stage {
    min-height: 12rem;
}

.as400-platform-carousel__figure {
    margin: 0;
    text-align: center;
}

.as400-platform-carousel__image {
    display: inline-block;
    max-width: 100%;
    height: auto;
    border: 1px solid var(--color-border);
}

.as400-platform-carousel__controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
}

.as400-platform-carousel__dot {
    width: 1.75rem;
    height: 1.75rem;
    border: 1px solid var(--color-border);
    border-radius: 999px;
    background: #fff;
    color: var(--color-brand);
    font-size: 1.1rem;
    line-height: 1;
    cursor: pointer;
}

.as400-platform-carousel__indicator {
    font-size: 0.78rem;
    color: var(--color-text-secondary);
}

.as400-platform-fade-enter-active,
.as400-platform-fade-leave-active {
    transition: opacity 0.25s ease;
}

.as400-platform-fade-enter-from,
.as400-platform-fade-leave-to {
    opacity: 0;
}
</style>
