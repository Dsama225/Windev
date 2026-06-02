<template>
    <AppNavbar />
    <main class="wmobile-page pb-10">
        <section class="section-shell wmobile-page__suite-line" aria-label="Product positioning">
            <p class="wmobile-page__suite-text">CROSS-PLATFORM APPLICATION DEVELOPMENT SOFTWARE SUITE</p>
            <div class="wmobile-page__os-row" aria-hidden="true">
                <span v-for="n in 7" :key="n" class="wmobile-page__os-dot" />
            </div>
        </section>

        <section class="section-shell wmobile-page__hero">
            <div class="wmobile-page__hero-card">
                <img class="wmobile-page__hero-image" :src="'/img/new-version-update_accueil.jpg'" alt="New WINDEV Mobile Suite" />
                <div class="wmobile-page__hero-buttons">
                    <button type="button" class="wmobile-page__hero-btn wmobile-page__hero-btn--active">Aperçu</button>
                    <button type="button" class="wmobile-page__hero-btn">Nouvelles Fonctionnalités</button>
                    <button type="button" class="wmobile-page__hero-btn">S'abonner</button>
                </div>
            </div>
        </section>

        <section class="section-shell wmobile-page__intro" aria-labelledby="wmobile-intro-title">
            <div class="wmobile-page__intro-card glass-frame">
                <div class="wmobile-page__intro-grid">
                    <figure class="wmobile-page__figure wmobile-page__figure--intro-pack">
                        <div class="wmobile-page__intro-pack-wrap">
                            <img
                                class="wmobile-page__intro-pack-img"
                                :src="'/img/windevmobileimg/package-windev-mobile-2026.webp'"
                                alt="WINDEV Mobile 2026 package"
                                width="350"
                                height="400"
                                loading="eager"
                                decoding="async"
                            />
                        </div>
                    </figure>
                    <div class="wmobile-page__intro-copy">
                        <h1 id="wmobile-intro-title" class="wmobile-page__intro-heading">
                            WINDEV MOBILE 2026, MOBILE IDE
                        </h1>
                        <p class="wmobile-page__intro-body">
                            Only WINDEV Mobile allows you to create powerful applications for Smartphones and Tablets (Android,
                            iOS, Windows 10 IoT, CE, etc.) in just a few hours: embedded or remote databases, GPS, IoT, bar
                            codes, and more.
                        </p>
                    </div>
                    <figure class="wmobile-page__figure wmobile-page__figure--circle">
                        <img
                            class="wmobile-page__circle-image"
                            :src="'/img/windevmobile/windev-mobile-available.webp'"
                            alt="WINDEV Mobile on smartphone"
                            width="200"
                            height="200"
                            loading="eager"
                            decoding="async"
                        />
                    </figure>
                </div>
            </div>
        </section>

        <section class="section-shell wmobile-page__compat" aria-label="Compatibility">
            <span class="wmobile-page__compat-tag">COMPATIBILITY</span>
            <a href="#" class="wmobile-page__compat-link">
                Your WINDEV Mobile code, windows and data are compatible with WEBDEV and WINDEV &gt;
            </a>
        </section>

        <section class="section-shell wmobile-page__grid-section" aria-label="WINDEV Mobile resources and downloads">
            <div class="wmobile-page__columns glass-frame">
                <div class="wmobile-page__column">
                    <h2 class="wmobile-page__section-title">NEW FEATURES</h2>
                    <img
                        class="wmobile-page__card-cover"
                        :src="'/img/windevmobileimg/900-new-features.webp'"
                        alt="WINDEV Suite new features 2026"
                        width="200"
                        height="260"
                        loading="lazy"
                        decoding="async"
                    />
                    <ul class="wmobile-page__link-list">
                        <li><a href="#" class="wmobile-page__text-link">Learn more</a></li>
                        <li>
                            <a href="#" class="wmobile-page__text-link">New features 2026 (Ebook / PDF)</a>
                            <span class="wmobile-page__flags" aria-label="English">US</span>
                        </li>
                        <li>
                            <a href="#" class="wmobile-page__text-link">Nouveautés 2026 (Ebook / PDF)</a>
                            <span class="wmobile-page__flags" aria-label="French">FR</span>
                        </li>
                    </ul>
                    <h3 class="wmobile-page__section-title wmobile-page__section-title--spaced">WINDEV SUITE</h3>
                    <p class="wmobile-page__column-text">
                        This year, PC SOFT has introduced a new subscription offer.
                    </p>
                    <img
                        class="wmobile-page__suite-logo"
                        :src="'/img/windevimg/logo_windev-suite_icone.svg'"
                        alt="WINDEV Suite"
                        width="40"
                        height="40"
                        loading="lazy"
                        decoding="async"
                    />
                    <p class="wmobile-page__column-text wmobile-page__column-text--tight">Yearly plans.</p>
                    <button type="button" class="wmobile-page__btn-subscribe">Subscribe</button>
                </div>

                <div class="wmobile-page__column">
                    <h2 class="wmobile-page__section-title">WINDEV MOBILE</h2>
                    <img
                        class="wmobile-page__card-cover"
                        :src="'/img/windevmobileimg/windev-mobile.jpg'"
                        alt="WINDEV Mobile product"
                        width="200"
                        height="260"
                        loading="lazy"
                        decoding="async"
                    />
                    <ul class="wmobile-page__link-list">
                        <li>
                            <a href="#" class="wmobile-page__text-link">WINDEV Mobile (Ebook / PDF)</a>
                            <span class="wmobile-page__flags" aria-label="English">US</span>
                        </li>
                        <li>
                            <a href="#" class="wmobile-page__text-link">WINDEV Mobile (Ebook / PDF)</a>
                            <span class="wmobile-page__flags" aria-label="French">FR</span>
                        </li>
                        <li>
                            <a href="#" class="wmobile-page__text-link">WINDEV Mobile (Ebook / PDF)</a>
                            <span class="wmobile-page__flags" aria-label="Spanish">ES</span>
                        </li>
                    </ul>
                    <ul class="wmobile-page__bullet-list wmobile-page__bullet-list--links">
                        <li><a href="#" class="wmobile-page__text-link">Create Android applications</a></li>
                        <li><a href="#" class="wmobile-page__text-link">Create iOS applications (iPhone/iPad)</a></li>
                        <li><a href="#" class="wmobile-page__text-link">Technical videos</a></li>
                        <li>
                            <a href="#" class="wmobile-page__text-link">New features already available in the subscription version</a>
                        </li>
                    </ul>
                    <h3 class="wmobile-page__section-title wmobile-page__section-title--spaced">CONTACT US</h3>
                    <p><a href="mailto:info@windev.com" class="wmobile-page__text-link">info@windev.com</a></p>
                    <h3 class="wmobile-page__section-title wmobile-page__section-title--spaced">ADDITIONAL TOOLS</h3>
                    <ul class="wmobile-page__link-list wmobile-page__link-list--tight">
                        <li><RouterLink class="wmobile-page__text-link" to="/software/wdmsg">Multilingual projects: WDMSG</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/reports-queries">Reports &amp; Queries (free)</RouterLink></li>
                    </ul>
                </div>

                <div class="wmobile-page__column">
                    <h2 class="wmobile-page__section-title">DOWNLOAD</h2>
                    <ul class="wmobile-page__link-list">
                        <li><a href="#" class="wmobile-page__text-link">WINDEV Mobile</a></li>
                        <li><a href="#" class="wmobile-page__text-link">WINDEV Mobile (Dongle based version)</a></li>
                        <li>
                            <a href="#" class="wmobile-page__text-link">Download WINDEV Mobile Express (free and time unlimited)</a>
                        </li>
                    </ul>
                    <a href="#" class="wmobile-page__express-btn">Download Express Version (free, click here)</a>
                    <h3 class="wmobile-page__section-title wmobile-page__section-title--spaced">DATABASES</h3>
                    <p class="wmobile-page__column-text">WINDEV supports all databases.</p>
                    <ul class="wmobile-page__db-bullets">
                        <li>HFSQL</li>
                        <li>Oracle</li>
                        <li>SQL Server</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>MariaDB</li>
                        <li>Informix</li>
                        <li>Access</li>
                        <li>SQLite</li>
                        <li>xBase</li>
                        <li>Progress</li>
                        <li>SAP ASE</li>
                        <li>DB2</li>
                        <li>AS/400 &amp; IBM i</li>
                        <li>ODBC</li>
                        <li>OLE DB</li>
                        <li>and more.</li>
                    </ul>
                    <h3 class="wmobile-page__section-title wmobile-page__section-title--spaced">WLANGUAGE</h3>
                    <p class="wmobile-page__column-text">
                        <a href="#" class="wmobile-page__text-link">29 WLanguage code samples</a>
                    </p>
                </div>

                <div class="wmobile-page__column wmobile-page__column--aside">
                    <div class="wmobile-page__partner-frame" aria-hidden="true" />
                </div>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { RouterLink } from 'vue-router';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
