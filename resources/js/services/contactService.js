import api, { ensureCsrfCookie } from './api';
import { SKIP_GLOBAL_LOADING } from '../stores/loading';

export async function submitContactForm(payload) {
    await ensureCsrfCookie();

    const response = await api.post('/contact', payload, {
        [SKIP_GLOBAL_LOADING]: true,
    });

    return response.data?.data ?? null;
}
