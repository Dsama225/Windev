<template>
    <AppNavbar />
    <main class="visuals-page pb-10">
        <section class="section-shell visuals-page__suite-line" aria-label="Product positioning">
            <p class="visuals-page__suite-text">Cross-platform application development software suite</p>
            <figure class="visuals-page__cross-platform">
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

        <section class="section-shell visuals-page__content" aria-labelledby="visuals-title">
            <div class="visuals-page__card glass-frame">
                <div class="visuals-page__grid">
                    <article class="visuals-page__main-col">
                        <h1 id="visuals-title" class="visuals-page__title">REUSABLE VISUAL ELEMENTS</h1>

                        <p class="visuals-page__copy">
                            This page proposes visual elements (images, logos, animations, etc.) that may be reused,
                            under specific conditions, in your own applications and sites developed with PC SOFT products
                            (WINDEV and/or WEBDEV and/or WINDEV Mobile).
                        </p>

                        <p class="visuals-page__copy visuals-page__copy--important">
                            <strong>IMPORTANT:</strong>
                            All images and logos displayed on this page are protected by copyrights. Please read the
                            Conditions of use before downloading and using any element.
                        </p>

                        <p class="visuals-page__copy visuals-page__copy--spaced">
                            To download a visual element, click one of the images below:
                        </p>

                        <div class="visuals-page__gallery" role="list" aria-label="Downloadable visual elements">
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
                                        :title="`Download ${item.label}`"
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
                                            Download
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <section class="visuals-page__legal" aria-labelledby="trademarks-heading">
                            <h2 id="trademarks-heading" class="visuals-page__section-title">
                                Trademarks and copyrights
                            </h2>
                            <p class="visuals-page__copy">
                                WINDEV, WEBDEV, WINDEV Mobile, and PC SOFT are registered trademarks of PC SOFT
                                (trademarks registered in Europe, USA, Canada and many other countries).
                            </p>
                            <ul class="visuals-page__list">
                                <li>
                                    When mentioned for the first time, WINDEV, WEBDEV or WINDEV Mobile must include
                                    the ® symbol. For example: WINDEV® (® symbol in HTML: "&amp;reg;")
                                </li>
                                <li>
                                    In all cases, any site or application that uses one or more trademarks of PC SOFT
                                    must specify that such trademarks are the property of PC SOFT. For example: PC SOFT
                                    and "WINDEV" are registered trademarks of PC SOFT.
                                </li>
                                <li>
                                    The names of the products must be written as follows: "WINDEV", "WEBDEV" and
                                    "WINDEV Mobile".
                                </li>
                            </ul>
                        </section>

                        <section class="visuals-page__legal" aria-labelledby="images-heading">
                            <h2 id="images-heading" class="visuals-page__section-title">Images</h2>
                            <p class="visuals-page__copy">
                                The images available on our website are protected by the intellectual property law.
                                These images are property of PC SOFT.
                            </p>
                            <p class="visuals-page__copy">
                                You may use the images provided on this page, free of charge, without any compensation
                                from PC SOFT, on the condition of following the guidelines established by PC SOFT.
                            </p>
                            <ul class="visuals-page__list">
                                <li>The physical name of the images must not be changed.</li>
                                <li>
                                    Images must not be distorted, and must keep their original proportions, i.e., the
                                    "height/width" ratio. Many graphic tools offer the "stretched" option, which distorts
                                    the image. Make sure you use the "homothetic" option.
                                </li>
                                <li>The quality of the images must be preserved.</li>
                                <li>Color tones must not be changed.</li>
                                <li>Fonts must not be changed.</li>
                                <li>Images must not be modified under any circumstances.</li>
                            </ul>
                            <p class="visuals-page__copy">
                                It is not possible to use other images (property of PC SOFT) than those available on
                                this page without the written consent of PC SOFT.
                                <a href="#" class="visuals-page__link">Contact us</a>
                                for more information.
                            </p>
                        </section>

                        <section class="visuals-page__legal" aria-labelledby="guidelines-heading">
                            <h2 id="guidelines-heading" class="visuals-page__section-title">
                                Guidelines for using trademarks and images.
                            </h2>
                            <p class="visuals-page__copy">
                                These conditions apply in particular to websites that use trademarks or images owned by
                                PC SOFT.
                            </p>

                            <h3 class="visuals-page__subsection-title">Conditions:</h3>
                            <ul class="visuals-page__list">
                                <li>
                                    The site must not be confusing for web users: they must know that they are not on an
                                    official PC SOFT website.
                                </li>
                                <li>
                                    The website must comply with French regulations and those of the country where it
                                    was created.
                                </li>
                                <li>The information presented on the website must be clear, verifiable and accurate.</li>
                            </ul>

                            <h3 class="visuals-page__subsection-title">
                                The following are not allowed to use these trademarks and images:
                            </h3>
                            <ul class="visuals-page__list">
                                <li>
                                    Any person, company or organization, whose interest is not the provision of clear,
                                    verifiable and accurate information about our software and/or PC SOFT.
                                </li>
                                <li>
                                    PC SOFT's competitors, and their affiliates in any form whatsoever, and in
                                    particular the so-called "associative" websites.
                                </li>
                                <li>Employees of PC SOFT's competitors.</li>
                                <li>
                                    People who have already been found guilty of acting illegally against the interests
                                    of PC SOFT.
                                </li>
                                <li>
                                    Any action intended to appropriate or divert the reputation of a trademark or image
                                    owned by PC SOFT in order to make a profit, to harm the legitimate interests of PC
                                    SOFT, or to deceive web users.
                                </li>
                                <li>Any website not authorized by PC SOFT to use its images.</li>
                            </ul>

                            <h3 class="visuals-page__subsection-title">
                                Trademarks and images can be used, among others:
                            </h3>
                            <ul class="visuals-page__list">
                                <li>On e-commerce websites.</li>
                                <li>On websites containing lists of software products.</li>
                                <li>
                                    On personal sites presenting, for example, utilities related to PC SOFT software,
                                    tips and tricks, etc.
                                </li>
                                <li>In software or software packages (after written consent of PC SOFT).</li>
                            </ul>

                            <p class="visuals-page__copy">
                                Do not hesitate to
                                <a href="mailto:info@windev.com" class="visuals-page__link">contact PC SOFT</a>
                                for any further details.
                            </p>
                        </section>
                    </article>

                    <aside class="visuals-page__side-col" aria-label="Related resources">
                        <figure class="visuals-page__packages">
                            <img
                                :src="packagesSuite.src"
                                alt="WINDEV 2026, WEBDEV 2026, and WINDEV Mobile 2026 product boxes."
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, packagesSuite.fallback)"
                            />
                        </figure>

                        <p class="visuals-page__side-copy">
                            The <strong>WINDEV, WEBDEV and WINDEV Mobile</strong> environments are compatible and share
                            project elements. It has never been easier to build multi-target applications.
                        </p>

                        <section class="visuals-page__side-group">
                            <h2 class="visuals-page__group-title">Documentation overview</h2>
                            <ul class="visuals-page__group-list">
                                <li><a href="#" class="visuals-page__link">New features</a></li>
                                <li><a href="#" class="visuals-page__link">WINDEV</a></li>
                                <li><a href="#" class="visuals-page__link">WEBDEV</a></li>
                                <li><a href="#" class="visuals-page__link">WINDEV Mobile</a></li>
                            </ul>
                        </section>

                        <section class="visuals-page__side-group">
                            <h2 class="visuals-page__group-title">Overview diagrams</h2>
                            <ul class="visuals-page__group-list">
                                <li><a href="#" class="visuals-page__link">Universal database connectors</a></li>
                                <li><a href="#" class="visuals-page__link">Cross-platform development</a></li>
                            </ul>
                        </section>

                        <section class="visuals-page__side-group">
                            <h2 class="visuals-page__group-title">Videos</h2>
                            <ul class="visuals-page__group-list">
                                <li><a href="#" class="visuals-page__link">Technical videos</a></li>
                            </ul>
                        </section>

                        <section class="visuals-page__customer" aria-label="Customer references">
                            <h2 class="visuals-page__customer-title">They are using WINDEV</h2>
                            <figure class="visuals-page__customer-figure">
                                <div class="visuals-page__customer-logo-box">
                                    <img
                                        class="visuals-page__customer-logo-img"
                                        :src="customerCarouselLogos[currentCustomerLogoIndex]"
                                        alt="WINDEV customer logo"
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
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 28%, transparent);
    border-radius: var(--radius-md);
    background: #fff;
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

:global(.theme-dark) .visuals-page__customer-logo-box {
    border-color: color-mix(in oklab, var(--color-brand) 22%, var(--color-surface-border));
    background: color-mix(in oklab, #ffffff 94%, #c5d8ff 6%);
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
