<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Services\CmsPageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function __construct(private readonly CmsPageService $cmsPages) {}

    private function decodeRouteName(string $routeName): string
    {
        return str_replace('--', '.', $routeName);
    }

    public function show(Request $request, string $routeName): JsonResponse
    {
        $page = $this->cmsPages->findPublished(
            $this->decodeRouteName($routeName),
            app()->getLocale(),
            $request->query('preview'),
        );

        if ($page === null) {
            return response()->json(['message' => 'Page introuvable.'], 404);
        }

        return response()->json($page->toPublicArray());
    }
}
