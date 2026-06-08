<template>
    <AppNavbar />
    <main class="wdmsg-page pb-10">
        <section class="section-shell wdmsg-page__suite-line" aria-label="Positionnement produit">
            <p class="wdmsg-page__suite-text">
                <strong>Multiplateforme</strong> — suite logicielle de développement d'applications multiplateformes
            </p>
            <figure class="wdmsg-page__suite-platforms">
                <img
                    :src="suiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, suiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell wdmsg-page__layout" aria-label="Présentation WDMSG">
            <div class="wdmsg-page__main glass-frame">
                <h1 class="wdmsg-page__title">PRÉSENTATION DE WDMSG</h1>
                <p class="wdmsg-page__lead">
                    WDMSG vous permet de traduire facilement une application entière (WINDEV, WEBDEV et/ou WINDEV Mobile).
                </p>

                <div class="wdmsg-page__intro-grid">
                    <div class="wdmsg-page__intro-copy">
                        <p class="wdmsg-page__body">
                            Votre projet est destiné à être utilisé à l'étranger ? Votre application doit être multilingue ?
                            <a href="#multilingue" class="wdmsg-page__text-link">En savoir plus</a>
                        </p>
                        <p class="wdmsg-page__body">
                            Vous souhaitez vérifier la grammaire, l'orthographe et la syntaxe des messages d'information de vos applications ?
                            <a href="#grammaire" class="wdmsg-page__text-link">En savoir plus</a>
                        </p>
                        <p class="wdmsg-page__body">
                            Vous développez une application avec des mots, des phrases et des expressions qui changent selon le métier de l'utilisateur,
                            mais vous ne voulez avoir qu'un seul code source ?
                            <a href="#metier" class="wdmsg-page__text-link">En savoir plus</a>
                        </p>
                        <p class="wdmsg-page__body">
                            <a :href="WDINT_PAGE_URL" class="wdmsg-page__text-link" target="_blank" rel="noopener noreferrer">WDINT</a>
                            est inclus dans WDMSG.
                        </p>
                        <p class="wdmsg-page__body">
                            <RouterLink class="wdmsg-page__text-link" to="/software/subscribe">S'abonner</RouterLink>
                        </p>
                    </div>

                    <aside class="wdmsg-page__resources" aria-label="Ressources prises en charge par WDMSG">
                        <h2 class="wdmsg-page__resources-title">Ressources prises en charge par WDMSG :</h2>
                        <ul class="wdmsg-page__resources-list">
                            <li v-for="item in supportedResources" :key="item">{{ item }}</li>
                        </ul>
                    </aside>
                </div>

                <hr class="wdmsg-page__divider" />

                <section id="grammaire" class="wdmsg-page__section" aria-labelledby="wdmsg-grammar-title">
                    <h2 id="wdmsg-grammar-title" class="wdmsg-page__section-title">WDMSG et la grammaire</h2>
                    <p class="wdmsg-page__body">
                        Les fautes d'orthographe, les coquilles, les erreurs de grammaire et les messages incompréhensibles peuvent nuire à l'image d'un éditeur de logiciels.
                    </p>
                    <p class="wdmsg-page__body">
                        Comment vérifier les messages ou expressions saisis par vos développeurs dans leurs modules ? : titres de fenêtres, libellés de champs, libellés de boutons,
                        infobulles, messages d'information, messages d'erreur, messages d'attente, titre et contenu des pages d'aide, etc.
                    </p>
                    <p class="wdmsg-page__body">
                        WDMSG, le complément idéal de WINDEV et WEBDEV, est un outil puissant qui vérifie les messages de l'application.
                    </p>
                    <p class="wdmsg-page__body wdmsg-page__body--strong">Le principe est simple :</p>
                    <ol class="wdmsg-page__ordered">
                        <li>Tous les messages, libellés et textes sont extraits du projet et exportés vers un fichier texte.</li>
                        <li>Toutes les expressions de ce fichier sont vérifiées (par exemple à l'aide d'un correcteur orthographique et grammatical).</li>
                        <li>Les messages corrigés sont réintégrés dans le projet d'origine.</li>
                    </ol>
                    <p class="wdmsg-page__body">
                        Avantage principal : vos développeurs s'occupent du code, et une personne (pas nécessairement experte en programmation) peut vérifier tout le texte de votre
                        application. Vous publiez des applications avec une meilleure grammaire et syntaxe.
                    </p>
                </section>

                <section id="metier" class="wdmsg-page__section" aria-labelledby="wdmsg-vocab-title">
                    <h2 id="wdmsg-vocab-title" class="wdmsg-page__section-title">WDMSG et le vocabulaire métier</h2>
                    <p class="wdmsg-page__body">
                        Qu'est-ce que le vocabulaire métier ? Illustrons ce concept par un exemple : un artisan peut utiliser le mot « Devis », tandis qu'un
                        consultant en entreprise utilisera « Proposition commerciale ».
                    </p>
                    <p class="wdmsg-page__body">WINDEV et WDMSG gèrent facilement le concept de vocabulaire métier.</p>
                    <p class="wdmsg-page__body wdmsg-page__body--strong">Le principe pour WDMSG est très simple :</p>
                    <ol class="wdmsg-page__ordered">
                        <li>Tous les messages, libellés et textes de votre projet sont extraits et exportés vers un fichier texte.</li>
                        <li>Les expressions sont adaptées et enregistrées (via un outil fourni) selon chaque métier.</li>
                        <li>Le vocabulaire métier est intégré dans le projet d'origine.</li>
                        <li>
                            Dans votre projet, il suffit d'ajouter une ligne de code WLanguage pour définir dynamiquement le type de vocabulaire métier à afficher dans votre
                            application selon l'utilisateur (jusqu'à 20 jeux de vocabulaire métier différents pris en charge).
                        </li>
                    </ol>
                </section>

                <section id="multilingue" class="wdmsg-page__section" aria-labelledby="wdmsg-i18n-title">
                    <h2 id="wdmsg-i18n-title" class="wdmsg-page__section-title">WDMSG et les projets multilingues</h2>
                    <p class="wdmsg-page__body">
                        Les projets créés avec WINDEV et WEBDEV peuvent être multilingues. Dans ce cas, chaque message, fenêtre, état ou champ doit être traduit dans les
                        différentes langues prises en charge par le projet.
                    </p>
                    <p class="wdmsg-page__body wdmsg-page__body--strong">Un projet peut être traduit de différentes manières :</p>
                    <ol class="wdmsg-page__ordered">
                        <li>
                            Vous pouvez traduire les différents éléments au fur et à mesure de leur création, via l'onglet « Détails » des fenêtres de description. Cependant, cette solution n'est
                            idéale que pour les petites applications et peut rapidement devenir lourde.
                        </li>
                        <li>
                            Vous pouvez utiliser WDMSG. WDMSG permet d'extraire tout le texte et les ressources à traduire d'un projet WINDEV. Une fois traduits, WDMSG
                            réintègre automatiquement ce texte et ces ressources. Les éléments du fichier texte peuvent être :
                            <ul class="wdmsg-page__bullets">
                                <li>traduits directement,</li>
                                <li>traduits avec un logiciel de traduction dédié,</li>
                                <li>traduits par une agence de traduction,</li>
                                <li>traduits via WDTRAD : l'outil de traduction fourni avec WDMSG,</li>
                                <li>vérifiés par un correcteur orthographique,</li>
                                <li>modifiés pour standardiser messages, titres, etc.</li>
                            </ul>
                        </li>
                    </ol>
                    <p class="wdmsg-page__body">
                        Dans votre projet d'origine, il suffit d'ajouter une ligne de code WLanguage pour définir dynamiquement la langue à afficher pour votre application selon
                        l'utilisateur (jusqu'à <span class="wdmsg-page__accent">64 langues différentes prises en charge</span>).
                    </p>
                    <p class="wdmsg-page__body">
                        WDMSG est livré avec un dictionnaire. Cette mémoire de traduction contient la traduction d'une même source en plusieurs langues. Par exemple, dans le même
                        dictionnaire, l'expression « Fermer l'application » peut être traduite en espagnol, en français, en allemand, etc.
                    </p>
                    <p class="wdmsg-page__body">
                        Lors d'une traduction avec WDTRAD, le dictionnaire sera parcouru automatiquement et, s'il existe une traduction correspondante, elle sera proposée. Ainsi,
                        vous n'aurez pas à traduire deux fois la même phrase. Ce dictionnaire sera enrichi au fur et à mesure de vos traductions. WDTRAD permet d'importer
                        des mémoires de traduction. Cette fonctionnalité permet d'importer automatiquement des traductions existantes dans le dictionnaire WDTRAD.
                    </p>
                    <p class="wdmsg-page__body wdmsg-page__body--strong">Un véritable gain de temps !</p>
                    <p class="wdmsg-page__body">
                        <a :href="WDINT_PAGE_URL" class="wdmsg-page__text-link" target="_blank" rel="noopener noreferrer">WDINT</a>
                        est inclus dans WDMSG.
                    </p>
                    <p class="wdmsg-page__body">
                        <RouterLink class="wdmsg-page__text-link" to="/software/subscribe">S'abonner</RouterLink>
                    </p>
                </section>
            </div>

            <aside class="wdmsg-page__sidebar glass-frame" aria-label="Liens associés">
                <div class="wdmsg-page__product-boxes">
                    <img
                        :src="productBoxesImageUrl"
                        alt="Boîtes produits WINDEV 2026, WEBDEV 2026 et WINDEV Mobile 2026"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <p class="wdmsg-page__sidebar-text">
                    Votre code WINDEV, vos fenêtres et vos données sont compatibles avec WEBDEV et WINDEV Mobile.
                </p>

                <div class="wdmsg-page__sidebar-block">
                    <h3 class="wdmsg-page__sidebar-title">Présentation de la documentation</h3>
                    <ul class="wdmsg-page__sidebar-list">
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="windevNewFeatures2026En.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Nouveautés"
                            >
                                Nouveautés
                            </a>
                        </li>
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="windevBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WINDEV"
                            >
                                WINDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="webdevBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WEBDEV"
                            >
                                WEBDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="windevMobileBrochureEn.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="WINDEV Mobile"
                            >
                                WINDEV Mobile
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="wdmsg-page__sidebar-block">
                    <h3 class="wdmsg-page__sidebar-title">Schémas de présentation</h3>
                    <ul class="wdmsg-page__sidebar-list">
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="wdmsgOverviewUniversalDatabaseConnectors.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Connecteurs bases de données universels"
                            >
                                Connecteurs bases de données client/serveur
                            </a>
                        </li>
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="wdmsgOverviewCrossPlatformDevelopment.href"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Développement multiplateforme"
                            >
                                Développement multiplateforme
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="wdmsg-page__sidebar-block">
                    <h3 class="wdmsg-page__sidebar-title">Vidéos</h3>
                    <ul class="wdmsg-page__sidebar-list">
                        <li>
                            <a
                                class="wdmsg-page__text-link"
                                :href="WDMSG_TECHNICAL_VIDEOS_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Vidéos techniques"
                            >
                                Vidéos techniques
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="wdmsg-page__customer" aria-label="Références clients">
                    <p class="wdmsg-page__customer-title">Ils utilisent WINDEV</p>
                    <figure class="wdmsg-page__customer-figure">
                        <div class="wdmsg-page__customer-logo-box">
                            <img
                                class="wdmsg-page__customer-logo-img"
                                :src="customerCarouselLogos[currentCustomerLogoIndex]"
                                alt="Logo client WINDEV"
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </figure>
                </div>
            </aside>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import {
    WDINT_PAGE_URL,
    WDMSG_TECHNICAL_VIDEOS_URL,
    webdevBrochureEn,
    windevBrochureEn,
    windevMobileBrochureEn,
    windevNewFeatures2026En,
    wdmsgOverviewCrossPlatformDevelopment,
    wdmsgOverviewUniversalDatabaseConnectors,
} from '../data/wdmsgPageDocuments.js';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages.js';

