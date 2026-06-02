<template>
    <AppNavbar />
    <main v-if="page" class="pcsoft-page pb-10">
        <section class="section-shell pcsoft-page__suite-line" aria-label="Product positioning">
            <p class="pcsoft-page__suite-text">Cross-platform application development software suite</p>
            <div class="pcsoft-page__os-row" aria-hidden="true">
                <span v-for="n in 7" :key="n" class="pcsoft-page__os-dot" />
            </div>
        </section>

        <section class="section-shell pcsoft-page__layout" :aria-label="page.title">
            <div class="pcsoft-page__main glass-frame">
                <header class="pcsoft-page__header">
                    <h1 class="pcsoft-page__title">{{ page.title }}</h1>
                    <p v-if="page.lead" class="pcsoft-page__lead">{{ page.lead }}</p>
                </header>

                <template v-if="page.sections?.length">
                    <section
                        v-for="(section, index) in page.sections"
                        :key="index"
                        class="pcsoft-page__section"
                    >
                        <p
                            v-for="(paragraph, pIndex) in section.paragraphs"
                            :key="pIndex"
                            class="pcsoft-page__body"
                        >
                            {{ paragraph }}
                        </p>
                    </section>
                </template>

                <template v-if="page.offices?.length">
                    <div class="pcsoft-page__offices">
                        <article
                            v-for="office in page.offices"
                            :key="office.name"
                            class="pcsoft-page__office-card"
                        >
                            <h2 class="pcsoft-page__office-title">{{ office.name }}</h2>
                            <p v-for="(line, index) in office.lines" :key="index" class="pcsoft-page__body">
                                {{ line }}
                            </p>
                        </article>
                    </div>
                    <p v-if="page.formNote" class="pcsoft-page__body">{{ page.formNote }}</p>
                    <p class="pcsoft-page__cta">
                        <a
                            class="pcsoft-page__cta-link"
                            :href="page.formUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ page.formLabel }}
                        </a>
                    </p>
                </template>

                <section
                    v-if="isDistributors"
                    class="pcsoft-page__distributors"
                    aria-label="Distributors by region"
                >
                    <div class="pcsoft-page__distributors-grid">
                        <section
                            v-for="region in distributorRegions"
                            :key="region.region"
                            class="pcsoft-page__region"
                        >
                            <h2 class="pcsoft-page__region-title">{{ region.region }}</h2>
                            <ul class="pcsoft-page__country-list">
                                <li v-for="country in region.countries" :key="country.label + country.href">
                                    <a
                                        class="pcsoft-page__country-link"
                                        :href="country.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {{ country.label }}
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>

                <section v-if="isSitemap" class="pcsoft-page__sitemap" aria-label="Site map links">
                    <div
                        v-for="group in sitemapGroups"
                        :key="group.label"
                        class="pcsoft-page__sitemap-group"
                    >
                        <h2 class="pcsoft-page__sitemap-group-title">{{ group.label }}</h2>
                        <ul class="pcsoft-page__sitemap-list">
                            <li v-for="item in group.items" :key="item.path">
                                <RouterLink class="pcsoft-page__text-link" :to="item.path">
                                    {{ item.title }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>

            <aside class="pcsoft-page__sidebar glass-frame" aria-label="Related links">
                <figure class="pcsoft-page__logo-wrap">
                    <img
                        :src="pcsoftLogoUrl"
                        alt="PC SOFT"
                        class="pcsoft-page__logo"
                        loading="lazy"
                        decoding="async"
                    />
                </figure>

                <div class="pcsoft-page__sidebar-block">
                    <h3 class="pcsoft-page__sidebar-title">PC SOFT</h3>
                    <ul class="pcsoft-page__sidebar-list">
                        <li><RouterLink class="pcsoft-page__text-link" to="/pc-soft">About us</RouterLink></li>
                        <li>
                            <a
                                class="pcsoft-page__text-link"
                                href="https://pcsoft.fr/fr-fr/contact"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact form
                            </a>
                        </li>
                        <li>
                            <RouterLink class="pcsoft-page__text-link" to="/pc-soft/distributors">
                                International distributors
                            </RouterLink>
                        </li>
                        <li><RouterLink class="pcsoft-page__text-link" to="/pc-soft/sitemap">Site map</RouterLink></li>
                    </ul>
                </div>

                <div class="pcsoft-page__sidebar-block">
                    <h3 class="pcsoft-page__sidebar-title">Useful links</h3>
                    <ul class="pcsoft-page__sidebar-list">
                        <li>
                            <a
                                class="pcsoft-page__text-link"
                                href="https://windev.com/pcsoft/request/request-a-quote.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Request a quote
                            </a>
                        </li>
                        <li>
                            <a
                                class="pcsoft-page__text-link"
                                href="https://windev.com/pcsoft/environmental-policy.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Environmental policy
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </section>

        <section
            v-if="page.relatedLinks?.length"
            class="section-shell pcsoft-page__related"
            aria-label="Related PC SOFT pages"
        >
            <div class="pcsoft-page__related-inner glass-frame">
                <p class="pcsoft-page__related-label">Related pages</p>
                <nav class="pcsoft-page__related-nav">
                    <template v-for="link in page.relatedLinks" :key="link.to ?? link.href">
                        <RouterLink
                            v-if="link.to"
                            class="pcsoft-page__related-link"
                            :to="link.to"
                        >
                            {{ link.label }}
                        </RouterLink>
                        <a
                            v-else
                            class="pcsoft-page__related-link"
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
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import AppNavbar from './AppNavbar.vue';
import AppFooter from './AppFooter.vue';
import { getPcsoftPage } from '../data/pcsoftPages.js';
import distributorRegions from '../data/distributorRegions.json';
import { PUBLIC_SITE_PAGES as publicSitePages } from '../data/publicSitePages.js';

const route = useRoute();
const page = computed(() => getPcsoftPage(route.name));
const isDistributors = computed(() => route.name === 'pcsoft.distributors');
const isSitemap = computed(() => route.name === 'pcsoft.sitemap');

const pcsoftLogoUrl = new URL('../../../public/pcsoft/LOGO_PCSOFT_Dark.svg', import.meta.url).href;

const sitemapGroupLabels = {
    home: 'Home',
    workspace: 'Workspace',
    product: 'Software',
    publication: 'Publications',
    connector: 'Native connectors',
    subscribe: 'Subscribe',
    download: 'Download',
    support: 'Technical support',
    training: 'Training',
    pcsoft: 'PC SOFT',
};

const sitemapGroups = computed(() => {
    const groups = new Map();
    for (const entry of publicSitePages) {
        const label = sitemapGroupLabels[entry.page_type] ?? entry.page_type;
        if (!groups.has(label)) {
            groups.set(label, []);
        }
        groups.get(label).push({ title: entry.title, path: entry.path });
    }
    return [...groups.entries()].map(([label, items]) => ({ label, items }));
});

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
.pcsoft-page {
    color: var(--color-text-primary);
}

.pcsoft-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.pcsoft-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.pcsoft-page__os-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
}

