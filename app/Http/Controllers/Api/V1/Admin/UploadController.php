<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Api\V1\Admin\Concerns\AuthorizesAdminAccess;
use App\Http\Controllers\Controller;
use App\Services\CmsPageService;
use App\Services\CmsUploadService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UploadController extends Controller
{
    use AuthorizesAdminAccess;

    public function __construct(
        private readonly CmsPageService $cmsPages,
        private readonly CmsUploadService $uploads,
    ) {}

    private function decodeRouteName(string $routeName): string
    {
        return str_replace('--', '.', $routeName);
    }

    public function store(Request $request, string $routeName): JsonResponse
    {
        $this->ensureCanUploadAssets($request->user());

        $page = $this->cmsPages->resolveForAdmin($this->decodeRouteName($routeName));

        $validated = $request->validate([
            'kind' => ['required', 'in:image,document'],
            'file' => ['required', 'file'],
        ]);

        $kind = $validated['kind'];
        $file = $validated['file'];

        if ($kind === 'image') {
            $request->validate([
                'file' => ['mimes:jpeg,jpg,png,gif,webp,svg', 'max:'.config('cms.upload_max_image_kb', 8192)],
            ]);
        } else {
            $request->validate([
                'file' => ['mimes:pdf', 'max:'.config('cms.upload_max_document_kb', 20480)],
            ]);
        }

        $asset = $this->uploads->store($page, $file, $kind);

        return response()->json(['data' => $asset]);
    }

    public function destroy(Request $request, string $routeName): JsonResponse
    {
        $this->ensureCanUploadAssets($request->user());

        $this->cmsPages->resolveForAdmin($this->decodeRouteName($routeName));

        $validated = $request->validate([
            'path' => ['required', 'string', 'max:500'],
        ]);

        $deleted = $this->uploads->deletePublicPath($validated['path']);

        return response()->json(['deleted' => $deleted]);
    }
}
