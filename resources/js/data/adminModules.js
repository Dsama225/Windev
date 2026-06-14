import { adminRoute } from '../utils/adminPath';

const ROUTE_ROLES = {
    'admin.audience': ['administrator', 'analyst', 'editor'],
    'admin.pages': ['administrator', 'editor'],
    'admin.page-editor': ['administrator', 'editor'],
    'admin.products': ['administrator', 'editor'],
    'admin.product-editor': ['administrator', 'editor'],
    'admin.product-editor-existing': ['administrator', 'editor'],
    'admin.product-categories': ['administrator', 'editor'],
    'admin.orders': ['administrator', 'editor'],
    'admin.posts': ['administrator', 'editor'],
    'admin.security': ['administrator'],
};

export function getAdminModules() {
    return [
        { routeName: 'admin.dashboard', label: 'Tableau de bord', path: adminRoute(), icon: '📊' },
        { routeName: 'admin.pages', label: 'Éditeur de page', path: adminRoute('pages'), icon: '📄' },
        { routeName: 'admin.products', label: 'Produits', path: adminRoute('products'), icon: '🛒' },
        { routeName: 'admin.orders', label: 'Commandes', path: adminRoute('orders'), icon: '📦', badgeKey: 'orders' },
        { routeName: 'admin.posts', label: 'Publications', path: adminRoute('posts'), icon: '📰' },
        { routeName: 'admin.audience', label: 'Audience', path: adminRoute('audience'), icon: '📈' },
        { routeName: 'admin.security', label: 'Sécurité MFA', path: adminRoute('security'), icon: '🔐' },
    ];
}

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
    return getAdminModules().filter((module) => canAccessAdminRoute(module.routeName, role));
}
