<template>
    <footer class="section-shell app-footer">
        <div class="app-footer__inner">
            <p class="app-footer__copy">© {{ year }} PC SOFT — Tous droits réservés.</p>
            <nav class="app-footer__links" aria-label="Legal links">
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
                <a
                    class="app-footer__link"
                    href="https://pcsoft.fr/fr-fr/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact
                </a>
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
    color: #5f6f8c;
}

.app-footer__links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.65rem 1rem;
}

.app-footer__link {
    font-size: 0.84rem;
    font-weight: 700;
    color: #0b56bf;
    text-decoration: none;
}

.app-footer__link:hover {
    text-decoration: underline;
}
</style>
