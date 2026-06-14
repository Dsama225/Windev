<template>
    <section class="boutique-page__suite-line section-shell" aria-label="Positionnement produit">
        <p class="boutique-page__suite-text">
            Suite logicielle de développement d'applications <strong>multiplateformes</strong>
        </p>
        <figure class="boutique-page__suite-platforms">
            <img
                :src="homeSuiteCrossPlatform.src"
                alt="Logiciels intégrés pour développer des applications multiplateformes"
                width="283"
                height="48"
                loading="eager"
                decoding="async"
                @error="onImageError($event, homeSuiteCrossPlatform.fallback)"
            />
        </figure>
    </section>
</template>

<script setup>
import { homeSuiteCrossPlatform } from '../../data/homePageImages.js';
import { applyImageFallback } from '../../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.boutique-page__suite-line {
    text-align: center;
    margin-top: 0.35rem;
    margin-bottom: 0.85rem;
}

.boutique-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: var(--color-text-primary);
}

.boutique-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.boutique-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}
</style>
