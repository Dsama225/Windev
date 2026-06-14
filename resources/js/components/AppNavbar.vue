<template>
    <header class="section-shell app-navbar">
        <div class="app-navbar__row">
            <div class="app-navbar__brand-group">
                <RouterLink to="/" class="app-navbar__brand" @click="uiStore.closeMobileMenu()">
                    <img
                        :src="brandLogo.src"
                        alt="PC SOFT"
                        class="app-navbar__brand-logo"
                        width="108"
                        height="28"
                        decoding="async"
                        @error="onBrandLogoError"
                    />
                </RouterLink>
                <span class="app-navbar__brand-prefix" title="Côte d'Ivoire">CI</span>
            </div>
            <nav class="app-navbar__links" aria-label="Menu principal">
                <div class="app-navbar__dropdown">
                    <button
                        type="button"
                        class="app-navbar__link app-navbar__link--with-caret app-navbar__dropdown-trigger"
                        :class="{ 'app-navbar__dropdown-trigger--active': isDropdownOpen('software') }"
                        :aria-expanded="isDropdownOpen('software')"
                        aria-haspopup="menu"
                        @click.stop="toggleDropdown('software')"
                    >
                        Logiciels
                        <span class="app-navbar__caret" aria-hidden="true">▾</span>
                    </button>
                    <div
                        v-if="isDropdownOpen('software')"
                        class="app-navbar__dropdown-menu app-navbar__dropdown-menu--software"
                        role="menu"
                        aria-label="Pages logiciels"
                    >
                        <section class="app-navbar__menu-col" aria-label="Suite logicielle">
                            <p class="app-navbar__dropdown-title">Suite logicielle</p>
                            <template v-if="navbarProducts.length">
                                <RouterLink
                                    v-for="product in navbarProducts"
                                    :key="product.slug"
                                    class="app-navbar__dropdown-item"
                                    :to="navbarProductLink(product)"
                                >
                                    {{ product.name }}
                                </RouterLink>
                            </template>
                            <template v-else>
                                <RouterLink class="app-navbar__dropdown-item" to="/software/windev">WINDEV</RouterLink>
                                <RouterLink class="app-navbar__dropdown-item" to="/software/webdev">WEBDEV</RouterLink>
                                <RouterLink class="app-navbar__dropdown-item" to="/software/windevmobile">WINDEV Mobile</RouterLink>
                            </template>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/new-features-2026">Nouveautés de la version 2026</RouterLink>
                            <div class="app-navbar__menu-sep" aria-hidden="true"></div>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/wdmsg">WDMSG</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/hfsql">HFSQL</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/wlanguage">WLanguage</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/reports-queries">Etats &amp; Requêtes</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/clouds">Cloud</RouterLink>
                        </section>
                        <section class="app-navbar__menu-col" aria-label="Connecteurs natifs">
                            <p class="app-navbar__dropdown-title">Connecteurs natifs</p>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/hfsql">HFSQL</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/as400-system-i">AS/400 &amp; System i</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/oracle">Oracle</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/sql-server">SQL Server</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/db2">DB2</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/mysql">MySQL</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/informix">Informix</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/postgresql">PostgreSQL</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/sap-ase">SAP ASE</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/xbase">xBase</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/sqlite">SQLite</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/access">Access</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/native-connectors/mariadb">MariaDB</RouterLink>
                        </section>
                        <section class="app-navbar__menu-col" aria-label="Boutique et abonnement">
                            <p class="app-navbar__dropdown-title">Boutique</p>
                            <RouterLink class="app-navbar__dropdown-item" to="/boutique">Catalogue produits</RouterLink>
                            <p class="app-navbar__dropdown-title app-navbar__dropdown-title--spaced">Abonnement</p>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/subscribe">S'abonner</RouterLink>
                        </section>
                    </div>
                </div>
                <RouterLink class="app-navbar__link app-navbar__link--boutique" to="/boutique">Boutique</RouterLink>
                <RouterLink class="app-navbar__link" to="/software/subscribe">S'abonner</RouterLink>
                <div class="app-navbar__dropdown">
                    <button
                        type="button"
                        class="app-navbar__link app-navbar__link--with-caret app-navbar__dropdown-trigger"
                        :class="{ 'app-navbar__dropdown-trigger--active': isDropdownOpen('download') }"
                        :aria-expanded="isDropdownOpen('download')"
                        aria-haspopup="menu"
                        @click.stop="toggleDropdown('download')"
                    >
                        Télécharger
                        <span class="app-navbar__caret" aria-hidden="true">▾</span>
                    </button>
                    <div
                        v-if="isDropdownOpen('download')"
                        class="app-navbar__dropdown-menu"
                        role="menu"
                        aria-label="Pages de téléchargement"
                    >
                        <p class="app-navbar__dropdown-title">Version Express (gratuite)</p>
                        <RouterLink class="app-navbar__dropdown-item" to="/download/windev-express">WINDEV Express</RouterLink>
                        <RouterLink class="app-navbar__dropdown-item" to="/download/windev-mobile-express">WINDEV Mobile Express</RouterLink>
                        <p class="app-navbar__dropdown-title app-navbar__dropdown-title--spaced">Centre de téléchargement</p>
                        <a
                            class="app-navbar__dropdown-item"
                            href="https://download.windev.com/uk/index.awp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Version abonnement
                        </a>
                        <a
                            class="app-navbar__dropdown-item"
                            href="https://download.windev.com/uk/dongle.awp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Version dongle
                        </a>
                        <p class="app-navbar__dropdown-title app-navbar__dropdown-title--spaced">Ressources</p>
                        <RouterLink class="app-navbar__dropdown-item" to="/download/redistributable-images">Images redistribuables</RouterLink>
                        <a class="app-navbar__dropdown-item" href="https://repository.windev.com/">Dépôt en ligne</a>
                    </div>
                </div>
                <div class="app-navbar__dropdown">
                    <button
                        type="button"
                        class="app-navbar__link app-navbar__link--with-caret app-navbar__dropdown-trigger"
                        :class="{ 'app-navbar__dropdown-trigger--active': isDropdownOpen('pcsoft') }"
                        :aria-expanded="isDropdownOpen('pcsoft')"
                        aria-haspopup="menu"
                        @click.stop="toggleDropdown('pcsoft')"
                    >
                        PC SOFT
                        <span class="app-navbar__caret" aria-hidden="true">▾</span>
                    </button>
                    <div
                        v-if="isDropdownOpen('pcsoft')"
                        class="app-navbar__dropdown-menu app-navbar__dropdown-menu--pcsoft"
                        role="menu"
                        aria-label="Pages PC SOFT"
                    >
                        <section class="app-navbar__menu-col" aria-label="Informations">
                            <p class="app-navbar__dropdown-title">Informations</p>
                            <RouterLink class="app-navbar__dropdown-item" to="/pc-soft">À propos de PC SOFT</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/pc-soft/sitemap">Plan du site</RouterLink>
                        </section>
                        <section class="app-navbar__menu-col" aria-label="Nous contacter">
                            <p class="app-navbar__dropdown-title">Nous contacter</p>
                            <RouterLink class="app-navbar__dropdown-item" to="/pc-soft/contact">
                                Formulaire de contact
                            </RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/pc-soft/distributors">
                                Distributeurs internationaux
                            </RouterLink>
                        </section>
                    </div>
                </div>
                <RouterLink class="app-navbar__link" to="/pc-soft/contact">
                    Formulaire de contact
                </RouterLink>
            </nav>
            <div class="app-navbar__actions">
                <button type="button" class="app-navbar__theme-chip" @click="themeStore.toggleTheme()">
                    {{ themeStore.isDark ? 'Clair' : 'Sombre' }}
                </button>
                <button
                    class="ui-button ui-button-ghost app-navbar__mobile-toggle"
                    :aria-expanded="uiStore.mobileMenuOpen"
                    aria-label="Ouvrir le menu mobile"
                    @click="uiStore.toggleMobileMenu()"
                >
                    <span class="visually-hidden">Menu</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
        </div>
        <Transition name="fade">
            <nav v-if="uiStore.mobileMenuOpen" class="app-navbar__mobile-links" aria-label="Menu mobile">
                <RouterLink class="app-navbar__link" to="/software/windev" @click="uiStore.closeMobileMenu()">Logiciels</RouterLink>
                <template v-if="navbarProducts.length">
                    <RouterLink
                        v-for="product in navbarProducts"
                        :key="`mobile-${product.slug}`"
                        class="app-navbar__link app-navbar__link--sub"
                        :to="navbarProductLink(product)"
                        @click="uiStore.closeMobileMenu()"
                    >
                        - {{ product.name }}
                    </RouterLink>
                </template>
                <template v-else>
                    <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/webdev" @click="uiStore.closeMobileMenu()">- WEBDEV 2026</RouterLink>
                    <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/windevmobile" @click="uiStore.closeMobileMenu()">- WINDEV Mobile 2026</RouterLink>
                </template>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/new-features-2026" @click="uiStore.closeMobileMenu()">- Nouveautés 2026</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/hfsql" @click="uiStore.closeMobileMenu()">- HFSQL</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/wdmsg" @click="uiStore.closeMobileMenu()">- WDMSG</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/wlanguage" @click="uiStore.closeMobileMenu()">- WLanguage</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/reports-queries" @click="uiStore.closeMobileMenu()">- Etats &amp; Requêtes</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/clouds" @click="uiStore.closeMobileMenu()">- PCSCloud</RouterLink>
                <RouterLink class="app-navbar__link" to="/boutique" @click="uiStore.closeMobileMenu()">Boutique</RouterLink>
                <RouterLink class="app-navbar__link" to="/software/subscribe" @click="uiStore.closeMobileMenu()">S'abonner</RouterLink>
                <RouterLink class="app-navbar__link" to="/download/windev-express" @click="uiStore.closeMobileMenu()">Télécharger</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/download/windev-mobile-express" @click="uiStore.closeMobileMenu()">- WINDEV Mobile Express</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/download/redistributable-images" @click="uiStore.closeMobileMenu()">- Images redistribuables</RouterLink>
                <RouterLink class="app-navbar__link" to="/pc-soft" @click="uiStore.closeMobileMenu()">PC SOFT</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/pc-soft" @click="uiStore.closeMobileMenu()">- À propos de PC SOFT</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/pc-soft/sitemap" @click="uiStore.closeMobileMenu()">- Plan du site</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/pc-soft/contact" @click="uiStore.closeMobileMenu()">
                    - Formulaire de contact
                </RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/pc-soft/distributors" @click="uiStore.closeMobileMenu()">
                    - Distributeurs internationaux
                </RouterLink>
                <RouterLink class="app-navbar__link" to="/pc-soft/contact" @click="uiStore.closeMobileMenu()">
                    Formulaire de contact
                </RouterLink>
            </nav>
        </Transition>
    </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useProductsCatalog } from '../composables/useProductsCatalog';
