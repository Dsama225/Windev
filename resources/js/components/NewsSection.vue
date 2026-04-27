<template>
    <section class="section-shell mt-6 md:mt-8">
        <h2 class="mb-4 text-2xl font-bold">Actualites</h2>
        <div class="surface-grid">
            <article v-for="post in posts" :key="post.title" class="ui-card col-span-12 md:col-span-4">
                <p class="text-secondary text-xs">{{ post.date }}</p>
                <h3 class="mt-2 text-lg font-semibold">{{ post.title }}</h3>
                <p class="text-secondary mt-2 text-sm">{{ post.excerpt }}</p>
                <a href="#" class="mt-3 inline-block text-sm font-semibold text-[var(--color-brand)]">Lire la suite</a>
            </article>
        </div>
    </section>
</template>

<script setup>
const posts = [
    {
        date: 'Mars 2026',
        title: 'WINDEV Tour : photos de roadshow',
        excerpt: 'Retour sur les temps forts des conferences en France.',
    },
    {
        date: 'Fev 2026',
        title: 'Nouveaux connecteurs data',
        excerpt: 'Encore plus de passerelles natives pour vos SI existants.',
    },
    {
        date: 'Jan 2026',
        title: 'Version 2026 : ce qui change',
        excerpt: 'Tour d horizon des gains de productivite de la release.',
    },
];
</script>
