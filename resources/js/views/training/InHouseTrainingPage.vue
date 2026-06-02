<template>
    <AppNavbar />
    <main class="in-house-training pb-10">
        <section class="section-shell in-house-training__suite-line" aria-label="Product positioning">
            <p class="in-house-training__suite-text">Cross-platform application development software suite</p>
            <div class="in-house-training__os-row" aria-hidden="true">
                <span v-for="n in 7" :key="n" class="in-house-training__os-dot" />
            </div>
        </section>

        <section class="section-shell in-house-training__layout" aria-label="In-house training">
            <div class="in-house-training__main glass-frame">
                <header class="in-house-training__header">
                    <h1 class="in-house-training__title">{{ content.title }}</h1>
                    <p class="in-house-training__subtitle">{{ content.subtitle }}</p>
                </header>

                <aside class="in-house-training__callout" aria-label="Trainer quality">
                    <span class="in-house-training__callout-icon" aria-hidden="true">★</span>
                    <p class="in-house-training__callout-text">{{ content.callout }}</p>
                </aside>

                <div class="in-house-training__intro">
                    <p v-for="(paragraph, index) in content.intro" :key="index" class="in-house-training__body">
                        {{ paragraph }}
                    </p>
                </div>

                <section class="in-house-training__seminars" aria-labelledby="seminars-title">
                    <h2 id="seminars-title" class="in-house-training__section-title">
                        {{ content.seminarsTitle }}
                    </h2>
                    <TrainingSeminarTrack
                        v-for="track in tracks"
                        :key="track.id"
                        :track="track"
                        :hint="content.hoverHint"
                        :customize-note="content.customizeNote"
                        :packages-label="content.packagesLabel"
                        :quote-label="content.quoteLabel"
                        :quote-url="content.quoteUrl"
                    />
                </section>

                <section class="in-house-training__levels" aria-labelledby="levels-title">
                    <h2 id="levels-title" class="in-house-training__section-title">{{ content.levelsTitle }}</h2>
                    <div class="in-house-training__level-chart" aria-hidden="true">
                        <div
                            v-for="level in levels"
                            :key="level.id"
                            class="in-house-training__level-bar-wrap"
                        >
                            <div
                                class="in-house-training__level-bar"
                                :style="{ height: level.barHeight + 'px', background: level.barColor }"
                            />
                            <span class="in-house-training__level-bar-label">{{ level.barLabel }}</span>
                        </div>
                    </div>
                    <div class="in-house-training__level-copy">
                        <article v-for="level in levels" :key="'copy-' + level.id" class="in-house-training__level-item">
                            <h3 class="in-house-training__level-title">{{ level.title }}</h3>
                            <p class="in-house-training__body">{{ level.description }}</p>
                        </article>
                    </div>
                </section>

                <section class="in-house-training__custom-block" aria-labelledby="custom-title">
                    <h2 id="custom-title" class="in-house-training__section-title">
                        {{ content.customizationTitle }}
                    </h2>
                    <p class="in-house-training__body">{{ content.customizationBody }}</p>
                    <p class="in-house-training__quote">
                        <a
                            :href="content.quoteUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="in-house-training__text-link"
                        >
                            {{ content.quoteLabel }}
                        </a>
                    </p>
                </section>

                <section class="in-house-training__extra" aria-labelledby="extra-title">
                    <h2 id="extra-title" class="in-house-training__section-title">
                        {{ content.additionalInfoTitle }}
                    </h2>
                    <p class="in-house-training__quote">
                        <a
                            :href="content.quoteUrl"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="in-house-training__text-link"
                        >
                            {{ content.quoteLabel }}
                        </a>
                    </p>
                </section>

                <section class="in-house-training__contact" aria-labelledby="contact-title">
                    <h2 id="contact-title" class="in-house-training__section-title">{{ content.contactTitle }}</h2>
                    <p v-for="(line, index) in content.contactLines" :key="index" class="in-house-training__body">
                        <a
                            v-if="line.includes('@')"
                            class="in-house-training__text-link"
                            :href="'mailto:' + line"
                        >
                            {{ line }}
                        </a>
                        <template v-else>{{ line }}</template>
                    </p>
                </section>
            </div>

            <aside class="in-house-training__sidebar glass-frame" aria-label="Related links">
                <figure class="in-house-training__product-boxes">
                    <img
                        :src="packagesImageUrl"
                        alt="WINDEV 2026, WEBDEV 2026, and WINDEV Mobile 2026 product boxes"
                        loading="lazy"
                        decoding="async"
                    />
                </figure>
                <p class="in-house-training__sidebar-text">
                    The <strong>WINDEV, WEBDEV and WINDEV Mobile</strong> environments share the same language: WLanguage.
                </p>

                <div class="in-house-training__sidebar-block">
                    <h3 class="in-house-training__sidebar-title">Program member area login</h3>
                    <a href="#" class="in-house-training__text-link">Log in</a>
                </div>

                <div class="in-house-training__sidebar-block">
                    <h3 class="in-house-training__sidebar-title">Documentation overview</h3>
                    <ul class="in-house-training__sidebar-list">
                        <li>
                            <RouterLink class="in-house-training__text-link" to="/software/new-features-2026">
                                New features
                            </RouterLink>
                        </li>
                        <li><RouterLink class="in-house-training__text-link" to="/software/windev">WINDEV</RouterLink></li>
                        <li><RouterLink class="in-house-training__text-link" to="/software/webdev">WEBDEV</RouterLink></li>
                        <li>
                            <RouterLink class="in-house-training__text-link" to="/software/windevmobile">
                                WINDEV Mobile
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="in-house-training__customer" aria-label="Customer references">
                    <p class="in-house-training__customer-title">They are using WINDEV</p>
                    <figure class="in-house-training__customer-figure">
                        <div class="in-house-training__customer-logo-box">
                            <img
                                class="in-house-training__customer-logo-img"
                                :src="customerCarouselLogos[currentCustomerLogoIndex]"
                                alt="WINDEV customer logo"
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
import AppNavbar from '../../components/AppNavbar.vue';
import AppFooter from '../../components/AppFooter.vue';
import TrainingSeminarTrack from '../../components/training/TrainingSeminarTrack.vue';
import {
    inHouseTrainingContent,
    inHouseSeminarTracks,
    inHouseTrainingLevels,
} from '../../data/inHouseSeminars.js';

