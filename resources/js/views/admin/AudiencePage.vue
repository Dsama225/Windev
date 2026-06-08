<template>
    <div class="admin-page admin-audience">
        <AdminToolbar aria-label="Filtres audience">
            <label class="admin-field admin-field--inline">
                <span>Du</span>
                <input v-model="from" type="date" @change="reload" />
            </label>
            <label class="admin-field admin-field--inline">
                <span>Au</span>
                <input v-model="to" type="date" @change="reload" />
            </label>
            <label class="admin-field admin-field--inline">
                <span>Section</span>
                <select v-model="section" @change="reload">
                    <option value="">Toutes</option>
                    <option v-for="item in sections" :key="item.value" :value="item.value">{{ item.label }}</option>
                </select>
            </label>
            <template #actions>
                <button type="button" class="admin-btn admin-btn--secondary" @click="exportCsv">Export CSV</button>
                <button type="button" class="admin-btn admin-btn--ghost" @click="showSettings = !showSettings">Paramètres</button>
            </template>
        </AdminToolbar>

        <AdminPanel v-if="showSettings" title="Paramètres analytics">
            <form class="admin-form" @submit.prevent="saveSettings">
                <label class="admin-field admin-field--inline">
                    <span>Timeout session (min)</span>
                    <input v-model.number="settingsForm.session_timeout_minutes" type="number" min="5" max="240" />
                </label>
                <label class="admin-field admin-field--inline">
                    <span>Rétention (jours)</span>
                    <input v-model.number="settingsForm.retention_days" type="number" min="30" max="730" />
                </label>
                <button type="submit" class="admin-btn admin-btn--primary" :disabled="savingSettings">Enregistrer</button>
            </form>
            <p v-if="settingsMessage" class="admin-success">{{ settingsMessage }}</p>
        </AdminPanel>

        <AdminPanel v-if="live" title="Temps réel">
            <template #extra>
                <span class="admin-live-badge">Live · {{ live.window_minutes }} min</span>
            </template>
            <div class="admin-grid admin-grid--4">
                <AdminKpiCard label="Visiteurs actifs" :value="live.active_visitors" compact />
                <AdminKpiCard label="Sessions actives" :value="live.active_sessions" compact />
                <AdminKpiCard label="Pages vues récentes" :value="live.recent_pageviews" compact />
                <AdminKpiCard label="Dernière mise à jour" :value="formatLiveTime(live.as_of)" compact />
            </div>
            <table v-if="live.recent_pages?.length" class="admin-table admin-table--compact">
                <thead>
                    <tr>
                        <th>Page active</th>
                        <th>Pages vues</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="page in live.recent_pages" :key="page.path">
                        <td>{{ page.path }}</td>
                        <td>{{ page.pageviews }}</td>
                    </tr>
                </tbody>
            </table>
        </AdminPanel>

        <p v-if="loading" class="admin-muted">Chargement des statistiques…</p>
        <p v-else-if="error" class="admin-error" role="alert">{{ error }}</p>

        <div v-else class="admin-grid admin-grid--4">
            <AdminKpiCard
                v-for="card in kpiCards"
                :key="card.key"
                :label="card.label"
                :value="card.value"
                :change-percent="card.change"
            />
        </div>

        <AdminPanel v-if="timeseries?.data?.length" title="Évolution">
            <template #extra>
                <select v-model="chartMetric" class="admin-field" @change="reloadChart">
                    <option value="pageviews">Pages vues</option>
                    <option value="unique_visitors">Visiteurs uniques</option>
                    <option value="sessions">Sessions</option>
                </select>
            </template>
            <div class="admin-chart" role="img" :aria-label="`Graphique ${chartMetric}`">
                <div v-for="point in timeseries.data" :key="point.date" class="admin-chart__bar-wrap">
                    <div class="admin-chart__bar" :style="{ height: `${barHeight(point.value)}%` }" :title="`${point.date}: ${point.value}`" />
                    <span class="admin-chart__label">{{ formatChartDate(point.date) }}</span>
                </div>
            </div>
        </AdminPanel>

        <AdminPanel v-if="topPages.length" title="Top pages">
            <table class="admin-table">
                <thead>
                    <tr>
                        <th>Chemin</th>
                        <th>Route</th>
                        <th>Pages vues</th>
                        <th>Visiteurs uniques</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="page in topPages" :key="page.path">
                        <td>{{ page.path }}</td>
                        <td><code>{{ page.route_name }}</code></td>
                        <td>{{ page.pageviews }}</td>
                        <td>{{ page.unique_visitors }}</td>
                    </tr>
                </tbody>
            </table>
        </AdminPanel>
    </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import AdminKpiCard from '../../components/admin/AdminKpiCard.vue';
import AdminPanel from '../../components/admin/AdminPanel.vue';
import AdminToolbar from '../../components/admin/AdminToolbar.vue';
import { adminAnalyticsService } from '../../services/adminAnalyticsService';

