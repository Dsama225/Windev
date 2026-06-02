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
                            To support your development projects and provide you with even better products,
                            <br />
                            we are making some changes to our solutions.
                        </p>
                        <p>
                            Until now, our solutions have been available as individual software subscriptions.
                            <br />
                            We are now introducing
                            <strong>comprehensive, coherent offers, adapted to the size of your organization</strong>, in the form of
                            integrated software suites and services.
                        </p>
                        <p>
                            These changes have a clear purpose:
                            <strong>Provide you with greater value, performance and simplicity, through an offer better suited to your business needs.</strong>
                        </p>
                        <p class="subscribe-page__small-note">*Please fill in the questionnaire to help us better understand your needs.</p>
                    </div>

                    <a href="#" class="subscribe-page__contact-btn">Contact our sales department</a>
                </div>
            </div>
        </section>

        <section class="section-shell subscribe-page__faq">
            <div class="subscribe-page__faq-card glass-frame">
                <h1 class="subscribe-page__faq-title">Frequently Asked Questions (FAQ)</h1>

                <div class="subscribe-page__tabs" role="tablist" aria-label="FAQ categories">
                    <button type="button" class="subscribe-page__tab subscribe-page__tab--active" role="tab" aria-selected="true">
                        Subscription
                    </button>
                    <button type="button" class="subscribe-page__tab" role="tab" aria-selected="false">Security key</button>
                </div>

                <ul class="subscribe-page__faq-list">
                    <li v-for="(question, index) in questions" :key="question" class="subscribe-page__faq-item">
                        <button type="button" class="subscribe-page__question-btn">
                            <span class="subscribe-page__chevron" aria-hidden="true">›</span>
                            <span>{{ question }}</span>
                        </button>
                        <div v-if="index !== questions.length - 1" class="subscribe-page__line" aria-hidden="true" />
                    </li>
                </ul>

                <p class="subscribe-page__contact-line">Didn't find the answer you were looking for?</p>
                <p class="subscribe-page__contact-line">Feel free to contact us:</p>
                <p class="subscribe-page__contact-line">Email : <a href="mailto:info@windev.com">info@windev.com</a></p>
                <p class="subscribe-page__contact-line">Tel : + 33 (0)4 67 032 032</p>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import { applyImageFallback, SHARED_IMAGES } from '../utils/pcsoftImages.js';

const pcsoftLogo = SHARED_IMAGES.pcsoftLogoDark;

function onLogoError(event) {
    applyImageFallback(event, pcsoftLogo.fallback);
}

const questions = [
    'What are the advantages of a subscription?',
    'Which versions are available in the subscription-based model?',
    'My subscription plan allows me to use several products. How to manage these products and their subscriptions?',
    'I work on different computers at home, at work, etc. Can I switch from one computer to another?',
    'What are the "one-time initial fees"?',
    'How do I cancel my subscription?',
    'I own one or more dongle-based licenses. What happens to these dongles?',
    'I am not located in France and I purchase software through an official distributor in my country. Can I continue to do so?',
    'Is Technical Support still free?',
    'Does subscription-based software require a dongle?',
    'With a subscription, do I still own my source code and project elements?',
    "I'm stopping my subscription. Can I still distribute my applications?",
    'Can I suspend my subscription, resume it and get my old source code and project elements back?',
    'I have a dongle and it has stopped working. Can I replace it?',
];
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
    color: #526dc2;
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
    color: #5a74c7;
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
    font-size: 1.25rem;
    line-height: 1;
    color: color-mix(in oklab, var(--color-text-primary) 85%, transparent);
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
}
</style>
