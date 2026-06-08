<template>
    <AppNavbar />
    <main class="visuals-page pb-10">
        <section class="section-shell visuals-page__suite-line" aria-label="Positionnement produit">
            <p class="visuals-page__suite-text">Suite de logiciels de développement d'applications multi-plateformes</p>
            <figure class="visuals-page__cross-platform">
                <img
                    :src="crossPlatform.src"
                    alt="Icônes des plateformes : Windows, Java, PHP, HTML5, Linux, Android, iOS et Web."
                    width="520"
                    height="48"
                    loading="lazy"
                    decoding="async"
                    @error="onImageError($event, crossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell visuals-page__content" aria-labelledby="visuals-title">
            <div class="visuals-page__card glass-frame">
                <div class="visuals-page__grid">
                    <article class="visuals-page__main-col">
                        <h1 id="visuals-title" class="visuals-page__title">ÉLÉMENTS VISUELS RÉUTILISABLES</h1>

                        <p class="visuals-page__copy">
                            Cette page propose des éléments visuels (images, logos, animations, etc.) pouvant être réutilisés,
                            sous certaines conditions, dans vos propres applications et sites développés avec les produits PC SOFT
                            (WINDEV et/ou WEBDEV et/ou WINDEV Mobile).
                        </p>

                        <p class="visuals-page__copy visuals-page__copy--important">
                            <strong>IMPORTANT :</strong>
                            Toutes les images et logos affichés sur cette page sont protégés par des droits d'auteur. Veuillez lire les
                            conditions d'utilisation avant de télécharger et d'utiliser un élément.
                        </p>

                        <p class="visuals-page__copy visuals-page__copy--spaced">
                            Pour télécharger un élément visuel, cliquez sur l'une des images ci-dessous :
                        </p>

                        <div class="visuals-page__gallery" role="list" aria-label="Éléments visuels téléchargeables">
                            <div
                                v-for="row in visualRows"
                                :key="row.key"
                                class="visuals-page__gallery-row"
                                :class="`visuals-page__gallery-row--${row.columns}`"
                                role="presentation"
                            >
                                <figure
                                    v-for="item in row.items"
                                    :key="item.file"
                                    class="visuals-page__gallery-item"
                                    role="listitem"
                                >
                                    <a
                                        class="visuals-page__gallery-image-link"
                                        :href="item.downloadUrl"
                                        :download="item.file"
                                        :title="`Télécharger ${item.label}`"
                                    >
                                        <img
                                            :src="item.url"
                                            :alt="item.label"
                                            loading="lazy"
                                            decoding="async"
                                            @error="onImageError($event, item.fallback)"
                                        />
                                    </a>
                                    <figcaption class="visuals-page__gallery-caption">
                                        <a
                                            class="visuals-page__download-link"
                                            :href="item.downloadUrl"
                                            :download="item.file"
                                        >
                                            Télécharger
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <section class="visuals-page__legal" aria-labelledby="trademarks-heading">
                            <h2 id="trademarks-heading" class="visuals-page__section-title">
                                Marques et droits d'auteur
                            </h2>
                            <p class="visuals-page__copy">
                                WINDEV, WEBDEV, WINDEV Mobile et PC SOFT sont des marques déposées de PC SOFT
                                (marques enregistrées en Europe, aux États-Unis, au Canada et dans de nombreux autres pays).
                            </p>
                            <ul class="visuals-page__list">
                                <li>
                                    Lors de la première mention, WINDEV, WEBDEV ou WINDEV Mobile doivent inclure
                                    le symbole ®. Par exemple : WINDEV® (symbole ® en HTML : « &amp;reg; »)
                                </li>
                                <li>
                                    Dans tous les cas, tout site ou application utilisant une ou plusieurs marques de PC SOFT
                                    doit préciser que ces marques sont la propriété de PC SOFT. Par exemple : PC SOFT
                                    et « WINDEV » sont des marques déposées de PC SOFT.
                                </li>
                                <li>
                                    Les noms des produits doivent être écrits comme suit : « WINDEV », « WEBDEV » et
                                    « WINDEV Mobile ».
                                </li>
                            </ul>
                        </section>

                        <section class="visuals-page__legal" aria-labelledby="images-heading">
                            <h2 id="images-heading" class="visuals-page__section-title">Images</h2>
                            <p class="visuals-page__copy">
                                Les images disponibles sur notre site web sont protégées par le droit de la propriété intellectuelle.
                                Ces images sont la propriété de PC SOFT.
                            </p>
                            <p class="visuals-page__copy">
                                Vous pouvez utiliser gratuitement les images fournies sur cette page, sans compensation de la part de
                                PC SOFT, à condition de respecter les directives établies par PC SOFT.
                            </p>
                            <ul class="visuals-page__list">
                                <li>Le nom physique des images ne doit pas être modifié.</li>
                                <li>
                                    Les images ne doivent pas être déformées et doivent conserver leurs proportions d'origine, c'est-à-dire le
                                    rapport « hauteur/largeur ». De nombreux outils graphiques proposent l'option « étiré », qui déforme
                                    l'image. Assurez-vous d'utiliser l'option « homothétique ».
                                </li>
                                <li>La qualité des images doit être préservée.</li>
                                <li>Les tons de couleur ne doivent pas être modifiés.</li>
                                <li>Les polices ne doivent pas être modifiées.</li>
                                <li>Les images ne doivent en aucun cas être modifiées.</li>
                            </ul>
                            <p class="visuals-page__copy">
                                Il n'est pas possible d'utiliser d'autres images (propriété de PC SOFT) que celles disponibles sur
                                cette page sans le consentement écrit de PC SOFT.
                                <a href="#" class="visuals-page__link">Contactez-nous</a>
                                pour plus d'informations.
                            </p>
                        </section>

                        <section class="visuals-page__legal" aria-labelledby="guidelines-heading">
                            <h2 id="guidelines-heading" class="visuals-page__section-title">
                                Directives d'utilisation des marques et des images.
                            </h2>
                            <p class="visuals-page__copy">
                                Ces conditions s'appliquent notamment aux sites web utilisant des marques ou des images appartenant à
                                PC SOFT.
                            </p>

                            <h3 class="visuals-page__subsection-title">Conditions :</h3>
                            <ul class="visuals-page__list">
                                <li>
                                    Le site ne doit pas induire les internautes en erreur : ils doivent savoir qu'ils ne se trouvent pas sur un
                                    site officiel de PC SOFT.
                                </li>
                                <li>
                                    Le site web doit respecter la réglementation française et celle du pays où il a été créé.
                                </li>
                                <li>Les informations présentées sur le site web doivent être claires, vérifiables et exactes.</li>
                            </ul>

                            <h3 class="visuals-page__subsection-title">
                                Les personnes suivantes ne sont pas autorisées à utiliser ces marques et images :
                            </h3>
                            <ul class="visuals-page__list">
                                <li>
                                    Toute personne, entreprise ou organisation dont l'intérêt n'est pas la fourniture d'informations claires,
                                    vérifiables et exactes sur nos logiciels et/ou PC SOFT.
                                </li>
                                <li>
                                    Les concurrents de PC SOFT, et leurs affiliés sous quelque forme que ce soit, et en
                                    particulier les sites dits « associatifs ».
                                </li>
                                <li>Les employés des concurrents de PC SOFT.</li>
                                <li>
                                    Les personnes déjà reconnues coupables d'agir illégalement contre les intérêts
                                    de PC SOFT.
                                </li>
                                <li>
                                    Toute action visant à s'approprier ou à détourner la réputation d'une marque ou d'une image
                                    appartenant à PC SOFT afin de réaliser un profit, de porter atteinte aux intérêts légitimes de
                                    PC SOFT ou de tromper les internautes.
                                </li>
                                <li>Tout site web non autorisé par PC SOFT à utiliser ses images.</li>
                            </ul>

                            <h3 class="visuals-page__subsection-title">
                                Les marques et images peuvent être utilisées, entre autres :
                            </h3>
                            <ul class="visuals-page__list">
                                <li>Sur des sites de commerce électronique.</li>
                                <li>Sur des sites contenant des listes de produits logiciels.</li>
                                <li>
                                    Sur des sites personnels présentant, par exemple, des utilitaires liés aux logiciels PC SOFT,
                                    des astuces, etc.
                                </li>
                                <li>Dans des logiciels ou des progiciels (après consentement écrit de PC SOFT).</li>
                            </ul>

                            <p class="visuals-page__copy">
                                N'hésitez pas à
                                <a href="mailto:info@windev.com" class="visuals-page__link">contacter PC SOFT</a>
                                pour tout renseignement complémentaire.
                            </p>
                        </section>
                    </article>

                    <aside class="visuals-page__side-col" aria-label="Ressources associées">
                        <figure class="visuals-page__packages">
                            <img
                                :src="packagesSuite.src"
                                alt="Boîtes produits WINDEV 2026, WEBDEV 2026 et WINDEV Mobile 2026."
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, packagesSuite.fallback)"
                            />
                        </figure>

                        <p class="visuals-page__side-copy">
                            Les environnements <strong>WINDEV, WEBDEV et WINDEV Mobile</strong> sont compatibles et partagent
                            les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                        </p>

                        <section class="visuals-page__side-group">
                            <h2 class="visuals-page__group-title">Aperçu de la documentation</h2>
                            <ul class="visuals-page__group-list">
                                <li><a href="#" class="visuals-page__link">Nouveautés</a></li>
                                <li><a href="#" class="visuals-page__link">WINDEV</a></li>
                                <li><a href="#" class="visuals-page__link">WEBDEV</a></li>
                                <li><a href="#" class="visuals-page__link">WINDEV Mobile</a></li>
                            </ul>
                        </section>

                        <section class="visuals-page__side-group">
                            <h2 class="visuals-page__group-title">Schémas de synthèse</h2>
                            <ul class="visuals-page__group-list">
                                <li><a href="#" class="visuals-page__link">Connecteurs universels de bases de données</a></li>
                                <li><a href="#" class="visuals-page__link">Développement multi-plateforme</a></li>
                            </ul>
                        </section>

                        <section class="visuals-page__side-group">
                            <h2 class="visuals-page__group-title">Vidéos</h2>
                            <ul class="visuals-page__group-list">
                                <li><a href="#" class="visuals-page__link">Vidéos techniques</a></li>
                            </ul>
                        </section>

                        <section class="visuals-page__customer" aria-label="Références clients">
                            <h2 class="visuals-page__customer-title">Ils utilisent WINDEV</h2>
                            <figure class="visuals-page__customer-figure">
                                <div class="visuals-page__customer-logo-box">
                                    <img
                                        class="visuals-page__customer-logo-img"
                                        :src="customerCarouselLogos[currentCustomerLogoIndex]"
                                        alt="Logo client WINDEV"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                </div>
                            </figure>
                        </section>
                    </aside>
                </div>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import { redistributableVisualRows } from '../data/redistributableVisuals.js';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages.js';

