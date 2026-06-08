<template>
    <footer class="section-shell app-footer">
        <div class="app-footer__inner">
            <p class="app-footer__copy">© {{ year }} PC SOFT — Tous droits réservés.</p>
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
                <RouterLink class="app-footer__link" to="/pc-soft/contact">
                    Contact
                </RouterLink>
            </nav>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
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
</style>
