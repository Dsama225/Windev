<template>
    <article class="mediasoft-banner" aria-labelledby="mediasoft-partner-title">
        <div class="mediasoft-banner__layout">
            <aside class="mediasoft-banner__brand" aria-label="Mediasoft Lafayette">
                <div class="mediasoft-banner__strip" aria-hidden="true" />
                <figure class="mediasoft-banner__logo-box">
                    <img
                        class="mediasoft-banner__logo"
                        :src="mediasoftPartnerLogo"
                        alt="Logo Mediasoft Lafayette"
                        width="231"
                        height="272"
                        loading="eager"
                        decoding="async"
                    />
                </figure>
            </aside>

            <div class="mediasoft-banner__main">
                <header class="mediasoft-banner__header">
                    <p class="mediasoft-banner__eyebrow">{{ content.eyebrow }}</p>
                    <h2 id="mediasoft-partner-title" class="mediasoft-banner__title">{{ content.title }}</h2>
                    <p class="mediasoft-banner__tagline">{{ content.tagline }}</p>
                </header>

                <p class="mediasoft-banner__lead">{{ content.lead }}</p>

                <ul class="mediasoft-banner__highlights" aria-label="Points forts">
                    <li v-for="item in content.highlights" :key="item">{{ item }}</li>
                </ul>

                <address class="mediasoft-banner__contact not-italic">
                    <span class="mediasoft-banner__address">{{ content.contact.address }}</span>
                    <span class="mediasoft-banner__contact-links">
                        <a :href="`tel:${content.contact.phone.replace(/\s/g, '')}`">{{ content.contact.phone }}</a>
                        <a :href="`mailto:${content.contact.email}`">{{ content.contact.email }}</a>
                        <a
                            :href="content.links.website.href"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ content.links.website.label }}
                        </a>
                        <a
                            :href="content.links.windevCi.href"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {{ content.links.windevCi.label }}
                        </a>
                    </span>
                </address>

                <p class="mediasoft-banner__actions">
                    <RouterLink class="mediasoft-banner__btn" :to="content.links.contact.to">
                        {{ content.links.contact.label }}
                    </RouterLink>
                </p>
            </div>
        </div>
    </article>
</template>

<script setup>
import { mediasoftPartnerContent, mediasoftPartnerLogo } from '../data/mediasoftPartnerContent.js';

const content = mediasoftPartnerContent;
</script>

<style scoped>
.mediasoft-banner {
    --ml-navy: #002d62;
    --ml-grey: #808080;
    overflow: hidden;
    border-radius: 1.35rem;
    background: #fff;
    border: 1px solid color-mix(in oklab, var(--ml-navy) 18%, #d1d5db);
    box-shadow: var(--shadow-glass);
}

.mediasoft-banner__layout {
    display: flex;
    align-items: stretch;
    min-height: 12rem;
}

.mediasoft-banner__brand {
    position: relative;
    flex: 0 0 clamp(8.5rem, 18vw, 11.5rem);
    min-width: 8.5rem;
}

.mediasoft-banner__strip {
    position: absolute;
    inset: 0 auto 0 0;
    width: 42%;
    background: var(--ml-navy);
}

.mediasoft-banner__logo-box {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.55rem;
    margin: clamp(0.85rem, 2vw, 1.15rem) clamp(0.5rem, 1.5vw, 0.85rem) clamp(0.85rem, 2vw, 1.15rem)
        clamp(0.35rem, 1vw, 0.55rem);
    transform: translateY(30%);
    padding: clamp(0.65rem, 1.5vw, 0.9rem);
    background: #fff;
    box-shadow: 0 2px 10px color-mix(in oklab, var(--ml-navy) 12%, transparent);
}

.mediasoft-banner__logo {
    display: block;
    width: min(100%, 7.5rem);
    height: auto;
}

.mediasoft-banner__main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.65rem;
    min-width: 0;
    padding: clamp(0.9rem, 2.2vw, 1.35rem) clamp(0.9rem, 2.5vw, 1.5rem) clamp(0.9rem, 2.2vw, 1.35rem)
        clamp(0.35rem, 1vw, 0.65rem);
    background: #fff;
}

