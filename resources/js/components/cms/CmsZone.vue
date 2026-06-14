<template>
    <component :is="tag" v-if="showCms">
        <slot name="cms" :page="page" />
    </component>
    <component :is="tag" v-else>
        <slot />
    </component>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    page: { type: Object, default: null },
    enabled: { type: Boolean, default: false },
    zone: { type: String, default: '' },
    tag: { type: String, default: 'div' },
});

const showCms = computed(() => {
    if (!props.enabled || !props.page?.payload) {
        return false;
    }

    if (!props.zone) {
        return true;
    }

    const value = props.page.payload[props.zone];

    if (value === null || value === undefined || value === '') {
        return false;
    }

    if (Array.isArray(value)) {
        return value.length > 0;
    }

    if (typeof value === 'object') {
        return Object.keys(value).length > 0;
    }

    return true;
});
</script>
