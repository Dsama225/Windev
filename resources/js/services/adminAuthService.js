import adminApi, { ensureAdminCsrfCookie } from './adminApi';

export const adminAuthService = {
    async login(email, password, remember = false) {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.post('/admin/login', { email, password, remember });

        return data;
    },

    async me() {
        const response = await adminApi.get('/admin/me');

        if (response.status === 204) {
            return null;
        }

        return response.data;
    },

    async logout() {
        await adminApi.post('/admin/logout');
    },
};
