<template>
    <AppNavbar />
    <main class="nf-page pb-10">
        <section class="section-shell nf-page__suite-line" aria-label="Product positioning">
            <p class="nf-page__suite-text">Cross-platform application development software suite</p>
            <div class="nf-page__os-row" aria-hidden="true">
                <span v-for="n in 7" :key="n" class="nf-page__os-dot" />
            </div>
        </section>

        <section class="section-shell nf-page__hero" aria-label="New features 2026">
            <div class="nf-page__hero-card">
                <figure class="nf-page__hero-figure">
                    <img
                        class="nf-page__hero-image"
                        :src="heroImageSrc"
                        alt="Discover the 900 new features in WINDEV, WEBDEV and WINDEV Mobile 2026"
                        loading="eager"
                        decoding="async"
                        @error="onHeroImageError"
                    />
                </figure>
                <div class="nf-page__hero-copy">
                    <img
                        class="nf-page__badge"
                        :src="newFeatureBadgeUrl"
                        alt=""
                        width="48"
                        height="48"
                        loading="lazy"
                        aria-hidden="true"
                        @error="hideImage"
                    />
                    <h1 class="nf-page__hero-title">
                        Discover the 900 new features in WINDEV, WEBDEV and WINDEV Mobile 2026
                    </h1>
                    <p class="nf-page__hero-lead">
                        Version 2026 is available now — explore the major innovations across the entire suite.
                    </p>
                    <div class="nf-page__hero-actions">
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
                            :href="NEW_FEATURES_PDF_EN"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            PDF
                        </a>
                        <RouterLink class="nf-page__pill" to="/software/subscribe">Subscribe</RouterLink>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-shell nf-page__layout">
            <div class="nf-page__main">
                <aside class="nf-page__toc-mobile" aria-label="On this page">
                    <p class="nf-page__toc-label">On this page</p>
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
                    v-for="(section, index) in newFeaturesSections"
                    :id="section.id"
                    :key="section.id"
                    class="nf-page__section"
                    :class="sectionToneClass(section)"
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
                            <span class="nf-page__badge-range">New features {{ section.badge }}</span>
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
                                :href="`${NEW_FEATURES_PDF_EN}#page=${section.pdfPage}`"
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

                    <figure v-if="section.image" class="nf-page__section-hero-img">
                        <img
                            :src="sectionImageSrc(section)"
                            :alt="section.title"
                            loading="lazy"
                            decoding="async"
                            @error="(event) => onSectionImageError(event, section)"
                        />
                    </figure>

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
                            <li v-for="(item, liIndex) in subsection.list" :key="`${section.id}-li-${subIndex}-${liIndex}`">
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

                        <figure v-if="subsection.image" class="nf-page__subsection-figure">
                            <img
                                :src="subsectionImageSrc(subsection.image)"
                                :alt="subsection.title"
                                loading="lazy"
                                decoding="async"
                                @error="(event) => onSubsectionImageError(event, subsection.image)"
                            />
                        </figure>
                    </div>
                </article>

                <section class="nf-page__docs" aria-labelledby="nf-docs-title">
                    <h2 id="nf-docs-title" class="nf-page__docs-title">Documentation</h2>
                    <ul class="nf-page__docs-list">
                        <li>
                            <span class="nf-page__flag" aria-hidden="true">🇺🇸</span>
                            <a
                                class="nf-page__text-link"
                                :href="NEW_FEATURES_PDF_EN"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                New features 2026 (eBook / PDF)
                            </a>
                        </li>
                        <li>
                            <span class="nf-page__flag" aria-hidden="true">🇫🇷</span>
                            <a
                                class="nf-page__text-link"
                                :href="NEW_FEATURES_PAGE_FR"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Nouveautés 2026 (site / eBook)
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <aside class="nf-page__sidebar" aria-label="Navigation and related links">
                <nav class="nf-page__toc-desktop" aria-label="On this page">
                    <p class="nf-page__sidebar-title">On this page</p>
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
                        :src="packagesImageSrc"
                        alt="WINDEV 2026, WEBDEV 2026, WINDEV Mobile 2026"
                        loading="lazy"
                        decoding="async"
                        @error="onPackagesImageError"
                    />
                </figure>

                <p class="nf-page__sidebar-text">
                    Your WINDEV code, windows and data are compatible with WEBDEV and WINDEV Mobile.
                </p>

                <div class="nf-page__sidebar-block">
                    <h3 class="nf-page__sidebar-heading">Products</h3>
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
                    <h3 class="nf-page__sidebar-heading">Subscribe &amp; download</h3>
                    <ul class="nf-page__sidebar-list">
                        <li><RouterLink class="nf-page__text-link" to="/software/subscribe">Subscribe</RouterLink></li>
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
                    <p class="nf-page__customer-title">They are using WINDEV</p>
                    <figure class="nf-page__customer-box">
                        <img
                            class="nf-page__customer-logo"
                            :src="customerCarouselLogos[currentCustomerLogoIndex]"
                            alt="WINDEV customer logo"
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>
                </div>
            </aside>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import {
    NEW_FEATURES_EBOOK_EN,
    NEW_FEATURES_PAGE_FR,
    NEW_FEATURES_PDF_EN,
    featureImage,
    featureImageOfficial,
    newFeaturesSections,
    newFeaturesToc,
} from '../data/newFeatures2026Content.js';

