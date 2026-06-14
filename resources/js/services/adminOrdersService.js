import adminApi, { ensureAdminCsrfCookie } from './adminApi';

export const adminOrdersService = {
    list(params = {}) {
        return adminApi.get('/admin/orders', { params }).then((r) => r.data.data);
    },

    pendingCount() {
        return adminApi.get('/admin/orders/pending-count', { skipGlobalLoading: true }).then((r) => r.data.data.count);
    },

    get(id) {
        return adminApi.get(`/admin/orders/${id}`).then((r) => r.data.data);
    },

    async updateStatus(id, status) {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.patch(`/admin/orders/${id}`, { status });
        return data.data;
    },

    async delete(id) {
        await ensureAdminCsrfCookie();
        await adminApi.delete(`/admin/orders/${id}`);
    },
};
