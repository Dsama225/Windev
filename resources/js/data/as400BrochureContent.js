/** Contenu adapté de https://windev.com/windev/AS400 */

export const as400BrochureTitle = 'BROCHURE TECHNIQUE WINDEV AS/400';
export const as400BrochureSubtitle = 'PRÉSENTATION DU PRODUIT';

export const as400BrochurePlatformCaption =
    'Exemples d\'applications — ci-dessus sous Windows, ci-dessous dans un navigateur Web (à gauche) et sur une tablette (à droite). Le tout avec des données AS/400 !';

export const as400DevelopmentSteps = [
    'Créer le projet et l\'« analyse » (import DDS)',
    'Utiliser l\'outil RAD (étape optionnelle)',
    'Programmer l\'application',
    'Créer l\'exécutable',
    'Déployer l\'application',
];

export const as400DeploymentScenarios = [
    {
        title: 'Vous travaillez pour une société de services qui ne possède pas d\'AS/400.',
        text: 'Votre client vous demande de développer une application pour AS/400 à partir de fichiers existants. Vous pouvez importer les DDS depuis l\'AS/400 du client et développer chez vous sur des fichiers HFSQL locaux, puis changer la connexion pour basculer en Client/Serveur sur l\'AS/400.',
    },
    {
        title: 'Vous avez développé une application avec WINDEV AS/400.',
        text: 'Un client nomade souhaite utiliser la même application sur son portable. Transférez l\'application avec l\'installeur WINDEV et changez dynamiquement la connexion : l\'application fonctionne alors avec des fichiers HFSQL sur le portable (ou sur mobile avec WINDEV Mobile).',
    },
    {
        title: 'Vous avez développé une application WINDEV avec des fichiers HFSQL.',
        text: 'Exportez les DDS vers l\'AS/400 et définissez une nouvelle connexion pour travailler avec des fichiers situés sur l\'AS/400.',
    },
    {
        title: 'Vous ne souhaitez pas surcharger l\'AS/400 pendant la phase de tests.',
        text: 'Testez l\'application localement en changeant simplement la connexion.',
    },
    {
        title: 'Vous voulez mettre des informations en ligne sur Internet ou Intranet.',
        text: 'Si les données sont sur l\'AS/400 et ne doivent pas être accessibles depuis Internet, convertissez-les au format HFSQL.',
    },
];

export const as400CommandTable = [
    { command: 'ASCallRtv', description: 'Exécute une commande AS/400 qui retourne des variables (type RTVJOBA)' },
    { command: 'ASRtvResult', description: 'Récupère le résultat de la dernière commande ASCallRtv' },
    { command: 'ASRunRPC', description: 'Exécute un programme AS/400 qui retourne des paramètres' },
    {
        command: 'ASExec',
        description:
            'Appelle toutes les commandes AS/400 de la ligne de commande, dans le contexte de la session courante, avec un profil utilisateur AS/400 authentifié',
    },
    {
        command: 'ASUser',
        description: 'Change le profil utilisateur AS/400 courant pour ouvrir une session avec des privilèges différents',
    },
];

export const as400GeneralFaq = [
    {
        question: 'J\'ai déjà des programmes WINDEV ; puis-je les transformer immédiatement en programmes Client/Serveur pour AS/400 ?',
        answer: 'Oui',
    },
    {
        question: 'J\'ai des fichiers de données AS/400 ; puis-je y accéder depuis le PC pendant que d\'autres applications AS/400 les utilisent ?',
        answer: 'Oui',
    },
    {
        question: 'Si j\'écris un programme Client/Serveur pour l\'AS/400 avec WINDEV, pourrai-je l\'exécuter avec des fichiers du PC ?',
        answer: 'Oui',
    },
    {
        question: 'Je ne connais pas WINDEV, combien de temps faudra-t-il pour l\'apprendre ?',
        answer: 'En général une semaine pour un développeur AS/400. WINDEV est fourni avec un didacticiel.',
    },
    {
        question: 'Je ne connais pas l\'AS/400, puis-je quand même développer des applications ?',
        answer: 'Oui, il suffit de consacrer une heure à la lecture de l\'aide spécifique.',
    },
    {
        question: 'Pourquoi les applications développées avec WINDEV AS/400 sont-elles si rapides ?',
        answer:
            'Principalement parce que l\'accès natif est très rapide, mais aussi parce que les applications utilisent le processeur du PC pour la saisie et l\'affichage, libérant ainsi l\'AS/400.',
    },
    {
        question: 'J\'ai un ERP ; puis-je développer des applications complémentaires avec WINDEV ou WEBDEV ?',
        answer: 'Oui',
    },
];