const newFeatureBadgeUrl = '/img/newfeatures/newfeature.gif';
const heroImageSrc = ref('/img/newfeatures/hero.webp');
const packagesImageSrc = ref('/img/newfeatures/packages-windev-webdev-windev-mobile-2026.webp');

const customerCarouselLogos = [
    '/img/bande/1.jpg',
    '/img/bande/2.jpg',
    '/img/bande/3.jpg',
    '/img/bande/4.jpg',
    '/img/bande/5.jpg',
    '/img/bande/6.png',
    '/img/bande/7.jpg',
    '/img/bande/8.jpg',
    '/img/bande/9.jpg',
    '/img/bande/10.svg',
    '/img/bande/11.gif',
    '/img/bande/12.jpg',
    '/img/bande/13.jpg',
    '/img/bande/14.svg',
    '/img/bande/15.png',
];

const currentCustomerLogoIndex = ref(0);
let customerCarouselTimer = null;

function sectionToneClass(section) {
    if (section.tone === 'dark') {
        return 'nf-page__section--dark';
    }
    if (section.tone === 'yellow') {
        return 'nf-page__section--yellow';
    }
    return 'nf-page__section--white';
}

function sectionImageSrc(section) {
    if (section.imageIsAbsolute) {
        return section.image;
    }
    return featureImage(section.image);
}

function subsectionImageSrc(filename) {
    return featureImage(filename);
}

function onHeroImageError(event) {
    event.target.src = featureImageOfficial('hero.png');
}

function onPackagesImageError(event) {
    event.target.src =
        'https://windev.com/storage/en_US/img/2026/packages-windev-webdev-windev-mobile-2026.png';
}

function onSectionImageError(event, section) {
    if (section.imageIsAbsolute) {
        return;
    }
    event.target.src = featureImageOfficial(section.image);
}

function onSubsectionImageError(event, filename) {
    event.target.src = featureImageOfficial(filename);
}

function hideImage(event) {
    event.target.style.display = 'none';
}

onMounted(() => {
    document.title = 'New features 2026 — WINDEV, WEBDEV, WINDEV Mobile | PC SOFT';
    customerCarouselTimer = window.setInterval(() => {
        currentCustomerLogoIndex.value =
            (currentCustomerLogoIndex.value + 1) % customerCarouselLogos.length;
    }, 2200);
});

onBeforeUnmount(() => {
    if (customerCarouselTimer) {
        window.clearInterval(customerCarouselTimer);
    }
});
</script>

<style scoped>
.nf-page {
    color: #1a2744;
}

.nf-page__suite-line {
    text-align: center;
    margin-top: 0.35rem;
    margin-bottom: 0.85rem;
}

.nf-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.nf-page__os-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
}

.nf-page__os-dot {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 9999px;
    border: 2px solid #d6dce7;
    background: #f4f6fa;
}

.nf-page__hero-card {
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    align-items: center;
    padding: clamp(1rem, 2vw, 1.35rem);
    border-radius: 1.35rem;
    background: linear-gradient(145deg, #ffe566 0%, #f5d020 55%, #e8c018 100%);
    border: 1px solid #e0c018;
    box-shadow: 0 10px 28px rgba(30, 45, 80, 0.1);
}

.nf-page__hero-figure {
    margin: 0;
    border-radius: 1rem;
    overflow: hidden;
    border: 2px solid rgba(255, 255, 255, 0.55);
}

.nf-page__hero-image {
    display: block;
    width: 100%;
    max-height: 14rem;
    object-fit: cover;
}

.nf-page__hero-copy {
    display: grid;
    gap: 0.55rem;
}

.nf-page__badge {
    width: 3rem;
    height: 3rem;
    object-fit: contain;
}

.nf-page__hero-title {
    margin: 0;
    font-size: clamp(1.15rem, 2.4vw, 1.55rem);
    font-weight: 900;
    line-height: 1.2;
    color: #0d2d6e;
}

.nf-page__hero-lead {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.55;
    color: #2a3d5c;
}

.nf-page__hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.25rem;
}

.nf-page__pill {
    display: inline-flex;
    align-items: center;
    padding: 0.4rem 0.95rem;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.85);
    background: rgba(255, 255, 255, 0.72);
    color: #1a3a72;
    font-size: 0.78rem;
    font-weight: 700;
    text-decoration: none;
}

.nf-page__pill:hover {
    background: #fff;
}

.nf-page__pill--primary {
    background: #0b56bf;
    border-color: #0b56bf;
    color: #fff;
}

