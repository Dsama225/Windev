<template>
    <AppNavbar />
    <main class="wlanguage-page pb-10">
        <section class="section-shell wlanguage-page__suite-line" aria-label="Positionnement produit">
            <p class="wlanguage-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="wlanguage-page__suite-platforms">
                <img
                    :src="wlanguageSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, wlanguageSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell wlanguage-page__hero" aria-label="Bannière WINDEV Suite">
            <HomeHeroCarousel />
        </section>

        <section class="section-shell wlanguage-page__layout" aria-label="Présentation WLanguage">
            <div class="wlanguage-page__main glass-frame">
                <header class="wlanguage-page__product-header">
                    <figure class="wlanguage-page__logo-figure">
                        <img
                            class="wlanguage-page__logo-img"
                            :src="wlanguageLogo.src"
                            alt="WLanguage — langage de programmation de 5e génération"
                            width="531"
                            height="106"
                            loading="eager"
                            decoding="async"
                            @error="onImageError($event, wlanguageLogo.fallback)"
                        />
                    </figure>
                </header>

                <h1 id="wlanguage-main-title" class="wlanguage-page__title">29 EXEMPLES DE CODE WLANGUAGE (5GL)</h1>
                <p class="wlanguage-page__subtitle">Cette page présente des exemples de code WLanguage.</p>
                <p class="wlanguage-page__lead">
                    <strong>Voici à quoi ressemble du code 5GL !</strong><br />
                    (et rappelez-vous que pour de nombreuses fonctions, il n'y a rien à coder : il suffit de cliquer sur les
                    choix proposés par l'IDE ; ces exemples présentent uniquement le langage).
                </p>

                <section
                    v-for="sample in wlanguageSamples"
                    :key="sample.id"
                    class="wlanguage-page__sample"
                    :aria-labelledby="'wlanguage-sample-' + sample.id"
                >
                    <h2 :id="'wlanguage-sample-' + sample.id" class="wlanguage-page__sample-title">
                        <a
                            v-if="sample.docUrl"
                            class="wlanguage-page__sample-link"
                            :href="sample.docUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Exemple {{ sample.id }} : {{ sample.title }}
                        </a>
                        <template v-else>Exemple {{ sample.id }} : {{ sample.title }}</template>
                    </h2>
                    <p v-if="sample.description" class="wlanguage-page__body">{{ sample.description }}</p>
                    <pre class="wlanguage-page__code"><code>{{ sample.code }}</code></pre>
                </section>
            </div>

            <aside class="wlanguage-page__sidebar glass-frame" aria-label="Liens associés">
                <figure class="wlanguage-page__product-boxes">
                    <img
                        :src="wlanguagePackages.src"
                        alt="WINDEV, WEBDEV et WINDEV Mobile"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, wlanguagePackages.fallback)"
                    />
                </figure>
                <p class="wlanguage-page__sidebar-text">
                    Les environnements
                    <RouterLink class="wlanguage-page__text-link" to="/software/windev"><strong>WINDEV</strong></RouterLink>,
                    <RouterLink class="wlanguage-page__text-link" to="/software/webdev"><strong>WEBDEV</strong></RouterLink> et
                    <RouterLink class="wlanguage-page__text-link" to="/software/windevmobile"><strong>WINDEV Mobile</strong></RouterLink>
                    sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                </p>

                <div class="wlanguage-page__sidebar-block">
                    <h3 class="wlanguage-page__sidebar-product-title">Fonctions WLanguage (3480)</h3>
                    <ul class="wlanguage-page__sidebar-list">
                        <li>
                            <RouterLink class="wlanguage-page__text-link" to="/software/wlanguage">
                                29 exemples de code WLanguage
                            </RouterLink>
                        </li>
                    </ul>
                    <p class="wlanguage-page__sidebar-text">WLanguage propose le typage statique et le typage dynamique.</p>
                    <p class="wlanguage-page__sidebar-text">
                        Il inclut un système de gestion des types flexible qui permet un développement rapide, en utilisant le typage dynamique tout en
                        profitant du typage statique.
                    </p>
                    <p class="wlanguage-page__sidebar-text">
                        Sa machine virtuelle intègre un système de gestion automatique de la mémoire.
                    </p>
                    <p class="wlanguage-page__sidebar-text">
                        Des types de données avancés sont disponibles ainsi que des numériques haute précision (38 chiffres significatifs).<br />
                        Il prend en charge plusieurs paradigmes de programmation : orienté objet, procédural et impératif.
                    </p>
                </div>

                <div class="wlanguage-page__sidebar-block">
                    <h3 class="wlanguage-page__sidebar-title">Présentation de la documentation</h3>
                    <ul class="wlanguage-page__sidebar-list">
                        <li>
                            <a
                                class="wlanguage-page__text-link"
                                :href="wlanguageNewFeaturesPdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Nouveautés
                            </a>
                        </li>
                        <li>
                            <a
                                class="wlanguage-page__text-link"
                                :href="wlanguageWindevBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WINDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="wlanguage-page__text-link"
                                :href="wlanguageWebdevBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WEBDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="wlanguage-page__text-link"
                                :href="wlanguageWindevMobileBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WINDEV Mobile
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="wlanguage-page__sidebar-block">
                    <h3 class="wlanguage-page__sidebar-title">Schémas de présentation</h3>
                    <ul class="wlanguage-page__sidebar-list">
                        <li>
                            <a
                                class="wlanguage-page__text-link"
                                :href="wlanguageUniversalConnectorsPdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Connecteurs bases de données client/serveur
                            </a>
                        </li>
                        <li>
                            <a
                                class="wlanguage-page__text-link"
                                :href="wlanguageCrossPlatformDevPdf.href"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Développement multiplateforme
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="wlanguage-page__sidebar-block">
                    <h3 class="wlanguage-page__sidebar-title">Vidéos</h3>
                    <ul class="wlanguage-page__sidebar-list">
                        <li>
                            <a
                                class="wlanguage-page__text-link"
                                :href="WLANGUAGE_TECHNICAL_VIDEOS_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Vidéos techniques
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="wlanguage-page__customer" aria-label="Références clients">
                    <p class="wlanguage-page__customer-title">Ils utilisent WINDEV</p>
                    <CustomerLogoCarousel variant="compact" />
                </div>
            </aside>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import CustomerLogoCarousel from '../components/CustomerLogoCarousel.vue';
