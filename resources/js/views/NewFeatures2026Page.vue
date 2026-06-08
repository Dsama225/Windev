<template>
    <AppNavbar />
    <main class="nf-page pb-10">
        <section class="section-shell nf-page__suite-line" aria-label="Positionnement produit">
            <p class="nf-page__suite-text">
                Suite de logiciels de développement d'applications <strong>multi-plateformes</strong>
            </p>
            <figure class="nf-page__suite-platforms">
                <img
                    :src="homeSuiteCrossPlatform.src"
                    alt="Logiciels intégrés pour le développement d'applications multi-plateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, homeSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell nf-page__hero" aria-label="Suite WINDEV">
            <HomeHeroCarousel />
        </section>

        <section class="section-shell nf-page__strip" aria-label="Raccourcis documentation">
            <p class="nf-page__strip-text">Découvrez les 900 nouveautés de la version 2026</p>
            <div class="nf-page__strip-actions">
                <a
                    class="nf-page__pill nf-page__pill--primary"
                    :href="NEW_FEATURES_EBOOK_EN"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    eBook
                </a>
                <a
                    class="nf-page__pill"
                    :href="newFeaturesPdfEn.href"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    PDF
                </a>
                <RouterLink class="nf-page__pill" to="/software/subscribe">S'abonner</RouterLink>
            </div>
        </section>

        <section class="section-shell nf-page__figure-hero" aria-label="Nouveautés 2026">
            <figure class="nf-page__hero-figure">
                <img
                    class="nf-page__hero-image"
                    :src="newFeaturesHero.src"
                    alt="Découvrez les 900 nouveautés de WINDEV, WEBDEV et WINDEV Mobile 2026"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, newFeaturesHero.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell nf-page__layout">
            <div class="nf-page__main">
                <aside class="nf-page__toc-mobile glass-frame" aria-label="Sur cette page">
                    <p class="nf-page__toc-label">Sur cette page</p>
                    <nav class="nf-page__toc-nav">
                        <a
                            v-for="item in newFeaturesToc"
                            :key="item.id"
                            class="nf-page__toc-link"
                            :href="`#${item.id}`"
                        >
                            {{ item.label }}
                        </a>
                    </nav>
                </aside>

                <article
                    v-for="section in newFeaturesSections"
                    :id="section.id"
                    :key="section.id"
                    class="nf-page__section"
                    :class="[sectionToneClass(section), section.imageCompact && 'nf-page__section--image-compact']"
                    :aria-labelledby="`${section.id}-title`"
                >
                    <header class="nf-page__section-header">
                        <div class="nf-page__section-heading-wrap">
                            <h2 :id="`${section.id}-title`" class="nf-page__section-title">
                                {{ section.title }}
                            </h2>
                            <p v-if="section.titleSub" class="nf-page__section-subtitle">{{ section.titleSub }}</p>
                        </div>
                        <div class="nf-page__section-meta">
                            <span class="nf-page__badge-range">Nouveautés {{ section.badge }}</span>
                            <span
                                v-for="product in section.products"
                                :key="`${section.id}-${product}`"
                                class="nf-page__product-tag"
                                :class="`nf-page__product-tag--${product.toLowerCase()}`"
                            >
                                {{ product }}
                            </span>
                        </div>
                        <div class="nf-page__section-links">
                            <a
                                v-if="section.pdfPage"
                                class="nf-page__meta-link"
                                :href="`${newFeaturesPdfEn.href}#page=${section.pdfPage}`"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                PDF
                            </a>
                            <a
                                v-if="section.ebookUrl"
                                class="nf-page__meta-link"
                                :href="section.ebookUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                eBook
                            </a>
                        </div>
                    </header>

                    <figure
                        v-if="section.video || section.image"
                        class="nf-page__section-media"
                        :class="{ 'nf-page__section-media--compact-image': section.imageCompact }"
                        :aria-label="section.video ? 'Vidéo de démonstration' : undefined"
                    >
                        <video
                            v-if="section.video"
                            class="nf-page__section-video"
                            muted
                            autoplay
                            loop
                            playsinline
                            preload="metadata"
                        >
                            <source :src="conversationalAiIdeVideo.src" type="video/mp4" />
                            <source :src="conversationalAiIdeVideo.fallback" type="video/mp4" />
                        </video>
                        <img
                            v-if="section.image && !section.imageIsAbsolute"
                            class="nf-page__section-media-img"
                            :src="featureImage(section.image).src"
                            :alt="section.title"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, featureImage(section.image).fallback)"
                        />
                        <img
                            v-else-if="section.image"
                            class="nf-page__section-media-img"
                            :src="section.image"
                            :alt="section.title"
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>

                    <div class="nf-page__section-body">
                        <div
                            v-for="(subsection, subIndex) in section.subsections"
                            :key="`${section.id}-sub-${subIndex}`"
                            class="nf-page__subsection"
                        >
                            <h3 class="nf-page__subsection-title">{{ subsection.title }}</h3>

                            <p
                                v-for="(paragraph, pIndex) in subsection.paragraphs"
                                :key="`${section.id}-p-${subIndex}-${pIndex}`"
                                class="nf-page__paragraph"
                            >
                                {{ paragraph }}
                            </p>

                            <ul v-if="subsection.list?.length" class="nf-page__list">
                                <li
                                    v-for="(item, liIndex) in subsection.list"
                                    :key="`${section.id}-li-${subIndex}-${liIndex}`"
                                >
                                    {{ item }}
                                </li>
                            </ul>

                            <p v-if="subsection.afterList" class="nf-page__paragraph">{{ subsection.afterList }}</p>

                            <ul v-if="subsection.list2?.length" class="nf-page__list">
                                <li
                                    v-for="(item, liIndex) in subsection.list2"
                                    :key="`${section.id}-li2-${subIndex}-${liIndex}`"
                                >
                                    {{ item }}
                                </li>
                            </ul>

                            <pre v-if="subsection.code" class="nf-page__code"><code>{{ subsection.code }}</code></pre>

                            <figure v-if="subsection.image" class="nf-page__subsection-media">
                                <img
                                    class="nf-page__subsection-media-img"
                                    :src="featureImage(subsection.image).src"
                                    :alt="subsection.title"
                                    loading="lazy"
                                    decoding="async"
                                    @error="onImageError($event, featureImage(subsection.image).fallback)"
                                />
                            </figure>
                        </div>
                    </div>
                </article>

                <section class="nf-page__docs glass-frame" aria-labelledby="nf-docs-title">
                    <h2 id="nf-docs-title" class="nf-page__docs-title">Documentation</h2>
                    <ul class="nf-page__docs-list">
                        <li>
                            <span class="nf-page__flag" aria-hidden="true">🇺🇸</span>
                            <a
                                class="nf-page__text-link"
                                :href="newFeaturesPdfEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Nouveautés 2026 (PDF)
                            </a>
                            <span class="nf-page__docs-sep">·</span>
                            <a
                                class="nf-page__text-link"
                                :href="NEW_FEATURES_EBOOK_EN"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                eBook
                            </a>
                        </li>
                        <li>
                            <span class="nf-page__flag" aria-hidden="true">🇫🇷</span>
                            <a
                                class="nf-page__text-link"
                                :href="newFeaturesPdfFr.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Nouveautés 2026 (PDF)
                            </a>
                            <span class="nf-page__docs-sep">·</span>
                            <a
                                class="nf-page__text-link"
                                :href="NEW_FEATURES_PAGE_FR"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Site PC SOFT
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <aside class="nf-page__sidebar glass-frame" aria-label="Navigation et liens associés">
                <nav class="nf-page__toc-desktop" aria-label="Sur cette page">
                    <p class="nf-page__sidebar-title">Sur cette page</p>
                    <a
                        v-for="item in newFeaturesToc"
                        :key="`toc-${item.id}`"
                        class="nf-page__toc-link"
                        :href="`#${item.id}`"
                    >
                        {{ item.label }}
                    </a>
                </nav>

                <figure class="nf-page__sidebar-packages">
                    <img
                        :src="newFeaturesPackages.src"
                        alt="WINDEV 2026, WEBDEV 2026, WINDEV Mobile 2026"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, newFeaturesPackages.fallback)"
                    />
                </figure>

                <p class="nf-page__sidebar-text">
                    Votre code WINDEV, vos fenêtres et vos données sont compatibles avec WEBDEV et WINDEV Mobile.
                </p>

                <div class="nf-page__sidebar-block">
                    <h3 class="nf-page__sidebar-heading">Produits</h3>
                    <ul class="nf-page__sidebar-list">
                        <li><RouterLink class="nf-page__text-link" to="/software/windev">WINDEV</RouterLink></li>
                        <li><RouterLink class="nf-page__text-link" to="/software/webdev">WEBDEV</RouterLink></li>
                        <li>
                            <RouterLink class="nf-page__text-link" to="/software/windevmobile">WINDEV Mobile</RouterLink>
                        </li>
                        <li><RouterLink class="nf-page__text-link" to="/software/hfsql">HFSQL</RouterLink></li>
                        <li><RouterLink class="nf-page__text-link" to="/software/wdmsg">WDMSG</RouterLink></li>
                    </ul>
                </div>

                <div class="nf-page__sidebar-block">
                    <h3 class="nf-page__sidebar-heading">S'abonner et télécharger</h3>
                    <ul class="nf-page__sidebar-list">
                        <li><RouterLink class="nf-page__text-link" to="/software/subscribe">S'abonner</RouterLink></li>
                        <li>
                            <RouterLink class="nf-page__text-link" to="/download/windev-express">WINDEV Express</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="nf-page__text-link" to="/download/windev-mobile-express">
                                WINDEV Mobile Express
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="nf-page__customer">
                    <p class="nf-page__customer-title">Ils utilisent WINDEV</p>
                    <CustomerLogoCarousel variant="compact" />
                </div>
            </aside>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onMounted } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import CustomerLogoCarousel from '../components/CustomerLogoCarousel.vue';