const suiteCrossPlatform = SHARED_IMAGES.crossPlatform;

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

/** Same banner strip assets as WindevPage / BrandLogoStrip; bound URLs avoid Vite static import. */
const customerCarouselLogos = [
    '/img/bande/1.jpg',
    '/img/bande/2.jpg',
    '/img/bande/3.jpg',
    '/img/bande/4.jpg',
    '/img/bande/5.jpg',
    '/img/bande/6.png',
    '/img/bande/7.jpg',
    '/img/bande/8.jpg',
    '/img/bande/9.jpg',
    '/img/bande/10.svg',
    '/img/bande/11.gif',
    '/img/bande/12.jpg',
    '/img/bande/13.jpg',
    '/img/bande/14.svg',
    '/img/bande/15.png',
];

const currentCustomerLogoIndex = ref(0);
let customerCarouselTimer = null;

onMounted(() => {
    document.title = 'WDMSG : Présentation';
    customerCarouselTimer = window.setInterval(() => {
        currentCustomerLogoIndex.value =
            (currentCustomerLogoIndex.value + 1) % customerCarouselLogos.length;
    }, 2200);
});

onBeforeUnmount(() => {
    if (customerCarouselTimer) {
        window.clearInterval(customerCarouselTimer);
    }
});

/** Public asset; use binding so Vite does not treat `/img/...` as a module import. */
const productBoxesImageUrl =
    '/img/newfeatures/packages-windev-webdev-windev-mobile-2026.png';

