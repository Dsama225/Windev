<template>
    <AppNavbar />
    <main class="webdev-page pb-10">
        <section class="section-shell webdev-page__suite-line" aria-label="Product positioning">
            <p class="webdev-page__suite-text">CROSS-PLATFORM APPLICATION DEVELOPMENT SOFTWARE SUITE</p>
            <div class="webdev-page__os-row" aria-hidden="true">
                <span v-for="n in 7" :key="n" class="webdev-page__os-dot" />
            </div>
        </section>

        <section class="section-shell webdev-page__hero">
            <div class="webdev-page__hero-card">
                <img class="webdev-page__hero-image" :src="'/img/new-version-update_accueil.jpg'" alt="New WEBDEV Suite" />
                <div class="webdev-page__hero-buttons">
                    <button type="button" class="webdev-page__hero-btn webdev-page__hero-btn--active">Aperçu</button>
                    <button type="button" class="webdev-page__hero-btn">Nouvelles Fonctionnalités</button>
                    <button type="button" class="webdev-page__hero-btn">S'abonner</button>
                </div>
            </div>
        </section>

        <section class="section-shell webdev-page__intro" aria-labelledby="webdev-intro-title">
            <div class="webdev-page__intro-card glass-frame">
                <div class="webdev-page__intro-toolbar">
                    <button type="button" class="webdev-page__btn-subscribe webdev-page__btn-subscribe--header">Subscribe</button>
                </div>
                <div class="webdev-page__intro-grid">
                    <figure class="webdev-page__figure webdev-page__figure--intro-pack">
                        <div class="webdev-page__intro-pack-wrap">
                            <img
                                class="webdev-page__intro-pack-img"
                                :src="'/img/webdevimg/package-webdev-2026.webp'"
                                alt="WEBDEV 2026 package"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    </figure>
                    <div class="webdev-page__intro-copy">
                        <h1 id="webdev-intro-title" class="webdev-page__intro-heading">WEBDEV 2026, WEB IDE</h1>
                        <p class="webdev-page__intro-body">
                            Responsive Web Design. WEBDEV allows you to easily develop Internet and Intranet sites and applications (WEB &amp; SaaS) to
                            manage data and processes. WEBDEV also generates PHP.
                        </p>
                    </div>
                    <div class="webdev-page__aside-media">
                        <figure class="webdev-page__figure webdev-page__figure--circle">
                            <img
                                class="webdev-page__circle-badge"
                                :src="'/img/webdev/logo-webdev.webp'"
                                alt="WEBDEV"
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>
                    </div>
                </div>
                <div class="webdev-page__compat webdev-page__compat--in-card" aria-label="Compatibility">
                    <span class="webdev-page__compat-tag">COMPATIBILITY</span>
                    <a href="#" class="webdev-page__compat-link">
                        Your WEBDEV code, pages and data are compatible with WINDEV and WINDEV Mobile &gt;
                    </a>
                </div>
            </div>
        </section>

        <section class="section-shell webdev-page__grid-section" aria-label="WEBDEV resources and downloads">
            <div class="webdev-page__columns glass-frame">
                <div class="webdev-page__column">
                    <h2 class="webdev-page__section-heading">NEW FEATURES</h2>
                    <img
                        class="webdev-page__card-cover"
                        :src="'/img/webdevimg/900-new-features.webp'"
                        alt="WINDEV Suite 2026 new features"
                        loading="lazy"
                        decoding="async"
                    />
                    <ul class="webdev-page__link-list">
                        <li><a href="#" class="webdev-page__text-link">Learn more</a></li>
                        <li>
                            <span class="webdev-page__flag" aria-hidden="true">&#x1F1FA;&#x1F1F8;</span>
                            <a href="#" class="webdev-page__text-link">New Features 2026 (Ebook / PDF)</a>
                        </li>
                        <li>
                            <span class="webdev-page__flag" aria-hidden="true">&#x1F1EB;&#x1F1F7;</span>
                            <a href="#" class="webdev-page__text-link">Nouveautés 2026 (Ebook / PDF)</a>
                        </li>
                    </ul>
                    <h2 class="webdev-page__section-heading">WINDEV SUITE</h2>
                    <p class="webdev-page__column-text">This year, PC SOFT has introduced a new subscription offer.</p>
                    <img
                        class="webdev-page__suite-logo-img"
                        :src="'/img/windevimg/logo_windev-suite_icone.svg'"
                        alt="WINDEV Suite"
                        loading="lazy"
                        decoding="async"
                    />
                    <p class="webdev-page__column-text webdev-page__column-text--emph">Yearly plans</p>
                    <button type="button" class="webdev-page__btn-subscribe">Subscribe</button>
                    <h2 class="webdev-page__section-heading">ADDITIONAL TOOLS</h2>
                    <ul class="webdev-page__link-list">
                        <li><a href="#" class="webdev-page__text-link">Multilingual projects: WDMSG</a></li>
                        <li><a href="#" class="webdev-page__text-link">Reports &amp; Queries (free)</a></li>
                    </ul>
                </div>

                <div class="webdev-page__column">
                    <h2 class="webdev-page__section-heading">DISCOVER WEBDEV</h2>
                    <img
                        class="webdev-page__card-cover"
                        :src="'/img/webdevimg/webdev.jpg'"
                        alt="WEBDEV product overview"
                        loading="lazy"
                        decoding="async"
                    />
                    <ul class="webdev-page__link-list">
                        <li class="webdev-page__link-row webdev-page__link-row--flags">
                            <span class="webdev-page__flag" aria-hidden="true">&#x1F1FA;&#x1F1F8;</span>
                            <span class="webdev-page__flag" aria-hidden="true">&#x1F1EB;&#x1F1F7;</span>
                            <span class="webdev-page__flag" aria-hidden="true">&#x1F1EA;&#x1F1F8;</span>
                            <a href="#" class="webdev-page__text-link">WEBDEV (Ebook / PDF)</a>
                        </li>
                        <li><a href="#" class="webdev-page__text-link">Technical videos</a></li>
                        <li>
                            <a href="#" class="webdev-page__text-link">New features already available in the subscription version</a>
                        </li>
                    </ul>
                    <h2 class="webdev-page__section-heading">DOWNLOAD CENTER</h2>
                    <ul class="webdev-page__link-list">
                        <li><a href="#" class="webdev-page__text-link">WEBDEV</a></li>
                        <li><a href="#" class="webdev-page__text-link">WEBDEV (Dongle-based version)</a></li>
                    </ul>
                    <h2 class="webdev-page__section-heading">CONTACT US</h2>
                    <p><a href="mailto:info@windev.com" class="webdev-page__text-link">info@windev.com</a></p>
                    <h2 class="webdev-page__section-heading">WLANGUAGE</h2>
                    <ul class="webdev-page__link-list">
                        <li><a href="#" class="webdev-page__text-link">29 WLanguage code samples</a></li>
                    </ul>
                </div>

                <div class="webdev-page__column">
                    <h2 class="webdev-page__section-heading">POWERED BY WEBDEV</h2>
                    <img
                        class="webdev-page__card-cover webdev-page__card-cover--gif"
                        :src="'/img/webdevimg/1000-sites.gif'"
                        alt="Websites developed with WEBDEV"
                        loading="lazy"
                        decoding="async"
                    />
                    <ul class="webdev-page__link-list">
                        <li><a href="#" class="webdev-page__text-link">Websites developed with WEBDEV</a></li>
                        <li><a href="#" class="webdev-page__text-link">Native support for AJAX (Web 2.0)</a></li>
                    </ul>
                    <h2 class="webdev-page__section-heading">DATABASES</h2>
                    <p class="webdev-page__column-text">WINDEV supports all databases.</p>
                    <p class="webdev-page__db-list">
                        HFSQL, AS/400, Oracle, SQL Server, DB2, MySQL, Informix, PostgreSQL, Progress, Sybase, xBase, SQLite, Access, MariaDB, Hadoop,
                        MongoDB, Memcached, Redis, etc.
                    </p>
                    <p class="webdev-page__db-note">
                        WEBDEV also supports all the databases that use ODBC drivers or OLEDB providers (InterSystems Caché, Firebird, EasySoft,
                        MapInfo, etc.)
                    </p>
                </div>

                <div class="webdev-page__column webdev-page__column--testimonials">
                    <h2 class="webdev-page__section-heading">TESTIMONIALS</h2>
                    <div class="webdev-page__testimonial-logo-box" role="img" aria-label="RICOH">
                        <span class="webdev-page__ricoh-mark">RICOH</span>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