const crossPlatform = SHARED_IMAGES.crossPlatform;
const packagesSuite = SHARED_IMAGES.packagesSuite;
const visualRows = redistributableVisualRows;

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

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
</script>

<style scoped>
.visuals-page {
    color: var(--color-text-primary);
}

.visuals-page__alert {
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    padding: 0.45rem 0.75rem;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #ffd400, #ffea66);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.18);
    text-align: center;
}

.visuals-page__alert-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #16203a;
    text-decoration: none;
}

.visuals-page__alert-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.visuals-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.visuals-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.visuals-page__cross-platform {
    margin: 0;
    display: flex;
    justify-content: center;
}

.visuals-page__cross-platform img {
    display: block;
    width: min(100%, 32rem);
    height: auto;
}

.visuals-page__content {
    margin-top: 0.45rem;
}

.visuals-page__card {
    padding: clamp(1rem, 2vw, 1.45rem);
    border-radius: var(--radius-md);
}

.visuals-page__grid {
    display: grid;
    grid-template-columns: minmax(0, 2.15fr) minmax(0, 1fr);
    gap: clamp(1rem, 2vw, 1.8rem);
}

.visuals-page__title {
    margin: 0 0 0.95rem;
    font-size: clamp(1.05rem, 1.85vw, 1.45rem);
    font-weight: 800;
    line-height: 1.25;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    color: var(--color-text-primary);
}