const supportedResources = [
    'Messages du projet',
    'Messages des classes du projet',
    'Messages des états du projet',
    'Messages des fenêtres du projet',
    'Titres de fenêtres',
    'Libellés de champs',
    'Messages d\'aide des champs',
    'Infobulles des champs',
    'Titre et texte des fenêtres d\'aide des champs',
    'Contenu des champs (Liste, Combo, Case à cocher et Bouton radio)',
    'Libellés et messages des options de menu',
    'Messages affichés par le programme',
    'Messages d\'attente des états',
    'Caractéristiques RAD des champs saisies dans l\'analyse',
    'Titres du système d\'aide',
    'Copyright du système d\'aide',
    'Mots-clés de l\'index du système d\'aide',
    'Titre et contenu des pages d\'aide',
    'Messages d\'erreur personnalisés lors de la création de l\'exécutable',
];
</script>

<style scoped>
.wdmsg-page {
    color: var(--color-text-primary);
}

.wdmsg-page__alert {
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    padding: 0.45rem 0.75rem;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #ffd400, #ffea66);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.18);
    text-align: center;
}

.wdmsg-page__alert-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #16203a;
    text-decoration: none;
}

.wdmsg-page__alert-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wdmsg-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.wdmsg-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: var(--color-text-primary);
}

