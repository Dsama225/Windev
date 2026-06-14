<template>
    <Teleport to="body">
        <Transition name="cookie-modal">
            <div
                v-if="consentStore.preferencesOpen"
                class="cookie-modal"
                role="presentation"
                @click.self="consentStore.closePreferences()"
            >
                <div
                    class="cookie-modal__panel glass-frame"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="cookie-preferences-title"
                >
                    <h2 id="cookie-preferences-title" class="cookie-modal__title">Gestion des cookies</h2>
                    <p class="cookie-modal__intro text-secondary">
                        Choisissez les cookies que vous autorisez. Les cookies essentiels au fonctionnement du site
                        sont toujours actifs.
                    </p>

                    <label class="cookie-modal__option">
                        <input v-model="analytics" class="cookie-modal__checkbox" type="checkbox" />
                        <span>
                            <strong>Cookies d'audience</strong>
                            <span class="cookie-modal__desc text-secondary">
                                Permettent de mesurer la fréquentation et d'améliorer le site.
                            </span>
                        </span>
                    </label>

                    <div class="cookie-modal__actions">
                        <button class="ui-button ui-button-primary" @click="save">Enregistrer</button>
                        <button class="ui-button ui-button-ghost" @click="acceptAll">Tout accepter</button>
                        <button class="ui-button ui-button-ghost" @click="refuseAll">Tout refuser</button>
                    </div>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useConsentStore } from '../stores/consent';

const consentStore = useConsentStore();
const analytics = ref(false);

watch(
    () => consentStore.preferencesOpen,
    (open) => {
        if (!open) {
            return;
        }

        if (consentStore.decision === 'accepted') {
            analytics.value = true;
            return;
        }

        analytics.value = Boolean(consentStore.preferences?.analytics);
    },
);

function save() {
    consentStore.setPreferences({ analytics: analytics.value, marketing: false });
}

function acceptAll() {
    consentStore.acceptAll();
    consentStore.closePreferences();
}

function refuseAll() {
    consentStore.refuseAll();
    consentStore.closePreferences();
}
</script>

<style scoped>
.cookie-modal {
    position: fixed;
    inset: 0;
    z-index: 60;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgb(0 0 0 / 0.45);
}

.cookie-modal__panel {
    width: min(100%, 32rem);
    padding: 1.25rem;
}

.cookie-modal__title {
    margin: 0;
    font-size: 1.1rem;
}

.cookie-modal__intro {
    margin: 0.75rem 0 1rem;
    font-size: 0.9rem;
    line-height: 1.5;
}

.cookie-modal__option {
    display: flex;
    gap: 0.65rem;
    align-items: flex-start;
    padding: 0.75rem 0;
    border-top: 1px solid var(--color-border, rgb(255 255 255 / 0.12));
    cursor: pointer;
}

.cookie-modal__checkbox {
    margin-top: 0.2rem;
    flex-shrink: 0;
}

.cookie-modal__option strong {
    display: block;
    font-size: 0.92rem;
}

.cookie-modal__desc {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.82rem;
    line-height: 1.45;
}

.cookie-modal__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.cookie-modal-enter-active,
.cookie-modal-leave-active {
    transition: opacity 0.2s ease;
}

.cookie-modal-enter-active .cookie-modal__panel,
.cookie-modal-leave-active .cookie-modal__panel {
    transition: transform 0.2s ease;
}

.cookie-modal-enter-from,
.cookie-modal-leave-to {
    opacity: 0;
}

.cookie-modal-enter-from .cookie-modal__panel,
.cookie-modal-leave-to .cookie-modal__panel {
    transform: translateY(8px);
}
</style>
