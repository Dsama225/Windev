<template>
    <AppNavbar />
    <main class="as400-brochure pb-10">
        <section class="section-shell as400-brochure__suite-line" aria-label="Positionnement produit">
            <p class="as400-brochure__suite-text">
                Suite logicielle de développement d'applications <strong>multiplateformes</strong>
            </p>
            <figure class="as400-brochure__suite-platforms">
                <img
                    :src="as400BrochureSuiteCrossPlatform.src"
                    alt="Logiciel intégré pour développer des applications multiplateformes"
                    width="283"
                    height="48"
                    loading="eager"
                    decoding="async"
                    @error="onImageError($event, as400BrochureSuiteCrossPlatform.fallback)"
                />
            </figure>
        </section>

        <section class="section-shell as400-brochure__content" aria-labelledby="as400-brochure-title">
            <div class="as400-brochure__layout glass-frame">
                <article class="as400-brochure__main">
                    <h1 id="as400-brochure-title" class="as400-brochure__title">
                        {{ as400BrochureTitle }}<br />
                        <span class="as400-brochure__title-sub">{{ as400BrochureSubtitle }}</span>
                    </h1>

                    <p class="as400-brochure__lead">
                        <strong>WINDEV, WEBDEV et WINDEV Mobile constituent un environnement de développement intégré (IDE) complet.</strong>
                    </p>

                    <As400PlatformCarousel :slides="as400BrochurePlatformSlides" />
                    <p class="as400-brochure__caption">{{ as400BrochurePlatformCaption }}</p>

                    <div class="as400-brochure__platform-row">
                        <img
                            :src="as400BrochureWebdevApp.src"
                            alt="Application WEBDEV dans un navigateur avec données AS/400"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochureWebdevApp.fallback)"
                        />
                        <img
                            :src="as400BrochureMobileApp.src"
                            alt="Application WINDEV Mobile sur tablette avec données AS/400"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochureMobileApp.fallback)"
                        />
                    </div>

                    <p class="as400-brochure__body">
                        Ces environnements de développement intégrés regroupent tous les modules nécessaires pour développer des applications
                        en mode mono-poste, réseau ou Client/Serveur, pour Internet ou Intranet, ainsi que pour les appareils mobiles. De la
                        phase de conception au déploiement, tous les modules sont inclus.
                    </p>
                    <p class="as400-brochure__body">
                        « WINDEV AS/400 » comprend la version complète de WINDEV, plus le Connecteur natif AS/400. Ce connecteur permet
                        d'accéder à l'AS/400 sans ODBC, OLEDB ni ActiveX, et de bénéficier de toutes les fonctionnalités décrites dans ce
                        document. « WEBDEV AS/400 » est la version de WEBDEV incluant le Connecteur natif AS/400.
                    </p>

                    <h2 class="as400-brochure__section-title">WINDEV et WEBDEV AS/400 : intégration AS/400</h2>
                    <p class="as400-brochure__body">
                        WINDEV et WEBDEV permettent un accès natif en temps réel aux bases AS/400 (sans ODBC, OLEDB ni ActiveX), ainsi
                        qu'aux programmes et commandes AS/400. Avec WINDEV, exploitez les fonctionnalités AS/400 et son interface dans vos
                        projets : le meilleur des deux mondes. Vous capitalisez sur votre système d'information tout en accélérant le
                        développement — jusqu'à 10 fois plus vite ! Quelle que soit la plateforme cliente (PC Windows, navigateur Web,
                        mobile…), applications et pages sont développées avec le même langage de 5e génération.
                    </p>
                    <p class="as400-brochure__body">
                        La programmation WINDEV reste identique. Aucune programmation AS/400 (RPG, Cobol, etc.) n'est requise. Les
                        applications développées avec WINDEV et WEBDEV fonctionnent automatiquement avec les données AS/400 si nécessaire, et
                        sont portables immédiatement.
                    </p>
                    <p class="as400-brochure__body">
                        Depuis une même application WINDEV AS/400, accédez aux fichiers AS/400 natifs, aux bases WINDEV (HFSQL), ainsi qu'à
                        d'autres bases (Oracle, XML, etc.) et systèmes (Linux, etc.) en toute transparence. Après installation du Connecteur
                        natif AS/400, aucune opération n'est requise sur l'AS/400.
                    </p>
                    <p class="as400-brochure__body">
                        Toutes les fonctionnalités de sécurité AS/400 pour l'accès aux fichiers et programmes et la gestion des transactions
                        sont préservées. Vos applications pourront verrouiller enregistrements et fichiers ouverts en lecture/écriture selon
                        les règles de gestion des conflits de l'AS/400.
                    </p>
                    <p class="as400-brochure__body">
                        Les applications WINDEV ou WEBDEV peuvent envoyer des commandes AS/400 (OVRDBF, OPNQRYF, etc.) avant d'ouvrir des
                        fichiers avec les commandes WINDEV, ou modifier l'environnement de travail.
                    </p>

                    <h2 class="as400-brochure__section-title">Connecteurs natifs : sécurité, rapidité et performance</h2>
                    <p class="as400-brochure__body">Avec WINDEV AS/400 vous pouvez facilement :</p>
                    <ul class="as400-brochure__list">
                        <li>Communiquer avec l'AS/400, sans développement spécifique.</li>
                        <li>Intégrer la description d'une base AS/400 dans une analyse WINDEV.</li>
                        <li>Lire, mettre à jour, insérer ou supprimer des enregistrements en parallèle des applications « 5250 ».</li>
                        <li>Effectuer des lectures/écritures optimisées (buffers).</li>
                        <li>Effectuer des recherches par clés simples ou composées.</li>
                        <li>Créer des applications transactionnelles.</li>
                        <li>Utiliser les Data Queues et Data Areas.</li>
                        <li>Envoyer des commandes CL avec paramètres.</li>
                        <li>Appeler des programmes et procédures RPG, Cobol et C avec paramètres.</li>
                    </ul>

                    <h2 class="as400-brochure__section-title">Architecture du système d'information</h2>
                    <p class="as400-brochure__body">
                        La configuration des postes est très simple. WINDEV et WEBDEV communiquent avec l'AS/400 via le protocole APPC de
                        votre routeur ou via TCP/IP.
                    </p>
                    <p class="as400-brochure__body">
                        <strong>Poste client : PC</strong><br />
                        Windows 10, 8, 7, etc.<br />
                        Routeur APPC (Client Access, NS Router, Netware for SAA, Microsoft SNA Server, PCS, etc.) ou TCP/IP
                    </p>
                    <p class="as400-brochure__body">
                        <strong>Serveur : AS/400 ou IBM i</strong><br />
                        Tous les OS depuis la version 4R3 inclus<br />
                        TCP/IP
                    </p>
                    <p class="as400-brochure__body">
                        <strong>Connexion</strong><br />
                        Ethernet, Token Ring, SDLC, Twinax, etc. Avec TCP/IP, aucun routeur n'est requis. Sinon, un routeur est nécessaire.
                    </p>

                    <h2 class="as400-brochure__section-title as400-brochure__section-title--major">MÉTHODE DE DÉVELOPPEMENT</h2>
                    <p class="as400-brochure__body">
                        Illustrons la facilité d'utilisation et la puissance de WINDEV AS/400 avec un exemple concret : une application de
                        gestion commerciale. WEBDEV AS/400 et WINDEV Mobile reposent sur la même méthode : seule la plateforme d'exécution
                        change (navigateurs, Windows, tablettes/smartphones).
                    </p>
                    <p class="as400-brochure__body">
                        Note : pour simplifier, nous utiliserons le terme WINDEV dans la suite. Dans cet exemple, l'application s'exécute sur
                        un PC avec des fichiers de données sur AS/400.
                    </p>
                    <p class="as400-brochure__body">Le développement peut se décomposer en 5 étapes :</p>
                    <ol class="as400-brochure__list as400-brochure__list--ordered">
                        <li v-for="step in as400DevelopmentSteps" :key="step">{{ step }}</li>
                    </ol>
                    <p class="as400-brochure__body">
                        Chaque étape peut être réalisée avec les modules standards inclus dans WINDEV AS/400.
                    </p>

                    <h2 class="as400-brochure__section-title">ÉTAPE 1 : PROJET ET ANALYSE</h2>
                    <p class="as400-brochure__body">Créons un nouveau projet WINDEV : un projet CRM.</p>
                    <p class="as400-brochure__body"><strong>1er cas : import DDS</strong> (rétro-ingénierie)</p>
                    <p class="as400-brochure__body">
                        S'il existe des données sur votre AS/400 ou celui de votre client, importez simplement les DDS dans WINDEV. Spécifiez
                        ensuite le type de fichiers utilisés (HFSQL, xBase, XML, AS/400 natif, bases externes Oracle, SAP ASE, Informix,
                        Access, SQL Server, etc.). L'outil d'analyse nécessite une connexion AS/400.
                    </p>
                    <p class="as400-brochure__body">
                        WINDEV AS/400 accède aux fichiers physiques et logiques comme une application RPG ou COBOL. Pour notre exemple, nous
                        sélectionnons : « CLIENT », « COMMANDE », « LIGNE DE COMMANDE », « PRODUIT » et « FOURNISSEUR ». WINDEV récupère
                        automatiquement la structure et crée un dépôt de métadonnées par rétro-ingénierie.
                    </p>
                    <figure class="as400-brochure__figure">
                        <img
                            :src="as400BrochureAutoStructure.src"
                            alt="Récupération automatique de la structure des fichiers de données par WINDEV"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochureAutoStructure.fallback)"
                        />
                        <figcaption>Récupération automatique de la structure des fichiers de données par WINDEV</figcaption>
                    </figure>
                    <p class="as400-brochure__body">
                        WINDEV AS/400 convertit les contrôles AS/400 au format Windows ; les données restent au format AS/400. Chaque fichier
                        logique devient une clé WINDEV. WINDEV déduit les relations entre fichiers et récupère les contraintes d'intégrité.
                    </p>
                    <p class="as400-brochure__body"><strong>2e cas : export DDS</strong></p>
                    <p class="as400-brochure__body">
                        Pour créer de nouveaux fichiers sur l'AS/400, définissez-les dans l'éditeur d'analyse WINDEV et exportez les DDS vers
                        l'AS/400. Les DDS sont créés et compilés dans la bibliothèque de votre choix (*LIBL).
                    </p>
                    <p class="as400-brochure__body">
                        <strong>Comment WINDEV détermine-t-il si des fichiers existent sur l'AS/400 ?</strong> Après import, définissez les
                        paramètres de connexion. Utilisez HOpenConnection pour ouvrir une connexion vers un AS/400 spécifique.
                        HChangeConnection permet de basculer entre fichiers AS/400 et HFSQL à tout moment.
                    </p>
                    <p class="as400-brochure__body">Cette technologie offre une grande liberté de développement et de déploiement :</p>
                    <div v-for="scenario in as400DeploymentScenarios" :key="scenario.title" class="as400-brochure__scenario">
                        <p class="as400-brochure__scenario-title">{{ scenario.title }}</p>
                        <p class="as400-brochure__scenario-text">{{ scenario.text }}</p>
                    </div>

                    <h2 class="as400-brochure__section-title">ÉTAPE 2 : RAD (ÉTAPE OPTIONNELLE)</h2>
                    <p class="as400-brochure__body">
                        Le RAD (« Rapid Application Development ») permet de créer une application fonctionnelle en quelques minutes : fenêtres,
                        pages, menus, modification/ajout/suppression de données, états, etc. WINDEV génère le code de gestion des accès
                        concurrents (verrous reconnus par les programmes AS/400).
                    </p>
                    <p class="as400-brochure__body">
                        Répondez à une série de questions dans l'outil RAD, choisissez le type de code (SQL, Objet, Procédural…), sélectionnez
                        les fichiers de l'analyse, et WINDEV crée toutes les fenêtres et le code associé.
                    </p>
                    <figure class="as400-brochure__figure">
                        <img
                            :src="as400BrochureRadClientForm.src"
                            alt="Exemple de fenêtre générée : fiche client"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochureRadClientForm.fallback)"
                        />
                        <figcaption>Exemple de fenêtre générée : fiche client</figcaption>
                    </figure>
                    <p class="as400-brochure__body">
                        <strong>Exécution de l'application vue depuis l'AS/400</strong> — Pour chaque application WINDEV en cours
                        d'exécution, une connexion physique vers un job AS/400 est établie (ici le job EAC_CLIENT, profil « WINDEV »).
                    </p>
                    <figure class="as400-brochure__figure">
                        <img
                            :src="as400BrochureAs400Job.src"
                            alt="Vue du job EAC_CLIENT lié à l'exécution de l'application WINDEV"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochureAs400Job.fallback)"
                        />
                        <figcaption>Vue du job EAC_CLIENT lié à l'exécution de notre application développée avec WINDEV</figcaption>
                    </figure>
                    <figure class="as400-brochure__figure">
                        <img
                            :src="as400BrochureAs400Io.src"
                            alt="Vue des E/S sur l'AS/400"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochureAs400Io.fallback)"
                        />
                        <figcaption>
                            Vue des E/S sur l'AS/400. Le buffer d'E/S peut être défini pour chaque fichier afin d'optimiser les performances.
                        </figcaption>
                    </figure>

                    <h2 class="as400-brochure__section-title">ÉTAPE 3 : PROGRAMMER L'APPLICATION</h2>
                    <p class="as400-brochure__body">
                        Le RAD permet de créer une application, mais vous personnaliserez probablement les règles de gestion et développerez
                        d'autres applications from scratch. Tout ce qui est généré par le RAD est modifiable.
                    </p>
                    <p class="as400-brochure__body">
                        <strong>Requêtes</strong> — WINDEV intègre un éditeur de requêtes avec assistant. Exportez facilement les résultats
                        (Texte, Excel, Word, XML, etc.) via un menu contextuel automatique.
                    </p>
                    <figure class="as400-brochure__figure">
                        <img
                            :src="as400BrochureQueryEditor.src"
                            alt="Éditeur de requêtes WINDEV"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochureQueryEditor.fallback)"
                        />
                    </figure>
                    <p class="as400-brochure__body">
                        <strong>Impression</strong> — Le générateur d'états crée des rapports à partir de fichiers AS/400 ou PC. Codes-barres,
                        images, libellés et fonds de page sont pris en charge. Résultat : aperçu, impression, HTML ou PDF. L'imprimante peut
                        être locale, réseau ou « imprimante virtuelle » de l'AS/400.
                    </p>
                    <p class="as400-brochure__body">
                        <strong>Communication avec l'AS/400</strong> — Appels batch ou CL, Data Queues et Data Areas, exécution de commandes
                        AS/400 (ex. CHGPRF).
                    </p>
                    <p class="as400-brochure__body">Commandes AS/400 spécifiques disponibles dans WINDEV AS/400 :</p>
                    <div class="as400-brochure__table-wrap">
                        <table class="as400-brochure__table">
                            <tbody>
                                <tr v-for="row in as400CommandTable" :key="row.command">
                                    <th scope="row">{{ row.command }}</th>
                                    <td>{{ row.description }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 class="as400-brochure__section-title">ÉTAPE 4 : CRÉER L'EXÉCUTABLE</h2>
                    <p class="as400-brochure__body">
                        Après le développement, créez l'exécutable. WINDEV gère automatiquement le numéro de version et propose un module de
                        gestion de versions. Le même programme fonctionne sous Windows 10, 8, 7, etc. Créez aussi facilement des assemblies
                        .NET, des services Web et plus encore.
                    </p>

                    <h2 class="as400-brochure__section-title">ÉTAPE 5 : DÉPLOYER L'APPLICATION</h2>
                    <p class="as400-brochure__body">
                        <strong>1. Installeur</strong> — WINDEV intègre un générateur de programme d'installation personnalisable. Déploiement
                        par CD-ROM, DVD, réseau ou Internet.
                    </p>
                    <p class="as400-brochure__body">
                        <strong>2. Documentation technique</strong> — Imprimez à tout moment la documentation complète par rétro-ingénierie
                        (analyse, écrans, code, états…) en HTML ou PDF, toujours à jour.
                    </p>
                    <figure class="as400-brochure__figure">
                        <img
                            :src="as400BrochureDeployDoc.src"
                            alt="Documentation technique générée par WINDEV"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochureDeployDoc.fallback)"
                        />
                    </figure>

                    <h2 class="as400-brochure__section-title as400-brochure__section-title--major">WINDEV AS/400</h2>
                    <p class="as400-brochure__body">
                        Ce document se concentre sur l'AS/400. Si vous ne connaissez pas encore WINDEV ou WEBDEV, nos brochures sont un bon
                        point de départ.
                    </p>
                    <p class="as400-brochure__body">
                        Pour développer des applications « Client/Serveur » sur AS/400, WINDEV et WEBDEV AS/400 sont la meilleure solution :
                        puissance, facilité d'utilisation, tarification claire, support technique efficace, rapidité d'exécution,
                        compatibilité avec vos éléments existants, auto-formation en une semaine.
                    </p>
                    <p class="as400-brochure__pdf-links">
                        <a class="as400-brochure__text-link" :href="as400BrochurePdfFr.href" target="_blank" rel="noopener noreferrer">
                            Brochure PDF WINDEV AS/400
                        </a>
                        ·
                        <RouterLink class="as400-brochure__text-link" to="/software/subscribe">Voir les tarifs</RouterLink>
                    </p>

                    <h2 class="as400-brochure__section-title">WEBDEV AS/400</h2>
                    <p class="as400-brochure__body">
                        WEBDEV, l'environnement pour sites Internet et Intranet dynamiques, prend également en charge ce système avec la même
                        méthode et les mêmes avantages.
                    </p>
                    <figure class="as400-brochure__figure">
                        <img
                            :src="as400BrochureChart3d.src"
                            alt="Graphique 3D dans WINDEV et WEBDEV AS/400"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochureChart3d.fallback)"
                        />
                        <figcaption>
                            Les graphiques ont le même aspect dans WINDEV et WEBDEV AS/400. Générez ce type de graphique automatiquement pour
                            vos utilisateurs finaux via un menu contextuel.
                        </figcaption>
                    </figure>

                    <h2 class="as400-brochure__section-title as400-brochure__section-title--major">FAQ</h2>
                    <h3 class="as400-brochure__faq-heading">FAQ générale</h3>
                    <div v-for="item in as400GeneralFaq" :key="item.question" class="as400-brochure__faq-item">
                        <p class="as400-brochure__faq-question">{{ item.question }}</p>
                        <p class="as400-brochure__faq-answer">{{ item.answer }}</p>
                    </div>

                    <h3 class="as400-brochure__faq-heading">FAQ technique</h3>
                    <div v-for="item in as400TechnicalFaq" :key="item.question" class="as400-brochure__faq-item">
                        <p class="as400-brochure__faq-question">{{ item.question }}</p>
                        <p class="as400-brochure__faq-answer">{{ item.answer }}</p>
                    </div>
                    <p class="as400-brochure__body">
                        <strong>Pour toute question complémentaire,</strong>
                        <RouterLink class="as400-brochure__text-link" to="/pc-soft/contact">contactez-nous</RouterLink>.
                    </p>

                    <h2 class="as400-brochure__section-title as400-brochure__section-title--major">
                        WINDEV : TOUT EST INCLUS DANS UN ENVIRONNEMENT TOTALEMENT INTÉGRÉ
                    </h2>
                    <p class="as400-brochure__body">Résumé des principales fonctionnalités :</p>
                    <ul class="as400-brochure__list">
                        <li v-for="feature in as400IncludedFeatures" :key="feature">{{ feature }}</li>
                    </ul>
                    <p class="as400-brochure__back-wrap">
                        <RouterLink class="as400-brochure__text-link" to="/software/native-connectors/as400-system-i">
                            ← Retour à la page AS/400 &amp; System i
                        </RouterLink>
                    </p>
                </article>

                <aside class="as400-brochure__sidebar" aria-label="Produits et ressources associés">
                    <figure class="as400-brochure__product-boxes">
                        <img
                            :src="as400BrochurePackages.src"
                            alt="WINDEV, WEBDEV et WINDEV Mobile"
                            loading="lazy"
                            decoding="async"
                            @error="onImageError($event, as400BrochurePackages.fallback)"
                        />
                    </figure>

                    <p class="as400-brochure__sidebar-lead">
                        Les environnements
                        <RouterLink class="as400-brochure__text-link" to="/software/windev"><strong>WINDEV</strong></RouterLink>,
                        <RouterLink class="as400-brochure__text-link" to="/software/webdev"><strong>WEBDEV</strong></RouterLink> et
                        <RouterLink class="as400-brochure__text-link" to="/software/windevmobile"><strong>WINDEV Mobile</strong></RouterLink>
                        sont compatibles et partagent les éléments de projet. Il n'a jamais été aussi simple de créer des applications
                        multi-cibles.
                    </p>

                    <div class="as400-brochure__sidebar-block">
                        <h2 class="as400-brochure__sidebar-heading">Présentation de la documentation</h2>
                        <ul class="as400-brochure__sidebar-list">
                            <li>
                                <a class="as400-brochure__text-link" :href="as400NewFeaturesPdf.href" target="_blank" rel="noopener noreferrer">
                                    Nouveautés
                                </a>
                            </li>
                            <li>
                                <a class="as400-brochure__text-link" :href="as400WindevBrochureEn.href" target="_blank" rel="noopener noreferrer">
                                    WINDEV
                                </a>
                            </li>
                            <li>
                                <a class="as400-brochure__text-link" :href="as400WebdevBrochureEn.href" target="_blank" rel="noopener noreferrer">
                                    WEBDEV
                                </a>
                            </li>
                            <li>
                                <a
                                    class="as400-brochure__text-link"
                                    :href="as400WindevMobileBrochureEn.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WINDEV Mobile
                                </a>
                            </li>
                            <li>
                                <a class="as400-brochure__text-link" :href="as400BrochurePdfFr.href" target="_blank" rel="noopener noreferrer">
                                    Brochure WINDEV AS/400 (PDF)
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="as400-brochure__sidebar-block">
                        <h2 class="as400-brochure__sidebar-heading">Schémas de présentation</h2>
                        <ul class="as400-brochure__sidebar-list">
                            <li>
                                <a
                                    class="as400-brochure__text-link"
                                    :href="as400UniversalConnectorsPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connecteurs bases de données universels
                                </a>
                            </li>
                            <li>
                                <a
                                    class="as400-brochure__text-link"
                                    :href="as400CrossPlatformDevPdf.href"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Développement multiplateforme
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="as400-brochure__sidebar-block">
                        <h2 class="as400-brochure__sidebar-heading">Vidéos</h2>
                        <ul class="as400-brochure__sidebar-list">
                            <li>
                                <a class="as400-brochure__text-link" :href="AS400_TECHNICAL_VIDEOS_URL" target="_blank" rel="noopener noreferrer">
                                    Vidéos techniques
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="as400-brochure__customer" aria-label="Références clients">
                        <p class="as400-brochure__customer-title">Ils utilisent WINDEV</p>
                        <CustomerLogoCarousel variant="compact" />
                    </div>
                </aside>
            </div>
        </section>
    </main>
    <AppFooter />
