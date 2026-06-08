<template>
    <AppNavbar />
    <main class="wmobile-page pb-10">
        <section class="section-shell wmobile-page__suite-line" aria-label="Positionnement produit">
            <p class="wmobile-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="wmobile-page__suite-platforms">
                <img
                    :src="windevMobileSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, windevMobileSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell wmobile-page__hero" aria-label="Bannière WINDEV Suite">
            <HomeHeroCarousel />
        </section>

        <section class="section-shell wmobile-page__intro" aria-labelledby="wmobile-intro-title">
            <h1 id="wmobile-intro-title" class="wmobile-page__intro-hero">DÉVELOPPEZ 10 FOIS PLUS VITE</h1>
            <div class="wmobile-page__intro-card glass-frame">
                <div class="wmobile-page__intro-grid">
                    <figure class="wmobile-page__figure wmobile-page__figure--intro-pack">
                        <img
                            class="wmobile-page__intro-image"
                            :src="windevMobilePackage2026.src"
                            alt="WINDEV Mobile 2026"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, windevMobilePackage2026.fallback)"
                        />
                    </figure>
                    <div class="wmobile-page__intro-copy">
                        <h2 class="wmobile-page__intro-heading">WINDEV MOBILE 2026, IDE MOBILE</h2>
                        <p class="wmobile-page__intro-body">{{ introBody }}</p>
                    </div>
                    <div class="wmobile-page__aside-media">
                        <figure class="wmobile-page__figure wmobile-page__figure--circle">
                            <img
                                class="wmobile-page__circle-image"
                                :src="windevMobileBadge.src"
                                alt="WINDEV Mobile"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevMobileBadge.fallback)"
                            />
                        </figure>
                        <CustomerLogoCarousel variant="compact" />
                    </div>
                </div>
            </div>
        </section>

        <section class="section-shell wmobile-page__compat glass-frame" aria-label="Compatibilité">
            <a href="/software/windev" class="wmobile-page__compat-link">
                <img
                    class="wmobile-page__compat-badge"
                    :src="windevMobileCompatibilityBadge.src"
                    alt=""
                    width="97"
                    height="19"
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                    @error="onImageError($event, windevMobileCompatibilityBadge.fallback)"
                />
                <span>Votre code WINDEV Mobile, vos fenêtres et vos données sont compatibles avec WEBDEV et WINDEV</span>
                <img
                    class="wmobile-page__compat-arrow"
                    :src="windevMobileSuiteArrow.src"
                    alt=""
                    width="10"
                    height="8"
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                    @error="onImageError($event, windevMobileSuiteArrow.fallback)"
                />
            </a>
        </section>

        <section class="section-shell wmobile-page__grid-section" aria-label="Ressources et téléchargements WINDEV Mobile">
            <div class="wmobile-page__columns glass-frame">
                <div class="wmobile-page__column">
                    <h3 class="wmobile-page__column-title">NOUVEAUTÉS</h3>
                    <a
                        class="wmobile-page__card-cover-link"
                        :href="windevMobileNewFeatures2026En.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="wmobile-page__card-cover"
                            :src="windevMobileNewFeatures.src"
                            alt="La version 2026 vous apporte une quantité incroyable de fonctionnalités utiles"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, windevMobileNewFeatures.fallback)"
                        />
                    </a>
                    <ul class="wmobile-page__link-list">
                        <li>
                            <RouterLink class="wmobile-page__text-link" to="/software/new-features-2026">En savoir plus</RouterLink>
                        </li>
                        <li class="wmobile-page__ebook-row">
                            <img
                                class="wmobile-page__flag"
                                :src="windevMobileFlagUs.src"
                                alt="Anglais"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevMobileFlagUs.fallback)"
                            />
                            <div class="wmobile-page__ebook-copy">
                                <a
                                    class="wmobile-page__text-link"
                                    :href="windevMobileNewFeatures2026En.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés 2026
                                </a>
                                <span class="wmobile-page__ebook-formats">
                                    (<a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileNewFeatures2026EbookEn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileNewFeatures2026En.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                        <li class="wmobile-page__ebook-row">
                            <img
                                class="wmobile-page__flag"
                                :src="windevMobileFlagFr.src"
                                alt="Français"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevMobileFlagFr.fallback)"
                            />
                            <div class="wmobile-page__ebook-copy">
                                <a
                                    class="wmobile-page__text-link"
                                    :href="windevMobileNewFeatures2026Fr.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés 2026
                                </a>
                                <span class="wmobile-page__ebook-formats">
                                    (<a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileNewFeatures2026EbookFr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileNewFeatures2026Fr.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                    </ul>
                    <h3 class="wmobile-page__column-title">WINDEV SUITE</h3>
                    <p class="wmobile-page__column-text">
                        Cette année, PC SOFT a lancé une <strong>nouvelle offre par abonnement</strong>.
                    </p>
                    <img
                        class="wmobile-page__suite-logo"
                        :src="windevMobileSuiteIcon.src"
                        alt="WINDEV Suite"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, windevMobileSuiteIcon.fallback)"
                    />
                    <p class="wmobile-page__column-text">Formules annuelles.</p>
                    <RouterLink class="wmobile-page__btn-subscribe" to="/software/subscribe">S'abonner</RouterLink>
                    <h3 class="wmobile-page__column-title wmobile-page__column-title--small">OUTILS COMPLÉMENTAIRES</h3>
                    <ul class="wmobile-page__link-list wmobile-page__link-list--tight">
                        <li><RouterLink class="wmobile-page__text-link" to="/software/wdmsg">Projets multilingues : WDMSG</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/reports-queries">Etats &amp; Requêtes (gratuit)</RouterLink></li>
                    </ul>
                </div>

                <div class="wmobile-page__column">
                    <h3 class="wmobile-page__column-title">WINDEV MOBILE</h3>
                    <a
                        class="wmobile-page__card-cover-link"
                        :href="windevMobileBrochureEn.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="wmobile-page__card-cover"
                            :src="windevMobileBrochureCover.src"
                            alt="Brochure WINDEV Mobile"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, windevMobileBrochureCover.fallback)"
                        />
                    </a>
                    <ul class="wmobile-page__link-list">
                        <li class="wmobile-page__ebook-row">
                            <img
                                class="wmobile-page__flag"
                                :src="windevMobileFlagUs.src"
                                alt="Anglais"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevMobileFlagUs.fallback)"
                            />
                            <div class="wmobile-page__ebook-copy">
                                <a
                                    class="wmobile-page__text-link"
                                    :href="windevMobileBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                                <span class="wmobile-page__ebook-formats">
                                    (<a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileBrochureEbookEn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileBrochureEn.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                        <li class="wmobile-page__ebook-row">
                            <img
                                class="wmobile-page__flag"
                                :src="windevMobileFlagFr.src"
                                alt="Français"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevMobileFlagFr.fallback)"
                            />
                            <div class="wmobile-page__ebook-copy">
                                <a
                                    class="wmobile-page__text-link"
                                    :href="windevMobileBrochureFr.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                                <span class="wmobile-page__ebook-formats">
                                    (<a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileBrochureEbookFr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileBrochureFr.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                        <li class="wmobile-page__ebook-row">
                            <img
                                class="wmobile-page__flag"
                                :src="windevMobileFlagEs.src"
                                alt="Espagnol"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevMobileFlagEs.fallback)"
                            />
                            <div class="wmobile-page__ebook-copy">
                                <a
                                    class="wmobile-page__text-link"
                                    :href="windevMobileBrochureEs.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                                <span class="wmobile-page__ebook-formats">
                                    (<a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileBrochureEbookEs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="wmobile-page__text-link"
                                        :href="windevMobileBrochureEs.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                    </ul>
                    <ul class="wmobile-page__bullet-list">
                        <li>
                            <a
                                class="wmobile-page__text-link"
                                href="https://windev.com/windevmobile/android.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Créer des applications Android
                            </a>
                        </li>
                        <li>
                            <a
                                class="wmobile-page__text-link"
                                href="https://windev.com/windevmobile/ios.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Créer des applications iOS (iPhone/iPad)
                            </a>
                        </li>
                        <li>
                            <a
                                class="wmobile-page__text-link"
                                href="https://windev.com/pcsoft/videos.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Vidéos techniques
                            </a>
                        </li>
                        <li>
                            <RouterLink class="wmobile-page__text-link" to="/software/new-features-2026">
                                Nouveautés déjà disponibles dans la version par abonnement
                            </RouterLink>
                        </li>
                    </ul>
                    <p class="wmobile-page__contact-label">Contactez-nous</p>
                    <p><a href="mailto:info@windev.com" class="wmobile-page__text-link">info@windev.com</a></p>
                </div>

                <div class="wmobile-page__column">
                    <h3 class="wmobile-page__column-title">TÉLÉCHARGER</h3>
                    <ul class="wmobile-page__link-list">
                        <li>
                            <a
                                class="wmobile-page__text-link"
                                href="https://download.windev.com/uk/index.awp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WINDEV Mobile
                            </a>
                        </li>
                        <li>
                            <a
                                class="wmobile-page__text-link"
                                href="https://download.windev.com/uk/dongle.awp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WINDEV Mobile (version avec clé dongle)
                            </a>
                        </li>
                        <li>
                            <RouterLink class="wmobile-page__text-link" to="/download/windev-mobile-express">
                                Télécharger WINDEV Mobile Express (gratuit et sans limite de temps)
                            </RouterLink>
                        </li>
                    </ul>
                    <RouterLink class="wmobile-page__express-visual" to="/download/windev-mobile-express">
                        <img
                            :src="windevMobileExpressDownload.src"
                            alt="Télécharger la version Express (gratuite, cliquez ici)"
                            width="205"
                            height="96"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, windevMobileExpressDownload.fallback)"
                        />
                    </RouterLink>
                    <h3 class="wmobile-page__column-title wmobile-page__column-title--small">BASES DE DONNÉES</h3>
                    <p class="wmobile-page__db-lead">WINDEV prend en charge toutes les bases de données.</p>
                    <ul class="wmobile-page__db-list">
                        <li><RouterLink class="wmobile-page__text-link" to="/software/hfsql">HFSQL</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/as400-system-i">AS/400 &amp; IBM i</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/oracle">Oracle</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/sql-server">SQL Server</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/db2">DB2</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/mysql">MySQL</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/informix">Informix</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/postgresql">PostgreSQL</RouterLink></li>
                        <li>
                            <a
                                class="wmobile-page__text-link"
                                href="https://windev.com/nativeconnectors/ANProgress.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Progress
                            </a>
                        </li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/sap-ase">SAP ASE</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/xbase">xBase</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/sqlite">SQLite</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/access">Access</RouterLink></li>
                        <li><RouterLink class="wmobile-page__text-link" to="/software/native-connectors/mariadb">MariaDB</RouterLink></li>
                        <li>Hadoop (HBASE, Hive, HDFS)</li>
                        <li>MongoDB</li>
                        <li>Memcached</li>
                        <li>Redis</li>
                        <li>…</li>
                    </ul>
                    <p class="wmobile-page__db-note">
                        WINDEV prend également en charge toutes les bases de données utilisant des pilotes ODBC ou des providers OLEDB
                        (InterSystems Caché, Firebird, EasySoft, MapInfo, etc.)
                    </p>
                    <h3 class="wmobile-page__column-title wmobile-page__column-title--small">WLANGUAGE</h3>
                    <ul class="wmobile-page__link-list">
                        <li>
                            <RouterLink class="wmobile-page__text-link" to="/software/wlanguage">
                                29 exemples de code WLanguage
                            </RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onMounted } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import HomeHeroCarousel from '../components/HomeHeroCarousel.vue';
