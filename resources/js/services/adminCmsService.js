import adminApi, { ensureAdminCsrfCookie } from './adminApi';

function encodeRouteName(routeName) {
    return String(routeName).replace(/\./g, '--');
}

export const adminCmsService = {
    async listPages() {
        const { data } = await adminApi.get('/admin/pages');

        return data.data ?? [];
    },

    async syncRoutes() {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.post('/admin/pages/sync-routes');

        return data;
    },

    async getPage(routeName) {
        const { data } = await adminApi.get(`/admin/pages/${encodeRouteName(routeName)}`);

        return data;
    },

    async updatePage(routeName, payload) {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.put(`/admin/pages/${encodeRouteName(routeName)}`, payload);

        return data;
    },

    async createPreviewToken(routeName) {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.post(`/admin/pages/${encodeRouteName(routeName)}/preview-token`);

        return data;
    },

    async uploadAsset(routeName, file, kind = 'image') {
        await ensureAdminCsrfCookie();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('kind', kind);

        const { data } = await adminApi.post(
            `/admin/pages/${encodeRouteName(routeName)}/upload`,
            formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
                timeout: 120_000,
            },
        );

        return data.data ?? data;
    },

    async deleteAsset(routeName, path) {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.delete(`/admin/pages/${encodeRouteName(routeName)}/upload`, {
            data: { path },
        });

        return data;
    },
};
