<template>
    <AppNavbar />
    <main class="xbase-page pb-10">
        <section class="xbase-page__suite-line section-shell" aria-label="Positionnement produit">
            <p class="xbase-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="xbase-page__suite-platforms">
                <img
                    :src="xbaseSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, xbaseSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="xbase-page__content section-shell" aria-labelledby="xbase-main-title">
            <div class="xbase-page__layout glass-frame">
                <div class="xbase-page__main">
                    <h1 id="xbase-main-title" class="xbase-page__title">
                        CONNECTEUR NATIF XBASE (DBASE 3+, DBASE4, CLIPPER5, CLIPPER 87, FOXBASE)
                    </h1>

                    <div class="xbase-page__intro">
                        <p>
                            <strong>WINDEV et WEBDEV</strong> se connectent à xBase via un
                            <strong>« Connecteur natif »</strong> rapide et puissant, ainsi qu'ODBC et OLEDB. Toutes les fonctionnalités de
                            l'environnement sont disponibles. L'installation est extrêmement simple.
                        </p>
                        <p>Un nombre illimité d'ordinateurs peut accéder au serveur.</p>
                        <p>Voici la liste des principales caractéristiques du Connecteur natif xBase :</p>
                    </div>

                    <div class="xbase-page__table-wrap">
                        <table class="xbase-page__table">
                            <tbody>
                                <tr v-for="row in xbaseConnectorFeatures" :key="row.feature">
                                    <th scope="row">{{ row.feature }}</th>
                                    <td>{{ row.value }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <aside class="xbase-page__sidebar" aria-label="Produits et ressources associés">
                    <figure class="xbase-page__product-boxes">
                        <img
                            :src="xbasePackages.src"
                            alt="WINDEV, WEBDEV et WINDEV Mobile"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, xbasePackages.fallback)"
                        />
                    </figure>

                    <p class="xbase-page__sidebar-lead">
                        Les environnements
                        <RouterLink class="xbase-page__text-link" to="/software/windev"><strong>WINDEV</strong></RouterLink>,
                        <RouterLink class="xbase-page__text-link" to="/software/webdev"><strong>WEBDEV</strong></RouterLink> et
                        <RouterLink class="xbase-page__text-link" to="/software/windevmobile"><strong>WINDEV Mobile</strong></RouterLink>
                        sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                    </p>

                    <div class="xbase-page__sidebar-block">
                        <h2 class="xbase-page__sidebar-heading">Présentation de la documentation</h2>
                        <ul class="xbase-page__sidebar-list">
                            <li>
                                <a
                                    class="xbase-page__text-link"
                                    :href="xbaseNewFeaturesPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés
                                </a>
                            </li>
                            <li>
                                <a
                                    class="xbase-page__text-link"
                                    :href="xbaseWindevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="xbase-page__text-link"
                                    :href="xbaseWebdevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="xbase-page__text-link"
                                    :href="xbaseWindevMobileBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="xbase-page__sidebar-block">
                        <h2 class="xbase-page__sidebar-heading">Schémas de présentation</h2>
                        <ul class="xbase-page__sidebar-list">
                            <li>
                                <a
                                    class="xbase-page__text-link"
                                    :href="xbaseUniversalConnectorsPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connecteurs bases de données universels
                                </a>
                            </li>
                            <li>
                                <a
                                    class="xbase-page__text-link"
                                    :href="xbaseCrossPlatformDevPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Développement multiplateforme
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="xbase-page__sidebar-block">
                        <h2 class="xbase-page__sidebar-heading">Vidéos</h2>
                        <ul class="xbase-page__sidebar-list">
                            <li>
                                <a
                                    class="xbase-page__text-link"
                                    :href="XBASE_TECHNICAL_VIDEOS_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vidéos techniques
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="xbase-page__customer" aria-label="Références clients">
                        <p class="xbase-page__customer-title">Ils utilisent WINDEV</p>
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
    XBASE_TECHNICAL_VIDEOS_URL,
    xbaseCrossPlatformDevPdf,
    xbaseNewFeaturesPdf,
    xbaseUniversalConnectorsPdf,
    xbaseWebdevBrochureEn,
    xbaseWindevBrochureEn,
    xbaseWindevMobileBrochureEn,
} from '../data/xbaseConnectorDocuments.js';
import { xbaseConnectorFeatures } from '../data/xbaseConnectorFeatures.js';
import { xbasePackages, xbaseSuiteCrossPlatform } from '../data/xbaseConnectorImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.xbase-page {
    color: var(--color-text-primary);
}

.xbase-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.xbase-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.xbase-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.xbase-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.xbase-page__content {
    margin-top: 0.45rem;
}

.xbase-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.8rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    padding: clamp(1rem, 2vw, 1.45rem);
    align-items: start;
}

.xbase-page__title {
    margin: 0 0 1rem;
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 800;
    line-height: 1.25;
}

.xbase-page__intro {
    display: grid;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.xbase-page__intro p {
    margin: 0;
}

.xbase-page__table-wrap {
    overflow-x: auto;
}

.xbase-page__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
    line-height: 1.45;
}

.xbase-page__table th,
.xbase-page__table td {
    padding: 0.55rem 0.65rem;
    border: 1px solid var(--color-border);
    text-align: left;
    vertical-align: top;
}

.xbase-page__table th {
    font-weight: 600;
    color: var(--color-text-primary);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.xbase-page__table td {
    width: 7rem;
    text-align: center;
    color: var(--color-text-secondary);
    white-space: nowrap;
}

.xbase-page__table tbody tr:nth-child(even) th,
.xbase-page__table tbody tr:nth-child(even) td {
    background: color-mix(in oklab, var(--color-surface) 96%, transparent);
}

.xbase-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.xbase-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.xbase-page__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.5;
}

.xbase-page__product-boxes {
    margin: 0;
}

.xbase-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.xbase-page__sidebar-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.xbase-page__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.xbase-page__sidebar-heading {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.xbase-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.xbase-page__customer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.xbase-page__customer-title {
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
    .xbase-page__layout {
        grid-template-columns: 1fr;
    }
}
</style>
