/**
 * Groupes de routes pour le déploiement progressif CMS (étape 5+).
 * Étape 4 : infrastructure uniquement — liste blanche vide par défaut (config/cms.php).
 */
export const CMS_ROLLOUT_GROUPS = {
    home: ['home'],
    workspace: ['workspace'],
    software: [
        'software.windev',
        'software.windevmobile',
        'software.webdev',
        'software.new-features-2026',
        'software.wdmsg',
        'software.hfsql',
        'software.wlanguage',
        'software.reports-queries',
        'software.clouds',
    ],
    connectors: [
        'software.native-connectors.oracle',
        'software.native-connectors.sql-server',
        'software.native-connectors.mysql',
        'software.native-connectors.mariadb',
        'software.native-connectors.postgresql',
        'software.native-connectors.as400-system-i',
        'software.windev.as400',
        'software.native-connectors.db2',
        'software.native-connectors.informix',
        'software.native-connectors.sap-ase',
        'software.native-connectors.xbase',
        'software.native-connectors.sqlite',
        'software.native-connectors.access',
    ],
    subscribe: ['software.subscribe'],
    download: [
        'download.windev-express',
        'download.windev-mobile-express',
        'download.redistributable-images',
    ],
    pcsoft: [
        'pcsoft.about',
        'pcsoft.contact',
        'pcsoft.distributors',
        'pcsoft.sitemap',
    ],
};

function readIntegratedRoutes() {
    const el = document.getElementById('app');
    const raw = el?.dataset?.cmsPublicRoutes;

    if (!raw) {
        return [];
    }

    try {
        const parsed = JSON.parse(raw);

        return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch {
        return [];
    }
}

export function integratedCmsRoutes() {
    return readIntegratedRoutes();
}

export function isCmsRouteIntegrated(routeName) {
    if (!routeName) {
        return false;
    }

    return integratedCmsRoutes().includes(routeName);
}

export function cmsRolloutGroupRoutes(groupKey) {
    return CMS_ROLLOUT_GROUPS[groupKey] ?? [];
}
