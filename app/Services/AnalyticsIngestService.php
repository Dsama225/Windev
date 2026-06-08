<?php

namespace App\Services;

use App\Models\AnalyticsEvent;
use Carbon\Carbon;

class AnalyticsIngestService
{
    public function ingest(string $visitorId, string $sessionId, array $events): int
    {
        $rows = [];

        foreach ($events as $event) {
            $rows[] = [
                'visitor_id' => $visitorId,
                'session_id' => $sessionId,
                'type' => $event['type'],
                'path' => $event['path'] ?? null,
                'route_name' => $event['route_name'] ?? null,
                'section' => $event['section'] ?? null,
                'referrer' => isset($event['referrer']) ? substr((string) $event['referrer'], 0, 2048) : null,
                'meta' => isset($event['meta']) ? json_encode($event['meta']) : null,
                'duration_seconds' => $event['duration_seconds'] ?? null,
                'page_count' => $event['page_count'] ?? null,
                'occurred_at' => Carbon::parse($event['timestamp']),
                'created_at' => now(),
                'updated_at' => now(),
            ];
        }

        if ($rows === []) {
            return 0;
        }

        AnalyticsEvent::query()->insert($rows);

        return count($rows);
    }
}
