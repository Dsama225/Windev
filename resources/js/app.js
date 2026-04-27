import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const appElement = document.getElementById('app');

if (appElement) {
    const app = createApp(App);
    app.use(createPinia());
    app.use(router);
    app.mount(appElement);
}
