<template>
    <AppNavbar />
    <main class="workspace-page pb-10">
        <section class="section-shell py-6">
            <div class="ui-card glass-frame">
                <h1 class="mb-3 text-2xl font-semibold">PC SOFT Workspace</h1>
                <p class="text-secondary">
                    Centralisez vos projets WINDEV, WEBDEV et WINDEV Mobile au sein d’un espace de travail unifié.
                </p>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
</script>
