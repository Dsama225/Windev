<template>
    <AppNavbar />
    <main class="clouds-page pb-10">
        <section class="section-shell clouds-page__top-nav" aria-label="Navigation Cloud">
            <div class="glass-frame clouds-page__top-nav-inner">
                <a
                    class="clouds-page__brand-link"
                    :href="PCS_CLOUD_HOME"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Découvrir PCSCloud
                </a>
                <a
                    class="clouds-page__top-link"
                    :href="PCS_CLOUD_FAQ"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    FAQ
                </a>
                <a
                    class="clouds-page__top-link"
                    :href="PCS_CLOUD_GUIDES"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Guides
                </a>
                <a
                    class="clouds-page__top-link"
                    :href="PCS_CLOUD_CONTACT"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact
                </a>
                <a
                    class="clouds-page__dashboard-link"
                    :href="PCS_CLOUD_DASHBOARD"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tableau de bord
                </a>
            </div>
        </section>

        <section class="section-shell clouds-page__hero" aria-labelledby="clouds-hero-title">
            <div class="glass-frame clouds-page__hero-frame">
                <img
                    class="clouds-page__hero-image"
                    :src="cloudsHeroBanner.src"
                    alt=""
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, cloudsHeroBanner.fallback)"
                />
                <div class="clouds-page__hero-overlay" aria-hidden="true"></div>
                <div class="clouds-page__hero-copy">
                    <h1 id="clouds-hero-title" class="clouds-page__hero-title">Solutions CLOUD</h1>
                    <p class="clouds-page__hero-subtitle">pour les applications WINDEV, WEBDEV, WINDEV Mobile et HFSQL</p>
                </div>
            </div>
        </section>

        <section class="section-shell clouds-page__services" aria-label="Services Cloud">
            <div class="clouds-page__services-grid">
                <article v-for="service in services" :key="service.title" class="ui-card clouds-page__service-card">
                    <h2 class="clouds-page__service-title">{{ service.title }}</h2>
                    <div class="clouds-page__service-image">
                        <img
                            :src="service.image.src"
                            :alt="service.imageAlt"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, service.image.fallback)"
                        />
                    </div>
                    <p class="clouds-page__service-description">{{ service.description }}</p>
                    <a
                        class="clouds-page__learn-more"
                        :href="service.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        En savoir plus
                    </a>
                </article>
            </div>
        </section>

        <section class="section-shell clouds-page__about" aria-label="Détails PCSCloud">
            <div class="glass-frame clouds-page__about-layout">
                <div class="clouds-page__about-copy">
                    <p>PCSCloud propose des solutions Cloud optimisées pour les environnements de développement WINDEV, WEBDEV, WINDEV Mobile et pour HFSQL.</p>
                    <p>
                        PCSCloud met à votre disposition une ou plusieurs plateformes évolutives permettant d'utiliser des bases de données HFSQL, des applications et des
                        sites WEBDEV.
                    </p>
                    <p>PCSCloud propose également des plateformes pour virtualiser les projets de développement PC SOFT.</p>
                </div>
                <figure class="clouds-page__about-figure">
                    <img
                        :src="cloudsAboutCloud.src"
                        alt="Nuage jaune stylisé avec des icônes de sécurité, paramètres et analytique."
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, cloudsAboutCloud.fallback)"
                    />
                </figure>
            </div>
        </section>

        <section class="section-shell clouds-page__bottom-links" aria-label="Liens de pied de page Cloud">
            <div class="glass-frame clouds-page__bottom-links-inner">
                <a
                    class="clouds-page__footer-link"
                    :href="PCS_CLOUD_HOME"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Accueil
                </a>
                <a
                    class="clouds-page__footer-link"
                    :href="PCS_CLOUD_CREATE_ACCOUNT"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ouvrir un compte
                </a>
                <a
                    class="clouds-page__footer-link"
                    :href="PCS_CLOUD_DASHBOARD"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Tableau de bord
                </a>
                <a
                    class="clouds-page__footer-link"
                    :href="PCS_CLOUD_GUIDES"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Guides
                </a>
                <a
                    class="clouds-page__footer-link"
                    :href="PCS_CLOUD_CONTACT"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contactez-nous
                </a>
                <a
                    class="clouds-page__footer-link"
                    :href="PCS_CLOUD_LEGAL"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mentions légales
                </a>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import {
    cloudsAboutCloud,
    cloudsHeroBanner,
    cloudsServiceAi,
    cloudsServiceApplications,
    cloudsServiceDevelopment,
    cloudsServiceEmailSending,
    cloudsServiceTelemetry,
    cloudsServiceWebdevCluster,
} from '../data/cloudsPageImages.js';
import {
    PCS_CLOUD_CONTACT,
    PCS_CLOUD_CREATE_ACCOUNT,
    PCS_CLOUD_DASHBOARD,
    PCS_CLOUD_FAQ,
    PCS_CLOUD_GUIDES,
    PCS_CLOUD_HOME,
    PCS_CLOUD_LEGAL,
    PCS_CLOUD_SERVICE_AI,
    PCS_CLOUD_SERVICE_APPLICATIONS,
    PCS_CLOUD_SERVICE_DEVELOPMENT,
    PCS_CLOUD_SERVICE_EMAIL,
    PCS_CLOUD_SERVICE_TELEMETRY,
    PCS_CLOUD_SERVICE_WEBDEV_CLUSTER,
} from '../data/cloudsPageLinks.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

