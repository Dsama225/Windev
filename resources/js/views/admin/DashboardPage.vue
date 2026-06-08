<template>
    <div class="admin-page">
        <h1 class="admin-page__title">Tableau de bord</h1>
        <p class="admin-muted">Bienvenue dans Windevadmin — gestion du site PC SOFT.</p>

        <div class="admin-module-grid">
            <RouterLink
                v-for="module in modules"
                :key="module.routeName"
                :to="module.path"
                class="admin-module-card"
            >
                <span class="admin-module-card__icon" aria-hidden="true">{{ module.icon }}</span>
                <span class="admin-module-card__label">{{ module.label }}</span>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useAdminAuthStore } from '../../stores/adminAuth';
import { modulesForRole } from '../../data/adminModules';

const auth = useAdminAuthStore();
const modules = computed(() => modulesForRole(auth.user?.role ?? 'administrator').filter((m) => m.routeName !== 'admin.dashboard'));
</script>
