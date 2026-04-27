<template>
    <section class="section-shell mt-6 md:mt-8">
        <div class="glass-frame p-4 md:p-6" @mouseenter="pause" @mouseleave="play">
            <div class="mb-3 flex items-center justify-between">
                <h2 class="text-xl font-bold md:text-2xl">WINDEV Tour : photos de roadshow</h2>
                <div class="flex items-center gap-2">
                    <button class="ui-button ui-button-ghost" aria-label="Slide precedente" @click="prev">Prev</button>
                    <button class="ui-button ui-button-ghost" aria-label="Slide suivante" @click="next">Next</button>
                </div>
            </div>

            <div tabindex="0" @keydown.left.prevent="prev" @keydown.right.prevent="next">
                <Transition name="slide-fade" mode="out-in">
                    <article :key="current.id" class="ui-card min-h-[260px] md:min-h-[300px]">
                        <img
                            :src="current.image"
                            :alt="current.title"
                            class="h-40 w-full rounded-xl object-cover md:h-52"
                            loading="lazy"
                        />
                        <div class="mt-4">
                            <p class="text-secondary text-sm">{{ current.kicker }}</p>
                            <h3 class="mt-1 text-xl font-semibold">{{ current.title }}</h3>
                            <p class="text-secondary mt-2">{{ current.description }}</p>
                        </div>
                    </article>
                </Transition>
            </div>

            <div class="mt-4 flex items-center justify-center gap-2">
                <button
                    v-for="(slide, index) in slides"
                    :key="slide.id"
                    :aria-label="`Aller a la slide ${index + 1}`"
                    class="h-2.5 w-2.5 rounded-full"
                    :class="index === currentIndex ? 'bg-[var(--color-brand)]' : 'bg-[var(--color-text-secondary)]/35'"
                    @click="goTo(index)"
                ></button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

const slides = [
    {
        id: 1,
        kicker: 'Conference',
        title: 'Evenement national des developpeurs',
        description: 'Retours d experience, ateliers techniques, et demo live sur la suite 2026.',
        image: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 2,
        kicker: 'Productivite',
        title: 'Creation rapide d applications metier',
        description: 'Des composants visuels modernes pour accelerer vos projets SI.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 3,
        kicker: 'Cross-platform',
        title: 'Desktop, Web, Mobile dans un meme socle',
        description: 'Code unifie et deploiement cible avec experience utilisateur native.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
    },
];

const currentIndex = ref(0);
let intervalId = null;

const current = computed(() => slides[currentIndex.value]);

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.length;
};

const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length;
};

const goTo = (index) => {
    currentIndex.value = index;
};

const play = () => {
    pause();
    intervalId = setInterval(next, 4200);
};

const pause = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

onMounted(play);
onBeforeUnmount(pause);
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}
.slide-fade-enter-from {
    opacity: 0;
    transform: translateX(14px);
}
.slide-fade-leave-to {
    opacity: 0;
    transform: translateX(-14px);
}
</style>