.mediasoft-banner__eyebrow {
    margin: 0 0 0.25rem;
    font-size: clamp(0.62rem, 1.4vw, 0.72rem);
    font-weight: 700;
    line-height: 1.35;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--ml-navy);
}

.mediasoft-banner__title {
    margin: 0;
    font-size: clamp(1rem, 2vw, 1.25rem);
    font-weight: 900;
    line-height: 1.2;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: var(--ml-navy);
}

.mediasoft-banner__tagline {
    margin: 0.15rem 0 0;
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--ml-grey);
}

.mediasoft-banner__lead {
    margin: 0;
    font-size: clamp(0.82rem, 1.6vw, 0.92rem);
    line-height: 1.55;
    color: #1a1a1a;
}

.mediasoft-banner__highlights {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.85rem;
    margin: 0;
    padding: 0.55rem clamp(0.75rem, 2vw, 1rem);
    list-style: none;
    background: var(--ml-navy);
    font-size: clamp(0.72rem, 1.4vw, 0.82rem);
    font-weight: 700;
    line-height: 1.4;
    color: #fff;
}

.mediasoft-banner__highlights li {
    position: relative;
    padding-left: 0.95rem;
}

.mediasoft-banner__highlights li::before {
    content: '●';
    position: absolute;
    left: 0;
    top: 0;
    font-size: 0.55em;
    line-height: 2.2;
    color: rgba(255, 255, 255, 0.9);
}

.mediasoft-banner__contact {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    margin: 0;
    font-size: clamp(0.78rem, 1.4vw, 0.86rem);
    line-height: 1.5;
    color: #333;
}

.mediasoft-banner__address {
    color: #333;
}

.mediasoft-banner__contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.2rem 1rem;
}

.mediasoft-banner__contact a {
    color: var(--ml-navy);
    font-weight: 700;
    text-decoration: none;
}

.mediasoft-banner__contact a:hover {
    text-decoration: underline;
}

.mediasoft-banner__actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 0.55rem;
    margin: 0.15rem 0 0;
}

.mediasoft-banner__btn {
    display: inline-flex;
    align-items: center;
    padding: 0.45rem 1.35rem;
    border-radius: 25px;
    border: 1.5px solid var(--ml-navy);
    background: #fff;
    color: var(--ml-navy);
    font-size: 0.82rem;
    font-weight: 800;
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
}

.mediasoft-banner__btn:hover {
    background: color-mix(in oklab, var(--ml-navy) 8%, #fff);
}

html.theme-dark .mediasoft-banner {
    background: var(--color-input-bg);
    border-color: color-mix(in oklab, #5ea2ff 28%, var(--color-border-strong));
}

html.theme-dark .mediasoft-banner__logo-box,
html.theme-dark .mediasoft-banner__main {
    background: var(--color-input-bg);
}

html.theme-dark .mediasoft-banner__lead,
html.theme-dark .mediasoft-banner__address {
    color: var(--color-text-secondary);
}

html.theme-dark .mediasoft-banner__eyebrow,
html.theme-dark .mediasoft-banner__title {
    color: color-mix(in oklab, #5ea2ff 75%, white);
}

html.theme-dark .mediasoft-banner__contact a,
html.theme-dark .mediasoft-banner__btn {
    color: color-mix(in oklab, #5ea2ff 80%, white);
    border-color: color-mix(in oklab, #5ea2ff 55%, var(--color-border-strong));
}

html.theme-dark .mediasoft-banner__btn {
    background: transparent;
}

@media (max-width: 720px) {
    .mediasoft-banner__layout {
        flex-direction: column;
    }

    .mediasoft-banner__brand {
        flex: none;
        display: flex;
        align-items: stretch;
        min-height: auto;
    }

    .mediasoft-banner__strip {
        width: 28%;
    }

    .mediasoft-banner__logo-box {
        flex: 1;
        justify-content: center;
        margin: 0.75rem;
    }

    .mediasoft-banner__logo {
        width: min(5.5rem, 32vw);
    }

    .mediasoft-banner__main {
        padding: 0 0.9rem 1rem;
    }

    .mediasoft-banner__highlights {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.3rem;
    }

    .mediasoft-banner__actions {
        justify-content: center;
    }
}
</style>
