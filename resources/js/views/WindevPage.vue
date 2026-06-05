<template>
    <AppNavbar />
    <main class="windev-page pb-10">
        <section class="section-shell windev-page__suite-line" aria-label="Product positioning">
            <p class="windev-page__suite-text">
                <strong>Cross-platform</strong> application development software suite
            </p>
            <figure class="windev-page__suite-platforms">
                <img
                    :src="windevSuiteCrossPlatform.src"
                    alt="Integrated software for developing cross-platform applications"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, windevSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell windev-page__hero" aria-label="WINDEV Suite hero">
            <HomeHeroCarousel />
        </section>

        <section class="section-shell windev-page__intro" aria-labelledby="windev-intro-title">
            <h1 id="windev-intro-title" class="windev-page__intro-hero">DEVELOP 10 TIMES FASTER</h1>
            <div class="windev-page__intro-card glass-frame">
                <div class="windev-page__intro-grid">
                    <figure class="windev-page__figure windev-page__figure--intro-pack">
                        <img
                            class="windev-page__intro-image"
                            :src="windevPackage2026.src"
                            alt="WINDEV 2026"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, windevPackage2026.fallback)"
                        />
                    </figure>
                    <div class="windev-page__intro-copy">
                        <h2 class="windev-page__intro-heading">
                            WINDEV 2026, A POWERFUL IDE & ALM SUITE
                        </h2>
                        <p class="windev-page__intro-body">{{ introBody }}</p>
                    </div>
                    <div class="windev-page__aside-media">
                        <figure class="windev-page__figure windev-page__figure--circle">
                            <img
                                class="windev-page__circle-image"
                                :src="windevSuiteIcon.src"
                                alt="WINDEV Suite"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevSuiteIcon.fallback)"
                            />
                        </figure>
                        <CustomerLogoCarousel variant="compact" />
                    </div>
                </div>
            </div>
        </section>

        <section class="section-shell windev-page__compat glass-frame" aria-label="Compatibility">
            <a href="/software/windev" class="windev-page__compat-link">
                <img
                    class="windev-page__compat-badge"
                    :src="windevCompatibilityBadge.src"
                    alt=""
                    width="97"
                    height="19"
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                    @error="onImageError($event, windevCompatibilityBadge.fallback)"
                />
                <span>Your WINDEV code, windows and data are compatible with WEBDEV and WINDEV Mobile</span>
                <img
                    class="windev-page__compat-arrow"
                    :src="windevSuiteArrow.src"
                    alt=""
                    width="10"
                    height="8"
                    loading="lazy"
                    decoding="async"
                    aria-hidden="true"
                    @error="onImageError($event, windevSuiteArrow.fallback)"
                />
            </a>
        </section>

        <section class="section-shell windev-page__grid-section" aria-label="WINDEV resources and downloads">
            <div class="windev-page__columns glass-frame">
                <div class="windev-page__column">
                    <h3 class="windev-page__column-title">NEW FEATURES</h3>
                    <a
                        class="windev-page__card-cover-link"
                        :href="windevNewFeatures2026En.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="windev-page__card-cover"
                            :src="windevNewFeatures.src"
                            alt="Version 2026 brings you an incredible amount of useful features"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, windevNewFeatures.fallback)"
                        />
                    </a>
                    <ul class="windev-page__link-list">
                        <li>
                            <RouterLink class="windev-page__text-link" to="/software/new-features-2026">Learn more</RouterLink>
                        </li>
                        <li class="windev-page__ebook-row">
                            <img
                                class="windev-page__flag"
                                :src="windevFlagUs.src"
                                alt="English"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevFlagUs.fallback)"
                            />
                            <div class="windev-page__ebook-copy">
                                <a
                                    class="windev-page__text-link"
                                    :href="windevNewFeatures2026En.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    New Features 2026
                                </a>
                                <span class="windev-page__ebook-formats">
                                    (<a
                                        class="windev-page__text-link"
                                        :href="windevNewFeatures2026EbookEn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="windev-page__text-link"
                                        :href="windevNewFeatures2026En.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                        <li class="windev-page__ebook-row">
                            <img
                                class="windev-page__flag"
                                :src="windevFlagFr.src"
                                alt="French"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevFlagFr.fallback)"
                            />
                            <div class="windev-page__ebook-copy">
                                <a
                                    class="windev-page__text-link"
                                    :href="windevNewFeatures2026Fr.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nouveautés 2026
                                </a>
                                <span class="windev-page__ebook-formats">
                                    (<a
                                        class="windev-page__text-link"
                                        :href="windevNewFeatures2026EbookFr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="windev-page__text-link"
                                        :href="windevNewFeatures2026Fr.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                    </ul>
                    <h3 class="windev-page__column-title">WINDEV SUITE</h3>
                    <p class="windev-page__column-text">
                        This year, PC SOFT has introduced a <strong>new subscription offer</strong>.
                    </p>
                    <img
                        class="windev-page__suite-logo"
                        :src="windevSuiteIcon.src"
                        alt="WINDEV Suite"
                        loading="lazy"
                        decoding="async"
                        @error="onImageError($event, windevSuiteIcon.fallback)"
                    />
                    <p class="windev-page__column-text">Yearly plans.</p>
                    <RouterLink class="windev-page__btn-subscribe" to="/software/subscribe">Subscribe</RouterLink>
                    <h3 class="windev-page__column-title windev-page__column-title--small">WLANGUAGE</h3>
                    <ul class="windev-page__link-list">
                        <li>
                            <RouterLink class="windev-page__text-link" to="/software/wlanguage">
                                29 WLanguage code samples
                            </RouterLink>
                        </li>
                    </ul>
                </div>

                <div class="windev-page__column">
                    <h3 class="windev-page__column-title">DISCOVER WINDEV</h3>
                    <a
                        class="windev-page__card-cover-link"
                        :href="windevBrochureEn.href"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            class="windev-page__card-cover"
                            :src="windevBrochureCover.src"
                            alt="WINDEV brochure"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, windevBrochureCover.fallback)"
                        />
                    </a>
                    <ul class="windev-page__link-list">
                        <li class="windev-page__ebook-row">
                            <img
                                class="windev-page__flag"
                                :src="windevFlagUs.src"
                                alt="English"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevFlagUs.fallback)"
                            />
                            <div class="windev-page__ebook-copy">
                                <a
                                    class="windev-page__text-link"
                                    :href="windevBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                                <span class="windev-page__ebook-formats">
                                    (<a
                                        class="windev-page__text-link"
                                        :href="windevBrochureEbookEn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="windev-page__text-link"
                                        :href="windevBrochureEn.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                        <li class="windev-page__ebook-row">
                            <img
                                class="windev-page__flag"
                                :src="windevFlagFr.src"
                                alt="French"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevFlagFr.fallback)"
                            />
                            <div class="windev-page__ebook-copy">
                                <a
                                    class="windev-page__text-link"
                                    :href="windevBrochureFr.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                                <span class="windev-page__ebook-formats">
                                    (<a
                                        class="windev-page__text-link"
                                        :href="windevBrochureEbookFr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="windev-page__text-link"
                                        :href="windevBrochureFr.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                        <li class="windev-page__ebook-row">
                            <img
                                class="windev-page__flag"
                                :src="windevFlagEs.src"
                                alt="Spanish"
                                width="18"
                                height="12"
                                loading="lazy"
                                decoding="async"
                                @error="onImageError($event, windevFlagEs.fallback)"
                            />
                            <div class="windev-page__ebook-copy">
                                <a
                                    class="windev-page__text-link"
                                    :href="windevBrochureEs.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV
                                </a>
                                <span class="windev-page__ebook-formats">
                                    (<a
                                        class="windev-page__text-link"
                                        :href="windevBrochureEbookEs"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >Ebook</a>
                                    /
                                    <a
                                        class="windev-page__text-link"
                                        :href="windevBrochureEs.href"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >PDF</a>)
                                </span>
                            </div>
                        </li>
                    </ul>
                    <ul class="windev-page__bullet-list">
                        <li>
                            <a
                                class="windev-page__text-link"
                                href="https://windev.com/pcsoft/videos.html"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Technical videos
                            </a>
                        </li>
                        <li>
                            <a
                                class="windev-page__text-link"
                                href="https://windev.com/windev/press.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WINDEV Press Releases
                            </a>
                        </li>
                        <li>
                            <RouterLink class="windev-page__text-link" to="/software/new-features-2026">
                                New features already available in the subscription version
                            </RouterLink>
                        </li>
                    </ul>
                    <p class="windev-page__contact-label">Contact us</p>
                    <p><a href="mailto:info@windev.com" class="windev-page__text-link">info@windev.com</a></p>
                    <h3 class="windev-page__column-title windev-page__column-title--small">ADDITIONAL TOOLS</h3>
                    <ul class="windev-page__link-list windev-page__link-list--tight">
                        <li><RouterLink class="windev-page__text-link" to="/software/wdmsg">Multilingual projects: WDMSG</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/reports-queries">Reports &amp; Queries (free)</RouterLink></li>
                    </ul>
                </div>

                <div class="windev-page__column">
                    <h3 class="windev-page__column-title windev-page__column-title--small">Download</h3>
                    <ul class="windev-page__link-list">
                        <li>
                            <a
                                class="windev-page__text-link"
                                href="https://download.windev.com/uk/index.awp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WINDEV
                            </a>
                        </li>
                        <li>
                            <a
                                class="windev-page__text-link"
                                href="https://download.windev.com/uk/dongle.awp"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                WINDEV (Dongle-based version)
                            </a>
                        </li>
                        <li>
                            <RouterLink class="windev-page__text-link" to="/download/windev-express">
                                Download WINDEV Express (free and time-unlimited)
                            </RouterLink>
                        </li>
                    </ul>
                    <RouterLink class="windev-page__express-visual" to="/download/windev-express">
                        <img
                            :src="windevExpressDownload.src"
                            alt="Download Express version (free, click here)"
                            width="205"
                            height="96"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, windevExpressDownload.fallback)"
                        />
                    </RouterLink>
                    <h3 class="windev-page__column-title windev-page__column-title--small">Databases</h3>
                    <p class="windev-page__db-lead">WINDEV supports all databases.</p>
                    <ul class="windev-page__db-list">
                        <li><RouterLink class="windev-page__text-link" to="/software/hfsql">HFSQL</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/as400-system-i">AS/400 &amp; IBM i</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/oracle">Oracle</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/sql-server">SQL Server</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/db2">DB2</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/mysql">MySQL</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/informix">Informix</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/postgresql">PostgreSQL</RouterLink></li>
                        <li>
                            <a
                                class="windev-page__text-link"
                                href="https://windev.com/nativeconnectors/ANProgress.htm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Progress
                            </a>
                        </li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/sap-ase">SAP ASE</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/xbase">xBase</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/sqlite">SQLite</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/access">Access</RouterLink></li>
                        <li><RouterLink class="windev-page__text-link" to="/software/native-connectors/mariadb">MariaDB</RouterLink></li>
                        <li>Hadoop (HBASE, Hive, HDFS)</li>
                        <li>MongoDB</li>
                        <li>Memcached</li>
                        <li>Redis</li>
                        <li>…</li>
                    </ul>
                    <p class="windev-page__db-note">
                        WINDEV also supports all the databases that use ODBC drivers or OLEDB providers
                        (InterSystems Caché, Firebird, EasySoft, MapInfo, etc.)
                    </p>
                </div>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { onMounted } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import HomeHeroCarousel from '../components/HomeHeroCarousel.vue';