</script>

<style scoped>
.webdev-page {
    color: #1f304f;
}

.webdev-page__top-nav {
    margin-top: 0.5rem;
}

.webdev-page__top-row {
    background: #fbfcff;
    border: 1px solid #dfe3ea;
    border-radius: 999px;
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
}

.webdev-page__brand {
    flex-shrink: 0;
    text-decoration: none;
    color: #1f304f;
    font-size: 0.95rem;
    font-weight: 800;
}

.webdev-page__menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.95rem;
}

.webdev-page__menu-link {
    text-decoration: none;
    color: #273755;
    font-size: 0.78rem;
    font-weight: 600;
}

.webdev-page__theme-chip {
    border: 1px solid #c7ceda;
    border-radius: 999px;
    padding: 0.35rem 0.8rem;
    background: #fff;
    font-weight: 700;
    font-size: 0.72rem;
    color: #1f304f;
}

.webdev-page__alert {
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    padding: 0.45rem 0.75rem;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #ffd400, #ffea66);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.18);
    text-align: center;
}

.webdev-page__alert-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #16203a;
    text-decoration: none;
}

.webdev-page__alert-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.webdev-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.webdev-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.webdev-page__os-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
}

.webdev-page__os-dot {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 9999px;
    border: 2px solid #d6dce7;
    background: #f4f6fa;
}

