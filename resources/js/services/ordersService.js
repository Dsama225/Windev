import api from './api';

export const ordersService = {
    create(payload) {
        return api.post('/orders', payload, { skipGlobalLoading: true }).then((r) => r.data.data);
    },
};
