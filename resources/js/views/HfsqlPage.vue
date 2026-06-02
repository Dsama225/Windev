<template>
    <AppNavbar />
    <main class="hfsql-page pb-10">
        <section class="section-shell hfsql-page__suite-line" aria-label="Product positioning">
            <p class="hfsql-page__suite-text">Cross-platform application development software suite</p>
            <div class="hfsql-page__os-row" aria-hidden="true">
                <span v-for="n in 7" :key="n" class="hfsql-page__os-dot" title="OS icon placeholder" />
            </div>
        </section>

        <HeroSection :slides="heroSlides" />

        <section class="section-shell hfsql-page__layout" aria-label="HFSQL overview">
            <div class="hfsql-page__main glass-frame">
                <header class="hfsql-page__product-header">
                    <h1 class="hfsql-page__logo" aria-label="HFSQL">
                        <span class="hfsql-page__logo-hf">HF</span><span class="hfsql-page__logo-sql">SQL</span>
                    </h1>
                    <p class="hfsql-page__tagline">Portable, free, unlimited SQL database</p>
                </header>

                <div class="hfsql-page__intro">
                    <p class="hfsql-page__body">HFSQL is powerful, fast and reliable.</p>
                    <p class="hfsql-page__body">HFSQL is used on millions of workstations around the world.</p>
                    <p class="hfsql-page__body">
                        HFSQL runs on <strong>Windows</strong> and <strong>Linux</strong>, on networks of any size and type, and automatically manages hundreds of
                        simultaneous users. You can freely distribute the HFSQL engine with your WINDEV applications.
                    </p>
                    <p class="hfsql-page__body">During the WINDEV Tour, the operations performed on HFSQL use a database with 20 billion records.</p>
                </div>

                <section class="hfsql-page__section" aria-labelledby="hfsql-reliable-title">
                    <h2 id="hfsql-reliable-title" class="hfsql-page__section-title">Do you need a reliable, fast and free SQL Database?</h2>
                    <p class="hfsql-page__body">
                        HFSQL is an SQL database integrated in WINDEV, WINDEV Mobile and WEBDEV environments. HFSQL is available in the following versions: Network,
                        Cluster, Client/Server (Windows and Linux), Cloud and Mobile.
                    </p>
                </section>

                <section class="hfsql-page__section" aria-labelledby="hfsql-open-title">
                    <h2 id="hfsql-open-title" class="hfsql-page__section-title">HFSQL: Open and compatible</h2>
                    <figure class="hfsql-page__figure">
                        <img
                            :src="'/img/hfsql/hfsql-cross-platform.jpg'"
                            alt="Diagram with central HFSQL cylinder and arrows to Windows, Linux, Mac, iOS, Android, and other platforms."
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>
                </section>

                <section class="hfsql-page__section" aria-labelledby="hfsql-cross-title">
                    <h2 id="hfsql-cross-title" class="hfsql-page__section-title">HFSQL: Cross-Platform</h2>
                    <p class="hfsql-page__body">HFSQL offers a binary storage format compatible between all platforms.</p>
                    <figure class="hfsql-page__figure">
                        <img
                            :src="'/img/hfsql/hfsql-powerful-database.jpg'"
                            alt="Network diagram with database nodes across server environments."
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>
                </section>

                <section class="hfsql-page__section" aria-labelledby="hfsql-docs-title">
                    <h2 id="hfsql-docs-title" class="hfsql-page__section-title">See the HFSQL documentation :</h2>
                    <ul class="hfsql-page__doc-list">
                        <li>
                            <span class="hfsql-page__doc-icon" aria-hidden="true" />
                            <a href="#" class="hfsql-page__text-link">eBook - Click here</a>
                        </li>
                        <li>
                            <span class="hfsql-page__doc-icon hfsql-page__doc-icon--pdf" aria-hidden="true" />
                            <a href="#" class="hfsql-page__text-link">PDF - Click here</a>
                        </li>
                    </ul>
                </section>
            </div>

            <aside class="hfsql-page__sidebar glass-frame" aria-label="HFSQL highlights and related links">
                <figure class="hfsql-page__figure hfsql-page__figure--sidebar">
                    <img
                        :src="'/img/hfsql/packages-windev-webdev-windev-mobile-2026.webp'"
                        alt="WINDEV 2026, WEBDEV 2026, WINDEV Mobile 2026 product boxes."
                        loading="lazy"
                        decoding="async"
                    />
                </figure>
                <p class="hfsql-page__sidebar-text">
                    The WINDEV, WEBDEV and WINDEV Mobile environments are compatible and share project elements... it has never been easier to build multi-target
                    applications.
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
                        <li><RouterLink class="hfsql-page__text-link" to="/software/new-features-2026">New features</RouterLink></li>
                        <li><RouterLink class="hfsql-page__text-link" to="/software/windev">WINDEV</RouterLink></li>
                        <li><RouterLink class="hfsql-page__text-link" to="/software/webdev">WEBDEV</RouterLink></li>
                        <li><RouterLink class="hfsql-page__text-link" to="/software/windevmobile">WINDEV Mobile</RouterLink></li>
                    </ul>
                </div>

                <div class="hfsql-page__sidebar-block">
                    <h3 class="hfsql-page__sidebar-title">Overview diagrams</h3>
                    <ul class="hfsql-page__sidebar-list">
                        <li><a href="#" class="hfsql-page__text-link">Universal database connectors</a></li>
                        <li><a href="#" class="hfsql-page__text-link">Cross-platform development</a></li>
                    </ul>
                </div>

                <div class="hfsql-page__sidebar-block">
                    <h3 class="hfsql-page__sidebar-title">Videos</h3>
                    <ul class="hfsql-page__sidebar-list">
                        <li><a href="#" class="hfsql-page__text-link">Technical videos</a></li>
                    </ul>
                </div>

                <div class="hfsql-page__customer" aria-label="Customer references">
                    <p class="hfsql-page__customer-title">They are using WINDEV</p>
                    <figure class="hfsql-page__customer-figure">
                        <div class="hfsql-page__customer-logo-box">
                            <img
                                class="hfsql-page__customer-logo-img"
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