.webdev-page__hero-card {
    border-radius: 1rem;
    border: 1px solid #e7ebf3;
    padding: 1rem;
    background: #fff;
}

.webdev-page__hero-image {
    display: block;
    width: 100%;
    border-radius: 0.9rem;
}

.webdev-page__hero-buttons {
    display: flex;
    justify-content: center;
    gap: 0.65rem;
    margin-top: 0.75rem;
}

.webdev-page__hero-btn {
    border: 1px solid #e1e6f0;
    background: #f6f8fc;
    color: #2f405f;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.35rem 0.85rem;
}

.webdev-page__hero-btn--active {
    background: #0b56bf;
    color: #fff;
    border-color: #0b56bf;
}

.webdev-page__intro {
    margin-top: 1.25rem;
}

.webdev-page__intro-card {
    position: relative;
    padding: clamp(1rem, 2vw, 1.5rem);
    padding-top: clamp(2.5rem, 4vw, 3rem);
}

.webdev-page__intro-toolbar {
    position: absolute;
    top: clamp(0.65rem, 1.5vw, 0.85rem);
    right: clamp(0.65rem, 1.5vw, 0.85rem);
}

.webdev-page__btn-subscribe--header {
    border-radius: 9999px;
    padding: 0.45rem 1rem;
}

.webdev-page__intro-grid {
    display: grid;
    gap: clamp(1rem, 2vw, 1.75rem);
    align-items: start;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.45fr) minmax(0, 0.75fr);
}

.webdev-page__figure {
    margin: 0;
}

