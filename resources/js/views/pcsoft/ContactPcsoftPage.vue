<template>
    <AppNavbar />
    <main class="contact-page pb-10">
        <section class="section-shell contact-page__suite-line" aria-label="Positionnement produit">
            <p class="contact-page__suite-text">Suite de logiciels de développement d'applications multi-plateformes</p>
            <figure class="contact-page__suite-platforms">
                <img
                    :src="suiteCrossPlatform.src"
                    alt="Logiciels intégrés pour le développement d'applications multi-plateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, suiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell contact-page__layout" aria-label="Contacter PC SOFT">
            <div class="contact-page__main glass-frame">
                <header class="contact-page__header">
                    <h1 class="contact-page__title">{{ page.title }}</h1>
                    <p class="contact-page__lead">{{ page.lead }}</p>
                </header>

                <p v-if="page.formNote" class="contact-page__body">{{ page.formNote }}</p>
                <ContactForm />

                <div v-if="page.offices?.length" class="contact-page__offices">
                    <article
                        v-for="office in page.offices"
                        :key="office.name"
                        class="contact-page__office-card"
                    >
                        <h2 class="contact-page__office-title">{{ office.name }}</h2>
                        <p v-for="(line, index) in office.lines" :key="index" class="contact-page__body">
                            {{ line }}
                        </p>
                    </article>
                </div>
            </div>

            <aside class="contact-page__sidebar glass-frame" aria-label="Liens associés">
                <figure class="contact-page__logo-wrap">
                    <img
                        :src="pcsoftLogoUrl"
                        alt="PC SOFT"
                        class="contact-page__logo"
                        loading="lazy"
                        decoding="async"
                    />
                </figure>

                <div class="contact-page__sidebar-block">
                    <h3 class="contact-page__sidebar-title">PC SOFT</h3>
                    <ul class="contact-page__sidebar-list">
                        <li><RouterLink class="contact-page__text-link" to="/pc-soft">À propos de nous</RouterLink></li>
                        <li>
                            <RouterLink class="contact-page__text-link" to="/pc-soft/contact">Formulaire de contact</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="contact-page__text-link" to="/pc-soft/distributors">
                                Distributeurs internationaux
                            </RouterLink>
                        </li>
                        <li><RouterLink class="contact-page__text-link" to="/pc-soft/sitemap">Plan du site</RouterLink></li>
                    </ul>
                </div>
            </aside>
        </section>

        <section
            v-if="page.relatedLinks?.length"
            class="section-shell contact-page__related"
            aria-label="Pages PC SOFT associées"
        >
            <div class="contact-page__related-inner glass-frame">
                <p class="contact-page__related-label">Pages associées</p>
                <nav class="contact-page__related-nav">
                    <template v-for="link in page.relatedLinks" :key="link.to ?? link.href">
                        <RouterLink v-if="link.to" class="contact-page__related-link" :to="link.to">
                            {{ link.label }}
                        </RouterLink>
                        <a
                            v-else
                            class="contact-page__related-link"
                            :href="link.href"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ link.label }}
                        </a>
                    </template>
                </nav>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onMounted, watch } from 'vue';
import AppNavbar from '../../components/AppNavbar.vue';
import AppFooter from '../../components/AppFooter.vue';
import ContactForm from '../../components/ContactForm.vue';
import { getPcsoftPage } from '../../data/pcsoftPages.js';
import { applyImageFallback, SHARED_IMAGES } from '../../utils/pcsoftImages.js';

const page = getPcsoftPage('pcsoft.contact');

if (!page) {
    throw new Error('La configuration de la page Contact est manquante.');
}

const pcsoftLogoUrl = SHARED_IMAGES.pcsoftLogoDark.src;
const suiteCrossPlatform = SHARED_IMAGES.crossPlatform;

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

onMounted(() => {
    if (page.documentTitle) {
        document.title = `${page.documentTitle} | PC SOFT`;
    }
});

watch(
    () => page.documentTitle,
    (title) => {
        if (title) {
            document.title = `${title} | PC SOFT`;
        }
    },
);
</script>

<style scoped>
.contact-page {
    color: var(--color-text-primary);
}

.contact-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.contact-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: var(--color-eyebrow);
}

.contact-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.contact-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.contact-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 280px);
    align-items: start;
}

.contact-page__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.contact-page__title {
    margin: 0;
    font-size: clamp(1.35rem, 2.5vw, 2rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1.15;
}

.contact-page__lead {
    margin: 0.65rem 0 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

.contact-page__body {
    margin: 0 0 0.55rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.contact-page__offices {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: 1px solid var(--color-border);
}

.contact-page__office-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0.85rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border-strong);
    background: var(--color-muted-surface);
    text-align: justify;
    text-justify: inter-word;
    hyphens: auto;
}

.contact-page__office-card .contact-page__body {
    text-align: justify;
    text-align-last: left;
}

.contact-page__office-title {
    margin: 0 0 0.4rem;
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--color-gold);
    text-align: justify;
    text-align-last: left;
}

.contact-page__sidebar {
    padding: clamp(0.85rem, 1.5vw, 1.1rem);
    display: grid;
    gap: 1rem;
    align-content: start;
}

.contact-page__logo {
    display: block;
    width: 100%;
    max-width: 200px;
    height: auto;
}

html.theme-dark .contact-page__logo {
    filter: brightness(0) invert(1);
}

.contact-page__sidebar-title {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.contact-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.3rem;
}

.contact-page__text-link,
.contact-page__related-link {
    color: var(--color-brand);
    font-weight: 700;
    font-size: 0.88rem;
    text-decoration: none;
}

.contact-page__text-link:hover,
.contact-page__related-link:hover {
    text-decoration: underline;
}

.contact-page__related {
    margin-top: 1rem;
}

.contact-page__related-inner {
    padding: 0.85rem 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.65rem;
}

.contact-page__related-label {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-eyebrow);
}

.contact-page__related-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem 1rem;
}

@media (max-width: 900px) {
    .contact-page__layout {
        grid-template-columns: 1fr;
    }

    .contact-page__offices {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 640px) {
    .contact-page__related-inner {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