const services = [
    {
        title: 'Applications',
        description: 'Plateforme d\'exploitation (sites WEBDEV, Webservices, bases de données HFSQL, etc.)',
        image: cloudsServiceApplications,
        imageAlt: 'Icône globe représentant la plateforme d\'exploitation.',
        href: PCS_CLOUD_SERVICE_APPLICATIONS,
    },
    {
        title: 'WEBDEV Cluster',
        description: 'Cluster d\'applications WEBDEV (sites WEBDEV et Webservices)',
        image: cloudsServiceWebdevCluster,
        imageAlt: 'Icône de cluster de serveurs pour les applications WEBDEV.',
        href: PCS_CLOUD_SERVICE_WEBDEV_CLUSTER,
    },
    {
        title: 'Développement',
        description: 'Plateforme de développement (GDS Gestionnaire de sources, Centres de contrôle, etc.)',
        image: cloudsServiceDevelopment,
        imageAlt: 'Icône de collaboration d\'équipe pour la plateforme de développement.',
        href: PCS_CLOUD_SERVICE_DEVELOPMENT,
    },
    {
        title: 'Télémétrie',
        description: 'Plateforme de télémétrie',
        image: cloudsServiceTelemetry,
        imageAlt: 'Icône engrenage et graphique pour la plateforme de télémétrie.',
        href: PCS_CLOUD_SERVICE_TELEMETRY,
    },
    {
        title: 'Envoi d\'e-mails',
        description: 'Plateforme d\'envoi d\'e-mails',
        image: cloudsServiceEmailSending,
        imageAlt: 'Icône nuage et enveloppe pour la plateforme d\'envoi d\'e-mails.',
        href: PCS_CLOUD_SERVICE_EMAIL,
    },
    {
        title: 'Service IA',
        description: 'Service IA (embedding de texte)',
        image: cloudsServiceAi,
        imageAlt: 'Icône de code binaire pour le service IA.',
        href: PCS_CLOUD_SERVICE_AI,
    },
];
</script>

<style scoped>
.clouds-page {
    color: var(--color-text-primary);
}

.clouds-page__top-nav {
    margin-top: 0.6rem;
}

.clouds-page__top-nav-inner {
    border: 1px solid #dfe3ea;
    border-radius: 999px;
    background: #fbfcff;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem;
}

.clouds-page__top-link,
.clouds-page__brand-link {
    border-radius: 0.6rem;
    padding: 0.45rem 0.72rem;
    font-size: 0.86rem;
    font-weight: 600;
    text-decoration: none;
    color: #273755;
}

.clouds-page__top-link:hover,
.clouds-page__brand-link:hover {
    background: color-mix(in oklab, var(--color-brand) 12%, transparent);
    color: var(--color-brand);
}

