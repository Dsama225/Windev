import { computed, ref, watch } from 'vue';
import { defineStore } from 'pinia';

const THEME_KEY = 'pcsoft-theme';

export const useThemeStore = defineStore('theme', () => {
    const mode = ref(localStorage.getItem(THEME_KEY) || 'light');

    const isDark = computed(() => mode.value === 'dark');

    const applyTheme = () => {
        document.documentElement.classList.toggle('theme-dark', isDark.value);
    };

    const toggleTheme = () => {
        mode.value = isDark.value ? 'light' : 'dark';
    };

    watch(
        mode,
        (value) => {
            localStorage.setItem(THEME_KEY, value);
            applyTheme();
        },
        { immediate: true },
    );

    return { mode, isDark, toggleTheme };
});
