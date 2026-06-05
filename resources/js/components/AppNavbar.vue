<template>
    <header class="section-shell app-navbar">
        <div class="app-navbar__row">
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
            <nav class="app-navbar__links" aria-label="Main menu">
                <div class="app-navbar__dropdown">
                    <button
                        type="button"
                        class="app-navbar__link app-navbar__link--with-caret app-navbar__dropdown-trigger"
                        :class="{ 'app-navbar__dropdown-trigger--active': isDropdownOpen('software') }"
                        :aria-expanded="isDropdownOpen('software')"
                        aria-haspopup="menu"
                        @click.stop="toggleDropdown('software')"
                    >
                        Software
                        <span class="app-navbar__caret" aria-hidden="true">▾</span>
                    </button>
                    <div
                        v-if="isDropdownOpen('software')"
                        class="app-navbar__dropdown-menu app-navbar__dropdown-menu--software"
                        role="menu"
                        aria-label="Software pages"
                    >
                        <section class="app-navbar__menu-col" aria-label="Software suite">
                            <p class="app-navbar__dropdown-title">Software Suite</p>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/windev">WINDEV</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/webdev">WEBDEV</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/windevmobile">WINDEV Mobile</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/new-features-2026">New Features of version 2026</RouterLink>
                            <div class="app-navbar__menu-sep" aria-hidden="true"></div>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/wdmsg">WDMSG</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/hfsql">HFSQL</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/wlanguage">WLanguage</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/reports-queries">Reports &amp; Queries</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/clouds">Cloud</RouterLink>
                        </section>
                        <section class="app-navbar__menu-col" aria-label="Native connectors">
                            <p class="app-navbar__dropdown-title">Native Connectors</p>
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
                        <section class="app-navbar__menu-col" aria-label="Subscribe">
                            <p class="app-navbar__dropdown-title">Subscribe</p>
                            <RouterLink class="app-navbar__dropdown-item" to="/software/subscribe">Subscribe</RouterLink>
                        </section>
                    </div>
                </div>
                <RouterLink class="app-navbar__link" to="/software/subscribe">Subscribe</RouterLink>
                <div class="app-navbar__dropdown">
                    <button
                        type="button"
                        class="app-navbar__link app-navbar__link--with-caret app-navbar__dropdown-trigger"
                        :class="{ 'app-navbar__dropdown-trigger--active': isDropdownOpen('download') }"
                        :aria-expanded="isDropdownOpen('download')"
                        aria-haspopup="menu"
                        @click.stop="toggleDropdown('download')"
                    >
                        Download
                        <span class="app-navbar__caret" aria-hidden="true">▾</span>
                    </button>
                    <div
                        v-if="isDropdownOpen('download')"
                        class="app-navbar__dropdown-menu"
                        role="menu"
                        aria-label="Download pages"
                    >
                        <p class="app-navbar__dropdown-title">Express version (free)</p>
                        <RouterLink class="app-navbar__dropdown-item" to="/download/windev-express">WINDEV Express</RouterLink>
                        <RouterLink class="app-navbar__dropdown-item" to="/download/windev-mobile-express">WINDEV Mobile Express</RouterLink>
                        <p class="app-navbar__dropdown-title app-navbar__dropdown-title--spaced">Download center</p>
                        <a
                            class="app-navbar__dropdown-item"
                            href="https://download.windev.com/uk/index.awp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Subscription version
                        </a>
                        <a
                            class="app-navbar__dropdown-item"
                            href="https://download.windev.com/uk/dongle.awp"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Dongle version
                        </a>
                        <p class="app-navbar__dropdown-title app-navbar__dropdown-title--spaced">Resources</p>
                        <RouterLink class="app-navbar__dropdown-item" to="/download/redistributable-images">Redistributable Images</RouterLink>
                        <a class="app-navbar__dropdown-item" href="https://repository.windev.com/">Online repository</a>
                    </div>
                </div>
                <div class="app-navbar__dropdown">
                    <button
                        type="button"
                        class="app-navbar__link app-navbar__link--with-caret app-navbar__dropdown-trigger"
                        :class="{ 'app-navbar__dropdown-trigger--active': isDropdownOpen('support') }"
                        :aria-expanded="isDropdownOpen('support')"
                        aria-haspopup="menu"
                        @click.stop="toggleDropdown('support')"
                    >
                        Technical Support
                        <span class="app-navbar__caret" aria-hidden="true">▾</span>
                    </button>
                    <div
                        v-if="isDropdownOpen('support')"
                        class="app-navbar__dropdown-menu"
                        role="menu"
                        aria-label="Technical support pages"
                    >
                        <p class="app-navbar__dropdown-title">Our services</p>
                        <RouterLink class="app-navbar__dropdown-item" to="/support/technical-support">Technical support</RouterLink>
                        <RouterLink class="app-navbar__dropdown-item" to="/support/direct-assistance">Direct assistance</RouterLink>
                        <RouterLink class="app-navbar__dropdown-item" to="/support/remote-consulting">Remote consulting</RouterLink>
                        <p class="app-navbar__dropdown-title app-navbar__dropdown-title--spaced">Community / Help</p>
                        <a class="app-navbar__dropdown-item" href="https://help.windev.com/en-US/">Online help</a>
                        <a class="app-navbar__dropdown-item" href="https://forum.pcsoft.fr/en-US/index.awp">Forums</a>
                        <a class="app-navbar__dropdown-item" href="https://faq.windev.com/index.awp">FAQ</a>
                        <a class="app-navbar__dropdown-item" href="https://repository.windev.com/">Online repository</a>
                        <p class="app-navbar__dropdown-title app-navbar__dropdown-title--spaced">Additional information</p>
                        <RouterLink class="app-navbar__dropdown-item" to="/support/resources">Resources</RouterLink>
                    </div>
                </div>
                <div class="app-navbar__dropdown">
                    <button
                        type="button"
                        class="app-navbar__link app-navbar__link--with-caret app-navbar__dropdown-trigger"
                        :class="{ 'app-navbar__dropdown-trigger--active': isDropdownOpen('training') }"
                        :aria-expanded="isDropdownOpen('training')"
                        aria-haspopup="menu"
                        @click.stop="toggleDropdown('training')"
                    >
                        Training
                        <span class="app-navbar__caret" aria-hidden="true">▾</span>
                    </button>
                    <div
                        v-if="isDropdownOpen('training')"
                        class="app-navbar__dropdown-menu"
                        role="menu"
                        aria-label="Training pages"
                    >
                        <p class="app-navbar__dropdown-title">Train your developers</p>
                        <RouterLink class="app-navbar__dropdown-item" to="/training/in-house">In-house training</RouterLink>
                        <RouterLink class="app-navbar__dropdown-item" to="/support/remote-consulting">Remote consulting</RouterLink>
                        <p class="app-navbar__dropdown-title app-navbar__dropdown-title--spaced">Education</p>
                        <RouterLink class="app-navbar__dropdown-item" to="/training/education">Education</RouterLink>
                        <RouterLink class="app-navbar__dropdown-item" to="/download/windev-express">Express version (free)</RouterLink>
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
                        aria-label="PC SOFT pages"
                    >
                        <section class="app-navbar__menu-col" aria-label="Find information">
                            <p class="app-navbar__dropdown-title">Find information</p>
                            <RouterLink class="app-navbar__dropdown-item" to="/pc-soft">About PC SOFT</RouterLink>
                            <RouterLink class="app-navbar__dropdown-item" to="/pc-soft/sitemap">Site map</RouterLink>
                        </section>
                        <section class="app-navbar__menu-col" aria-label="Contact us">
                            <p class="app-navbar__dropdown-title">Contact us</p>
                            <a
                                class="app-navbar__dropdown-item"
                                href="https://pcsoft.fr/fr-fr/contact"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Contact form
                            </a>
                            <RouterLink class="app-navbar__dropdown-item" to="/pc-soft/distributors">
                                International distributors
                            </RouterLink>
                        </section>
                    </div>
                </div>
                <a
                    class="app-navbar__link"
                    href="https://pcsoft.fr/fr-fr/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact form
                </a>
            </nav>
            <div class="app-navbar__actions">
                <button type="button" class="app-navbar__theme-chip" @click="themeStore.toggleTheme()">
                    {{ themeStore.isDark ? 'Light' : 'Dark' }}
                </button>
                <button
                    class="ui-button ui-button-ghost app-navbar__mobile-toggle"
                    :aria-expanded="uiStore.mobileMenuOpen"
                    aria-label="Open mobile menu"
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
            <nav v-if="uiStore.mobileMenuOpen" class="app-navbar__mobile-links" aria-label="Mobile menu">
                <RouterLink class="app-navbar__link" to="/software/windev" @click="uiStore.closeMobileMenu()">Software</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/webdev" @click="uiStore.closeMobileMenu()">- WEBDEV 2026</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/windevmobile" @click="uiStore.closeMobileMenu()">- WINDEV Mobile 2026</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/new-features-2026" @click="uiStore.closeMobileMenu()">- New Features 2026</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/hfsql" @click="uiStore.closeMobileMenu()">- HFSQL</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/wdmsg" @click="uiStore.closeMobileMenu()">- WDMSG</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/wlanguage" @click="uiStore.closeMobileMenu()">- WLanguage</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/reports-queries" @click="uiStore.closeMobileMenu()">- Reports &amp; Queries</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/software/clouds" @click="uiStore.closeMobileMenu()">- PCSCloud</RouterLink>
                <RouterLink class="app-navbar__link" to="/software/subscribe" @click="uiStore.closeMobileMenu()">Subscribe</RouterLink>
                <RouterLink class="app-navbar__link" to="/download/windev-express" @click="uiStore.closeMobileMenu()">Download</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/download/windev-mobile-express" @click="uiStore.closeMobileMenu()">- WINDEV Mobile Express</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/download/redistributable-images" @click="uiStore.closeMobileMenu()">- Redistributable Images</RouterLink>
                <RouterLink class="app-navbar__link" to="/support/technical-support" @click="uiStore.closeMobileMenu()">Technical Support</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/support/direct-assistance" @click="uiStore.closeMobileMenu()">- Direct assistance</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/support/remote-consulting" @click="uiStore.closeMobileMenu()">- Remote consulting</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/support/resources" @click="uiStore.closeMobileMenu()">- Resources</RouterLink>
                <RouterLink class="app-navbar__link" to="/training/in-house" @click="uiStore.closeMobileMenu()">Training</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/training/in-house" @click="uiStore.closeMobileMenu()">- In-house training</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/support/remote-consulting" @click="uiStore.closeMobileMenu()">- Remote consulting</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/training/education" @click="uiStore.closeMobileMenu()">- Education</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/download/windev-express" @click="uiStore.closeMobileMenu()">- Express version (free)</RouterLink>
                <RouterLink class="app-navbar__link" to="/pc-soft" @click="uiStore.closeMobileMenu()">PC SOFT</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/pc-soft" @click="uiStore.closeMobileMenu()">- About PC SOFT</RouterLink>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/pc-soft/sitemap" @click="uiStore.closeMobileMenu()">- Site map</RouterLink>
                <a
                    class="app-navbar__link app-navbar__link--sub"
                    href="https://pcsoft.fr/fr-fr/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click="uiStore.closeMobileMenu()"
                >
                    - Contact form
                </a>
                <RouterLink class="app-navbar__link app-navbar__link--sub" to="/pc-soft/distributors" @click="uiStore.closeMobileMenu()">
                    - International distributors
                </RouterLink>
                <a
                    class="app-navbar__link"
                    href="https://pcsoft.fr/fr-fr/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    @click="uiStore.closeMobileMenu()"
                >
                    Contact form
                </a>
            </nav>
        </Transition>
    </header>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useThemeStore } from '../stores/theme';