.nf-page__pill--primary:hover {
    background: #0949a3;
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
    border-radius: 1rem;
    background: #fff;
    border: 1px solid #dbe1ec;
}

.nf-page__toc-label,
.nf-page__sidebar-title {
    margin: 0 0 0.5rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.nf-page__toc-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem 0.65rem;
}

.nf-page__toc-link {
    font-size: 0.78rem;
    font-weight: 700;
    color: #0b56bf;
    text-decoration: none;
}

.nf-page__toc-link:hover {
    text-decoration: underline;
}

.nf-page__section {
    scroll-margin-top: 5.5rem;
    padding: clamp(1rem, 2vw, 1.25rem);
    border-radius: 1.35rem;
    border: 1px solid #dbe1ec;
}

.nf-page__section--white {
    background: #fff;
    box-shadow: 0 6px 18px rgba(22, 38, 68, 0.06);
}

.nf-page__section--yellow {
    background: linear-gradient(145deg, #fff9d6 0%, #fff4b8 100%);
    border-color: #e8d878;
}

.nf-page__section--dark {
    background: linear-gradient(145deg, #0d2d6e 0%, #1a4a8e 100%);
    border-color: #0a2558;
    color: #eef3ff;
}

.nf-page__section--dark .nf-page__section-title,
.nf-page__section--dark .nf-page__subsection-title {
    color: #fff;
}

.nf-page__section--dark .nf-page__paragraph,
.nf-page__section--dark .nf-page__subsection-title,
.nf-page__section--dark .nf-page__list {
    color: #dce6f8;
}

.nf-page__section--dark .nf-page__badge-range {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
}

.nf-page__section--dark .nf-page__meta-link {
    color: #ffe566;
}

.nf-page__section--dark .nf-page__code {
    background: rgba(0, 0, 0, 0.25);
    color: #f0f4ff;
}

.nf-page__section-header {
    display: grid;
    gap: 0.65rem;
    margin-bottom: 1rem;
}

.nf-page__section-title {
    margin: 0;
    font-size: clamp(1.1rem, 2.2vw, 1.45rem);
    font-weight: 900;
    text-transform: uppercase;
    line-height: 1.2;
    color: #123d8c;
}

.nf-page__section-subtitle {
    margin: 0.2rem 0 0;
    font-size: 1rem;
    font-weight: 700;
    color: #42526d;
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
    background: #eef3fb;
    font-size: 0.72rem;
    font-weight: 800;
    color: #123d8c;
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
    color: #0b56bf;
    text-decoration: none;
}

.nf-page__meta-link:hover {
    text-decoration: underline;
}

.nf-page__section-hero-img {
    margin: 0 0 1rem;
    text-align: center;
}

.nf-page__section-hero-img img,
.nf-page__subsection-figure img {
    max-width: 100%;
    height: auto;
    border-radius: 0.65rem;
}

.nf-page__subsection {
    padding-top: 0.85rem;
    margin-top: 0.85rem;
    border-top: 1px solid rgba(30, 45, 80, 0.1);
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
    color: #1a2744;
}

.nf-page__paragraph {
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: #42526d;
}

.nf-page__list {
    margin: 0 0 0.5rem;
    padding-left: 1.2rem;
    font-size: 0.88rem;
    line-height: 1.55;
    color: #42526d;
}

.nf-page__code {
    margin: 0.5rem 0 0.75rem;
    padding: 0.75rem 1rem;
    border-radius: 0.65rem;
    background: #f4f6fa;
    border: 1px solid #dbe1ec;
    overflow-x: auto;
    font-size: 0.78rem;
    line-height: 1.5;
    color: #1a2744;
}

.nf-page__code code {
    white-space: pre-wrap;
    word-break: break-word;
}

.nf-page__subsection-figure {
    margin: 0.65rem 0 0;
    text-align: center;
}

.nf-page__docs {
    padding: 1rem 1.15rem;
    border-radius: 1.35rem;
    background: #fff;
    border: 1px solid #dbe1ec;
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
    align-items: center;
    gap: 0.5rem;
}

.nf-page__flag {
    font-size: 1rem;
}

.nf-page__text-link {
    color: #0b56bf;
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
    border-radius: 1.35rem;
    background: #fff;
    border: 1px solid #dbe1ec;
    box-shadow: 0 6px 18px rgba(22, 38, 68, 0.06);
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
    color: #42526d;
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

.nf-page__customer-title {
    margin: 0 0 0.45rem;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #5f6f8c;
}

.nf-page__customer-box {
    margin: 0;
    min-height: 3.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.75rem;
    border: 1px solid #dbe1ec;
    background: #f8fafc;
}

.nf-page__customer-logo {
    max-width: 100%;
    max-height: 2.75rem;
    object-fit: contain;
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

    .nf-page__hero-card {
        grid-template-columns: 1fr;
    }
}
</style>
