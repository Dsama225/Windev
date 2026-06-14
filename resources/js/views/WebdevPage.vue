<template>
    <AppNavbar />
    <PageAlert :alert="cmsAlertPayload" />
    <main class="webdev-page pb-10">
        <section class="section-shell webdev-page__suite-line" aria-label="Positionnement produit">
            <p class="webdev-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="webdev-page__suite-platforms">
                <img
                    :src="webdevSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, webdevSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell webdev-page__hero" aria-label="Bannière WINDEV Suite">
            <HomeHeroCarousel />
        </section>

        <section class="section-shell webdev-page__intro" aria-labelledby="webdev-intro-title">
            <h1 id="webdev-intro-title" class="webdev-page__intro-hero">{{ introHeroTitle }}</h1>
            <div class="webdev-page__intro-card glass-frame">
                <div class="webdev-page__intro-grid">
                    <figure class="webdev-page__figure webdev-page__figure--intro-pack">
                        <img
                            class="webdev-page__intro-pack-img"
                            :src="introPackImage.src"
                            :alt="introPackImage.alt"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, introPackImage.fallback)"
                        />
                    </figure>
                    <div class="webdev-page__intro-copy">
                        <h2 class="webdev-page__intro-heading">{{ introHeadingText }}</h2>
                        <p class="webdev-page__intro-body">{{ introBodyText }}</p>
                    </div>
                    <div class="webdev-page__aside-media">
                        <figure class="webdev-page__figure webdev-page__figure--circle">
                            <img
                                class="webdev-page__circle-badge"
                                :src="webdevLogo.src"
                                alt="WEBDEV"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, webdevLogo.fallback)"
                            />
                        </figure>
                        <CustomerLogoCarousel variant="compact" />
                    </div>
                </div>
            </div>
        </section>

        <section
            v-if="showCmsComponents"
            class="section-shell webdev-page__cms"
            aria-label="Contenu éditorial"
        >
            <PageComponents :components="components" />
        </section>

        <section class="section-shell webdev-page__compat glass-frame" aria-label="Compatibilité">
            <a href="/software/windev" class="webdev-page__compat-link">
                <img
                    class="webdev-page__compat-badge"
                    :src="webdevCompatibilityBadge.src"
                    alt=""
                    width="97"
                    height="19"
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                    @error="onImageError($event, webdevCompatibilityBadge.fallback)"
                />
                <span>Votre code WEBDEV, vos pages et vos données sont compatibles avec WINDEV et WINDEV Mobile</span>
                <img
                    class="webdev-page__compat-arrow"
                    :src="webdevSuiteArrow.src"
                    alt=""
                    width="10"
                    height="8"
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                    @error="onImageError($event, webdevSuiteArrow.fallback)"
                />
            </a>
        </section>

        <section class="section-shell webdev-page__grid-section" aria-label="Ressources et téléchargements WEBDEV">
            <div class="webdev-page__columns glass-frame">
                <div class="webdev-page__column">
                    <h2 class="webdev-page__section-heading">NOUVEAUTÉS</h2>
                    <a
                        class="webdev-page__card-cover-link"
                        :href="webdevNewFeatures2026En.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="webdev-page__card-cover"
                            :src="webdevNewFeatures.src"
                            alt="La version 2026 vous apporte une quantité incroyable de fonctionnalités utiles"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, webdevNewFeatures.fallback)"
                        />
                    </a>
                    <ul class="webdev-page__link-list">
                        <li>
                            <RouterLink class="webdev-page__text-link" to="/software/new-features-2026">En savoir plus</RouterLink>
                        </li>
                        <li class="webdev-page__ebook-row">
                            <img
                                class="webdev-page__flag-img"
                                :src="webdevFlagUs.src"
                                alt="Anglais"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, webdevFlagUs.fallback)"
                            />
                            <div class="webdev-page__ebook-copy">
                                <a
                                    class="webdev-page__text-link"
                                    :href="webdevNewFeatures2026En.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés 2026
                                </a>
                                <span class="webdev-page__ebook-formats">
                                    (<a
                                        class="webdev-page__text-link"
                                        :href="webdevNewFeatures2026EbookEn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="webdev-page__text-link"
                                        :href="webdevNewFeatures2026En.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                        <li class="webdev-page__ebook-row">
                            <img
                                class="webdev-page__flag-img"
                                :src="webdevFlagFr.src"
                                alt="Français"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, webdevFlagFr.fallback)"
                            />
                            <div class="webdev-page__ebook-copy">
                                <a
                                    class="webdev-page__text-link"
                                    :href="webdevNewFeatures2026Fr.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés 2026
                                </a>
                                <span class="webdev-page__ebook-formats">
                                    (<a
                                        class="webdev-page__text-link"
                                        :href="webdevNewFeatures2026EbookFr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="webdev-page__text-link"
                                        :href="webdevNewFeatures2026Fr.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                    </ul>
                    <h2 class="webdev-page__section-heading">WINDEV SUITE</h2>
                    <p class="webdev-page__column-text">
                        Cette année, PC SOFT a lancé une <strong>nouvelle offre par abonnement</strong>.
                    </p>
                    <img
                        class="webdev-page__suite-logo-img"
                        :src="webdevSuiteIcon.src"
                        alt="WINDEV Suite"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, webdevSuiteIcon.fallback)"
                    />
                    <p class="webdev-page__column-text webdev-page__column-text--emph">Formules annuelles.</p>
                    <RouterLink class="webdev-page__btn-subscribe" to="/software/subscribe">S'abonner</RouterLink>
                    <h2 class="webdev-page__section-heading">OUTILS COMPLÉMENTAIRES</h2>
                    <ul class="webdev-page__link-list">
                        <li><RouterLink class="webdev-page__text-link" to="/software/wdmsg">Projets multilingues : WDMSG</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/reports-queries">Etats &amp; Requêtes (gratuit)</RouterLink></li>
                    </ul>
                </div>

                <div class="webdev-page__column">
                    <h2 class="webdev-page__section-heading">DÉCOUVREZ WEBDEV</h2>
                    <a
                        class="webdev-page__card-cover-link"
                        :href="webdevBrochureEn.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="webdev-page__card-cover"
                            :src="webdevBrochureCover.src"
                            alt="Brochure WEBDEV"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, webdevBrochureCover.fallback)"
                        />
                    </a>
                    <ul class="webdev-page__link-list">
                        <li class="webdev-page__ebook-row">
                            <img
                                class="webdev-page__flag-img"
                                :src="webdevFlagUs.src"
                                alt="Anglais"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, webdevFlagUs.fallback)"
                            />
                            <div class="webdev-page__ebook-copy">
                                <a
                                    class="webdev-page__text-link"
                                    :href="webdevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                                <span class="webdev-page__ebook-formats">
                                    (<a
                                        class="webdev-page__text-link"
                                        :href="webdevBrochureEbookEn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="webdev-page__text-link"
                                        :href="webdevBrochureEn.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                        <li class="webdev-page__ebook-row">
                            <img
                                class="webdev-page__flag-img"
                                :src="webdevFlagFr.src"
                                alt="Français"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, webdevFlagFr.fallback)"
                            />
                            <div class="webdev-page__ebook-copy">
                                <a
                                    class="webdev-page__text-link"
                                    :href="webdevBrochureFr.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                                <span class="webdev-page__ebook-formats">
                                    (<a
                                        class="webdev-page__text-link"
                                        :href="webdevBrochureEbookFr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="webdev-page__text-link"
                                        :href="webdevBrochureFr.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                        <li class="webdev-page__ebook-row">
                            <img
                                class="webdev-page__flag-img"
                                :src="webdevFlagEs.src"
                                alt="Espagnol"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, webdevFlagEs.fallback)"
                            />
                            <div class="webdev-page__ebook-copy">
                                <a
                                    class="webdev-page__text-link"
                                    :href="webdevBrochureEs.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                                <span class="webdev-page__ebook-formats">
                                    (<a
                                        class="webdev-page__text-link"
                                        :href="webdevBrochureEbookEs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="webdev-page__text-link"
                                        :href="webdevBrochureEs.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                    </ul>
                    <ul class="webdev-page__bullet-list">
                        <li>
                            <a
                                class="webdev-page__text-link"
                                href="https://windev.com/pcsoft/videos.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Vidéos techniques
                            </a>
                        </li>
                        <li>
                            <RouterLink class="webdev-page__text-link" to="/software/new-features-2026">
                                Nouveautés déjà disponibles dans la version par abonnement
                            </RouterLink>
                        </li>
                    </ul>
                    <h2 class="webdev-page__section-heading">CENTRE DE TÉLÉCHARGEMENT</h2>
                    <ul class="webdev-page__link-list">
                        <li>
                            <a
                                class="webdev-page__text-link"
                                href="https://download.windev.com/uk/index.awp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WEBDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="webdev-page__text-link"
                                href="https://download.windev.com/uk/dongle.awp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WEBDEV (version avec clé dongle)
                            </a>
                        </li>
                    </ul>
                    <h2 class="webdev-page__section-heading">CONTACTEZ-NOUS</h2>
                    <p><a href="mailto:info@windev.com" class="webdev-page__text-link">info@windev.com</a></p>
                    <h2 class="webdev-page__section-heading">WLANGUAGE</h2>
                    <ul class="webdev-page__link-list">
                        <li>
                            <RouterLink class="webdev-page__text-link" to="/software/wlanguage">
                                29 exemples de code WLanguage
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="webdev-page__column">
                    <h2 class="webdev-page__section-heading">PROPULSÉ PAR WEBDEV</h2>
                    <a
                        class="webdev-page__card-cover-link"
                        href="https://windev.com/webdev/list-of-sites.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="webdev-page__card-cover webdev-page__card-cover--gif"
                            :src="webdevSitesGif.src"
                            alt="Exemples de sites Web développés avec WEBDEV"
                            width="205"
                            height="151"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, webdevSitesGif.fallback)"
                        />
                    </a>
                    <ul class="webdev-page__link-list">
                        <li>
                            <a
                                class="webdev-page__text-link"
                                href="https://windev.com/webdev/list-of-sites.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Sites Web développés avec WEBDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="webdev-page__text-link"
                                href="https://windev.com/webdev/ajax.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Prise en charge native d'AJAX (Web 2.0)
                            </a>
                        </li>
                    </ul>
                    <h2 class="webdev-page__section-heading">BASES DE DONNÉES</h2>
                    <p class="webdev-page__column-text">WEBDEV prend en charge toutes les bases de données.</p>
                    <ul class="webdev-page__db-list">
                        <li><RouterLink class="webdev-page__text-link" to="/software/hfsql">HFSQL</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/as400-system-i">AS/400 &amp; IBM i</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/oracle">Oracle</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/sql-server">SQL Server</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/db2">DB2</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/mysql">MySQL</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/informix">Informix</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/postgresql">PostgreSQL</RouterLink></li>
                        <li>
                            <a
                                class="webdev-page__text-link"
                                href="https://windev.com/nativeconnectors/ANProgress.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Progress
                            </a>
                        </li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/sap-ase">SAP ASE</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/xbase">xBase</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/sqlite">SQLite</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/access">Access</RouterLink></li>
                        <li><RouterLink class="webdev-page__text-link" to="/software/native-connectors/mariadb">MariaDB</RouterLink></li>
                        <li>Hadoop (HBASE, Hive, HDFS)</li>
                        <li>MongoDB</li>
                        <li>Memcached</li>
                        <li>Redis</li>
                        <li>…</li>
                    </ul>
                    <p class="webdev-page__db-note">
                        WEBDEV prend également en charge toutes les bases de données utilisant des pilotes ODBC ou des providers OLEDB
                        (InterSystems Caché, Firebird, EasySoft, MapInfo, etc.)
                    </p>
                </div>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import PageAlert from '../components/cms/PageAlert.vue';