</template>

<script setup>
import AppNavbar from '../components/AppNavbar.vue';
import AppFooter from '../components/AppFooter.vue';
import As400PlatformCarousel from '../components/As400PlatformCarousel.vue';
import CustomerLogoCarousel from '../components/CustomerLogoCarousel.vue';
import {
    as400BrochureTitle,
    as400BrochureSubtitle,
    as400BrochurePlatformCaption,
    as400DevelopmentSteps,
    as400DeploymentScenarios,
    as400CommandTable,
    as400GeneralFaq,
    as400TechnicalFaq,
    as400IncludedFeatures,
} from '../data/as400BrochureContent.js';
import {
    AS400_TECHNICAL_VIDEOS_URL,
    as400BrochurePdfFr,
    as400CrossPlatformDevPdf,
    as400NewFeaturesPdf,
    as400UniversalConnectorsPdf,
    as400WebdevBrochureEn,
    as400WindevBrochureEn,
    as400WindevMobileBrochureEn,
} from '../data/as400BrochureDocuments.js';
import {
    as400BrochureAs400Io,
    as400BrochureAs400Job,
    as400BrochureAutoStructure,
    as400BrochureChart3d,
    as400BrochureDeployDoc,
    as400BrochureMobileApp,
    as400BrochurePackages,
    as400BrochurePlatformSlides,
    as400BrochureQueryEditor,
    as400BrochureRadClientForm,
    as400BrochureSuiteCrossPlatform,
    as400BrochureWebdevApp,
} from '../data/as400BrochureImages.js';
import { applyImageFallback } from '../utils/pcsoftImages.js';

