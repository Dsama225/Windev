<template>
    <AppNavbar />
    <main class="wdmsg-page pb-10">
        <section class="section-shell wdmsg-page__suite-line" aria-label="Product positioning">
            <p class="wdmsg-page__suite-text">
                <strong>Cross-platform</strong> application development software suite
            </p>
            <figure class="wdmsg-page__suite-platforms">
                <img
                    :src="suiteCrossPlatform.src"
                    alt="Integrated software for developing cross-platform applications"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, suiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell wdmsg-page__layout" aria-label="WDMSG overview">
            <div class="wdmsg-page__main glass-frame">
                <h1 class="wdmsg-page__title">OVERVIEW OF WDMSG</h1>
                <p class="wdmsg-page__lead">
                    WDMSG enables you to easily translate an entire application (WINDEV, WEBDEV and/or WINDEV Mobile).
                </p>

                <div class="wdmsg-page__intro-grid">
                    <div class="wdmsg-page__intro-copy">
                        <p class="wdmsg-page__body">
                            Your project is intended to be used abroad? Your application must be multilingual?
                            <a href="#multilingue" class="wdmsg-page__text-link">Find out more</a>
                        </p>
                        <p class="wdmsg-page__body">
                            Do you want to check the grammar, spelling and syntax of the information messages in your applications?
                            <a href="#grammaire" class="wdmsg-page__text-link">Learn more</a>
                        </p>
                        <p class="wdmsg-page__body">
                            You are developing an application with words, sentences and expressions that change depending on the profession of the user,
                            but you only want to have one source code?
                            <a href="#metier" class="wdmsg-page__text-link">Learn more</a>
                        </p>
                        <p class="wdmsg-page__body">
                            <a :href="WDINT_PAGE_URL" class="wdmsg-page__text-link" target="_blank" rel="noopener noreferrer">WDINT</a>
                            is included in WDMSG.
                        </p>
                        <p class="wdmsg-page__body">
                            <RouterLink class="wdmsg-page__text-link" to="/software/subscribe">Subscribe</RouterLink>
                        </p>
                    </div>

                    <aside class="wdmsg-page__resources" aria-label="Resources supported by WDMSG">
                        <h2 class="wdmsg-page__resources-title">Resources supported by WDMSG:</h2>
                        <ul class="wdmsg-page__resources-list">
                            <li v-for="item in supportedResources" :key="item">{{ item }}</li>
                        </ul>
                    </aside>
                </div>

                <hr class="wdmsg-page__divider" />

                <section id="grammaire" class="wdmsg-page__section" aria-labelledby="wdmsg-grammar-title">
                    <h2 id="wdmsg-grammar-title" class="wdmsg-page__section-title">WDMSG and grammar</h2>
                    <p class="wdmsg-page__body">
                        Spelling errors, typos, grammar errors and incomprehensible messages can damage the image of a software editor.
                    </p>
                    <p class="wdmsg-page__body">
                        How to check the messages or expressions your developers have entered in their modules?: window titles, control captions, button captions,
                        tooltips, information messages, error messages, wait messages, title and content of help pages, etc.
                    </p>
                    <p class="wdmsg-page__body">
                        WDMSG, the ideal complement for WINDEV and WEBDEV, is a powerful tool that checks the messages in the application.
                    </p>
                    <p class="wdmsg-page__body wdmsg-page__body--strong">The principle is simple:</p>
                    <ol class="wdmsg-page__ordered">
                        <li>All messages, captions and text are extracted from the project and exported to a text file.</li>
                        <li>All the expressions in this file are checked (e.g. using a spelling and grammar checker).</li>
                        <li>The corrected messages are reintegrated into the original project.</li>
                    </ol>
                    <p class="wdmsg-page__body">
                        Main advantage: your developers take care of the code, and one person (not necessarily a programming expert) can check all the text in your
                        application.You release applications with better grammar and syntax.
                    </p>
                </section>

                <section id="metier" class="wdmsg-page__section" aria-labelledby="wdmsg-vocab-title">
                    <h2 id="wdmsg-vocab-title" class="wdmsg-page__section-title">WDMSG and domain-specific vocabulary</h2>
                    <p class="wdmsg-page__body">
                        What is domain-specific vocabulary? Let's illustrate this concept with an example: A small business owner may use the word "Estimate", while a
                        business consultant will use "Business proposal".
                    </p>
                    <p class="wdmsg-page__body">WINDEV and WDMSG can easily manage the concept of domain-specifc vocabulary.</p>
                    <p class="wdmsg-page__body wdmsg-page__body--strong">The principle for WDMSG is very simple:</p>
                    <ol class="wdmsg-page__ordered">
                        <li>All messages, captions, and text from your project are extracted and exported to a text file.</li>
                        <li>The expressions are adapted and registered (via a provided tool) according to each domain.</li>
                        <li>The domain-specific vocabulary is integrated into the original project.</li>
                        <li>
                            In your project, simply add one line of WLanguage code to dynamically define the type of domain-specific vocabulary to display in your
                            application depending on the user (up to 20 different sets of domain-specific vocabulary supported).
                        </li>
                    </ol>
                </section>

                <section id="multilingue" class="wdmsg-page__section" aria-labelledby="wdmsg-i18n-title">
                    <h2 id="wdmsg-i18n-title" class="wdmsg-page__section-title">WDMSG and multilingual projects</h2>
                    <p class="wdmsg-page__body">
                        Projects created with WINDEV and WEBDEV can be multilingual. In this case, each message, window, report or control must be translated into the
                        different languages supported by the project.
                    </p>
                    <p class="wdmsg-page__body wdmsg-page__body--strong">A project can be translated in different ways:</p>
                    <ol class="wdmsg-page__ordered">
                        <li>
                            You can translate the different elements as you create them, via the "Details" tab of the description windows. However, this solution is
                            only ideal for small applications, and can quickly become cumbersome.
                        </li>
                        <li>
                            You can use WDMSG. WDMSG lets you extract all the text and resources to translate from a WINDEV project. Once translated, WDMSG will
                            automatically reintegrate this text and these resources. The elements from the text file can be:
                            <ul class="wdmsg-page__bullets">
                                <li>translated directly,</li>
                                <li>translated with a dedicated translation software,</li>
                                <li>translated by a translation agency,</li>
                                <li>translated via WDTRAD: the translation tool provided with WDMSG,</li>
                                <li>checked by a spelling checker,</li>
                                <li>modified to standardize messages, titles, etc.</li>
                            </ul>
                        </li>
                    </ol>
                    <p class="wdmsg-page__body">
                        In your original project, simply add one line of WLanguage code to dynamically define the language to display for your application depending on
                        the user (up to <span class="wdmsg-page__accent">64 different languages supported</span>).
                    </p>
                    <p class="wdmsg-page__body">
                        WDMSG comes with a dictionary.This translation memory contains the translation of the same source into several languages. For example, in the same
                        dictionary, the expression "Close application" can be translated into Spanish, French, German, etc.
                    </p>
                    <p class="wdmsg-page__body">
                        When translating with WDTRAD, the dictionary will be browsed automatically and if there is a matching translation, it will be proposed. Thus,
                        you won't have to translate the same sentence twice. This dictionary will be enriched as you translate new text. WDTRAD allows you to import
                        translation memories. This feature enables you to automatically import existing translations into the WDTRAD dictionary.
                    </p>
                    <p class="wdmsg-page__body wdmsg-page__body--strong">A real time saver!</p>
                    <p class="wdmsg-page__body">
                        <a :href="WDINT_PAGE_URL" class="wdmsg-page__text-link" target="_blank" rel="noopener noreferrer">WDINT</a>
                        is included in WDMSG.
                    </p>
                    <p class="wdmsg-page__body">
                        <RouterLink class="wdmsg-page__text-link" to="/software/subscribe">Subscribe</RouterLink>
                    </p>
                </section>
            </div>

            <aside class="wdmsg-page__sidebar glass-frame" aria-label="Related links">
                <div class="wdmsg-page__product-boxes">
                    <img
                        :src="productBoxesImageUrl"
                        alt="WINDEV 2026, WEBDEV 2026, and WINDEV Mobile 2026 product boxes"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <p class="wdmsg-page__sidebar-text">
                    Your WINDEV code, windows and data are compatible with WEBDEV and WINDEV Mobile.
                </p>

                <div class="wdmsg-page__sidebar-block">
                    <h3 class="wdmsg-page__sidebar-title">Documentation overview</h3>
                    <ul class="wdmsg-page__sidebar-list">
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="windevNewFeatures2026En.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="New features"
                            >
                                New Features
                            </a>
                        </li>
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="windevBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WINDEV"
                            >
                                WINDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="webdevBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WEBDEV"
                            >
                                WEBDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="windevMobileBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WINDEV Mobile"
                            >
                                WINDEV Mobile
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="wdmsg-page__sidebar-block">
                    <h3 class="wdmsg-page__sidebar-title">Overview diagrams</h3>
                    <ul class="wdmsg-page__sidebar-list">
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="wdmsgOverviewUniversalDatabaseConnectors.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Universal database connectors"
                            >
                                Client/server database connectors
                            </a>
                        </li>
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="wdmsgOverviewCrossPlatformDevelopment.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Cross-platform development"
                            >
                                Cross-platform development
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="wdmsg-page__sidebar-block">
                    <h3 class="wdmsg-page__sidebar-title">Videos</h3>
                    <ul class="wdmsg-page__sidebar-list">
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="WDMSG_TECHNICAL_VIDEOS_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Technical videos"
                            >
                                Technical videos
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="wdmsg-page__customer" aria-label="Customer references">
                    <p class="wdmsg-page__customer-title">They are using WINDEV</p>
                    <figure class="wdmsg-page__customer-figure">
                        <div class="wdmsg-page__customer-logo-box">
                            <img
                                class="wdmsg-page__customer-logo-img"
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
import {
    WDINT_PAGE_URL,
    WDMSG_TECHNICAL_VIDEOS_URL,
    webdevBrochureEn,
    windevBrochureEn,
    windevMobileBrochureEn,
    windevNewFeatures2026En,
    wdmsgOverviewCrossPlatformDevelopment,
    wdmsgOverviewUniversalDatabaseConnectors,
} from '../data/wdmsgPageDocuments.js';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages.js';