import HomeHeroCarousel from '../components/HomeHeroCarousel.vue';
import { homeSuiteCrossPlatform } from '../data/homePageImages.js';
import {
    NEW_FEATURES_EBOOK_EN,
    NEW_FEATURES_PAGE_FR,
    newFeaturesSections,
    newFeaturesToc,
} from '../data/newFeatures2026Content.js';
import {
    conversationalAiIdeVideo,
    featureImage,
    newFeaturesHero,
    newFeaturesPackages,
} from '../data/newFeatures2026PageImages.js';
import { windevNewFeatures2026En, windevNewFeatures2026Fr } from '../data/windevPageDocuments.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

const newFeaturesPdfEn = windevNewFeatures2026En;
const newFeaturesPdfFr = windevNewFeatures2026Fr;

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

function sectionToneClass(section) {
    if (section.tone === 'dark') {
        return 'nf-page__section--dark';
    }
    if (section.tone === 'yellow') {
        return 'nf-page__section--yellow';
    }
    return 'nf-page__section--white glass-frame';
}

onMounted(() => {
    document.title = 'Nouveautés 2026 — WINDEV, WEBDEV, WINDEV Mobile | PC SOFT';
});
</script>

<style scoped>
.nf-page {
    color: var(--color-text-primary);
    background: transparent;
}