function onImageError(event, fallbackUrl) {
    applyImageFallback(event, fallbackUrl);
}
</script>

<style scoped>
.as400-brochure {
    color: var(--color-text-primary);
}

.as400-brochure__suite-line {
    text-align: center;
    margin-top: 0.6rem;
    margin-bottom: 1rem;
}

.as400-brochure__suite-text {
    margin: 0 0 0.5rem;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.11em;
    text-transform: uppercase;
    color: #5f6f8c;
}

.as400-brochure__suite-platforms {
    margin: 0 auto;
    max-width: 18rem;
}

.as400-brochure__suite-platforms img {
    display: block;
    width: 100%;
    height: auto;
}

.as400-brochure__content {
    margin-top: 0.45rem;
}

.as400-brochure__layout {
    display: grid;
    gap: clamp(1rem, 2vw, 1.8rem);
    grid-template-columns: minmax(0, 1fr) minmax(240px, 30%);
    padding: clamp(1rem, 2vw, 1.45rem);
    align-items: start;
}

.as400-brochure__main {
    min-width: 0;
    font-size: 0.92rem;
    line-height: 1.65;
}

.as400-brochure__title {
    margin: 0 0 1rem;
    font-size: clamp(1.15rem, 2.2vw, 1.55rem);
    font-weight: 800;
    line-height: 1.25;
}

