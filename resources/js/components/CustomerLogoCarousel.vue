<template>
    <div
        v-if="variant === 'strip'"
        class="customer-logo-carousel customer-logo-carousel--strip"
        aria-label="Logos clients"
    >
        <div class="customer-logo-carousel__track">
            <ul class="customer-logo-carousel__row">
                <li v-for="(logo, index) in customerLogos" :key="`a-${index}`" class="customer-logo-carousel__item">
                    <img
                        class="customer-logo-carousel__image"
                        :src="logo.src"
                        :alt="logo.alt"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, logo.fallback)"
                    />
                </li>
            </ul>
            <ul class="customer-logo-carousel__row" aria-hidden="true">
                <li v-for="(logo, index) in customerLogos" :key="`b-${index}`" class="customer-logo-carousel__item">
                    <img
                        class="customer-logo-carousel__image"
                        :src="logo.src"
                        :alt="logo.alt"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, logo.fallback)"
                    />
                </li>
            </ul>
        </div>
    </div>

    <figure
        v-else
        class="customer-logo-carousel customer-logo-carousel--compact"
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
    alt: customerLogoMeta[index]?.alt ?? 'Logo client WINDEV',
}));

const currentIndex = ref(0);
let carouselTimer = null;

const currentLogo = computed(() => customerLogos[currentIndex.value]);

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

onMounted(() => {
    if (props.variant !== 'compact') {
        return;
    }

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

.customer-logo-carousel--strip {
    --logo-strip-scale: 1.587;
    overflow: hidden;
    width: 100%;
    min-height: calc(2.75rem * var(--logo-strip-scale));
}

.customer-logo-carousel__track {
    display: flex;
    width: max-content;
    animation: customer-logo-scroll 45s linear infinite;
}

.customer-logo-carousel--strip:hover .customer-logo-carousel__track {
    animation-play-state: paused;
}

.customer-logo-carousel__row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    gap: clamp(calc(1.5rem * var(--logo-strip-scale, 1)), calc(4vw * var(--logo-strip-scale, 1)), calc(3rem * var(--logo-strip-scale, 1)));
    flex-shrink: 0;
    margin: 0;
    padding: 0 calc(1rem * var(--logo-strip-scale, 1));
    list-style: none;
    min-height: calc(2.75rem * var(--logo-strip-scale, 1));
}

.customer-logo-carousel__item {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(2.75rem * var(--logo-strip-scale, 1));
}

.customer-logo-carousel--strip .customer-logo-carousel__image {
    display: block;
    width: auto;
    height: calc(2.75rem * var(--logo-strip-scale));
    max-width: calc(8rem * var(--logo-strip-scale));
    object-fit: contain;
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

@keyframes customer-logo-scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

@media (prefers-reduced-motion: reduce) {
    .customer-logo-carousel__track {
        animation: none;
        flex-wrap: wrap;
        width: 100%;
        justify-content: center;
        gap: 1rem;
    }

    .customer-logo-carousel__row[aria-hidden='true'] {
        display: none;
    }
}
</style>
