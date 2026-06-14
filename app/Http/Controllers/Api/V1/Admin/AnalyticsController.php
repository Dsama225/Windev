<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Api\V1\Admin\Concerns\AuthorizesAdminAccess;
use App\Http\Controllers\Controller;
use App\Services\AnalyticsQueryService;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AnalyticsController extends Controller
{
    use AuthorizesAdminAccess;

    public function __construct(private readonly AnalyticsQueryService $analytics) {}

    public function summary(Request $request): JsonResponse
    {
        $this->ensureCanViewAnalytics($request->user());

        [$from, $to] = $this->dateRange($request);

        return response()->json([
            'data' => $this->analytics->summary(
                $from,
                $to,
                $request->query('section'),
                $request->query('path'),
            ),
        ]);
    }

    public function timeseries(Request $request): JsonResponse
    {
        $this->ensureCanViewAnalytics($request->user());

        [$from, $to] = $this->dateRange($request);

        return response()->json([
            'data' => $this->analytics->timeseries(
                $from,
                $to,
                $request->query('metric', 'pageviews'),
                $request->query('granularity', 'day'),
                $request->query('section'),
                $request->query('path'),
            ),
        ]);
    }

    public function topPages(Request $request): JsonResponse
    {
        $this->ensureCanViewAnalytics($request->user());

        [$from, $to] = $this->dateRange($request);
        $limit = min(100, max(1, (int) $request->query('limit', 10)));

        return response()->json([
            'data' => $this->analytics->topPages($from, $to, $limit, $request->query('section')),
        ]);
    }

    public function live(Request $request): JsonResponse
    {
        $this->ensureCanViewAnalytics($request->user());

        return response()->json([
            'data' => $this->analytics->live($request->query('section')),
        ]);
    }

    public function export(Request $request): Response
    {
        $this->ensureCanExportAnalytics($request->user());

        [$from, $to] = $this->dateRange($request);
        $csv = $this->analytics->exportCsv($from, $to, $request->query('section'), $request->query('path'));

        return response($csv, 200, [
            'Content-Type' => 'text/csv; charset=UTF-8',
            'Content-Disposition' => 'attachment; filename="analytics-export.csv"',
        ]);
    }

    public function settings(Request $request): JsonResponse
    {
        $this->ensureCanManageAnalyticsSettings($request->user());

        return response()->json(['data' => $this->analytics->settings()]);
    }

    public function updateSettings(Request $request): JsonResponse
    {
        $this->ensureCanManageAnalyticsSettings($request->user());

        $validated = $request->validate([
            'session_timeout_minutes' => ['sometimes', 'integer', 'min:5', 'max:240'],
            'retention_days' => ['sometimes', 'integer', 'min:30', 'max:730'],
        ]);

        return response()->json(['data' => $this->analytics->updateSettings($validated)]);
    }

    /**
     * @return array{0: Carbon, 1: Carbon}
     */
    private function dateRange(Request $request): array
    {
        $to = Carbon::parse($request->query('to', now()->toDateString()))->startOfDay();
        $from = Carbon::parse($request->query('from', now()->subDays(6)->toDateString()))->startOfDay();

        return [$from, $to];
    }
}