.clouds-page__dashboard-link {
    margin-left: auto;
    border-radius: 999px;
    padding: 0.55rem 0.95rem;
    font-size: 0.85rem;
    font-weight: 700;
    text-decoration: none;
    color: #16203a;
    background: linear-gradient(135deg, #ffd400, #ffea66);
}

.clouds-page__hero {
    margin-top: 0.75rem;
}

.clouds-page__hero-frame {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius-xl);
    min-height: clamp(264px, 72.27vw, 396px);
}

.clouds-page__hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center bottom;
}

.clouds-page__hero-overlay {
    position: absolute;
    inset: 0;
    z-index: 1;
    background: linear-gradient(
        180deg,
        rgba(8, 11, 24, 0.35) 0%,
        rgba(8, 11, 24, 0.5) 50%,
        rgba(8, 11, 24, 0.45) 100%
    );
}

.clouds-page__hero-copy {
    position: absolute;
    inset: 0;
    z-index: 2;
    display: grid;
    place-content: center;
    gap: 0.65rem;
    text-align: center;
    padding: 1rem;
}

.clouds-page__hero-title {
    margin: 0;
    font-size: clamp(2rem, 4vw, 3.1rem);
    line-height: 1;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    font-weight: 900;
    color: #ffd400;
    text-shadow: 0 10px 30px rgba(8, 11, 24, 0.35);
}

.clouds-page__hero-subtitle {
    margin: 0;
    max-width: 23ch;
    font-size: clamp(1.2rem, 2.4vw, 2rem);
    line-height: 1.25;
    font-weight: 800;
    color: #fff;
    text-shadow: 0 10px 30px rgba(8, 11, 24, 0.35);
}

.clouds-page__services {
    margin-top: 1rem;
}

.clouds-page__services-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
}

.clouds-page__service-card {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    padding: 1rem 1rem 0;
    border-radius: var(--radius-md);
}

.clouds-page__service-title {
    margin: 0;
    font-size: 1.12rem;
    text-align: center;
    font-weight: 700;
}

.clouds-page__service-image {
    min-height: 140px;
    display: grid;
    place-items: center;
    padding: 0.5rem 0.75rem;
}

.clouds-page__service-image img {
    width: 120px;
    height: 120px;
    max-width: 100%;
    object-fit: contain;
}

.clouds-page__service-description {
    margin: 0;
    text-align: center;
    color: var(--color-text-secondary);
    font-size: 0.86rem;
    min-height: 2.5em;
}

.clouds-page__learn-more {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: calc(100% + 2rem);
    margin: 0 -1rem;
    padding: 0.66rem 0.9rem;
    font-size: 0.88rem;
    font-weight: 600;
    text-decoration: none;
    color: #fff;
    background: linear-gradient(135deg, var(--color-brand), var(--color-brand-strong));
    border-bottom-left-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
}

.clouds-page__about {
    margin-top: 1rem;
}

.clouds-page__about-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.35fr) minmax(240px, 0.65fr);
    gap: 1.2rem;
    align-items: center;
    padding: 1rem;
}

.clouds-page__about-copy {
    display: grid;
    gap: 0.85rem;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    line-height: 1.65;
}

.clouds-page__about-copy p {
    margin: 0;
}

.clouds-page__about-figure {
    margin: 0;
    display: grid;
    place-items: center;
}

.clouds-page__about-figure img {
    width: 100%;
    max-width: 320px;
    height: auto;
    object-fit: contain;
}

.clouds-page__bottom-links {
    margin-top: 1rem;
}

.clouds-page__bottom-links-inner {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.35rem 0.85rem;
    padding: 0.7rem 1rem;
}

.clouds-page__footer-link {
    font-size: 0.82rem;
    text-decoration: none;
    color: var(--color-text-secondary);
}

.clouds-page__footer-link:hover {
    color: var(--color-brand);
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

@media (max-width: 980px) {
    .clouds-page__services-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 760px) {
    .clouds-page__dashboard-link {
        margin-left: 0;
    }

    .clouds-page__hero-subtitle {
        max-width: 100%;
    }

    .clouds-page__services-grid {
        grid-template-columns: 1fr;
    }

    .clouds-page__about-layout {
        grid-template-columns: 1fr;
    }
}

html.theme-dark .clouds-page__dashboard-link {
    color: #0b1f4d;
}
</style>
