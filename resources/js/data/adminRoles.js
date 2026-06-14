const VALID_ADMIN_ROLES = ['administrator', 'editor', 'analyst'];

const ROLE_LABELS = {
    administrator: 'Administrateur',
    editor: 'Éditeur',
    analyst: 'Analyste',
};

export function isValidAdminRole(role) {
    return VALID_ADMIN_ROLES.includes(role);
}

export function roleLabel(role = 'administrator') {
    return ROLE_LABELS[role] ?? 'Rôle inconnu';
}

export function canManagePages(role = 'administrator') {
    return role === 'administrator' || role === 'editor';
}

export function canExportAnalytics(role = 'administrator') {
    return role === 'administrator' || role === 'analyst';
}

export function canManageAnalyticsSettings(role = 'administrator') {
    return role === 'administrator';
}