.as400-brochure__title-sub {
    font-size: 0.85em;
}

.as400-brochure__lead {
    margin: 0 0 1rem;
    color: var(--color-text-secondary);
}

.as400-brochure__caption {
    margin: 0.5rem 0 1rem;
    font-size: 0.82rem;
    font-style: italic;
    color: var(--color-text-secondary);
    text-align: center;
    line-height: 1.45;
}

.as400-brochure__platform-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-bottom: 1.25rem;
}

.as400-brochure__platform-row img {
    max-width: calc(50% - 0.25rem);
    height: auto;
    border: 1px solid var(--color-border);
}

.as400-brochure__body {
    margin: 0 0 1rem;
    color: var(--color-text-secondary);
}

.as400-brochure__section-title {
    margin: 1.5rem 0 0.75rem;
    font-size: 0.95rem;
    font-weight: 800;
    color: #6b3f9e;
    letter-spacing: 0.03em;
    text-transform: uppercase;
}

.as400-brochure__section-title--major {
    font-size: 1.05rem;
    color: var(--color-text-primary);
    text-transform: none;
    letter-spacing: 0;
}

.as400-brochure__list {
    margin: 0 0 1rem;
    padding-left: 1.2rem;
    color: var(--color-text-secondary);
}

.as400-brochure__list--ordered {
    list-style: decimal;
}