.nf-page__strip {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.65rem 1rem;
    margin-top: 0.75rem;
    margin-bottom: 0.5rem;
    padding: 0.85rem 1rem;
    text-align: center;
    background: transparent;
}

.nf-page__strip-text {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 800;
    color: var(--color-text-primary);
}

.nf-page__strip-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
}

.nf-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.nf-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: var(--color-text-primary);
}

.nf-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.nf-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.nf-page__figure-hero {
    margin-top: 1.9rem;
    margin-bottom: 4%;
    background: transparent;
}

.nf-page__hero-figure {
    margin: 0;
    text-align: center;
}

.nf-page__hero-image {
    display: block;
    width: 100%;
    max-width: 70rem;
    height: auto;
    margin: 0 auto;
}

.nf-page__pill {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.95rem;
    border-radius: 999px;
    border: 2px solid var(--color-text-primary);
    background: color-mix(in oklab, var(--color-surface) 88%, var(--color-input-bg));
    color: var(--color-text-primary);
    font-size: 0.78rem;
    font-weight: 700;
    text-decoration: none;
}

.nf-page__pill:hover {
    background: var(--color-accent);
    border-color: color-mix(in oklab, var(--color-accent) 70%, var(--color-text-primary));
}

.nf-page__pill--primary {
    background: var(--color-accent);
    border-color: var(--color-text-primary);
}

