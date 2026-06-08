<template>
    <AppNavbar />
    <main class="home-page pb-10">
        <section class="section-shell home-page__suite-line" aria-label="Positionnement produit">
            <p class="home-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="home-page__suite-platforms">
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

        <section class="section-shell home-page__hero" aria-label="Carrousel WINDEV Suite">
            <HomeHeroCarousel />
        </section>

        <section
            v-if="cmsComponents.length"
            class="section-shell home-page__cms"
            aria-label="Contenu éditorial"
        >
            <PageComponents :components="cmsComponents" />
        </section>

        <section class="section-shell home-page__platform" aria-labelledby="home-platform-title">
            <p class="home-page__platform-eyebrow">Plateforme DevOps intégrée</p>
            <h1 id="home-platform-title" class="home-page__platform-title">DÉVELOPPEZ 10 FOIS PLUS VITE</h1>

            <div class="home-page__product-grid">
                <article
                    v-for="product in homeProducts"
                    :key="product.id"
                    class="home-page__product-card"
                >
                    <RouterLink class="home-page__product-link" :to="productRoute(product.id)">
                        <img
                            class="home-page__product-logo"
                            :src="product.logo.src"
                            :alt="`Logo ${product.title}`"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, product.logo.fallback)"
                        />
                        <p class="home-page__product-tagline" aria-hidden="true">{{ product.icons }}</p>
                        <figure class="home-page__product-figure">
                            <img
                                :src="product.package.src"
                                :alt="product.imageAlt"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, product.package.fallback)"
                            />
                        </figure>
                        <h2 class="home-page__product-title">{{ product.title }}</h2>
                        <p class="home-page__product-copy">{{ product.description }}</p>
                    </RouterLink>
                </article>
            </div>

            <p class="home-page__platform-cta-wrap">
                <RouterLink class="home-page__platform-cta" to="/software/new-features-2026">
                    Découvrir les nouveautés de la version 2026
                </RouterLink>
            </p>
        </section>

        <section class="section-shell home-page__customers" aria-label="Références clients">
            <p class="home-page__customers-title">Ils utilisent WINDEV</p>
            <div class="home-page__customers-strip">
                <img
                    class="home-page__customers-logo"
                    :src="currentCustomerLogo.src"
                    :alt="currentCustomerLogo.alt"
                    loading="lazy"
                    decoding="async"
                    @error="onImageError($event, currentCustomerLogo.fallback)"
                />
            </div>
        </section>

        <section class="section-shell home-page__cross" aria-labelledby="home-cross-title">
            <div class="home-page__cross-card">
                <div class="home-page__cross-copy">
                    <h2 id="home-cross-title" class="home-page__cross-title">Applications natives multiplateformes</h2>
                    <p class="home-page__cross-body">
                        Un seul code, la même interface, les mêmes états… pour toutes les plateformes cibles.
                    </p>
                    <p class="home-page__cross-body">
                        Avec WINDEV, WEBDEV et WINDEV Mobile, la même application source s'exécute nativement sous
                        Windows, Linux, Android, iOS, Windows 10 IoT, Internet, SaaS, et bien plus encore.
                    </p>
                    <RouterLink class="home-page__cross-link" to="/software/windev">En savoir plus</RouterLink>
                </div>
                <figure class="home-page__cross-figure">
                    <img
                        :src="homeCrossDevices.src"
                        alt="Applications multiplateformes sur plusieurs appareils"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, homeCrossDevices.fallback)"
                    />
                </figure>
            </div>
        </section>

        <section class="section-shell home-page__news" aria-label="Actualités version 2026">
            <div class="home-page__news-card">
                <h2 class="home-page__news-title">La version 2026 est disponible !</h2>
                <p class="home-page__news-actions">
                    <RouterLink class="home-page__news-link" to="/software/new-features-2026">En savoir plus</RouterLink>
                    <span aria-hidden="true"> · </span>
                    <a
                        class="home-page__news-link"
                        href="https://download.windev.com/uk/index.awp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Télécharger
                    </a>
                    <span aria-hidden="true"> · </span>
                    <RouterLink class="home-page__news-link" to="/software/subscribe">S'abonner</RouterLink>
                </p>
            </div>
        </section>

        <section class="section-shell home-page__databases" aria-labelledby="home-databases-title">
            <div class="home-page__databases-card">
                <div class="home-page__databases-copy">
                    <h2 id="home-databases-title" class="home-page__databases-title">Accédez à toutes les bases de données</h2>
                    <p class="home-page__databases-body">
                        WINDEV, WEBDEV et WINDEV Mobile incluent une base de données puissante, gratuite à déployer
                        (locale, réseau, mobile, Cloud, Client/Serveur, Cluster) :
                    </p>
                    <p class="home-page__databases-list">
                        <RouterLink class="home-page__inline-link" to="/software/hfsql">HFSQL</RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/as400-system-i">
                            AS/400 &amp; IBM i
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/oracle">
                            Oracle
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/sql-server">
                            SQL Server
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/db2">DB2</RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/mysql">
                            MySQL
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/informix">
                            Informix
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/postgresql">
                            PostgreSQL
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/sap-ase">
                            SAP ASE
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/xbase">
                            xBase
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/sqlite">
                            SQLite
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/access">
                            Access
                        </RouterLink>,
                        <RouterLink class="home-page__inline-link" to="/software/native-connectors/mariadb">
                            MariaDB
                        </RouterLink>
                        et bien d'autres.
                    </p>
                </div>
                <figure class="home-page__databases-figure">
                    <img
                        :src="homeDatabases.src"
                        alt="Connecteurs de bases de données"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, homeDatabases.fallback)"
                    />
                </figure>
            </div>
        </section>

        <section class="section-shell home-page__suite-banner" aria-label="Abonnement WINDEV Suite">
            <div class="home-page__suite-banner-inner">
                <figure class="home-page__suite-packages">
                    <img
                        :src="homePackages.src"
                        alt="WINDEV, WEBDEV and WINDEV Mobile 2026"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, homePackages.fallback)"
                    />
                </figure>
                <div class="home-page__suite-banner-copy">
                    <img
                        class="home-page__suite-logo"
                        :src="homeSuiteLogo.src"
                        alt="WINDEV Suite"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, homeSuiteLogo.fallback)"
                    />
                    <RouterLink class="home-page__suite-subscribe" to="/software/subscribe">S'abonner</RouterLink>
                </div>
            </div>
        </section>

        <section class="section-shell home-page__express" aria-label="Versions Express gratuites">
            <p class="home-page__express-text">
                Essayez WINDEV et WINDEV Mobile — Téléchargez la version GRATUITE et ILLIMITÉE dans le temps.
            </p>
            <p class="home-page__express-links">
                <RouterLink class="home-page__express-link" to="/download/windev-express">WINDEV Express</RouterLink>
                <span aria-hidden="true"> · </span>
                <RouterLink class="home-page__express-link" to="/download/windev-mobile-express">
                    WINDEV Mobile Express
                </RouterLink>
            </p>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import HomeHeroCarousel from '../components/HomeHeroCarousel.vue';
