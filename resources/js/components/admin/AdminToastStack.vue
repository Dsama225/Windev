<template>
    <div class="admin-toast-stack" aria-live="polite">
        <p
            v-for="toast in state.items"
            :key="toast.id"
            class="admin-toast"
            :class="`admin-toast--${toast.variant}`"
        >
            {{ toast.message }}
        </p>
    </div>
</template>

<script setup>
import { useAdminToast } from '../../composables/useAdminToast';

const { state } = useAdminToast();
</script>