import HomeHeroCarousel from '../components/HomeHeroCarousel.vue';
import {
    WLANGUAGE_TECHNICAL_VIDEOS_URL,
    wlanguageCrossPlatformDevPdf,
    wlanguageNewFeaturesPdf,
    wlanguageUniversalConnectorsPdf,
    wlanguageWebdevBrochureEn,
    wlanguageWindevBrochureEn,
    wlanguageWindevMobileBrochureEn,
} from '../data/wlanguagePageDocuments.js';
import { wlanguageLogo, wlanguagePackages, wlanguageSuiteCrossPlatform } from '../data/wlanguagePageImages.js';
import { wlanguageSamples } from '../data/wlanguageSamples.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.wlanguage-page {
    color: var(--color-text-primary);
}

.wlanguage-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.wlanguage-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.wlanguage-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.wlanguage-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.wlanguage-page__hero {
    margin-bottom: 0.25rem;
}

.wlanguage-page__layout {
    margin-top: 1.25rem;
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 300px);
    align-items: start;
}

.wlanguage-page__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.wlanguage-page__product-header {
    margin-bottom: 1rem;
}

.wlanguage-page__logo-figure {
    margin: 0;
}

.wlanguage-page__logo-img {
    max-width: min(100%, 531px);
    height: auto;
}

.wlanguage-page__title {
    margin: 0 0 0.65rem;
    font-size: clamp(1.25rem, 2.4vw, 1.65rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.15;
}

.wlanguage-page__subtitle {
    margin: 0 0 0.65rem;
    font-size: 1.05rem;
    font-weight: 800;
    line-height: 1.35;
}

.wlanguage-page__lead {
    margin: 0 0 1.25rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.wlanguage-page__sample {
    margin-bottom: 1.35rem;
    padding-bottom: 1.1rem;
    border-bottom: 1px solid var(--color-border);
}

.wlanguage-page__sample:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: 0;
}

.wlanguage-page__sample-title {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--color-text-primary);
}

.wlanguage-page__sample-link {
    color: inherit;
    text-decoration: none;
}

.wlanguage-page__sample-link:hover {
    color: var(--color-brand);
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wlanguage-page__body {
    margin: 0 0 0.5rem;
    font-size: 0.88rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

.wlanguage-page__code {
    margin: 0;
    padding: 0.75rem 0.85rem;
    border-radius: var(--radius-md);
    background: #f4f6fa;
    border: 1px solid #e3e9f2;
    font-family: ui-monospace, 'Cascadia Code', 'Consolas', monospace;
    font-size: 0.78rem;
    line-height: 1.5;
    color: #1f304f;
    overflow-x: auto;
    white-space: pre-wrap;
    word-break: break-word;
}

.wlanguage-page__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.wlanguage-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wlanguage-page__sidebar {
    padding: clamp(0.85rem, 1.5vw, 1.1rem);
    display: grid;
    gap: 1rem;
    align-content: start;
}

.wlanguage-page__product-boxes {
    margin: 0;
}

.wlanguage-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.wlanguage-page__sidebar-text {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

.wlanguage-page__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.wlanguage-page__sidebar-product-title,
.wlanguage-page__sidebar-title {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1.3;
}

.wlanguage-page__sidebar-title {
    font-size: 0.78rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.wlanguage-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.wlanguage-page__customer-title {
    margin: 0 0 0.5rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #5f6f8c;
}

@media (max-width: 900px) {
    .wlanguage-page__layout {
        grid-template-columns: 1fr;
    }
}
</style>
