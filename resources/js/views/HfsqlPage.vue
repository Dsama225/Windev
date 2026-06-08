<template>
    <AppNavbar />
    <main class="hfsql-page pb-10">
        <section class="section-shell hfsql-page__suite-line" aria-label="Positionnement produit">
            <p class="hfsql-page__suite-text">
                <strong>Multiplateforme</strong> — suite logicielle de développement d'applications multiplateformes
            </p>
            <figure class="hfsql-page__suite-platforms">
                <img
                    :src="hfsqlSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, hfsqlSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell hfsql-page__hero" aria-label="Bannière WINDEV Suite">
            <HomeHeroCarousel />
        </section>

        <section class="section-shell hfsql-page__layout" aria-label="Présentation HFSQL">
            <div class="hfsql-page__main glass-frame">
                <header class="hfsql-page__product-header">
                    <img
                        class="hfsql-page__logo-img"
                        :src="hfsqlLogo.src"
                        alt="Base de données SQL portable, gratuite et illimitée"
                        width="150"
                        height="42"
                        loading="eager"
                        decoding="async"
                        @error="onImageError($event, hfsqlLogo.fallback)"
                    />
                    <h1 class="hfsql-page__title">Base de données SQL portable, gratuite et illimitée</h1>
                </header>

                <div class="hfsql-page__intro">
                    <p class="hfsql-page__body"><strong>HFSQL est puissant, rapide et fiable.</strong></p>
                    <p class="hfsql-page__body">HFSQL est utilisé sur des millions de sites Web dans le monde.</p>
                    <p class="hfsql-page__body">
                        HFSQL fonctionne sous <strong>Windows</strong> et <strong>Linux</strong>, sur les <strong>Mobiles</strong>, sur des réseaux de toute taille et de tout type, et
                        gère automatiquement des centaines d'accès simultanés. Vous pouvez distribuer librement le moteur HFSQL avec vos applications WINDEV.
                    </p>
                    <p class="hfsql-page__body">
                        Lors du WINDEV Tour, les opérations effectuées sur HFSQL utilisaient une base de données de 29 milliards d'enregistrements.
                    </p>
                </div>

                <section class="hfsql-page__section" aria-labelledby="hfsql-reliable-title">
                    <h2 id="hfsql-reliable-title" class="hfsql-page__section-title">
                        Vous avez besoin d'une base de données SQL fiable, rapide et gratuite ?
                    </h2>
                    <p class="hfsql-page__body">
                        HFSQL est une base de données SQL intégrée aux environnements WINDEV, WINDEV Mobile et WEBDEV. HFSQL est disponible dans les versions suivantes :
                        Réseau, Cluster, Client/Serveur (Windows et Linux), Cloud et Mobile.
                    </p>
                </section>

                <section class="hfsql-page__section" aria-labelledby="hfsql-open-title">
                    <h2 id="hfsql-open-title" class="hfsql-page__section-title">HFSQL : ouvert et compatible</h2>
                    <figure class="hfsql-page__figure">
                        <img
                            :src="hfsqlPowerfulDatabase.src"
                            alt="HFSQL — base de données puissante"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, hfsqlPowerfulDatabase.fallback)"
                        />
                    </figure>
                </section>

                <section class="hfsql-page__section" aria-labelledby="hfsql-cross-title">
                    <h2 id="hfsql-cross-title" class="hfsql-page__section-title">HFSQL : multiplateforme</h2>
                    <p class="hfsql-page__body">HFSQL propose un format de stockage binaire compatible entre toutes les plateformes.</p>
                    <figure class="hfsql-page__figure">
                        <img
                            :src="hfsqlCrossPlatform.src"
                            alt="HFSQL multiplateforme"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, hfsqlCrossPlatform.fallback)"
                        />
                    </figure>
                </section>

                <section class="hfsql-page__section" aria-labelledby="hfsql-docs-title">
                    <h2 id="hfsql-docs-title" class="hfsql-page__section-title">Consultez la documentation HFSQL :</h2>
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
                                eBook — Cliquez ici
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
                                PDF — Cliquez ici
                            </a>
                        </li>
                    </ul>
                </section>
            </div>

            <aside class="hfsql-page__sidebar glass-frame" aria-label="Points forts HFSQL et liens associés">
                <figure class="hfsql-page__figure hfsql-page__figure--sidebar">
                    <img
                        :src="hfsqlPackages.src"
                        alt="WINDEV, WEBDEV et WINDEV Mobile"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, hfsqlPackages.fallback)"
                    />
                </figure>
                <p class="hfsql-page__sidebar-text">
                    Les environnements <RouterLink class="hfsql-page__text-link" to="/software/windev">WINDEV</RouterLink>,
                    <RouterLink class="hfsql-page__text-link" to="/software/webdev">WEBDEV</RouterLink> et
                    <RouterLink class="hfsql-page__text-link" to="/software/windevmobile">WINDEV Mobile</RouterLink>
                    sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                </p>

                <div class="hfsql-page__sidebar-block hfsql-page__sidebar-block--flush">
                    <h3 class="hfsql-page__sidebar-product-title">HFSQL</h3>
                    <ul class="hfsql-page__feature-list">
                        <li v-for="item in featureList" :key="item">{{ item }}</li>
                    </ul>
                </div>

                <div class="hfsql-page__sidebar-block">
                    <h3 class="hfsql-page__sidebar-title">Présentation de la documentation</h3>
                    <ul class="hfsql-page__sidebar-list">
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlNewFeaturesPdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Nouveautés
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
                    <h3 class="hfsql-page__sidebar-title">Schémas de présentation</h3>
                    <ul class="hfsql-page__sidebar-list">
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlUniversalConnectorsPdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Connecteurs bases de données universels
                            </a>
                        </li>
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                :href="hfsqlCrossPlatformDevPdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Développement multiplateforme
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="hfsql-page__sidebar-block">
                    <h3 class="hfsql-page__sidebar-title">Vidéos</h3>
                    <ul class="hfsql-page__sidebar-list">
                        <li>
                            <a
                                class="hfsql-page__text-link"
                                href="https://windev.com/pcsoft/videos.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Vidéos techniques
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="hfsql-page__customer" aria-label="Références clients">
                    <p class="hfsql-page__customer-title">Ils utilisent WINDEV</p>
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
    'Base de données SQL',
    'Windows, Linux, Mac, iOS, Android',
    'Local',
    'Mobile',
    'Embarqué',
    'Client/Serveur',
    'Cluster',
    'Grande capacité',
    'Tous types de données',
    'Unicode',
    'Index, index multi-colonnes, clés',
    'Intégrité référentielle',
    'Full text',
    'Procédures stockées',
    'Triggers',
    'Journaux',
    'Transactions',
    'Compression des données',
    'Compression des trames',
    'Verrouillage automatique des enregistrements',
    'Reconnexion automatique',
    'Planificateur',
    'Réplication',
    'SDD',
    'Gestion des droits',
    'Protection contre l\'injection SQL',
    'Chiffrement',
    'Provider OLEDB',
    'Pilote ODBC',
    'Centre de contrôle',
    'Administration en temps réel',
    'Sauvegardes',
    'Modélisation de bases de données',
    'Requêteur',
    'Etats',
    'Visualiseur de données',
    'Robot de surveillance',
    'Liaison native à WINDEV, WEBDEV et WINDEV Mobile',
    'Déploiement gratuit*',
];

onMounted(() => {
    document.title = 'HFSQL — Base de données SQL portable, gratuite et illimitée | PC SOFT';
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
