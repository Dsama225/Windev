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
        title: 'Conversational AI in the environment',
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
                title: 'Ask your AI companion a question',
                paragraphs: ['The development environment now features a conversational AI companion.'],
            },
            {
                title: 'Describe what you want and let AI build it for you',
                paragraphs: [
                    'The environment can also perform any project-related tasks you can think of: "Generate a query that selects the customers in a given state", "Create a data file to store orders", "Set all variables to uppercase", etc.',
                ],
            },
            {
                title: 'The AI companion takes action for you',
                paragraphs: ['The AI companion can:'],
                list: [
                    'create a project',
                    'create an analysis',
                    'create a data file',
                    'create a query',
                    'create a procedure',
                    '…',
                ],
                afterList: 'You can make all these requests using natural language.',
            },
            {
                title: 'Come back to previous conversations',
                paragraphs: [
                    'Your conversations are saved by project. Even if you close the environment, you will still find all your conversations.',
                    'Your conversations are personal and are stored on your computer. This means you can come back to a specific subject at any time.',
                ],
            },
        ],
    },
    {
        id: 'pivot-table-webdev',
        title: 'Pivot Table control now available in WEBDEV',
        badge: '516 to 520',
        products: ['WB'],
        tone: 'white',
        image: 'tcd-webdev.png',
        pdfPage: 33,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/64',
        subsections: [
            {
                title: 'Pivot Table controls: An asset for decision-makers',
                paragraphs: [
                    'The Pivot Table control displays cross-referenced data from different files in a database.',
                    'Some examples include: sales by product family, by product, by region, over time, with or without details.',
                    'The Pivot Table performs all the calculation itself. All the data is dynamically calculated and displayed.',
                    'Note: The Pivot Table control is also known as "ROLAP cube".',
                ],
            },
            {
                title: 'Automatically created and populated',
                paragraphs: [
                    'Creating a Pivot Table control in WEBDEV 2026 is remarkably easy. Simply answer a series of questions in the wizard to define the data to be displayed.',
                    'This control is also populated automatically, no code required!',
                    'The WEBDEV 2026 ROLAP engine automatically reads the data and performs the necessary calculations for all the possible levels of detail. It automatically populates the row and column headers.',
                ],
            },
            {
                title: 'Use',
                paragraphs: [
                    'End users can choose the desired level of detail. Rows and columns can be expanded and collapsed as required.',
                    'The displayed result can be exported to Excel, Word, PDF, etc., as with any other table in WEBDEV.',
                    'The Excel export functionality is widely used for simulations.',
                ],
            },
            {
                title: 'Automatic period comparison',
                paragraphs: [
                    'The end user may ask to compare a given period to the same period of previous years. This comparison is available in one of the context menu options.',
                    'For example, users can compare sales in October 2025 with sales in October of the previous two years.',
                    'Percentages and differences are calculated and displayed automatically.',
                ],
            },
        ],
    },
    {
        id: 'security-audit',
        title: 'Project security audit',
        titleSub: 'Detect issues before deploying an application',
        badge: '120 to 125',
        products: ['WD', 'WB', 'WM'],
        tone: 'white',
        image: 'audit-de-securite.png',
        pdfPage: 14,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/26',
        subsections: [
            {
                title: 'Security audit, new audit available',
                paragraphs: [
                    'Data theft is quite common. Large volumes of data are stolen every day around the world, then distributed or resold.',
                    "Don't take risks with the data from your applications.",
                    'Version 2026 introduces the new security audit.',
                    'This security audit detects flaws, unencrypted data, code risks and non-compliance with security standards.',
                    'In order to cover all aspects of security, the audit examines the project both statically and dynamically.',
                ],
            },
            {
                title: 'Static security audit',
                paragraphs: [
                    'Issues detected by the security audit appear in the Compilation errors pane.',
                    'Detected issues are sorted by element (window, class, etc.).',
                    'The main verifications include:',
                ],
                list: [
                    'plain-text passwords in the code',
                    'unsigned executable',
                    'presence of the Code Editor control',
                    'executable without manifest',
                    'use of unsafe threads',
                    'unencrypted data file',
                    'use of IE ActiveX',
                    'use of deprecated encryption functions',
                    '…',
                ],
            },
            {
                title: 'Dynamic security audit',
                paragraphs: [
                    'The dynamic security audit detects issues both in test mode and on demand, when the application runs directly on the end-user device.',
                    'Detected issues appear both in the source code and in an aggregate list:',
                ],
                list: [
                    'number of issues detected',
                    'test date/time',
                    'list of issues detected in test mode',
                ],
                afterList: 'The main verifications include:',
                list2: [
                    'dynamic compilation',
                    'unsafe Socket/SOAP/REST data exchange',
                    'outdated application framework',
                    '…',
                ],
            },
            {
                title: 'HFSQL: Added security',
                paragraphs: [
                    'By simply using HFSQL and encrypting data using the automated features, you ensure a high level of security.',
                    "Other database systems don't offer these simple and flexible data encryption options.",
                    'With HFSQL, even illegal access to the server does not result in access to encrypted data.',
                ],
            },
        ],
    },
    {
        id: 'electronic-invoicing',
        title: 'Electronic invoicing',
        badge: '074 to 080',
        products: ['WD', 'WB', 'WM'],
        tone: 'yellow',
        image: 'factur-x.png',
        pdfPage: 9,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/16',
        subsections: [
            {
                title: 'Factur-X, one of the major solutions',
                paragraphs: [
                    'Factur-X is a hybrid electronic invoice format combining a human-readable PDF with an integrated structured XML file, compliant with European standard EN 16931.',
                    'It is easy for users to read, while ensuring automated integration into accounting systems.',
                    'Factur-X was developed by the French non-profit association FNFE-MPE, and the German association FeRD.',
                ],
            },
            {
                title: 'Factur-X: Overview',
                paragraphs: [
                    'Factur-X is based on XML files describing invoices according to extremely precise standards. This XML file is integrated into the invoice PDF.',
                    'The advantage is that Factur-X PDF file is both human-readable and machine-readable.',
                    'A Factur-X invoice implies:',
                ],
                list: [
                    'A PDF/A-3 file (archiving standard).',
                    'An EN 16931-compliant XML file as an attachment (in a text/xml attachment with the correct role).',
                ],
            },
            {
                title: '5 profiles',
                paragraphs: [
                    'Factur-X defines 5 data profiles (or levels) corresponding to use cases of increasing complexity. These profiles are:',
                ],
                list: [
                    'Minimum — essential data: invoice number, date, total amount, seller and buyer identification.',
                    'Basic WL (without lines) — totals excluding VAT, VAT by rate, but without line-by-line detail.',
                    'Basic — billing lines (description, quantity, unit price excl. VAT).',
                    'EN 16931 or Comfort — full European standard EN 16931 (mandatory for B2G exchanges in France and Europe).',
                    'Extended — additional sector-specific information (healthcare, energy, etc.).',
                ],
                afterList: 'Version 2026 supports the 4 levels already defined.',
            },
            {
                title: 'Factur-X: XML file example',
                paragraphs: ['The complexity of this XML file increases with the profile level. Example for an invoice line:'],
                code: `<ram:SpecifiedTradeProduct>
    <ram:GlobalID schemeID="0160">598785412598745</ram:GlobalID>
    <ram:SellerAssignedID>ART_1254</ram:SellerAssignedID>
    <ram:Name>SUPPORT SERVICE</ram:Name>
    ...
</ram:SpecifiedTradeProduct>`,
            },
            {
                title: 'Factur-X: Let your IDE generate the XML',
                paragraphs: [
                    'A ready-to-use internal component is provided. Simply integrate it into your project.',
                    'There is a property for every invoice detail. When the invoice is complete, call the GenerateXML method to create the XML file with the path to the PDF.',
                ],
                image: 'factur-x-assistance-au-choix-des-unites.png',
            },
            {
                title: 'Smart choice of units',
                paragraphs: [
                    'Choosing a standardized unit to use in Factur-X can quickly become difficult.',
                    'In version 2026, an intuitive wizard guides you through the selection of the standard-compliant unit, depending on the type of data to be transmitted.',
                ],
            },
            {
                title: 'Insert logo',
                paragraphs: [
                    'Some organizations add a Factur-X logo for information purposes, to indicate that the invoice is hybrid (PDF + XML).',
                    'This logo can be inserted automatically in the report editor.',
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
                title: 'Refresh the UI in real time',
                paragraphs: [
                    'In version 2026, you no longer need to exit test mode to edit your UI.',
                    'Any changes made in the development environment are immediately reflected in your application in test mode:',
                ],
                list: ['Add a control', 'Change anchors', 'Change size, font, etc.', '…'],
                afterList: 'This translates into massive time savings.',
            },
        ],
    },
    {
        id: 'conversational-ai-apps',
        title: 'Integrate a conversational AI companion into your applications',
        badge: '229 to 232',
        products: ['WD'],
        tone: 'yellow',
        image: 'ia-conversationnelle-dans-votre-app.png',
        pdfPage: 24,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/46',
        subsections: [
            {
                title: 'End users can actually interact with your application',
                paragraphs: [
                    'Question: What was the average amount of last month\'s invoices? Answer: €320,789',
                    'The conversation can contain: text, images, one or more actions in the application.',
                    'The AI Chat control lets users enter conversation elements, sends them to the model, retrieves the response and displays it as it goes along.',
                    'If the model requires an action, the AI Chat control will perform it.',
                ],
                image: 'code-champ-chat-ia.png',
            },
            {
                title: 'Supported models',
                paragraphs: [
                    'With the AI Chat control, you can choose the model that best suits your needs: Claude, Mistral, GPT, Gemini, OpenRouter, etc.',
                    'API account required: you must have an API account for the respective model provider.',
                ],
            },
            {
                title: 'Code example',
                paragraphs: [
                    'The AI Chat control can launch procedures from your applications. To specify that a procedure can be used by the AI Chat control, indicate its desired action and parameters between the dedicated tags.',
                ],
            },
            {
                title: 'AI Chat control features',
                paragraphs: ['The new AI Chat control offers a host of built-in features:'],
                list: [
                    'Conversation Edit control',
                    'Response in real time (Markdown)',
                    'Reset conversation button',
                    'Model selection',
                    'System prompt configuration',
                    'New processes in the code editor',
                    'Companion icon customization',
                    'Response rating (Like/Dislike)',
                ],
            },
        ],
    },
    {
        id: 'graphql',
        title: 'GraphQL',
        titleSub: 'Consume web services',
        badge: '144 to 147',
        products: ['WD', 'WB', 'WM'],
        tone: 'dark',
        pdfPage: 16,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/31',
        subsections: [
            {
                title: 'How does it work?',
                paragraphs: [
                    'The general principle of GraphQL is to make a single request to the web service, specifying all the data you want to retrieve.',
                    'The server returns all the data requested, structured in JSON format.',
                    'This offers a clear advantage, as you make one call instead of many. Performance is unmatched by any other type of web service.',
                ],
            },
            {
                title: 'Request example',
                paragraphs: [
                    "A web service request could ask for a customer's name, email address and last 10 orders with product details.",
                    'With GraphQL, all these operations can be completed in a single call.',
                ],
            },
            {
                title: 'New WLanguage type: graphqlQuery',
                paragraphs: [
                    'To easily use the returned values, the new WLanguage graphqlQuery type is introduced in version 2026. Code completion is available when accessing the query result.',
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
        title: 'HFSQL: Semantic search',
        titleSub: 'AI-based index',
        badge: '148 to 158',
        products: ['WD', 'WB', 'WM'],
        tone: 'white',
        pdfPage: 17,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/32',
        subsections: [
            {
                title: 'A major new feature for HFSQL',
                paragraphs: [
                    'HFSQL 2026 introduces semantic searches based on the meaning of text, rather than on the exact string.',
                    'This search examines text items or memos.',
                    'A new index format (.vex) has been added to HFSQL, natively supported without adaptations.',
                ],
            },
            {
                title: 'A "search engine" that uses the meaning of words and phrases',
                paragraphs: [
                    'For example, HFSQL 2026 makes it possible to search for "men\'s shoes" in a product database and find "shoes", "boots", "sneakers", "sandals", etc.',
                ],
                code: `MAX_RESULT is int = 10
FOR EACH Product WITH SemanticSearch(
    Description, "men's shoes", MAX_RESULT)
    DisplayProduct(Product.ProductID)
END`,
                afterList: 'No third-party modules required. Everything is integrated into the HFSQL engine.',
            },
            {
                title: 'An embedding model in HFSQL',
                paragraphs: [
                    'HFSQL integrates an embedding model and a specific index adapted to semantic search.',
                    'No additional installations, no connection to external modules, no additional management.',
                ],
            },
            {
                title: 'Create a semantic index',
                paragraphs: [
                    'Creating a semantic index is easy. Simply declare a semantic index in the analysis, and indicate the text items to be indexed.',
                    'On existing databases, an "automatic modification" is run.',
                ],
            },
            {
                title: 'Practical example',
                paragraphs: [
                    'Thanks to semantic search, a user who enters "mid-season coat" can obtain relevant results (jackets, windbreakers, thin parkas, etc.), even if these words are not present in the descriptions.',
                    'Standard search only matches exact terms; semantic search understands the customer\'s intention.',
                ],
            },
        ],
    },
    {
        id: 'grid-control',
        title: 'Grid control',
        badge: '010 to 016',
        products: ['WD', 'WM'],
        tone: 'yellow',
        image: 'nouveau-champ-grille.png',
        pdfPage: 4,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/6',
        subsections: [
            {
                title: 'A new control',
                paragraphs: [
                    'The Grid control is a relative positioning grid, available for WINDEV and WINDEV Mobile.',
                    'Align controls horizontally or vertically, without the need for pixel positioning.',
                    'Use nested containers to define the desired layout.',
                ],
            },
            {
                title: 'Visual editing',
                paragraphs: [
                    'The grid starts simply as a series of rows and columns.',
                    'Define how rows and columns react when the control is resized: fixed size, anchor to content, anchor vertically or horizontally.',
                    'Controls and containers are positioned in cells. You can merge cells horizontally or vertically.',
                    'The Grid control is always in WYSIWYG mode.',
                ],
            },
            {
                title: 'Nested construction',
                paragraphs: [
                    'UI is built by nesting elements: grid inside grid, grid inside flexbox, flexbox inside grid — any combination is possible.',
                ],
            },
            {
                title: 'Cells',
                paragraphs: [
                    'Controls are positioned relative to the upper-left corner of their containing cell.',
                    'A cell can contain several controls with anchors relative to the cell size.',
                ],
            },
            {
                title: 'Programming',
                paragraphs: [
                    'The grid can be edited programmatically: add or delete rows and columns, hide controls while preserving alignment, etc.',
                ],
            },
        ],
    },
    {
        id: 'modifier-pane',
        title: 'Improved Modifier pane',
        badge: '081 to 082',
        products: ['WD', 'WB', 'WM'],
        tone: 'white',
        image: 'modifieur-plus-riche.png',
        pdfPage: 10,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/18',
        subsections: [
            {
                title: 'More features in the Modifier',
                paragraphs: ['New information available, both when viewing and editing an element.'],
            },
            {
                title: 'For all controls',
                paragraphs: ['Path to the image associated with the control, including button icon, Edit control button icons, window icon, ActionBar icon.'],
            },
            {
                title: 'Image control and Window',
                paragraphs: ['A specific section allows you to view and select the image path and display mode settings.'],
            },
            {
                title: 'Combo Box / List Box control',
                paragraphs: ['Remember columns/panes/values, stored values, sorting.'],
            },
            {
                title: 'Check Box / Radio Button control',
                paragraphs: ['Number of columns, proportional columns, multi-line options, RTF support.'],
            },
            {
                title: 'Table control',
                paragraphs: ['Selection mode, column anchoring.'],
            },
        ],
    },
    {
        id: 'scm-local-history',
        title: 'SCM: Local history',
        badge: '096 to 097',
        products: ['WD', 'WB', 'WM'],
        tone: 'yellow',
        image: 'gds-historisation-locale.png',
        pdfPage: 11,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/21',
        subsections: [
            {
                title: 'Local history',
                paragraphs: [
                    'In a development team, elements are not checked into the SCM until development of a functionality has been completed.',
                    'Until check-in, the developer had no access to history and no possibility of rolling changes back.',
                    'Now, the SCM enables developers to create a local history without immediately synchronizing with the central repository.',
                ],
            },
            {
                title: 'Main advantages of local history',
                paragraphs: ['When checking elements into the repository, two options are available:'],
                list: [
                    'Transfer all local versions to the global history.',
                    'Transfer only the latest local version to the global history.',
                ],
            },
        ],
    },
    {
        id: 'palette-editor',
        title: 'Palette editor',
        badge: '233 to 236',
        products: ['WD', 'WM'],
        tone: 'white',
        image: 'editeur-de-palettes.png',
        pdfPage: 26,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/47',
        subsections: [
            {
                title: 'Palettes: An innovative concept for UI customization',
                paragraphs: [
                    'Color palettes were introduced in version 2025, allowing developers to easily create coherent UIs.',
                    'Palettes are interchangeable between skin templates. Changing the palette changes all the colors in a single operation.',
                ],
            },
            {
                title: 'New palette creation wizard',
                paragraphs: [
                    'The palette editor lets you create a palette from scratch.',
                    'Secondary colors are derived automatically from dominant colors, using a customizable formula.',
                    'The intuitive UI of the palette editor reflects changes in real time.',
                ],
                image: 'editeur-de-palettes-visualisation-du-rendu.png',
            },
            {
                title: 'View changes in the editor',
                paragraphs: [
                    'The palette editor features a built-in test mode with real-time preview on the most frequently used controls.',
                ],
            },
        ],
    },
    {
        id: 'new-color-palettes',
        title: 'New color palettes',
        badge: '250',
        products: ['WD', 'WM'],
        tone: 'yellow',
        image: 'nouvelles-palettes-de-couleurs.png',
        pdfPage: 35,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/50',
        subsections: [
            {
                title: 'New color palettes for WINDEV',
                paragraphs: [
                    'Version 2026 features many new color palettes for new customization possibilities.',
                    'Feel free to use these palettes in your applications and software packages.',
                    'Remember you can dynamically switch between palettes, and even create your own.',
                    'WINDEV includes everything you need to create superb UIs.',
                ],
            },
        ],
    },
    {
        id: 'smart-card-signature',
        title: 'Certificate-based signature with smart cards',
        badge: '254 to 256',
        products: ['WD'],
        tone: 'white',
        image: 'signature-numerique-par-certificat-sur-carte-a-puce.png',
        pdfPage: 43,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/52',
        subsections: [
            {
                title: 'How it works',
                paragraphs: [
                    'Certificate-based signing using smart cards offers an additional authentication method for signing documents or data.',
                    'Examples include health cards, professional cards, cryptographic cards, etc.',
                ],
            },
            {
                title: 'The private key stays on the card',
                paragraphs: [
                    'The card stores a private key associated with a certificate (e.g. X.509) issued by a certificate authority.',
                    'When signing, the card is inserted into a compatible reader (PC/SC).',
                    'The signature is generated locally on the card, without ever exposing the private key.',
                ],
            },
            {
                title: 'WLanguage programming',
                paragraphs: [
                    'All WLanguage functions for signing, such as PDFSign, XMLSign, etc., support certificates stored on smart cards.',
                    'Using CertificateList, the application retrieves all accessible certificates, including those on an inserted smart card.',
                ],
            },
        ],
    },
    {
        id: 'openstreetmap',
        title: 'OpenStreetMap: Use maps without Google Maps',
        badge: '560 to 561 and 727 to 731',
        products: ['WD', 'WB', 'WM'],
        tone: 'yellow',
        image: 'openstreetmap.png',
        pdfPage: 15,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/69',
        subsections: [
            {
                title: 'An alternative to Google Maps',
                paragraphs: [
                    'Google Maps is an extremely powerful and popular mapping service. OpenStreetMap is the best-known alternative.',
                ],
            },
            {
                title: 'Options available',
                paragraphs: [
                    'WINDEV, WEBDEV and WINDEV Mobile 2026 (Android apps) support OpenStreetMap.',
                    'You can easily choose the type of map in the 7-tab window of the control.',
                    'Both solutions support gestures (zoom, move, etc.), and allow users to draw routes, shapes, points of interest, etc.',
                    'Some automatic features are not available, in particular route planning and marker clusters.',
                ],
            },
            {
                title: 'IGN, SHOM, MAPBOX, CADASTRE, and more',
                paragraphs: ['The Map control also supports many other map formats:'],
                list: [
                    'IGN', 'SHOM', 'BRGM', 'RGE', 'GéoRisques', 'ODRE',
                    'Mapbox', 'ESRI', 'NASA / USGS', 'Copernicus / Sentinel', 'Natural Earth',
                ],
            },
            {
                title: 'Use multiple layers on the same map',
                paragraphs: ['The Map control now supports layers to overlap different maps on the screen.'],
            },
        ],
    },
    {
        id: 'wifi-debugging',
        title: 'Wi-Fi debugging',
        badge: '759',
        products: ['WM'],
        tone: 'white',
        image: 'debug-wifi-windev-mobile.png',
        pdfPage: 84,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/84',
        subsections: [
            {
                title: 'Debug your apps over Wi-Fi',
                paragraphs: [
                    'WINDEV Mobile 2026 features an improved debugger for Android applications over Wi-Fi.',
                    'To pair the device, specify its IP address in the debugger and enter a one-time code on the device.',
                    'All debugger commands are available: step by step execution, trace, watch, breakpoint, etc.',
                ],
            },
        ],
    },
    {
        id: 'wlanguage-features',
        title: 'New WLanguage features',
        badge: '130 to 143 and 565 to 659',
        products: ['WD', 'WB', 'WM'],
        tone: 'yellow',
        image: '/img/visual/wl.png',
        imageIsAbsolute: true,
        pdfPage: 28,
        ebookUrl: 'https://windev.com/storage/en_US/ebook/newfeatures/28',
        subsections: [
            {
                title: '15 WLanguage Organizer functions',
                paragraphs: [
                    'In version 2026, WLanguage Organizer functions are available in Browser code for faster processes in Organizer controls.',
                ],
            },
            {
                title: 'Email functions',
                paragraphs: [
                    'New WLanguage Email functions: EmailExecuteCommand, EmailSubscribeToFolder, EmailUnsubscribeFromFolder (IMAP).',
                ],
            },
            {
                title: 'Faster download of HFSQL memos',
                paragraphs: [
                    'Version 2026 adds MemoDisplay and MemoDownload. HFSQL memos are sent continuously, block by block, reducing memory consumption and download time.',
                ],
            },
            {
                title: 'InputMask type',
                paragraphs: [
                    'The WLanguage InputMask type is used to programmatically implement input masks. In version 2026, this type is available in browser code.',
                ],
            },
            {
                title: '= operator for arrays',
                paragraphs: [
                    'In version 2026, you can use the "=" operator between two arrays to compare their elements recursively.',
                ],
            },
            {
                title: 'Availability',
                paragraphs: [
                    'Version 2026 is available now, but some features will be released in the coming months.',
                ],
            },
        ],
    },
];

export const newFeaturesToc = newFeaturesSections.map((section) => ({
    id: section.id,
    label: section.titleSub ? `${section.title} — ${section.titleSub}` : section.title,
}));