.wdmsg-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.wdmsg-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.wdmsg-page__layout {
    margin-top: 1.25rem;
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 320px);
    align-items: start;
}

.wdmsg-page__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.wdmsg-page__title {
    margin: 0 0 0.65rem;
    font-size: clamp(1.35rem, 2.6vw, 1.85rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    line-height: 1.15;
}

.wdmsg-page__lead {
    margin: 0 0 1rem;
    font-size: 0.95rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.wdmsg-page__intro-grid {
    display: grid;
    gap: clamp(1rem, 2vw, 1.25rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 0.95fr);
    align-items: start;
}

.wdmsg-page__intro-copy {
    display: grid;
    gap: 0.75rem;
}

.wdmsg-page__body {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.wdmsg-page__body--strong {
    color: var(--color-text-primary);
    font-weight: 800;
}

.wdmsg-page__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.wdmsg-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wdmsg-page__resources {
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border-subtle);
    background: var(--color-elevated-bg);
    padding: clamp(0.85rem, 1.6vw, 1.1rem);
    color: var(--color-text-primary);
}

.wdmsg-page__resources-title {
    margin: 0 0 0.65rem;
    font-size: 0.95rem;
    font-weight: 900;
    letter-spacing: 0.02em;
    color: var(--color-text-primary);
}

.wdmsg-page__resources-list {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.35rem;
    color: var(--color-text-secondary);
    font-size: 0.86rem;
    line-height: 1.45;
}

.wdmsg-page__divider {
    border: 0;
    border-top: 1px solid var(--color-border-subtle);
    margin: 1.25rem 0;
}

.wdmsg-page__section {
    margin-top: 1.15rem;
}

.wdmsg-page__section-title {
    margin: 0 0 0.65rem;
    font-size: 1.05rem;
    font-weight: 900;
    letter-spacing: 0.02em;
    color: var(--color-brand);
}

.wdmsg-page__ordered {
    margin: 0.35rem 0 0.85rem;
    padding-left: 1.25rem;
    color: var(--color-text-secondary);
    font-size: 0.92rem;
    line-height: 1.65;
    display: grid;
    gap: 0.45rem;
}

.wdmsg-page__bullets {
    margin: 0.55rem 0 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.35rem;
    color: var(--color-text-secondary);
}

.wdmsg-page__accent {
    color: #d92d20;
    font-weight: 800;
}

.wdmsg-page__sidebar {
    padding: clamp(1rem, 2vw, 1.15rem);
    display: grid;
    gap: 0.85rem;
}

.wdmsg-page__sidebar-text {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.wdmsg-page__sidebar-block {
    padding-top: 0.35rem;
    border-top: 1px solid var(--color-border-subtle);
}

.wdmsg-page__sidebar-title {
    margin: 0 0 0.45rem;
    font-size: 0.92rem;
    font-weight: 900;
    color: var(--color-brand);
}

.wdmsg-page__sidebar-list {
    margin: 0;
    padding-left: 1.1rem;
    display: grid;
    gap: 0.35rem;
    font-size: 0.88rem;
    color: var(--color-text-secondary);
}

.wdmsg-page__customer {
    border: 1px solid var(--color-border-subtle);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    background: var(--color-muted-surface);
    text-align: center;
}

.wdmsg-page__customer-title {
    margin: 0 0 0.65rem;
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.wdmsg-page__customer-figure {
    margin: 0;
}

.wdmsg-page__customer-logo-box {
    aspect-ratio: 1 / 1;
    width: 100%;
    max-width: 220px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: clamp(0.65rem, 3vw, 1rem);
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-md);
    background: var(--color-input-bg);
    box-shadow: var(--shadow-glass);
    overflow: hidden;
}

.wdmsg-page__customer-logo-img {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    object-fit: contain;
    object-position: center;
    display: block;
    filter: saturate(1.03) contrast(1.02);
}

.wdmsg-page__product-boxes {
    border-radius: var(--radius-md);
    overflow: hidden;
    background: var(--color-muted-surface);
    border: 1px solid var(--color-border-subtle);
}

.wdmsg-page__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

html.theme-dark .wdmsg-page__resources {
    background: var(--color-input-bg);
    border-color: var(--color-border);
}

html.theme-dark .wdmsg-page__customer,
html.theme-dark .wdmsg-page__product-boxes {
    background: var(--color-input-bg);
    border-color: var(--color-border);
}

@media (max-width: 1100px) {
    .wdmsg-page__layout {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 900px) {
    .wdmsg-page__intro-grid {
        grid-template-columns: 1fr;
    }
}
</style>
