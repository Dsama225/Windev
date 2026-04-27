<template>
    <section class="section-shell mt-6 md:mt-8">
        <div class="ui-card">
            <h2 class="text-2xl font-bold">Connecteurs databases</h2>
            <p class="text-secondary mt-2">Compatible avec les principales bases du marche.</p>
            <div class="mt-4 flex flex-wrap gap-2">
                <span v-for="db in databases" :key="db" class="ui-badge">{{ db }}</span>
            </div>
        </div>
    </section>
</template>

<script setup>
const databases = ['Oracle', 'SQL Server', 'MySQL', 'PostgreSQL', 'MariaDB', 'SQLite', 'DB2', 'MongoDB'];
</script>
