/** Training page content aligned with windev.com training section. */

export const trainingPageCatalog = {
    'training.in-house': {
        documentTitle: 'In-house training',
        hero: {
            eyebrow: 'Train your developers',
            title: 'IN-HOUSE TRAINING SESSIONS',
            subtitle: '(on site or via videoconferencing)',
        },
        lead: 'Our trainers are experienced PC SOFT engineers: quality guaranteed!',
        sections: [
            {
                id: 'overview',
                title: '',
                paragraphs: [
                    'PC SOFT organizes specific training sessions for your company upon request (in-house training session). This session can be held on your premises (worldwide), at our training center on Parc les Erables – Bâtiment 4 – 66 route de Sartrouville 78230 Le Pecq in Paris Île-de-France, or by videoconference. (For videoconferences, we can adjust the schedules of these training sessions to adapt to time differences).',
                    'These training sessions allow you to discover and master WINDEV, WEBDEV and WINDEV Mobile. You can also follow thematic training courses (SCM, HFSQL C/S, Threads and Parallel tasks, Reporting, Object-Oriented Programming, Webservices). Training is provided by PC SOFT engineers who know the product inside out.',
                    'The content of the training session can be fully customized to suit your own requirements.',
                ],
            },
        ],
        seminarTracks: [
            {
                id: 'windev',
                title: 'WINDEV seminars',
                seminars: [
                    { name: 'Fundamentals 1', level: 'Level 1', duration: '2 days' },
                    { name: 'Fundamentals 2', level: 'Level 2', duration: '3 days' },
                    { name: 'Advanced Level 3', level: 'Level 3', duration: '2 days' },
                    { name: 'Advanced Level 4', level: 'Level 4', duration: '3 days' },
                    { name: 'New features', level: 'Level 2', duration: '2 days' },
                ],
                packages: [
                    'WINDEV Fundamentals 1 + 2 — 5 days',
                    'WINDEV Fundamentals 2 + Advanced Level 3 — 5 days',
                    'WINDEV Advanced Level 3 + 4 — 5 days',
                    'WINDEV Full Course (Fundamentals 1 + 2 and Advanced Level 3 + 4) — 10 days',
                ],
            },
            {
                id: 'webdev',
                title: 'WEBDEV seminars',
                seminars: [
                    { name: 'Fundamentals 1', level: 'Level 1', duration: '2 days' },
                    { name: 'Fundamentals 2', level: 'Level 2', duration: '3 days' },
                    { name: 'Advanced Level 3', level: 'Level 3', duration: '2 days' },
                    { name: 'Advanced Level 4', level: 'Level 4', duration: '3 days' },
                    { name: 'for WINDEV developers', level: 'Level 2', duration: '3 days' },
                    { name: 'New features', level: 'Level 2', duration: '2 days' },
                ],
                packages: [
                    'WEBDEV Fundamentals 1 + 2 — 5 days',
                    'WEBDEV Advanced Level 3 + 4 — 5 days',
                    'WEBDEV Developer Course (For WINDEV developers + WEBDEV Advanced Level 3) — 5 days',
                    'WEBDEV Full Course (Fundamentals 1 + 2 and Advanced Level 3 + 4) — 10 days',
                ],
            },
            {
                id: 'windev-mobile',
                title: 'WINDEV Mobile seminars',
                seminars: [{ name: 'WINDEV Mobile', level: 'Level 2', duration: '3 days' }],
                packages: [],
            },
            {
                id: 'thematic',
                title: 'Thematic seminars',
                seminars: [
                    { name: 'HFSQL C/S', level: 'Level 2', duration: '2 days' },
                    { name: 'Threads and Parallel tasks', level: 'Level 2', duration: '2 days' },
                    { name: 'Object-Oriented Programming', level: 'Level 2', duration: '2 days' },
                    { name: 'Webservices', level: 'Level 2', duration: '2 days' },
                    { name: 'Reporting', level: 'Level 2', duration: '2 days' },
                    { name: 'SCM', level: 'Level 2', duration: '2 days' },
                ],
                packages: [],
            },
        ],
        levels: [
            {
                title: 'Level 1: Introduction',
                description:
                    "Training session intended for new users that provides an overview of the product's features: basic concepts, main editors, WLanguage programming.",
            },
            {
                title: 'Level 2: Intermediate',
                description:
                    'Training session intended for users who already know the product or who have previously completed a level 1 training course: additional knowledge on the editors, programming.',
            },
            {
                title: 'Level 3: Advanced',
                description:
                    'Training session intended for users who already have a good knowledge of the product or who have previously completed a level 2 training course: use the advanced features of the product.',
            },
            {
                title: 'Level 4: Master',
                description:
                    'Training intended for users who already have a very good knowledge of the product or who have previously completed a level 3 training course: master the advanced processes of the product.',
            },
        ],
        customization:
            'We can define the content perfectly suited to your own requirements. The duration can vary between 1 and 5 days and up to 8 participants can attend these training sessions, dates and location according to your needs.',
        contact: {
            title: 'Training department',
            lines: [
                'TRAINING DEPARTMENT — PC SOFT',
                '3 rue de Puech Villa — BP 44408',
                '34197 Montpellier Cedex 05 — FRANCE',
                '+33 (0)4 67 03 20 32',
                'training@windev.com',
            ],
        },
        relatedLinks: [
            { label: 'Remote consulting', to: '/support/remote-consulting' },
            { label: 'Education', to: '/training/education' },
            { label: 'WINDEV Express (free)', to: '/download/windev-express' },
        ],
    },
    'training.education': {
        documentTitle: 'Education',
        hero: {
            eyebrow: 'Education',
            title: 'EDUCATION',
        },
        lead:
            'You represent an educational institution (e.g., University, Institute)? You want your students to work with the IT tools used in the professional world?',
        sections: [
            {
                id: 'educational-version',
                title: 'Educational WINDEV Version',
                paragraphs: [
                    'We would like to introduce our Educational WINDEV Version intended and reserved for educational institutions, at a very special price.',
                    'The Educational WINDEV Version is reserved for educational institutions. These licenses are meant to be used for educational purposes ONLY. They may not be used to develop commercial software.',
                    'A specific license agreement must be accepted and signed by the educational institution representative before delivery.',
                ],
            },
            {
                id: 'academy',
                title: 'WINDEV Academy',
                paragraphs: [
                    'PC SOFT also offers free education licenses for students and schools through the WINDEV Academy program, with license management from a dedicated dashboard.',
                ],
                links: [
                    {
                        label: 'WINDEV Academy (PC SOFT France)',
                        href: 'https://pcsoft.fr/formation/windev-academy.html?education=2',
                    },
                ],
            },
            {
                id: 'contact',
                title: 'Contact',
                paragraphs: ['Feel free to contact us for any further information:'],
                links: [{ label: 'info@windev.com', href: 'mailto:info@windev.com' }],
            },
        ],
        relatedLinks: [
            { label: 'In-house training', to: '/training/in-house' },
            { label: 'Remote consulting', to: '/support/remote-consulting' },
            { label: 'WINDEV Express (free)', to: '/download/windev-express' },
        ],
    },
};

export function getTrainingPage(routeName) {
    return trainingPageCatalog[routeName] ?? null;
}
