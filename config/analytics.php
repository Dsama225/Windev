<?php

return [
    'enabled' => filter_var(env('ANALYTICS_ENABLED', true), FILTER_VALIDATE_BOOL),
    'session_timeout_minutes' => (int) env('ANALYTICS_SESSION_TIMEOUT_MINUTES', 30),
    'rate_limit_per_minute' => (int) env('ANALYTICS_RATE_LIMIT_PER_MINUTE', 120),
    'ingest_secret' => env('ANALYTICS_INGEST_SECRET'),
    'retention_days' => (int) env('ANALYTICS_RETENTION_DAYS', 365),
    'live_window_minutes' => (int) env('ANALYTICS_LIVE_WINDOW_MINUTES', 5),
    'live_poll_seconds' => (int) env('ANALYTICS_LIVE_POLL_SECONDS', 30),
];
