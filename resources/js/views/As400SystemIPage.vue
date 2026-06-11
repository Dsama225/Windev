<template>
    <AppNavbar />
    <main class="as400-page pb-10">
        <section class="section-shell as400-page__suite-line" aria-label="Positionnement produit">
            <p class="as400-page__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="as400-page__suite-platforms">
                <img
                    :src="as400SuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, as400SuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell as400-page__content" aria-labelledby="as400-main-title">
            <div class="as400-page__layout glass-frame">
                <div class="as400-page__main">
                    <h1 id="as400-main-title" class="as400-page__title">WINDEV AS/400 &amp; System i</h1>

                    <ul class="as400-page__resource-list">
                        <li>
                            <img
                                class="as400-page__arrow-icon"
                                :src="as400ArrowIcon.src"
                                alt=""
                                width="7"
                                height="15"
                                loading="lazy"
                                decoding="async"
                                aria-hidden="true"
                                @error="onImageError($event, as400ArrowIcon.fallback)"
                            />
                            <RouterLink class="as400-page__text-link" :to="AS400_BROCHURE_ROUTE">
                                Brochure WINDEV AS/400 (HTML)
                            </RouterLink>
                        </li>
                        <li>
                            <img
                                class="as400-page__arrow-icon"
                                :src="as400ArrowIcon.src"
                                alt=""
                                width="7"
                                height="15"
                                loading="lazy"
                                decoding="async"
                                aria-hidden="true"
                                @error="onImageError($event, as400ArrowIcon.fallback)"
                            />
                            <a
                                class="as400-page__text-link"
                                :href="AS400_FEATURES_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Principales caractéristiques du connecteur natif AS/400
                            </a>
                        </li>
                    </ul>

                    <div class="as400-page__intro">
                        <RouterLink class="as400-page__cover-link" :to="AS400_BROCHURE_ROUTE">
                            <img
                                class="as400-page__cover-img"
                                :src="as400Cover.src"
                                alt="Couverture WINDEV AS/400"
                                width="140"
                                height="140"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, as400Cover.fallback)"
                            />
                        </RouterLink>
                        <div class="as400-page__intro-copy">
                            <p>
                                <strong>WINDEV AS/400 &amp; IBM i</strong> est la solution la plus simple, la plus rapide et la plus
                                performante pour développer des applications Client/Serveur natives pour AS/400 et IBM i.
                            </p>
                            <p>
                                Serveur : AS/400 ou IBM System i<br />
                                — Tous les OS en version 5R3 et ultérieure<br />
                                — TCP/IP
                            </p>
                            <p>Un développeur RPG peut en général apprendre les bases de WINDEV en une semaine (didacticiel fourni).</p>
                        </div>
                    </div>

                    <p class="as400-page__body">
                        WINDEV AS/400 vous permet de conserver vos méthodes de développement et de préserver la sécurité de votre système
                        d'information.<br />
                        Vous pouvez désormais facilement profiter de toute la puissance de Windows (toutes versions).
                    </p>

                    <figure class="as400-page__screenshot">
                        <RouterLink :to="AS400_BROCHURE_ROUTE">
                            <img
                                :src="as400ApplicationScreenshot.src"
                                alt="Exemple d'application gérant des données situées sur l'AS/400 et IBM i"
                                width="415"
                                height="337"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, as400ApplicationScreenshot.fallback)"
                            />
                        </RouterLink>
                        <figcaption class="as400-page__caption">
                            Exemple d'application gérant des données<br />
                            situées sur l'AS/400 &amp; IBM i
                        </figcaption>
                    </figure>

                    <p class="as400-page__learn-more-wrap">
                        <RouterLink class="as400-page__learn-more" :to="AS400_BROCHURE_ROUTE">
                            En savoir plus
                        </RouterLink>
                    </p>
                </div>

                <aside class="as400-page__sidebar" aria-label="Produits et ressources associés">
                    <figure class="as400-page__product-boxes">
                        <img
                            :src="as400Packages.src"
                            alt="WINDEV, WEBDEV et WINDEV Mobile"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400Packages.fallback)"
                        />
                    </figure>

                    <p class="as400-page__sidebar-lead">
                        Les environnements
                        <RouterLink class="as400-page__text-link" to="/software/windev"><strong>WINDEV</strong></RouterLink>,
                        <RouterLink class="as400-page__text-link" to="/software/webdev"><strong>WEBDEV</strong></RouterLink> et
                        <RouterLink class="as400-page__text-link" to="/software/windevmobile"><strong>WINDEV Mobile</strong></RouterLink>
                        sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                    </p>

                    <div class="as400-page__sidebar-block">
                        <h2 class="as400-page__sidebar-heading">Présentation de la documentation</h2>
                        <ul class="as400-page__sidebar-list">
                            <li>
                                <a
                                    class="as400-page__text-link"
                                    :href="as400NewFeaturesPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés
                                </a>
                            </li>
                            <li>
                                <a
                                    class="as400-page__text-link"
                                    :href="as400WindevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="as400-page__text-link"
                                    :href="as400WebdevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WEBDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="as400-page__text-link"
                                    :href="as400WindevMobileBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="as400-page__sidebar-block">
                        <h2 class="as400-page__sidebar-heading">Schémas de présentation</h2>
                        <ul class="as400-page__sidebar-list">
                            <li>
                                <a
                                    class="as400-page__text-link"
                                    :href="as400UniversalConnectorsPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connecteurs bases de données universels
                                </a>
                            </li>
                            <li>
                                <a
                                    class="as400-page__text-link"
                                    :href="as400CrossPlatformDevPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Développement multiplateforme
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="as400-page__sidebar-block">
                        <h2 class="as400-page__sidebar-heading">Vidéos</h2>
                        <ul class="as400-page__sidebar-list">
                            <li>
                                <a
                                    class="as400-page__text-link"
                                    :href="AS400_TECHNICAL_VIDEOS_URL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Vidéos techniques
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="as400-page__customer" aria-label="Références clients">
                        <p class="as400-page__customer-title">Ils utilisent WINDEV</p>
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
    AS400_BROCHURE_ROUTE,
    AS400_FEATURES_URL,
    AS400_TECHNICAL_VIDEOS_URL,
    as400CrossPlatformDevPdf,
    as400NewFeaturesPdf,
    as400UniversalConnectorsPdf,
    as400WebdevBrochureEn,
    as400WindevBrochureEn,
    as400WindevMobileBrochureEn,
} from '../data/as400ConnectorDocuments.js';
import {
    as400ApplicationScreenshot,
    as400ArrowIcon,
    as400Cover,
    as400Packages,
    as400SuiteCrossPlatform,
} from '../data/as400ConnectorImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.as400-page {
    color: var(--color-text-primary);
}

