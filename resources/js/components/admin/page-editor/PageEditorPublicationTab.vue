<template>
    <AdminPanel title="Contenu publication" centered>
        <p class="admin-muted">
            Corps principal HTML pour les pages longues (<code>payload.body</code>). Ex. New Features 2026 — peut aussi être complété via
            <RouterLink to="/windevadmin/posts">Publications</RouterLink>.
        </p>
        <label class="admin-field">
            <span>HTML</span>
            <textarea v-model="publicationBody.html" rows="18" placeholder="<section>…</section>" />
        </label>
    </AdminPanel>
</template>

<script setup>
import AdminPanel from '../AdminPanel.vue';

defineProps({
    publicationBody: { type: Object, required: true },
});
</script>