import CustomerLogoCarousel from '../components/CustomerLogoCarousel.vue';
import {
    windevBrochureEbookEn,
    windevBrochureEbookEs,
    windevBrochureEbookFr,
    windevBrochureEn,
    windevBrochureEs,
    windevBrochureFr,
    windevNewFeatures2026EbookEn,
    windevNewFeatures2026EbookFr,
    windevNewFeatures2026En,
    windevNewFeatures2026Fr,
} from '../data/windevPageDocuments.js';
import {
    windevBrochureCover,
    windevCompatibilityBadge,
    windevExpressDownload,
    windevFlagEs,
    windevFlagFr,
    windevFlagUs,
    windevNewFeatures,
    windevPackage2026,
    windevSuiteArrow,
    windevSuiteCrossPlatform,
    windevSuiteIcon,
} from '../data/windevPageImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

const introBody =
    'Thanks to its full integration, legendary ease of use and advanced technology, WINDEV allows you to easily develop large-scale projects in Windows, Linux, .NET, Java and much more! (Full compatibility with Web, Mobile, Android, iOS, etc.)';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}

onMounted(() => {
    document.title = 'WINDEV: Develop 10 times faster';
});
</script>

<style scoped>
.windev-page {
    color: #1f304f;
}

.windev-page__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.windev-page__suite-text {
    margin: 0 0 0.45rem;
    font-size: clamp(0.95rem, 2vw, 1.15rem);
    color: #1a2744;
}

