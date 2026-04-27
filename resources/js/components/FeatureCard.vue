<template>
    <article class="ui-card h-full">
        <p class="text-2xl" aria-hidden="true">{{ icon }}</p>
        <h3 class="mt-3 text-lg font-semibold">{{ title }}</h3>
        <p class="text-secondary mt-2 text-sm leading-relaxed">{{ description }}</p>
        <a v-if="linkText" href="#" class="mt-3 inline-block text-sm font-semibold text-[var(--color-brand)]">{{ linkText }}</a>
    </article>
</template>

<script setup>
defineProps({
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    linkText: { type: String, default: '' },
});
</script>
