<template>
    <footer class="section-shell app-footer">
        <div class="app-footer__inner">
            <p class="app-footer__copy">© {{ year }} MEDIASOFTLAFAYETTE - PC SOFT — Tous droits réservés.</p>

            <div class="app-footer__partner-block">
                <a
                    class="app-footer__partner"
                    :href="mediasoftPartnerContent.links.website.href"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Mediasoft Lafayette"
                >
                    <img
                        class="app-footer__partner-logo"
                        :src="mediasoftPartnerLogo"
                        alt="Mediasoft Lafayette"
                        width="200"
                        height="130"
                        loading="lazy"
                        decoding="async"
                    />
                </a>
                <p class="app-footer__managed-by">{{ mediasoftPartnerContent.managedBy }}</p>
            </div>

            <nav class="app-footer__links" aria-label="Liens légaux">
                <a
                    class="app-footer__link"
                    href="https://windev.com/pcsoft/general-terms-and-conditions.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Mentions légales
                </a>
                <a
                    class="app-footer__link"
                    href="https://windev.com/pcsoft/data-protection-policy.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Confidentialité
                </a>
                <button class="app-footer__link app-footer__button" type="button" @click="consentStore.openPreferences()">
                    Cookies
                </button>
                <RouterLink class="app-footer__link" to="/pc-soft/contact">
                    Contact
                </RouterLink>
            </nav>
        </div>
    </footer>
</template>

<script setup>
import { mediasoftPartnerContent, mediasoftPartnerLogo } from '../data/mediasoftPartnerContent.js';
import { useConsentStore } from '../stores/consent';

const year = new Date().getFullYear();
const consentStore = useConsentStore();
</script>

<style scoped>
.app-footer {
    padding: 1.25rem 0 1.75rem;
}

.app-footer__inner {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.65rem;
}

.app-footer__copy {
    margin: 0;
    font-size: 0.82rem;
    color: var(--color-eyebrow);
}

.app-footer__partner-block {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    text-align: center;
}

.app-footer__managed-by {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color-eyebrow);
}

.app-footer__partner {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
}

.app-footer__partner-logo {
    display: block;
    width: auto;
    height: clamp(3.75rem, 8vw, 5.25rem);
    opacity: 1;
    transition: opacity 0.15s ease;
}

.app-footer__partner:hover .app-footer__partner-logo {
    opacity: 1;
}

.app-footer__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem 1rem;
}

.app-footer__link {
    font-size: 0.84rem;
    font-weight: 700;
    color: var(--color-brand);
    text-decoration: none;
}

.app-footer__link:hover {
    text-decoration: underline;
}

.app-footer__button {
    padding: 0;
    border: 0;
    background: none;
    cursor: pointer;
    font: inherit;
}
</style>
