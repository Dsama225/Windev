<template>
    <section
        v-for="(section, index) in sections"
        :key="section.id ?? index"
        class="cms-section"
        :aria-labelledby="section.title ? `cms-section-${index}` : undefined"
    >
        <h2 v-if="section.title" :id="`cms-section-${index}`" class="cms-section__title">{{ section.title }}</h2>

        <p v-for="(paragraph, pIndex) in section.paragraphs ?? []" :key="`p-${pIndex}`" class="cms-section__copy">
            {{ paragraph }}
        </p>

        <div v-if="section.body" class="cms-section__body" v-html="section.body" />

        <ul v-if="section.list?.length" class="cms-section__list">
            <li v-for="(item, liIndex) in section.list" :key="liIndex">{{ item }}</li>
        </ul>

        <div v-if="section.table" class="cms-section__table-wrap">
            <table class="cms-section__table">
                <thead>
                    <tr>
                        <th v-for="header in section.table.headers" :key="header" scope="col">{{ header }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(row, rowIndex) in section.table.rows" :key="rowIndex">
                        <td v-for="(cell, cellIndex) in row" :key="cellIndex">{{ cell }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
</template>

<script setup>
defineProps({
    sections: {
        type: Array,
        default: () => [],
    },
});
</script>

<style scoped>
.cms-section {
    margin-bottom: 1.25rem;
}

.cms-section__title {
    margin: 0 0 0.75rem;
    font-size: 1.25rem;
}

.cms-section__copy,
.cms-section__body :deep(p) {
    margin: 0 0 0.75rem;
    line-height: 1.6;
}

.cms-section__list {
    margin: 0 0 0.75rem 1.25rem;
}

.cms-section__table {
    width: 100%;
    border-collapse: collapse;
}

.cms-section__table th,
.cms-section__table td {
    border: 1px solid color-mix(in oklab, var(--color-text-secondary) 25%, transparent);
    padding: 0.5rem 0.65rem;
    text-align: left;
}
</style>
