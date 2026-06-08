import { createRouter, createWebHistory } from 'vue-router';
import { trackPageView } from '../services/analytics';

const HomePage = () => import('../views/HomePage.vue');
const WorkspacePage = () => import('../views/WorkspacePage.vue');
const WindevPage = () => import('../views/WindevPage.vue');
const WindevMobilePage = () => import('../views/WindevMobilePage.vue');
const WebdevPage = () => import('../views/WebdevPage.vue');
const NewFeatures2026Page = () => import('../views/NewFeatures2026Page.vue');
const WdmsgPage = () => import('../views/WdmsgPage.vue');
const HfsqlPage = () => import('../views/HfsqlPage.vue');
const WlanguagePage = () => import('../views/WlanguagePage.vue');
const ReportsQueriesPage = () => import('../views/ReportsQueriesPage.vue');
const CloudsPage = () => import('../views/CloudsPage.vue');
const ConnectorPage = () => import('../components/layout/ConnectorPageLayout.vue');
const SubscribePage = () => import('../views/SubscribePage.vue');
const WindevExpressPage = () => import('../views/WindevExpressPage.vue');
const WindevMobileExpressPage = () => import('../views/WindevMobileExpressPage.vue');
const RedistributableImagesPage = () => import('../views/RedistributableImagesPage.vue');
const AboutPcsoftPage = () => import('../views/pcsoft/AboutPcsoftPage.vue');
const ContactPcsoftPage = () => import('../views/pcsoft/ContactPcsoftPage.vue');
const DistributorsPcsoftPage = () => import('../views/pcsoft/DistributorsPcsoftPage.vue');
const SitemapPage = () => import('../views/pcsoft/SitemapPage.vue');

const pcsoftRoutes = [
    { path: '/pc-soft', name: 'pcsoft.about', component: AboutPcsoftPage },
    { path: '/pc-soft/contact', name: 'pcsoft.contact', component: ContactPcsoftPage },
    { path: '/pc-soft/distributors', name: 'pcsoft.distributors', component: DistributorsPcsoftPage },
    { path: '/pc-soft/sitemap', name: 'pcsoft.sitemap', component: SitemapPage },
    { path: '/contact', redirect: '/pc-soft/contact' },
];

const publicRoutes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/workspace', name: 'workspace', component: WorkspacePage },
    { path: '/software/windev', name: 'software.windev', component: WindevPage, meta: { cmsLayoutMode: 'shell' } },
    { path: '/software/windevmobile', name: 'software.windevmobile', component: WindevMobilePage },
    { path: '/software/webdev', name: 'software.webdev', component: WebdevPage, meta: { cmsLayoutMode: 'shell' } },
    { path: '/software/new-features-2026', name: 'software.new-features-2026', component: NewFeatures2026Page },
    { path: '/software/wdmsg', name: 'software.wdmsg', component: WdmsgPage },
    { path: '/software/hfsql', name: 'software.hfsql', component: HfsqlPage },
    { path: '/software/wlanguage', name: 'software.wlanguage', component: WlanguagePage },
    { path: '/software/reports-queries', name: 'software.reports-queries', component: ReportsQueriesPage },
    { path: '/software/clouds', name: 'software.clouds', component: CloudsPage },
    { path: '/software/native-connectors/oracle', name: 'software.native-connectors.oracle', component: ConnectorPage },
    { path: '/software/native-connectors/sql-server', name: 'software.native-connectors.sql-server', component: ConnectorPage },
    { path: '/software/native-connectors/mysql', name: 'software.native-connectors.mysql', component: ConnectorPage },
    { path: '/software/native-connectors/mariadb', name: 'software.native-connectors.mariadb', component: ConnectorPage },
    {
        path: '/software/native-connectors/postgresql',
        name: 'software.native-connectors.postgresql',
        component: ConnectorPage,
    },
    { path: '/software/native-connectors/as400-system-i', name: 'software.native-connectors.as400-system-i', component: ConnectorPage },
    { path: '/software/native-connectors/db2', name: 'software.native-connectors.db2', component: ConnectorPage },
    { path: '/software/native-connectors/informix', name: 'software.native-connectors.informix', component: ConnectorPage },
    { path: '/software/native-connectors/sap-ase', name: 'software.native-connectors.sap-ase', component: ConnectorPage },
    { path: '/software/native-connectors/xbase', name: 'software.native-connectors.xbase', component: ConnectorPage },
    { path: '/software/native-connectors/sqlite', name: 'software.native-connectors.sqlite', component: ConnectorPage },
    { path: '/software/native-connectors/access', name: 'software.native-connectors.access', component: ConnectorPage },
    { path: '/software/subscribe', name: 'software.subscribe', component: SubscribePage },
    { path: '/download/windev-express', name: 'download.windev-express', component: WindevExpressPage },
    {
        path: '/download/windev-mobile-express',
        name: 'download.windev-mobile-express',
        component: WindevMobileExpressPage,
    },
    {
        path: '/download/redistributable-images',
        name: 'download.redistributable-images',
        component: RedistributableImagesPage,
    },
    ...pcsoftRoutes,
];

/**
 * Etape 1 (non disruptive): toutes les routes publiques portent des meta CMS communes.
 * Le rendu client reste inchangé tant que cmsLayoutMode = "legacy".
 */
const publicRoutesWithCmsMeta = publicRoutes.map((route) => ({
    ...route,
    meta: {
        ...(route.meta ?? {}),
        cmsRouteName: route.name ?? null,
        cmsLayoutMode: route.meta?.cmsLayoutMode ?? 'legacy',
    },
}));

const removedModuleRedirects = [
    { path: '/support/:pathMatch(.*)*', redirect: '/' },
    { path: '/training/:pathMatch(.*)*', redirect: '/' },
];

const routes = [
    ...publicRoutesWithCmsMeta,
    ...removedModuleRedirects,
    { path: '/:pathMatch(.*)*', name: 'not-found', redirect: '/' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(_to, from) {
        if (!from?.name) {
            return { top: 0 };
        }

        return { top: 0, behavior: 'smooth' };
    },
});

router.afterEach((to) => {
    trackPageView(to);
});

export default router;
