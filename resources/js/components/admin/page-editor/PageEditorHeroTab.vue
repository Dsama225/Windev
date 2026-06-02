<template>
    <AdminPanel title="Hero" centered>
        <p class="admin-muted">Titre principal, sous-titre et image hero (<code>payload.hero</code> + média rôle <code>hero</code>).</p>
        <label class="admin-field">
            <span>Surtitre (eyebrow)</span>
            <input v-model="heroForm.eyebrow" type="text" placeholder="Optionnel — pages support" />
        </label>
        <label class="admin-field">
            <span>Titre hero</span>
            <input v-model="heroForm.title" type="text" placeholder="DEVELOP 10 TIMES FASTER" />
        </label>
        <label class="admin-field">
            <span>Sous-titre hero</span>
            <input v-model="heroForm.subtitle" type="text" placeholder="Cross-platform application development…" />
        </label>
        <div class="admin-grid admin-grid--3">
            <label class="admin-field">
                <span>Image hero (URL)</span>
                <input v-model="heroForm.image_src" type="text" placeholder="/img/…" />
            </label>
            <label class="admin-field">
                <span>Texte alternatif image</span>
                <input v-model="heroForm.image_alt" type="text" />
            </label>
        </div>
    </AdminPanel>
</template>

<script setup>
import AdminPanel from '../AdminPanel.vue';

defineProps({
    heroForm: { type: Object, required: true },
});
</script>
