import './bootstrap';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { useConsentStore } from './stores/consent';
import { initAnalytics } from './services/analytics';

const appElement = document.getElementById('app');

if (appElement) {
    const app = createApp(App);
    const pinia = createPinia();
    app.use(pinia);
    app.use(router);
    initAnalytics(useConsentStore(pinia));
    app.mount(appElement);
}
