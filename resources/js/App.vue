<template>
    <RouterView />
    <CookieConsentBar />
    <CookiePreferencesModal />
</template>

<script setup>
import CookieConsentBar from './components/CookieConsentBar.vue';
import CookiePreferencesModal from './components/CookiePreferencesModal.vue';
</script>