.nf-page__pill--primary:hover {
    background: color-mix(in oklab, var(--color-accent) 85%, #f5d020);
}

.nf-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 280px);
    align-items: start;
}

.nf-page__main {
    display: grid;
    gap: 1rem;
    min-width: 0;
}

.nf-page__toc-mobile {
    display: none;
    padding: 0.85rem 1rem;
}

.nf-page__toc-label,
.nf-page__sidebar-title {
    margin: 0 0 0.5rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-eyebrow);
}

.nf-page__toc-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.65rem;
}

.nf-page__toc-link {
    font-size: 0.78rem;
    font-weight: 700;
    color: var(--color-brand);
    text-decoration: none;
}

.nf-page__toc-link:hover {
    text-decoration: underline;
}

.nf-page__section {
    scroll-margin-top: 5.5rem;
    overflow: hidden;
}

.nf-page__section--white {
    border-color: var(--color-surface-border);
}

.nf-page__section--yellow {
    border-radius: var(--radius-xl);
    border: 1px solid #e8d878;
    background: linear-gradient(145deg, #fff9d6 0%, #fff4b8 100%);
}

.nf-page__section--dark {
    border-radius: var(--radius-xl);
    border: 1px solid #0a2558;
    background: linear-gradient(145deg, #0d2d6e 0%, #1a4a8e 100%);
    color: #eef3ff;
}

.nf-page__section--dark .nf-page__section-title,
.nf-page__section--dark .nf-page__subsection-title {
    color: #fff;
}

.nf-page__section--dark .nf-page__paragraph,
.nf-page__section--dark .nf-page__list {
    color: #dce6f8;
}

.nf-page__section--dark .nf-page__badge-range {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
}

.nf-page__section--dark .nf-page__meta-link {
    color: var(--color-accent);
}

.nf-page__section--dark .nf-page__code {
    background: rgba(0, 0, 0, 0.25);
    color: #f0f4ff;
}

.nf-page__section-header {
    display: grid;
    gap: 0.65rem;
    padding: clamp(1rem, 2vw, 1.25rem);
    padding-bottom: 0.75rem;
}

.nf-page__section-title {
    margin: 0;
    font-size: clamp(1.1rem, 2.2vw, 1.45rem);
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.2;
    color: var(--color-brand-strong);
}

.nf-page__section-subtitle {
    margin: 0.2rem 0 0;
    font-size: 1rem;
    font-weight: 700;
    color: var(--color-text-secondary);
}

.nf-page__section--dark .nf-page__section-subtitle {
    color: #c8d8f0;
}

.nf-page__section-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
}

.nf-page__badge-range {
    padding: 0.25rem 0.55rem;
    border-radius: 0.35rem;
    background: color-mix(in oklab, var(--color-surface) 82%, var(--color-hover-surface));
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--color-brand-strong);
}

.nf-page__product-tag {
    display: inline-flex;
    min-width: 1.65rem;
    justify-content: center;
    padding: 0.2rem 0.35rem;
    border-radius: 0.25rem;
    font-size: 0.68rem;
    font-weight: 900;
    color: #fff;
}

.nf-page__product-tag--wd {
    background: #0b56bf;
}

.nf-page__product-tag--wb {
    background: #e85d04;
}

.nf-page__product-tag--wm {
    background: #7b2cbf;
}

.nf-page__section-links {
    display: flex;
    gap: 0.65rem;
}

.nf-page__meta-link {
    font-size: 0.82rem;
    font-weight: 800;
    color: var(--color-brand);
    text-decoration: none;
}

.nf-page__meta-link:hover {
    text-decoration: underline;
}

.nf-page__section-media {
    margin: 0;
    width: 100%;
    line-height: 0;
    background: #0a0a0a;
}

.nf-page__layout,
.nf-page__main {
    background: transparent;
}

.nf-page__section-media--compact-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
}

.nf-page__section-media--compact-image .nf-page__section-video {
    width: 100%;
    align-self: stretch;
}