/** Same banner strip assets as WdmsgPage / BrandLogoStrip; bound URLs avoid Vite static import. */
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

const heroSlides = [
    {
        id: 'hfsql-overview',
        description: 'HFSQL is powerful, fast and reliable — portable, free, unlimited SQL database for WINDEV, WEBDEV and WINDEV Mobile.',
        topImage: '/img/nouveau.svg',
        topImageAlt: 'Nouveau',
        image: '/img/logo_windev-suite_texte-noir-light.svg',
        imageAlt: 'Logo WINDEV Suite',
        buttons: [
            { label: 'Documentation', variant: 'primary' },
            { label: 'Download', variant: 'ghost' },
            { label: 'Subscribe', variant: 'ghost' },
        ],
    },
    {
        id: 'hfsql-release',
        description: '',
        responsiveImageDesktop: '/img/new-version-update_accueil.jpg',
        responsiveImageMobile: '/img/new-version-update_accueil_mobile.jpg',
        responsiveImageAlt: 'Nouvelle version WINDEV',
        buttons: [],
    },
];

const featureList = [
    'SQL Database',
    'Windows',
    'Linux',
    'Mac',
    'iOS',
    'Android',
    'Local',
    'Mobile',
    'Embedded',
    'Client/Server',
    'Cluster',
    'Large Capacity',
    'All types of data',
    'Unicode',
    'Index',
    'multi-column index',
    'keys',
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
    'SSO',
    'Management of rights',
    'Protection against SQL injection',
    'Encryption',
    'OLEDB Provider',
    'ODBC driver',
    'Control Center',
    'Real time administration',
    'Backups',
    'Database mirroring',
    'Queries',
    'Reporting',
    'Data viewer',
    'Monitoring robot',
    'Native link to WINDEV, WEBDEV and WINDEV Mobile',
    'Free deployment*',
];
</script>

<style scoped>
.hfsql-page {
    color: var(--color-text-primary);
}

.hfsql-page__alert {
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    padding: 0.45rem 0.75rem;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #ffd400, #ffea66);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.18);
    text-align: center;
}

.hfsql-page__alert-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #16203a;
    text-decoration: none;
}

.hfsql-page__alert-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.hfsql-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.hfsql-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.hfsql-page__os-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
}

.hfsql-page__os-dot {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 9999px;
    border: 2px solid #d6dce7;
    background: #f4f6fa;
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

.hfsql-page__logo {
    margin: 0;
    font-size: clamp(2.25rem, 5vw, 3.25rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1;
}

.hfsql-page__logo-hf {
    color: var(--color-text-primary);
}

.hfsql-page__logo-sql {
    color: #d92d20;
}

.hfsql-page__tagline {
    margin: 0.5rem 0 0;
    font-size: clamp(0.78rem, 1.35vw, 0.95rem);
    font-weight: 800;
    letter-spacing: 0.05em;
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

.hfsql-page__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: var(--radius-md);
    border: 2px dashed color-mix(in oklab, var(--color-text-secondary) 38%, transparent);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    color: var(--color-text-secondary);
    font-size: 0.78rem;
    font-weight: 600;
    line-height: 1.35;
    padding: 0.85rem;
}

.hfsql-page__figure {
    margin: 0 auto;
    max-width: 50%;
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

/* Full width of sidebar column: main figures stay at 50% centered; promo image must not inherit that cap in a narrow grid. */
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

.hfsql-page__doc-icon {
    width: 1.35rem;
    height: 1.35rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    border: 2px dashed color-mix(in oklab, var(--color-text-secondary) 35%, transparent);
    background: color-mix(in oklab, var(--color-brand) 12%, transparent);
}

.hfsql-page__doc-icon--pdf {
    border-radius: 0.1rem;
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

.hfsql-page__customer {
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    text-align: center;
}

.hfsql-page__customer-title {
    margin: 0 0 0.65rem;
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.hfsql-page__customer-figure {
    margin: 0;
}

.hfsql-page__customer-logo-box {
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

.hfsql-page__customer-logo-img {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    object-fit: contain;
    object-position: center;
    display: block;
    filter: saturate(1.03) contrast(1.02);
}

:global(.theme-dark) .hfsql-page__customer-logo-box {
    border-color: color-mix(in oklab, var(--color-brand) 22%, var(--color-surface-border));
    background: color-mix(in oklab, #ffffff 94%, #c5d8ff 6%);
}

@media (max-width: 960px) {
    .hfsql-page__layout {
        grid-template-columns: 1fr;
    }

    .hfsql-page__feature-list {
        max-height: none;
    }
}

:global(.theme-dark) .hfsql-page__alert-link {
    color: #0b1f4d;
}
</style>
