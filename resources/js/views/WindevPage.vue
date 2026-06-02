<template>
    <AppNavbar />
    <main class="windev-page pb-10">
        <section class="section-shell windev-page__suite-line" aria-label="Product positioning">
            <p class="windev-page__suite-text">CROSS-PLATFORM APPLICATION DEVELOPMENT SOFTWARE SUITE</p>
            <div class="windev-page__os-row" aria-hidden="true">
                <span v-for="n in 7" :key="n" class="windev-page__os-dot" />
            </div>
        </section>

        <section class="section-shell windev-page__hero">
            <div class="windev-page__hero-card">
                <img class="windev-page__hero-image" :src="'/img/windevimg/windevsuite.jpg'" alt="New WINDEV Suite" />
                <div class="windev-page__hero-buttons">
                    <button type="button" class="windev-page__hero-btn windev-page__hero-btn--active">Aperçu</button>
                    <button type="button" class="windev-page__hero-btn">Nouvelles Fonctionnalités</button>
                    <button type="button" class="windev-page__hero-btn">S'abonner</button>
                </div>
            </div>
        </section>

        <section class="section-shell windev-page__intro" aria-labelledby="windev-intro-title">
            <h1 id="windev-intro-title" class="windev-page__intro-hero">DEVELOP 10 TIMES FASTER</h1>
            <div class="windev-page__intro-card">
                <div class="windev-page__intro-grid">
                    <figure class="windev-page__figure windev-page__figure--intro-pack">
                        <img
                            class="windev-page__intro-image"
                            :src="'/img/windevimg/package-windev-2026.webp'"
                            alt="WINDEV 2026 package"
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>
                    <div class="windev-page__intro-copy">
                        <h2 class="windev-page__intro-heading">
                            WINDEV 2026, A POWERFUL IDE & ALM SUITE
                        </h2>
                        <p class="windev-page__intro-body" v-html="defaultIntroBody" />
                    </div>
                    <div class="windev-page__aside-media">
                        <figure class="windev-page__figure windev-page__figure--circle">
                            <img
                                class="windev-page__circle-image"
                                :src="'/img/windevimg/logo_windev-suite_icone.svg'"
                                alt="WINDEV suite icon"
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>
                        <figure class="windev-page__figure windev-page__logo-carousel-box">
                            <img
                                class="windev-page__logo-carousel-image"
                                :src="carouselLogos[currentCarouselIndex]"
                                alt="WINDEV customer logo"
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-shell windev-page__compat" aria-label="Compatibility">
            <span class="windev-page__compat-tag">COMPATIBILITY</span>
            <a href="#" class="windev-page__compat-link">
                Your WINDEV code, windows and data are compatible with WEBDEV and WINDEV Mobile &gt;
            </a>
        </section>

        <section class="section-shell windev-page__grid-section" aria-label="WINDEV resources and downloads">
            <div class="windev-page__columns">
                <div class="windev-page__column">
                    <h3 class="windev-page__column-title">NEW FEATURES</h3>
                    <img
                        class="windev-page__card-cover"
                        :src="'/img/windevimg/900-new-features.webp'"
                        alt="New features WINDEV 2026"
                        loading="lazy"
                        decoding="async"
                    />
                    <ul class="windev-page__link-list">
                        <li>
                            <RouterLink class="windev-page__text-link" to="/software/new-features-2026">Learn more</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="windev-page__text-link" to="/software/new-features-2026">
                                New features 2026 (eBook / PDF)
                            </RouterLink>
                            <span class="windev-page__flags" aria-label="Languages">EN FR</span>
                        </li>
                    </ul>
                    <h3 class="windev-page__column-title">WINDEV SUITE</h3>
                    <p class="windev-page__column-text">
                        Discover the new WINDEV Suite subscription offer: WINDEV, WEBDEV and WINDEV Mobile in one subscription.
                    </p>
                    <img
                        class="windev-page__suite-logo"
                        :src="'/img/windevimg/logo_windev-suite_icone.svg'"
                        alt="WINDEV suite icon"
                        loading="lazy"
                        decoding="async"
                    />
                    <button type="button" class="windev-page__btn-subscribe">Subscribe</button>
                </div>

                <div class="windev-page__column">
                    <h3 class="windev-page__column-title">DISCOVER WINDEV</h3>
                    <img
                        class="windev-page__card-cover"
                        :src="'/img/windevimg/windev.jpg'"
                        alt="Discover WINDEV brochure"
                        loading="lazy"
                        decoding="async"
                    />
                    <ul class="windev-page__link-list">
                        <li><a href="#" class="windev-page__text-link">WINDEV (French / PDF)</a> <span class="windev-page__flags">FR</span></li>
                        <li><a href="#" class="windev-page__text-link">WINDEV (French / PDF)</a> <span class="windev-page__flags">FR</span></li>
                        <li><a href="#" class="windev-page__text-link">WINDEV (French / PDF)</a> <span class="windev-page__flags">FR</span></li>
                    </ul>
                    <ul class="windev-page__bullet-list">
                        <li>Technical videos</li>
                        <li>WINDEV Press Releases</li>
                        <li>New features already available</li>
                    </ul>
                    <p class="windev-page__contact-label">Contact Us</p>
                    <p><a href="mailto:info@windev.com" class="windev-page__text-link">info@windev.com</a></p>
                    <ul class="windev-page__link-list windev-page__link-list--tight">
                        <li><RouterLink class="windev-page__text-link" to="/software/wdmsg">Multilingual projects: WDMSG</RouterLink></li>
                        <li><a href="#" class="windev-page__text-link">Passes &amp; Queries (free)</a></li>
                    </ul>
                </div>

                <div class="windev-page__column">
                    <h3 class="windev-page__column-title windev-page__column-title--small">Download</h3>
                    <ul class="windev-page__link-list">
                        <li><a href="#" class="windev-page__text-link">WINDEV</a></li>
                        <li><a href="#" class="windev-page__text-link">WINDEV (Dongle based version)</a></li>
                        <li><a href="#" class="windev-page__text-link">Download WINDEV Express</a></li>
                    </ul>
                    <a href="#" class="windev-page__express-btn">Download Express Version (free, click here)</a>
                    <h3 class="windev-page__column-title windev-page__column-title--small">Databases</h3>
                    <p class="windev-page__db-list">
                        HFSQL, AS/400 &amp; IBM, Oracle, SQL Server, DB2, MySQL, PostgreSQL, MariaDB, Informix, Access, SQLite,
                        xBase, Progress, SAP ASE, ODBC, OLE DB and more.
                    </p>
                </div>

            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';