import PageComponents from '../components/cms/PageComponents.vue';
import HomeHeroCarousel from '../components/HomeHeroCarousel.vue';
import CustomerLogoCarousel from '../components/CustomerLogoCarousel.vue';
import { useProductPageCms } from '../composables/useProductPageCms';
import {
    webdevBrochureEbookEn,
    webdevBrochureEbookEs,
    webdevBrochureEbookFr,
    webdevBrochureEn,
    webdevBrochureEs,
    webdevBrochureFr,
    webdevNewFeatures2026EbookEn,
    webdevNewFeatures2026EbookFr,
    webdevNewFeatures2026En,
    webdevNewFeatures2026Fr,
} from '../data/webdevPageDocuments.js';
import {
    webdevBrochureCover,
    webdevCompatibilityBadge,
    webdevFlagEs,
    webdevFlagFr,
    webdevFlagUs,
    webdevLogo,
    webdevNewFeatures,
    webdevPackage2026,
    webdevSitesGif,
    webdevSuiteArrow,
    webdevSuiteCrossPlatform,
    webdevSuiteIcon,
} from '../data/webdevPageImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

const STATIC_INTRO_BODY =
    'Responsive Web Design. WEBDEV vous permet de développer facilement des sites et applications Internet et Intranet (WEB et SaaS) pour gérer les données et les processus. WEBDEV génère également du PHP.';

