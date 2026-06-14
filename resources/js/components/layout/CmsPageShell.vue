<template>
    <AppNavbar />
    <main class="cms-shell pb-10">
        <PageAlert
            :alert="page?.payload?.alert"
            :block="alertBlock"
            :focused-block-id="focusedBlockId"
        />
        <section class="section-shell py-6">
            <div class="ui-card glass-frame">
                <CmsBlockShell
                    v-if="heroBlock"
                    :block="heroBlock"
                    zone-type="hero"
                    :focused="focusedBlockId === heroBlock.id"
                    class="cms-shell__hero"
                >
                    <p v-if="page?.payload?.hero?.eyebrow" class="text-secondary mb-2 text-sm">{{ page.payload.hero.eyebrow }}</p>
                    <h1 class="mb-3 text-2xl font-semibold">{{ page?.payload?.hero?.title ?? page?.title }}</h1>
                    <p v-if="page?.payload?.hero?.subtitle" class="text-secondary mb-3">{{ page.payload.hero.subtitle }}</p>
                    <img
                        v-if="heroImageSrc"
                        :src="heroImageSrc"
                        :alt="heroImageAlt"
                        class="cms-shell__hero-img"
                    />
                </CmsBlockShell>
                <template v-else>
                    <h1 class="mb-3 text-2xl font-semibold">{{ page?.title }}</h1>
                </template>
                <PageComponents :components="page?.payload?.components ?? []" :focused-block-id="focusedBlockId" />
                <PageSections :sections="page?.payload?.sections ?? []" :focused-block-id="focusedBlockId" />
                <CmsBlockShell
                    v-if="page?.payload?.body && publicationBlock"
                    :block="publicationBlock"
                    zone-type="publication"
                    :focused="focusedBlockId === publicationBlock.id"
                    class="cms-shell__body"
                >
                    <div v-html="page.payload.body" />
                </CmsBlockShell>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppNavbar from '../AppNavbar.vue';
import AppFooter from '../AppFooter.vue';
import PageAlert from '../cms/PageAlert.vue';
import PageComponents from '../cms/PageComponents.vue';
import PageSections from '../cms/PageSections.vue';
import CmsBlockShell from '../cms/CmsBlockShell.vue';
import { useCmsPageWithFallback } from '../../composables/useCmsPageWithFallback';

defineProps({
    focusedBlockId: { type: String, default: null },
});

const route = useRoute();
const { page } = useCmsPageWithFallback(() => route.name, { forceEnabled: true });

const heroBlock = computed(() => {
    const hero = page.value?.payload?.hero;
    if (!hero?.id) {
        return null;
    }
    return { id: hero.id, slug: hero.slug, type: 'hero' };
});

const publicationBlock = computed(() => {
    const block = page.value?.payload?.body_block;
    if (!block?.id) {
        return null;
    }
    return { id: block.id, slug: block.slug, type: 'publication' };
});

const alertBlock = computed(() => {
    const alert = page.value?.payload?.alert;
    if (!alert?.id) {
        return null;
    }
    return { id: alert.id, slug: alert.slug, type: 'alert' };
});

const heroImageSrc = computed(() => {
    const media = page.value?.payload?.media ?? [];
    const heroMedia = media.find((m) => m.role === 'hero');
    return heroMedia?.src ?? page.value?.payload?.hero?.image_src ?? '';
});

const heroImageAlt = computed(() => {
    const media = page.value?.payload?.media ?? [];
    const heroMedia = media.find((m) => m.role === 'hero');
    return heroMedia?.alt ?? page.value?.payload?.hero?.image_alt ?? '';
});
</script>

<style scoped>
.cms-shell__hero-img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-md);
}

.cms-shell__body :deep(p) {
    margin: 0 0 0.75rem;
    line-height: 1.6;
}
</style>