const loading = ref(true);
const error = ref('');
const summary = ref(null);
const topPages = ref([]);
const live = ref(null);
const timeseries = ref(null);
const chartMetric = ref('pageviews');
const showSettings = ref(false);
const settingsForm = ref({ session_timeout_minutes: 30, retention_days: 365 });
const settingsMessage = ref('');
const savingSettings = ref(false);
const from = ref('');
const to = ref('');
const section = ref('');
let liveTimer = null;

const sections = [
    { value: 'home', label: 'Accueil' },
    { value: 'workspace', label: 'Workspace' },
    { value: 'software-suite', label: 'Software suite' },
    { value: 'native-connectors', label: 'Connecteurs natifs' },
    { value: 'subscribe', label: 'Subscribe' },
    { value: 'download', label: 'Download' },
    { value: 'pcsoft', label: 'PC SOFT' },
];

const kpiCards = computed(() => {
    if (!summary.value) {
        return [];
    }

    return [
        { key: 'unique_visitors', label: 'Visiteurs uniques', value: summary.value.unique_visitors.value, change: summary.value.unique_visitors.change_percent },
        { key: 'sessions', label: 'Sessions', value: summary.value.sessions.value, change: summary.value.sessions.change_percent },
        { key: 'pageviews', label: 'Pages vues', value: summary.value.pageviews.value, change: summary.value.pageviews.change_percent },
        { key: 'bounce_rate', label: 'Taux de rebond', value: `${Math.round(summary.value.bounce_rate.value * 100)} %`, change: summary.value.bounce_rate.change_percent },
    ];
});

const chartMax = computed(() => {
    if (!timeseries.value?.data?.length) {
        return 1;
    }

    return Math.max(...timeseries.value.data.map((point) => point.value), 1);
});

function defaultDates() {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 6);
    to.value = end.toISOString().slice(0, 10);
    from.value = start.toISOString().slice(0, 10);
}

function formatLiveTime(value) {
    if (!value) {
        return '—';
    }

    return new Date(value).toLocaleTimeString('fr-FR');
}

function formatChartDate(value) {
    const text = String(value);

    return text.length >= 10 ? text.slice(5, 10) : text;
}

function barHeight(value) {
    return Math.max(4, Math.round((value / chartMax.value) * 100));
}

async function reloadChart() {
    try {
        const params = { from: from.value, to: to.value, metric: chartMetric.value, granularity: 'day' };

        if (section.value) {
            params.section = section.value;
        }

        timeseries.value = await adminAnalyticsService.timeseries(params);
    } catch {
        timeseries.value = null;
    }
}

async function loadSettings() {
    try {
        const data = await adminAnalyticsService.settings();
        settingsForm.value = {
            session_timeout_minutes: data.session_timeout_minutes,
            retention_days: data.retention_days,
        };
    } catch {
        //
    }
}

async function saveSettings() {
    savingSettings.value = true;
    settingsMessage.value = '';

    try {
        await adminAnalyticsService.updateSettings(settingsForm.value);
        settingsMessage.value = 'Paramètres enregistrés.';
    } catch {
        settingsMessage.value = 'Impossible de mettre à jour les paramètres.';
    } finally {
        savingSettings.value = false;
    }
}

async function reloadLive() {
    try {
        const params = {};

        if (section.value) {
            params.section = section.value;
        }

        live.value = await adminAnalyticsService.live(params);
    } catch {
        live.value = null;
    }
}

async function reload() {
    loading.value = true;
    error.value = '';

    try {
        const params = { from: from.value, to: to.value };

        if (section.value) {
            params.section = section.value;
        }

        [summary.value, topPages.value] = await Promise.all([
            adminAnalyticsService.summary(params),
            adminAnalyticsService.topPages({ ...params, limit: 10 }),
        ]);

        await Promise.all([reloadLive(), reloadChart()]);
    } catch {
        error.value = 'Impossible de charger les statistiques.';
    } finally {
        loading.value = false;
    }
}

async function exportCsv() {
    const params = { from: from.value, to: to.value };

    if (section.value) {
        params.section = section.value;
    }

    const response = await adminAnalyticsService.exportCsv(params);
    const url = URL.createObjectURL(response.data);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'analytics-export.csv';
    link.click();
    URL.revokeObjectURL(url);
}

function startLivePolling() {
    stopLivePolling();
    liveTimer = window.setInterval(reloadLive, 30000);
}

function stopLivePolling() {
    if (liveTimer) {
        clearInterval(liveTimer);
        liveTimer = null;
    }
}

watch(section, reloadLive);

onMounted(async () => {
    defaultDates();
    await loadSettings();
    await reload();
    startLivePolling();
});

onUnmounted(stopLivePolling);
</script>

<style scoped>
.admin-table--compact {
    margin-top: 0.85rem;
}

.admin-chart {
    display: flex;
    align-items: flex-end;
    gap: 0.35rem;
    min-height: 160px;
    padding-top: 0.5rem;
}

.admin-chart__bar-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    min-width: 0;
}

.admin-chart__bar {
    width: 100%;
    max-width: 36px;
    background: linear-gradient(180deg, #0058d9, #003e9a);
    border-radius: 0.25rem 0.25rem 0 0;
    min-height: 4px;
}

.admin-chart__label {
    font-size: 0.65rem;
    color: #42526f;
}
</style>
