<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SuppressViteHotForAdmin
{
    public function handle(Request $request, Closure $next): Response
    {
        if (! config('cms.admin_isolated_from_vite_hmr', true)) {
            return $next($request);
        }

        $adminPath = trim((string) config('cms.admin_path', 'windevadmin'), '/');

        if ($adminPath !== '' && $request->is($adminPath, $adminPath.'/*')) {
            config(['vite.dev_server_running' => false]);
        }

        return $next($request);
    }
}
