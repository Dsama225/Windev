<template>
    <AppNavbar />
    <main class="wlanguage-page pb-10">
        <section class="section-shell wlanguage-page__suite-line" aria-label="Product positioning">
            <p class="wlanguage-page__suite-text">Cross-platform application development software suite</p>
            <div class="wlanguage-page__os-row" aria-hidden="true">
                <span v-for="n in 7" :key="n" class="wlanguage-page__os-dot" />
            </div>
        </section>

        <HeroSection :slides="heroSlides" />

        <section class="section-shell wlanguage-page__layout" aria-label="WLanguage overview">
            <div class="wlanguage-page__main glass-frame">
                <header class="wlanguage-page__product-header">
                    <figure class="wlanguage-page__logo-figure">
                        <img
                            class="wlanguage-page__logo-img"
                            :src="logoImageUrl"
                            alt="WLanguage — 5th generation programming language"
                            width="320"
                            height="80"
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>
                    <p class="wlanguage-page__tagline">The 5th generation programming language of PC SOFT</p>
                </header>

                <h1 id="wlanguage-main-title" class="wlanguage-page__title">29 WLANGUAGE CODE SAMPLES (5GL)</h1>
                <p class="wlanguage-page__lead">
                    This page presents WLanguage code samples. This is what 5GL code looks like — and remember that for many
                    functions there is nothing to code: the IDE proposes the choices for you. These examples present the
                    language only.
                </p>

                <section
                    v-for="sample in wlanguageSamples"
                    :key="sample.id"
                    class="wlanguage-page__sample"
                    :aria-labelledby="'wlanguage-sample-' + sample.id"
                >
                    <h2 :id="'wlanguage-sample-' + sample.id" class="wlanguage-page__sample-title">
                        Example {{ sample.id }}: {{ sample.title }}
                    </h2>
                    <p v-if="sample.description" class="wlanguage-page__body">{{ sample.description }}</p>
                    <pre class="wlanguage-page__code"><code>{{ sample.code }}</code></pre>
                </section>
            </div>

            <aside class="wlanguage-page__sidebar glass-frame" aria-label="Related links">
                <figure class="wlanguage-page__product-boxes">
                    <img
                        :src="packagesImageUrl"
                        alt="WINDEV 2026, WEBDEV 2026, and WINDEV Mobile 2026 product boxes"
                        loading="lazy"
                        decoding="async"
                    />
                </figure>
                <p class="wlanguage-page__sidebar-text">
                    The <strong>WINDEV, WEBDEV and WINDEV Mobile</strong> environments share the same language: WLanguage.
                </p>

                <div class="wlanguage-page__sidebar-block">
                    <h3 class="wlanguage-page__sidebar-title">Documentation overview</h3>
                    <ul class="wlanguage-page__sidebar-list">
                        <li>
                            <RouterLink class="wlanguage-page__text-link" to="/software/new-features-2026">New features</RouterLink>
                        </li>
                        <li><RouterLink class="wlanguage-page__text-link" to="/software/windev">WINDEV</RouterLink></li>
                        <li><RouterLink class="wlanguage-page__text-link" to="/software/webdev">WEBDEV</RouterLink></li>
                        <li>
                            <RouterLink class="wlanguage-page__text-link" to="/software/windevmobile">WINDEV Mobile</RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="wlanguage-page__sidebar-block">
                    <h3 class="wlanguage-page__sidebar-title">Overview diagrams</h3>
                    <ul class="wlanguage-page__sidebar-list">
                        <li><a href="#" class="wlanguage-page__text-link">Client/server database connectors</a></li>
                        <li><a href="#" class="wlanguage-page__text-link">Cross-platform development</a></li>
                    </ul>
                </div>

                <div class="wlanguage-page__sidebar-block">
                    <h3 class="wlanguage-page__sidebar-title">Videos</h3>
                    <ul class="wlanguage-page__sidebar-list">
                        <li><a href="#" class="wlanguage-page__text-link">Technical videos</a></li>
                    </ul>
                </div>

                <div class="wlanguage-page__customer" aria-label="Customer references">
                    <p class="wlanguage-page__customer-title">They are using WINDEV</p>
                    <figure class="wlanguage-page__customer-figure">
                        <div class="wlanguage-page__customer-logo-box">
                            <img
                                class="wlanguage-page__customer-logo-img"
                                :src="customerCarouselLogos[currentCustomerLogoIndex]"
                                alt="WINDEV customer logo"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
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
import HeroSection from '../components/HeroSection.vue';
import { wlanguageSamples } from '../data/wlanguageSamples.js';

