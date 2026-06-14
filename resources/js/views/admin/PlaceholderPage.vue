<template>
    <div class="admin-page">
        <p class="admin-muted">
            Module <strong>{{ title }}</strong> — interface en cours de remise en place.
            Les routes API seront reconnectées progressivement.
        </p>
        <RouterLink :to="adminRoute()" class="admin-btn admin-btn--secondary">← Tableau de bord</RouterLink>
    </div>
</template>

<script setup>
import { adminRoute } from '../../utils/adminPath';

defineProps({
    title: { type: String, required: true },
});
</script>
