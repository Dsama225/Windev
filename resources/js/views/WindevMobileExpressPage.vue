<template>
    <AppNavbar />
    <main class="wmexpress-page pb-10">
        <section class="section-shell wmexpress-page__suite-line" aria-label="Product positioning">
            <p class="wmexpress-page__suite-text">Cross-platform application development software suite</p>
            <figure class="wmexpress-page__cross-platform">
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

        <section class="section-shell wmexpress-page__content" aria-labelledby="mobile-express-title">
            <div class="wmexpress-page__card glass-frame">
                <div class="wmexpress-page__grid">
                    <article class="wmexpress-page__main-col">
                        <h1 id="mobile-express-title" class="wmexpress-page__title">WINDEV MOBILE EXPRESS:</h1>
                        <p class="wmexpress-page__subtitle">Free and time-unlimited</p>

                        <p class="wmexpress-page__copy">
                            These are the main advantages of the Express version:
                        </p>
                        <ul class="wmexpress-page__bullets">
                            <li>unparalleled quick development,</li>
                            <li>limitless functionalities,</li>
                            <li>total integration of your IS and existing source code,</li>
                            <li>high quality UI &amp; UX,</li>
                            <li>one single language (WLanguage) for Windows, Android and iOS&reg;,</li>
                            <li>
                                total openness: possibility to use external resources written in Java, .Net and
                                Objective C&reg;.
                            </li>
                        </ul>

                        <p class="wmexpress-page__caution">
                            Caution: after trying the Express version, your perception of development will be different!
                        </p>

                        <div class="wmexpress-page__cta-row">
                            <a
                                class="wmexpress-page__cta-btn"
                                :href="DOWNLOAD_LINKS.windevMobileExpress"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download
                            </a>
                            <span class="wmexpress-page__cta-note">(free and time-unlimited)</span>
                        </div>

                        <section class="wmexpress-page__section" aria-labelledby="mobile-express-devops">
                            <h2 id="mobile-express-devops" class="wmexpress-page__section-title">
                                WINDEV Mobile is a professional DevOps IDE:
                            </h2>
                            <ul class="wmexpress-page__bullets">
                                <li>WINDEV Mobile was awarded as the &quot;Most productive language on the market&quot;,</li>
                                <li>WINDEV Mobile is a powerful Integrated Development Environment,</li>
                                <li>Total support for Android &trade;, iOS &reg;, UWP.</li>
                            </ul>
                        </section>

                        <section class="wmexpress-page__section" aria-labelledby="mobile-express-limits">
                            <h2 id="mobile-express-limits" class="wmexpress-page__section-title">
                                Develop your projects without limits:
                            </h2>
                            <p class="wmexpress-page__copy">
                                WINDEV Mobile allows you to create stand-alone applications for mobile devices. You can
                                develop order management applications, delivery tracking applications, applications with
                                data replication via Wi-Fi, 3G, 4G, 5G, GPRS, EDGE, UMTS, HSDPA, Bluetooth, etc.
                            </p>
                        </section>

                        <section class="wmexpress-page__section" aria-labelledby="mobile-express-tutorial">
                            <h2 id="mobile-express-tutorial" class="wmexpress-page__section-title">
                                Follow the tutorial to discover WINDEV Mobile
                            </h2>
                            <div class="wmexpress-page__cta-row">
                                <a href="#" class="wmexpress-page__cta-btn">Follow tutorial</a>
                                <span class="wmexpress-page__cta-note">(free)</span>
                            </div>
                            <p class="wmexpress-page__copy">
                                Use the examples included in WINDEV Mobile to create your first applications. The
                                tutorial was designed to progressively teach you how to develop on WINDEV Mobile.
                            </p>
                        </section>

                        <section class="wmexpress-page__section" aria-labelledby="mobile-express-links">
                            <h2 id="mobile-express-links" class="wmexpress-page__section-title">Additional links:</h2>
                            <ul class="wmexpress-page__link-list">
                                <li>
                                    See also:
                                    <RouterLink class="wmexpress-page__link" to="/download/windev-express">
                                        WINDEV Express
                                    </RouterLink>
                                </li>
                                <li><a href="#" class="wmexpress-page__link">Uninstall procedure</a></li>
                                <li>
                                    <a href="#" class="wmexpress-page__link">Specific features of the Express version</a>
                                </li>
                            </ul>
                        </section>
                    </article>

                    <aside class="wmexpress-page__side-col" aria-label="Related resources">
                        <figure class="wmexpress-page__packages">
                            <img
                                :src="packagesSuite.src"
                                alt="WINDEV 2026, WEBDEV 2026, and WINDEV Mobile 2026 product boxes."
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, packagesSuite.fallback)"
                            />
                        </figure>

                        <p class="wmexpress-page__side-copy">
                            The <strong>WINDEV, WEBDEV and WINDEV Mobile</strong> environments are compatible and share
                            project elements. It has never been easier to build multi-target applications.
                        </p>

                        <section class="wmexpress-page__side-group">
                            <h2 class="wmexpress-page__group-title">Documentation overview</h2>
                            <ul class="wmexpress-page__group-list">
                                <li>
                                    <RouterLink class="wmexpress-page__link" to="/software/new-features-2026">
                                        New features
                                    </RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="wmexpress-page__link" to="/software/windev">WINDEV</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="wmexpress-page__link" to="/software/webdev">WEBDEV</RouterLink>
                                </li>
                                <li>
                                    <RouterLink class="wmexpress-page__link" to="/software/windevmobile">
                                        WINDEV Mobile
                                    </RouterLink>
                                </li>
                            </ul>
                        </section>

                        <section class="wmexpress-page__side-group">
                            <h2 class="wmexpress-page__group-title">Overview diagrams</h2>
                            <ul class="wmexpress-page__group-list">
                                <li><a href="#" class="wmexpress-page__link">Universal database connectors</a></li>
                                <li><a href="#" class="wmexpress-page__link">Cross-platform development</a></li>
                            </ul>
                        </section>

                        <section class="wmexpress-page__side-group">
                            <h2 class="wmexpress-page__group-title">Videos</h2>
                            <ul class="wmexpress-page__group-list">
                                <li><a href="#" class="wmexpress-page__link">Technical videos</a></li>
                            </ul>
                        </section>

                        <section class="wmexpress-page__customer" aria-label="Customer references">
                            <h2 class="wmexpress-page__customer-title">They are using WINDEV</h2>
                            <figure class="wmexpress-page__customer-figure">
                                <div class="wmexpress-page__customer-logo-box">
                                    <img
                                        class="wmexpress-page__customer-logo-img"
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
import { RouterLink } from 'vue-router';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import { applyImageFallback, DOWNLOAD_LINKS, SHARED_IMAGES } from '../utils/pcsoftImages.js';

