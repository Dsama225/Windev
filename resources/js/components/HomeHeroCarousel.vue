<template>
    <div
        ref="heroCarouselRef"
        class="home-hero-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Bannières promotionnelles"
        tabindex="0"
        @mouseenter="pauseHeroCarousel"
        @mouseleave="onHeroCarouselMouseLeave"
        @focusin="pauseHeroCarousel"
        @focusout="onHeroCarouselFocusOut"
        @keydown.left.prevent="prevHeroSlide"
        @keydown.right.prevent="onHeroCarouselNext"
    >
        <div class="home-hero-carousel__stage" aria-live="polite" aria-atomic="true">
            <Transition :name="heroTransitionName" mode="out-in">
                <div
                    v-if="heroSlideIndex === 0"
                    id="home-hero-slide-suite"
                    key="suite"
                    role="tabpanel"
                    tabindex="-1"
                    :aria-labelledby="'home-hero-tab-suite'"
                    class="home-hero-carousel__slide home-hero-carousel__slide--suite"
                >
                    <div
                        class="home-hero-carousel__suite-bg"
                        :style="{ backgroundImage: `url(${homeHeroBackground.src})` }"
                    >
                        <img
                            class="home-hero-carousel__badge"
                            :src="homeHeroBadge.src"
                            alt=""
                            width="100"
                            height="100"
                            loading="eager"
                            decoding="async"
                            aria-hidden="true"
                            @error="onImageError($event, homeHeroBadge.fallback)"
                        />
                        <div class="home-hero-carousel__suite-content">
                            <img
                                class="home-hero-carousel__suite-logo"
                                :src="homeSuiteLogo.src"
                                alt="WINDEV Suite"
                                loading="eager"
                                decoding="async"
                                @error="onImageError($event, homeSuiteLogo.fallback)"
                            />
                        </div>
                        <div class="home-hero-carousel__buttons">
                            <RouterLink class="home-hero-carousel__btn home-hero-carousel__btn--primary" to="/software/windev">
                                Présentation
                            </RouterLink>
                            <RouterLink class="home-hero-carousel__btn" to="/software/new-features-2026">
                                Nouveautés
                            </RouterLink>
                            <RouterLink class="home-hero-carousel__btn home-hero-carousel__btn--dark" to="/software/subscribe">
                                S'abonner
                            </RouterLink>
                        </div>
                    </div>
                </div>
                <RouterLink
                    v-else
                    id="home-hero-slide-version"
                    key="version"
                    role="tabpanel"
                    tabindex="-1"
                    :aria-labelledby="'home-hero-tab-version'"
                    class="home-hero-carousel__slide home-hero-carousel__slide--version"
                    to="/software/new-features-2026"
                >
                    <picture class="home-hero-carousel__version-media">
                        <source media="(max-width: 696px)" :srcset="homeHeroVersionMobile.src" />
                        <img
                            class="home-hero-carousel__version-image"
                            :src="homeSeminar.src"
                            alt="La version 2026 est disponible — WINDEV, WEBDEV et WINDEV Mobile"
                            loading="eager"
                            decoding="async"
                            @error="onImageError($event, homeSeminar.fallback)"
                        />
                    </picture>
                </RouterLink>
            </Transition>
        </div>
        <div class="home-hero-carousel__dots" role="tablist" aria-label="Choisir une bannière">
            <button
                v-for="(slide, index) in heroSlides"
                :id="`home-hero-tab-${slide.id}`"
                :key="slide.id"
                type="button"
                role="tab"
                class="home-hero-carousel__dot"
                :class="{ 'home-hero-carousel__dot--active': heroSlideIndex === index }"
                :aria-selected="heroSlideIndex === index"
                :aria-controls="`home-hero-slide-${slide.id}`"
                :tabindex="heroSlideIndex === index ? 0 : -1"
                :aria-label="slide.label"
                @click="goToHeroSlide(index)"
            />
        </div>
    </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import {
    homeHeroBackground,
    homeHeroBadge,
    homeHeroVersionMobile,
    homeSeminar,
    homeSuiteLogo,
} from '../data/homePageImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

const HERO_CAROUSEL_INTERVAL_MS = 4500;

const heroSlides = [
    { id: 'suite', label: 'WINDEV Suite' },
    { id: 'version', label: 'Version 2026' },
];

const heroCarouselRef = ref(null);
const heroSlideIndex = ref(0);
const heroAutoplayEnabled = ref(true);
let heroCarouselTimer = null;

const heroTransitionName = computed(() =>
    heroAutoplayEnabled.value ? 'home-hero-fade' : 'home-hero-instant',
);

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

function clampHeroSlideIndex(index) {
    const count = heroSlides.length;
    if (count === 0 || !Number.isFinite(index)) {
        return 0;
    }
    const normalized = Math.trunc(index);
    return ((normalized % count) + count) % count;
}

function nextHeroSlide() {
    heroSlideIndex.value = clampHeroSlideIndex(heroSlideIndex.value + 1);
}

function onHeroCarouselNext() {
    nextHeroSlide();
    restartHeroCarousel();
}

function prevHeroSlide() {
    heroSlideIndex.value = clampHeroSlideIndex(heroSlideIndex.value - 1);
    restartHeroCarousel();
}

function goToHeroSlide(index) {
    heroSlideIndex.value = clampHeroSlideIndex(index);
    restartHeroCarousel();
}