.pcsoft-page__os-dot {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 9999px;
    border: 2px solid #d6dce7;
    background: #f4f6fa;
}

.pcsoft-page__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 280px);
    align-items: start;
}

.pcsoft-page__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.pcsoft-page__title {
    margin: 0;
    font-size: clamp(1.35rem, 2.5vw, 2rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1.15;
}

.pcsoft-page__lead {
    margin: 0.65rem 0 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

.pcsoft-page__section + .pcsoft-page__section {
    margin-top: 0.85rem;
    padding-top: 0.85rem;
    border-top: 1px solid var(--color-border);
}

.pcsoft-page__body {
    margin: 0 0 0.55rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.pcsoft-page__offices {
    display: grid;
    gap: 0.85rem;
    margin-top: 0.75rem;
}

.pcsoft-page__office-card {
    padding: 0.85rem;
    border-radius: var(--radius-md);
    border: 1px solid #dbe1ec;
    background: #fafbfd;
}

.pcsoft-page__office-title {
    margin: 0 0 0.4rem;
    font-size: 0.95rem;
    font-weight: 800;
    color: #c9a000;
}

.pcsoft-page__cta {
    margin: 0.75rem 0 0;
}

.pcsoft-page__cta-link {
    display: inline-flex;
    padding: 0.55rem 1rem;
    border-radius: var(--radius-md);
    background: linear-gradient(180deg, #ffe566 0%, #f5d020 100%);
    border: 1px solid #e8c820;
    color: #1a2744;
    font-weight: 800;
    font-size: 0.88rem;
    text-decoration: none;
}

.pcsoft-page__cta-link:hover {
    filter: brightness(1.03);
}

.pcsoft-page__distributors {
    margin-top: 0.5rem;
}

.pcsoft-page__distributors-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.pcsoft-page__region {
    border: 1px solid #dbe1ec;
    border-radius: var(--radius-md);
    overflow: hidden;
}

.pcsoft-page__region-title {
    margin: 0;
    padding: 0.45rem 0.65rem;
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-align: center;
    text-transform: uppercase;
    background: linear-gradient(180deg, #ffe566 0%, #f5d020 100%);
    color: #1a2744;
}

.pcsoft-page__country-list {
    margin: 0;
    padding: 0.55rem 0.75rem;
    list-style: none;
    columns: 2;
    column-gap: 1rem;
    font-size: 0.86rem;
    line-height: 1.55;
}

.pcsoft-page__country-list li {
    break-inside: avoid;
    margin-bottom: 0.2rem;
}

.pcsoft-page__country-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.pcsoft-page__country-link:hover {
    text-decoration: underline;
}

.pcsoft-page__sitemap {
    margin-top: 0.75rem;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
}

.pcsoft-page__sitemap-group-title {
    margin: 0 0 0.4rem;
    font-size: 0.88rem;
    font-weight: 800;
    color: #c9a000;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.pcsoft-page__sitemap-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.25rem;
}

.pcsoft-page__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
    font-size: 0.88rem;
}

.pcsoft-page__text-link:hover {
    text-decoration: underline;
}

.pcsoft-page__sidebar {
    padding: clamp(0.85rem, 1.5vw, 1.1rem);
    display: grid;
    gap: 1rem;
    align-content: start;
}

.pcsoft-page__logo {
    display: block;
    width: 100%;
    max-width: 200px;
    height: auto;
}

.pcsoft-page__sidebar-title {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.pcsoft-page__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.3rem;
}

.pcsoft-page__related {
    margin-top: 1rem;
}

.pcsoft-page__related-inner {
    padding: 0.85rem 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.65rem;
}

.pcsoft-page__related-label {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.pcsoft-page__related-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem 1rem;
}

.pcsoft-page__related-link {
    color: var(--color-brand);
    font-weight: 700;
    font-size: 0.88rem;
    text-decoration: none;
}

.pcsoft-page__related-link:hover {
    text-decoration: underline;
}

@media (max-width: 900px) {
    .pcsoft-page__layout {
        grid-template-columns: 1fr;
    }

    .pcsoft-page__country-list {
        columns: 1;
    }
}

@media (max-width: 640px) {
    .pcsoft-page__related-inner {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
