export const PAGE_COMPONENT_TYPES = [
    { value: 'card', label: 'Carte', icon: '🃏', badge: 'comp-badge--card', description: 'Image, titre et texte' },
    { value: 'carousel', label: 'Carrousel', icon: '🎠', badge: 'comp-badge--carousel', description: 'Diapositives images et texte' },
    { value: 'section', label: 'Section', icon: '📄', badge: 'comp-badge--section', description: 'Bloc HTML structuré' },
    { value: 'button', label: 'Bouton', icon: '🔘', badge: 'comp-badge--button', description: 'Appel à l’action' },
];

/** Variantes rapides pour les cartes (préremplissage à l’ajout). */
export const CARD_QUICK_VARIANTS = [
    { id: 'card-standard', label: 'Carte standard', type: 'card' },
    {
        id: 'card-image-left',
        label: 'Carte image gauche',
        type: 'card',
        preset: {
            title: 'Titre de la carte',
            body: 'Texte descriptif à côté de l’image.',
            image_alt: 'Illustration',
        },
    },
    {
        id: 'card-text-only',
        label: 'Carte texte seul',
        type: 'card',
        preset: {
            title: 'Titre',
            body: 'Contenu textuel sans image.',
            image_src: '',
            image_alt: '',
        },
    },
];

export function getPageComponentMeta(type) {
    return PAGE_COMPONENT_TYPES.find((t) => t.value === type) ?? {
        value: type,
        label: type,
        icon: '📦',
        badge: 'comp-badge--default',
        description: '',
    };
}

export function getComponentPreviewSummary(component) {
    if (!component) {
        return '';
    }
    switch (component.type) {
        case 'carousel': {
            const count = component.slides?.length ?? 0;
            const first = component.slides?.[0];
            const hint = first?.title || first?.body;
            return hint ? `${count} diapositive(s) · ${truncate(hint, 48)}` : `${count} diapositive(s)`;
        }
        case 'section':
            return component.title?.trim() || truncate(stripHtml(component.body), 72) || 'Section vide';
        case 'button':
            return component.label?.trim() || 'Bouton sans libellé';
        case 'card':
        default:
            return component.title?.trim() || truncate(component.body, 72) || 'Carte sans contenu';
    }
}

function truncate(text, max) {
    const value = (text ?? '').trim();
    if (!value) {
        return '';
    }
    return value.length > max ? `${value.slice(0, max)}…` : value;
}

function stripHtml(html) {
    return (html ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function createPageComponent(type = 'card', index = 0, preset = {}) {
    const id = `comp-${index + 1}`;

    switch (type) {
        case 'carousel':
            return {
                id,
                type: 'carousel',
                slides: [{ image_src: '', title: '', body: '' }],
            };
        case 'section':
            return {
                id,
                type: 'section',
                title: '',
                body: '',
            };
        case 'button':
            return {
                id,
                type: 'button',
                label: '',
                target: '',
                variant: 'primary',
            };
        case 'card':
        default:
            return {
                id,
                type: 'card',
                image_src: '',
                image_alt: '',
                title: '',
                body: '',
                link: '',
                link_label: '',
                ...preset,
            };
    }
}

export function normalizePageComponent(raw, index = 0) {
    const type = raw?.type ?? 'card';
    const base = createPageComponent(type, index);
    base.id = raw?.id ?? base.id;

    if (type === 'carousel') {
        base.slides = Array.isArray(raw?.slides) && raw.slides.length
            ? raw.slides.map((slide) => ({
                image_src: slide.image_src ?? '',
                title: slide.title ?? '',
                body: slide.body ?? '',
            }))
            : base.slides;

        return base;
    }

    return { ...base, ...raw, type };
}
