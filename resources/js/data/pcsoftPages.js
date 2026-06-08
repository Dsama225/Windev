/** PC SOFT section content aligned with windev.com/pcsoft */

export const CONTACT_FORM_PATH = '/pc-soft/contact';

export const pcsoftPageCatalog = {
    'pcsoft.about': {
        documentTitle: 'PC SOFT — À propos de nous',
        title: 'PC SOFT — À PROPOS DE NOUS',
        sections: [
            {
                paragraphs: [
                    'PC SOFT a été fondée en 1984. PC SOFT est spécialisée dans la conception d\'environnements de développement professionnels pour Internet, Intranet, Windows, Linux, Unix, Android, Windows 10 IoT et iOS.',
                    'Ces outils permettent la création de solutions logicielles, ainsi que de sites Internet et Intranet. Des millions d\'applications créées avec les produits PC SOFT sont utilisées dans le monde entier.',
                ],
            },
            {
                paragraphs: [
                    'PC SOFT œuvre depuis 1984 à sa vision de rendre les outils de haute technologie accessibles au plus grand nombre de développeurs. Le premier best-seller de PC SOFT était HIGH SCREEN, un générateur d\'écrans (10 000 exemplaires vendus aux États-Unis). Fort de l\'expérience acquise avec cet éditeur d\'interface utilisateur vendu à des dizaines de milliers d\'exemplaires dans le monde, PC SOFT a ensuite créé WINDEV, une suite IDE & ALM pour Windows et .Net offrant un large éventail de fonctionnalités et une facilité d\'utilisation inégalée.',
                    'Plus de 180 000 développeurs professionnels ont déjà choisi WINDEV.',
                ],
            },
            {
                paragraphs: [
                    'En utilisant les solutions de développement professionnelles de PC SOFT, les équipes de développement peuvent travailler jusqu\'à 10 fois plus vite.',
                    'PC SOFT est également reconnue pour son approche innovante, toujours orientée vers l\'offre d\'avantages significatifs à ses clients : Support Technique, convivialité inégalée, marketing dynamique et original.',
                ],
            },
        ],
        relatedLinks: [
            { label: 'Formulaire de contact', to: CONTACT_FORM_PATH },
            { label: 'Distributeurs internationaux', to: '/pc-soft/distributors' },
            { label: 'Plan du site', to: '/pc-soft/sitemap' },
        ],
    },
    'pcsoft.contact': {
        documentTitle: 'Contact PC SOFT',
        title: 'NOUS CONTACTER',
        lead: 'Vous êtes déjà client ou souhaitez le devenir ? PC SOFT propose des offres complètes, cohérentes et adaptées à la taille de votre organisation.',
        showContactForm: true,
        offices: [
            {
                name: 'Siège social — Montpellier',
                lines: [
                    'PC SOFT',
                    '3 rue de Puech Villa — BP 44408',
                    '34197 Montpellier Cedex 05 — FRANCE',
                    '+33 (0)4 67 03 20 32',
                ],
            },
            {
                name: 'Agence Paris Île-de-France',
                lines: [
                    'PC SOFT',
                    'Parc les Erables — Bâtiment 4',
                    '66 route de Sartrouville',
                    '78230 Le Pecq — FRANCE',
                    '+33 (0)1 48 01 48 88',
                ],
            },
        ],
        formNote: 'Remplissez le formulaire ci-dessous pour être rappelé, demander un devis ou créer un compte.',
        relatedLinks: [
            { label: 'À propos de PC SOFT', to: '/pc-soft' },
            { label: 'Distributeurs internationaux', to: '/pc-soft/distributors' },
            { label: 'Demander un devis', href: 'https://windev.com/pcsoft/request/request-a-quote.html' },
        ],
    },
    'pcsoft.distributors': {
        documentTitle: 'Distributeurs internationaux',
        title: 'DISTRIBUTEURS INTERNATIONAUX',
        lead: 'Sélectionnez votre pays pour afficher le distributeur officiel PC SOFT ou les coordonnées de contact.',
        relatedLinks: [
            { label: 'À propos de PC SOFT', to: '/pc-soft' },
            { label: 'Formulaire de contact', to: CONTACT_FORM_PATH },
        ],
    },
    'pcsoft.sitemap': {
        documentTitle: 'Plan du site',
        title: 'PLAN DU SITE',
        lead: 'Retrouvez les informations sur l\'ensemble du site public PC SOFT.',
        relatedLinks: [
            { label: 'À propos de PC SOFT', to: '/pc-soft' },
            { label: 'Formulaire de contact', to: CONTACT_FORM_PATH },
        ],
    },
};

export function getPcsoftPage(routeName) {
    return pcsoftPageCatalog[routeName] ?? null;
}
