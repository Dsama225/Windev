<?php

namespace App\Http\Controllers\Api\V1\Analytics;

use App\Http\Controllers\Controller;
use App\Services\AnalyticsIngestService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EventController extends Controller
{
    public function __construct(private readonly AnalyticsIngestService $ingestService) {}

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'visitor_id' => ['required', 'uuid'],
            'session_id' => ['required', 'uuid'],
            'events' => ['required', 'array', 'min:1', 'max:50'],
            'events.*.type' => ['required', 'string', 'in:page_view,session_start,session_end,navigation_click'],
            'events.*.timestamp' => ['required', 'date'],
            'events.*.path' => ['nullable', 'string', 'max:255'],
            'events.*.route_name' => ['nullable', 'string', 'max:255'],
            'events.*.section' => ['nullable', 'string', 'max:64'],
            'events.*.referrer' => ['nullable', 'string', 'max:2048'],
            'events.*.meta' => ['nullable', 'array'],
            'events.*.duration_seconds' => ['nullable', 'integer', 'min:0'],
            'events.*.page_count' => ['nullable', 'integer', 'min:0'],
        ]);

        $count = $this->ingestService->ingest(
            $validated['visitor_id'],
            $validated['session_id'],
            $validated['events'],
        );

        return response()->json(['data' => ['accepted' => $count]]);
    }
}