const {
    components,
    introHeroTitle,
    introHeadingText,
    introBodyText,
    cmsAlertPayload,
    showCmsComponents,
    introPackImage,
} = useProductPageCms('software.webdev', {
    introHero: 'DÉVELOPPEZ 10 FOIS PLUS VITE',
    introHeading: 'WEBDEV 2026, IDE WEB',
    introBody: STATIC_INTRO_BODY,
    documentTitle: 'WEBDEV : IDE DevOps pour le Web',
    introImageAlt: 'WEBDEV 2026',
    packageImage: webdevPackage2026,
});

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.webdev-page {
    color: var(--color-text-primary);
}

.webdev-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.webdev-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: var(--color-text-primary);
}

.webdev-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.webdev-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.webdev-page__intro {
    margin-top: 0.9rem;
}

.webdev-page__intro-hero {
    margin: 0 0 0.6rem;
    text-align: center;
    font-size: clamp(1.95rem, 4vw, 2.85rem);
    color: var(--color-text-primary);
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.webdev-page__intro-card {
    padding: clamp(1rem, 2vw, 1.35rem);
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
    align-items: center;
    justify-content: center;
}

.webdev-page__intro-pack-img {
    width: min(100%, 230px);
    height: auto;
    display: block;
    object-fit: contain;
}

.webdev-page__aside-media {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
}

.webdev-page__figure--circle {
    justify-self: end;
}

.webdev-page__circle-badge {
    width: min(100%, 170px);
    aspect-ratio: 1;
    border-radius: 9999px;
    border: 5px solid #31c6ef;
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
    color: var(--color-text-primary);
}

.webdev-page__intro-body {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.webdev-page__compat {
    margin-top: 1.25rem;
    margin-bottom: 0.25rem;
    padding: 1rem 1.25rem;
}

.webdev-page__compat-link {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.5rem;
    width: 100%;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--color-brand);
    text-decoration: none;
}

.webdev-page__compat-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.webdev-page__compat-badge,
.webdev-page__compat-arrow {
    display: inline-block;
    vertical-align: middle;
}

.webdev-page__grid-section {
    margin-top: 1.35rem;
}

.webdev-page__columns {
    display: grid;
    gap: clamp(1rem, 2vw, 1.5rem);
    grid-template-columns: repeat(3, minmax(0, 1fr));
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
    text-transform: uppercase;
    line-height: 1.2;
    color: var(--color-text-primary);
}

.webdev-page__column-text {
    margin: 0;
    color: var(--color-text-secondary);
}

.webdev-page__column-text--emph {
    font-weight: 700;
    color: var(--color-text-primary);
}

.webdev-page__card-cover-link {
    display: inline-block;
    max-width: 205px;
}

.webdev-page__card-cover {
    width: 100%;
    max-width: 205px;
    height: auto;
    display: block;
    object-fit: contain;
}

.webdev-page__card-cover--gif {
    object-fit: contain;
}

.webdev-page__suite-logo-img {
    width: 95px;
    height: auto;
    display: block;
}

.webdev-page__ebook-row {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.webdev-page__ebook-copy {
    font-size: 0.82rem;
    line-height: 1.45;
}

.webdev-page__ebook-formats {
    display: block;
    margin-top: 0.15rem;
    color: var(--color-text-secondary);
}

.webdev-page__flag-img {
    flex-shrink: 0;
    margin-top: 0.15rem;
}

.webdev-page__link-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.35rem;
}

.webdev-page__bullet-list {
    margin: 0.25rem 0 0;
    padding-left: 1.1rem;
    color: var(--color-text-secondary);
}

.webdev-page__text-link {
    color: var(--color-brand-strong);
    font-weight: 600;
    text-decoration: none;
}

.webdev-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.webdev-page__db-list {
    margin: 0;
    padding-left: 1.1rem;
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
    border-radius: 9999px;
    font-weight: 700;
    color: #fff;
    background: #111;
    text-decoration: none;
    display: inline-flex;
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

    .webdev-page__aside-media,
    .webdev-page__figure--circle {
        align-items: center;
        justify-self: center;
    }

    .webdev-page__columns {
        grid-template-columns: 1fr;
    }
}
</style>
