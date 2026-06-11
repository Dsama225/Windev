<template>
    <AppNavbar />
    <main class="sql-server-page pb-10">
        <section class="section-shell sql-server-page__suite-line" aria-label="Positionnement produit">
            <p class="sql-server-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="sql-server-page__suite-platforms">
                <img
                    :src="sqlServerSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, sqlServerSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell sql-server-page__content" aria-labelledby="sql-server-main-title">
            <div class="sql-server-page__layout glass-frame">
                <div class="sql-server-page__main">
                    <h1 id="sql-server-main-title" class="sql-server-page__title">
                        CONNECTEUR NATIF SQL SERVER (À PARTIR DE LA VERSION 7)
                    </h1>

                    <div class="sql-server-page__intro">
                        <p>
                            <strong>WINDEV et WEBDEV</strong> se connectent à SQL Server via un
                            <strong>« Connecteur natif »</strong> rapide et puissant, ainsi qu'ODBC et OLEDB. Toutes les fonctionnalités de
                            l'environnement sont disponibles. L'installation est extrêmement simple.
                        </p>
                        <p>
                            Une seule licence par serveur est nécessaire.<br />
                            Un nombre illimité d'ordinateurs peut accéder au serveur.<br />
                            (Ce connecteur natif prend en charge les versions 7, 2000, 2005, 2008, 2012, 2014, 2016, 2019 et 2022 ainsi que
                            les versions Express de SQL Server. Ce connecteur natif gère également l'accès aux bases SQL Azure.)
                        </p>
                        <p>Voici la liste des principales caractéristiques du Connecteur natif SQL Server :</p>
                    </div>

                    <div class="sql-server-page__table-wrap">
                        <table class="sql-server-page__table">
                            <tbody>
                                <tr v-for="row in sqlServerConnectorFeatures" :key="row.feature">
                                    <th scope="row">{{ row.feature }}</th>
                                    <td>{{ row.value }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <aside class="sql-server-page__sidebar" aria-label="Produits et ressources associés">
                    <figure class="sql-server-page__product-boxes">
                        <img
                            :src="sqlServerPackages.src"
                            alt="WINDEV, WEBDEV et WINDEV Mobile"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, sqlServerPackages.fallback)"
                        />
                    </figure>

                    <p class="sql-server-page__sidebar-lead">
                        Les environnements
                        <RouterLink class="sql-server-page__text-link" to="/software/windev"><strong>WINDEV</strong></RouterLink>,
                        <RouterLink class="sql-server-page__text-link" to="/software/webdev"><strong>WEBDEV</strong></RouterLink> et
                        <RouterLink class="sql-server-page__text-link" to="/software/windevmobile"><strong>WINDEV Mobile</strong></RouterLink>
                        sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                    </p>

                    <div class="sql-server-page__sidebar-block">
                        <h2 class="sql-server-page__sidebar-heading">Présentation de la documentation</h2>
                        <ul class="sql-server-page__sidebar-list">
                            <li>
                                <a
                                    class="sql-server-page__text-link"
                                    :href="sqlServerNewFeaturesPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés
                                </a>
                            </li>
                            <li>
                                <a
                                    class="sql-server-page__text-link"
                                    :href="sqlServerWindevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="sql-server-page__text-link"
                                    :href="sqlServerWebdevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="sql-server-page__text-link"
                                    :href="sqlServerWindevMobileBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="sql-server-page__sidebar-block">
                        <h2 class="sql-server-page__sidebar-heading">Schémas de présentation</h2>
                        <ul class="sql-server-page__sidebar-list">
                            <li>
                                <a
                                    class="sql-server-page__text-link"
                                    :href="sqlServerUniversalConnectorsPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connecteurs bases de données universels
                                </a>
                            </li>
                            <li>
                                <a
                                    class="sql-server-page__text-link"
                                    :href="sqlServerCrossPlatformDevPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Développement multiplateforme
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="sql-server-page__sidebar-block">
                        <h2 class="sql-server-page__sidebar-heading">Vidéos</h2>
                        <ul class="sql-server-page__sidebar-list">
                            <li>
                                <a
                                    class="sql-server-page__text-link"
                                    :href="SQL_SERVER_TECHNICAL_VIDEOS_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vidéos techniques
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="sql-server-page__customer" aria-label="Références clients">
                        <p class="sql-server-page__customer-title">Ils utilisent WINDEV</p>
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
    SQL_SERVER_TECHNICAL_VIDEOS_URL,
    sqlServerCrossPlatformDevPdf,
    sqlServerNewFeaturesPdf,
    sqlServerUniversalConnectorsPdf,
    sqlServerWebdevBrochureEn,
    sqlServerWindevBrochureEn,
    sqlServerWindevMobileBrochureEn,
} from '../data/sqlServerConnectorDocuments.js';
import { sqlServerConnectorFeatures } from '../data/sqlServerConnectorFeatures.js';
import { sqlServerPackages, sqlServerSuiteCrossPlatform } from '../data/sqlServerConnectorImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.sql-server-page {
    color: var(--color-text-primary);
}

.sql-server-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.sql-server-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.sql-server-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.sql-server-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.sql-server-page__content {
    margin-top: 0.45rem;
}

.sql-server-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.8rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    padding: clamp(1rem, 2vw, 1.45rem);
    align-items: start;
}

.sql-server-page__title {
    margin: 0 0 1rem;
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 800;
    line-height: 1.25;
}

.sql-server-page__intro {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.sql-server-page__intro p {
    margin: 0;
}

.sql-server-page__table-wrap {
    overflow-x: auto;
}

.sql-server-page__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
    line-height: 1.45;
}

.sql-server-page__table th,
.sql-server-page__table td {
    padding: 0.55rem 0.65rem;
    border: 1px solid var(--color-border);
    text-align: left;
    vertical-align: top;
}

.sql-server-page__table th {
    font-weight: 600;
    color: var(--color-text-primary);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.sql-server-page__table td {
    width: 7rem;
    text-align: center;
    color: var(--color-text-secondary);
    white-space: nowrap;
}

.sql-server-page__table tbody tr:nth-child(even) th,
.sql-server-page__table tbody tr:nth-child(even) td {
    background: color-mix(in oklab, var(--color-surface) 96%, transparent);
}

.sql-server-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.sql-server-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.sql-server-page__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.5;
}

.sql-server-page__product-boxes {
    margin: 0;
}

.sql-server-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.sql-server-page__sidebar-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.sql-server-page__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.sql-server-page__sidebar-heading {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.sql-server-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.sql-server-page__customer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sql-server-page__customer-title {
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
    .sql-server-page__layout {
        grid-template-columns: 1fr;
    }
}
</style>