import { useThemeStore } from '../stores/theme';
import { useUiStore } from '../stores/ui';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages.js';

const { products: navbarProducts } = useProductsCatalog('navbar');

function navbarProductLink(product) {
    return product.link_path || '/boutique';
}

const brandLogo = SHARED_IMAGES.pcsoftLogoDark;

function onBrandLogoError(event) {
    applyImageFallback(event, brandLogo.fallback);
}

const themeStore = useThemeStore();
const uiStore = useUiStore();
const activeDropdown = ref(null);

function isDropdownOpen(name) {
    return activeDropdown.value === name;
}

function toggleDropdown(name) {
    activeDropdown.value = activeDropdown.value === name ? null : name;
}

function closeDropdown() {
    activeDropdown.value = null;
}

function onWindowClick() {
    closeDropdown();
}

function onEscapeKey(event) {
    if (event.key === 'Escape') {
        closeDropdown();
    }
}

onMounted(() => {
    window.addEventListener('click', onWindowClick);
    window.addEventListener('keydown', onEscapeKey);
});

onBeforeUnmount(() => {
    window.removeEventListener('click', onWindowClick);
    window.removeEventListener('keydown', onEscapeKey);
});
</script>

<style scoped>
.app-navbar {
    margin-top: 0.75rem;
    position: relative;
    z-index: 4000;
}

