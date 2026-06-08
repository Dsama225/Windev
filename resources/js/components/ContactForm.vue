<template>
    <form class="contact-form" novalidate @submit.prevent="onSubmit">
        <div v-if="status === 'success'" class="contact-form__alert contact-form__alert--success" role="status">
            <p class="contact-form__alert-title">Message envoyé</p>
            <p class="contact-form__alert-text">
                Merci de nous avoir contactés. Notre équipe vous répondra dans les meilleurs délais.
            </p>
        </div>

        <div v-else-if="status === 'error'" class="contact-form__alert contact-form__alert--error" role="alert">
            <p class="contact-form__alert-title">Impossible d'envoyer votre message</p>
            <p class="contact-form__alert-text">{{ errorMessage }}</p>
        </div>

        <fieldset class="contact-form__fieldset" :disabled="submitting">
            <legend class="visually-hidden">Coordonnées</legend>

            <div class="contact-form__row">
                <div class="contact-form__field">
                    <label class="contact-form__label" for="contact-first-name">Prénom *</label>
                    <input
                        id="contact-first-name"
                        v-model.trim="form.first_name"
                        class="contact-form__input"
                        type="text"
                        name="first_name"
                        autocomplete="given-name"
                        required
                        maxlength="80"
                    />
                </div>
                <div class="contact-form__field">
                    <label class="contact-form__label" for="contact-last-name">Nom *</label>
                    <input
                        id="contact-last-name"
                        v-model.trim="form.last_name"
                        class="contact-form__input"
                        type="text"
                        name="last_name"
                        autocomplete="family-name"
                        required
                        maxlength="80"
                    />
                </div>
            </div>

            <div class="contact-form__row">
                <div class="contact-form__field">
                    <label class="contact-form__label" for="contact-email">Email *</label>
                    <input
                        id="contact-email"
                        v-model.trim="form.email"
                        class="contact-form__input"
                        type="email"
                        name="email"
                        autocomplete="email"
                        required
                        maxlength="255"
                    />
                </div>
                <div class="contact-form__field">
                    <label class="contact-form__label" for="contact-phone">Téléphone</label>
                    <input
                        id="contact-phone"
                        v-model.trim="form.phone"
                        class="contact-form__input"
                        type="tel"
                        name="phone"
                        autocomplete="tel"
                        maxlength="40"
                    />
                </div>
            </div>

            <div class="contact-form__field">
                <label class="contact-form__label" for="contact-company">Société</label>
                <input
                    id="contact-company"
                    v-model.trim="form.company"
                    class="contact-form__input"
                    type="text"
                    name="company"
                    autocomplete="organization"
                    maxlength="120"
                />
            </div>

            <div class="contact-form__field">
                <label class="contact-form__label" for="contact-topic">Sujet *</label>
                <select id="contact-topic" v-model="form.topic" class="contact-form__input contact-form__select" name="topic" required>
                    <option v-for="option in topicOptions" :key="option.value" :value="option.value">
                        {{ option.label }}
                    </option>
                </select>
            </div>

            <div class="contact-form__field">
                <label class="contact-form__label" for="contact-message">Message *</label>
                <textarea
                    id="contact-message"
                    v-model.trim="form.message"
                    class="contact-form__input contact-form__textarea"
                    name="message"
                    rows="6"
                    required
                    minlength="20"
                    maxlength="5000"
                    placeholder="Décrivez votre demande (20 caractères minimum)"
                />
            </div>

            <label class="contact-form__consent">
                <input v-model="form.consent" class="contact-form__checkbox" type="checkbox" name="consent" required />
                <span>
                    J'accepte que PC SOFT utilise mes coordonnées pour répondre à ma demande, conformément à la
                    <a
                        class="contact-form__inline-link"
                        href="https://windev.com/pcsoft/data-protection-policy.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        politique de confidentialité
                    </a>.
                </span>
            </label>

            <div class="contact-form__actions">
                <button class="contact-form__submit" type="submit" :disabled="submitting">
                    {{ submitting ? 'Envoi…' : 'Envoyer le message' }}
                </button>
            </div>
        </fieldset>
    </form>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { submitContactForm } from '../services/contactService.js';

const topicOptions = [
    { value: 'sales', label: 'Ventes et abonnements' },
    { value: 'technical', label: 'Support technique' },
    { value: 'training', label: 'Formation' },
    { value: 'billing', label: 'Facturation et licences' },
    { value: 'other', label: 'Autre' },
];