.visuals-page__copy {
    margin: 0 0 0.65rem;
    color: var(--color-text-primary);
    line-height: 1.55;
    font-size: 0.92rem;
}

.visuals-page__copy--important {
    color: #b42318;
}

.visuals-page__copy--important strong {
    color: #b42318;
}

.visuals-page__copy--spaced {
    margin-bottom: 0.85rem;
}

.visuals-page__gallery {
    display: grid;
    gap: 1.25rem;
    margin-bottom: 1.35rem;
}

.visuals-page__gallery-row {
    display: grid;
    gap: 1rem 1.25rem;
    align-items: start;
}

.visuals-page__gallery-row--4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
}

.visuals-page__gallery-row--2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    max-width: 62%;
}

.visuals-page__gallery-item {
    margin: 0;
    text-align: center;
}

.visuals-page__gallery-image-link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 5.5rem;
    padding: 0.35rem;
    border-radius: var(--radius-md);
    background: color-mix(in oklab, var(--color-surface) 94%, transparent);
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 12%, transparent);
    transition:
        border-color 160ms ease,
        box-shadow 160ms ease;
}

.visuals-page__gallery-image-link:hover {
    border-color: color-mix(in oklab, var(--color-brand) 45%, transparent);
    box-shadow: 0 6px 16px rgba(15, 23, 42, 0.08);
}

