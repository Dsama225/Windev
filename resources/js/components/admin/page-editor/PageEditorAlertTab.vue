<template>
    <AdminPanel title="Bandeau d’alerte" centered>
        <p class="admin-muted">
            Message en haut de page (<code>PageAlert</code>). Peut être surchargé par
            le module publicités (retiré).
        </p>
        <label class="admin-field">
            <span>Texte du bandeau</span>
            <input v-model="alertForm.text" type="text" placeholder="WINDEV 2026 is now available!" />
        </label>
        <div class="admin-grid admin-grid--3">
            <label class="admin-field">
                <span>Lien (URL interne ou externe)</span>
                <input v-model="alertForm.link" type="text" placeholder="/download/windev-express" />
            </label>
            <label class="admin-field">
                <span>Libellé du lien</span>
                <input v-model="alertForm.link_label" type="text" placeholder="Download ->" />
            </label>
        </div>
        <div v-if="alertForm.text" class="admin-preview-box">
            <p class="admin-preview-box__label">Aperçu</p>
            <div class="admin-preview-alert">
                <span>{{ alertForm.text }}</span>
                <span v-if="alertForm.link_label || alertForm.link"> — {{ alertForm.link_label || '→' }}</span>
            </div>
        </div>
    </AdminPanel>
</template>

<script setup>
import AdminPanel from '../AdminPanel.vue';

defineProps({
    alertForm: { type: Object, required: true },
});
</script>
