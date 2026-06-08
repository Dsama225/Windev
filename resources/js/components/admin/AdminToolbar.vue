<template>
    <section class="admin-toolbar-panel" :aria-label="ariaLabel">
        <div class="admin-toolbar-panel__main">
            <slot />
        </div>
        <div v-if="$slots.actions" class="admin-toolbar-panel__actions">
            <slot name="actions" />
        </div>
    </section>
</template>

<script setup>
defineProps({
    ariaLabel: { type: String, default: 'Actions' },
});
</script>
