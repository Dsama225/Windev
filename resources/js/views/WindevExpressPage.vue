<template>
    <AppNavbar />
    <main class="wexpress-page pb-10">
        <section class="section-shell wexpress-page__suite-line" aria-label="Positionnement produit">
            <p class="wexpress-page__suite-text">Suite de logiciels de développement d'applications multi-plateformes</p>
            <figure class="wexpress-page__cross-platform">
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

        <section class="section-shell wexpress-page__content" aria-labelledby="express-title">
            <div class="wexpress-page__card glass-frame">
                <div class="wexpress-page__grid">
                    <article class="wexpress-page__main-col">
                        <h1 id="express-title" class="wexpress-page__title">WINDEV EXPRESS:</h1>
                        <p class="wexpress-page__subtitle">Gratuit et sans limitation de durée</p>

                        <p class="wexpress-page__copy">
                            Voici les principaux avantages de la version Express :
                        </p>
                        <ul class="wexpress-page__bullets">
                            <li>développement rapide inégalé,</li>
                            <li>fonctionnalités illimitées,</li>
                            <li>intégration totale de votre SI et de votre code source existant,</li>
                            <li>UI et UX de haute qualité.</li>
                        </ul>

                        <p class="wexpress-page__caution">
                            Attention : après avoir essayé la version Express, votre perception du développement sera différente !
                        </p>

                        <div class="wexpress-page__cta-row">
                            <a
                                class="wexpress-page__cta-btn"
                                :href="DOWNLOAD_LINKS.windevExpress"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Télécharger
                            </a>
                            <span class="wexpress-page__cta-note">(gratuit et sans limitation de durée)</span>
                        </div>

                        <section class="wexpress-page__section" aria-labelledby="express-devops">
                            <h2 id="express-devops" class="wexpress-page__section-title">
                                WINDEV est un IDE DevOps professionnel :
                            </h2>
                            <p class="wexpress-page__copy">
                                WINDEV est un environnement de développement intégré puissant,
                            </p>
                        </section>

                        <section class="wexpress-page__section" aria-labelledby="express-limits">
                            <h2 id="express-limits" class="wexpress-page__section-title">
                                Développez vos projets sans limites :
                            </h2>
                            <p class="wexpress-page__copy">
                                Des millions de PC dans le monde exécutent des applications développées avec WINDEV. Certains
                                programmes développés avec WINDEV comptent plus de 200 000 copies distribuées et gèrent des
                                milliards d'euros, des tables avec des millions d'enregistrements, ou des réseaux avec des
                                milliers d'ordinateurs distants en temps réel. Avec WINDEV, vos projets n'ont pas de limites.
                            </p>
                        </section>

                        <section class="wexpress-page__section" aria-labelledby="express-tutorial">
                            <h2 id="express-tutorial" class="wexpress-page__section-title">
                                Suivez le tutoriel pour découvrir WINDEV
                            </h2>
                            <div class="wexpress-page__cta-row">
                                <a href="#" class="wexpress-page__cta-btn">Suivre le tutoriel</a>
                                <span class="wexpress-page__cta-note">(gratuit)</span>
                            </div>
                            <p class="wexpress-page__copy">
                                Utilisez les exemples inclus dans WINDEV pour créer vos premières applications. Le tutoriel a
                                été conçu pour vous apprendre progressivement à développer avec WINDEV.
                            </p>
                            <p class="wexpress-page__copy">En suivant ce tutoriel :</p>
                            <ul class="wexpress-page__bullets">
                                <li>vous découvrirez les principaux concepts expliqués de manière claire,</li>
                                <li>
                                    vous serez également invité à effectuer des opérations qui illustrent les concepts
                                    qui viennent d'être expliqués.
                                </li>
                            </ul>
                        </section>

                        <section class="wexpress-page__section" aria-labelledby="express-links">
                            <h2 id="express-links" class="wexpress-page__section-title">Liens complémentaires :</h2>
                            <ul class="wexpress-page__link-list">
                                <li>
                                    Voir aussi :
                                    <RouterLink class="wexpress-page__link" to="/download/windev-mobile-express">
                                        WINDEV Mobile Express
                                    </RouterLink>
                                </li>
                                <li><a href="#" class="wexpress-page__link">Procédure de désinstallation</a></li>
                                <li>
                                    <a href="#" class="wexpress-page__link">Fonctionnalités spécifiques de la version Express</a>
                                </li>
                            </ul>
                        </section>
                    </article>

                    <aside class="wexpress-page__side-col" aria-label="Ressources associées">
                        <figure class="wexpress-page__packages">
                            <img
                                :src="packagesSuite.src"
                                alt="Boîtes produits WINDEV 2026, WEBDEV 2026 et WINDEV Mobile 2026."
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, packagesSuite.fallback)"
                            />
                        </figure>

                        <p class="wexpress-page__side-copy">
                            Les environnements <strong>WINDEV, WEBDEV et WINDEV Mobile</strong> sont compatibles et partagent
                            les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                        </p>

                        <section class="wexpress-page__side-group">
                            <h2 class="wexpress-page__group-title">Aperçu de la documentation</h2>
                            <ul class="wexpress-page__group-list">
                                <li>
                                    <RouterLink class="wexpress-page__link" to="/software/new-features-2026">
                                        Nouveautés
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="wexpress-page__link" to="/software/windev">WINDEV</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="wexpress-page__link" to="/software/webdev">WEBDEV</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="wexpress-page__link" to="/software/windevmobile">
                                        WINDEV Mobile
                                    </RouterLink>
                                </li>
                            </ul>
                        </section>

                        <section class="wexpress-page__side-group">
                            <h2 class="wexpress-page__group-title">Schémas de synthèse</h2>
                            <ul class="wexpress-page__group-list">
                                <li><a href="#" class="wexpress-page__link">Connecteurs universels de bases de données</a></li>
                                <li><a href="#" class="wexpress-page__link">Développement multi-plateforme</a></li>
                            </ul>
                        </section>

                        <section class="wexpress-page__side-group">
                            <h2 class="wexpress-page__group-title">Vidéos</h2>
                            <ul class="wexpress-page__group-list">
                                <li><a href="#" class="wexpress-page__link">Vidéos techniques</a></li>
                            </ul>
                        </section>

                        <section class="wexpress-page__customer" aria-label="Références clients">
                            <h2 class="wexpress-page__customer-title">Ils utilisent WINDEV</h2>
                            <CustomerLogoCarousel variant="compact" />
                        </section>
                    </aside>
                </div>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { RouterLink } from 'vue-router';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import CustomerLogoCarousel from '../components/CustomerLogoCarousel.vue';