</script>

<style scoped>
.wmobile-page {
    color: #1f304f;
}

.wmobile-page__top-nav {
    margin-top: 0.5rem;
}

.wmobile-page__top-row {
    background: #fbfcff;
    border: 1px solid #dfe3ea;
    border-radius: 999px;
    padding: 0.5rem 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
}

.wmobile-page__brand {
    flex-shrink: 0;
    text-decoration: none;
    color: #1f304f;
    font-size: 0.95rem;
    font-weight: 800;
}

.wmobile-page__menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.95rem;
}

.wmobile-page__menu-link {
    text-decoration: none;
    color: #273755;
    font-size: 0.78rem;
    font-weight: 600;
}

.wmobile-page__theme-chip {
    border: 1px solid #c7ceda;
    border-radius: 999px;
    padding: 0.35rem 0.8rem;
    background: #fff;
    font-weight: 700;
    font-size: 0.72rem;
    color: #1f304f;
}

.wmobile-page__alert {
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    padding: 0.45rem 0.75rem;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #ffd400, #ffea66);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.18);
    text-align: center;
}

.wmobile-page__alert-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #16203a;
    text-decoration: none;
}

.wmobile-page__alert-download {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wmobile-page__alert-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wmobile-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.wmobile-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.wmobile-page__os-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
}