import PageComponents from '../components/cms/PageComponents.vue';
import { useCmsPage } from '../composables/useCmsPage';
import {
    homeCrossDevices,
    homeCustomerLogos,
    homeDatabases,
    homePackages,
    homeProducts,
    homeSuiteCrossPlatform,
    homeSuiteLogo,
} from '../data/homePageImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

const { page: cmsPage } = useCmsPage('home');
const cmsComponents = computed(() => cmsPage.value?.payload?.components ?? []);

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

const currentCustomerLogoIndex = ref(0);
let customerCarouselTimer = null;

const currentCustomerLogo = computed(() => customerLogos[currentCustomerLogoIndex.value]);

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

function productRoute(id) {
    if (id === 'webdev') {
        return '/software/webdev';
    }
    if (id === 'mobile') {
        return '/software/windevmobile';
    }
    return '/software/windev';
}

onMounted(() => {
    document.title = 'PC SOFT WINDEV : Développez 10 fois plus vite';
    customerCarouselTimer = window.setInterval(() => {
        currentCustomerLogoIndex.value = (currentCustomerLogoIndex.value + 1) % customerLogos.length;
    }, 2200);
});

onBeforeUnmount(() => {
    if (customerCarouselTimer) {
        window.clearInterval(customerCarouselTimer);
    }
});
</script>