.visuals-page__gallery-image-link img {
    display: block;
    max-width: 100%;
    max-height: 4.75rem;
    width: auto;
    height: auto;
    object-fit: contain;
}

.visuals-page__gallery-caption {
    margin: 0.35rem 0 0;
}

.visuals-page__download-link {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--color-brand);
    text-decoration: none;
}

.visuals-page__download-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.visuals-page__section-title {
    margin: 1.1rem 0 0.55rem;
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.3;
    color: var(--color-text-primary);
}

.visuals-page__subsection-title {
    margin: 0.85rem 0 0.4rem;
    font-size: 0.92rem;
    font-weight: 700;
    line-height: 1.35;
    color: var(--color-text-primary);
}

.visuals-page__list {
    margin: 0 0 0.75rem;
    padding-left: 1.2rem;
    display: grid;
    gap: 0.35rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--color-text-primary);
}

.visuals-page__legal {
    margin-bottom: 0.25rem;
}

.visuals-page__link {
    color: var(--color-brand);
    text-decoration: none;
    font-size: 0.9rem;
}

.visuals-page__link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.visuals-page__side-col {
    border-left: 1px solid color-mix(in oklab, var(--color-text-secondary) 15%, transparent);
    padding-left: clamp(0.8rem, 1.6vw, 1.2rem);
}

.visuals-page__packages {
    margin: 0 0 0.75rem;
    display: flex;
    justify-content: center;
    border-radius: var(--radius-md);
    overflow: hidden;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.visuals-page__packages img {
    display: block;
    width: 70%;
    height: auto;
    object-fit: contain;
}

.visuals-page__side-copy {
    margin: 0 0 1rem;
    color: var(--color-text-secondary);
    font-size: 0.88rem;
    line-height: 1.5;
}

.visuals-page__side-group {
    margin-bottom: 1.05rem;
}

.visuals-page__group-title {
    margin: 0 0 0.4rem;
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1.25;
    color: var(--color-text-primary);
}

.visuals-page__group-list {
    margin: 0;
    padding-left: 1rem;
    display: grid;
    gap: 0.2rem;
}

.visuals-page__customer {
    margin-top: 0.25rem;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    text-align: center;
}

.visuals-page__customer-title {
    margin: 0 0 0.65rem;
    font-size: 1.16rem;
    font-weight: 800;
    line-height: 1.2;
}

.visuals-page__customer-figure {
    margin: 0;
}

.visuals-page__customer-logo-box {
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
    box-shadow:
        0 1px 2px rgba(15, 23, 42, 0.05),
        0 8px 18px rgba(15, 23, 42, 0.06);
    overflow: hidden;
}

.visuals-page__customer-logo-img {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    object-fit: contain;
    object-position: center;
    display: block;
    filter: saturate(1.03) contrast(1.02);
}


@media (max-width: 980px) {
    .visuals-page__grid {
        grid-template-columns: 1fr;
    }

    .visuals-page__side-col {
        border-left: 0;
        border-top: 1px solid color-mix(in oklab, var(--color-text-secondary) 15%, transparent);
        padding-left: 0;
        padding-top: 1rem;
    }

    .visuals-page__gallery-row--4 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .visuals-page__gallery-row--2 {
        max-width: none;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 520px) {
    .visuals-page__gallery-row--4,
    .visuals-page__gallery-row--2 {
        grid-template-columns: 1fr;
    }
}
</style>