.windev-page__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.windev-page__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.windev-page__intro {
    margin-top: 0.9rem;
}

.windev-page__intro-hero {
    margin: 0 0 0.6rem;
    text-align: center;
    font-size: clamp(1.95rem, 4vw, 2.85rem);
    color: #1a2c56;
    font-weight: 900;
    font-style: italic;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.windev-page__intro-card {
    padding: clamp(1rem, 2vw, 1.35rem);
    background: #fff;
}

.windev-page__intro-grid {
    display: grid;
    gap: clamp(1rem, 2vw, 1.75rem);
    align-items: start;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.45fr) minmax(0, 0.75fr);
}

.windev-page__figure {
    margin: 0;
}

.windev-page__figure--circle {
    justify-self: end;
}

.windev-page__aside-media {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.2rem;
}

.windev-page__figure--intro-pack {
    display: flex;
    align-items: center;
    justify-content: center;
}

.windev-page__intro-image {
    width: min(100%, 250px);
    display: block;
    object-fit: contain;
}

.windev-page__intro-heading {
    margin: 0 0 0.65rem;
    font-size: clamp(1.15rem, 1.8vw, 1.75rem);
    color: #14264d;
    font-weight: 800;
    letter-spacing: 0.02em;
    line-height: 1.25;
}

.windev-page__intro-body {
    margin: 0;
    font-size: 1.04rem;
    line-height: 1.55;
    color: #42526d;
}

