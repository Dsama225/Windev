const ROUTE_ROLES = {
    'admin.audience': ['administrator', 'analyst', 'editor'],
    'admin.pages': ['administrator', 'analyst', 'editor'],
    'admin.page-editor': ['administrator', 'analyst', 'editor'],
    'admin.posts': ['administrator', 'analyst', 'editor'],
    'admin.security': ['administrator', 'analyst', 'editor'],
};

export const ADMIN_MODULES = [
    { routeName: 'admin.dashboard', label: 'Tableau de bord', path: '/windevadmin', icon: '📊' },
    { routeName: 'admin.pages', label: 'Éditeur de page', path: '/windevadmin/pages', icon: '📄' },
    { routeName: 'admin.posts', label: 'Publications', path: '/windevadmin/posts', icon: '📰' },
    { routeName: 'admin.audience', label: 'Audience', path: '/windevadmin/audience', icon: '📈' },
    { routeName: 'admin.security', label: 'Sécurité MFA', path: '/windevadmin/security', icon: '🔐' },
];

export function canAccessAdminRoute(routeName, role = 'administrator') {
    if (!routeName || routeName === 'admin.dashboard' || routeName === 'admin.login') {
        return true;
    }

    const allowed = ROUTE_ROLES[routeName];

    if (!allowed) {
        return true;
    }

    return allowed.includes(role);
}

export function modulesForRole(role = 'administrator') {
    return ADMIN_MODULES.filter((module) => canAccessAdminRoute(module.routeName, role));
}
