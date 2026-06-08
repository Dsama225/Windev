const BASE_TABS = [
    { id: 'general', label: 'Général & SEO' },
    { id: 'alert', label: 'Bandeau' },
    { id: 'hero', label: 'Hero' },
    { id: 'components', label: 'Composants' },
    { id: 'sections', label: 'Sections' },
    { id: 'links', label: 'Liens & PDF' },
    { id: 'documents', label: 'Documents' },
    { id: 'media', label: 'Médias' },
];

const TYPE_TABS = {
    home: [{ id: 'home', label: 'Zones accueil' }],
    publication: [{ id: 'publication', label: 'Publication' }],
    connector: [{ id: 'connector', label: 'Connecteur' }],
};

export function editorTabsForPageType(pageType = 'product') {
    const extra = TYPE_TABS[pageType] ?? [];

    return [...BASE_TABS, ...extra];
}

export function defaultActiveTab(pageType = 'product') {
    return 'general';
}
