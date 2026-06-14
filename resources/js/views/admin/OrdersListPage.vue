<template>
    <div class="admin-page">
        <div class="admin-page__head">
            <div class="admin-page__filters">
                <label class="admin-field admin-field--inline">
                    <span>Recherche</span>
                    <input v-model="filters.q" type="search" placeholder="N° commande, client…" @input="debouncedLoad" />
                </label>
                <label class="admin-field admin-field--inline">
                    <span>Statut</span>
                    <select v-model="filters.status" @change="loadOrders">
                        <option value="">Tous</option>
                        <option value="pending">En attente</option>
                        <option value="validated">Validées</option>
                        <option value="rejected">Refusées</option>
                    </select>
                </label>
            </div>
        </div>

        <p v-if="loading" class="admin-muted">Chargement…</p>
        <p v-else-if="error" class="admin-error" role="alert">{{ error }}</p>

        <table v-else class="admin-table">
            <thead>
                <tr>
                    <th>N° commande</th>
                    <th>Produit</th>
                    <th>Client</th>
                    <th>Date</th>
                    <th>Statut</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.id">
                    <td><code>{{ order.order_number }}</code></td>
                    <td>{{ order.product?.name ?? '—' }}</td>
                    <td>
                        {{ order.customer_name }}
                        <br />
                        <span class="admin-muted">{{ order.customer_email }}</span>
                    </td>
                    <td>{{ formatDate(order.created_at) }}</td>
                    <td>
                        <span class="admin-badge" :class="statusClass(order.status)">
                            {{ statusLabel(order.status) }}
                        </span>
                    </td>
                    <td class="admin-table__actions">
                        <button
                            v-if="order.status === 'pending'"
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact"
                            @click="updateStatus(order, 'validated')"
                        >
                            Valider
                        </button>
                        <button
                            v-if="order.status === 'pending'"
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--danger"
                            @click="updateStatus(order, 'rejected')"
                        >
                            Refuser
                        </button>
                        <button
                            type="button"
                            class="admin-btn admin-btn--ghost admin-btn--compact admin-btn--danger"
                            @click="removeOrder(order)"
                        >
                            Supprimer
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <p v-if="!loading && !error && !orders.length" class="admin-muted">Aucune commande.</p>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useAdminOrderBadge } from '../../composables/useAdminOrderBadge';
import { adminOrdersService } from '../../services/adminOrdersService';

const { refresh: refreshOrderBadge } = useAdminOrderBadge();

const orders = ref([]);
const loading = ref(true);
const error = ref('');
const filters = ref({ q: '', status: '' });
let debounceTimer = null;

function statusLabel(status) {
    if (status === 'validated') {
        return 'Validée';
    }
    if (status === 'rejected') {
        return 'Refusée';
    }
    return 'En attente';
}

function statusClass(status) {
    if (status === 'validated') {
        return 'admin-badge--success';
    }
    if (status === 'rejected') {
        return 'admin-badge--muted';
    }
    return 'admin-badge--warning';
}

function formatDate(value) {
    if (!value) {
        return '—';
    }
    return new Intl.DateTimeFormat('fr-FR', {
        dateStyle: 'short',
        timeStyle: 'short',
    }).format(new Date(value));
}

async function loadOrders() {
    loading.value = true;
    error.value = '';

    try {
        const params = {};
        if (filters.value.q) {
            params.q = filters.value.q;
        }
        if (filters.value.status) {
            params.status = filters.value.status;
        }
        orders.value = await adminOrdersService.list(params);
    } catch {
        error.value = 'Impossible de charger les commandes.';
    } finally {
        loading.value = false;
    }
}

function debouncedLoad() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(loadOrders, 300);
}

async function updateStatus(order, status) {
    try {
        await adminOrdersService.updateStatus(order.id, status);
        await loadOrders();
        await refreshOrderBadge();
    } catch {
        error.value = 'Échec de la mise à jour.';
    }
}

async function removeOrder(order) {
    if (!window.confirm(`Supprimer la commande ${order.order_number} ?`)) {
        return;
    }

    try {
        await adminOrdersService.delete(order.id);
        await loadOrders();
        await refreshOrderBadge();
    } catch {
        error.value = 'Échec de la suppression.';
    }
}

onMounted(loadOrders);
</script>

<style scoped>
.admin-page__filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}
</style>
