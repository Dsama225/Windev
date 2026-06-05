<template>
    <AppNavbar />
    <main class="hfsql-page pb-10">
        <section class="section-shell hfsql-page__suite-line" aria-label="Product positioning">
            <p class="hfsql-page__suite-text">
                <strong>Cross-platform</strong> application development software suite
            </p>
            <figure class="hfsql-page__suite-platforms">
                <img
                    :src="hfsqlSuiteCrossPlatform.src"
                    alt="Integrated software for developing cross-platform applications"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, hfsqlSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell hfsql-page__hero" aria-label="WINDEV Suite hero">
            <HomeHeroCarousel />
        </section>

        <section class="section-shell hfsql-page__layout" aria-label="HFSQL overview">
            <div class="hfsql-page__main glass-frame">
                <header class="hfsql-page__product-header">
                    <img
                        class="hfsql-page__logo-img"
                        :src="hfsqlLogo.src"
                        alt="Portable, free, unlimited SQL database"
                        width="150"
                        height="42"
                        loading="eager"
                        decoding="async"
                        @error="onImageError($event, hfsqlLogo.fallback)"
                    />
                    <h1 class="hfsql-page__title">Portable, free, unlimited SQL database</h1>
                </header>

                <div class="hfsql-page__intro">
                    <p class="hfsql-page__body"><strong>HFSQL is powerful, fast and reliable.</strong></p>
                    <p class="hfsql-page__body">HFSQL is used on millions of websites around the world.</p>
                    <p class="hfsql-page__body">
                        HFSQL runs on <strong>Windows</strong> and <strong>Linux</strong>, on <strong>Mobiles</strong>, on networks of any size and type, and
                        automatically manages hundreds of simultaneous accesses. You can freely distribute the HFSQL engine with your WINDEV applications.
                    </p>
                    <p class="hfsql-page__body">
                        During the WINDEV Tour, the operations performed on HFSQL use a database with 29 billion records.
                    </p>
                </div>

                <section class="hfsql-page__section" aria-labelledby="hfsql-reliable-title">
                    <h2 id="hfsql-reliable-title" class="hfsql-page__section-title">
                        Do you need a reliable, fast and free SQL Database?
                    </h2>
                    <p class="hfsql-page__body">
                        HFSQL is an SQL database integrated in WINDEV, WINDEV Mobile and WEBDEV environments. HFSQL is available in the following versions:
                        Network, Cluster, Client/Server (Windows and Linux), Cloud and Mobile.
                    </p>
                </section>

                <section class="hfsql-page__section" aria-labelledby="hfsql-open-title">
                    <h2 id="hfsql-open-title" class="hfsql-page__section-title">HFSQL: Open and compatible</h2>
                    <figure class="hfsql-page__figure">
                        <img
                            :src="hfsqlPowerfulDatabase.src"
                            alt="HFSQL Powerful database"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, hfsqlPowerfulDatabase.fallback)"
                        />
                    </figure>
                </section>

                <section class="hfsql-page__section" aria-labelledby="hfsql-cross-title">
                    <h2 id="hfsql-cross-title" class="hfsql-page__section-title">HFSQL: Cross-Platform</h2>
                    <p class="hfsql-page__body">HFSQL offers a binary storage format compatible between all platforms.</p>
                    <figure class="hfsql-page__figure">
                        <img
                            :src="hfsqlCrossPlatform.src"
                            alt="HFSQL Cross platform"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, hfsqlCrossPlatform.fallback)"
                        />
                    </figure>
                </section>

                <section class="hfsql-page__section" aria-labelledby="hfsql-docs-title">
                    <h2 id="hfsql-docs-title" class="hfsql-page__section-title">See the HFSQL documentation :</h2>
                    <ul class="hfsql-page__doc-list">
                        <li>
                            <img
                                class="hfsql-page__doc-icon-img"
                                :src="hfsqlDocEbookIcon.src"
                                alt=""
                                width="20"
                                height="21"
                                loading="lazy"
                                decoding="async"
                                aria-hidden="true"
                                @error="onImageError($event, hfsqlDocEbookIcon.fallback)"
                            />
                            <a class="hfsql-page__text-link" :href="hfsqlEbookUrl" target="_blank" rel="noopener noreferrer">
                                eBook - Click here
                            </a>
                        </li>
                        <li>
                            <img
                                class="hfsql-page__doc-icon-img"
                                :src="hfsqlDocPdfIcon.src"
                                alt=""
                                width="20"
                                height="21"
                                loading="lazy"
                                decoding="async"
                                aria-hidden="true"
                                @error="onImageError($event, hfsqlDocPdfIcon.fallback)"
                            />
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlBrochurePdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                PDF - Click here
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <aside class="hfsql-page__sidebar glass-frame" aria-label="HFSQL highlights and related links">
                <figure class="hfsql-page__figure hfsql-page__figure--sidebar">
                    <img
                        :src="hfsqlPackages.src"
                        alt="WINDEV, WEBDEV and WINDEV Mobile"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, hfsqlPackages.fallback)"
                    />
                </figure>
                <p class="hfsql-page__sidebar-text">
                    The <RouterLink class="hfsql-page__text-link" to="/software/windev">WINDEV</RouterLink>,
                    <RouterLink class="hfsql-page__text-link" to="/software/webdev">WEBDEV</RouterLink> and
                    <RouterLink class="hfsql-page__text-link" to="/software/windevmobile">WINDEV Mobile</RouterLink>
                    environments are compatible and share project elements. It has never been easier to build multi-target applications.
                </p>

                <div class="hfsql-page__sidebar-block hfsql-page__sidebar-block--flush">
                    <h3 class="hfsql-page__sidebar-product-title">HFSQL</h3>
                    <ul class="hfsql-page__feature-list">
                        <li v-for="item in featureList" :key="item">{{ item }}</li>
                    </ul>
                </div>

                <div class="hfsql-page__sidebar-block">
                    <h3 class="hfsql-page__sidebar-title">Documentation overview</h3>
                    <ul class="hfsql-page__sidebar-list">
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlNewFeaturesPdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                New features
                            </a>
                        </li>
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlWindevBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WINDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlWebdevBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WEBDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlWindevMobileBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WINDEV Mobile
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="hfsql-page__sidebar-block">
                    <h3 class="hfsql-page__sidebar-title">Overview diagrams</h3>
                    <ul class="hfsql-page__sidebar-list">
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlUniversalConnectorsPdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Universal database connectors
                            </a>
                        </li>
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlCrossPlatformDevPdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Cross-platform development
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="hfsql-page__sidebar-block">
                    <h3 class="hfsql-page__sidebar-title">Videos</h3>
                    <ul class="hfsql-page__sidebar-list">
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                href="https://windev.com/pcsoft/videos.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Technical videos
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="hfsql-page__customer" aria-label="Customer references">
                    <p class="hfsql-page__customer-title">They are using WINDEV</p>
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
import {
    hfsqlBrochurePdf,
    hfsqlCrossPlatformDevPdf,
    hfsqlEbookUrl,
    hfsqlNewFeaturesPdf,
    hfsqlUniversalConnectorsPdf,
    hfsqlWebdevBrochureEn,
    hfsqlWindevBrochureEn,
    hfsqlWindevMobileBrochureEn,
} from '../data/hfsqlPageDocuments.js';
import {
    hfsqlCrossPlatform,
    hfsqlDocEbookIcon,
    hfsqlDocPdfIcon,
    hfsqlLogo,
    hfsqlPackages,
    hfsqlPowerfulDatabase,
    hfsqlSuiteCrossPlatform,
} from '../data/hfsqlPageImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

