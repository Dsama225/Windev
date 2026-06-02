<template>
    <AppNavbar />
    <main v-if="page" class="training-page pb-10">
        <section class="training-page__suite-line section-shell" aria-label="Product positioning">
            <p class="training-page__suite-text">Cross-platform application development software suite</p>
            <div class="training-page__os-row" aria-hidden="true">
                <span v-for="n in 7" :key="n" class="training-page__os-dot" />
            </div>
        </section>

        <section class="training-page__hero section-shell" aria-labelledby="training-title">
            <div class="training-page__hero-card glass-frame">
                <p v-if="page.hero.eyebrow" class="training-page__eyebrow">{{ page.hero.eyebrow }}</p>
                <h1 id="training-title" class="training-page__title">{{ page.hero.title }}</h1>
                <p v-if="page.hero.subtitle" class="training-page__subtitle">{{ page.hero.subtitle }}</p>
                <p v-if="page.lead" class="training-page__lead">{{ page.lead }}</p>
            </div>
        </section>

        <section
            v-if="page.sections?.length"
            class="training-page__content section-shell"
            aria-label="Training details"
        >
            <div class="training-page__main glass-frame">
                <section
                    v-for="section in page.sections"
                    :key="section.id"
                    class="training-page__section"
                    :aria-labelledby="section.title ? 'training-section-' + section.id : undefined"
                >
                    <h2
                        v-if="section.title"
                        :id="'training-section-' + section.id"
                        class="training-page__section-title"
                    >
                        {{ section.title }}
                    </h2>
                    <p
                        v-for="(paragraph, index) in section.paragraphs ?? []"
                        :key="index"
                        class="training-page__body"
                    >
                        {{ paragraph }}
                    </p>
                    <p v-if="section.links?.length" class="training-page__inline-links">
                        <template v-for="(link, index) in section.links" :key="link.href ?? link.to">
                            <RouterLink
                                v-if="link.to"
                                class="training-page__text-link"
                                :to="link.to"
                            >
                                {{ link.label }}
                            </RouterLink>
                            <a
                                v-else
                                class="training-page__text-link"
                                :href="link.href"
                                :target="link.href?.startsWith('http') ? '_blank' : undefined"
                                :rel="link.href?.startsWith('http') ? 'noopener noreferrer' : undefined"
                            >
                                {{ link.label }}
                            </a>
                            <span v-if="index < section.links.length - 1"> · </span>
                        </template>
                    </p>
                </section>

                <section
                    v-if="page.seminarTracks?.length"
                    class="training-page__section"
                    aria-labelledby="training-seminars-title"
                >
                    <h2 id="training-seminars-title" class="training-page__section-title">
                        Training sessions proposed by PC SOFT
                    </h2>
                    <div class="training-page__tracks">
                        <article
                            v-for="track in page.seminarTracks"
                            :key="track.id"
                            class="training-page__track"
                        >
                            <h3 class="training-page__track-title">{{ track.title }}</h3>
                            <ul class="training-page__seminar-list">
                                <li v-for="seminar in track.seminars" :key="seminar.name + seminar.level">
                                    <strong>{{ seminar.name }}</strong>
                                    <span class="training-page__seminar-meta">
                                        {{ seminar.level }} · {{ seminar.duration }}
                                    </span>
                                </li>
                            </ul>
                            <ul v-if="track.packages?.length" class="training-page__package-list">
                                <li v-for="pkg in track.packages" :key="pkg">{{ pkg }}</li>
                            </ul>
                            <p class="training-page__track-note">
                                The content of the training session can be fully customized.
                            </p>
                        </article>
                    </div>
                </section>

                <section
                    v-if="page.levels?.length"
                    class="training-page__section"
                    aria-labelledby="training-levels-title"
                >
                    <h2 id="training-levels-title" class="training-page__section-title">Training levels explained</h2>
                    <div class="training-page__levels">
                        <article v-for="level in page.levels" :key="level.title" class="training-page__level-card">
                            <h3 class="training-page__level-title">{{ level.title }}</h3>
                            <p class="training-page__body">{{ level.description }}</p>
                        </article>
                    </div>
                </section>

                <p v-if="page.customization" class="training-page__body training-page__body--emphasis">
                    {{ page.customization }}
                </p>

                <aside v-if="page.contact" class="training-page__contact" aria-label="Training contact">
                    <h2 class="training-page__section-title">{{ page.contact.title }}</h2>
                    <p v-for="(line, index) in page.contact.lines" :key="index" class="training-page__body">
                        <a
                            v-if="line.includes('@')"
                            class="training-page__text-link"
                            :href="'mailto:' + line"
                        >
                            {{ line }}
                        </a>
                        <template v-else>{{ line }}</template>
                    </p>
                </aside>
            </div>
        </section>

        <section
            v-if="page.relatedLinks?.length"
            class="training-page__related section-shell"
            aria-label="Related training links"
        >
            <div class="training-page__related-inner glass-frame">
                <p class="training-page__related-label">Related pages</p>
                <nav class="training-page__related-nav">
                    <RouterLink
                        v-for="link in page.relatedLinks"
                        :key="link.to"
                        class="training-page__related-link"
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
import { getTrainingPage } from '../data/trainingPages.js';

