<template>
    <AppNavbar />
    <main class="sqlite-page pb-10">
        <section class="sqlite-page__suite-line section-shell" aria-label="Positionnement produit">
            <p class="sqlite-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="sqlite-page__suite-platforms">
                <img
                    :src="sqliteSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, sqliteSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="sqlite-page__content section-shell" aria-labelledby="sqlite-main-title">
            <div class="sqlite-page__layout glass-frame">
                <div class="sqlite-page__main">
                    <h1 id="sqlite-main-title" class="sqlite-page__title">
                        CONNECTEUR NATIF SQLITE
                    </h1>

                    <div class="sqlite-page__intro">
                        <p>
                            <strong>WINDEV et WEBDEV</strong> se connectent à SQLite via un
                            <strong>« Connecteur natif »</strong> rapide et puissant, ainsi qu'ODBC et OLEDB. Toutes les fonctionnalités de
                            l'environnement sont disponibles. L'installation est extrêmement simple.
                        </p>
                        <p>
                            Une seule licence par serveur est nécessaire.<br />
                            Un nombre illimité d'ordinateurs peut accéder au serveur.
                        </p>
                        <p>Voici la liste des principales caractéristiques du Connecteur natif SQLite :</p>
                    </div>

                    <div class="sqlite-page__table-wrap">
                        <table class="sqlite-page__table">
                            <tbody>
                                <tr v-for="row in sqliteConnectorFeatures" :key="row.feature">
                                    <th scope="row">{{ row.feature }}</th>
                                    <td>{{ row.value }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <aside class="sqlite-page__sidebar" aria-label="Produits et ressources associés">
                    <figure class="sqlite-page__product-boxes">
                        <img
                            :src="sqlitePackages.src"
                            alt="WINDEV, WEBDEV et WINDEV Mobile"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, sqlitePackages.fallback)"
                        />
                    </figure>

                    <p class="sqlite-page__sidebar-lead">
                        Les environnements
                        <RouterLink class="sqlite-page__text-link" to="/software/windev"><strong>WINDEV</strong></RouterLink>,
                        <RouterLink class="sqlite-page__text-link" to="/software/webdev"><strong>WEBDEV</strong></RouterLink> et
                        <RouterLink class="sqlite-page__text-link" to="/software/windevmobile"><strong>WINDEV Mobile</strong></RouterLink>
                        sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                    </p>

                    <div class="sqlite-page__sidebar-block">
                        <h2 class="sqlite-page__sidebar-heading">Présentation de la documentation</h2>
                        <ul class="sqlite-page__sidebar-list">
                            <li>
                                <a
                                    class="sqlite-page__text-link"
                                    :href="sqliteNewFeaturesPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés
                                </a>
                            </li>
                            <li>
                                <a
                                    class="sqlite-page__text-link"
                                    :href="sqliteWindevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="sqlite-page__text-link"
                                    :href="sqliteWebdevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="sqlite-page__text-link"
                                    :href="sqliteWindevMobileBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="sqlite-page__sidebar-block">
                        <h2 class="sqlite-page__sidebar-heading">Schémas de présentation</h2>
                        <ul class="sqlite-page__sidebar-list">
                            <li>
                                <a
                                    class="sqlite-page__text-link"
                                    :href="sqliteUniversalConnectorsPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connecteurs bases de données universels
                                </a>
                            </li>
                            <li>
                                <a
                                    class="sqlite-page__text-link"
                                    :href="sqliteCrossPlatformDevPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Développement multiplateforme
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="sqlite-page__sidebar-block">
                        <h2 class="sqlite-page__sidebar-heading">Vidéos</h2>
                        <ul class="sqlite-page__sidebar-list">
                            <li>
                                <a
                                    class="sqlite-page__text-link"
                                    :href="SQLITE_TECHNICAL_VIDEOS_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vidéos techniques
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="sqlite-page__customer" aria-label="Références clients">
                        <p class="sqlite-page__customer-title">Ils utilisent WINDEV</p>
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
    SQLITE_TECHNICAL_VIDEOS_URL,
    sqliteCrossPlatformDevPdf,
    sqliteNewFeaturesPdf,
    sqliteUniversalConnectorsPdf,
    sqliteWebdevBrochureEn,
    sqliteWindevBrochureEn,
    sqliteWindevMobileBrochureEn,
} from '../data/sqliteConnectorDocuments.js';
import { sqliteConnectorFeatures } from '../data/sqliteConnectorFeatures.js';
import { sqlitePackages, sqliteSuiteCrossPlatform } from '../data/sqliteConnectorImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.sqlite-page {
    color: var(--color-text-primary);
}

.sqlite-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.sqlite-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.sqlite-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.sqlite-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.sqlite-page__content {
    margin-top: 0.45rem;
}

.sqlite-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.8rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    padding: clamp(1rem, 2vw, 1.45rem);
    align-items: start;
}

.sqlite-page__title {
    margin: 0 0 1rem;
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 800;
    line-height: 1.25;
}

.sqlite-page__intro {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.sqlite-page__intro p {
    margin: 0;
}

.sqlite-page__table-wrap {
    overflow-x: auto;
}

.sqlite-page__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
    line-height: 1.45;
}

.sqlite-page__table th,
.sqlite-page__table td {
    padding: 0.55rem 0.65rem;
    border: 1px solid var(--color-border);
    text-align: left;
    vertical-align: top;
}

.sqlite-page__table th {
    font-weight: 600;
    color: var(--color-text-primary);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.sqlite-page__table td {
    width: 7rem;
    text-align: center;
    color: var(--color-text-secondary);
    white-space: nowrap;
}

.sqlite-page__table tbody tr:nth-child(even) th,
.sqlite-page__table tbody tr:nth-child(even) td {
    background: color-mix(in oklab, var(--color-surface) 96%, transparent);
}

.sqlite-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.sqlite-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.sqlite-page__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.5;
}

.sqlite-page__product-boxes {
    margin: 0;
}

.sqlite-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.sqlite-page__sidebar-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.sqlite-page__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.sqlite-page__sidebar-heading {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.sqlite-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.sqlite-page__customer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.sqlite-page__customer-title {
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
    .sqlite-page__layout {
        grid-template-columns: 1fr;
    }
}
</style>
