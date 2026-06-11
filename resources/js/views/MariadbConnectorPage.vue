<template>
    <AppNavbar />
    <main class="mariadb-page pb-10">
        <section class="mariadb-page__suite-line section-shell" aria-label="Positionnement produit">
            <p class="mariadb-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="mariadb-page__suite-platforms">
                <img
                    :src="mariadbSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, mariadbSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="mariadb-page__content section-shell" aria-labelledby="mariadb-main-title">
            <div class="mariadb-page__layout glass-frame">
                <div class="mariadb-page__main">
                    <h1 id="mariadb-main-title" class="mariadb-page__title">
                        CONNECTEUR NATIF MARIADB
                    </h1>

                    <div class="mariadb-page__intro">
                        <p>
                            <strong>WINDEV et WEBDEV</strong> se connectent à MariaDB via un
                            <strong>« Connecteur natif »</strong> rapide et puissant, ainsi qu'ODBC et OLEDB.
                        </p>
                        <ul class="mariadb-page__download-list">
                            <li>
                                <a
                                    class="mariadb-page__text-link"
                                    :href="MARIADB_CONNECTOR_DOWNLOAD_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Télécharger le Connecteur natif MariaDB
                                </a>
                            </li>
                        </ul>
                        <p>Voici la liste des principales caractéristiques du Connecteur natif MariaDB :</p>
                    </div>

                    <div class="mariadb-page__table-wrap">
                        <table class="mariadb-page__table">
                            <tbody>
                                <tr v-for="row in mariadbConnectorFeatures" :key="row.feature">
                                    <th scope="row">{{ row.feature }}</th>
                                    <td>{{ row.value }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <aside class="mariadb-page__sidebar" aria-label="Produits et ressources associés">
                    <figure class="mariadb-page__product-boxes">
                        <img
                            :src="mariadbPackages.src"
                            alt="WINDEV, WEBDEV et WINDEV Mobile"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, mariadbPackages.fallback)"
                        />
                    </figure>

                    <p class="mariadb-page__sidebar-lead">
                        Les environnements
                        <RouterLink class="mariadb-page__text-link" to="/software/windev"><strong>WINDEV</strong></RouterLink>,
                        <RouterLink class="mariadb-page__text-link" to="/software/webdev"><strong>WEBDEV</strong></RouterLink> et
                        <RouterLink class="mariadb-page__text-link" to="/software/windevmobile"><strong>WINDEV Mobile</strong></RouterLink>
                        sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                    </p>

                    <div class="mariadb-page__sidebar-block">
                        <h2 class="mariadb-page__sidebar-heading">Présentation de la documentation</h2>
                        <ul class="mariadb-page__sidebar-list">
                            <li>
                                <a
                                    class="mariadb-page__text-link"
                                    :href="mariadbNewFeaturesPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés
                                </a>
                            </li>
                            <li>
                                <a
                                    class="mariadb-page__text-link"
                                    :href="mariadbWindevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="mariadb-page__text-link"
                                    :href="mariadbWebdevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="mariadb-page__text-link"
                                    :href="mariadbWindevMobileBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mariadb-page__sidebar-block">
                        <h2 class="mariadb-page__sidebar-heading">Schémas de présentation</h2>
                        <ul class="mariadb-page__sidebar-list">
                            <li>
                                <a
                                    class="mariadb-page__text-link"
                                    :href="mariadbUniversalConnectorsPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connecteurs bases de données universels
                                </a>
                            </li>
                            <li>
                                <a
                                    class="mariadb-page__text-link"
                                    :href="mariadbCrossPlatformDevPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Développement multiplateforme
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mariadb-page__sidebar-block">
                        <h2 class="mariadb-page__sidebar-heading">Vidéos</h2>
                        <ul class="mariadb-page__sidebar-list">
                            <li>
                                <a
                                    class="mariadb-page__text-link"
                                    :href="MARIADB_TECHNICAL_VIDEOS_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vidéos techniques
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="mariadb-page__customer" aria-label="Références clients">
                        <p class="mariadb-page__customer-title">Ils utilisent WINDEV</p>
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
    MARIADB_CONNECTOR_DOWNLOAD_URL,
    MARIADB_TECHNICAL_VIDEOS_URL,
    mariadbCrossPlatformDevPdf,
    mariadbNewFeaturesPdf,
    mariadbUniversalConnectorsPdf,
    mariadbWebdevBrochureEn,
    mariadbWindevBrochureEn,
    mariadbWindevMobileBrochureEn,
} from '../data/mariadbConnectorDocuments.js';
import { mariadbConnectorFeatures } from '../data/mariadbConnectorFeatures.js';
import { mariadbPackages, mariadbSuiteCrossPlatform } from '../data/mariadbConnectorImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.mariadb-page {
    color: var(--color-text-primary);
}

.mariadb-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.mariadb-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.mariadb-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.mariadb-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.mariadb-page__content {
    margin-top: 0.45rem;
}

.mariadb-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.8rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    padding: clamp(1rem, 2vw, 1.45rem);
    align-items: start;
}

.mariadb-page__title {
    margin: 0 0 1rem;
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 800;
    line-height: 1.25;
}

.mariadb-page__intro {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.mariadb-page__intro p {
    margin: 0;
}

.mariadb-page__download-list {
    margin: 0;
    padding: 0;
    list-style: none;
}

.mariadb-page__table-wrap {
    overflow-x: auto;
}

.mariadb-page__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
    line-height: 1.45;
}

.mariadb-page__table th,
.mariadb-page__table td {
    padding: 0.55rem 0.65rem;
    border: 1px solid var(--color-border);
    text-align: left;
    vertical-align: top;
}

.mariadb-page__table th {
    font-weight: 600;
    color: var(--color-text-primary);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.mariadb-page__table td {
    width: 7rem;
    text-align: center;
    color: var(--color-text-secondary);
    white-space: nowrap;
}

.mariadb-page__table tbody tr:nth-child(even) th,
.mariadb-page__table tbody tr:nth-child(even) td {
    background: color-mix(in oklab, var(--color-surface) 96%, transparent);
}

.mariadb-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.mariadb-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.mariadb-page__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.5;
}

.mariadb-page__product-boxes {
    margin: 0;
}

.mariadb-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.mariadb-page__sidebar-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.mariadb-page__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.mariadb-page__sidebar-heading {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.mariadb-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.mariadb-page__customer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mariadb-page__customer-title {
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
    .mariadb-page__layout {
        grid-template-columns: 1fr;
    }
}
</style>
