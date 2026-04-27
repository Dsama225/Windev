<template>
    <section class="section-shell mt-6 md:mt-8">
        <h2 class="mb-4 text-2xl font-bold">Developpez avec une plateforme complete</h2>
        <div class="surface-grid">
            <div class="col-span-12 md:col-span-6 xl:col-span-3" v-for="item in items" :key="item.title">
                <FeatureCard v-bind="item" />
            </div>
        </div>
    </section>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue';

const items = [
    {
        icon: '🖥️',
        title: 'Execution cross-platform native',
        description: 'Un meme projet pour desktop, web et mobile, avec rendu natif et performances stables.',
        linkText: 'En savoir plus',
    },
    {
        icon: '🗄️',
        title: 'HFSQL integre',
        description: 'Base de donnees performante incluse, ideale pour des applications critiques et distribuees.',
        linkText: 'Documentation',
    },
    {
        icon: '🔌',
        title: 'Connecteurs SQL natifs',
        description: 'Interconnexion directe avec Oracle, SQL Server, PostgreSQL et MySQL sans friction.',
        linkText: 'Voir les connecteurs',
    },
    {
        icon: '⚙️',
        title: 'DevOps et integration continue',
        description: 'Automatisez vos build, tests et deploiements pour aller de l idee a la production rapidement.',
        linkText: 'Pipeline type',
    },
];
</script>
