<template>
    <AppNavbar />
    <main class="rq-page pb-10">
        <section class="section-shell rq-page__suite-line" aria-label="Product positioning">
            <p class="rq-page__suite-text">Cross-platform application development software suite</p>
            <figure class="rq-page__cross-platform">
                <img
                    :src="crossPlatformImageUrl"
                    alt="Platform icons: Windows, Java, PHP, HTML5, Linux, Android, iOS, and Web."
                    width="520"
                    height="48"
                    loading="lazy"
                    decoding="async"
                />
            </figure>
        </section>

        <section class="section-shell rq-page__content" aria-labelledby="rq-main-title">
            <div class="rq-page__layout glass-frame">
                <div class="rq-page__main">
                    <h1 id="rq-main-title" class="rq-page__title">
                        "REPORTS &amp; QUERIES": YOUR USERS CAN CREATE THEIR OWN REPORTS &amp; QUERIES!
                    </h1>

                    <div class="rq-page__prose">
                        <p>
                            "Reports &amp; Queries" is a module <strong>intended for the end users</strong> of applications
                            developed with WINDEV.
                        </p>
                        <p>
                            "<strong>Reports &amp; Queries</strong>" can be <strong>freely distributed</strong> with each one
                            of your WINDEV applications (<a href="#" class="rq-page__red-link">see license</a>).
                        </p>
                        <p>"Reports &amp; Queries" allows end users to:</p>
                        <ul class="rq-page__list rq-page__list--bullets">
                            <li><strong>create their own reports</strong></li>
                            <li><strong>create their own queries</strong> on the database</li>
                        </ul>
                        <p>
                            End users can also <strong>modify the reports</strong> created by a developer. For example, end
                            users can:
                        </p>
                        <ul class="rq-page__list rq-page__list--bullets">
                            <li>change a logo</li>
                            <li>change the position of a label</li>
                            <li>etc.</li>
                        </ul>
                        <p>
                            End users can make these changes directly (developers can prevent "sensitive" resources from being
                            modified).
                        </p>
                        <p>It's a win-win situation for developers and end users!</p>
                        <p>
                            (This "User" version of "Reports &amp; Queries" has the
                            <strong>same features as the report editor included in WINDEV</strong>, except for programming,
                            since the WLanguage commands to modify, add and delete records are not enabled.)
                        </p>
                    </div>

                    <div class="rq-page__figures">
                        <figure class="rq-page__figure">
                            <img
                                :src="printPreviewImageUrl"
                                alt="Print preview of a data table with Reports &amp; Queries."
                                loading="lazy"
                                decoding="async"
                            />
                            <figcaption class="rq-page__caption">
                                Example of print preview with 'Reports &amp; Queries'
                            </figcaption>
                        </figure>
                        <figure class="rq-page__figure">
                            <img
                                :src="queryBuilderImageUrl"
                                alt="Query Editor — graphical interface for building a database query."
                                loading="lazy"
                                decoding="async"
                            />
                            <figcaption class="rq-page__caption">
                                Create queries without effort and see the results
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <aside class="rq-page__sidebar" aria-label="Related products and resources">
                    <figure class="rq-page__product-boxes">
                        <img
                            :src="productBoxesImageUrl"
                            alt="WINDEV 2026, WEBDEV 2026, and WINDEV Mobile 2026 product boxes."
                            loading="lazy"
                            decoding="async"
                        />
                    </figure>

                    <p class="rq-page__sidebar-lead">
                        The <strong>WINDEV</strong>, <strong>WEBDEV</strong> and <strong>WINDEV Mobile</strong> environments
                        are compatible and share project elements. It has never been easier to build multi-target applications.
                    </p>

                    <div class="rq-page__sidebar-block">
                        <h2 class="rq-page__sidebar-heading">Documentation overview</h2>
                        <ul class="rq-page__list rq-page__list--dots">
                            <li class="rq-page__dot rq-page__dot--primary"><a href="#" class="rq-page__sidebar-link">New features</a></li>
                            <li class="rq-page__dot rq-page__dot--muted"><a href="#" class="rq-page__sidebar-link">WINDEV</a></li>
                            <li class="rq-page__dot rq-page__dot--muted"><a href="#" class="rq-page__sidebar-link">WEBDEV</a></li>
                            <li class="rq-page__dot rq-page__dot--muted"><a href="#" class="rq-page__sidebar-link">WINDEV Mobile</a></li>
                        </ul>
                    </div>

                    <div class="rq-page__sidebar-block">
                        <h2 class="rq-page__sidebar-heading">Overview diagrams</h2>
                        <ul class="rq-page__list rq-page__list--dots">
                            <li class="rq-page__dot rq-page__dot--muted"><a href="#" class="rq-page__sidebar-link">Universal database connectors</a></li>
                            <li class="rq-page__dot rq-page__dot--muted"><a href="#" class="rq-page__sidebar-link">Cross-platform development</a></li>
                        </ul>
                    </div>

                    <div class="rq-page__sidebar-block">
                        <h2 class="rq-page__sidebar-heading">Videos</h2>
                        <ul class="rq-page__list rq-page__list--dots">
                            <li class="rq-page__dot rq-page__dot--muted"><a href="#" class="rq-page__sidebar-link">Technical videos</a></li>
                        </ul>
                    </div>

                    <div class="rq-page__customer" aria-label="Customer references">
                        <p id="rq-success-heading" class="rq-page__customer-title">They are using WINDEV</p>
                        <figure class="rq-page__customer-figure">
                            <div class="rq-page__customer-logo-box">
                                <img
                                    class="rq-page__customer-logo-img"
                                    :src="customerCarouselLogos[currentCustomerLogoIndex]"
                                    alt="WINDEV customer logo"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </figure>
                    </div>
                </aside>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';