import CustomerLogoCarousel from '../components/CustomerLogoCarousel.vue';
import {
    windevMobileBrochureEbookEn,
    windevMobileBrochureEbookEs,
    windevMobileBrochureEbookFr,
    windevMobileBrochureEn,
    windevMobileBrochureEs,
    windevMobileBrochureFr,
    windevMobileNewFeatures2026EbookEn,
    windevMobileNewFeatures2026EbookFr,
    windevMobileNewFeatures2026En,
    windevMobileNewFeatures2026Fr,
} from '../data/windevMobilePageDocuments.js';
import {
    windevMobileBadge,
    windevMobileBrochureCover,
    windevMobileCompatibilityBadge,
    windevMobileExpressDownload,
    windevMobileFlagEs,
    windevMobileFlagFr,
    windevMobileFlagUs,
    windevMobileNewFeatures,
    windevMobilePackage2026,
    windevMobileSuiteArrow,
    windevMobileSuiteCrossPlatform,
    windevMobileSuiteIcon,
} from '../data/windevMobilePageImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

const introBody =
    'Seul WINDEV Mobile vous permet de créer des applications puissantes pour Smartphones et Tablettes (Android, iOS, Windows 10 IoT, CE, etc.) en quelques heures seulement : bases de données embarquées ou distantes, GPS, IoT, codes-barres, et bien plus encore.';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

