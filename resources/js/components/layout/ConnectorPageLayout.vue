<template>
    <AppNavbar />
    <main class="connector-page pb-10">
        <section class="section-shell connector-page__suite-line" aria-label="Positionnement produit">
            <p class="connector-page__suite-text">Suite de logiciels de développement d'applications multi-plateformes</p>
            <figure v-if="crossPlatformImageUrl" class="connector-page__cross-platform">
                <img
                    :src="crossPlatformImageUrl"
                    alt="Icônes des plateformes : Windows, Java, PHP, HTML5, Linux, Android, iOS et Web."
                    width="520"
                    height="48"
                    loading="lazy"
                    decoding="async"
                />
            </figure>
        </section>

        <section class="section-shell connector-page__content" :aria-labelledby="titleId">
            <div class="connector-page__card glass-frame">
                <div class="connector-page__grid">
                    <article class="connector-page__main-col">
                        <h1 :id="titleId" class="connector-page__title">{{ pageTitle }}</h1>
                    </article>

                    <aside class="connector-page__side-col" aria-label="Ressources associées">
                        <figure v-if="packagesImageUrl" class="connector-page__packages">
                            <img
                                :src="packagesImageUrl"
                                alt="Boîtes produits WINDEV 2026, WEBDEV 2026 et WINDEV Mobile 2026."
                                loading="lazy"
                                decoding="async"
                            />
                        </figure>

                        <p class="connector-page__side-copy">
                            Les environnements <strong>WINDEV, WEBDEV et WINDEV Mobile</strong> sont compatibles et partagent
                            les éléments de projet. Il n'a jamais été aussi simple de créer des applications multi-cibles.
                        </p>

                        <section class="connector-page__customer" aria-label="Références clients">
                            <h2 class="connector-page__customer-title">Ils utilisent WINDEV</h2>
                            <figure class="connector-page__customer-figure">
                                <div class="connector-page__customer-logo-box">
                                    <img
                                        class="connector-page__customer-logo-img"
                                        :src="customerCarouselLogos[currentCustomerLogoIndex]"
                                        alt="Logo client WINDEV"
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
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import AppNavbar from '../AppNavbar.vue';
import AppFooter from '../AppFooter.vue';
import { publicSitePageByRoute } from '../../data/publicSitePages';

const CONNECTOR_ASSET_FOLDERS = {
    'software.native-connectors.oracle': 'Oracle',
    'software.native-connectors.sql-server': 'SqlServer',
    'software.native-connectors.mysql': 'MySql',
    'software.native-connectors.mariadb': 'MySql',
    'software.native-connectors.postgresql': 'PostgreSql',
    'software.native-connectors.as400-system-i': 'AS',
    'software.native-connectors.db2': 'Db2',
    'software.native-connectors.informix': 'Informix',
    'software.native-connectors.sap-ase': 'SapAse',
    'software.native-connectors.xbase': 'Xbase',
    'software.native-connectors.sqlite': 'Sqlite',
    'software.native-connectors.access': 'Access',
};

const route = useRoute();
const meta = computed(() => publicSitePageByRoute(route.name));
const pageTitle = computed(() => meta.value?.title ?? 'Connecteur');
const titleId = computed(() => `connector-title-${route.name}`);
const assetFolder = computed(() => CONNECTOR_ASSET_FOLDERS[route.name] ?? 'Oracle');
const crossPlatformImageUrl = computed(() => `/img/${assetFolder.value}/cross-plateformes.webp`);
const packagesImageUrl = computed(() => `/img/${assetFolder.value}/packages-windev-webdev-windev-mobile-2026.webp`);

const customerCarouselLogos = [
    '/img/bande/1.jpg', '/img/bande/2.jpg', '/img/bande/3.jpg', '/img/bande/4.jpg', '/img/bande/5.jpg',
    '/img/bande/6.png', '/img/bande/7.jpg', '/img/bande/8.jpg', '/img/bande/9.jpg', '/img/bande/10.svg',
    '/img/bande/11.gif', '/img/bande/12.jpg', '/img/bande/13.jpg', '/img/bande/14.svg', '/img/bande/15.png',
];

const currentCustomerLogoIndex = ref(0);
let customerCarouselTimer = null;

onMounted(() => {
    customerCarouselTimer = window.setInterval(() => {
        currentCustomerLogoIndex.value = (currentCustomerLogoIndex.value + 1) % customerCarouselLogos.length;
    }, 2200);
});

onBeforeUnmount(() => {
    if (customerCarouselTimer) {
        window.clearInterval(customerCarouselTimer);
    }
});
</script>

<style scoped>
.connector-page {
    color: var(--color-text-primary);
}
.connector-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}
.connector-page__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: var(--color-eyebrow);
}
.connector-page__cross-platform {
    margin: 0;
    display: flex;
    justify-content: center;
}
.connector-page__cross-platform img {
    display: block;
    width: min(100%, 32rem);
    height: auto;
}
.connector-page__content {
    margin-top: 0.45rem;
}
.connector-page__card {
    padding: clamp(1rem, 2vw, 1.45rem);
    border-radius: var(--radius-md);
}
.connector-page__grid {
    display: grid;
    grid-template-columns: minmax(0, 1.5fr) minmax(0, 0.8fr);
    gap: clamp(1rem, 2vw, 1.8rem);
}
.connector-page__title {
    margin: 0 0 0.95rem;
    font-size: clamp(1.2rem, 2vw, 1.55rem);
    font-weight: 800;
    line-height: 1.2;
}
.connector-page__side-col {
    border-left: 1px solid color-mix(in oklab, var(--color-text-secondary) 15%, transparent);
    padding-left: clamp(0.8rem, 1.6vw, 1.2rem);
}
.connector-page__packages {
    margin: 0 0 0.75rem;
    display: flex;
    justify-content: center;
    border-radius: var(--radius-md);
    overflow: hidden;
}
.connector-page__packages img {
    display: block;
    width: 70%;
    height: auto;
    object-fit: contain;
}
.connector-page__side-copy {
    margin: 0 0 1rem;
    color: var(--color-text-secondary);
    font-size: 0.88rem;
    line-height: 1.5;
}
.connector-page__customer {
    margin-top: 0.25rem;
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 22%, transparent);
    border-radius: var(--radius-md);
    padding: 0.75rem;
    text-align: center;
}
.connector-page__customer-title {
    margin: 0 0 0.65rem;
    font-size: 1.1rem;
    font-weight: 800;
}
.connector-page__customer-logo-box {
    aspect-ratio: 1;
    max-width: 220px;
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.connector-page__customer-logo-img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

@media (max-width: 960px) {
    .connector-page__grid {
        grid-template-columns: 1fr;
    }
    .connector-page__side-col {
        border-left: 0;
        padding-left: 0;
        margin-top: 1rem;
    }
}
</style>
