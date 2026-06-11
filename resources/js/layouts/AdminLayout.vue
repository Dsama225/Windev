<template>
    <div class="admin-shell">
        <aside class="admin-sidebar">
            <RouterLink to="/windevadmin" class="admin-sidebar__brand">
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
                    {{ module.label }}
                </RouterLink>
            </nav>
            <div class="admin-sidebar__footer">
                <p class="admin-sidebar__user">{{ auth.user?.name }}</p>
                <button type="button" class="admin-btn admin-btn--ghost admin-btn--compact" @click="logout">
                    Déconnexion
                </button>
            </div>
        </aside>
        <main class="admin-main">
            <RouterView />
        </main>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAdminAuthStore } from '../stores/adminAuth';
import { modulesForRole } from '../data/adminModules';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages';

const brandLogo = SHARED_IMAGES.pcsoftLogoDark;

function onBrandLogoError(event) {
    applyImageFallback(event, brandLogo.fallback);
}

const auth = useAdminAuthStore();
const router = useRouter();
const modules = computed(() => modulesForRole(auth.user?.role ?? 'administrator'));

async function logout() {
    await auth.logout();
    await router.push({ name: 'admin.login' });
}
</script>