const defaultIntroBody = 'WINDEV is a powerful integrated development environment and application lifecycle management suite. The same project, the same code, the same objects and the same concepts run natively on Windows, Linux, .Net and Java. WINDEV lets you develop your applications with ease and remarkable productivity.';

const carouselLogos = [
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

const currentCarouselIndex = ref(0);
let carouselTimer = null;

onMounted(() => {
    carouselTimer = window.setInterval(() => {
        currentCarouselIndex.value = (currentCarouselIndex.value + 1) % carouselLogos.length;
    }, 2200);
});

onBeforeUnmount(() => {
    if (carouselTimer) {
        window.clearInterval(carouselTimer);
    }
});
</script>

<style scoped>
.windev-page {
    color: #1f304f;
}

.windev-page__top-nav {
    margin-top: 0.5rem;
}

.windev-page__top-row {
    background: #fbfcff;
    border: 1px solid #dfe3ea;
    border-radius: 999px;
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
}

.windev-page__brand {
    flex-shrink: 0;
    text-decoration: none;
    color: #1f304f;
    font-size: 0.95rem;
    font-weight: 800;
}

.windev-page__menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.95rem;
}

.windev-page__menu-link {
    text-decoration: none;
    color: #273755;
    font-size: 0.78rem;
    font-weight: 600;
}

.windev-page__menu-link:hover {
    text-decoration: underline;
}

.windev-page__theme-chip {
    border: 1px solid #c7ceda;
    border-radius: 999px;
    padding: 0.35rem 0.8rem;
    background: #fff;
    font-weight: 700;
    font-size: 0.72rem;
    color: #1f304f;
}

.windev-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.windev-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.windev-page__os-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
}

.windev-page__os-dot {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 9999px;
    border: 2px solid #d6dce7;
    background: #f4f6fa;
}

.windev-page__hero-card {
    border-radius: 1rem;
    border: 1px solid #e7ebf3;
    padding: 1rem;
    background: #fff;
}

.windev-page__hero-image {
    display: block;
    width: 100%;
    border-radius: 0.9rem;
    border: 1px solid #f0d94c;
}

.windev-page__hero-buttons {
    display: flex;
    justify-content: center;
    gap: 0.65rem;
    margin-top: 0.75rem;
}

.windev-page__hero-btn {
    border: 1px solid #e1e6f0;
    background: #f6f8fc;
    color: #2f405f;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.35rem 0.85rem;
}

.windev-page__hero-btn--active {
    background: #0b56bf;
    color: #fff;
    border-color: #0b56bf;
}

.windev-page__intro {
    margin-top: 0.9rem;
}

.windev-page__intro-hero {
    margin: 0 0 0.6rem;
    text-align: center;
    font-size: clamp(1.95rem, 4vw, 2.85rem);
    color: #1a2c56;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.windev-page__intro-card {
    border-radius: 1rem;
    border: 1px solid #dbe1ec;
    background: #f5f7fb;
    padding: 1rem;
}

.windev-page__intro-grid {
    display: grid;
    gap: clamp(1rem, 2vw, 1.75rem);
    align-items: start;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.45fr) minmax(0, 0.75fr);
}

.windev-page__figure {
    margin: 0;
}

.windev-page__figure--circle {
    justify-self: end;
}

.windev-page__aside-media {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
}

