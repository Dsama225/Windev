<template>
    <AppNavbar />
    <main class="mysql-page pb-10">
        <section class="section-shell mysql-page__suite-line" aria-label="Positionnement produit">
            <p class="mysql-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="mysql-page__suite-platforms">
                <img
                    :src="mysqlSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, mysqlSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell mysql-page__content" aria-labelledby="mysql-main-title">
            <div class="mysql-page__layout glass-frame">
                <div class="mysql-page__main">
                    <h1 id="mysql-main-title" class="mysql-page__title">
                        CONNECTEUR NATIF MYSQL (À PARTIR DE LA VERSION 3.23.52)
                    </h1>

                    <div class="mysql-page__intro">
                        <p>
                            <strong>WINDEV et WEBDEV</strong> se connectent à MySQL via un
                            <strong>« Connecteur natif »</strong> rapide et puissant, ainsi qu'ODBC et OLEDB. Toutes les fonctionnalités de
                            l'environnement sont disponibles. L'installation est extrêmement simple.
                        </p>
                        <ul class="mysql-page__download-list">
                            <li>
                                <a
                                    class="mysql-page__text-link"
                                    :href="MYSQL_CONNECTOR_DOWNLOAD_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Télécharger le Connecteur natif MySQL
                                </a>
                            </li>
                        </ul>
                        <p>Voici la liste des principales caractéristiques du Connecteur natif MySQL :</p>
                    </div>

                    <div class="mysql-page__table-wrap">
                        <table class="mysql-page__table">
                            <tbody>
                                <tr v-for="row in mysqlConnectorFeatures" :key="row.feature">
                                    <th scope="row">{{ row.feature }}</th>
                                    <td>{{ row.value }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <aside class="mysql-page__sidebar" aria-label="Produits et ressources associés">
                    <figure class="mysql-page__product-boxes">
                        <img
                            :src="mysqlPackages.src"
                            alt="WINDEV, WEBDEV et WINDEV Mobile"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, mysqlPackages.fallback)"
                        />
                    </figure>

                    <p class="mysql-page__sidebar-lead">
                        Les environnements
                        <RouterLink class="mysql-page__text-link" to="/software/windev"><strong>WINDEV</strong></RouterLink>,
                        <RouterLink class="mysql-page__text-link" to="/software/webdev"><strong>WEBDEV</strong></RouterLink> et
                        <RouterLink class="mysql-page__text-link" to="/software/windevmobile"><strong>WINDEV Mobile</strong></RouterLink>
                        sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                    </p>

                    <div class="mysql-page__sidebar-block">
                        <h2 class="mysql-page__sidebar-heading">Présentation de la documentation</h2>
                        <ul class="mysql-page__sidebar-list">
                            <li>
                                <a
                                    class="mysql-page__text-link"
                                    :href="mysqlNewFeaturesPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés
                                </a>
                            </li>
                            <li>
                                <a
                                    class="mysql-page__text-link"
                                    :href="mysqlWindevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="mysql-page__text-link"
                                    :href="mysqlWebdevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="mysql-page__text-link"
                                    :href="mysqlWindevMobileBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mysql-page__sidebar-block">
                        <h2 class="mysql-page__sidebar-heading">Schémas de présentation</h2>
                        <ul class="mysql-page__sidebar-list">
                            <li>
                                <a
                                    class="mysql-page__text-link"
                                    :href="mysqlUniversalConnectorsPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connecteurs bases de données universels
                                </a>
                            </li>
                            <li>
                                <a
                                    class="mysql-page__text-link"
                                    :href="mysqlCrossPlatformDevPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Développement multiplateforme
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mysql-page__sidebar-block">
                        <h2 class="mysql-page__sidebar-heading">Vidéos</h2>
                        <ul class="mysql-page__sidebar-list">
                            <li>
                                <a
                                    class="mysql-page__text-link"
                                    :href="MYSQL_TECHNICAL_VIDEOS_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vidéos techniques
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mysql-page__customer" aria-label="Références clients">
                        <p class="mysql-page__customer-title">Ils utilisent WINDEV</p>
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
    MYSQL_CONNECTOR_DOWNLOAD_URL,
    MYSQL_TECHNICAL_VIDEOS_URL,
    mysqlCrossPlatformDevPdf,
    mysqlNewFeaturesPdf,
    mysqlUniversalConnectorsPdf,
    mysqlWebdevBrochureEn,
    mysqlWindevBrochureEn,
    mysqlWindevMobileBrochureEn,
} from '../data/mysqlConnectorDocuments.js';
import { mysqlConnectorFeatures } from '../data/mysqlConnectorFeatures.js';
import { mysqlPackages, mysqlSuiteCrossPlatform } from '../data/mysqlConnectorImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.mysql-page {
    color: var(--color-text-primary);
}

.mysql-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.mysql-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.mysql-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.mysql-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.mysql-page__content {
    margin-top: 0.45rem;
}

.mysql-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.8rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    padding: clamp(1rem, 2vw, 1.45rem);
    align-items: start;
}

.mysql-page__title {
    margin: 0 0 1rem;
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 800;
    line-height: 1.25;
}

.mysql-page__intro {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.mysql-page__intro p {
    margin: 0;
}

.mysql-page__download-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.mysql-page__table-wrap {
    overflow-x: auto;
}

.mysql-page__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
    line-height: 1.45;
}

.mysql-page__table th,
.mysql-page__table td {
    padding: 0.55rem 0.65rem;
    border: 1px solid var(--color-border);
    text-align: left;
    vertical-align: top;
}

.mysql-page__table th {
    font-weight: 600;
    color: var(--color-text-primary);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.mysql-page__table td {
    width: 7rem;
    text-align: center;
    color: var(--color-text-secondary);
    white-space: nowrap;
}

.mysql-page__table tbody tr:nth-child(even) th,
.mysql-page__table tbody tr:nth-child(even) td {
    background: color-mix(in oklab, var(--color-surface) 96%, transparent);
}

.mysql-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.mysql-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.mysql-page__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.5;
}

.mysql-page__product-boxes {
    margin: 0;
}

.mysql-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.mysql-page__sidebar-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.mysql-page__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.mysql-page__sidebar-heading {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.mysql-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.mysql-page__customer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mysql-page__customer-title {
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
    .mysql-page__layout {
        grid-template-columns: 1fr;
    }
}
</style>
