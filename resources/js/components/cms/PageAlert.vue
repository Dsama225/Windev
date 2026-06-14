<template>
    <div v-if="displayAlert?.text" class="section-shell cms-page-alert" role="region" aria-label="Product announcement">
        <component
            :is="linkComponent"
            v-bind="linkProps"
            class="cms-page-alert__link"
        >
            {{ displayAlert.text }}<span v-if="displayAlert.link_label"> - {{ displayAlert.link_label }}</span>
        </component>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    alert: {
        type: Object,
        default: null,
    },
});

const displayAlert = computed(() => props.alert);

const isExternal = computed(() => {
    const link = displayAlert.value?.link ?? '';
    return link.startsWith('http://') || link.startsWith('https://');
});

const linkComponent = computed(() => (isExternal.value ? 'a' : RouterLink));

const linkProps = computed(() => {
    const link = displayAlert.value?.link ?? '#';
    if (isExternal.value) {
        return { href: link };
    }
    if (link.startsWith('/')) {
        return { to: link };
    }
    return { href: link || '#' };
});
</script>

<style scoped>
.cms-page-alert {
    margin-top: 0.5rem;
}

.cms-page-alert__link {
    display: block;
    padding: 0.65rem 1rem;
    border-radius: var(--radius-md, 0.5rem);
    background: color-mix(in oklab, var(--color-accent) 85%, white);
    color: var(--color-text-primary);
    text-decoration: none;
    font-weight: 600;
    text-align: center;
}
</style>