import { applyImageFallback, DOWNLOAD_LINKS, SHARED_IMAGES } from '../utils/pcsoftImages.js';

const crossPlatform = SHARED_IMAGES.crossPlatform;
const packagesSuite = SHARED_IMAGES.packagesSuite;

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.wexpress-page {
    color: var(--color-text-primary);
}

.wexpress-page__alert {
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    padding: 0.45rem 0.75rem;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #ffd400, #ffea66);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.18);
    text-align: center;
}

.wexpress-page__alert-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #16203a;
    text-decoration: none;
}

.wexpress-page__alert-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wexpress-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.wexpress-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.wexpress-page__cross-platform {
    margin: 0;
    display: flex;
    justify-content: center;
}

.wexpress-page__cross-platform img {
    display: block;
    width: min(100%, 32rem);
    height: auto;
}

.wexpress-page__content {
    margin-top: 0.45rem;
}

.wexpress-page__card {
    padding: clamp(1rem, 2vw, 1.45rem);
    border-radius: var(--radius-md);
}

.wexpress-page__grid {
    display: grid;
    grid-template-columns: minmax(0, 2.15fr) minmax(0, 1fr);
    gap: clamp(1rem, 2vw, 1.8rem);
}

.wexpress-page__title {
    margin: 0 0 0.35rem;
    font-size: clamp(1.35rem, 2.2vw, 1.85rem);
    font-weight: 800;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.wexpress-page__subtitle {
    margin: 0 0 0.85rem;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 800;
    line-height: 1.3;
}

.wexpress-page__copy {
    margin: 0 0 0.65rem;
    line-height: 1.55;
    font-size: 0.92rem;
}

.wexpress-page__bullets {
    margin: 0 0 0.85rem;
    padding-left: 1.35rem;
    display: grid;
    gap: 0.2rem;
    font-size: 0.92rem;
    line-height: 1.5;
}

.wexpress-page__caution {
    margin: 0 0 1rem;
    font-style: italic;
    font-size: 0.92rem;
    line-height: 1.5;
    color: var(--color-text-secondary);
}

.wexpress-page__cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.55rem 0.75rem;
    margin-bottom: 1.25rem;
}

