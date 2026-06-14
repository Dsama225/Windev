<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Api\V1\Admin\Concerns\AuthorizesAdminAccess;
use App\Http\Controllers\Controller;
use App\Models\SitePage;
use App\Services\CmsPageService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PageController extends Controller
{
    use AuthorizesAdminAccess;

    public function __construct(private readonly CmsPageService $cmsPages) {}

    private function decodeRouteName(string $routeName): string
    {
        return str_replace('--', '.', $routeName);
    }

    public function index(Request $request): JsonResponse
    {
        $this->ensureCanViewPages($request->user());

        $pages = SitePage::query()
            ->orderBy('title')
            ->get()
            ->map(fn (SitePage $page) => $page->toPublicArray());

        return response()->json(['data' => $pages]);
    }

    public function show(Request $request, string $routeName): JsonResponse
    {
        $this->ensureCanViewPages($request->user());

        $page = $this->cmsPages->resolveForAdmin($this->decodeRouteName($routeName));

        return response()->json($page->toPublicArray());
    }

    public function update(Request $request, string $routeName): JsonResponse
    {
        $this->ensureCanManagePages($request->user());

        $page = $this->cmsPages->resolveForAdmin($this->decodeRouteName($routeName));

        $validated = $request->validate([
            'title' => ['sometimes', 'string', 'max:255'],
            'meta_description' => ['sometimes', 'nullable', 'string', 'max:500'],
            'status' => ['sometimes', 'in:draft,published,archived'],
            'payload' => ['sometimes', 'array'],
        ]);

        $page->fill($validated);
        $page->save();

        return response()->json($page->fresh()->toPublicArray());
    }

    public function previewToken(Request $request, string $routeName): JsonResponse
    {
        $this->ensureCanManagePages($request->user());

        $decoded = $this->decodeRouteName($routeName);
        $this->cmsPages->resolveForAdmin($decoded);
        $token = $this->cmsPages->createPreviewToken($decoded);

        return response()->json(['token' => $token]);
    }

    public function syncRoutes(Request $request): JsonResponse
    {
        $this->ensureCanManagePages($request->user());

        $result = $this->cmsPages->importFromCatalog();

        return response()->json($result);
    }
}
