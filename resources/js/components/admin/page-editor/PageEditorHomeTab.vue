<template>
    <AdminPanel title="Zones accueil" centered>
        <p class="admin-muted">
            CTA et note de page. Le <strong>carrousel hero</strong> et les cartes produits se gèrent via
            les publicités hero-home (module retiré) et le seed CMS.
        </p>
        <label class="admin-field">
            <span>Titre CTA</span>
            <input v-model="homeForm.cta_title" type="text" />
        </label>
        <label class="admin-field">
            <span>Texte CTA</span>
            <input v-model="homeForm.cta_text" type="text" />
        </label>
        <label class="admin-field">
            <span>Lien CTA</span>
            <input v-model="homeForm.cta_link" type="text" placeholder="/download/windev-express" />
        </label>
        <label class="admin-field">
            <span>Note (optionnelle)</span>
            <textarea v-model="homeForm.note" rows="3" />
        </label>
    </AdminPanel>
</template>

<script setup>
import AdminPanel from '../AdminPanel.vue';

defineProps({
    homeForm: { type: Object, required: true },
});
</script>
