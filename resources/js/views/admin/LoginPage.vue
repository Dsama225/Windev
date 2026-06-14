<template>
    <div class="admin-login">
        <form class="admin-login__card" @submit.prevent="submit">
            <h1 class="admin-login__title">Windevadmin</h1>
            <p class="admin-muted">Connexion au panneau d’administration PC SOFT.</p>

            <label class="admin-field">
                <span>E-mail</span>
                <input v-model="email" type="email" autocomplete="username" required />
            </label>
            <label class="admin-field">
                <span>Mot de passe</span>
                <input v-model="password" type="password" autocomplete="current-password" required />
            </label>
            <label class="admin-field admin-field--inline">
                <input v-model="remember" type="checkbox" />
                <span>Se souvenir de moi</span>
            </label>

            <p v-if="error" class="admin-error" role="alert">{{ error }}</p>

            <button type="submit" class="admin-btn admin-btn--primary admin-btn--block" :disabled="loading">
                {{ loading ? 'Connexion…' : 'Se connecter' }}
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { isValidAdminRole } from '../../data/adminRoles';
import { useAdminAuthStore } from '../../stores/adminAuth';
import { adminRoute } from '../../utils/adminPath';

const auth = useAdminAuthStore();
const router = useRouter();
const route = useRoute();

const email = ref(import.meta.env.DEV ? 'admin@pcsoft.fr' : '');
const password = ref('');
const remember = ref(false);
const loading = ref(false);
const error = ref('');

async function submit() {
    loading.value = true;
    error.value = '';

    try {
        const result = await auth.login(email.value, password.value, remember.value);

        if (!result || !isValidAdminRole(result.role) || !auth.isAuthenticated) {
            await auth.logout();
            error.value = 'Ce compte n\'a pas de rôle administratif autorisé.';
            return;
        }

        const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : adminRoute();
        await router.replace(redirect);
    } catch (err) {
        const apiMessage = err?.response?.data?.errors?.email?.[0];

        error.value = apiMessage ?? 'Identifiants invalides ou serveur indisponible.';
    } finally {
        loading.value = false;
    }
}
</script>
