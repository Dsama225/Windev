/** PC SOFT section content aligned with windev.com/pcsoft */

export const PCSOFT_CONTACT_FORM_URL = 'https://pcsoft.fr/fr-fr/contact';

export const pcsoftPageCatalog = {
    'pcsoft.about': {
        documentTitle: 'PC SOFT — About us',
        title: 'PC SOFT — ABOUT US',
        sections: [
            {
                paragraphs: [
                    'PC SOFT was founded in 1984. PC SOFT is specialized in the design of professional development environments for Internet, Intranet, Windows, Linux, Unix, Android, Windows 10 IoT and iOS.',
                    'These tools enable the creation of software solutions, as well as Internet and Intranet sites. Millions of applications created with PC SOFT products are used worldwide.',
                ],
            },
            {
                paragraphs: [
                    "PC SOFT has been working on its vision of making high-technology tools available to a great number of developers since 1984. PC SOFT's first best seller was HIGH SCREEN, a screen generator (10,000 copies sold in the US). Building on the experience gained from this UI editor which sold tens of thousands of copies worldwide, PC SOFT then created WINDEV, an IDE & ALM suite for Windows and .Net that featured a wide array of functionalities and an unprecedented ease of use.",
                    'Over 180,000 professional developers have already chosen WINDEV.',
                ],
            },
            {
                paragraphs: [
                    'By using PC SOFT professional development solutions, development teams can work up to 10 times faster.',
                    'PC SOFT is also known for its innovative approach, always seeking to offer significant advantages to clients: Technical Support, unrivaled user-friendliness, dynamic and original marketing.',
                ],
            },
        ],
        relatedLinks: [
            { label: 'Contact form', href: PCSOFT_CONTACT_FORM_URL },
            { label: 'International distributors', to: '/pc-soft/distributors' },
            { label: 'Site map', to: '/pc-soft/sitemap' },
        ],
    },
    'pcsoft.contact': {
        documentTitle: 'Contact PC SOFT',
        title: 'CONTACT US',
        lead: 'You are already a customer or would like to become one? PC SOFT offers complete, consistent packages adapted to the size of your organization.',
        offices: [
            {
                name: 'Head office — Montpellier',
                lines: [
                    'PC SOFT',
                    '3 rue de Puech Villa — BP 44408',
                    '34197 Montpellier Cedex 05 — FRANCE',
                    '+33 (0)4 67 03 20 32',
                ],
            },
            {
                name: 'Paris Île-de-France agency',
                lines: [
                    'PC SOFT',
                    'Parc les Erables — Bâtiment 4',
                    '66 route de Sartrouville',
                    '78230 Le Pecq — FRANCE',
                    '+33 (0)1 48 01 48 88',
                ],
            },
        ],
        formNote:
            'For a callback, quote request or account creation, use the official PC SOFT contact form.',
        formUrl: PCSOFT_CONTACT_FORM_URL,
        formLabel: 'Open the contact form',
        relatedLinks: [
            { label: 'About PC SOFT', to: '/pc-soft' },
            { label: 'International distributors', to: '/pc-soft/distributors' },
            { label: 'Request a quote', href: 'https://windev.com/pcsoft/request/request-a-quote.html' },
        ],
    },
    'pcsoft.distributors': {
        documentTitle: 'International distributors',
        title: 'INTERNATIONAL DISTRIBUTORS',
        lead: 'Select your country to view the official PC SOFT distributor or contact details.',
        relatedLinks: [
            { label: 'About PC SOFT', to: '/pc-soft' },
            { label: 'Contact form', href: PCSOFT_CONTACT_FORM_URL },
        ],
    },
    'pcsoft.sitemap': {
        documentTitle: 'Site map',
        title: 'SITE MAP',
        lead: 'Find information across the public PC SOFT website.',
        relatedLinks: [
            { label: 'About PC SOFT', to: '/pc-soft' },
            { label: 'Contact form', href: PCSOFT_CONTACT_FORM_URL },
        ],
    },
};

export function getPcsoftPage(routeName) {
    return pcsoftPageCatalog[routeName] ?? null;
}
