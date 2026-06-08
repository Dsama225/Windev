<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ValidateAnalyticsIngestKey
{
    public function handle(Request $request, Closure $next): Response
    {
        $secret = config('analytics.ingest_secret');

        if ($secret && $request->header('X-Analytics-Ingest-Key') !== $secret) {
            return response()->json(['message' => 'Invalid analytics ingest key.'], 403);
        }

        return $next($request);
    }
}