const form = reactive({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    company: '',
    topic: 'sales',
    message: '',
    consent: false,
});

const submitting = ref(false);
const status = ref(null);
const errorMessage = ref('');

function resetForm() {
    form.first_name = '';
    form.last_name = '';
    form.email = '';
    form.phone = '';
    form.company = '';
    form.topic = 'sales';
    form.message = '';
    form.consent = false;
}

async function onSubmit() {
    if (submitting.value) {
        return;
    }

    status.value = null;
    errorMessage.value = '';
    submitting.value = true;

    try {
        await submitContactForm({ ...form });
        status.value = 'success';
        resetForm();
    } catch (error) {
        status.value = 'error';
        errorMessage.value =
            error.response?.data?.message ??
            error.userMessage ??
            'Une erreur inattendue s\'est produite. Veuillez réessayer ultérieurement.';
    } finally {
        submitting.value = false;
    }
}
</script>

<style scoped>
.contact-form {
    margin-top: 0.75rem;
}

.contact-form__fieldset {
    margin: 0;
    padding: 0;
    border: 0;
    min-width: 0;
}

.contact-form__row {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}

.contact-form__field {
    display: grid;
    gap: 0.35rem;
    margin-bottom: 0.75rem;
}

.contact-form__label {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.contact-form__input {
    width: 100%;
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-md);
    background: var(--color-input-bg);
    padding: 0.62rem 0.75rem;
    font: inherit;
    font-size: 0.9rem;
    color: var(--color-text-primary);
    transition: border-color 0.16s ease, box-shadow 0.16s ease;
}

.contact-form__input:focus {
    outline: none;
    border-color: var(--color-gold);
    box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-gold) 28%, transparent);
}

.contact-form__select {
    appearance: none;
    background-color: var(--color-input-bg);
    background-image:
        linear-gradient(45deg, transparent 50%, var(--color-eyebrow) 50%),
        linear-gradient(135deg, var(--color-eyebrow) 50%, transparent 50%);
    background-position:
        calc(100% - 18px) calc(50% + 2px),
        calc(100% - 12px) calc(50% + 2px);
    background-size:
        6px 6px,
        6px 6px;
    background-repeat: no-repeat;
    padding-right: 2rem;
}

.contact-form__textarea {
    resize: vertical;
    min-height: 8rem;
}

.contact-form__consent {
    display: flex;
    align-items: flex-start;
    gap: 0.55rem;
    margin: 0.2rem 0 0.85rem;
    font-size: 0.84rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.contact-form__checkbox {
    margin-top: 0.18rem;
    flex-shrink: 0;
}

.contact-form__inline-link {
    color: var(--color-brand);
    font-weight: 700;
    text-decoration: none;
}

.contact-form__inline-link:hover {
    text-decoration: underline;
}

.contact-form__actions {
    display: flex;
    justify-content: flex-start;
}

.contact-form__submit {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.62rem 1.15rem;
    border: 1px solid #e8c820;
    border-radius: var(--radius-md);
    background: linear-gradient(180deg, #ffe566 0%, #f5d020 100%);
    color: #1a2744;
    font-weight: 800;
    font-size: 0.88rem;
    cursor: pointer;
    transition: filter 0.16s ease, transform 0.16s ease;
}

.contact-form__submit:hover:not(:disabled) {
    filter: brightness(1.03);
    transform: translateY(-1px);
}

.contact-form__submit:disabled {
    opacity: 0.72;
    cursor: wait;
}

.contact-form__alert {
    margin-bottom: 0.85rem;
    padding: 0.85rem 0.95rem;
    border-radius: var(--radius-md);
    border: 1px solid transparent;
}

.contact-form__alert--success {
    background: color-mix(in oklab, #22c55e 12%, var(--color-muted-surface));
    border-color: color-mix(in oklab, #22c55e 35%, var(--color-border-strong));
}

.contact-form__alert--error {
    background: color-mix(in oklab, #ef4444 10%, var(--color-muted-surface));
    border-color: color-mix(in oklab, #ef4444 30%, var(--color-border-strong));
}

.contact-form__alert-title {
    margin: 0 0 0.25rem;
    font-size: 0.92rem;
    font-weight: 800;
}

.contact-form__alert-text {
    margin: 0;
    font-size: 0.86rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

@media (max-width: 640px) {
    .contact-form__row {
        grid-template-columns: 1fr;
    }
}
</style>