const logoImageUrl = '/img/wlangarge/logo-wlanguage.png';
const packagesImageUrl = '/img/wlangarge/packages-windev-webdev-windev-mobile-2026.webp';

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

const heroSlides = [
    {
        id: 'wlanguage-overview',
        description: 'WLanguage is the 5th generation language shared by WINDEV, WEBDEV and WINDEV Mobile.',
        topImage: '/img/nouveau.svg',
        topImageAlt: 'Nouveau',
        image: '/img/logo_windev-suite_texte-noir-light.svg',
        imageAlt: 'Logo WINDEV Suite',
        buttons: [
            { label: 'Code samples', variant: 'primary' },
            { label: 'Documentation', variant: 'ghost' },
            { label: 'Subscribe', variant: 'ghost' },
        ],
    },
    {
        id: 'wlanguage-release',
        description: '',
        responsiveImageDesktop: '/img/new-version-update_accueil.jpg',
        responsiveImageMobile: '/img/new-version-update_accueil_mobile.jpg',
        responsiveImageAlt: 'Nouvelle version WINDEV',
        buttons: [],
    },
];

onMounted(() => {
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
.wlanguage-page {
    color: var(--color-text-primary);
}

.wlanguage-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.wlanguage-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.wlanguage-page__os-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
}

.wlanguage-page__os-dot {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 9999px;
    border: 2px solid #d6dce7;
    background: #f4f6fa;
}

.wlanguage-page__layout {
    margin-top: 1.25rem;
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 300px);
    align-items: start;
}

.wlanguage-page__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.wlanguage-page__product-header {
    text-align: center;
    margin-bottom: 1.25rem;
}

.wlanguage-page__logo-figure {
    margin: 0;
}

.wlanguage-page__logo-img {
    max-width: min(100%, 320px);
    height: auto;
}

.wlanguage-page__tagline {
    margin: 0.75rem 0 0;
    font-size: 0.92rem;
    color: var(--color-text-secondary);
}

.wlanguage-page__title {
    margin: 0 0 0.65rem;
    font-size: clamp(1.25rem, 2.4vw, 1.65rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.15;
}

.wlanguage-page__lead {
    margin: 0 0 1.25rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.wlanguage-page__sample {
    margin-bottom: 1.35rem;
    padding-bottom: 1.1rem;
    border-bottom: 1px solid var(--color-border);
}

.wlanguage-page__sample:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
}

.wlanguage-page__sample-title {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--color-text-primary);
}

.wlanguage-page__body {
    margin: 0 0 0.5rem;
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

.wlanguage-page__code {
    margin: 0;
    padding: 0.75rem 0.85rem;
    border-radius: var(--radius-md);
    background: #f4f6fa;
    border: 1px solid #e3e9f2;
    font-family: ui-monospace, 'Cascadia Code', 'Consolas', monospace;
    font-size: 0.78rem;
    line-height: 1.5;
    color: #1f304f;
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
}

.wlanguage-page__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.wlanguage-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wlanguage-page__sidebar {
    padding: clamp(0.85rem, 1.5vw, 1.1rem);
    display: grid;
    gap: 1rem;
    align-content: start;
}

.wlanguage-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.wlanguage-page__sidebar-text {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

.wlanguage-page__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.wlanguage-page__sidebar-title {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.wlanguage-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.wlanguage-page__customer-title {
    margin: 0 0 0.5rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #5f6f8c;
}

.wlanguage-page__customer-figure {
    margin: 0;
}

.wlanguage-page__customer-logo-box {
    min-height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background: #fff;
}

.wlanguage-page__customer-logo-img {
    max-width: 100%;
    max-height: 3rem;
    object-fit: contain;
}

@media (max-width: 900px) {
    .wlanguage-page__layout {
        grid-template-columns: 1fr;
    }
}
</style>
