<template>
    <AppNavbar />
    <main class="subscribe-page pb-10">
        <section class="section-shell subscribe-page__section">
            <div class="subscribe-page__card glass-frame">
                <div class="subscribe-page__hero">
                    <img
                        :src="pcsoftLogo.src"
                        alt="PC SOFT"
                        class="subscribe-page__logo"
                        @error="onLogoError"
                    />

                    <div class="subscribe-page__intro">
                        <p>
                            Pour accompagner vos projets de développement et vous proposer des produits toujours plus performants,
                            <br />
                            nous apportons des modifications à nos solutions.
                        </p>
                        <p>
                            Jusqu'à présent, nos solutions étaient disponibles sous forme d'abonnements logiciels individuels.
                            <br />
                            Nous introduisons désormais
                            <strong>des offres complètes et cohérentes, adaptées à la taille de votre organisation</strong>, sous la forme de
                            suites logicielles et de services intégrés.
                        </p>
                        <p>
                            Ces changements ont un objectif clair :
                            <strong>vous apporter plus de valeur, de performance et de simplicité, grâce à une offre mieux adaptée aux besoins de votre entreprise.</strong>
                        </p>
                        <p class="subscribe-page__small-note">*Veuillez remplir le questionnaire pour nous aider à mieux comprendre vos besoins.</p>
                    </div>

                    <a
                        class="subscribe-page__contact-btn"
                        :href="SUBSCRIBE_SALES_CONTACT_URL"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Contacter notre service commercial
                    </a>
                </div>
            </div>
        </section>

        <section class="section-shell subscribe-page__faq">
            <div class="subscribe-page__faq-card glass-frame">
                <h1 class="subscribe-page__faq-title">Foire aux questions (FAQ)</h1>

                <div class="subscribe-page__tabs" role="tablist" aria-label="Catégories FAQ">
                    <button
                        v-for="section in subscribeFaqSections"
                        :key="section.id"
                        type="button"
                        class="subscribe-page__tab"
                        :class="{ 'subscribe-page__tab--active': activeFaqSection === section.id }"
                        role="tab"
                        :aria-selected="activeFaqSection === section.id"
                        :aria-controls="`subscribe-faq-panel-${section.id}`"
                        @click="activeFaqSection = section.id"
                    >
                        {{ section.label }}
                    </button>
                </div>

                <div
                    v-for="section in subscribeFaqSections"
                    :id="`subscribe-faq-panel-${section.id}`"
                    :key="`panel-${section.id}`"
                    v-show="activeFaqSection === section.id"
                    role="tabpanel"
                    :aria-labelledby="`subscribe-faq-tab-${section.id}`"
                >
                    <ul class="subscribe-page__faq-list">
                        <li
                            v-for="(item, index) in section.items"
                            :key="item.question"
                            class="subscribe-page__faq-item"
                        >
                            <button
                                type="button"
                                class="subscribe-page__question-btn"
                                :aria-expanded="openFaqKey === faqItemKey(section.id, index)"
                                :aria-controls="`subscribe-faq-answer-${section.id}-${index}`"
                                @click="toggleFaqItem(section.id, index)"
                            >
                                <span
                                    class="subscribe-page__chevron"
                                    :class="{ 'subscribe-page__chevron--open': openFaqKey === faqItemKey(section.id, index) }"
                                    aria-hidden="true"
                                >
                                    ›
                                </span>
                                <span>{{ item.question }}</span>
                            </button>

                            <div
                                v-show="openFaqKey === faqItemKey(section.id, index)"
                                :id="`subscribe-faq-answer-${section.id}-${index}`"
                                class="subscribe-page__answer"
                            >
                                <div
                                    v-for="(block, blockIndex) in item.answer"
                                    :key="`${item.question}-${blockIndex}`"
                                    class="subscribe-page__answer-block"
                                >
                                    <p v-if="block.type === 'p' && block.text" class="subscribe-page__answer-text">
                                        {{ block.text }}
                                    </p>
                                    <p v-else-if="block.type === 'p' && block.segments" class="subscribe-page__answer-text">
                                        <template v-for="(segment, segmentIndex) in block.segments" :key="segmentIndex">
                                            <span v-if="segment.kind === 'text'">{{ segment.value }}</span>
                                            <a
                                                v-else-if="segment.kind === 'link'"
                                                class="subscribe-page__answer-link"
                                                :href="segment.href"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {{ segment.text }}
                                            </a>
                                        </template>
                                    </p>
                                    <ul v-else-if="block.type === 'ul'" class="subscribe-page__answer-list">
                                        <li v-for="listItem in block.items" :key="listItem">{{ listItem }}</li>
                                    </ul>
                                    <ol v-else-if="block.type === 'ol'" class="subscribe-page__answer-list subscribe-page__answer-list--ordered">
                                        <li v-for="listItem in block.items" :key="listItem">{{ listItem }}</li>
                                    </ol>
                                </div>
                            </div>

                            <div v-if="index !== section.items.length - 1" class="subscribe-page__line" aria-hidden="true" />
                        </li>
                    </ul>

                    <div
                        v-if="section.id === 'security-key'"
                        class="subscribe-page__video-note"
                    >
                        <p>
                            Regardez cette vidéo pour en savoir plus sur la clé de sécurité :
                            <a
                                class="subscribe-page__answer-link"
                                :href="SUBSCRIBE_SECURITY_KEY_VIDEO_URL"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {{ SUBSCRIBE_SECURITY_KEY_VIDEO_URL }}
                            </a>
                        </p>
                    </div>
                </div>

                <p class="subscribe-page__contact-line">Vous n'avez pas trouvé la réponse que vous cherchiez ?</p>
                <p class="subscribe-page__contact-line">N'hésitez pas à nous contacter :</p>
                <p class="subscribe-page__contact-line">E-mail : <a href="mailto:info@windev.com">info@windev.com</a></p>
                <p class="subscribe-page__contact-line">Tél. : <a href="tel:+33467032032">+ 33 (0)4 67 032 032</a></p>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import { ref, watch } from 'vue';
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import {
    SUBSCRIBE_SALES_CONTACT_URL,
    SUBSCRIBE_SECURITY_KEY_VIDEO_URL,
    subscribeFaqSections,
} from '../data/subscribePageContent.js';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages.js';