onMounted(() => {
    document.title = 'WINDEV Mobile : IDE Mobile';
});
</script>

<style scoped>
.wmobile-page {
    color: var(--color-text-primary);
}

.wmobile-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.wmobile-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: var(--color-text-primary);
}

.wmobile-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.wmobile-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.wmobile-page__intro {
    margin-top: 0.9rem;
}

.wmobile-page__intro-hero {
    margin: 0 0 0.6rem;
    text-align: center;
    font-size: clamp(1.95rem, 4vw, 2.85rem);
    color: var(--color-text-primary);
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.wmobile-page__intro-card {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.wmobile-page__intro-grid {
    display: grid;
    gap: clamp(1rem, 2vw, 1.75rem);
    align-items: start;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.45fr) minmax(0, 0.75fr);
}

.wmobile-page__figure {
    margin: 0;
}

.wmobile-page__figure--intro-pack {
    display: flex;
    align-items: center;
    justify-content: center;
}

.wmobile-page__intro-image {
    width: min(100%, 280px);
    display: block;
    object-fit: contain;
}

.wmobile-page__aside-media {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
}

.wmobile-page__figure--circle {
    justify-self: end;
}

.wmobile-page__circle-image {
    width: min(100%, 170px);
    aspect-ratio: 1;
    border-radius: 9999px;
    border: 5px solid #f4da1c;
    object-fit: contain;
    object-position: center;
    display: block;
    padding: 0.35rem;
    background: var(--color-input-bg);
}

.wmobile-page__intro-heading {
    margin: 0 0 0.65rem;
    font-size: clamp(1.15rem, 1.8vw, 1.75rem);
    color: var(--color-text-primary);
    font-weight: 800;
    letter-spacing: 0.02em;
    line-height: 1.25;
}

.wmobile-page__intro-body {
    margin: 0;
    font-size: 1.04rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.wmobile-page__compat {
    margin-top: 1.25rem;
    margin-bottom: 0.25rem;
    padding: 1rem 1.25rem;
}

.wmobile-page__compat-link {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-brand);
    text-decoration: none;
}

.wmobile-page__compat-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wmobile-page__compat-badge,
.wmobile-page__compat-arrow {
    display: inline-block;
    vertical-align: middle;
}

.wmobile-page__grid-section {
    margin-top: 1.35rem;
}

.wmobile-page__columns {
    display: grid;
    gap: clamp(1rem, 2vw, 1.5rem);
    grid-template-columns: repeat(3, minmax(0, 1fr));
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

.wmobile-page__column-title {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.wmobile-page__column-title--small {
    margin-top: 0.15rem;
}

.wmobile-page__column-text {
    margin: 0;
    color: var(--color-text-secondary);
}

.wmobile-page__card-cover-link {
    display: inline-block;
    max-width: 205px;
}

.wmobile-page__card-cover {
    width: 100%;
    max-width: 205px;
    display: block;
    object-fit: contain;
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

.wmobile-page__ebook-row {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.wmobile-page__ebook-copy {
    font-size: 0.82rem;
    line-height: 1.45;
}

.wmobile-page__ebook-formats {
    display: block;
    margin-top: 0.15rem;
    color: var(--color-text-secondary);
}

.wmobile-page__flag {
    flex-shrink: 0;
    margin-top: 0.15rem;
}

.wmobile-page__text-link {
    color: var(--color-brand-strong);
    font-weight: 600;
    text-decoration: none;
}

.wmobile-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wmobile-page__bullet-list {
    margin: 0.25rem 0 0;
    padding-left: 1.1rem;
    color: var(--color-text-secondary);
}

.wmobile-page__contact-label {
    margin: 0.5rem 0 0;
    font-weight: 800;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

.wmobile-page__express-visual {
    display: inline-block;
    max-width: 205px;
}

.wmobile-page__express-visual img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 1rem;
}

.wmobile-page__db-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.wmobile-page__db-list {
    margin: 0;
    padding-left: 1.1rem;
    color: var(--color-text-secondary);
    font-size: 0.82rem;
    line-height: 1.55;
}

.wmobile-page__db-note {
    margin: 0;
    color: var(--color-text-secondary);
    font-size: 0.82rem;
    line-height: 1.55;
}

.wmobile-page__suite-logo {
    width: 95px;
    height: auto;
    display: block;
}

.wmobile-page__btn-subscribe {
    align-self: flex-start;
    margin-top: 0.25rem;
    padding: 0.55rem 1.1rem;
    border-radius: 9999px;
    font-weight: 700;
    color: #fff;
    background: #111;
    text-decoration: none;
    display: inline-flex;
}

.wmobile-page__btn-subscribe:hover {
    opacity: 0.9;
}

@media (max-width: 1100px) {
    .wmobile-page__columns {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 720px) {
    .wmobile-page__intro-grid {
        grid-template-columns: 1fr;
    }

    .wmobile-page__figure--circle,
    .wmobile-page__aside-media {
        align-items: center;
        justify-self: center;
    }

    .wmobile-page__columns {
        grid-template-columns: 1fr;
    }
}
</style>