.wmobile-page__os-dot {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 9999px;
    border: 2px solid #d6dce7;
    background: #f4f6fa;
}

.wmobile-page__hero-card {
    border-radius: 1rem;
    border: 1px solid #e7ebf3;
    padding: 1rem;
    background: #fff;
}

.wmobile-page__hero-image {
    display: block;
    width: 100%;
    border-radius: 0.9rem;
}

.wmobile-page__hero-buttons {
    display: flex;
    justify-content: center;
    gap: 0.65rem;
    margin-top: 0.75rem;
}

.wmobile-page__hero-btn {
    border: 1px solid #e1e6f0;
    background: #f6f8fc;
    color: #2f405f;
    border-radius: 999px;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.35rem 0.85rem;
}

.wmobile-page__hero-btn--active {
    background: #0b56bf;
    color: #fff;
    border-color: #0b56bf;
}

.wmobile-page__intro {
    margin-top: 1.25rem;
}

.wmobile-page__intro-card {
    padding: clamp(1rem, 2vw, 1.5rem);
}

.wmobile-page__intro-grid {
    display: grid;
    gap: clamp(1rem, 2vw, 1.75rem);
    align-items: start;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.45fr) minmax(0, 0.78fr);
}

.wmobile-page__figure {
    margin: 0;
}

