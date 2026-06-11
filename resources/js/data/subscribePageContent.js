/** Contenu — https://windev.com/neo/new */

export const SUBSCRIBE_SALES_CONTACT_URL = 'https://pcsoft.fr/fr-fr/contact?ask=quote';

export const SUBSCRIBE_GTC_URL = 'https://windev.com/pcsoft/general-terms-and-conditions.htm';

export const SUBSCRIBE_SECURITY_KEY_VIDEO_URL = 'https://www.youtube.com/watch?v=PFq4nB2ulqo';

/**
 * @typedef {{ type: 'p', text: string } | { type: 'ul', items: string[] } | { type: 'ol', items: (string | { type: 'ul', items: string[] })[] } | { type: 'link', href: string, text: string, suffix?: string }} SubscribeFaqBlock
 */

/** @type {{ id: string, label: string, items: { question: string, answer: SubscribeFaqBlock[] }[] }[]} */
export const subscribeFaqSections = [
    {
        id: 'subscription',
        label: 'Abonnement',
        items: [
            {
                question: 'Quels sont les avantages d\'un abonnement ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Votre logiciel est entièrement numérique et ne nécessite plus de dongle. Les nouveautés sont publiées régulièrement. Nos formules d\'abonnement facilitent grandement la budgétisation. Pour les clients hors France, les frais de douane ne sont plus un souci.',
                    },
                ],
            },
            {
                question: 'Quelles versions sont disponibles dans le modèle par abonnement ?',
                answer: [
                    {
                        type: 'p',
                        text: 'En tant qu\'abonné, vous avez accès à toutes les versions disponibles depuis la version 24. Installez simplement la version souhaitée depuis votre portail client. Vous serez toujours à jour.',
                    },
                ],
            },
            {
                question: 'Mon abonnement me permet d\'utiliser plusieurs produits. Comment gérer ces produits et leurs abonnements ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Vous disposez d\'un portail client où retrouver vos différents abonnements et leurs détails (date de renouvellement, factures, etc.). Depuis ce portail, vous pouvez installer les différents logiciels sur votre ordinateur.',
                    },
                    {
                        type: 'p',
                        text: 'Ce portail vous permet également de souscrire à d\'autres produits ou de gérer vos moyens de paiement.',
                    },
                ],
            },
            {
                question: 'Je travaille sur différents ordinateurs, à la maison, au bureau, etc. Puis-je passer d\'un ordinateur à l\'autre ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Oui. Vous pouvez installer votre logiciel sur plusieurs ordinateurs et passer simplement de l\'un à l\'autre. Lorsque votre logiciel est en cours d\'exécution sur un ordinateur, vous ne pouvez pas l\'utiliser simultanément sur un autre.',
                    },
                ],
            },
            {
                question: 'Que sont les « frais initiaux uniques » ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Les frais initiaux uniques ne sont payés qu\'une seule fois au début de votre abonnement. Ils incluent le coût de la configuration technique nécessaire pour accéder au logiciel.',
                    },
                    {
                        type: 'p',
                        text: 'Si vous disposez d\'une licence standard (avec dongle), vous pouvez bénéficier d\'une remise sur ces frais.',
                    },
                ],
            },
            {
                question: 'Comment résilier mon abonnement ?',
                answer: [
                    {
                        type: 'p',
                        segments: [
                            {
                                kind: 'text',
                                value: 'La durée de votre abonnement est définie par votre formule. L\'abonnement est renouvelé automatiquement à la fin de la période initiale. Vous pouvez résilier votre abonnement à tout moment, sous réserve d\'un préavis de 3 mois. Les conditions de résiliation sont détaillées dans nos ',
                            },
                            { kind: 'link', text: 'CGV', href: SUBSCRIBE_GTC_URL },
                            { kind: 'text', value: '.' },
                        ],
                    },
                ],
            },
            {
                question: 'Je possède une ou plusieurs licences avec dongle. Que deviennent ces dongles ?',
                answer: [
                    {
                        type: 'p',
                        text: 'La possession de licences avec dongle vous donne droit à une remise sur les frais initiaux uniques. Vous pouvez conserver ces dongles. Vous recevrez une procédure de mise à jour pour chaque dongle. En effectuant cette procédure, vous indiquez que la licence avec dongle a été convertie en version par abonnement, ce qui valide la remise. Ces dongles ne sont utiles que si vous devez utiliser une ancienne version (23 et antérieures). Votre abonnement vous permettra d\'exécuter les versions 24 et ultérieures.',
                    },
                ],
            },
            {
                question: 'Je ne suis pas en France et j\'achète mes logiciels via un distributeur officiel dans mon pays. Puis-je continuer ?',
                answer: [{ type: 'p', text: 'Oui.' }],
            },
            {
                question: 'L\'assistance technique est-elle toujours gratuite ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Oui. Vous bénéficiez toujours de 15 demandes par année d\'abonnement et par poste.',
                    },
                ],
            },
            {
                question: 'Un logiciel par abonnement nécessite-t-il un dongle ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Non. Il suffit de vous connecter avec votre adresse e-mail et votre mot de passe.',
                    },
                ],
            },
            {
                question: 'Avec un abonnement, est-ce que je conserve la propriété de mon code source et de mes éléments de projet ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Oui, vous conservez la propriété de tous les éléments que vous créez dans vos projets. Vous pouvez enregistrer vos projets localement, sur un serveur ou dans le cloud, selon votre choix.',
                    },
                ],
            },
            {
                question: 'J\'arrête mon abonnement. Puis-je continuer à distribuer mes applications ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Oui, vous pouvez continuer à distribuer les applications que vous avez créées pendant la période de votre abonnement.',
                    },
                ],
            },
            {
                question: 'Puis-je suspendre mon abonnement, le reprendre et retrouver mon ancien code source et mes éléments de projet ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Oui. Notez toutefois que des frais initiaux uniques seront appliqués pour tout nouvel abonnement.',
                    },
                ],
            },
            {
                question: 'J\'ai un dongle qui ne fonctionne plus. Puis-je le remplacer ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Oui, vous pouvez échanger un dongle endommagé. Des frais d\'échange seront facturés ; contactez-nous pour en savoir plus. Vous pouvez également convertir votre licence avec dongle en abonnement et éliminer tous les risques liés aux licences avec dongle.',
                    },
                ],
            },
        ],
    },
    {
        id: 'security-key',
        label: 'Clé de sécurité',
        items: [
            {
                question: 'Qu\'est-ce qu\'une clé de sécurité ?',
                answer: [
                    {
                        type: 'p',
                        text: 'La clé de sécurité est un dispositif physique, sous forme de clé USB, qui garantit l\'accès et la continuité d\'utilisation de vos outils de développement.',
                    },
                    {
                        type: 'p',
                        text: 'Pour des raisons écologiques, nous avons choisi de réutiliser le dispositif que nous appelions « dongle » et de le transformer en clé de sécurité.',
                    },
                    {
                        type: 'p',
                        text: 'Si vous avez un abonnement WINDEV Suite, WINDEV, WEBDEV ou WINDEV Mobile, vous disposez probablement déjà d\'une clé associée à ces produits. Certaines de ces clés ont peut-être déjà été rétrogradées, tandis que d\'autres doivent encore être migrées.',
                    },
                    { type: 'p', text: 'Il est possible de convertir un dongle en clé de sécurité dans les 2 cas suivants :' },
                    {
                        type: 'ul',
                        items: [
                            'vous utilisez les versions 28, 2024 ou 2025 ;',
                            'vous utilisez un dongle rétrogradé.',
                        ],
                    },
                    { type: 'p', text: 'Une fois convertie, cette clé devient votre clé de sécurité officielle.' },
                    { type: 'p', text: 'Important : ce processus est irréversible.' },
                    {
                        type: 'p',
                        text: 'Cette clé de sécurité est très importante ; il est fortement recommandé de la conserver dans un endroit sûr, comme un coffre-fort.',
                    },
                ],
            },
            {
                question: 'Pourquoi la clé de sécurité a-t-elle été introduite ?',
                answer: [
                    { type: 'p', text: 'La clé de sécurité répond aux besoins des clients liés à :' },
                    {
                        type: 'ul',
                        items: [
                            'Plan de Reprise d\'Activité (PRA)',
                            'Politique de Sécurité du Système d\'Information (PSSI)',
                        ],
                    },
                    {
                        type: 'p',
                        text: 'Elle s\'inscrit dans une stratégie globale fondée sur la qualité et la continuité de service, en complément du modèle par abonnement.',
                    },
                    { type: 'p', text: 'Aucune organisation n\'est totalement à l\'abri de situations exceptionnelles telles que :' },
                    {
                        type: 'ul',
                        items: [
                            'cyberattaque',
                            'panne générale',
                            'panne réseau',
                            'piratage',
                            'panne d\'infrastructure',
                            'contexte géopolitique ou crise majeure',
                        ],
                    },
                    {
                        type: 'p',
                        text: 'Certains utilisateurs se demandent également ce qui se passerait si PC SOFT rencontrait des difficultés ou faisait faillite. À cet égard, PC SOFT fait partie du groupe CSI, l\'un des plus grands groupes d\'édition de logiciels au monde, ce qui garantit un haut degré de stabilité et de continuité.',
                    },
                    {
                        type: 'p',
                        text: 'La clé de sécurité apporte une sécurité supplémentaire. En cas de panne majeure, il suffit d\'utiliser la clé et de continuer à travailler. Vous pouvez :',
                    },
                    {
                        type: 'ul',
                        items: [
                            'maintenir les projets existants',
                            'démarrer de nouveaux projets de développement',
                        ],
                    },
                ],
            },
            {
                question: 'Que se passe-t-il si je résilie mon abonnement ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Si vous activez l\'option clé de sécurité pendant que votre abonnement est actif, vous pouvez mettre à jour la clé de sécurité vers la dernière version prise en charge dans votre abonnement.',
                    },
                    { type: 'p', text: 'Lorsque vous résiliez votre abonnement :' },
                    {
                        type: 'ul',
                        items: [
                            'la clé reste fonctionnelle',
                            'elle est simplement figée sur la dernière version de votre abonnement, version 2026 de juin minimum (à condition d\'avoir préalablement activé la clé de sécurité et effectué les mises à jour pendant la période d\'abonnement).',
                        ],
                    },
                    { type: 'p', text: 'Vous pouvez donc continuer à utiliser cette version pour :' },
                    {
                        type: 'ul',
                        items: [
                            'maintenir les projets existants',
                            'poursuivre vos projets de développement dans cette version',
                        ],
                    },
                ],
            },
            {
                question: 'Comment fonctionne la mise à jour de la clé ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Dès que vous activez l\'option clé de sécurité, nous vous recommandons de charger sur la clé la version correspondant à votre abonnement.',
                    },
                    {
                        type: 'p',
                        text: 'Ensuite, tant que votre abonnement est actif et que l\'option clé de sécurité est activée, vous pouvez mettre à jour la clé à tout moment.',
                    },
                    {
                        type: 'p',
                        text: 'Si vous résiliez votre abonnement, la clé restera sur la dernière version installée.',
                    },
                    {
                        type: 'p',
                        text: 'Veuillez noter que vous devez mettre à jour la clé de sécurité vers la dernière version chaque année. Vous pouvez le faire à tout moment.',
                    },
                ],
            },
            {
                question: 'Que permet de faire la clé de sécurité ?',
                answer: [
                    {
                        type: 'p',
                        text: 'La clé de sécurité n\'est pas destinée à être un outil d\'exécution (voir « Pourquoi la clé de sécurité a-t-elle été introduite ? »), même si elle peut être utilisée pour :',
                    },
                    {
                        type: 'ul',
                        items: [
                            'ouvrir des projets',
                            'créer ou modifier du code dans un projet existant',
                            'compiler',
                            'déployer',
                            'utiliser les outils accessibles depuis les menus de l\'éditeur',
                            'créer de nouveaux projets',
                        ],
                    },
                ],
            },
            {
                question: 'Quelles versions sont accessibles avec la clé de sécurité ?',
                answer: [
                    { type: 'p', text: 'La clé de sécurité donne accès à :' },
                    {
                        type: 'ul',
                        items: [
                            'versions 23 et antérieures',
                            'versions 2026 (à partir de juin) et ultérieures, jusqu\'à l\'arrêt de votre abonnement',
                        ],
                    },
                    {
                        type: 'p',
                        text: 'Que vous activiez la clé de sécurité maintenant ou plus tard, l\'accès est pris en charge à partir de la version 2026.',
                    },
                    {
                        type: 'p',
                        text: 'Pour les versions 24 à 2025, l\'accès aux projets dépend toujours de l\'abonnement.',
                    },
                ],
            },
            {
                question: 'Que faire si la clé ne fonctionne pas correctement, est perdue ou volée ?',
                answer: [
                    { type: 'p', text: 'La clé de sécurité doit être conservée dans un endroit sûr.' },
                    { type: 'p', text: 'Dans les cas suivants :' },
                    {
                        type: 'ul',
                        items: ['perte', 'vol', 'dégradation'],
                    },
                    { type: 'p', text: 'Aucune garantie ne peut être appliquée.' },
                    { type: 'p', text: 'En cas de panne technique, suivez ces étapes :' },
                    {
                        type: 'ol',
                        items: [
                            'Envoyez la clé à PC SOFT',
                            'Nos ingénieurs vérifieront la clé',
                            'Si la panne est confirmée, vous devrez payer les frais de réparation ou de remplacement, ainsi que les frais d\'expédition (France ou international)',
                        ],
                    },
                    {
                        type: 'p',
                        text: 'Les délais de traitement dépendront ensuite des services de transport et de livraison.',
                    },
                ],
            },
            {
                question: 'Pour quelle version de dongle la clé de sécurité est-elle disponible ?',
                answer: [
                    {
                        type: 'p',
                        text: 'Les clés de sécurité peuvent être activées pour les dongles WINDEV mono-poste en version 28, 2024 ou 2025, ainsi que pour les dongles WINDEV déjà convertis en abonnement.',
                    },
                ],
            },
            {
                question: 'Quand la clé de sécurité sera-t-elle disponible ?',
                answer: [
                    {
                        type: 'p',
                        text: 'La clé de sécurité sera disponible en juin 2026 (sur la version de juin 2026).',
                    },
                    { type: 'p', text: 'Elle est actuellement disponible en précommande.' },
                ],
            },
        ],
    },
];