export const as400TechnicalFaq = [
    {
        question: '1. Comment sont gérés les verrous AS/400 et quelle est la différence avec les programmes RPG ?',
        answer:
            'Sur AS/400, une application ne peut poser qu\'un verrou par fichier ouvert. Quand un verrou est ajouté, le précédent sur le même fichier ouvert est annulé. Les fonctions « HRead* » de WINDEV gèrent ces fonctions AS/400 directement. Avec RPG, vous décidez si un fichier sera en lecture seule ou lecture/écriture à l\'ouverture. WINDEV AS/400 utilise le même principe (hLockWrite, hLockReadWrite) et propose en plus les verrous implicites, gérés automatiquement.',
    },
    {
        question: '2. Peut-on utiliser plusieurs AS/400 ou IBM i ?',
        answer:
            'Oui, l\'option « Connexions » de l\'éditeur d\'analyse WINDEV permet d\'ajouter plusieurs types de connexions et de travailler avec des fichiers provenant de différents AS/400.',
    },
    {
        question: '3. WINDEV gère-t-il les niveaux de version des fichiers AS/400 ?',
        answer:
            'Oui, le LVLCHK (level checking) peut être ajouté dans les informations avancées de l\'analyse. Si ce contrôle existe, comparez-le au niveau réel et refusez l\'ouverture des niveaux antérieurs.',
    },
    {
        question: '4. WINDEV gère-t-il les fichiers journal AS/400 ?',
        answer: 'Oui, les fichiers journal sont gérés de façon transparente par les commandes journal de WINDEV.',
    },
    {
        question: '5. WINDEV gère-t-il les fichiers avec membres ?',
        answer:
            'Oui, via l\'éditeur d\'analyse WINDEV ou par une instruction de programmation (ASExec("ovrdbf(filename)") sur un fichier libname/filename mbr(membername)).',
    },
    {
        question: '6. Comment WINDEV gère-t-il les fichiers joints ?',
        answer:
            'Dans WINDEV, un fichier joint est considéré comme un fichier en lecture seule avec une seule clé. Importez le DDS comme pour tout fichier logique.',
    },
    {
        question: '7. Comment appeler un programme interactif AS/400 depuis WINDEV ?',
        answer: 'Un programme AS/400 et un programme WINDEV peuvent communiquer via une Data Queue.',
    },
    {
        question: '8. Comment appeler un programme WINDEV depuis un menu AS/400 ?',
        answer:
            'Créez un programme WINDEV qui lit une Data Queue (alimentée par le menu AS/400) et lance d\'autres programmes.',
    },
    {
        question: '9. WINDEV gère-t-il les éléments logiques avec omissions ou conditions ?',
        answer:
            'Oui. Ajoutez ces fichiers manuellement comme index dans l\'analyse et dans les informations avancées, ou utilisez-les comme fichiers maîtres avec un seul index après import DDS.',
    },
    {
        question: '10. Puis-je gérer des fichiers DDM depuis WINDEV ?',
        answer:
            'Oui, WINDEV AS/400 gère les fichiers DDM de façon transparente (fichiers ouverts sur un AS/400 mais physiquement sur un autre).',
    },
    {
        question: '11. Peut-on gérer plusieurs bibliothèques avec WINDEV ?',
        answer:
            'Oui. Utilisez des fichiers de bibliothèques différentes via le fichier LIBL ou en écrivant leur nom dans les informations avancées. Sans bibliothèque spécifiée, WINDEV AS/400 recherche dans les bibliothèques LIBL.',
    },
];

export const as400IncludedFeatures = [
    'Environnement de développement intégré (IDE)',
    'Support technique',
    'Déploiement libre',
    'Applications .EXE sécurisées, services Web J2EE, .NET et Linux',
    'Travail en équipe',
    'RAD : générateur d\'application complet',
    'AAA (Automatic Application Architecture) : créez votre propre RAD personnalisé',
    'Option gratuite : RAD Java',
    'HFSQL, bases Client/Serveur intégrées sous Windows et Linux (distribution gratuite)',
    'Bases tierces : Oracle, AS/400, SQL Server, DB2, MySQL, Access, xBase, etc.',
    'XML natif',
    'Centre de contrôle des bases et des applications déployées',
    'Centre d\'analyse UML : code généré depuis l\'analyse, rétro-ingénierie',
    'Documentation d\'analyse et de programmation par rétro-ingénierie',
    'Composants de logique métier',
    'Générateur SQL visuel',
    'Création automatique d\'IHM avec guide de style',
    'Langage de 5e génération (5GL), jusqu\'à 90 % de code en moins',
    'Compatible 4GL : C++, C#, Java, VB, Cobol, etc.',
    'Import d\'applications Access et Visual Basic',
    'Éditeur de code intelligent avec test instantané',
    'Refactoring',
    'Débogueur',
    'Centre d\'optimisation des performances',
    'Jusqu\'à 64 langues différentes par application',
    'Générateur d\'états (PDF, formulaire pré-imprimé, codes-barres, etc.)',
    'Générateur d\'aide CHM',
    'Accès Internet intégré (analyse de pages…)',
    'UMC (User Macro Code) : macros ajoutées par les utilisateurs finaux',
    'AAF (Automatic Application Features) : export Word, Excel, XML, PDF, graphiques 3D, e-mail, etc.',
    'Liaison série RS 232, USB',
    'Téléphonie TAPI',
    'Multimédia (image, son, vidéo)',
    'Gestion de versions',
    'Centre de gestion des setups et des applications déployées',
    'Scénarios de tests automatiques',
    'Plus de 100 exemples détaillés',
    'Auto-formation en 1 semaine (didacticiel fourni)',
];