.webdev-page__figure--intro-pack {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.webdev-page__intro-pack-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.webdev-page__intro-pack-img {
    width: min(100%, 230px);
    height: auto;
    display: block;
    border-radius: 0.2rem;
}

.webdev-page__intro-copy {
    min-width: 0;
}

.webdev-page__aside-media {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
}

.webdev-page__figure--circle {
    justify-self: end;
}

.webdev-page__circle-badge {
    width: min(100%, 170px);
    aspect-ratio: 1;
    border-radius: 9999px;
    border: 5px solid #1e6bd6;
    object-fit: contain;
    object-position: center;
    display: block;
    padding: 0.35rem;
    background: linear-gradient(180deg, #fff9c4 0%, #ffe082 55%, #fbc02d 100%);
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.12);
}

.webdev-page__intro-heading {
    margin: 0 0 0.65rem;
    font-size: clamp(1.05rem, 1.8vw, 1.35rem);
    font-weight: 800;
    letter-spacing: 0.02em;
    line-height: 1.25;
}

.webdev-page__intro-body {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.webdev-page__compat {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 0.75rem;
    margin-top: 1.25rem;
    margin-bottom: 0.25rem;
}

.webdev-page__compat--in-card {
    margin-top: clamp(1rem, 2vw, 1.35rem);
    margin-bottom: 0;
    padding-top: clamp(0.75rem, 1.5vw, 1rem);
    border-top: 1px solid color-mix(in oklab, var(--color-text-secondary) 18%, transparent);
}

.webdev-page__compat-tag {
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

.webdev-page__compat-link {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-brand);
    text-decoration: none;
}

.webdev-page__compat-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.webdev-page__grid-section {
    margin-top: 1.35rem;
}

.webdev-page__columns {
    display: grid;
    gap: clamp(1rem, 2vw, 1.5rem);
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: clamp(1rem, 2vw, 1.35rem);
}

.webdev-page__column {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.45;
}

.webdev-page__section-heading {
    margin: 0.15rem 0 0;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    line-height: 1.2;
}

.webdev-page__column-text {
    margin: 0;
    color: var(--color-text-secondary);
}

.webdev-page__column-text--emph {
    font-weight: 700;
    color: var(--color-text-primary);
}

.webdev-page__card-cover {
    width: 100%;
    max-width: 200px;
    height: auto;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 20%, transparent);
    border-radius: 0.2rem;
    object-fit: cover;
    display: block;
}

.webdev-page__card-cover--gif {
    object-fit: contain;
    background: color-mix(in oklab, var(--color-surface) 92%, #f1f5f9 8%);
}

.webdev-page__suite-logo-img {
    width: 2.65rem;
    height: auto;
    display: block;
    border-radius: 0.45rem;
}

.webdev-page__column--testimonials {
    align-items: stretch;
}

.webdev-page__testimonial-logo-box {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 120px;
    padding: 1rem 0.85rem;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 28%, transparent);
    border-radius: 0.25rem;
    background: color-mix(in oklab, var(--color-surface) 94%, #e2e8f0 6%);
}

.webdev-page__ricoh-mark {
    font-family: system-ui, sans-serif;
    font-size: clamp(1.35rem, 2.5vw, 1.75rem);
    font-weight: 800;
    letter-spacing: 0.02em;
    color: #c4001a;
}

.webdev-page__flag {
    margin-right: 0.28rem;
    font-size: 0.95rem;
    line-height: 1;
    vertical-align: -0.08em;
}

.webdev-page__link-row--flags {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.15rem 0.35rem;
}

.webdev-page__link-row--flags .webdev-page__text-link {
    margin-left: 0.15rem;
}

.webdev-page__link-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.35rem;
}

.webdev-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.webdev-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.webdev-page__db-list {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: 0.82rem;
    line-height: 1.55;
}

.webdev-page__db-note {
    margin: 0;
    font-size: 0.78rem;
    line-height: 1.5;
    color: var(--color-text-secondary);
}

.webdev-page__btn-subscribe {
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

.webdev-page__btn-subscribe:hover {
    opacity: 0.9;
}

@media (max-width: 1100px) {
    .webdev-page__columns {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 720px) {
    .webdev-page__intro-grid {
        grid-template-columns: 1fr;
    }

    .webdev-page__aside-media {
        align-items: center;
    }

    .webdev-page__figure--circle {
        justify-self: center;
    }

    .webdev-page__intro-toolbar {
        position: static;
        margin-bottom: 0.75rem;
        text-align: right;
    }

    .webdev-page__intro-card {
        padding-top: clamp(1rem, 2vw, 1.5rem);
    }

    .webdev-page__columns {
        grid-template-columns: 1fr;
    }

    .webdev-page__card-cover {
        max-width: 220px;
        margin-inline: auto;
    }

    .webdev-page__intro-pack-wrap {
        justify-content: center;
    }
}

:global(.theme-dark) .webdev-page__alert-link {
    color: #0b1f4d;
}
</style>
