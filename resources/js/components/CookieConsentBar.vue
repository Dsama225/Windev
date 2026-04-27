<template>
    <Transition name="cookie">
        <aside
            v-if="!consentStore.hasDecision"
            class="fixed bottom-4 left-1/2 z-50 w-[min(95%,900px)] -translate-x-1/2 glass-frame p-4 md:p-5"
            role="dialog"
            aria-live="polite"
            aria-label="Gestion des cookies"
        >
            <p class="text-sm text-secondary">
                Nous utilisons des cookies pour mesurer l audience et ameliorer votre experience.
            </p>
            <div class="mt-3 flex flex-wrap items-center gap-2">
                <button class="ui-button ui-button-primary" @click="consentStore.acceptAll()">Accepter</button>
                <button class="ui-button ui-button-ghost" @click="consentStore.refuseAll()">Refuser</button>
                <button class="ui-button ui-button-ghost" @click="consentStore.manage()">Gerer les cookies</button>
            </div>
        </aside>
    </Transition>
</template>

<script setup>
import { useConsentStore } from '../stores/consent';

const consentStore = useConsentStore();
</script>

<style scoped>
.cookie-enter-active,
.cookie-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}
.cookie-enter-from,
.cookie-leave-to {
    opacity: 0;
    transform: translate(-50%, 10px);
}
</style>