.app-navbar__row {
    background: var(--color-elevated-bg);
    border: 1px solid var(--color-border);
    border-radius: 999px;
    padding: 1rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem 0.9rem;
    box-shadow: var(--shadow-elevated);
    position: relative;
    z-index: 4001;
}

.app-navbar__brand-group {
    flex-shrink: 0;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    isolation: isolate;
}

.app-navbar__brand-prefix {
    flex-shrink: 0;
    position: relative;
    z-index: 3;
    display: inline-flex;
    align-items: center;
    height: 32px;
    margin-left: 0.25rem;
    padding-left: 0.15rem;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 1;
    text-transform: uppercase;
    color: #4c493d;
    background: var(--color-elevated-bg);
}

.app-navbar__brand {
    order: 0;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    text-decoration: none;
    line-height: 0;
}

html.theme-dark .app-navbar__brand-prefix {
    color: var(--color-text-primary);
}

.app-navbar__brand-logo {
    display: block;
    height: 28px;
    width: auto;
    max-width: none;
}

html.theme-dark .app-navbar__brand-logo {
    filter: brightness(0) invert(1);
}

.app-navbar__links {
    flex: 1 1 16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.55rem 0.85rem;
    min-width: 0;
}

.app-navbar__link {
    text-decoration: none;
    color: var(--color-text-primary);
    font-size: 0.9rem;
    font-weight: 600;
}