const featureList = [
    'SQL Database',
    'Windows, Linux, Mac, iOS, Android',
    'Local',
    'Mobile',
    'Embedded',
    'Client/Server',
    'Cluster',
    'Large capacity',
    'All types of data',
    'Unicode',
    'Index, multi-column index, keys',
    'Referential integrity',
    'Full text',
    'Stored procedures',
    'Triggers',
    'Logs',
    'Transactions',
    'Data compression',
    'Frame compression',
    'Automatic row locking',
    'Automatic reconnection',
    'Scheduler',
    'Replication',
    'SDD',
    'Management of rights',
    'Protection against SQL injection',
    'Encryption',
    'OLEDB Provider',
    'ODBC driver',
    'Control Center',
    'Real-time administration',
    'Backups',
    'Database modeling',
    'Querier',
    'Reporting',
    'Data viewer',
    'Monitoring robot',
    'Native link to WINDEV, WEBDEV and WINDEV Mobile',
    'Free deployment*',
];

onMounted(() => {
    document.title = 'HFSQL — Portable, free, unlimited SQL database | PC SOFT';
});
</script>

<style scoped>
.hfsql-page {
    color: var(--color-text-primary);
}

.hfsql-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.hfsql-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: #1a2744;
}

.hfsql-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.hfsql-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.hfsql-page__layout {
    margin-top: 1.25rem;
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 320px);
    align-items: start;
}

