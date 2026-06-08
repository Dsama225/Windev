export const PAGE_STATUSES = [
    { value: 'published', label: 'Publiée', hint: 'Visible sur le site public.' },
    { value: 'draft', label: 'Brouillon', hint: 'Masquée sauf prévisualisation.' },
    { value: 'archived', label: 'Archivée', hint: 'Hors ligne, conservée en base.' },
];

export const PAGE_TYPES = {
    home: { label: 'Accueil', hint: 'Zones CTA et notes spécifiques à la page d’accueil.' },
    workspace: { label: 'Workspace', hint: 'Page PC SOFT Workspace.' },
    product: { label: 'Produit', hint: 'Hero, sections, composants et liens PDF.' },
    publication: { label: 'Publication', hint: 'Contenu HTML long format (nouveautés, etc.).' },
    connector: { label: 'Connecteur', hint: 'Fonctionnalités et liens ressources latéraux.' },
    support: { label: 'Support', hint: 'Pages assistance et ressources.' },
    training: { label: 'Formation', hint: 'Pages formation PC SOFT.' },
    pcsoft: { label: 'PC SOFT', hint: 'Pages institutionnelles.' },
    subscribe: { label: 'Abonnement', hint: 'Page souscription.' },
    download: { label: 'Téléchargement', hint: 'Pages Express et ressources.' },
};

export function pageTypeMeta(pageType) {
    return PAGE_TYPES[pageType] ?? { label: pageType ?? 'Page', hint: '' };
}

export function pageStatusLabel(status) {
    return PAGE_STATUSES.find((item) => item.value === status)?.label ?? status;
}

export function pageStatusClass(status) {
    if (status === 'published') {
        return 'admin-badge--success';
    }

    if (status === 'draft') {
        return 'admin-badge--warning';
    }

    return 'admin-badge--muted';
}
