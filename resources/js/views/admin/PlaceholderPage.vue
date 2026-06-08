<template>
    <div class="admin-page">
        <h1 class="admin-page__title">{{ title }}</h1>
        <p class="admin-muted">
            Module <strong>{{ title }}</strong> — interface en cours de remise en place.
            Les routes API seront reconnectées progressivement.
        </p>
        <RouterLink to="/windevadmin" class="admin-btn admin-btn--secondary">← Tableau de bord</RouterLink>
    </div>
</template>

<script setup>
defineProps({
    title: { type: String, required: true },
});
</script>
