<template>
    <AppNavbar />
    <main class="pb-10">
        <HeroSection />
        <AppCarousel />
        <FeatureGrid />
        <DatabaseConnectors />
        <NewsSection />
        <CtaBanner />
    </main>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue';
import HeroSection from '../components/HeroSection.vue';
import AppCarousel from '../components/AppCarousel.vue';
import FeatureGrid from '../components/FeatureGrid.vue';
import DatabaseConnectors from '../components/DatabaseConnectors.vue';
import NewsSection from '../components/NewsSection.vue';
import CtaBanner from '../components/CtaBanner.vue';
import AppFooter from '../components/AppFooter.vue';
</script>