const crossPlatformImageUrl = '/img/reports-queries-img/cross-plateformes.webp';
const printPreviewImageUrl = '/img/reports-queries-img/print-preview.jpg';
const queryBuilderImageUrl = '/img/reports-queries-img/define-a-query-by-drawing-it.jpg';
const productBoxesImageUrl =
    '/img/reports-queries-img/packages-windev-webdev-windev-mobile-2026.webp';

/** Same banner strip assets as HfsqlPage / BrandLogoStrip; bound URLs avoid Vite static import. */
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
.rq-page {
    color: var(--color-text-primary);
}

.rq-page__alert {
    margin-top: 0.75rem;
    margin-bottom: 0.35rem;
    padding: 0.45rem 0.75rem;
    border-radius: var(--radius-md);
    background: linear-gradient(135deg, #ffd400, #ffea66);
    box-shadow: 0 8px 18px rgba(179, 144, 3, 0.18);
    text-align: center;
}

.rq-page__alert-link {
    font-size: 0.88rem;
    font-weight: 700;
    color: #16203a;
    text-decoration: none;
}

.rq-page__alert-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.rq-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.rq-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.rq-page__cross-platform {
    margin: 0;
    display: flex;
    justify-content: center;
}

.rq-page__cross-platform img {
    display: block;
    width: min(100%, 32rem);
    height: auto;
}

.rq-page__content {
    margin-top: 1.25rem;
}

.rq-page__layout {
    display: grid;
    gap: clamp(1.25rem, 2.5vw, 2rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    padding: clamp(1rem, 2vw, 1.5rem);
    align-items: start;
}

.rq-page__main {
    min-width: 0;
}

.rq-page__title {
    margin: 0 0 1rem;
    font-size: clamp(1rem, 1.35vw + 0.65rem, 1.35rem);
    font-weight: 800;
    line-height: 1.3;
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

.rq-page__prose {
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--color-text-secondary);
}

.rq-page__prose p {
    margin: 0 0 0.85rem;
}

.rq-page__prose p:last-child {
    margin-bottom: 0;
}

.rq-page__prose strong {
    color: var(--color-text-primary);
}

.rq-page__red-link {
    color: #c62828;
    font-weight: 600;
    text-decoration: none;
}

.rq-page__red-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.rq-page__list {
    margin: 0 0 0.85rem;
    padding: 0;
}

.rq-page__list--bullets {
    padding-left: 1.25rem;
    list-style: disc;
}

.rq-page__list--dots {
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.rq-page__dot {
    position: relative;
    padding-left: 1rem;
    font-size: 0.86rem;
    line-height: 1.45;
}

.rq-page__dot::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.45em;
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 9999px;
    background: var(--color-brand);
}

.rq-page__dot--muted::before {
    background: color-mix(in oklab, var(--color-brand) 55%, #a8c4f0);
}

.rq-page__dot--primary::before {
    background: var(--color-brand-strong);
}

.rq-page__sidebar-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.rq-page__sidebar-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.rq-page__figures {
    display: grid;
    gap: clamp(0.75rem, 2vw, 1.25rem);
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 1.35rem;
}

.rq-page__figure {
    margin: 0;
    border-radius: var(--radius-md);
    overflow: hidden;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    background: color-mix(in oklab, var(--color-surface) 94%, transparent);
}

.rq-page__figure img {
    display: block;
    width: 100%;
    height: auto;
}

.rq-page__placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-radius: var(--radius-md);
    border: 2px dashed color-mix(in oklab, var(--color-text-secondary) 38%, transparent);
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    color: var(--color-text-secondary);
    font-size: 0.78rem;
    font-weight: 600;
    line-height: 1.35;
    padding: 0.85rem;
}

.rq-page__placeholder--wide {
    min-height: 180px;
}

.rq-page__caption {
    margin: 0.5rem 0 0;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-text-primary);
    text-align: center;
}

.rq-page__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.5;
}

.rq-page__product-boxes {
    margin: 0;
    display: flex;
    justify-content: center;
    border-radius: var(--radius-md);
    overflow: hidden;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
}

.rq-page__product-boxes img {
    display: block;
    width: 70%;
    height: auto;
}

.rq-page__sidebar-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.rq-page__sidebar-lead strong {
    color: var(--color-text-primary);
}

.rq-page__sidebar-block {
    padding-top: 0.25rem;
}

.rq-page__sidebar-heading {
    margin: 0 0 0.45rem;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-text-primary);
}

.rq-page__customer {
    margin-top: 0.25rem;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    background: color-mix(in oklab, var(--color-surface) 92%, transparent);
    text-align: center;
}

.rq-page__customer-title {
    margin: 0 0 0.65rem;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--color-text-secondary);
}

.rq-page__customer-figure {
    margin: 0;
}

.rq-page__customer-logo-box {
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

.rq-page__customer-logo-img {
    max-width: 90%;
    max-height: 90%;
    width: auto;
    height: auto;
    object-fit: contain;
    object-position: center;
    display: block;
    filter: saturate(1.03) contrast(1.02);
}

:global(.theme-dark) .rq-page__customer-logo-box {
    border-color: color-mix(in oklab, var(--color-brand) 22%, var(--color-surface-border));
    background: color-mix(in oklab, #ffffff 94%, #c5d8ff 6%);
}

@media (max-width: 900px) {
    .rq-page__layout {
        grid-template-columns: 1fr;
    }

    .rq-page__figures {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 520px) {
    .rq-page__figures {
        grid-template-columns: 1fr;
    }
}

:global(.theme-dark) .rq-page__alert-link {
    color: #0b1f4d;
}
</style>
