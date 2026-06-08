<template>
    <article class="admin-kpi" :class="{ 'admin-kpi--compact': compact }">
        <p class="admin-kpi__label">{{ label }}</p>
        <p class="admin-kpi__value">{{ value }}</p>
        <p
            v-if="changePercent !== undefined && changePercent !== null && !compact"
            class="admin-kpi__change"
            :class="{
                'admin-kpi__change--up': changePercent >= 0,
                'admin-kpi__change--down': changePercent < 0,
            }"
        >
            {{ formatChange(changePercent) }}
        </p>
    </article>
</template>

<script setup>
defineProps({
    label: { type: String, required: true },
    value: { type: [String, Number], required: true },
    changePercent: { type: Number, default: undefined },
    compact: { type: Boolean, default: false },
});

function formatChange(value) {
    const prefix = value > 0 ? '+' : '';

    return `${prefix}${value} % vs période précédente`;
}
</script>
