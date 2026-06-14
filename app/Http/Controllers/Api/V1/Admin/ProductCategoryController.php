<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Api\V1\Admin\Concerns\AuthorizesAdminAccess;
use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductCategoryController extends Controller
{
    use AuthorizesAdminAccess;

    public function index(): JsonResponse
    {
        $this->ensureCanManageProducts(request()->user());

        $categories = ProductCategory::query()
            ->withCount('products')
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (ProductCategory $category) => $category->toArray());

        return response()->json(['data' => $categories]);
    }

    public function store(Request $request): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'slug' => ['sometimes', 'nullable', 'string', 'max:255', 'unique:product_categories,slug'],
            'description' => ['sometimes', 'nullable', 'string'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
            'status' => ['sometimes', 'in:active,inactive'],
        ]);

        $slug = $validated['slug'] ?? Str::slug($validated['name']);
        $slug = $this->uniqueSlug($slug);

        $category = ProductCategory::query()->create([
            ...$validated,
            'slug' => $slug,
        ]);

        return response()->json(['data' => $category->toArray()], 201);
    }

    public function update(Request $request, ProductCategory $productCategory): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        $validated = $request->validate([
            'name' => ['sometimes', 'string', 'max:255'],
            'slug' => ['sometimes', 'string', 'max:255', 'unique:product_categories,slug,'.$productCategory->id],
            'description' => ['sometimes', 'nullable', 'string'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
            'status' => ['sometimes', 'in:active,inactive'],
        ]);

        $productCategory->fill($validated);
        $productCategory->save();

        return response()->json(['data' => $productCategory->fresh()->toArray()]);
    }

    public function destroy(Request $request, ProductCategory $productCategory): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        if ($productCategory->products()->exists()) {
            return response()->json([
                'message' => 'Impossible de supprimer une catégorie contenant des produits.',
            ], 422);
        }

        $productCategory->delete();

        return response()->json(['deleted' => true]);
    }

    private function uniqueSlug(string $slug, ?int $ignoreId = null): string
    {
        $base = $slug ?: 'categorie';
        $candidate = $base;
        $index = 2;

        while (ProductCategory::query()
            ->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))
            ->where('slug', $candidate)
            ->exists()) {
            $candidate = "{$base}-{$index}";
            $index++;
        }

        return $candidate;
    }
}
