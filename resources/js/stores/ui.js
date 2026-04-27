import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUiStore = defineStore('ui', () => {
    const mobileMenuOpen = ref(false);
    const activeDropdown = ref(null);

    const toggleMobileMenu = () => {
        mobileMenuOpen.value = !mobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
        mobileMenuOpen.value = false;
    };

    const toggleDropdown = (menuName) => {
        activeDropdown.value = activeDropdown.value === menuName ? null : menuName;
    };

    const closeDropdown = () => {
        activeDropdown.value = null;
    };

    return {
        mobileMenuOpen,
        activeDropdown,
        toggleMobileMenu,
        closeMobileMenu,
        toggleDropdown,
        closeDropdown,
    };
});