.windev-page__circle-image {
    width: min(100%, 95px);
    display: block;
    object-fit: contain;
}

.windev-page__compat {
    margin-top: 1.25rem;
    margin-bottom: 0.25rem;
    padding: 1rem 1.25rem;
    background: #fff;
}

.windev-page__compat-link {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.35rem 0.5rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #3966ad;
    text-decoration: none;
}

.windev-page__compat-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.windev-page__compat-badge,
.windev-page__compat-arrow {
    display: inline-block;
    vertical-align: middle;
}

.windev-page__grid-section {
    margin-top: 1.35rem;
}

.windev-page__columns {
    display: grid;
    gap: clamp(1rem, 2vw, 1.5rem);
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: clamp(1rem, 2vw, 1.35rem);
    background: #fff;
}

.windev-page__column {
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.45;
}

.windev-page__column-title {
    margin: 0;
    font-size: 0.92rem;
    font-weight: 800;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.windev-page__column-title--small {
    margin-top: 0.15rem;
}

.windev-page__column-text {
    margin: 0;
    color: #42526d;
}

.windev-page__card-cover {
    width: 100%;
    max-width: 205px;
    display: block;
    object-fit: contain;
}

.windev-page__link-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 0.35rem;
}

.windev-page__link-list--tight {
    margin-top: 0.25rem;
}

.windev-page__card-cover-link {
    display: inline-block;
    max-width: 205px;
}

.windev-page__ebook-row {
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
}

.windev-page__ebook-copy {
    font-size: 0.82rem;
    line-height: 1.45;
}

.windev-page__ebook-formats {
    display: block;
    margin-top: 0.15rem;
    color: #42526d;
}

.windev-page__flag {
    flex-shrink: 0;
    margin-top: 0.15rem;
}

.windev-page__text-link {
    color: #2e5ea8;
    font-weight: 600;
    text-decoration: none;
}

.windev-page__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.windev-page__bullet-list {
    margin: 0.25rem 0 0;
    padding-left: 1.1rem;
    color: #42526d;
}

.windev-page__contact-label {
    margin: 0.5rem 0 0;
    font-weight: 800;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}

.windev-page__express-visual {
    display: inline-block;
    max-width: 205px;
}

.windev-page__express-visual img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 1rem;
}

.windev-page__db-lead {
    margin: 0;
    color: #42526d;
}

.windev-page__db-list {
    margin: 0;
    padding-left: 1.1rem;
    color: #42526d;
    font-size: 0.82rem;
    line-height: 1.55;
}

.windev-page__db-note {
    margin: 0;
    color: #42526d;
    font-size: 0.82rem;
    line-height: 1.55;
}

.windev-page__btn-subscribe {
    align-self: flex-start;
    margin-top: 0.25rem;
    padding: 0.55rem 1.1rem;
    border-radius: 9999px;
    font-weight: 700;
    color: #fff;
    background: #111;
    text-decoration: none;
    display: inline-flex;
}

.windev-page__btn-subscribe:hover {
    opacity: 0.9;
}

.windev-page__suite-logo {
    width: 95px;
    height: auto;
    display: block;
}

@media (max-width: 1100px) {
    .windev-page__columns {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 720px) {
    .windev-page__intro-grid {
        grid-template-columns: 1fr;
    }

    .windev-page__figure--circle,
    .windev-page__aside-media {
        align-items: center;
        justify-self: center;
    }

    .windev-page__columns {
        grid-template-columns: 1fr;
    }
}
</style>