const crossPlatform = SHARED_IMAGES.crossPlatform;
const packagesSuite = SHARED_IMAGES.packagesSuite;

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
.wmexpress-page {
    color: var(--color-text-primary);
}

.wmexpress-page__alert {
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    padding: 0.45rem 0.75rem;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #ffd400, #ffea66);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.18);
    text-align: center;
}

.wmexpress-page__alert-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #16203a;
    text-decoration: none;
}

.wmexpress-page__alert-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wmexpress-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.wmexpress-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.wmexpress-page__cross-platform {
    margin: 0;
    display: flex;
    justify-content: center;
}

.wmexpress-page__cross-platform img {
    display: block;
    width: min(100%, 32rem);
    height: auto;
}

.wmexpress-page__content {
    margin-top: 0.45rem;
}

.wmexpress-page__card {
    padding: clamp(1rem, 2vw, 1.45rem);
    border-radius: var(--radius-md);
}

.wmexpress-page__grid {
    display: grid;
    grid-template-columns: minmax(0, 2.15fr) minmax(0, 1fr);
    gap: clamp(1rem, 2vw, 1.8rem);
}

.wmexpress-page__title {
    margin: 0 0 0.35rem;
    font-size: clamp(1.2rem, 2vw, 1.75rem);
    font-weight: 800;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

.wmexpress-page__subtitle {
    margin: 0 0 0.85rem;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 800;
    line-height: 1.3;
    color: var(--color-text-secondary);
}

.wmexpress-page__copy {
    margin: 0 0 0.65rem;
    line-height: 1.55;
    font-size: 0.92rem;
}

.wmexpress-page__bullets {
    margin: 0 0 0.85rem;
    padding-left: 1.35rem;
    display: grid;
    gap: 0.2rem;
    font-size: 0.92rem;
    line-height: 1.5;
}

.wmexpress-page__caution {
    margin: 0 0 1rem;
    font-style: italic;
    font-size: 0.92rem;
    line-height: 1.5;
    color: var(--color-text-secondary);
}

.wmexpress-page__cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.55rem 0.75rem;
    margin-bottom: 1.25rem;
}

