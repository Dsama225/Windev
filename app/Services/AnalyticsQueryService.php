<?php

namespace App\Services;

use App\Models\AnalyticsEvent;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class AnalyticsQueryService
{
    public function summary(Carbon $from, Carbon $to, ?string $section = null, ?string $path = null): array
    {
        $days = max(1, $from->diffInDays($to) + 1);
        $previousFrom = $from->copy()->subDays($days);
        $previousTo = $from->copy()->subDay();

        $current = $this->periodMetrics($from, $to, $section, $path);
        $previous = $this->periodMetrics($previousFrom, $previousTo, $section, $path);

        return [
            'period' => ['from' => $from->toDateString(), 'to' => $to->toDateString()],
            'unique_visitors' => $this->metricWithChange($current['unique_visitors'], $previous['unique_visitors']),
            'sessions' => $this->metricWithChange($current['sessions'], $previous['sessions']),
            'pageviews' => $this->metricWithChange($current['pageviews'], $previous['pageviews']),
            'avg_pages_per_session' => $this->metricWithChange($current['avg_pages_per_session'], $previous['avg_pages_per_session']),
            'avg_session_duration_seconds' => $this->metricWithChange($current['avg_session_duration_seconds'], $previous['avg_session_duration_seconds']),
            'bounce_rate' => $this->metricWithChange($current['bounce_rate'], $previous['bounce_rate']),
            'last_updated_at' => now()->toIso8601String(),
        ];
    }

    public function timeseries(Carbon $from, Carbon $to, string $metric, string $granularity = 'day', ?string $section = null, ?string $path = null): array
    {
        $driver = DB::connection()->getDriverName();
        $dateExpr = match ($granularity) {
            'hour' => $driver === 'sqlite' ? "strftime('%Y-%m-%d %H:00:00', occurred_at)" : "date_trunc('hour', occurred_at)",
            'week' => $driver === 'sqlite' ? "strftime('%Y-W%W', occurred_at)" : "date_trunc('week', occurred_at)",
            'month' => $driver === 'sqlite' ? "strftime('%Y-%m', occurred_at)" : "date_trunc('month', occurred_at)",
            default => $driver === 'sqlite' ? 'date(occurred_at)' : "date_trunc('day', occurred_at)",
        };

        $query = $this->baseQuery($from, $to, $section, $path);

        if ($metric === 'pageviews') {
            $rows = $query->where('type', 'page_view')
                ->selectRaw("{$dateExpr} as bucket, count(*) as value")
                ->groupBy('bucket')
                ->orderBy('bucket')
                ->get();
        } elseif ($metric === 'unique_visitors') {
            $rows = $query->where('type', 'page_view')
                ->selectRaw("{$dateExpr} as bucket, count(distinct visitor_id) as value")
                ->groupBy('bucket')
                ->orderBy('bucket')
                ->get();
        } else {
            $rows = $query->where('type', 'session_start')
                ->selectRaw("{$dateExpr} as bucket, count(distinct session_id) as value")
                ->groupBy('bucket')
                ->orderBy('bucket')
                ->get();
        }

        return [
            'metric' => $metric,
            'granularity' => $granularity,
            'data' => $rows->map(fn ($row) => ['date' => (string) $row->bucket, 'value' => (int) $row->value])->values()->all(),
        ];
    }

    public function topPages(Carbon $from, Carbon $to, int $limit = 10, ?string $section = null): array
    {
        return $this->baseQuery($from, $to, $section)
            ->where('type', 'page_view')
            ->whereNotNull('path')
            ->selectRaw('path, route_name, count(*) as pageviews, count(distinct visitor_id) as unique_visitors')
            ->groupBy('path', 'route_name')
            ->orderByDesc('pageviews')
            ->limit($limit)
            ->get()
            ->map(fn ($row) => [
                'path' => $row->path,
                'route_name' => $row->route_name,
                'pageviews' => (int) $row->pageviews,
                'unique_visitors' => (int) $row->unique_visitors,
            ])
            ->all();
    }

    public function live(?string $section = null, ?int $windowMinutes = null): array
    {
        $windowMinutes = $windowMinutes ?? (int) config('analytics.live_window_minutes', 5);
        $since = now()->subMinutes($windowMinutes);

        $base = AnalyticsEvent::query()
            ->where('occurred_at', '>=', $since);

        if ($section !== null) {
            $base->where('section', $section);
        }

        $activeVisitors = (clone $base)->where('type', 'page_view')->distinct('visitor_id')->count('visitor_id');
        $activeSessions = (clone $base)->distinct('session_id')->count('session_id');
        $recentPageviews = (clone $base)->where('type', 'page_view')->count();

        $recentPages = (clone $base)
            ->where('type', 'page_view')
            ->whereNotNull('path')
            ->selectRaw('path, count(*) as pageviews')
            ->groupBy('path')
            ->orderByDesc('pageviews')
            ->limit(5)
            ->get()
            ->map(fn ($row) => ['path' => $row->path, 'pageviews' => (int) $row->pageviews])
            ->all();

        return [
            'window_minutes' => $windowMinutes,
            'as_of' => now()->toIso8601String(),
            'active_visitors' => $activeVisitors,
            'active_sessions' => $activeSessions,
            'recent_pageviews' => $recentPageviews,
            'recent_pages' => $recentPages,
        ];
    }

    public function exportCsv(Carbon $from, Carbon $to, ?string $section = null, ?string $path = null): string
    {
        $pages = $this->topPages($from, $to, 1000, $section);
        $lines = ['path,route_name,pageviews,unique_visitors'];

        foreach ($pages as $page) {
            if ($path !== null && $page['path'] !== $path) {
                continue;
            }
            $lines[] = sprintf(
                '%s,%s,%d,%d',
                $this->escapeCsv($page['path']),
                $this->escapeCsv($page['route_name'] ?? ''),
                $page['pageviews'],
                $page['unique_visitors'],
            );
        }

        return implode("\n", $lines);
    }

    public function settings(): array
    {
        $overrides = Cache::get('analytics.settings.overrides', []);

        return [
            'enabled' => (bool) ($overrides['enabled'] ?? config('analytics.enabled')),
            'session_timeout_minutes' => (int) ($overrides['session_timeout_minutes'] ?? config('analytics.session_timeout_minutes')),
            'retention_days' => (int) ($overrides['retention_days'] ?? config('analytics.retention_days')),
        ];
    }

    public function updateSettings(array $validated): array
    {
        $overrides = Cache::get('analytics.settings.overrides', []);

        foreach (['session_timeout_minutes', 'retention_days'] as $key) {
            if (array_key_exists($key, $validated)) {
                $overrides[$key] = $validated[$key];
            }
        }

        Cache::forever('analytics.settings.overrides', $overrides);

        return $this->settings();
    }

    private function periodMetrics(Carbon $from, Carbon $to, ?string $section = null, ?string $path = null): array
    {
        $base = $this->baseQuery($from, $to, $section, $path);

        $pageviews = (clone $base)->where('type', 'page_view')->count();
        $uniqueVisitors = (clone $base)->where('type', 'page_view')->distinct('visitor_id')->count('visitor_id');
        $sessions = (clone $base)->where('type', 'session_start')->distinct('session_id')->count('session_id');

        if ($sessions === 0) {
            $sessions = (clone $base)->where('type', 'page_view')->distinct('session_id')->count('session_id');
        }

        $sessionEnds = (clone $base)->where('type', 'session_end')->get(['duration_seconds', 'page_count']);
        $avgDuration = $sessionEnds->avg('duration_seconds') ?? 0;
        $avgPages = $sessionEnds->avg('page_count') ?? ($sessions > 0 ? $pageviews / $sessions : 0);
        $bounces = $sessionEnds->where('page_count', '<=', 1)->count();
        $bounceRate = $sessionEnds->count() > 0 ? $bounces / $sessionEnds->count() : 0;

        return [
            'unique_visitors' => $uniqueVisitors,
            'sessions' => $sessions,
            'pageviews' => $pageviews,
            'avg_pages_per_session' => round($avgPages, 2),
            'avg_session_duration_seconds' => (int) round($avgDuration),
            'bounce_rate' => round($bounceRate, 4),
        ];
    }

    private function baseQuery(Carbon $from, Carbon $to, ?string $section = null, ?string $path = null)
    {
        $query = AnalyticsEvent::query()
            ->whereBetween('occurred_at', [$from->copy()->startOfDay(), $to->copy()->endOfDay()]);

        if ($section !== null) {
            $query->where('section', $section);
        }

        if ($path !== null) {
            $query->where('path', $path);
        }

        return $query;
    }

    /**
     * @return array{value: float|int, change_percent: float}
     */
    private function metricWithChange(float|int $current, float|int $previous): array
    {
        $change = $previous == 0 ? ($current > 0 ? 100.0 : 0.0) : round((($current - $previous) / $previous) * 100, 1);

        return ['value' => $current, 'change_percent' => $change];
    }

    private function escapeCsv(string $value): string
    {
        if (str_contains($value, ',') || str_contains($value, '"')) {
            return '"'.str_replace('"', '""', $value).'"';
        }

        return $value;
    }
}