const route = useRoute();
const page = computed(() => getTrainingPage(route.name));

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
.training-page {
    color: var(--color-text-primary);
}

.training-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.training-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.training-page__os-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
}

.training-page__os-dot {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 9999px;
    border: 2px solid #d6dce7;
    background: #f4f6fa;
}

.training-page__hero-card {
    padding: clamp(1rem, 2vw, 1.35rem);
    text-align: center;
}

.training-page__eyebrow {
    margin: 0 0 0.4rem;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.training-page__title {
    margin: 0;
    font-size: clamp(1.35rem, 2.5vw, 2rem);
    font-weight: 900;
    letter-spacing: 0.04em;
    line-height: 1.15;
}

.training-page__subtitle {
    margin: 0.55rem 0 0;
    font-size: 0.92rem;
    font-weight: 600;
    color: #42526d;
}

.training-page__lead {
    margin: 0.85rem auto 0;
    max-width: 52rem;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

.training-page__content {
    margin-top: 1rem;
}

.training-page__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.training-page__section + .training-page__section {
    margin-top: 1.25rem;
    padding-top: 1.1rem;
    border-top: 1px solid var(--color-border);
}

.training-page__section-title {
    margin: 0 0 0.55rem;
    font-size: 1.05rem;
    font-weight: 800;
}

.training-page__body {
    margin: 0 0 0.55rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.training-page__body--emphasis {
    font-weight: 600;
    color: var(--color-text-primary);
}

.training-page__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.training-page__text-link:hover {
    text-decoration: underline;
}

.training-page__tracks {
    display: grid;
    gap: 1rem;
    margin-top: 0.65rem;
}

.training-page__track {
    padding: 0.85rem;
    border-radius: var(--radius-md);
    border: 1px solid #dbe1ec;
    background: #fafbfd;
}

.training-page__track-title {
    margin: 0 0 0.5rem;
    font-size: 0.95rem;
    font-weight: 800;
}

.training-page__seminar-list,
.training-page__package-list {
    margin: 0;
    padding-left: 1.1rem;
    font-size: 0.88rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.training-page__seminar-list li + li,
.training-page__package-list li + li {
    margin-top: 0.25rem;
}

.training-page__seminar-meta {
    display: block;
    font-size: 0.8rem;
    color: #5f6f8c;
}

.training-page__package-list {
    margin-top: 0.55rem;
}

.training-page__track-note {
    margin: 0.55rem 0 0;
    font-size: 0.82rem;
    font-style: italic;
    color: #5f6f8c;
}

.training-page__levels {
    display: grid;
    gap: 0.65rem;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
}

.training-page__level-card {
    padding: 0.75rem;
    border-radius: var(--radius-md);
    border: 1px solid #e3e9f2;
    background: #fff;
}

.training-page__level-title {
    margin: 0 0 0.35rem;
    font-size: 0.88rem;
    font-weight: 800;
}

.training-page__contact {
    margin-top: 1.25rem;
    padding-top: 1.1rem;
    border-top: 1px solid var(--color-border);
}

.training-page__related {
    margin-top: 1rem;
}

.training-page__related-inner {
    padding: 0.85rem 1rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.65rem;
}

.training-page__related-label {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.training-page__related-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem 1rem;
}

.training-page__related-link {
    color: var(--color-brand);
    font-weight: 700;
    font-size: 0.88rem;
    text-decoration: none;
}

.training-page__related-link:hover {
    text-decoration: underline;
}

@media (max-width: 640px) {
    .training-page__related-inner {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
