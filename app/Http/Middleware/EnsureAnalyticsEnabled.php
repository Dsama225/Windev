<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsureAnalyticsEnabled
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! config('analytics.enabled')) {
            return response()->json(['message' => 'Analytics collection is disabled.'], 503);
        }

        return $next($request);
    }
}