const suiteCrossPlatform = SHARED_IMAGES.crossPlatform;

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

/** Same banner strip assets as WindevPage / BrandLogoStrip; bound URLs avoid Vite static import. */
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

onMounted(() => {
    document.title = 'WDMSG: Overview';
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

/** Public asset; use binding so Vite does not treat `/img/...` as a module import. */
const productBoxesImageUrl =
    '/img/newfeatures/packages-windev-webdev-windev-mobile-2026.png';

const supportedResources = [
    'Project messages',
    'Project class messages',
    'Project report messages',
    'Project window messages',
    'Window titles',
    'Control labels',
    'Control help messages',
    'Control tooltips',
    'Title and text of control help windows',
    'Control content (List Box , Combo Box, Check Box and Radio Button)',
    'Captions and messages of menu options',
    'Messages displayed by the program',
    'Report wait messages',
    'RAD control characteristics entered in the analysis',
    'Help system titles',
    'Help system copyright',
    'Help system index keywords',
    'Title and content of help pages',
    'Error messages customized when creating the executable',
];
</script>

<style scoped>
.wdmsg-page {
    color: var(--color-text-primary);
}

.wdmsg-page__alert {
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    padding: 0.45rem 0.75rem;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #ffd400, #ffea66);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.18);
    text-align: center;
}

.wdmsg-page__alert-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #16203a;
    text-decoration: none;
}

.wdmsg-page__alert-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wdmsg-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.wdmsg-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: #1a2744;
}

