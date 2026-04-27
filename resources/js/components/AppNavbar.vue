<template>
    <header class="section-shell pt-4 md:pt-6">
        <div class="glass-frame px-4 py-3 md:px-6">
            <div class="flex items-center justify-between gap-3">
                <RouterLink to="/" class="flex items-center gap-3" @click="uiStore.closeMobileMenu()">
                    <div class="h-9 w-9 rounded-lg bg-[var(--color-accent)]"></div>
                    <div>
                        <p class="text-xs font-semibold uppercase tracking-wider text-secondary">PC Soft</p>
                        <p class="text-lg font-extrabold text-[var(--color-text-primary)]">WINDEV Suite</p>
                    </div>
                </RouterLink>

                <nav class="hidden items-center gap-1 lg:flex">
                    <div class="relative" ref="productsRef">
                        <button
                            class="top-nav-link"
                            :aria-expanded="isOpen('products')"
                            aria-haspopup="true"
                            @click="toggleDropdown('products')"
                        >
                            Produits
                        </button>
                        <Transition name="fade">
                            <div
                                v-if="isOpen('products')"
                                class="ui-card absolute left-0 top-12 z-20 w-[360px] p-3"
                                role="menu"
                            >
                                <RouterLink class="block rounded-md p-2 hover:bg-black/5" to="/">WINDEV 2026</RouterLink>
                                <RouterLink class="block rounded-md p-2 hover:bg-black/5" to="/">WEBDEV 2026</RouterLink>
                                <RouterLink class="block rounded-md p-2 hover:bg-black/5" to="/">WINDEV Mobile 2026</RouterLink>
                            </div>
                        </Transition>
                    </div>
                    <RouterLink class="top-nav-link" to="/workspace">Solutions</RouterLink>
                    <RouterLink class="top-nav-link" to="/workspace">Support</RouterLink>
                    <RouterLink class="top-nav-link" to="/workspace">Telecharger</RouterLink>
                </nav>

                <div class="flex items-center gap-2">
                    <button class="ui-button ui-button-ghost" @click="themeStore.toggleTheme()">
                        {{ themeStore.isDark ? 'Light' : 'Dark' }}
                    </button>
                    <button class="ui-button ui-button-primary hidden md:inline-flex">Testez WINDEV 2026</button>
                    <button
                        class="ui-button ui-button-ghost lg:hidden"
                        :aria-expanded="uiStore.mobileMenuOpen"
                        aria-label="Ouvrir le menu mobile"
                        @click="uiStore.toggleMobileMenu()"
                    >
                        <span class="visually-hidden">Menu</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>
            </div>

            <Transition name="fade">
                <div v-if="uiStore.mobileMenuOpen" class="mt-3 flex flex-col gap-2 border-t border-black/10 pt-3 lg:hidden">
                    <button class="top-nav-link text-left" @click="navigateAndClose('/')">Produits</button>
                    <button class="top-nav-link text-left" @click="navigateAndClose('/workspace')">Solutions</button>
                    <button class="top-nav-link text-left" @click="navigateAndClose('/workspace')">Support</button>
                    <button class="top-nav-link text-left" @click="navigateAndClose('/workspace')">Telecharger</button>
                </div>
            </Transition>
        </div>
    </header>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useThemeStore } from '../stores/theme';
import { useUiStore } from '../stores/ui';

const themeStore = useThemeStore();
const uiStore = useUiStore();
const router = useRouter();
const productsRef = ref(null);

const isOpen = (name) => uiStore.activeDropdown === name;

const navigateAndClose = (to) => {
    uiStore.closeMobileMenu();
    router.push(to);
};

const onClickOutside = (event) => {
    if (productsRef.value && !productsRef.value.contains(event.target)) {
        uiStore.closeDropdown();
    }
};

onMounted(() => {
    document.addEventListener('click', onClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', onClickOutside);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.18s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(6px);
}
</style>
