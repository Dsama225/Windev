<template>
    <AdminPanel title="Général & SEO" centered>
        <p class="admin-muted">Titre public, méta description et statut de publication.</p>
        <label class="admin-field">
            <span>Titre de la page</span>
            <input v-model="form.title" type="text" required />
        </label>
        <label class="admin-field">
            <span>Méta description (SEO)</span>
            <textarea v-model="form.meta_description" rows="3" maxlength="500" />
        </label>
        <label class="admin-field">
            <span>Statut</span>
            <select v-model="form.status">
                <option v-for="status in PAGE_STATUSES" :key="status.value" :value="status.value">
                    {{ status.label }}
                </option>
            </select>
        </label>
        <p v-if="pageStatusHint" class="admin-muted">{{ pageStatusHint }}</p>
    </AdminPanel>
</template>

<script setup>
import AdminPanel from '../AdminPanel.vue';
import { PAGE_STATUSES } from '../../../data/adminCmsMeta';

defineProps({
    form: { type: Object, required: true },
    pageStatusHint: { type: String, default: '' },
});
</script>