const content = inHouseTrainingContent;
const tracks = inHouseSeminarTracks;
const levels = inHouseTrainingLevels;
const packagesImageUrl = '/img/wlangarge/packages-windev-webdev-windev-mobile-2026.webp';

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
    document.title = 'In-house training | PC SOFT';
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
.in-house-training {
    color: var(--color-text-primary);
}

.in-house-training__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.in-house-training__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.in-house-training__os-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.45rem;
}

.in-house-training__os-dot {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 9999px;
    border: 2px solid #d6dce7;
    background: #f4f6fa;
}

.in-house-training__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.35rem);
    grid-template-columns: minmax(0, 1fr) minmax(0, 280px);
    align-items: start;
}

.in-house-training__main {
    padding: clamp(1rem, 2vw, 1.35rem);
}

.in-house-training__header {
    margin-bottom: 0.85rem;
}

.in-house-training__title {
    margin: 0;
    font-size: clamp(1.5rem, 2.8vw, 2.1rem);
    font-weight: 900;
    letter-spacing: 0.02em;
    line-height: 1.1;
}

.in-house-training__subtitle {
    margin: 0.35rem 0 0;
    font-size: 0.95rem;
    font-weight: 600;
    color: #42526d;
}

.in-house-training__callout {
    display: flex;
    align-items: flex-start;
    gap: 0.65rem;
    margin-bottom: 1rem;
    padding: 0.75rem 0.85rem;
    border-radius: 0.35rem;
    background: linear-gradient(180deg, #fff8c8 0%, #ffe566 100%);
    border: 1px solid #e8c820;
}

.in-house-training__callout-icon {
    flex-shrink: 0;
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background: #fff;
    font-size: 0.9rem;
    color: #c9a000;
}

.in-house-training__callout-text {
    margin: 0;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1.5;
    color: #1a2744;
}

.in-house-training__body {
    margin: 0 0 0.55rem;
    font-size: 0.9rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.in-house-training__section-title {
    margin: 1.25rem 0 0.75rem;
    font-size: 1.05rem;
    font-weight: 800;
    color: #c9a000;
}

.in-house-training__seminars {
    margin-top: 0.5rem;
}

.in-house-training__level-chart {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 1.25rem;
    min-height: 110px;
    margin: 0.5rem 0 1rem;
    padding: 0.5rem 0;
}

.in-house-training__level-bar-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
}

.in-house-training__level-bar {
    width: 3.25rem;
    border-radius: 0.2rem 0.2rem 0 0;
    border: 1px solid rgba(0, 0, 0, 0.08);
}

.in-house-training__level-bar-label {
    font-size: 0.72rem;
    font-weight: 700;
    color: #5f6f8c;
}

.in-house-training__level-copy {
    display: grid;
    gap: 0.85rem;
}

.in-house-training__level-title {
    margin: 0 0 0.25rem;
    font-size: 0.92rem;
    font-weight: 800;
}

.in-house-training__quote {
    margin: 0.5rem 0 0;
    text-align: right;
    font-size: 0.88rem;
}

.in-house-training__text-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.in-house-training__text-link:hover {
    text-decoration: underline;
}

.in-house-training__sidebar {
    padding: clamp(0.85rem, 1.5vw, 1.1rem);
    display: grid;
    gap: 1rem;
    align-content: start;
}

.in-house-training__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.in-house-training__sidebar-text {
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.6;
    color: var(--color-text-secondary);
}

.in-house-training__sidebar-block {
    display: grid;
    gap: 0.35rem;
}

.in-house-training__sidebar-title {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.in-house-training__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.3rem;
}

.in-house-training__customer-title {
    margin: 0 0 0.5rem;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #5f6f8c;
}

.in-house-training__customer-figure {
    margin: 0;
}

.in-house-training__customer-logo-box {
    min-height: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--color-border);
    background: #fff;
}

.in-house-training__customer-logo-img {
    max-width: 100%;
    max-height: 3rem;
    object-fit: contain;
}

@media (max-width: 900px) {
    .in-house-training__layout {
        grid-template-columns: 1fr;
    }
}
</style>