.as400-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.as400-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.as400-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.as400-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.as400-page__content {
    margin-top: 0.45rem;
}

.as400-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.8rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    padding: clamp(1rem, 2vw, 1.45rem);
    align-items: start;
}

.as400-page__title {
    margin: 0 0 1rem;
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-weight: 800;
    line-height: 1.25;
}

.as400-page__resource-list {
    margin: 0 0 1.25rem;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.5rem;
}

.as400-page__resource-list li {
    display: flex;
    align-items: center;
    gap: 0.45rem;
}

.as400-page__arrow-icon {
    flex-shrink: 0;
}

.as400-page__intro {
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 1rem;
    align-items: start;
    margin-bottom: 1.25rem;
}

.as400-page__cover-link {
    display: block;
}

.as400-page__cover-img {
    display: block;
    width: 140px;
    height: auto;
}

.as400-page__intro-copy {
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.as400-page__intro-copy p {
    margin: 0 0 0.75rem;
}

.as400-page__intro-copy p:last-child {
    margin-bottom: 0;
}

.as400-page__body {
    margin: 0 0 1.25rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.as400-page__screenshot {
    margin: 0 0 1rem;
    text-align: center;
}

.as400-page__screenshot img {
    display: inline-block;
    max-width: 100%;
    height: auto;
    border: 1px solid var(--color-border);
}

.as400-page__caption {
    margin: 0.5rem 0 0;
    font-size: 0.82rem;
    font-style: italic;
    color: var(--color-text-secondary);
    line-height: 1.45;
}

.as400-page__learn-more-wrap {
    margin: 0;
    text-align: center;
}

.as400-page__learn-more {
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--color-brand);
    text-decoration: none;
}

.as400-page__learn-more:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.as400-page__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.as400-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.as400-page__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.5;
}

.as400-page__product-boxes {
    margin: 0;
}

.as400-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.as400-page__sidebar-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.as400-page__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.as400-page__sidebar-heading {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.as400-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.as400-page__customer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.as400-page__customer-title {
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
    .as400-page__layout {
        grid-template-columns: 1fr;
    }

    .as400-page__intro {
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
    }
}
</style>



