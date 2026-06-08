import { createRouter, createWebHistory } from 'vue-router';
import { useAdminAuthStore } from '../stores/adminAuth.js';
import { canAccessAdminRoute } from '../data/adminModules';
import { normalizeAdminPageEditorRoute, routeNameFromAdminSlug } from '../utils/adminPageRoute';

const AdminLayout = () => import('../layouts/AdminLayout.vue');
const LoginPage = () => import('../views/admin/LoginPage.vue');
const DashboardPage = () => import('../views/admin/DashboardPage.vue');
const PagesListPage = () => import('../views/admin/PagesListPage.vue');
const PageEditorPage = () => import('../views/admin/PageEditorPage.vue');
const AudiencePage = () => import('../views/admin/AudiencePage.vue');
const PlaceholderPage = () => import('../views/admin/PlaceholderPage.vue');

const adminRoutes = {
    path: '/windevadmin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
        { path: '', name: 'admin.dashboard', component: DashboardPage, meta: { adminTitle: 'Tableau de bord' } },
        { path: 'pages', name: 'admin.pages', component: PagesListPage, meta: { adminTitle: 'Éditeur de page' } },
        {
            path: 'pages/:routeSlug',
            name: 'admin.page-editor',
            component: PageEditorPage,
            meta: { adminTitle: 'Éditeur de page' },
            beforeEnter: normalizeAdminPageEditorRoute,
            props: (route) => ({
                routeName: routeNameFromAdminSlug(route.params.routeSlug),
            }),
        },
        { path: 'audience', name: 'admin.audience', component: AudiencePage, meta: { adminTitle: 'Audience' } },
        { path: 'posts', name: 'admin.posts', component: PlaceholderPage, props: { title: 'Publications' }, meta: { adminTitle: 'Publications' } },
        { path: 'security', name: 'admin.security', component: PlaceholderPage, props: { title: 'Sécurité MFA' }, meta: { adminTitle: 'Sécurité MFA' } },
    ],
};

const routes = [
    { path: '/windevadmin/login', name: 'admin.login', component: LoginPage, meta: { guestOnly: true } },
    adminRoutes,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

function matchedMeta(to, key) {
    return to.matched.some((record) => record.meta[key]);
}

router.beforeEach(async (to) => {
    const auth = useAdminAuthStore();

    if (matchedMeta(to, 'requiresAuth') || matchedMeta(to, 'guestOnly')) {
        if (!auth.checked) {
            try {
                await auth.fetchMe();
            } catch {
                //
            }
        }
    }

    if (matchedMeta(to, 'requiresAuth') && !auth.isAuthenticated) {
        return {
            name: 'admin.login',
            query: { redirect: to.fullPath },
        };
    }

    if (matchedMeta(to, 'guestOnly') && auth.isAuthenticated) {
        return { name: 'admin.dashboard' };
    }

    if (matchedMeta(to, 'requiresAuth') && auth.user && !canAccessAdminRoute(to.name, auth.user.role)) {
        return { name: 'admin.dashboard' };
    }

    return true;
});

export default router;