.wdmsg-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.wdmsg-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.wdmsg-page__layout {
    margin-top: 1.25rem;
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 320px);
    align-items: start;
}

.wdmsg-page__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.wdmsg-page__title {
    margin: 0 0 0.65rem;
    font-size: clamp(1.35rem, 2.6vw, 1.85rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.15;
}

.wdmsg-page__lead {
    margin: 0 0 1rem;
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.wdmsg-page__intro-grid {
    display: grid;
    gap: clamp(1rem, 2vw, 1.25rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
    align-items: start;
}

.wdmsg-page__intro-copy {
    display: grid;
    gap: 0.75rem;
}

.wdmsg-page__body {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.wdmsg-page__body--strong {
    color: var(--color-text-primary);
    font-weight: 800;
}

.wdmsg-page__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.wdmsg-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wdmsg-page__resources {
    border-radius: var(--radius-lg);
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 18%, transparent);
    background: color-mix(in oklab, var(--color-text-secondary) 10%, #fff);
    padding: clamp(0.85rem, 1.6vw, 1.1rem);
}

.wdmsg-page__resources-title {
    margin: 0 0 0.65rem;
    font-size: 0.95rem;
    font-weight: 900;
    letter-spacing: 0.02em;
    color: var(--color-text-primary);
}

.wdmsg-page__resources-list {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.35rem;
    color: var(--color-text-secondary);
    font-size: 0.86rem;
    line-height: 1.45;
}

.wdmsg-page__divider {
    border: 0;
    border-top: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    margin: 1.25rem 0;
}

.wdmsg-page__section {
    margin-top: 1.15rem;
}

.wdmsg-page__section-title {
    margin: 0 0 0.65rem;
    font-size: 1.05rem;
    font-weight: 900;
    letter-spacing: 0.02em;
    color: var(--color-brand);
}

.wdmsg-page__ordered {
    margin: 0.35rem 0 0.85rem;
    padding-left: 1.25rem;
    color: var(--color-text-secondary);
    font-size: 0.92rem;
    line-height: 1.65;
    display: grid;
    gap: 0.45rem;
}

.wdmsg-page__bullets {
    margin: 0.55rem 0 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.35rem;
}

.wdmsg-page__accent {
    color: #d92d20;
    font-weight: 800;
}

.wdmsg-page__sidebar {
    padding: clamp(1rem, 2vw, 1.15rem);
    display: grid;
    gap: 0.85rem;
}

.wdmsg-page__sidebar-text {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.wdmsg-page__sidebar-block {
    padding-top: 0.35rem;
    border-top: 1px solid color-mix(in oklab, var(--color-text-secondary) 18%, transparent);
}

.wdmsg-page__sidebar-title {
    margin: 0 0 0.45rem;
    font-size: 0.92rem;
    font-weight: 900;
    color: var(--color-brand);
}

.wdmsg-page__sidebar-list {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.35rem;
    font-size: 0.88rem;
}

.wdmsg-page__customer {
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    text-align: center;
}

.wdmsg-page__customer-title {
    margin: 0 0 0.65rem;
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.wdmsg-page__customer-figure {
    margin: 0;
}

.wdmsg-page__customer-logo-box {
    aspect-ratio: 1 / 1;
    width: 100%;
    max-width: 220px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(0.65rem, 3vw, 1rem);
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 28%, transparent);
    border-radius: var(--radius-md);
    background: #fff;
    box-shadow:
        0 1px 2px rgba(15, 23, 42, 0.05),
        0 8px 18px rgba(15, 23, 42, 0.06);
    overflow: hidden;
}

.wdmsg-page__customer-logo-img {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    object-fit: contain;
    object-position: center;
    display: block;
    filter: saturate(1.03) contrast(1.02);
}

.wdmsg-page__product-boxes {
    border-radius: var(--radius-md);
    overflow: hidden;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.wdmsg-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

::global(.theme-dark) .wdmsg-page__customer-logo-box {
    border-color: color-mix(in oklab, var(--color-brand) 22%, var(--color-surface-border));
    background: color-mix(in oklab, #ffffff 94%, #c5d8ff 6%);
}

@media (max-width: 1100px) {
    .wdmsg-page__layout {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 900px) {
    .wdmsg-page__intro-grid {
        grid-template-columns: 1fr;
    }
}

::global(.theme-dark) .wdmsg-page__alert-link {
    color: #0b1f4d;
}
</style>
