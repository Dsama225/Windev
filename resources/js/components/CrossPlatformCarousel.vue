<template>
    <figure
        ref="rootRef"
        class="cross-platform-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Applications natives multiplateformes"
        tabindex="0"
        @mouseenter="pauseCarousel"
        @mouseleave="playCarousel"
        @focusin="pauseCarousel"
        @focusout="onFocusOut"
        @keydown.left.prevent="prevSlide"
        @keydown.right.prevent="nextSlide"
    >
        <RouterLink class="cross-platform-carousel__link" to="/software/windev">
            <div class="cross-platform-carousel__stage" aria-live="polite" aria-atomic="true">
                <Transition :name="transitionName" mode="out-in">
                    <img
                        :key="slideIndex"
                        class="cross-platform-carousel__image"
                        :src="activeSlide.src"
                        :alt="`Applications multiplateformes — visuel ${slideIndex + 1}`"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, activeSlide.fallback)"
                    />
                </Transition>
            </div>
        </RouterLink>
    </figure>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { homeCrossPlatformSlides } from '../data/homePageImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

const CAROUSEL_INTERVAL_MS = 3000;

const slides = homeCrossPlatformSlides;
const rootRef = ref(null);
const slideIndex = ref(0);
const autoplayEnabled = ref(true);
let carouselTimer = null;

const activeSlide = computed(() => slides[slideIndex.value] ?? slides[0]);
const transitionName = computed(() => (autoplayEnabled.value ? 'cross-platform-fade' : 'cross-platform-instant'));

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

function clampSlideIndex(index) {
    const count = slides.length;
    if (count === 0 || !Number.isFinite(index)) {
        return 0;
    }
    const normalized = Math.trunc(index);
    return ((normalized % count) + count) % count;
}

function nextSlide() {
    slideIndex.value = clampSlideIndex(slideIndex.value + 1);
    restartCarousel();
}

function prevSlide() {
    slideIndex.value = clampSlideIndex(slideIndex.value - 1);
    restartCarousel();
}

function pauseCarousel() {
    if (carouselTimer !== null) {
        window.clearInterval(carouselTimer);
        carouselTimer = null;
    }
}

function playCarousel() {
    if (!autoplayEnabled.value) {
        return;
    }
    pauseCarousel();
    carouselTimer = window.setInterval(() => {
        slideIndex.value = clampSlideIndex(slideIndex.value + 1);
    }, CAROUSEL_INTERVAL_MS);
}

function restartCarousel() {
    if (!autoplayEnabled.value) {
        return;
    }
    playCarousel();
}

function onFocusOut(event) {
    const root = rootRef.value;
    if (!root || root.contains(event.relatedTarget)) {
        return;
    }
    playCarousel();
}

onMounted(() => {
    autoplayEnabled.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (autoplayEnabled.value) {
        playCarousel();
    }
});

onBeforeUnmount(() => {
    pauseCarousel();
});
</script>

<style scoped>
.cross-platform-carousel {
    margin: 0;
    outline: none;
}

.cross-platform-carousel:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 4px;
    border-radius: 0.75rem;
}

.cross-platform-carousel__link {
    display: block;
    text-decoration: none;
}

.cross-platform-carousel__stage {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
}

.cross-platform-carousel__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.75rem;
}

.cross-platform-fade-enter-active,
.cross-platform-fade-leave-active {
    transition: opacity 0.6s ease;
}

.cross-platform-fade-enter-from,
.cross-platform-fade-leave-to {
    opacity: 0;
}

.cross-platform-instant-enter-active,
.cross-platform-instant-leave-active {
    transition: none;
}

@media (prefers-reduced-motion: reduce) {
    .cross-platform-fade-enter-active,
    .cross-platform-fade-leave-active {
        transition: none;
    }
}
</style>
