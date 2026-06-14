import api from './api';

export const productsService = {
    list(params = {}) {
        return api.get('/products', { params, skipGlobalLoading: true }).then((r) => r.data.data);
    },

    categories() {
        return api.get('/products/categories', { skipGlobalLoading: true }).then((r) => r.data.data);
    },

    show(slug) {
        return api.get(`/products/${slug}`, { skipGlobalLoading: true }).then((r) => r.data.data);
    },
};
