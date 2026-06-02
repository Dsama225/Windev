<template>
    <AppNavbar />
    <main v-if="page" class="support-page pb-10">
        <section class="section-shell support-page__suite-line" aria-label="Product positioning">
            <p class="support-page__suite-text">
                <strong>Cross-platform</strong> application development software suite
            </p>
            <figure class="support-page__cross-platform">
                <img
                    :src="crossPlatform.src"
                    alt="Platform icons: Windows, Java, PHP, HTML5, Linux, Android, iOS, and Web."
                    width="520"
                    height="48"
                    loading="lazy"
                    decoding="async"
                    @error="onImageError($event, crossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell support-page__hero" aria-labelledby="support-title">
            <div class="support-page__hero-card glass-frame">
                <p v-if="page.hero.eyebrow" class="support-page__eyebrow">{{ page.hero.eyebrow }}</p>
                <h1 id="support-title" class="support-page__title">{{ page.hero.title }}</h1>
                <p v-if="page.hero.subtitle" class="support-page__subtitle">{{ page.hero.subtitle }}</p>
                <p v-if="page.lead" class="support-page__lead">{{ page.lead }}</p>
                <ul v-if="page.bullets?.length" class="support-page__bullets">
                    <li v-for="(item, index) in page.bullets" :key="index">{{ item }}</li>
                </ul>
            </div>
        </section>

        <section
            v-if="page.heroImage"
            class="section-shell support-page__media"
            aria-label="Page illustration"
        >
            <figure class="support-page__hero-figure glass-frame">
                <img
                    :src="page.heroImage.src"
                    :alt="page.heroImage.alt"
                    loading="lazy"
                    decoding="async"
                    @error="onImageError($event, page.heroImage.fallback)"
                />
            </figure>
        </section>

        <template v-if="page.resourceGroups?.length">
            <section
                v-for="group in page.resourceGroups"
                :key="group.title"
                class="section-shell support-page__resources"
                :aria-label="group.title"
            >
                <h2 class="support-page__group-title">{{ group.title }}</h2>
                <div class="support-page__resources-grid">
                    <article
                        v-for="resource in group.links"
                        :key="resource.title"
                        class="support-page__resource-card glass-frame"
                    >
                        <figure v-if="resource.image" class="support-page__resource-figure">
                            <img
                                :src="resource.image.src"
                                :alt="resource.title"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, resource.image.fallback)"
                            />
                        </figure>
                        <h3 class="support-page__resource-title">{{ resource.title }}</h3>
                        <p class="support-page__resource-copy">{{ resource.description }}</p>
                        <RouterLink
                            v-if="resource.to"
                            class="support-page__resource-link"
                            :to="resource.to"
                        >
                            Open
                        </RouterLink>
                        <a
                            v-else
                            class="support-page__resource-link"
                            :href="resource.href"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Open
                        </a>
                    </article>
                </div>
            </section>
        </template>

        <section
            v-else-if="page.resourceLinks?.length"
            class="section-shell support-page__resources"
            aria-label="Useful resources"
        >
            <div class="support-page__resources-grid">
                <article
                    v-for="resource in page.resourceLinks"
                    :key="resource.title"
                    class="support-page__resource-card glass-frame"
                >
                    <figure v-if="resource.image" class="support-page__resource-figure">
                        <img
                            :src="resource.image.src"
                            :alt="resource.title"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, resource.image.fallback)"
                        />
                    </figure>
                    <h2 class="support-page__resource-title">{{ resource.title }}</h2>
                    <p class="support-page__resource-copy">{{ resource.description }}</p>
                    <RouterLink
                        v-if="resource.to"
                        class="support-page__resource-link"
                        :to="resource.to"
                    >
                        Open
                    </RouterLink>
                    <a
                        v-else
                        class="support-page__resource-link"
                        :href="resource.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Open
                    </a>
                </article>
            </div>
        </section>

        <section
            v-if="page.sections?.length"
            class="section-shell support-page__content"
            aria-label="Support details"
        >
            <div class="support-page__main glass-frame">
                <section
                    v-for="section in page.sections"
                    :key="section.id"
                    class="support-page__section"
                    :aria-labelledby="'support-section-' + section.id"
                >
                    <h2
                        v-if="section.title"
                        :id="'support-section-' + section.id"
                        class="support-page__section-title"
                    >
                        {{ section.title }}
                    </h2>
                    <p
                        v-for="(paragraph, index) in section.paragraphs ?? []"
                        :key="index"
                        class="support-page__body"
                    >
                        {{ paragraph }}
                    </p>
                    <ul v-if="section.list?.length" class="support-page__list">
                        <li v-for="(item, index) in section.list" :key="index">{{ item }}</li>
                    </ul>
                    <p v-if="section.links?.length" class="support-page__inline-links">
                        <template v-for="(link, index) in section.links" :key="link.to">
                            <RouterLink class="support-page__text-link" :to="link.to">{{ link.label }}</RouterLink>
                            <span v-if="index < section.links.length - 1"> · </span>
                        </template>
                    </p>
                </section>

                <section
                    v-if="page.comparison"
                    class="support-page__section"
                    aria-labelledby="support-comparison-title"
                >
                    <h2 id="support-comparison-title" class="support-page__section-title">
                        {{ page.comparison.title }}
                    </h2>
                    <div class="support-page__table-wrap">
                        <table class="support-page__table">
                            <thead>
                                <tr>
                                    <th scope="col">Feature</th>
                                    <th scope="col">{{ page.comparison.legend.da }}</th>
                                    <th scope="col">{{ page.comparison.legend.ts }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in page.comparison.rows" :key="row.feature">
                                    <th scope="row">{{ row.feature }}</th>
                                    <td>{{ row.da ? 'Yes' : 'No' }}</td>
                                    <td>{{ row.ts ? 'Yes' : 'No' }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <p v-if="page.closing" class="support-page__closing">{{ page.closing }}</p>

                <aside v-if="page.pricing" class="support-page__pricing" aria-label="Consulting pricing">
                    <h2 class="support-page__section-title">{{ page.pricing.title }}</h2>
                    <ul class="support-page__list">
                        <li v-for="(item, index) in page.pricing.items" :key="index">{{ item }}</li>
                    </ul>
                    <p class="support-page__body">{{ page.pricing.quoteLabel }}</p>
                </aside>

                <p v-if="page.note" class="support-page__note">{{ page.note }}</p>
            </div>
        </section>

        <section
            v-if="page.relatedLinks?.length"
            class="section-shell support-page__related"
            aria-label="Other support services"
        >
            <div class="support-page__related-inner glass-frame">
                <p class="support-page__related-label">Other support services</p>
                <nav class="support-page__related-nav">
                    <RouterLink
                        v-for="link in page.relatedLinks"
                        :key="link.to"
                        class="support-page__related-link"
                        :to="link.to"
                    >
                        {{ link.label }}
                    </RouterLink>
                </nav>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppNavbar from './AppNavbar.vue';
import AppFooter from './AppFooter.vue';
import { getSupportPage } from '../data/supportPages.js';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages.js';

const crossPlatform = SHARED_IMAGES.crossPlatform;

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

const route = useRoute();
const page = computed(() => getSupportPage(route.name));

watch(
    page,
    (value) => {
        if (value?.documentTitle) {
            document.title = `${value.documentTitle} | PC SOFT`;
        }
    },
    { immediate: true },
);
</script>

<style scoped>
.support-page {
    color: var(--color-text-primary);
}

.support-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.support-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.support-page__cross-platform {
    margin: 0.5rem auto 0;
    max-width: 32rem;
}

.support-page__cross-platform img {
    display: block;
    width: 100%;
    height: auto;
}

.support-page__hero-card {
    padding: clamp(1rem, 2vw, 1.35rem);
    text-align: center;
}

.support-page__eyebrow {
    margin: 0 0 0.4rem;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.support-page__title {
    margin: 0;
    font-size: clamp(1.35rem, 2.5vw, 2rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1.15;
}

.support-page__subtitle {
    margin: 0.55rem 0 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #42526d;
}

.support-page__lead {
    margin: 0.85rem auto 0;
    max-width: 52rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

.support-page__bullets {
    margin: 0.85rem auto 0;
    max-width: 36rem;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
    text-align: left;
    font-size: 0.9rem;
    color: var(--color-text-secondary);
}

.support-page__bullets li::before {
    content: '• ';
    color: var(--color-brand);
    font-weight: 700;
}

.support-page__media {
    margin-top: 0.85rem;
}

.support-page__hero-figure {
    margin: 0;
    padding: 0.5rem;
    overflow: hidden;
}

.support-page__hero-figure img {
    display: block;
    width: 100%;
    max-height: 22rem;
    object-fit: cover;
    border-radius: var(--radius-md);
}

.support-page__content {
    margin-top: 1rem;
}

.support-page__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.support-page__section + .support-page__section {
    margin-top: 1.25rem;
    padding-top: 1.1rem;
    border-top: 1px solid var(--color-border);
}

.support-page__section-title {
    margin: 0 0 0.55rem;
    font-size: 1.05rem;
    font-weight: 800;
}

.support-page__body {
    margin: 0 0 0.55rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.support-page__body:last-child {
    margin-bottom: 0;
}

.support-page__list {
    margin: 0.35rem 0 0.55rem;
    padding-left: 1.2rem;
    font-size: 0.9rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.support-page__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.support-page__text-link:hover {
    text-decoration: underline;
}

.support-page__table-wrap {
    overflow-x: auto;
    margin-top: 0.5rem;
}

.support-page__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.82rem;
}

.support-page__table th,
.support-page__table td {
    border: 1px solid #dbe1ec;
    padding: 0.45rem 0.55rem;
    text-align: left;
}

.support-page__table thead th {
    background: color-mix(in oklab, var(--color-surface) 90%, transparent);
    font-weight: 800;
}

.support-page__table tbody th {
    font-weight: 600;
    color: #1f304f;
}

.support-page__closing {
    margin: 1rem 0 0;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.support-page__pricing {
    margin-top: 1.25rem;
    padding-top: 1.1rem;
    border-top: 1px solid var(--color-border);
}

.support-page__note {
    margin: 1rem 0 0;
    font-size: 0.82rem;
    font-style: italic;
    color: #5f6f8c;
}

.support-page__resources {
    margin-top: 1rem;
}

.support-page__group-title {
    margin: 0 0 0.75rem;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.support-page__resources-grid {
    display: grid;
    gap: 0.85rem;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.support-page__resource-card {
    padding: 1rem;
    display: grid;
    gap: 0.45rem;
    align-content: start;
}

.support-page__resource-figure {
    margin: 0;
    text-align: center;
}

.support-page__resource-figure img {
    display: block;
    width: 100%;
    max-height: 5.5rem;
    margin-inline: auto;
    object-fit: contain;
}

.support-page__resource-title {
    margin: 0;
    font-size: 1rem;
    font-weight: 800;
}

.support-page__resource-copy {
    margin: 0;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.support-page__resource-link {
    display: inline-flex;
    margin-top: 0.25rem;
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.support-page__resource-link:hover {
    text-decoration: underline;
}

.support-page__related {
    margin-top: 1rem;
}

.support-page__related-inner {
    padding: 0.85rem 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.65rem;
}

.support-page__related-label {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.support-page__related-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem 1rem;
}

.support-page__related-link {
    color: var(--color-brand);
    font-weight: 700;
    font-size: 0.88rem;
    text-decoration: none;
}

.support-page__related-link:hover {
    text-decoration: underline;
}

@media (max-width: 640px) {
    .support-page__related-inner {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