.wexpress-page__cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.55rem 1.35rem;
    border-radius: 9999px;
    font-weight: 700;
    font-size: 0.9rem;
    text-decoration: none;
    color: #16203a;
    background: linear-gradient(135deg, #ffd400, #ffea66);
    border: 1px solid color-mix(in oklab, #16203a 12%, transparent);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.2);
}

.wexpress-page__cta-btn:hover {
    transform: translateY(-1px);
}

.wexpress-page__cta-note {
    font-size: 0.82rem;
    font-weight: 600;
    color: #c62828;
}

.wexpress-page__section {
    margin-bottom: 1.1rem;
}

.wexpress-page__section-title {
    margin: 0 0 0.45rem;
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.35;
}

.wexpress-page__link-list {
    margin: 0;
    padding-left: 1.35rem;
    display: grid;
    gap: 0.25rem;
    font-size: 0.92rem;
    line-height: 1.5;
}

.wexpress-page__link {
    color: var(--color-brand);
    text-decoration: none;
}

.wexpress-page__link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wexpress-page__side-col {
    border-left: 1px solid color-mix(in oklab, var(--color-text-secondary) 15%, transparent);
    padding-left: clamp(0.8rem, 1.6vw, 1.2rem);
}

.wexpress-page__packages {
    margin: 0 0 0.75rem;
    display: flex;
    justify-content: center;
    border-radius: var(--radius-md);
    overflow: hidden;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.wexpress-page__packages img {
    display: block;
    width: 70%;
    height: auto;
    object-fit: contain;
}

.wexpress-page__side-copy {
    margin: 0 0 1rem;
    color: var(--color-text-secondary);
    font-size: 0.88rem;
    line-height: 1.5;
}

.wexpress-page__side-group {
    margin-bottom: 1.05rem;
}

.wexpress-page__group-title {
    margin: 0 0 0.4rem;
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1.25;
}

.wexpress-page__group-list {
    margin: 0;
    padding-left: 1rem;
    display: grid;
    gap: 0.2rem;
}

.wexpress-page__customer {
    margin-top: 0.25rem;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    text-align: center;
}

.wexpress-page__customer-title {
    margin: 0 0 0.65rem;
    font-size: 1.16rem;
    font-weight: 800;
    line-height: 1.2;
}

.wexpress-page__customer :deep(.customer-logo-carousel--compact) {
    margin-inline: auto;
}

html.theme-dark .wexpress-page__cta-btn {
    color: #16203a;
}

@media (max-width: 980px) {
    .wexpress-page__grid {
        grid-template-columns: 1fr;
    }

    .wexpress-page__side-col {
        border-left: 0;
        border-top: 1px solid color-mix(in oklab, var(--color-text-secondary) 15%, transparent);
        padding-left: 0;
        padding-top: 1rem;
    }
}
</style>