.windev-page__figure--intro-pack {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.windev-page__intro-image {
    width: min(100%, 250px);
    border-radius: 0.1rem;
    display: block;
}

.windev-page__intro-heading {
    margin: 0 0 0.65rem;
    font-size: clamp(1.15rem, 1.8vw, 1.75rem);
    color: #14264d;
    font-weight: 800;
    letter-spacing: 0.02em;
    line-height: 1.25;
}

.windev-page__intro-body {
    margin: 0;
    font-size: 1.04rem;
    line-height: 1.55;
    color: #42526d;
}

.windev-page__circle-image {
    width: min(100%, 170px);
    aspect-ratio: 1;
    border-radius: 9999px;
    border: 5px solid #f4da1c;
    object-fit: cover;
    display: block;
}

.windev-page__logo-carousel-box {
    width: 186px;
    height: 142px;
    border: 1px solid #d8deeb;
    border-radius: 0.35rem;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem;
    box-shadow:
        0 1px 2px rgba(15, 23, 42, 0.05),
        0 10px 22px rgba(15, 23, 42, 0.08);
    overflow: hidden;
}

.windev-page__logo-carousel-image {
    width: 92%;
    height: 92%;
    object-fit: contain;
    object-position: center;
    display: block;
    filter: saturate(1.03) contrast(1.02);
}

.windev-page__compat {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 0.75rem;
    margin-top: 1.25rem;
    margin-bottom: 0.25rem;
}

.windev-page__compat-tag {
    display: inline-flex;
    align-items: center;
    border-radius: 0.25rem;
    padding: 0.2rem 0.45rem;
    font-size: 0.68rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    color: #fff;
    background: #e85a00;
}

.windev-page__compat-link {
    font-size: 0.9rem;
    font-weight: 600;
    color: #3966ad;
    text-decoration: none;
}

.windev-page__compat-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.windev-page__grid-section {
    margin-top: 1.35rem;
}

.windev-page__columns {
    display: grid;
    gap: clamp(1rem, 2vw, 1.5rem);
    grid-template-columns: 1.05fr 1.05fr 1.2fr;
    padding: clamp(1rem, 2vw, 1.35rem);
    border-radius: 1rem;
    border: 1px solid #dbe1ec;
    background: #f5f7fb;
}

.windev-page__column {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.45;
}

.windev-page__column-title {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.windev-page__column-title--small {
    margin-top: 0.15rem;
}

.windev-page__column-text {
    margin: 0;
    color: #42526d;
}

.windev-page__card-cover {
    width: 100%;
    max-width: 200px;
    border: 1px solid #cfd7e7;
    border-radius: 0.2rem;
    object-fit: cover;
    display: block;
}

.windev-page__link-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.35rem;
}

.windev-page__link-list--tight {
    margin-top: 0.25rem;
}

.windev-page__text-link {
    color: #2e5ea8;
    font-weight: 600;
    text-decoration: none;
}

.windev-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.windev-page__flags {
    margin-left: 0.35rem;
    font-size: 0.72rem;
    font-weight: 700;
    color: #566784;
}

.windev-page__bullet-list {
    margin: 0.25rem 0 0;
    padding-left: 1.1rem;
    color: #42526d;
}

.windev-page__contact-label {
    margin: 0.5rem 0 0;
    font-weight: 800;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
}

.windev-page__express-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.25rem;
    padding: 0.65rem 0.85rem;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 0.82rem;
    text-align: center;
    text-decoration: none;
    color: #16203a;
    background: linear-gradient(135deg, #ffd400, #ffea66);
    border: 1px solid color-mix(in oklab, #16203a 12%, transparent);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.2);
}

.windev-page__express-btn:hover {
    transform: translateY(-1px);
}

.windev-page__db-list {
    margin: 0;
    color: #42526d;
    font-size: 0.82rem;
    line-height: 1.55;
}

.windev-page__btn-subscribe {
    align-self: flex-start;
    margin-top: 0.25rem;
    padding: 0.55rem 1.1rem;
    border-radius: 0.35rem;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    color: #fff;
    background: #111;
}

.windev-page__btn-subscribe:hover {
    opacity: 0.9;
}

.windev-page__suite-logo {
    width: 2.5rem;
    height: 2.5rem;
    display: block;
}

@media (max-width: 1100px) {
    .windev-page__top-row {
        border-radius: 1rem;
    }

    .windev-page__menu {
        justify-content: flex-start;
    }

    .windev-page__columns {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 720px) {
    .windev-page__top-row {
        flex-direction: column;
        align-items: stretch;
    }

    .windev-page__menu {
        justify-content: center;
    }

    .windev-page__theme-chip {
        align-self: center;
    }

    .windev-page__hero-buttons {
        flex-wrap: wrap;
    }

    .windev-page__intro-grid {
        grid-template-columns: 1fr;
    }

    .windev-page__figure--circle {
        justify-self: center;
    }

    .windev-page__aside-media {
        align-items: center;
    }

    .windev-page__logo-carousel-box {
        width: min(80vw, 210px);
        height: min(56vw, 158px);
    }

    .windev-page__columns {
        grid-template-columns: 1fr;
    }
}
</style>
