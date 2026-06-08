<template>
    <figure
        class="customer-logo-carousel"
        :class="{ 'customer-logo-carousel--compact': variant === 'compact' }"
    >
        <img
            class="customer-logo-carousel__image"
            :src="currentLogo.src"
            :alt="currentLogo.alt"
            loading="lazy"
            decoding="async"
            @error="onImageError($event, currentLogo.fallback)"
        />
    </figure>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { homeCustomerLogos } from '../data/homePageImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

const props = defineProps({
    variant: {
        type: String,
        default: 'strip',
        validator: (value) => ['strip', 'compact'].includes(value),
    },
    intervalMs: {
        type: Number,
        default: 2200,
    },
});

const customerLogoMeta = [
    { alt: 'Porsche' },
    { alt: 'Seiko' },
    { alt: 'Clarins' },
    { alt: 'Bristol-Myers Squibb' },
    { alt: 'Playmobil' },
    { alt: 'Bridgestone' },
    { alt: 'Quiksilver' },
    { alt: 'John Deere' },
    { alt: 'Shell' },
    { alt: 'Segafredo' },
    { alt: 'Bollinger' },
    { alt: 'Honda' },
    { alt: 'Kenzo' },
    { alt: "L'Oréal" },
    { alt: 'Siemens' },
];

const customerLogos = homeCustomerLogos.map((logo, index) => ({
    src: logo.src,
    fallback: logo.fallback,
    alt: customerLogoMeta[index]?.alt ?? 'WINDEV customer logo',
}));

const currentIndex = ref(0);
let carouselTimer = null;

const currentLogo = computed(() => customerLogos[currentIndex.value]);

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

onMounted(() => {
    carouselTimer = window.setInterval(() => {
        currentIndex.value = (currentIndex.value + 1) % customerLogos.length;
    }, props.intervalMs);
});

onBeforeUnmount(() => {
    if (carouselTimer) {
        window.clearInterval(carouselTimer);
    }
});
</script>

<style scoped>
.customer-logo-carousel {
    margin: 0;
}

.customer-logo-carousel--compact {
    width: 186px;
    height: 142px;
    border: 1px solid var(--color-border-strong);
    border-radius: 0.35rem;
    background: var(--color-input-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem;
    box-shadow: var(--shadow-glass);
    overflow: hidden;
}

.customer-logo-carousel--compact .customer-logo-carousel__image {
    width: 92%;
    height: 92%;
    object-fit: contain;
    object-position: center;
    filter: saturate(1.03) contrast(1.02);
}

.customer-logo-carousel:not(.customer-logo-carousel--compact) .customer-logo-carousel__image {
    display: block;
    max-width: 12.5rem;
    max-height: 5.5rem;
    width: auto;
    height: auto;
    margin: 0 auto;
    object-fit: contain;
}
</style>
