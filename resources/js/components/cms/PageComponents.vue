<template>
    <div v-if="components.length" class="cms-components">
        <CmsBlockRenderer
            v-for="(component, index) in components"
            :key="component.id ?? component.slug ?? index"
            :component="component"
            :focused="component.id === focusedBlockId"
        />
    </div>
</template>

<script setup>
import CmsBlockRenderer from './CmsBlockRenderer.vue';

defineProps({
    components: {
        type: Array,
        default: () => [],
    },
    focusedBlockId: {
        type: String,
        default: null,
    },
});
</script>

<style scoped>
.cms-components {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
}
</style>