.app-navbar__dropdown-trigger {
    border: 0;
    border-radius: 0.32rem;
    background: transparent;
    cursor: pointer;
    padding: 0.16rem 0.35rem;
    box-shadow: none;
    transition: color 0.16s ease, background-color 0.16s ease;
}

.app-navbar__dropdown-trigger:hover {
    background: var(--color-nav-accent-hover);
}

.app-navbar__dropdown-trigger--active {
    background: var(--color-nav-accent-hover);
    color: var(--color-text-primary);
    text-decoration: none;
}

.app-navbar__link:hover {
    text-decoration: none;
}

.app-navbar__link--boutique {
    flex-shrink: 0;
    color: var(--color-brand-strong);
}

.app-navbar__link--with-caret {
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
}

.app-navbar__caret {
    font-size: 0.78rem;
    display: inline-block;
}

.app-navbar__dropdown {
    position: relative;
    z-index: 4002;
}

.app-navbar__dropdown-menu {
    position: absolute;
    top: calc(100% + 0.35rem);
    left: 0;
    min-width: 22rem;
    width: max-content;
    max-width: min(86vw, 64rem);
    padding: 0.5rem;
    border: 1px solid var(--color-border);
    border-radius: 0.6rem;
    background: color-mix(in oklab, var(--color-elevated-bg) 94%, transparent);
    box-shadow: var(--shadow-dropdown);
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    transition: opacity 0.16s ease, transform 0.16s ease;
    z-index: 4500;
    column-width: 16rem;
    column-gap: 0.8rem;
}

.app-navbar__dropdown-menu--software {
    min-width: 38rem;
    max-width: min(90vw, 56rem);
    padding: 0.75rem 0.85rem;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1.15fr) minmax(0, 0.7fr);
    gap: 0.95rem;
    column-width: auto;
}

.app-navbar__dropdown-menu--pcsoft {
    min-width: 22rem;
    max-width: min(90vw, 32rem);
    padding: 0.75rem 0.85rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.95rem;
}

.app-navbar__menu-col {
    min-width: 0;
}

.app-navbar__dropdown-item {
    display: block;
    padding: 0.36rem 0.62rem;
    border-radius: 0.4rem;
    color: var(--color-text-primary);
    font-size: 0.76rem;
    font-weight: 600;
    text-decoration: none;
    break-inside: avoid;
}

.app-navbar__dropdown-item:hover {
    background: var(--color-hover-surface);
}

.app-navbar__dropdown-title {
    margin: 0;
    padding: 0.24rem 0.48rem 0.14rem;
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--color-eyebrow);
    break-inside: avoid;
}

.app-navbar__dropdown-title--spaced {
    margin-top: 0.2rem;
    padding-top: 0.38rem;
    border-top: 1px solid var(--color-border-subtle);
}

.app-navbar__menu-sep {
    margin: 0.28rem 0 0.35rem;
    border-top: 1px solid var(--color-border-subtle);
}

@media (max-width: 1200px) {
    .app-navbar__dropdown-menu {
        column-width: 14rem;
    }

    .app-navbar__dropdown-menu--software {
        min-width: 32rem;
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

.app-navbar__link--sub {
    padding-left: 0.6rem;
    font-size: 0.74rem;
    font-weight: 500;
}

.app-navbar__actions {
    display: flex;
    align-items: center;
    gap: 0.45rem;
}

.app-navbar__theme-chip {
    border: 1px solid var(--color-chip-border);
    border-radius: 999px;
    padding: 0.37rem 0.84rem;
    background: var(--color-chip-bg);
    font-weight: 700;
    font-size: 0.76rem;
    color: var(--color-text-primary);
}

.app-navbar__mobile-toggle {
    display: none;
}

.app-navbar__mobile-links {
    display: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.18s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(6px);
}

@media (max-width: 1100px) {
    .app-navbar__row {
        border-radius: 1rem;
    }

    .app-navbar__links {
        flex-basis: 100%;
        order: 3;
        justify-content: flex-start;
        padding-top: 0.15rem;
    }

    .app-navbar__actions {
        margin-left: auto;
    }
}

@media (max-width: 820px) {
    .app-navbar__links {
        display: none;
    }

    .app-navbar__mobile-toggle {
        display: inline-flex;
    }

    .app-navbar__mobile-links {
        margin-top: 0.45rem;
        padding: 0.65rem 0.8rem;
        border: 1px solid var(--color-border);
        border-radius: 0.8rem;
        background: var(--color-elevated-bg);
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
    }

    .app-navbar__dropdown-menu {
        column-width: auto;
        min-width: 14rem;
    }

    .app-navbar__dropdown-menu--software {
        min-width: 14rem;
        display: block;
        padding: 0.5rem;
    }
}
</style>
