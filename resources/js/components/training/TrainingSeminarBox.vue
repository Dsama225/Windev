<template>
    <div
        class="seminar-box"
        :class="[`seminar-box--${theme}`, color ? `seminar-box--accent-${color}` : '']"
        @mouseenter="showTip = true"
        @mouseleave="showTip = false"
        @focusin="showTip = true"
        @focusout="showTip = false"
    >
        <a
            class="seminar-box__link"
            :href="seminar.href"
            target="_blank"
            rel="noopener noreferrer"
            :aria-describedby="showTip ? tooltipId : undefined"
        >
            <span v-if="seminar.product" class="seminar-box__product">{{ seminar.product }}</span>
            <span v-if="seminar.name" class="seminar-box__name">{{ seminar.name }}</span>
            <span class="seminar-box__level">{{ seminar.level }}</span>
            <span class="seminar-box__duration">{{ seminar.duration }}</span>
        </a>
        <div
            v-show="showTip"
            :id="tooltipId"
            class="seminar-box__tooltip"
            role="tooltip"
        >
            {{ seminar.summary }}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    seminar: { type: Object, required: true },
    theme: { type: String, default: 'windev' },
    color: { type: String, default: '' },
});

const showTip = ref(false);
const tooltipId = `seminar-tip-${props.seminar.id}`;
</script>

<style scoped>
.seminar-box {
    position: relative;
    flex: 0 1 auto;
    min-width: 7.5rem;
    max-width: 9.5rem;
}

.seminar-box__link {
    display: grid;
    gap: 0.15rem;
    padding: 0.55rem 0.5rem;
    min-height: 5.5rem;
    border-radius: 0.35rem;
    border: 2px solid rgba(0, 0, 0, 0.12);
    text-align: center;
    text-decoration: none;
    color: #1a2744;
    font-size: 0.72rem;
    line-height: 1.25;
    transition: transform 120ms ease, box-shadow 120ms ease;
}

.seminar-box__link:hover,
.seminar-box__link:focus-visible {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(22, 32, 58, 0.18);
    outline: none;
}

.seminar-box--windev .seminar-box__link {
    background: linear-gradient(180deg, #ffe566 0%, #f5d020 100%);
}

.seminar-box--webdev .seminar-box__link {
    background: linear-gradient(180deg, #b8dcff 0%, #7eb8e8 100%);
    color: #0f2a4a;
}

.seminar-box--mobile .seminar-box__link {
    background: linear-gradient(180deg, #ffc98a 0%, #f5a040 100%);
    min-width: 9rem;
    max-width: 11rem;
}

.seminar-box--accent-green .seminar-box__link {
    background: linear-gradient(180deg, #c8e8b8 0%, #7cb87c 100%);
}

.seminar-box--accent-pink .seminar-box__link {
    background: linear-gradient(180deg, #f5c0d8 0%, #e88ab8 100%);
}

.seminar-box--accent-purple .seminar-box__link {
    background: linear-gradient(180deg, #dcc8f0 0%, #b088d0 100%);
}

.seminar-box--accent-blue .seminar-box__link {
    background: linear-gradient(180deg, #b8daf5 0%, #6eb5e8 100%);
}

.seminar-box--accent-red .seminar-box__link {
    background: linear-gradient(180deg, #f5b8b8 0%, #e87878 100%);
}

.seminar-box--accent-orange .seminar-box__link {
    background: linear-gradient(180deg, #ffd0a0 0%, #f0a050 100%);
}

.seminar-box__product {
    font-weight: 800;
    font-size: 0.78rem;
}

.seminar-box__name {
    font-weight: 700;
}

.seminar-box__level,
.seminar-box__duration {
    font-size: 0.68rem;
    color: rgba(26, 39, 68, 0.85);
}

.seminar-box__tooltip {
    position: absolute;
    z-index: 20;
    left: 50%;
    bottom: calc(100% + 0.45rem);
    transform: translateX(-50%);
    width: min(16rem, 70vw);
    padding: 0.55rem 0.65rem;
    border-radius: 0.35rem;
    background: #fff;
    border: 1px solid #c5d0e0;
    box-shadow: 0 8px 24px rgba(22, 32, 58, 0.16);
    font-size: 0.78rem;
    line-height: 1.45;
    color: #334155;
    text-align: left;
    pointer-events: none;
}

.seminar-box__tooltip::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: #fff;
}
</style>
