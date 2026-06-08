import { reactive } from 'vue';

const state = reactive({
    items: [],
});

let nextId = 1;

export function useAdminToast() {
    function push(message, variant = 'success', durationMs = 3200) {
        const id = nextId++;
        state.items.push({ id, message, variant });

        if (durationMs > 0) {
            setTimeout(() => dismiss(id), durationMs);
        }
    }

    function dismiss(id) {
        const index = state.items.findIndex((item) => item.id === id);

        if (index !== -1) {
            state.items.splice(index, 1);
        }
    }

    return { state, push, dismiss };
}
