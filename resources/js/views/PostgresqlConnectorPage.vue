<template>
    <AppNavbar />
    <main class="postgresql-page pb-10">
        <section class="section-shell postgresql-page__suite-line" aria-label="Positionnement produit">
            <p class="postgresql-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="postgresql-page__suite-platforms">
                <img
                    :src="postgresqlSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, postgresqlSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell postgresql-page__content" aria-labelledby="postgresql-main-title">
            <div class="postgresql-page__layout glass-frame">
                <div class="postgresql-page__main">
                    <h1 id="postgresql-main-title" class="postgresql-page__title">
                        CONNECTEUR NATIF POSTGRESQL (À PARTIR DE LA VERSION 8.3)
                    </h1>

                    <div class="postgresql-page__intro">
                        <p>
                            Cette version peut être utilisée avec des serveurs en version 8.3 ou ultérieure.<br />
                            <RouterLink class="postgresql-page__text-link" to="/pc-soft/contact">
                                Contactez PC SOFT pour plus de détails.
                            </RouterLink>
                        </p>
                        <p>
                            <strong>WINDEV et WEBDEV</strong> se connectent à PostgreSQL via un
                            <strong>« Connecteur natif »</strong> rapide et puissant, ainsi qu'ODBC. Toutes les fonctionnalités de
                            l'environnement sont disponibles. L'installation est très simple.
                        </p>
                        <p>
                            <a
                                class="postgresql-page__text-link"
                                :href="POSTGRESQL_CONNECTOR_DOWNLOAD_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Télécharger le Connecteur natif PostgreSQL
                            </a>
                        </p>
                        <p>Voici la liste des principales caractéristiques du Connecteur natif PostgreSQL :</p>
                    </div>

                    <div class="postgresql-page__table-wrap">
                        <table class="postgresql-page__table">
                            <tbody>
                                <tr v-for="row in postgresqlConnectorFeatures" :key="row.feature">
                                    <th scope="row">{{ row.feature }}</th>
                                    <td>{{ row.value }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <aside class="postgresql-page__sidebar" aria-label="Produits et ressources associés">
                    <figure class="postgresql-page__product-boxes">
                        <img
                            :src="postgresqlPackages.src"
                            alt="WINDEV, WEBDEV et WINDEV Mobile"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, postgresqlPackages.fallback)"
                        />
                    </figure>

                    <p class="postgresql-page__sidebar-lead">
                        Les environnements
                        <RouterLink class="postgresql-page__text-link" to="/software/windev"><strong>WINDEV</strong></RouterLink>,
                        <RouterLink class="postgresql-page__text-link" to="/software/webdev"><strong>WEBDEV</strong></RouterLink> et
                        <RouterLink class="postgresql-page__text-link" to="/software/windevmobile"><strong>WINDEV Mobile</strong></RouterLink>
                        sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                    </p>

                    <div class="postgresql-page__sidebar-block">
                        <h2 class="postgresql-page__sidebar-heading">Présentation de la documentation</h2>
                        <ul class="postgresql-page__sidebar-list">
                            <li>
                                <a
                                    class="postgresql-page__text-link"
                                    :href="postgresqlNewFeaturesPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés
                                </a>
                            </li>
                            <li>
                                <a
                                    class="postgresql-page__text-link"
                                    :href="postgresqlWindevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="postgresql-page__text-link"
                                    :href="postgresqlWebdevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="postgresql-page__text-link"
                                    :href="postgresqlWindevMobileBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="postgresql-page__sidebar-block">
                        <h2 class="postgresql-page__sidebar-heading">Schémas de présentation</h2>
                        <ul class="postgresql-page__sidebar-list">
                            <li>
                                <a
                                    class="postgresql-page__text-link"
                                    :href="postgresqlUniversalConnectorsPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connecteurs bases de données universels
                                </a>
                            </li>
                            <li>
                                <a
                                    class="postgresql-page__text-link"
                                    :href="postgresqlCrossPlatformDevPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Développement multiplateforme
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="postgresql-page__sidebar-block">
                        <h2 class="postgresql-page__sidebar-heading">Vidéos</h2>
                        <ul class="postgresql-page__sidebar-list">
                            <li>
                                <a
                                    class="postgresql-page__text-link"
                                    :href="POSTGRESQL_TECHNICAL_VIDEOS_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vidéos techniques
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="postgresql-page__customer" aria-label="Références clients">
                        <p class="postgresql-page__customer-title">Ils utilisent WINDEV</p>
                        <CustomerLogoCarousel variant="compact" />
                    </div>
                </aside>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import CustomerLogoCarousel from '../components/CustomerLogoCarousel.vue';
import {
    POSTGRESQL_CONNECTOR_DOWNLOAD_URL,
    POSTGRESQL_TECHNICAL_VIDEOS_URL,
    postgresqlCrossPlatformDevPdf,
    postgresqlNewFeaturesPdf,
    postgresqlUniversalConnectorsPdf,
    postgresqlWebdevBrochureEn,
    postgresqlWindevBrochureEn,
    postgresqlWindevMobileBrochureEn,
} from '../data/postgresqlConnectorDocuments.js';
import { postgresqlConnectorFeatures } from '../data/postgresqlConnectorFeatures.js';
import { postgresqlPackages, postgresqlSuiteCrossPlatform } from '../data/postgresqlConnectorImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.postgresql-page {
    color: var(--color-text-primary);
}

.postgresql-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.postgresql-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.postgresql-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.postgresql-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.postgresql-page__content {
    margin-top: 0.45rem;
}

.postgresql-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.8rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    padding: clamp(1rem, 2vw, 1.45rem);
    align-items: start;
}

.postgresql-page__title {
    margin: 0 0 1rem;
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 800;
    line-height: 1.25;
}

.postgresql-page__intro {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.postgresql-page__intro p {
    margin: 0;
}

.postgresql-page__table-wrap {
    overflow-x: auto;
}

.postgresql-page__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
    line-height: 1.45;
}

.postgresql-page__table th,
.postgresql-page__table td {
    padding: 0.55rem 0.65rem;
    border: 1px solid var(--color-border);
    text-align: left;
    vertical-align: top;
}

.postgresql-page__table th {
    font-weight: 600;
    color: var(--color-text-primary);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.postgresql-page__table td {
    width: 7rem;
    text-align: center;
    color: var(--color-text-secondary);
    white-space: nowrap;
}

.postgresql-page__table tbody tr:nth-child(even) th,
.postgresql-page__table tbody tr:nth-child(even) td {
    background: color-mix(in oklab, var(--color-surface) 96%, transparent);
}

.postgresql-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.postgresql-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.postgresql-page__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.5;
}

.postgresql-page__product-boxes {
    margin: 0;
}

.postgresql-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.postgresql-page__sidebar-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.postgresql-page__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.postgresql-page__sidebar-heading {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.postgresql-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.postgresql-page__customer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.postgresql-page__customer-title {
    margin: 0 0 0.45rem;
    width: 100%;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #5f6f8c;
    text-align: center;
}

@media (max-width: 900px) {
    .postgresql-page__layout {
        grid-template-columns: 1fr;
    }
}
</style>
