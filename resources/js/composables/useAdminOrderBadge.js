import { ref } from 'vue';
import { adminOrdersService } from '../services/adminOrdersService';

const pendingCount = ref(0);

export function useAdminOrderBadge() {
    async function refresh() {
        try {
            pendingCount.value = await adminOrdersService.pendingCount();
        } catch {
            pendingCount.value = 0;
        }
    }

    return { pendingCount, refresh };
}