.as400-brochure__figure {
    margin: 0 0 1.25rem;
    text-align: center;
}

.as400-brochure__figure img {
    display: inline-block;
    max-width: 100%;
    height: auto;
    border: 1px solid var(--color-border);
}

.as400-brochure__figure figcaption {
    margin-top: 0.45rem;
    font-size: 0.82rem;
    font-style: italic;
    color: var(--color-text-secondary);
    line-height: 1.45;
}

.as400-brochure__scenario {
    margin-bottom: 0.85rem;
    padding-left: 0.75rem;
    border-left: 3px solid rgba(107, 63, 158, 0.25);
}

.as400-brochure__scenario-title {
    margin: 0 0 0.35rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.as400-brochure__scenario-text {
    margin: 0;
    color: var(--color-text-secondary);
}

.as400-brochure__table-wrap {
    overflow-x: auto;
    margin-bottom: 1.25rem;
}

.as400-brochure__table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.88rem;
}

.as400-brochure__table th,
.as400-brochure__table td {
    padding: 0.5rem 0.65rem;
    border: 1px solid var(--color-border);
    text-align: left;
    vertical-align: top;
}

.as400-brochure__table th {
    width: 8rem;
    font-weight: 700;
    background: rgba(107, 63, 158, 0.06);
}

.as400-brochure__pdf-links {
    margin: 0 0 1.25rem;
}