const pcsoftLogo = SHARED_IMAGES.pcsoftLogoDark;
const activeFaqSection = ref('subscription');
const openFaqKey = ref(null);

function onLogoError(event) {
    applyImageFallback(event, pcsoftLogo.fallback);
}

function faqItemKey(sectionId, index) {
    return `${sectionId}-${index}`;
}

function toggleFaqItem(sectionId, index) {
    const key = faqItemKey(sectionId, index);
    openFaqKey.value = openFaqKey.value === key ? null : key;
}

watch(activeFaqSection, () => {
    openFaqKey.value = null;
});
</script>

<style scoped>
.subscribe-page {
    color: var(--color-text-primary);
}

.subscribe-page__section {
    margin-top: 1rem;
}

.subscribe-page__card {
    padding: clamp(1.25rem, 2.8vw, 2rem);
}

.subscribe-page__hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
}

.subscribe-page__logo {
    width: min(210px, 70vw);
    height: auto;
}

.subscribe-page__intro {
    max-width: 640px;
    color: var(--color-text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
}

.subscribe-page__intro p {
    margin: 0 0 0.8rem;
}

.subscribe-page__intro strong {
    color: var(--color-text-primary);
    font-weight: 700;
}

.subscribe-page__small-note {
    margin-bottom: 0;
    font-size: 0.86rem;
    font-style: italic;
}

.subscribe-page__contact-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.55rem 1rem;
    border-radius: 9999px;
    text-decoration: none;
    font-weight: 700;
    font-size: 0.86rem;
    color: #fff;
    background: linear-gradient(135deg, #ec3c96, #c02f84);
    box-shadow: 0 8px 18px rgba(192, 47, 132, 0.28);
}

.subscribe-page__contact-btn:hover {
    transform: translateY(-1px);
}

.subscribe-page__faq {
    margin-top: 1.25rem;
}

.subscribe-page__faq-card {
    padding: clamp(1.15rem, 2.5vw, 1.8rem);
}

.subscribe-page__faq-title {
    margin: 0;
    text-align: center;
    font-weight: 400;
    font-size: clamp(1.5rem, 3.5vw, 2rem);
    color: var(--color-brand);
}

.subscribe-page__tabs {
    margin-top: 1.2rem;
    display: flex;
    gap: 1.1rem;
    align-items: center;
}

.subscribe-page__tab {
    border: 0;
    padding: 0;
    background: transparent;
    color: var(--color-text-primary);
    font-size: 0.95rem;
    cursor: pointer;
}

.subscribe-page__tab--active {
    color: var(--color-brand-strong);
    text-decoration: underline;
    text-underline-offset: 0.2rem;
}

.subscribe-page__faq-list {
    margin: 0.7rem 0 0;
    padding: 0;
    list-style: none;
}

.subscribe-page__faq-item {
    margin: 0;
}

.subscribe-page__question-btn {
    width: 100%;
    border: 0;
    background: transparent;
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
    gap: 0.65rem;
    color: var(--color-text-primary);
    text-align: left;
    font-size: 0.95rem;
    cursor: pointer;
}

.subscribe-page__chevron {
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.25rem;
    line-height: 1;
    color: color-mix(in oklab, var(--color-text-primary) 85%, transparent);
    transition: transform 0.2s ease;
}

.subscribe-page__chevron--open {
    transform: rotate(90deg);
}

.subscribe-page__answer {
    margin: 0 0 0.5rem 1.9rem;
    padding: 0.85rem 1rem;
    border-radius: 0.5rem;
    background: #f1f4ff;
    color: #010110;
}

html.theme-dark .subscribe-page__answer {
    background: color-mix(in oklab, var(--color-surface) 88%, #4a5f9a 12%);
    color: var(--color-text-primary);
}

.subscribe-page__answer-block + .subscribe-page__answer-block {
    margin-top: 0.65rem;
}

.subscribe-page__answer-text {
    margin: 0;
    font-size: 0.92rem;
    line-height: 1.6;
}

.subscribe-page__answer-list {
    margin: 0.35rem 0 0;
    padding-left: 1.2rem;
    font-size: 0.92rem;
    line-height: 1.55;
}

.subscribe-page__answer-list li + li {
    margin-top: 0.2rem;
}

.subscribe-page__answer-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
    word-break: break-all;
}

.subscribe-page__answer-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.subscribe-page__video-note {
    margin-top: 0.5rem;
    padding: 0.75rem 0;
    border-top: 1px solid color-mix(in oklab, var(--color-text-secondary) 26%, transparent);
    font-size: 0.92rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.subscribe-page__video-note p {
    margin: 0;
}

.subscribe-page__line {
    height: 1px;
    background: color-mix(in oklab, var(--color-text-secondary) 26%, transparent);
}

.subscribe-page__contact-line {
    margin: 0.2rem 0;
    font-size: 0.95rem;
    color: var(--color-text-secondary);
}

.subscribe-page__contact-line:first-of-type {
    margin-top: 0.9rem;
}

.subscribe-page__contact-line a {
    color: var(--color-brand);
    text-decoration: none;
    font-weight: 600;
}

.subscribe-page__contact-line a:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

@media (max-width: 720px) {
    .subscribe-page__question-btn {
        font-size: 0.9rem;
    }

    .subscribe-page__answer {
        margin-left: 1.25rem;
    }
}
</style>