import { useUiStore } from '../stores/ui';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages.js';

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
    margin-top: 2%;
    transform: translateY(2%);
    position: relative;
    z-index: 4000;
}

.app-navbar__row {
    background: #fbfcff;
    border: 1px solid #dfe3ea;
    border-radius: 999px;
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
    box-shadow: 0 8px 22px rgba(23, 40, 72, 0.12);
    position: relative;
    z-index: 4001;
}

.app-navbar__brand {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    text-decoration: none;
    line-height: 0;
}

.app-navbar__brand-logo {
    display: block;
    height: 28px;
    width: auto;
    max-width: none;
}

.app-navbar__links {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.95rem;
}

.app-navbar__link {
    text-decoration: none;
    color: #273755;
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
    background: #f8cbde;
}

.app-navbar__dropdown-trigger--active {
    background: #f8cbde;
    color: #102a54;
    text-decoration: none;
}

.app-navbar__link:hover {
    text-decoration: none;
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
    border: 1px solid #dfe3ea;
    border-radius: 0.6rem;
    background: rgba(251, 252, 255, 0.92);
    box-shadow: 0 12px 28px rgba(25, 47, 84, 0.16);
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
    color: #273755;
    font-size: 0.76rem;
    font-weight: 600;
    text-decoration: none;
    break-inside: avoid;
}

.app-navbar__dropdown-item:hover {
    background: #eef2f8;
}

.app-navbar__dropdown-title {
    margin: 0;
    padding: 0.24rem 0.48rem 0.14rem;
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #5f6f8c;
    break-inside: avoid;
}

.app-navbar__dropdown-title--spaced {
    margin-top: 0.2rem;
    padding-top: 0.38rem;
    border-top: 1px solid #e3e9f2;
}

.app-navbar__menu-sep {
    margin: 0.28rem 0 0.35rem;
    border-top: 1px solid #e3e9f2;
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
    border: 1px solid #c7ceda;
    border-radius: 999px;
    padding: 0.37rem 0.84rem;
    background: #fff;
    font-weight: 700;
    font-size: 0.76rem;
    color: #1f304f;
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
        justify-content: flex-start;
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
        border: 1px solid #dfe3ea;
        border-radius: 0.8rem;
        background: #fbfcff;
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