<style scoped>
.home-page {
    color: #1a2744;
}

.home-page__suite-line {
    text-align: center;
    margin-top: 0.35rem;
    margin-bottom: 0.85rem;
}

.home-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: #1a2744;
}

.home-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.home-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.home-page__platform {
    margin-top: 1.1rem;
    text-align: center;
}

.home-page__platform-eyebrow {
    margin: 0;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.home-page__platform-title {
    margin: 0.35rem 0 1rem;
    font-size: clamp(1.85rem, 4vw, 2.65rem);
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.03em;
    color: #123d8c;
    text-transform: uppercase;
}

.home-page__product-grid {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    text-align: center;
}

.home-page__product-card {
    padding: 0.85rem;
    border-radius: 1.1rem;
    background: #fff;
    border: 1px solid #dbe1ec;
    box-shadow: 0 6px 18px rgba(22, 38, 68, 0.06);
}

.home-page__product-link {
    display: block;
    color: inherit;
    text-decoration: none;
}

.home-page__product-link:hover .home-page__product-title {
    color: #0b56bf;
}

.home-page__product-logo {
    max-width: 9.75rem;
    height: auto;
    margin: 0 auto 0.35rem;
}

.home-page__product-tagline {
    margin: 0 0 0.5rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: #5f6f8c;
    line-height: 1.4;
}

.home-page__product-figure {
    margin: 0 0 0.55rem;
}

.home-page__product-figure img {
    max-width: 100%;
    height: auto;
    max-height: 9.5rem;
    object-fit: contain;
}

.home-page__product-title {
    margin: 0 0 0.35rem;
    font-size: 1rem;
    font-weight: 800;
    color: #123d8c;
}

.home-page__product-copy {
    margin: 0;
    font-size: 0.84rem;
    line-height: 1.55;
    color: #42526d;
}

.home-page__platform-cta-wrap {
    margin: 1rem 0 0;
}

.home-page__platform-cta {
    display: inline-flex;
    padding: 0.5rem 1.15rem;
    border-radius: 999px;
    background: #0b56bf;
    color: #fff;
    font-size: 0.86rem;
    font-weight: 800;
    text-decoration: none;
}

.home-page__platform-cta:hover {
    background: #0949a3;
}

.home-page__customers {
    margin-top: 1rem;
}

.home-page__customers-title {
    margin: 0 0 0.5rem;
    text-align: center;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.home-page__customers-strip {
    border-radius: 1rem;
    background: #fff;
    border: 1px solid #dbe1ec;
    padding: 0.65rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 3.5rem;
}

.home-page__customers-logo {
    max-width: 100%;
    max-height: 2.75rem;
    object-fit: contain;
}

.home-page__cross {
    margin-top: 1rem;
}

.home-page__cross-card {
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: center;
    padding: clamp(1rem, 2vw, 1.35rem);
    border-radius: 1.35rem;
    background: linear-gradient(145deg, #ffe566 0%, #f5d020 55%, #e8c018 100%);
    border: 1px solid #e0c018;
}

.home-page__cross-title {
    margin: 0 0 0.5rem;
    font-size: clamp(1.2rem, 2.5vw, 1.65rem);
    font-weight: 900;
    color: #1a2744;
}

.home-page__cross-body {
    margin: 0 0 0.5rem;
    font-size: 0.9rem;
    line-height: 1.6;
    color: #2a3d5c;
}

.home-page__cross-link {
    font-weight: 800;
    color: #0b56bf;
    text-decoration: none;
}

.home-page__cross-link:hover {
    text-decoration: underline;
}

.home-page__cross-figure {
    margin: 0;
}

.home-page__cross-figure img {
    display: block;
    width: 100%;
    border-radius: 0.75rem;
}

.home-page__news {
    margin-top: 1rem;
}

.home-page__news-card {
    padding: clamp(1rem, 2vw, 1.35rem);
    border-radius: 1.35rem;
    background: #fff;
    border: 1px solid #dbe1ec;
    text-align: center;
}

.home-page__news-title {
    margin: 0 0 0.5rem;
    font-size: clamp(1.1rem, 2.5vw, 1.45rem);
    font-weight: 900;
    color: #123d8c;
}

.home-page__news-actions {
    margin: 0;
    font-size: 0.88rem;
    font-weight: 700;
}

.home-page__news-link {
    color: #0b56bf;
    text-decoration: none;
}

.home-page__news-link:hover {
    text-decoration: underline;
}

.home-page__databases {
    margin-top: 1rem;
}

.home-page__databases-card {
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 0.85fr);
    align-items: center;
    padding: clamp(1rem, 2vw, 1.35rem);
    border-radius: 1.35rem;
    background: #fff;
    border: 1px solid #dbe1ec;
    box-shadow: 0 6px 18px rgba(22, 38, 68, 0.06);
}

.home-page__databases-title {
    margin: 0 0 0.5rem;
    font-size: clamp(1.2rem, 2.5vw, 1.55rem);
    font-weight: 900;
    color: #123d8c;
}

.home-page__databases-body,
.home-page__databases-list {
    margin: 0 0 0.5rem;
    font-size: 0.88rem;
    line-height: 1.6;
    color: #42526d;
}

.home-page__inline-link {
    color: #0b56bf;
    font-weight: 700;
    text-decoration: none;
}

.home-page__inline-link:hover {
    text-decoration: underline;
}

.home-page__databases-figure {
    margin: 0;
    text-align: center;
}

.home-page__databases-figure img {
    max-width: min(100%, 11rem);
    height: auto;
}

.home-page__suite-banner {
    margin-top: 1rem;
}

.home-page__suite-banner-inner {
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    align-items: center;
    padding: clamp(1rem, 2vw, 1.35rem);
    border-radius: 1.35rem;
    background: linear-gradient(145deg, #ffe566 0%, #f5d020 55%, #e8c018 100%);
    border: 1px solid #e0c018;
}

.home-page__suite-packages {
    margin: 0;
}

.home-page__suite-packages img {
    display: block;
    width: 100%;
    max-height: 9rem;
    object-fit: contain;
}

.home-page__suite-banner-copy {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.65rem;
}

.home-page__suite-logo {
    max-width: min(100%, 18rem);
    height: auto;
}

.home-page__suite-subscribe {
    display: inline-flex;
    padding: 0.45rem 1.25rem;
    border-radius: 999px;
    background: #1a2744;
    color: #fff;
    font-size: 0.82rem;
    font-weight: 800;
    text-decoration: none;
}

.home-page__suite-subscribe:hover {
    background: #0f1a30;
}

.home-page__express {
    margin-top: 1rem;
    text-align: center;
}

.home-page__express-text {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: #42526d;
}

.home-page__express-links {
    margin: 0.35rem 0 0;
    font-size: 0.88rem;
}

.home-page__express-link {
    color: #0b56bf;
    font-weight: 800;
    text-decoration: none;
}

.home-page__express-link:hover {
    text-decoration: underline;
}

@media (max-width: 960px) {
    .home-page__product-grid {
        grid-template-columns: 1fr;
    }

    .home-page__cross-card,
    .home-page__databases-card,
    .home-page__suite-banner-inner {
        grid-template-columns: 1fr;
    }
}
</style>
