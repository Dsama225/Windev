/** Content mirrored from https://windev.com/newfeatures */

export { featureImage } from './newFeatures2026PageImages.js';

export const NEW_FEATURES_PDF_EN =
    'https://us.pcsoft-windev-webdev.com/WX2026-Features.pdf?202510201505';

export const NEW_FEATURES_PDF_FR =
    'https://fr.pcsoft-windev-webdev.com/brochure-WX2026.pdf?202510201505';

export const NEW_FEATURES_PAGE_FR = 'https://www.pcsoft.fr/annonce2024/index.html';

export const NEW_FEATURES_EBOOK_EN = 'https://windev.com/storage/en_US/ebook/newfeatures/4';

export const OFFICIAL_IMG_BASE = 'https://windev.com/storage/en_US/img/2026/newfeatures';

export function featureImageOfficial(filename) {
    return `${OFFICIAL_IMG_BASE}/${filename}`;
}

export const newFeaturesSections = [
    {
        id: 'conversational-ai-ide',
        title: "IA conversationnelle dans l'environnement",
        badge: '001 to 009',
        products: ['WD', 'WB', 'WM'],
        tone: 'white',
        video: true,
        image: 'ia-conversationnelle.png',
        imageCompact: true,
        pdfPage: 2,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/4',
        subsections: [
            {
                title: 'Posez une question à votre assistant IA',
                paragraphs: ["L'environnement de développement intègre désormais un assistant IA conversationnel."],
            },
            {
                title: "Décrivez ce que vous voulez et laissez l'IA le réaliser pour vous",
                paragraphs: [
                    "L'environnement peut également exécuter toutes les tâches liées au projet que vous imaginez : « Génère une requête qui sélectionne les clients d'un État donné », « Crée un fichier de données pour stocker les commandes », « Passe toutes les variables en majuscules », etc.",
                ],
            },
            {
                title: "L'assistant IA agit pour vous",
                paragraphs: ["L'assistant IA peut :"],
                list: [
                    'créer un projet',
                    'créer une analyse',
                    'créer un fichier de données',
                    'créer une requête',
                    'créer une procédure',
                    '…',
                ],
                afterList: 'Vous pouvez formuler toutes ces demandes en langage naturel.',
            },
            {
                title: 'Revenez à vos conversations précédentes',
                paragraphs: [
                    "Vos conversations sont enregistrées par projet. Même si vous fermez l'environnement, vous retrouverez toutes vos conversations.",
                    'Vos conversations sont personnelles et stockées sur votre ordinateur. Vous pouvez ainsi reprendre un sujet à tout moment.',
                ],
            },
        ],
    },
    {
        id: 'pivot-table-webdev',
        title: 'Le contrôle Tableau croisé dynamique disponible dans WEBDEV',
        badge: '516 to 520',
        products: ['WB'],
        tone: 'white',
        image: 'tcd-webdev.png',
        pdfPage: 33,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/64',
        subsections: [
            {
                title: 'Les contrôles Tableau croisé dynamique : un atout pour les décideurs',
                paragraphs: [
                    "Le contrôle Tableau croisé dynamique affiche des données croisées provenant de différents fichiers d'une base de données.",
                    'Quelques exemples : ventes par famille de produits, par produit, par région, dans le temps, avec ou sans détail.',
                    'Le Tableau croisé dynamique effectue lui-même tous les calculs. Toutes les données sont calculées et affichées dynamiquement.',
                    'Note : le contrôle Tableau croisé dynamique est aussi appelé « cube ROLAP ».',
                ],
            },
            {
                title: 'Création et alimentation automatiques',
                paragraphs: [
                    "Créer un contrôle Tableau croisé dynamique dans WEBDEV 2026 est remarquablement simple. Il suffit de répondre à une série de questions dans l'assistant pour définir les données à afficher.",
                    'Ce contrôle est également alimenté automatiquement, sans code requis !',
                    'Le moteur ROLAP de WEBDEV 2026 lit automatiquement les données et effectue les calculs nécessaires pour tous les niveaux de détail possibles. Il alimente automatiquement les en-têtes de lignes et de colonnes.',
                ],
            },
            {
                title: 'Utilisation',
                paragraphs: [
                    'Les utilisateurs finaux peuvent choisir le niveau de détail souhaité. Les lignes et colonnes peuvent être développées et réduites selon les besoins.',
                    'Le résultat affiché peut être exporté vers Excel, Word, PDF, etc., comme pour tout autre tableau dans WEBDEV.',
                    "La fonctionnalité d'export Excel est largement utilisée pour les simulations.",
                ],
            },
            {
                title: 'Comparaison automatique de périodes',
                paragraphs: [
                    "L'utilisateur final peut demander à comparer une période donnée à la même période des années précédentes. Cette comparaison est disponible dans l'une des options du menu contextuel.",
                    "Par exemple, les utilisateurs peuvent comparer les ventes d'octobre 2025 aux ventes d'octobre des deux années précédentes.",
                    'Les pourcentages et les écarts sont calculés et affichés automatiquement.',
                ],
            },
        ],
    },
    {
        id: 'security-audit',
        title: 'Audit de sécurité du projet',
        titleSub: "Détecter les problèmes avant le déploiement d'une application",
        badge: '120 to 125',
        products: ['WD', 'WB', 'WM'],
        tone: 'white',
        image: 'audit-de-securite.png',
        pdfPage: 14,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/26',
        subsections: [
            {
                title: 'Audit de sécurité, nouvel audit disponible',
                paragraphs: [
                    "Le vol de données est malheureusement courant. D'importants volumes de données sont volés chaque jour dans le monde, puis diffusés ou revendus.",
                    'Ne prenez pas de risques avec les données de vos applications.',
                    'La version 2026 introduit le nouvel audit de sécurité.',
                    'Cet audit de sécurité détecte les failles, les données non chiffrées, les risques dans le code et les non-conformités aux normes de sécurité.',
                    "Afin de couvrir tous les aspects de la sécurité, l'audit examine le projet de manière statique et dynamique.",
                ],
            },
            {
                title: 'Audit de sécurité statique',
                paragraphs: [
                    "Les problèmes détectés par l'audit de sécurité apparaissent dans le volet Erreurs de compilation.",
                    'Les problèmes détectés sont triés par élément (fenêtre, classe, etc.).',
                    'Les principales vérifications incluent :',
                ],
                list: [
                    'mots de passe en clair dans le code',
                    'exécutable non signé',
                    'présence du contrôle Éditeur de code',
                    'exécutable sans manifeste',
                    'utilisation de threads non sécurisés',
                    'fichier de données non chiffré',
                    "utilisation d'ActiveX IE",
                    'utilisation de fonctions de chiffrement obsolètes',
                    '…',
                ],
            },
            {
                title: 'Audit de sécurité dynamique',
                paragraphs: [
                    "L'audit de sécurité dynamique détecte les problèmes en mode test et à la demande, lorsque l'application s'exécute directement sur le poste de l'utilisateur final.",
                    'Les problèmes détectés apparaissent à la fois dans le code source et dans une liste agrégée :',
                ],
                list: [
                    'nombre de problèmes détectés',
                    'date/heure du test',
                    'liste des problèmes détectés en mode test',
                ],
                afterList: 'Les principales vérifications incluent :',
                list2: [
                    'compilation dynamique',
                    'échange de données Socket/SOAP/REST non sécurisé',
                    'framework applicatif obsolète',
                    '…',
                ],
            },
            {
                title: 'HFSQL : sécurité renforcée',
                paragraphs: [
                    'En utilisant simplement HFSQL et en chiffrant les données grâce aux fonctionnalités automatisées, vous garantissez un haut niveau de sécurité.',
                    "Les autres systèmes de bases de données n'offrent pas ces options de chiffrement des données aussi simples et flexibles.",
                    "Avec HFSQL, même un accès illégal au serveur n'entraîne pas l'accès aux données chiffrées.",
                ],
            },
        ],
    },
    {
        id: 'electronic-invoicing',
        title: 'Facturation électronique',
        badge: '074 to 080',
        products: ['WD', 'WB', 'WM'],
        tone: 'yellow',
        image: 'factur-x.png',
        pdfPage: 9,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/16',
        subsections: [
            {
                title: "Factur-X, l'une des solutions majeures",
                paragraphs: [
                    "Factur-X est un format de facture électronique hybride combinant un PDF lisible par l'homme avec un fichier XML structuré intégré, conforme à la norme européenne EN 16931.",
                    'Il est facile à lire pour les utilisateurs, tout en garantissant une intégration automatisée dans les systèmes comptables.',
                    "Factur-X a été développé par l'association française à but non lucratif FNFE-MPE et l'association allemande FeRD.",
                ],
            },
            {
                title: "Factur-X : vue d'ensemble",
                paragraphs: [
                    'Factur-X repose sur des fichiers XML décrivant les factures selon des normes extrêmement précises. Ce fichier XML est intégré dans le PDF de la facture.',
                    "L'avantage est que le fichier PDF Factur-X est à la fois lisible par l'homme et par la machine.",
                    'Une facture Factur-X implique :',
                ],
                list: [
                    "Un fichier PDF/A-3 (norme d'archivage).",
                    'Un fichier XML conforme à EN 16931 en pièce jointe (dans une pièce jointe text/xml avec le rôle approprié).',
                ],
            },
            {
                title: '5 profils',
                paragraphs: [
                    "Factur-X définit 5 profils de données (ou niveaux) correspondant à des cas d'utilisation de complexité croissante. Ces profils sont :",
                ],
                list: [
                    "Minimum — données essentielles : numéro de facture, date, montant total, identification du vendeur et de l'acheteur.",
                    'Basic WL (sans lignes) — totaux HT, TVA par taux, mais sans détail ligne par ligne.',
                    'Basic — lignes de facturation (description, quantité, prix unitaire HT).',
                    'EN 16931 ou Comfort — norme européenne EN 16931 complète (obligatoire pour les échanges B2G en France et en Europe).',
                    'Extended — informations sectorielles supplémentaires (santé, énergie, etc.).',
                ],
                afterList: 'La version 2026 prend en charge les 4 niveaux déjà définis.',
            },
            {
                title: 'Factur-X : exemple de fichier XML',
                paragraphs: ['La complexité de ce fichier XML augmente avec le niveau de profil. Exemple pour une ligne de facture :'],
                code: `<ram:SpecifiedTradeProduct>
    <ram:GlobalID schemeID="0160">598785412598745</ram:GlobalID>
    <ram:SellerAssignedID>ART_1254</ram:SellerAssignedID>
    <ram:Name>SUPPORT SERVICE</ram:Name>
    ...
</ram:SpecifiedTradeProduct>`,
            },
            {
                title: "Factur-X : laissez l'IDE générer le XML",
                paragraphs: [
                    "Un composant interne prêt à l'emploi est fourni. Il suffit de l'intégrer à votre projet.",
                    'Il existe une propriété pour chaque détail de la facture. Lorsque la facture est complète, appelez la méthode GenerateXML pour créer le fichier XML avec le chemin vers le PDF.',
                ],
                image: 'factur-x-assistance-au-choix-des-unites.png',
            },
            {
                title: 'Choix intelligent des unités',
                paragraphs: [
                    'Choisir une unité normalisée à utiliser dans Factur-X peut rapidement devenir difficile.',
                    "Dans la version 2026, un assistant intuitif vous guide dans la sélection de l'unité conforme à la norme, en fonction du type de données à transmettre.",
                ],
            },
            {
                title: 'Insertion du logo',
                paragraphs: [
                    'Certaines organisations ajoutent un logo Factur-X à titre informatif, pour indiquer que la facture est hybride (PDF + XML).',
                    "Ce logo peut être inséré automatiquement dans l'éditeur d'états.",
                ],
                image: 'Factur-x-logo.png',
            },
        ],
    },
    {
        id: 'hot-reload',
        title: 'Hot Reload',
        badge: '263 to 266',
        products: ['WD'],
        tone: 'white',
        image: 'hot-reload.png',
        pdfPage: 28,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/54',
        subsections: [
            {
                title: "Actualisez l'interface en temps réel",
                paragraphs: [
                    "Dans la version 2026, vous n'avez plus besoin de quitter le mode test pour modifier votre interface.",
                    "Toute modification effectuée dans l'environnement de développement se reflète immédiatement dans votre application en mode test :",
                ],
                list: ['Ajouter un contrôle', 'Modifier les ancres', 'Modifier la taille, la police, etc.', '…'],
                afterList: 'Cela se traduit par un gain de temps considérable.',
            },
        ],
    },
    {
        id: 'conversational-ai-apps',
        title: 'Intégrez un assistant IA conversationnel dans vos applications',
        badge: '229 to 232',
        products: ['WD'],
        tone: 'yellow',
        image: 'ia-conversationnelle-dans-votre-app.png',
        pdfPage: 24,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/46',
        subsections: [
            {
                title: 'Les utilisateurs finaux peuvent réellement interagir avec votre application',
                paragraphs: [
                    'Question : Quel était le montant moyen des factures du mois dernier ? Réponse : 320 789 €',
                    "La conversation peut contenir : du texte, des images, une ou plusieurs actions dans l'application.",
                    "Le contrôle Chat IA permet aux utilisateurs de saisir des éléments de conversation, de les envoyer au modèle, de récupérer la réponse et de l'afficher au fur et à mesure.",
                    "Si le modèle requiert une action, le contrôle Chat IA l'exécutera.",
                ],
                image: 'code-champ-chat-ia.png',
            },
            {
                title: 'Modèles pris en charge',
                paragraphs: [
                    'Avec le contrôle Chat IA, vous pouvez choisir le modèle le plus adapté à vos besoins : Claude, Mistral, GPT, Gemini, OpenRouter, etc.',
                    "Compte API requis : vous devez disposer d'un compte API auprès du fournisseur du modèle concerné.",
                ],
            },
            {
                title: 'Exemple de code',
                paragraphs: [
                    "Le contrôle Chat IA peut lancer des procédures de vos applications. Pour indiquer qu'une procédure peut être utilisée par le contrôle Chat IA, précisez l'action souhaitée et les paramètres entre les balises dédiées.",
                ],
            },
            {
                title: 'Fonctionnalités du contrôle Chat IA',
                paragraphs: ['Le nouveau contrôle Chat IA offre de nombreuses fonctionnalités intégrées :'],
                list: [
                    'Contrôle Édition de conversation',
                    'Réponse en temps réel (Markdown)',
                    'Bouton de réinitialisation de la conversation',
                    'Sélection du modèle',
                    "Configuration de l'invite système",
                    "Nouveaux traitements dans l'éditeur de code",
                    "Personnalisation de l'icône de l'assistant",
                    "Évaluation de la réponse (J'aime/Je n'aime pas)",
                ],
            },
        ],
    },
    {
        id: 'graphql',
        title: 'GraphQL',
        titleSub: 'Consommer des services Web',
        badge: '144 to 147',
        products: ['WD', 'WB', 'WM'],
        tone: 'dark',
        pdfPage: 16,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/31',
        subsections: [
            {
                title: 'Comment ça fonctionne ?',
                paragraphs: [
                    'Le principe général de GraphQL consiste à effectuer une seule requête vers le service Web, en spécifiant toutes les données que vous souhaitez récupérer.',
                    'Le serveur renvoie toutes les données demandées, structurées au format JSON.',
                    'Cela offre un avantage évident : un seul appel au lieu de plusieurs. Les performances sont inégalées par tout autre type de service Web.',
                ],
            },
            {
                title: 'Exemple de requête',
                paragraphs: [
                    "Une requête de service Web pourrait demander le nom d'un client, son adresse e-mail et ses 10 dernières commandes avec le détail des produits.",
                    'Avec GraphQL, toutes ces opérations peuvent être réalisées en un seul appel.',
                ],
            },
            {
                title: 'Nouveau type WLanguage : graphqlQuery',
                paragraphs: [
                    "Pour utiliser facilement les valeurs renvoyées, le nouveau type WLanguage graphqlQuery est introduit dans la version 2026. L'auto-complétion est disponible lors de l'accès au résultat de la requête.",
                ],
                code: `customers_year_query is query = \`
query CustomersByYear($year: Int!)
{
    ListCustomersWithRental(year: $year)
    {
        Last name
        First name
        Rentals { Yacht { Name Length } StartDate EndDate }
    }
}\``,
            },
        ],
    },
    {
        id: 'hfsql-semantic-search',
        title: 'HFSQL : recherche sémantique',
        titleSub: "Index basé sur l'IA",
        badge: '148 to 158',
        products: ['WD', 'WB', 'WM'],
        tone: 'white',
        pdfPage: 17,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/32',
        subsections: [
            {
                title: 'Une fonctionnalité majeure pour HFSQL',
                paragraphs: [
                    'HFSQL 2026 introduit des recherches sémantiques basées sur le sens du texte, plutôt que sur la chaîne exacte.',
                    'Cette recherche porte sur les rubriques texte ou les mémos.',
                    "Un nouveau format d'index (.vex) a été ajouté à HFSQL, pris en charge nativement sans adaptation.",
                ],
            },
            {
                title: 'Un « moteur de recherche » qui utilise le sens des mots et des expressions',
                paragraphs: [
                    'Par exemple, HFSQL 2026 permet de rechercher « chaussures homme » dans une base de produits et de trouver « chaussures », « bottes », « baskets », « sandales », etc.',
                ],
                code: `MAX_RESULT is int = 10
FOR EACH Product WITH SemanticSearch(
    Description, "men's shoes", MAX_RESULT)
    DisplayProduct(Product.ProductID)
END`,
                afterList: 'Aucun module tiers requis. Tout est intégré dans le moteur HFSQL.',
            },
            {
                title: "Un modèle d'embedding dans HFSQL",
                paragraphs: [
                    "HFSQL intègre un modèle d'embedding et un index spécifique adapté à la recherche sémantique.",
                    "Pas d'installations supplémentaires, pas de connexion à des modules externes, pas de gestion additionnelle.",
                ],
            },
            {
                title: 'Créer un index sémantique',
                paragraphs: [
                    "Créer un index sémantique est simple. Il suffit de déclarer un index sémantique dans l'analyse et d'indiquer les rubriques texte à indexer.",
                    'Sur les bases existantes, une « modification automatique » est exécutée.',
                ],
            },
            {
                title: 'Exemple concret',
                paragraphs: [
                    'Grâce à la recherche sémantique, un utilisateur qui saisit « manteau mi-saison » peut obtenir des résultats pertinents (vestes, coupe-vents, parkas légères, etc.), même si ces mots ne figurent pas dans les descriptions.',
                    "La recherche standard ne correspond qu'aux termes exacts ; la recherche sémantique comprend l'intention du client.",
                ],
            },
        ],
    },
    {
        id: 'grid-control',
        title: 'Contrôle Grille',
        badge: '010 to 016',
        products: ['WD', 'WM'],
        tone: 'yellow',
        image: 'nouveau-champ-grille.png',
        pdfPage: 4,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/6',
        subsections: [
            {
                title: 'Un nouveau contrôle',
                paragraphs: [
                    'Le contrôle Grille est une grille de positionnement relatif, disponible pour WINDEV et WINDEV Mobile.',
                    'Alignez les contrôles horizontalement ou verticalement, sans positionnement au pixel près.',
                    'Utilisez des conteneurs imbriqués pour définir la disposition souhaitée.',
                ],
            },
            {
                title: 'Édition visuelle',
                paragraphs: [
                    'La grille commence simplement par une série de lignes et de colonnes.',
                    'Définissez comment les lignes et colonnes réagissent au redimensionnement du contrôle : taille fixe, ancrage au contenu, ancrage vertical ou horizontal.',
                    'Les contrôles et conteneurs sont positionnés dans les cellules. Vous pouvez fusionner des cellules horizontalement ou verticalement.',
                    'Le contrôle Grille est toujours en mode WYSIWYG.',
                ],
            },
            {
                title: 'Construction imbriquée',
                paragraphs: [
                    "L'interface est construite en imbriquant des éléments : grille dans grille, grille dans flexbox, flexbox dans grille — toute combinaison est possible.",
                ],
            },
            {
                title: 'Cellules',
                paragraphs: [
                    'Les contrôles sont positionnés par rapport au coin supérieur gauche de leur cellule conteneur.',
                    'Une cellule peut contenir plusieurs contrôles avec des ancres relatives à la taille de la cellule.',
                ],
            },
            {
                title: 'Programmation',
                paragraphs: [
                    "La grille peut être modifiée par programmation : ajouter ou supprimer des lignes et colonnes, masquer des contrôles tout en conservant l'alignement, etc.",
                ],
            },
        ],
    },
    {
        id: 'modifier-pane',
        title: 'Volet modificateur amélioré',
        badge: '081 to 082',
        products: ['WD', 'WB', 'WM'],
        tone: 'white',
        image: 'modifieur-plus-riche.png',
        pdfPage: 10,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/18',
        subsections: [
            {
                title: 'Plus de fonctionnalités dans le modificateur',
                paragraphs: ["Nouvelles informations disponibles, en consultation comme en édition d'un élément."],
            },
            {
                title: 'Pour tous les contrôles',
                paragraphs: ["Chemin vers l'image associée au contrôle, y compris l'icône de bouton, les icônes de bouton du contrôle Saisie, l'icône de fenêtre, l'icône de la barre d'actions."],
            },
            {
                title: 'Contrôle Image et Fenêtre',
                paragraphs: ["Une section dédiée permet de consulter et de sélectionner le chemin de l'image et les paramètres du mode d'affichage."],
            },
            {
                title: 'Contrôle Combo / Liste',
                paragraphs: ['Mémorisation des colonnes/volets/valeurs, valeurs stockées, tri.'],
            },
            {
                title: 'Contrôle Case à cocher / Bouton radio',
                paragraphs: ['Nombre de colonnes, colonnes proportionnelles, options multiligne, prise en charge RTF.'],
            },
            {
                title: 'Contrôle Table',
                paragraphs: ['Mode de sélection, ancrage des colonnes.'],
            },
        ],
    },
    {
        id: 'scm-local-history',
        title: 'GDS : historisation locale',
        badge: '096 to 097',
        products: ['WD', 'WB', 'WM'],
        tone: 'yellow',
        image: 'gds-historisation-locale.png',
        pdfPage: 11,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/21',
        subsections: [
            {
                title: 'Historisation locale',
                paragraphs: [
                    "Dans une équipe de développement, les éléments ne sont archivés dans le GDS qu'une fois le développement d'une fonctionnalité terminé.",
                    "Jusqu'à l'archivage, le développeur n'avait pas accès à l'historique et ne pouvait pas annuler ses modifications.",
                    'Désormais, le GDS permet aux développeurs de créer un historique local sans synchroniser immédiatement avec le dépôt central.',
                ],
            },
            {
                title: "Principaux avantages de l'historisation locale",
                paragraphs: ["Lors de l'archivage des éléments dans le dépôt, deux options sont disponibles :"],
                list: [
                    "Transférer toutes les versions locales vers l'historique global.",
                    "Transférer uniquement la dernière version locale vers l'historique global.",
                ],
            },
        ],
    },
    {
        id: 'palette-editor',
        title: 'Éditeur de palettes',
        badge: '233 to 236',
        products: ['WD', 'WM'],
        tone: 'white',
        image: 'editeur-de-palettes.png',
        pdfPage: 26,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/47',
        subsections: [
            {
                title: "Palettes : un concept innovant pour la personnalisation de l'interface",
                paragraphs: [
                    'Les palettes de couleurs ont été introduites dans la version 2025, permettant aux développeurs de créer facilement des interfaces cohérentes.',
                    'Les palettes sont interchangeables entre les gabarits de skin. Changer de palette modifie toutes les couleurs en une seule opération.',
                ],
            },
            {
                title: 'Nouvel assistant de création de palette',
                paragraphs: [
                    "L'éditeur de palettes permet de créer une palette à partir de zéro.",
                    'Les couleurs secondaires sont dérivées automatiquement des couleurs dominantes, selon une formule personnalisable.',
                    "L'interface intuitive de l'éditeur de palettes reflète les modifications en temps réel.",
                ],
                image: 'editeur-de-palettes-visualisation-du-rendu.png',
            },
            {
                title: "Visualiser les modifications dans l'éditeur",
                paragraphs: [
                    "L'éditeur de palettes intègre un mode test avec aperçu en temps réel sur les contrôles les plus fréquemment utilisés.",
                ],
            },
        ],
    },
    {
        id: 'new-color-palettes',
        title: 'Nouvelles palettes de couleurs',
        badge: '250',
        products: ['WD', 'WM'],
        tone: 'yellow',
        image: 'nouvelles-palettes-de-couleurs.png',
        pdfPage: 35,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/50',
        subsections: [
            {
                title: 'Nouvelles palettes de couleurs pour WINDEV',
                paragraphs: [
                    'La version 2026 propose de nombreuses nouvelles palettes de couleurs pour de nouvelles possibilités de personnalisation.',
                    "N'hésitez pas à utiliser ces palettes dans vos applications et vos packages logiciels.",
                    'Rappelez-vous que vous pouvez basculer dynamiquement entre les palettes, et même créer les vôtres.',
                    'WINDEV inclut tout ce dont vous avez besoin pour créer de superbes interfaces.',
                ],
            },
        ],
    },
    {
        id: 'smart-card-signature',
        title: 'Signature par certificat sur carte à puce',
        badge: '254 to 256',
        products: ['WD'],
        tone: 'white',
        image: 'signature-numerique-par-certificat-sur-carte-a-puce.png',
        pdfPage: 43,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/52',
        subsections: [
            {
                title: 'Fonctionnement',
                paragraphs: [
                    "La signature par certificat à l'aide de cartes à puce offre une méthode d'authentification supplémentaire pour signer des documents ou des données.",
                    'Exemples : cartes de santé, cartes professionnelles, cartes cryptographiques, etc.',
                ],
            },
            {
                title: 'La clé privée reste sur la carte',
                paragraphs: [
                    'La carte stocke une clé privée associée à un certificat (par ex. X.509) émis par une autorité de certification.',
                    'Lors de la signature, la carte est insérée dans un lecteur compatible (PC/SC).',
                    'La signature est générée localement sur la carte, sans jamais exposer la clé privée.',
                ],
            },
            {
                title: 'Programmation WLanguage',
                paragraphs: [
                    'Toutes les fonctions WLanguage de signature, telles que PDFSign, XMLSign, etc., prennent en charge les certificats stockés sur cartes à puce.',
                    "À l'aide de CertificateList, l'application récupère tous les certificats accessibles, y compris ceux d'une carte à puce insérée.",
                ],
            },
        ],
    },
    {
        id: 'openstreetmap',
        title: 'OpenStreetMap : utiliser des cartes sans Google Maps',
        badge: '560 to 561 and 727 to 731',
        products: ['WD', 'WB', 'WM'],
        tone: 'yellow',
        image: 'openstreetmap.png',
        pdfPage: 15,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/69',
        subsections: [
            {
                title: 'Une alternative à Google Maps',
                paragraphs: [
                    "Google Maps est un service de cartographie extrêmement puissant et populaire. OpenStreetMap est l'alternative la plus connue.",
                ],
            },
            {
                title: 'Options disponibles',
                paragraphs: [
                    'WINDEV, WEBDEV et WINDEV Mobile 2026 (applications Android) prennent en charge OpenStreetMap.',
                    'Vous pouvez facilement choisir le type de carte dans la fenêtre à 7 onglets du contrôle.',
                    "Les deux solutions prennent en charge les gestes (zoom, déplacement, etc.) et permettent aux utilisateurs de tracer des itinéraires, des formes, des points d'intérêt, etc.",
                    "Certaines fonctionnalités automatiques ne sont pas disponibles, notamment le calcul d'itinéraire et les regroupements de marqueurs.",
                ],
            },
            {
                title: 'IGN, SHOM, MAPBOX, CADASTRE, et plus',
                paragraphs: ['Le contrôle Carte prend également en charge de nombreux autres formats de cartes :'],
                list: [
                    'IGN', 'SHOM', 'BRGM', 'RGE', 'GéoRisques', 'ODRE',
                    'Mapbox', 'ESRI', 'NASA / USGS', 'Copernicus / Sentinel', 'Natural Earth',
                ],
            },
            {
                title: 'Utiliser plusieurs calques sur la même carte',
                paragraphs: ["Le contrôle Carte prend désormais en charge les calques pour superposer différentes cartes à l'écran."],
            },
        ],
    },
    {
        id: 'wifi-debugging',
        title: 'Débogage Wi-Fi',
        badge: '759',
        products: ['WM'],
        tone: 'white',
        image: 'debug-wifi-windev-mobile.png',
        pdfPage: 84,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/84',
        subsections: [
            {
                title: 'Déboguez vos applications en Wi-Fi',
                paragraphs: [
                    'WINDEV Mobile 2026 propose un débogueur amélioré pour les applications Android en Wi-Fi.',
                    "Pour associer l'appareil, indiquez son adresse IP dans le débogueur et saisissez un code à usage unique sur l'appareil.",
                    "Toutes les commandes du débogueur sont disponibles : exécution pas à pas, trace, espion, point d'arrêt, etc.",
                ],
            },
        ],
    },
    {
        id: 'wlanguage-features',
        title: 'Nouvelles fonctionnalités WLanguage',
        badge: '130 to 143 and 565 to 659',
        products: ['WD', 'WB', 'WM'],
        tone: 'yellow',
        image: '/img/visual/wl.png',
        imageIsAbsolute: true,
        pdfPage: 28,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/28',
        subsections: [
            {
                title: '15 fonctions WLanguage Organizer',
                paragraphs: [
                    'Dans la version 2026, les fonctions WLanguage Organizer sont disponibles en code Navigateur pour des traitements plus rapides dans les contrôles Organizer.',
                ],
            },
            {
                title: 'Fonctions Email',
                paragraphs: [
                    'Nouvelles fonctions WLanguage Email : EmailExecuteCommand, EmailSubscribeToFolder, EmailUnsubscribeFromFolder (IMAP).',
                ],
            },
            {
                title: 'Téléchargement accéléré des mémos HFSQL',
                paragraphs: [
                    'La version 2026 ajoute MemoDisplay et MemoDownload. Les mémos HFSQL sont envoyés en continu, bloc par bloc, réduisant la consommation mémoire et le temps de téléchargement.',
                ],
            },
            {
                title: 'Type InputMask',
                paragraphs: [
                    'Le type WLanguage InputMask permet de mettre en œuvre par programmation des masques de saisie. Dans la version 2026, ce type est disponible en code navigateur.',
                ],
            },
            {
                title: 'Opérateur = pour les tableaux',
                paragraphs: [
                    "Dans la version 2026, vous pouvez utiliser l'opérateur « = » entre deux tableaux pour comparer leurs éléments de manière récursive.",
                ],
            },
            {
                title: 'Disponibilité',
                paragraphs: [
                    'La version 2026 est disponible dès maintenant, mais certaines fonctionnalités seront publiées dans les mois à venir.',
                ],
            },
        ],
    },
];

export const newFeaturesToc = newFeaturesSections.map((section) => ({
    id: section.id,
    label: section.titleSub ? `${section.title} — ${section.titleSub}` : section.title,
}));
