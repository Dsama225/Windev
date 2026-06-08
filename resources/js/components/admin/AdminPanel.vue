<template>
    <section class="admin-panel" :class="{ 'admin-panel--centered': centered }">
        <header v-if="title || $slots.extra" class="admin-panel__head">
            <h2 v-if="title" class="admin-panel__title">{{ title }}</h2>
            <div v-if="$slots.extra" class="admin-panel__extra">
                <slot name="extra" />
            </div>
        </header>
        <div class="admin-panel__body">
            <slot />
        </div>
    </section>
</template>

<script setup>
defineProps({
    title: { type: String, default: '' },
    centered: { type: Boolean, default: false },
});
</script>