.wmobile-page__figure--intro-pack {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.wmobile-page__intro-pack-wrap {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
}

.wmobile-page__intro-pack-img {
    width: min(100%, 280px);
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
}

.wmobile-page__figure--circle {
    justify-self: end;
}

.wmobile-page__circle-image {
    width: min(100%, 200px);
    aspect-ratio: 1;
    border-radius: 9999px;
    border: 3px solid #e85a00;
    object-fit: cover;
    object-position: center;
    display: block;
    background: color-mix(in oklab, #e85a00 8%, var(--color-surface));
}

.wmobile-page__intro-heading {
    margin: 0 0 0.65rem;
    font-size: clamp(1.05rem, 1.85vw, 1.42rem);
    font-weight: 800;
    letter-spacing: 0.04em;
    line-height: 1.2;
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.wmobile-page__intro-body {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.wmobile-page__compat {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem 0.75rem;
    margin-top: 1.25rem;
    margin-bottom: 0.25rem;
}

.wmobile-page__compat-tag {
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

.wmobile-page__compat-link {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-brand);
    text-decoration: none;
}

.wmobile-page__compat-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wmobile-page__grid-section {
    margin-top: 1.35rem;
}

.wmobile-page__columns {
    display: grid;
    gap: clamp(1rem, 2vw, 1.5rem);
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: clamp(1rem, 2vw, 1.35rem);
}

.wmobile-page__column {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.45;
}

.wmobile-page__section-title {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.wmobile-page__section-title--spaced {
    margin-top: 0.85rem;
}

.wmobile-page__column-text {
    margin: 0;
    color: var(--color-text-secondary);
}

.wmobile-page__column-text--tight {
    margin-top: -0.35rem;
}

.wmobile-page__card-cover {
    width: 100%;
    max-width: 200px;
    height: auto;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    border-radius: 0.2rem;
    object-fit: cover;
    display: block;
}

.wmobile-page__suite-logo {
    width: 2.5rem;
    height: auto;
    display: block;
}

.wmobile-page__column--aside {
    min-width: 0;
}

.wmobile-page__partner-frame {
    min-height: 140px;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 28%, transparent);
    border-radius: 0.25rem;
    background: var(--color-surface);
    box-shadow: 0 1px 0 color-mix(in oklab, var(--color-text-primary) 6%, transparent);
}

.wmobile-page__link-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.35rem;
}

.wmobile-page__link-list--tight {
    margin-top: 0.25rem;
}

.wmobile-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.wmobile-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wmobile-page__flags {
    margin-left: 0.35rem;
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--color-text-secondary);
}

.wmobile-page__bullet-list {
    margin: 0.25rem 0 0;
    padding-left: 1.1rem;
    color: var(--color-text-secondary);
}

.wmobile-page__bullet-list--links {
    list-style: disc;
}

.wmobile-page__bullet-list--links .wmobile-page__text-link {
    font-weight: 600;
}

.wmobile-page__express-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    width: 100%;
    max-width: 100%;
    margin-top: 0.35rem;
    padding: 0.75rem 1rem;
    border-radius: 0.45rem;
    font-weight: 700;
    font-size: 0.82rem;
    text-align: center;
    text-decoration: none;
    color: #16203a;
    background: linear-gradient(180deg, #ffe94a, #ffd400 55%, #f5c800);
    border: 1px solid color-mix(in oklab, #16203a 14%, transparent);
    box-shadow: 0 6px 14px rgba(179, 144, 3, 0.22);
}

.wmobile-page__express-btn:hover {
    transform: translateY(-1px);
}

.wmobile-page__db-bullets {
    margin: 0;
    padding-left: 1.1rem;
    color: var(--color-text-secondary);
    font-size: 0.82rem;
    line-height: 1.45;
}

.wmobile-page__btn-subscribe {
    align-self: flex-start;
    margin-top: 0.25rem;
    padding: 0.5rem 1.35rem;
    border-radius: 9999px;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.82rem;
    color: #fff;
    background: #111;
}

.wmobile-page__btn-subscribe:hover {
    opacity: 0.9;
}

@media (max-width: 1100px) {
    .wmobile-page__columns {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wmobile-page__column--aside {
        grid-column: 1 / -1;
        max-width: 220px;
    }
}

@media (max-width: 720px) {
    .wmobile-page__intro-grid {
        grid-template-columns: 1fr;
    }

    .wmobile-page__figure--circle {
        justify-self: center;
    }

    .wmobile-page__circle-image {
        margin-inline: auto;
    }

    .wmobile-page__columns {
        grid-template-columns: 1fr;
    }
}

:global(.theme-dark) .wmobile-page__alert-link {
    color: #0b1f4d;
}

:global(.theme-dark) .wmobile-page__express-btn {
    color: #16203a;
}
</style>
