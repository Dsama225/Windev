/** Support page content aligned with windev.com (ts, ad, assistance, useful_resources). */

import { supportImages } from './supportPageImages.js';

export const supportPageCatalog = {
    'support.technical-support': {
        documentTitle: 'Technical Support',
        hero: {
            eyebrow: 'Our services',
            title: 'TECHNICAL SUPPORT: OVERVIEW',
        },
        heroImage: {
            ...supportImages.technicalSupport,
            alt: 'WINDEV technical support',
        },
        lead:
            'Technical Support is free (excluding communication costs) for the first 15 requests on the current version.',
        sections: [
            {
                id: 'how-to-contact',
                title: 'How to contact the Technical Support?',
                paragraphs: [
                    'Use the "TechSupportRequest" application, available in the installation directory of your PC SOFT product, or on our website. Alternatively, open WINDEV, WEBDEV or WINDEV Mobile, go to the "Home" tab, "Online help" group, expand "Help" and select "Request to Technical Support...".',
                    'The product for which you are making the request must be registered.',
                ],
            },
            {
                id: 'scope',
                title: 'Scope of support',
                paragraphs: [
                    'The Technical Support only processes requests directly related to WINDEV, WEBDEV and WINDEV Mobile.',
                    "PC SOFT only provides support for its products. This does not include pure SQL, other publisher's databases, network server configurations or client PCs, APIs, Web server configurations, etc. If you require support for features of other products, please contact their respective publishers.",
                ],
            },
            {
                id: 'other-assistance',
                title: 'Other forms of assistance',
                paragraphs: [
                    'On site consulting: a PC SOFT engineer can assist you with your application, on your premises, anywhere in the world (missions 1 to max 5 days). See our Consulting service.',
                ],
                links: [{ label: 'Remote consulting', to: '/support/remote-consulting' }],
            },
        ],
        note: 'All information provided here is subject to change without notice.',
        relatedLinks: [
            { label: 'Direct Assistance', to: '/support/direct-assistance' },
            { label: 'Remote consulting', to: '/support/remote-consulting' },
            { label: 'Resources', to: '/support/resources' },
        ],
    },
    'support.direct-assistance': {
        documentTitle: 'Direct Assistance',
        hero: {
            eyebrow: 'Our services',
            title: 'DIRECT ASSISTANCE',
            subtitle: 'SUPPORT FOR DEMANDING PROFESSIONALS',
        },
        heroImage: {
            ...supportImages.directAssistance,
            alt: 'Direct Assistance — WINDEV suite',
        },
        bullets: [
            'You develop strategic applications?',
            'You want custom, comprehensive support?',
            'You know that spending hours looking for solutions is not cost-effective for your company?',
        ],
        lead:
            'Our "Direct Assistance" service is perfect for you! Direct Assistance, a custom assistance service for PC SOFT products, allows you to obtain exactly the information you need.',
        sections: [
            {
                id: 'how-it-works',
                title: 'How it works',
                paragraphs: [
                    'Sign up for a subscription to Direct Assistance and set a time credit. You will be assigned with a dedicated contact. Each of your email inquiries will be processed by your dedicated contact. The time taken to answer each of your inquiries is added up. You use your subscription on an as-needed basis, at your own pace. There are 3, 4, 6, 10, 30 and 60-hour packages.',
                ],
            },
            {
                id: 'when-subscribe',
                title: 'In what case should you subscribe to Direct Assistance?',
                paragraphs: [
                    'First, if you want a cost-effective and efficient service, and especially if you fall into one of the following cases:',
                ],
                list: [
                    'Team of 3 or more developers',
                    '100 or more copies of your project distributed',
                    'Revenue generated from your project above €100,000',
                    'Over 100 end users',
                    'Strategic project',
                    'You want comprehensive, priority support',
                    "You don't like to wait",
                ],
            },
            {
                id: 'cost-efficiency',
                title: 'Cost efficiency',
                paragraphs: [
                    'Direct Assistance allows you to cut costs, as you save a significant amount of time. You obtain exactly the information you need, almost immediately, thus saving precious time. Besides, you can benefit from your contact\'s expertise while developing your project. Only the time actually spent is taken from your credit.',
                ],
            },
            {
                id: 'complement',
                title: 'An efficient complement to the Technical Support',
                paragraphs: [
                    'Direct Assistance lets you personalize your relationship with the PC SOFT technical support engineers, address wider technical subjects, more complex and more specific than what you can discuss with the technical support. Request a subscription contract to our sales department!',
                ],
            },
            {
                id: 'examples',
                title: 'Here are some examples of what Direct Assistance can do for you',
                list: [
                    'Answer any question on PC SOFT products, of course',
                    'Write a subroutine (code, component, Web service, etc.) based on specific requirements',
                    'Look for a bug in a given source code',
                    'Provide advice on a given code',
                    'Optimize processes',
                    'Provide advice on the network installation of an application',
                    'Provide details on an API',
                    'Install a Web server',
                ],
            },
        ],
        comparison: {
            title: 'Technical Support / Direct Assistance',
            legend: { da: 'Direct Assistance', ts: 'Technical Support' },
            rows: [
                { feature: 'Response to a specific isolated problem', da: true, ts: true },
                { feature: 'Response to a non-isolated problem', da: true, ts: false },
                { feature: 'History of messages exchanged', da: true, ts: true },
                { feature: 'Check hardware configuration', da: true, ts: false },
                { feature: 'Take control remotely', da: true, ts: false },
                { feature: 'Help for installing the Web server', da: true, ts: false },
                { feature: 'Check code containing less than 30 lines', da: true, ts: true },
                { feature: 'Check code containing more than 30 lines', da: true, ts: false },
                { feature: 'Search for bugs in a program', da: true, ts: false },
                { feature: 'Question about Windows API', da: true, ts: false },
                { feature: 'Follow up your development', da: true, ts: false },
                { feature: 'Analysis and program audit', da: true, ts: false },
                { feature: 'General advice for writing code', da: true, ts: true },
                { feature: 'Assistance for writing code', da: true, ts: false },
                { feature: 'Optimization of your code', da: true, ts: false },
                { feature: 'Same representative on each request', da: true, ts: false },
                { feature: 'Transfer files, DLLs, etc., with representative', da: true, ts: false },
                { feature: 'Response within 16 business hours', da: true, ts: false },
                { feature: 'Application storage (upon request)', da: true, ts: false },
            ],
        },
        closing:
            "Direct Assistance is a cost-efficient service. Soon you won't be able to do without it!",
        relatedLinks: [
            { label: 'Technical Support', to: '/support/technical-support' },
            { label: 'Remote consulting', to: '/support/remote-consulting' },
            { label: 'Resources', to: '/support/resources' },
        ],
    },
    'support.remote-consulting': {
        documentTitle: 'Remote Consulting',
        hero: {
            eyebrow: 'Our services',
            title: 'REMOTE CONSULTING',
            subtitle: 'Service available in English and French.',
        },
        heroImage: {
            ...supportImages.remoteConsulting,
            alt: 'PC SOFT engineer providing remote consulting via videoconference.',
        },
        sections: [
            {
                id: 'senior-engineer',
                title: 'With a senior PC SOFT engineer',
                paragraphs: [
                    "Take advantage of a PC SOFT engineer's experience without the constraints and the traveling costs!",
                    'One of our experienced engineers (at least 5 years of experience with WINDEV, WEBDEV and WINDEV Mobile), competent in your field, can assist you via video conferencing, for a duration of 1 to several days.',
                    'The PC SOFT engineer will directly answer your questions and work on your actual project and configuration. You will get specific answers and save precious time. A PC SOFT engineer helps you validate your technological choices and methodology.',
                ],
            },
            {
                id: 'videoconference',
                title: 'How does the videoconference work?',
                paragraphs: [
                    'Setup is very easy: You will only need a regular PC with a microphone and/or cam, and an Internet connection. In a videoconference, you can see and hear the PC SOFT engineer, but more importantly to share your screen, keyboard or mouse (we use GoToMeeting). Security is guaranteed. You do not need to modify your network configuration.',
                ],
            },
            {
                id: 'suggestion',
                title: 'Suggestion',
                paragraphs: [
                    'Order one day of consulting for every 100 days of development. Also consider having consulting sessions with a PC SOFT engineer for 1 or 2 days each year, to take advantage of their expertise on new features. Videoconferencing allows the engineer to work on your project alongside with you, to validate your data model, show you new features that can be implemented in your project, propose optimizations for your code, help you improve your implementation methods, and more. You will be surprised by the immense gains in terms of time and cost effectiveness these sessions will bring you. Plan your next consulting session now!',
                ],
            },
            {
                id: 'contact',
                title: 'Contact',
                paragraphs: [
                    'Feel free to contact PC SOFT for any service you need. Our Consulting department will work with you to find the best solution.',
                    'Consulting sessions can be planned for a duration of 1 to several days.',
                ],
            },
        ],
        pricing: {
            title: 'Pricing',
            items: [
                'Half day: €745 (Excl. Tax)',
                'Full day: €1,490 (Excl. Tax) / day',
                'Participants: 1 to 3 people',
            ],
            quoteLabel: 'To get a free quote, contact PC SOFT.',
        },
        relatedLinks: [
            { label: 'Technical Support', to: '/support/technical-support' },
            { label: 'Direct Assistance', to: '/support/direct-assistance' },
            { label: 'Resources', to: '/support/resources' },
        ],
    },
    'support.resources': {
        documentTitle: 'Resources',
        hero: {
            title: 'USEFUL RESOURCES',
            subtitle: 'Documentation, examples and community help for WINDEV, WEBDEV and WINDEV Mobile.',
        },
        heroImage: {
            ...supportImages.resources,
            alt: 'Useful resources for WINDEV, WEBDEV and WINDEV Mobile',
        },
        resourceGroups: [
            {
                title: 'Our services',
                links: [
                    {
                        title: 'Technical support',
                        description: 'Free support for isolated issues on the current version.',
                        to: '/support/technical-support',
                        image: supportImages.technicalSupport,
                    },
                    {
                        title: 'Direct assistance',
                        description: 'Dedicated contact and extended support packages.',
                        to: '/support/direct-assistance',
                        image: supportImages.directAssistance,
                    },
                    {
                        title: 'Remote consulting',
                        description: 'Senior engineer sessions via videoconference.',
                        to: '/support/remote-consulting',
                        image: supportImages.remoteConsulting,
                    },
                ],
            },
            {
                title: 'Community / Help',
                links: [
                    {
                        title: 'Online help',
                        description: 'Official documentation, tutorials, concepts and references.',
                        href: 'https://help.windev.com/en-US/',
                        image: supportImages.onlineHelp,
                    },
                    {
                        title: 'Forums',
                        description: 'Exchange with other developers and PC SOFT teams.',
                        href: 'https://forum.pcsoft.fr/en-US/index.awp',
                        image: supportImages.forums,
                    },
                    {
                        title: 'FAQ',
                        description: 'Answers to frequently asked technical questions.',
                        href: 'https://faq.windev.com/index.awp',
                        image: supportImages.faq,
                    },
                    {
                        title: 'Online repository',
                        description: 'Standard examples, components and shared resources.',
                        href: 'https://repository.windev.com/',
                        image: supportImages.onlineRepository,
                    },
                ],
            },
        ],
        resourceLinks: [
            {
                title: 'Online help',
                description: 'Official documentation, tutorials, concepts and references.',
                href: 'https://help.windev.com/en-US/',
                image: supportImages.onlineHelp,
            },
            {
                title: 'FAQ',
                description: 'Answers to frequently asked technical questions.',
                href: 'https://faq.windev.com/index.awp',
                image: supportImages.faq,
            },
            {
                title: 'Forums',
                description: 'Exchange with other developers and PC SOFT teams.',
                href: 'https://forum.pcsoft.fr/en-US/index.awp',
                image: supportImages.forums,
            },
            {
                title: 'Online repository',
                description: 'Standard examples, components and shared resources.',
                href: 'https://repository.windev.com/',
                image: supportImages.onlineRepository,
            },
            {
                title: 'Technical Support',
                description: 'Free support for isolated issues on the current version.',
                to: '/support/technical-support',
                image: supportImages.technicalSupport,
            },
            {
                title: 'Direct Assistance',
                description: 'Dedicated contact and extended support packages.',
                to: '/support/direct-assistance',
                image: supportImages.directAssistance,
            },
            {
                title: 'Remote consulting',
                description: 'Senior engineer sessions via videoconference.',
                to: '/support/remote-consulting',
                image: supportImages.remoteConsulting,
            },
        ],
        relatedLinks: [
            { label: 'Technical Support', to: '/support/technical-support' },
            { label: 'Direct Assistance', to: '/support/direct-assistance' },
            { label: 'Remote consulting', to: '/support/remote-consulting' },
        ],
    },
};

export function getSupportPage(routeName) {
    return supportPageCatalog[routeName] ?? null;
}