.hfsql-page__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.hfsql-page__product-header {
    margin-bottom: 1.15rem;
}

.hfsql-page__logo-img {
    display: block;
    width: auto;
    max-width: 9.5rem;
    height: auto;
    margin-bottom: 0.75rem;
}

.hfsql-page__title {
    margin: 0;
    font-size: clamp(1.05rem, 2vw, 1.25rem);
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.hfsql-page__intro {
    display: grid;
    gap: 0.65rem;
    margin-bottom: 1.35rem;
}

.hfsql-page__body {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.hfsql-page__body strong {
    color: var(--color-text-primary);
    font-weight: 800;
}

.hfsql-page__section {
    margin-top: 1.35rem;
}

.hfsql-page__section-title {
    margin: 0 0 0.65rem;
    font-size: 1.05rem;
    font-weight: 900;
    letter-spacing: 0.02em;
    color: var(--color-brand);
}

.hfsql-page__figure {
    margin: 0;
    max-width: 28rem;
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    background: color-mix(in oklab, var(--color-surface) 94%, transparent);
}

.hfsql-page__figure img {
    width: 100%;
    height: auto;
    display: block;
}

.hfsql-page__sidebar .hfsql-page__figure.hfsql-page__figure--sidebar {
    width: 100%;
    max-width: 100%;
    justify-self: stretch;
    min-width: 0;
}

.hfsql-page__figure--sidebar img {
    object-fit: contain;
}

.hfsql-page__doc-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.55rem;
}

.hfsql-page__doc-list li {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    font-size: 0.92rem;
}

.hfsql-page__doc-icon-img {
    flex-shrink: 0;
    display: block;
}

.hfsql-page__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.hfsql-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.hfsql-page__sidebar {
    padding: clamp(1rem, 2vw, 1.15rem);
    display: grid;
    gap: 0.85rem;
}

.hfsql-page__sidebar-text {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.hfsql-page__sidebar-block {
    padding-top: 0.35rem;
    border-top: 1px solid color-mix(in oklab, var(--color-text-secondary) 18%, transparent);
}

.hfsql-page__sidebar-block--flush {
    padding-top: 0;
    border-top: 0;
}

.hfsql-page__sidebar-title {
    margin: 0 0 0.45rem;
    font-size: 0.92rem;
    font-weight: 900;
    color: var(--color-brand);
}

.hfsql-page__sidebar-product-title {
    margin: 0 0 0.55rem;
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 0.04em;
    color: var(--color-text-primary);
}

.hfsql-page__sidebar-list {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.35rem;
    font-size: 0.88rem;
}

.hfsql-page__feature-list {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.28rem;
    font-size: 0.8rem;
    line-height: 1.4;
    color: var(--color-text-secondary);
    max-height: 520px;
    overflow: auto;
    padding-right: 0.35rem;
}

.hfsql-page__customer-title {
    margin: 0 0 0.45rem;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #5f6f8c;
}

@media (max-width: 960px) {
    .hfsql-page__layout {
        grid-template-columns: 1fr;
    }

    .hfsql-page__feature-list {
        max-height: none;
    }
}
</style>
