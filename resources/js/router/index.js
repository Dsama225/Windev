import { createRouter, createWebHistory } from 'vue-router';
import { trackPageView } from '../services/analytics';

const HomePage = () => import('../views/HomePage.vue');
const ProductsCatalogPage = () => import('../views/ProductsCatalogPage.vue');
const ProductDetailPage = () => import('../views/ProductDetailPage.vue');
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
const As400SystemIPage = () => import('../views/As400SystemIPage.vue');
const As400BrochurePage = () => import('../views/As400BrochurePage.vue');
const OracleConnectorPage = () => import('../views/OracleConnectorPage.vue');
const SqlServerConnectorPage = () => import('../views/SqlServerConnectorPage.vue');
const Db2ConnectorPage = () => import('../views/Db2ConnectorPage.vue');
const MysqlConnectorPage = () => import('../views/MysqlConnectorPage.vue');
const InformixConnectorPage = () => import('../views/InformixConnectorPage.vue');
const PostgresqlConnectorPage = () => import('../views/PostgresqlConnectorPage.vue');
const SapAseConnectorPage = () => import('../views/SapAseConnectorPage.vue');
const XbaseConnectorPage = () => import('../views/XbaseConnectorPage.vue');
const SqliteConnectorPage = () => import('../views/SqliteConnectorPage.vue');
const AccessConnectorPage = () => import('../views/AccessConnectorPage.vue');
const MariadbConnectorPage = () => import('../views/MariadbConnectorPage.vue');
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
    { path: '/boutique', name: 'boutique', component: ProductsCatalogPage },
    { path: '/boutique/:slug', name: 'boutique.product', component: ProductDetailPage },
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
    { path: '/software/native-connectors/oracle', name: 'software.native-connectors.oracle', component: OracleConnectorPage },
    { path: '/software/native-connectors/sql-server', name: 'software.native-connectors.sql-server', component: SqlServerConnectorPage },
    { path: '/software/native-connectors/mysql', name: 'software.native-connectors.mysql', component: MysqlConnectorPage },
    { path: '/software/native-connectors/mariadb', name: 'software.native-connectors.mariadb', component: MariadbConnectorPage },
    {
        path: '/software/native-connectors/postgresql',
        name: 'software.native-connectors.postgresql',
        component: PostgresqlConnectorPage,
    },
    { path: '/software/native-connectors/as400-system-i', name: 'software.native-connectors.as400-system-i', component: As400SystemIPage },
    { path: '/software/windev/as400', name: 'software.windev.as400', component: As400BrochurePage },
    { path: '/software/native-connectors/db2', name: 'software.native-connectors.db2', component: Db2ConnectorPage },
    { path: '/software/native-connectors/informix', name: 'software.native-connectors.informix', component: InformixConnectorPage },
    { path: '/software/native-connectors/sap-ase', name: 'software.native-connectors.sap-ase', component: SapAseConnectorPage },
    { path: '/software/native-connectors/xbase', name: 'software.native-connectors.xbase', component: XbaseConnectorPage },
    { path: '/software/native-connectors/sqlite', name: 'software.native-connectors.sqlite', component: SqliteConnectorPage },
    { path: '/software/native-connectors/access', name: 'software.native-connectors.access', component: AccessConnectorPage },
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
 * Meta CMS sur toutes les routes publiques (cmsRouteName).
 * Étape 4 : intégration via useCmsPageWithFallback + CMS_PUBLIC_ROUTES (liste blanche vide par défaut).
 * Étape 5+ : activer par groupe (home, software, connectors, download, pcsoft…) sans supprimer les vues existantes.
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
