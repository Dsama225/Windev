import adminApi, { ensureAdminCsrfCookie } from './adminApi';

export const adminAnalyticsService = {
    summary(params = {}) {
        return adminApi.get('/admin/analytics/summary', { params }).then((response) => response.data.data);
    },

    timeseries(params = {}) {
        return adminApi.get('/admin/analytics/timeseries', { params }).then((response) => response.data.data);
    },

    topPages(params = {}) {
        return adminApi.get('/admin/analytics/pages/top', { params }).then((response) => response.data.data);
    },

    live(params = {}) {
        return adminApi.get('/admin/analytics/live', { params }).then((response) => response.data.data);
    },

    settings() {
        return adminApi.get('/admin/analytics/settings').then((response) => response.data.data);
    },

    async updateSettings(payload) {
        await ensureAdminCsrfCookie();
        const response = await adminApi.patch('/admin/analytics/settings', payload);

        return response.data.data;
    },

    exportCsv(params = {}) {
        return adminApi.get('/admin/analytics/export.csv', { params, responseType: 'blob' });
    },
};