function pauseHeroCarousel() {
    if (heroCarouselTimer !== null) {
        window.clearInterval(heroCarouselTimer);
        heroCarouselTimer = null;
    }
}

function playHeroCarousel() {
    if (!heroAutoplayEnabled.value) {
        return;
    }
    pauseHeroCarousel();
    heroCarouselTimer = window.setInterval(nextHeroSlide, HERO_CAROUSEL_INTERVAL_MS);
}

function restartHeroCarousel() {
    if (!heroAutoplayEnabled.value) {
        return;
    }
    playHeroCarousel();
}

function onHeroCarouselMouseLeave() {
    playHeroCarousel();
}

function onHeroCarouselFocusOut(event) {
    const root = heroCarouselRef.value;
    if (!root || root.contains(event.relatedTarget)) {
        return;
    }
    playHeroCarousel();
}

function initHeroCarouselAutoplay() {
    heroAutoplayEnabled.value = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (heroAutoplayEnabled.value) {
        playHeroCarousel();
    }
}

onMounted(() => {
    initHeroCarouselAutoplay();
});

onBeforeUnmount(() => {
    pauseHeroCarousel();
});
</script>

<style scoped>
.home-hero-carousel {
    position: relative;
    border-radius: 1.35rem;
    overflow: hidden;
    box-shadow: 0 10px 28px rgba(30, 45, 80, 0.1);
}

.home-hero-carousel__stage {
    position: relative;
    width: 100%;
    aspect-ratio: 100 / 49;
}

.home-hero-carousel__slide {
    position: absolute;
    inset: 0;
    overflow: hidden;
}

.home-hero-carousel__slide--suite {
    display: block;
}

.home-hero-carousel__suite-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.home-hero-carousel__suite-content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3.25rem 1rem 3.5rem;
}

.home-hero-carousel__slide--version {
    display: block;
    color: inherit;
    text-decoration: none;
}

.home-hero-carousel__version-media {
    position: absolute;
    inset: 0;
    display: block;
    width: 100%;
    height: 100%;
    margin: 0;
}

.home-hero-carousel__version-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.home-hero-carousel__dots {
    position: absolute;
    right: 0.75rem;
    top: 0.65rem;
    display: flex;
    gap: 0.35rem;
    z-index: 3;
}

.home-hero-carousel__dot {
    width: 0.55rem;
    height: 0.55rem;
    padding: 0;
    border: none;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.55);
    cursor: pointer;
}

.home-hero-carousel__dot--active {
    background: #fff;
}

.home-hero-carousel__dot:hover {
    background: rgba(255, 255, 255, 0.85);
}

.home-hero-fade-enter-active,
.home-hero-fade-leave-active {
    transition: opacity 0.3s ease;
}

.home-hero-fade-enter-from,
.home-hero-fade-leave-to {
    opacity: 0;
}

.home-hero-instant-enter-active,
.home-hero-instant-leave-active {
    transition: none;
}

.home-hero-carousel:focus {
    outline: none;
}

.home-hero-carousel:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 3px;
}

.home-hero-carousel__dot:focus-visible {
    outline: 2px solid var(--color-brand);
    outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
    .home-hero-fade-enter-active,
    .home-hero-fade-leave-active {
        transition: none;
    }
}

.home-hero-carousel__badge {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    width: clamp(3rem, 10vw, 4.5rem);
    height: auto;
    z-index: 2;
}

.home-hero-carousel__suite-logo {
    display: block;
    max-width: min(88%, 22rem);
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
}

.home-hero-carousel__buttons {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.55rem;
    padding: 0.75rem;
    background: linear-gradient(
        145deg,
        rgba(255, 229, 102, 0.42) 0%,
        rgba(245, 208, 32, 0.34) 55%,
        rgba(232, 192, 24, 0.4) 100%
    );
    border-top: 1px solid rgba(255, 255, 255, 0);
    backdrop-filter: blur(16px) saturate(150%);
    -webkit-backdrop-filter: blur(16px) saturate(150%);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
}

@supports not ((backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px))) {
    .home-hero-carousel__buttons {
        background: linear-gradient(145deg, #ffe566 0%, #f5d020 55%, #e8c018 100%);
    }
}

.home-hero-carousel__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.95rem;
    border-radius: 999px;
    border: 1px solid color-mix(in oklab, var(--color-surface-border) 80%, transparent);
    background: color-mix(in oklab, var(--color-input-bg) 55%, transparent);
    backdrop-filter: blur(10px) saturate(140%);
    -webkit-backdrop-filter: blur(10px) saturate(140%);
    color: var(--color-text-primary);
    font-size: 0.78rem;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 2px 10px rgba(30, 45, 80, 0.08);
}

.home-hero-carousel__btn:hover {
    background: color-mix(in oklab, var(--color-input-bg) 82%, transparent);
}

.home-hero-carousel__btn--primary {
    background: color-mix(in oklab, var(--color-input-bg) 78%, transparent);
    border-color: var(--color-surface-border);
}

.home-hero-carousel__btn--dark {
    background: rgba(26, 39, 68, 0.78);
    border-color: rgba(26, 39, 68, 0.88);
    color: #fff;
}

.home-hero-carousel__btn--dark:hover {
    background: rgba(15, 26, 48, 0.9);
}

@media (min-width: 697px) {
    .home-hero-carousel__stage {
        aspect-ratio: 100 / 28.28;
    }
}
</style>