.nf-page__section-media--compact-image .nf-page__section-media-img {
    width: 50%;
    max-width: 50%;
    margin: 1rem auto 0;
    object-fit: contain;
}

.nf-page__section-video,
.nf-page__section-media-img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
}

.nf-page__section-body {
    padding: clamp(1rem, 2vw, 1.25rem);
    padding-top: 0.85rem;
}

.nf-page__subsection {
    padding-top: 0.85rem;
    margin-top: 0.85rem;
    border-top: 1px solid var(--color-border);
}

.nf-page__section--dark .nf-page__subsection {
    border-top-color: rgba(255, 255, 255, 0.15);
}

.nf-page__subsection:first-of-type {
    border-top: none;
    margin-top: 0;
    padding-top: 0;
}

.nf-page__subsection-title {
    margin: 0 0 0.45rem;
    font-size: 1rem;
    font-weight: 800;
    color: var(--color-text-primary);
}

.nf-page__paragraph {
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.nf-page__list {
    margin: 0 0 0.5rem;
    padding-left: 1.2rem;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.nf-page__code {
    margin: 0.5rem 0 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.65rem;
    background: color-mix(in oklab, var(--color-surface) 90%, var(--color-muted-surface));
    border: 1px solid var(--color-surface-border);
    overflow-x: auto;
    font-size: 0.78rem;
    line-height: 1.5;
    color: var(--color-text-primary);
}

.nf-page__code code {
    white-space: pre-wrap;
    word-break: break-word;
}

.nf-page__subsection-media {
    margin: 0.75rem 0 0;
    border-radius: 0.65rem;
    overflow: hidden;
    border: 1px solid var(--color-border);
}

.nf-page__subsection-media-img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
}

.nf-page__docs {
    padding: 1rem 1.15rem;
}

.nf-page__docs-title {
    margin: 0 0 0.65rem;
    font-size: 0.95rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
}

.nf-page__docs-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.45rem;
}

.nf-page__docs-list li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.5rem;
}

.nf-page__docs-sep {
    color: var(--color-eyebrow);
}

.nf-page__flag {
    font-size: 1rem;
}

.nf-page__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.nf-page__text-link:hover {
    text-decoration: underline;
}

.nf-page__sidebar {
    position: sticky;
    top: 5.5rem;
    display: grid;
    gap: 1rem;
    padding: clamp(0.85rem, 1.5vw, 1.1rem);
}

.nf-page__toc-desktop {
    display: grid;
    gap: 0.35rem;
    max-height: 14rem;
    overflow-y: auto;
}

.nf-page__sidebar-packages img {
    display: block;
    width: 100%;
    height: auto;
}

.nf-page__sidebar-text {
    margin: 0;
    font-size: 0.84rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.nf-page__sidebar-heading {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.nf-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.nf-page__customer {
    padding: 0;
}

.nf-page__customer-title {
    margin: 0 0 0.45rem;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--color-eyebrow);
}

html.theme-dark .nf-page__section--yellow {
    background: linear-gradient(
        145deg,
        color-mix(in oklab, var(--color-accent) 28%, var(--color-bg-end)) 0%,
        color-mix(in oklab, var(--color-accent) 16%, var(--color-bg-start)) 100%
    );
    border: 1px solid color-mix(in oklab, var(--color-accent) 42%, var(--color-border-strong));
    box-shadow: var(--shadow-glass);
}

html.theme-dark .nf-page__section--yellow .nf-page__section-title,
html.theme-dark .nf-page__section--yellow .nf-page__subsection-title {
    color: var(--color-text-primary);
}

html.theme-dark .nf-page__section--yellow .nf-page__paragraph,
html.theme-dark .nf-page__section--yellow .nf-page__list {
    color: var(--color-text-secondary);
}

html.theme-dark .nf-page__pill--primary {
    color: #0b1f4d;
}

@media (max-width: 1024px) {
    .nf-page__layout {
        grid-template-columns: 1fr;
    }

    .nf-page__sidebar {
        position: static;
    }

    .nf-page__toc-desktop {
        display: none;
    }

    .nf-page__toc-mobile {
        display: block;
    }
}
</style>
