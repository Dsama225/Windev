<template>
    <div class="admin-shell">
        <aside class="admin-sidebar">
            <RouterLink :to="adminRoute()" class="admin-sidebar__brand">
                <div class="admin-sidebar__brand-mark">
                    <img
                        :src="brandLogo.src"
                        alt="PC SOFT"
                        class="admin-sidebar__brand-logo"
                        width="108"
                        height="28"
                        decoding="async"
                        @error="onBrandLogoError"
                    />
                    <span class="admin-sidebar__brand-prefix" title="Côte d'Ivoire">CI</span>
                </div>
                <span class="admin-sidebar__brand-label">Windevadmin</span>
            </RouterLink>
            <nav class="admin-sidebar__nav" aria-label="Navigation admin">
                <RouterLink
                    v-for="module in modules"
                    :key="module.routeName"
                    :to="module.path"
                    class="admin-sidebar__link"
                    active-class="admin-sidebar__link--active"
                >
                    <span aria-hidden="true">{{ module.icon }}</span>
                    <span class="admin-sidebar__link-label">{{ module.label }}</span>
                    <span
                        v-if="module.badgeKey === 'orders' && pendingOrdersCount > 0"
                        class="admin-sidebar__badge"
                        :title="`${pendingOrdersCount} commande(s) en attente`"
                    >
                        {{ pendingOrdersCount }}
                    </span>
                </RouterLink>
            </nav>
            <div class="admin-sidebar__footer">
                <p class="admin-sidebar__user">{{ auth.user?.name }}</p>
                <p v-if="auth.user?.role" class="admin-sidebar__role">{{ userRoleLabel }}</p>
                <button type="button" class="admin-btn admin-btn--ghost admin-btn--compact" @click="logout">
                    Déconnexion
                </button>
            </div>
        </aside>
        <main class="admin-main">
            <h1 v-if="pageTitle" class="admin-page__title admin-main__title">{{ pageTitle }}</h1>
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAdminOrderBadge } from '../composables/useAdminOrderBadge';
import { roleLabel } from '../data/adminRoles';
import { canAccessAdminRoute } from '../data/adminModules';
import { useAdminAuthStore } from '../stores/adminAuth';
import { modulesForRole } from '../data/adminModules';
import { adminRoute } from '../utils/adminPath';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages';

const brandLogo = SHARED_IMAGES.pcsoftLogoDark;

function onBrandLogoError(event) {
    applyImageFallback(event, brandLogo.fallback);
}

const auth = useAdminAuthStore();
const router = useRouter();
const route = useRoute();
const modules = computed(() => modulesForRole(auth.user?.role ?? 'administrator'));
const userRoleLabel = computed(() => auth.user?.role_label ?? roleLabel(auth.user?.role));
const { pendingCount: pendingOrdersCount, refresh: refreshOrderBadge } = useAdminOrderBadge();

function refreshBadgeIfAllowed() {
    if (auth.user && canAccessAdminRoute('admin.orders', auth.user.role)) {
        refreshOrderBadge();
    }
}

onMounted(refreshBadgeIfAllowed);

watch(
    () => auth.user?.role,
    () => refreshBadgeIfAllowed(),
);

watch(
    () => route.name,
    () => refreshBadgeIfAllowed(),
);
const pageTitle = computed(() => {
    if (route.matched.some((record) => record.meta?.adminHideLayoutTitle)) {
        return null;
    }

    const match = [...route.matched].reverse().find((record) => record.meta?.adminTitle);

    return typeof match?.meta?.adminTitle === 'string' ? match.meta.adminTitle : null;
});

async function logout() {
    await auth.logout();
    await router.push({ name: 'admin.login' });
}
</script>