.as400-brochure__faq-heading {
    margin: 1rem 0 0.65rem;
    font-size: 0.9rem;
    font-weight: 800;
    color: #6b3f9e;
    text-transform: uppercase;
}

.as400-brochure__faq-item {
    margin-bottom: 0.85rem;
}

.as400-brochure__faq-question {
    margin: 0 0 0.25rem;
    font-weight: 700;
    color: var(--color-text-primary);
}

.as400-brochure__faq-answer {
    margin: 0;
    color: var(--color-text-secondary);
}

.as400-brochure__back-wrap {
    margin: 1.5rem 0 0;
    text-align: center;
}

.as400-brochure__text-link {
    color: var(--color-brand);
    font-weight: 600;
    text-decoration: none;
}

.as400-brochure__text-link:hover {
    text-decoration: underline;
    text-underline-offset: 0.15rem;
}

.as400-brochure__sidebar {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 0;
    font-size: 0.88rem;
    line-height: 1.5;
}

.as400-brochure__product-boxes {
    margin: 0;
}

.as400-brochure__product-boxes img {
    display: block;
    width: 100%;
    height: auto;
}

.as400-brochure__sidebar-lead {
    margin: 0;
    color: var(--color-text-secondary);
}

.as400-brochure__sidebar-block {
    display: grid;
    gap: 0.45rem;
}

.as400-brochure__sidebar-heading {
    margin: 0;
    font-size: 0.78rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
}

.as400-brochure__sidebar-list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    gap: 0.35rem;
}

.as400-brochure__customer {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.as400-brochure__customer-title {
    margin: 0 0 0.45rem;
    width: 100%;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #5f6f8c;
    text-align: center;
}

@media (max-width: 900px) {
    .as400-brochure__layout {
        grid-template-columns: 1fr;
    }

    .as400-brochure__platform-row img {
        max-width: 100%;
    }
}
</style>
