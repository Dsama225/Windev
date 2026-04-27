import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import WorkspacePage from '../views/WorkspacePage.vue';

const routes = [
    { path: '/', name: 'home', component: HomePage },
    { path: '/workspace', name: 'workspace', component: WorkspacePage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' };
    },
});

export default router;
