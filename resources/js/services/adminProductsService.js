import adminApi, { ensureAdminCsrfCookie } from './adminApi';

export const adminProductsService = {
    listCategories() {
        return adminApi.get('/admin/product-categories').then((r) => r.data.data);
    },

    async createCategory(payload) {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.post('/admin/product-categories', payload);
        return data.data;
    },

    async updateCategory(id, payload) {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.put(`/admin/product-categories/${id}`, payload);
        return data.data;
    },

    async deleteCategory(id) {
        await ensureAdminCsrfCookie();
        await adminApi.delete(`/admin/product-categories/${id}`);
    },

    listProducts(params = {}) {
        return adminApi.get('/admin/products', { params }).then((r) => r.data.data);
    },

    getProduct(id) {
        return adminApi.get(`/admin/products/${id}`).then((r) => r.data.data);
    },

    async createProduct(payload) {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.post('/admin/products', payload);
        return data.data;
    },

    async updateProduct(id, payload) {
        await ensureAdminCsrfCookie();
        const { data } = await adminApi.put(`/admin/products/${id}`, payload);
        return data.data;
    },

    async deleteProduct(id) {
        await ensureAdminCsrfCookie();
        await adminApi.delete(`/admin/products/${id}`);
    },

    async uploadImage(productId, file, alt = '', isPrimary = false) {
        await ensureAdminCsrfCookie();
        const formData = new FormData();
        formData.append('file', file);
        if (alt) {
            formData.append('alt', alt);
        }
        formData.append('is_primary', isPrimary ? '1' : '0');
        const { data } = await adminApi.post(`/admin/products/${productId}/images`, formData);
        return data.data;
    },

    async deleteImage(productId, imageId) {
        await ensureAdminCsrfCookie();
        await adminApi.delete(`/admin/products/${productId}/images/${imageId}`);
    },
};