.wmexpress-page__cta-btn {
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

.wmexpress-page__cta-btn:hover {
    transform: translateY(-1px);
}

.wmexpress-page__cta-note {
    font-size: 0.82rem;
    font-weight: 600;
    color: #c62828;
}

.wmexpress-page__section {
    margin-bottom: 1.1rem;
}

.wmexpress-page__section-title {
    margin: 0 0 0.45rem;
    font-size: 1rem;
    font-weight: 800;
    line-height: 1.35;
}

.wmexpress-page__link-list {
    margin: 0;
    padding-left: 1.35rem;
    display: grid;
    gap: 0.25rem;
    font-size: 0.92rem;
    line-height: 1.5;
}

.wmexpress-page__link {
    color: var(--color-brand);
    text-decoration: none;
}

.wmexpress-page__link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.wmexpress-page__side-col {
    border-left: 1px solid color-mix(in oklab, var(--color-text-secondary) 15%, transparent);
    padding-left: clamp(0.8rem, 1.6vw, 1.2rem);
}

.wmexpress-page__packages {
    margin: 0 0 0.75rem;
    display: flex;
    justify-content: center;
    border-radius: var(--radius-md);
    overflow: hidden;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.wmexpress-page__packages img {
    display: block;
    width: 70%;
    height: auto;
    object-fit: contain;
}

.wmexpress-page__side-copy {
    margin: 0 0 1rem;
    color: var(--color-text-secondary);
    font-size: 0.88rem;
    line-height: 1.5;
}

.wmexpress-page__side-group {
    margin-bottom: 1.05rem;
}

.wmexpress-page__group-title {
    margin: 0 0 0.4rem;
    font-size: 0.95rem;
    font-weight: 800;
    line-height: 1.25;
}

.wmexpress-page__group-list {
    margin: 0;
    padding-left: 1rem;
    display: grid;
    gap: 0.2rem;
}

.wmexpress-page__customer {
    margin-top: 0.25rem;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    text-align: center;
}

.wmexpress-page__customer-title {
    margin: 0 0 0.65rem;
    font-size: 1.16rem;
    font-weight: 800;
    line-height: 1.2;
}

.wmexpress-page__customer-figure {
    margin: 0;
}

.wmexpress-page__customer-logo-box {
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

.wmexpress-page__customer-logo-img {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    object-fit: contain;
    object-position: center;
    display: block;
}

:global(.theme-dark) .wmexpress-page__customer-logo-box {
    border-color: color-mix(in oklab, var(--color-brand) 22%, var(--color-surface-border));
    background: color-mix(in oklab, #ffffff 94%, #c5d8ff 6%);
}

:global(.theme-dark) .wmexpress-page__cta-btn {
    color: #16203a;
}

@media (max-width: 980px) {
    .wmexpress-page__grid {
        grid-template-columns: 1fr;
    }

    .wmexpress-page__side-col {
        border-left: 0;
        border-top: 1px solid color-mix(in oklab, var(--color-text-secondary) 15%, transparent);
        padding-left: 0;
        padding-top: 1rem;
    }
}
</style>
