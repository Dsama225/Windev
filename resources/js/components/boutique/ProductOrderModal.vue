<template>
    <Teleport to="body">
        <Transition name="order-modal">
            <div
                v-if="open"
                class="order-modal"
                role="presentation"
                @click.self="close"
            >
                <div
                    class="order-modal__panel glass-frame"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="order-modal-title"
                >
                    <button type="button" class="order-modal__close" aria-label="Fermer" @click="close">×</button>

                    <template v-if="success">
                        <h2 id="order-modal-title" class="order-modal__title">Commande enregistrée</h2>
                        <p class="order-modal__intro">
                            Votre numéro de commande, généré automatiquement par le site, est :
                        </p>
                        <p class="order-modal__number">{{ success.order_number }}</p>
                        <p class="order-modal__intro">
                            Conservez-le pour le suivi. Notre équipe traitera votre demande dans les plus brefs délais.
                        </p>
                        <button type="button" class="ui-button ui-button-primary" @click="close">Fermer</button>
                    </template>

                    <form v-else @submit.prevent="submit">
                        <h2 id="order-modal-title" class="order-modal__title">Commander — {{ productName }}</h2>
                        <p class="order-modal__intro">
                            Saisissez vos coordonnées pour valider votre commande.
                            Un numéro de commande unique vous sera attribué automatiquement.
                        </p>

                        <label class="order-modal__field">
                            <span>Nom complet *</span>
                            <input v-model="form.customer_name" type="text" required autocomplete="name" />
                        </label>
                        <label class="order-modal__field">
                            <span>Adresse e-mail *</span>
                            <input v-model="form.customer_email" type="email" required autocomplete="email" />
                        </label>
                        <label class="order-modal__field">
                            <span>Téléphone</span>
                            <input v-model="form.customer_phone" type="tel" autocomplete="tel" />
                        </label>
                        <p v-if="error" class="order-modal__error" role="alert">{{ error }}</p>

                        <div class="order-modal__actions">
                            <button type="submit" class="ui-button ui-button-primary" :disabled="submitting">
                                {{ submitting ? 'Validation…' : 'Valider la commande' }}
                            </button>
                            <button type="button" class="ui-button ui-button-ghost" @click="close">Annuler</button>
                        </div>
                    </form>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup>
import { reactive, ref, watch } from 'vue';
import { ordersService } from '../../services/ordersService';

const props = defineProps({
    open: { type: Boolean, default: false },
    productSlug: { type: String, default: '' },
    productName: { type: String, default: '' },
});

const emit = defineEmits(['close', 'success']);

const form = reactive({
    customer_name: '',
    customer_email: '',
    customer_phone: '',
});

const submitting = ref(false);
const error = ref('');
const success = ref(null);

function resetForm() {
    form.customer_name = '';
    form.customer_email = '';
    form.customer_phone = '';
    error.value = '';
    success.value = null;
    submitting.value = false;
}

function close() {
    emit('close');
}

watch(
    () => props.open,
    (isOpen) => {
        if (!isOpen) {
            resetForm();
        }
    },
);

async function submit() {
    submitting.value = true;
    error.value = '';

    try {
        const result = await ordersService.create({
            product_slug: props.productSlug,
            customer_name: form.customer_name.trim(),
            customer_email: form.customer_email.trim(),
            customer_phone: form.customer_phone.trim() || undefined,
        });
        success.value = result;
        emit('success', result);
    } catch (err) {
        error.value = err.response?.data?.message ?? 'Impossible d\'enregistrer la commande. Réessayez.';
    } finally {
        submitting.value = false;
    }
}
</script>

<style scoped>
.order-modal {
    position: fixed;
    inset: 0;
    z-index: 5000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background: rgb(0 0 0 / 0.45);
}

.order-modal__panel {
    position: relative;
    width: min(100%, 28rem);
    padding: clamp(1rem, 2vw, 1.5rem);
}

.order-modal__close {
    position: absolute;
    top: 0.65rem;
    right: 0.75rem;
    border: none;
    background: transparent;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    color: var(--color-text-secondary);
}

.order-modal__title {
    margin: 0 0 0.5rem;
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--color-brand-strong);
}

.order-modal__intro {
    margin: 0 0 0.75rem;
    font-size: 0.92rem;
    line-height: 1.55;
    color: var(--color-text-secondary);
}

.order-modal__number {
    margin: 0 0 0.75rem;
    padding: 0.65rem 0.85rem;
    border-radius: var(--radius-lg);
    background: var(--color-input-bg);
    border: 1px solid var(--color-border-strong);
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-align: center;
    color: var(--color-brand-strong);
}

.order-modal__field {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    margin-bottom: 0.75rem;
    font-size: 0.88rem;
    font-weight: 600;
}

.order-modal__field input {
    padding: 0.55rem 0.75rem;
    border-radius: var(--radius-lg);
    border: 1px solid var(--color-border-strong);
    background: var(--color-input-bg);
    color: var(--color-text-primary);
    font-weight: 400;
}

.order-modal__error {
    margin: 0 0 0.75rem;
    color: #b91c1c;
    font-size: 0.9rem;
}

.order-modal__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 0.25rem;
}

.order-modal-enter-active,
.order-modal-leave-active {
    transition: opacity 0.2s ease;
}

.order-modal-enter-from,
.order-modal-leave-to {
    opacity: 0;
}
</style>
