import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import AdminApp from './AdminApp.vue';
import router from './router/admin';
import '../css/admin.css';

const appElement = document.getElementById('admin-app');

if (appElement) {
    const app = createApp(AdminApp);
    app.use(createPinia());
    app.use(router);
    app.mount(appElement);
}
