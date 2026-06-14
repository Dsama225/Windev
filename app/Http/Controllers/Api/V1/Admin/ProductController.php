<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Api\V1\Admin\Concerns\AuthorizesAdminAccess;
use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductImage;
use App\Services\ProductUploadService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    use AuthorizesAdminAccess;

    public function __construct(private readonly ProductUploadService $uploads) {}

    public function index(Request $request): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        $query = Product::query()->with(['category', 'images']);

        if ($search = $request->query('q')) {
            $query->where(function ($builder) use ($search) {
                $builder->where('name', 'like', "%{$search}%")
                    ->orWhere('slug', 'like', "%{$search}%")
                    ->orWhere('description', 'like', "%{$search}%");
            });
        }

        if ($categoryId = $request->query('category_id')) {
            $query->where('category_id', $categoryId);
        }

        if ($status = $request->query('status')) {
            $query->where('status', $status);
        }

        $products = $query
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (Product $product) => $product->toCatalogArray(true));

        return response()->json(['data' => $products]);
    }

    public function store(Request $request): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        $validated = $this->validatedProduct($request);

        $slug = $validated['slug'] ?? Str::slug($validated['name']);
        $validated['slug'] = $this->uniqueSlug($slug);

        $product = Product::query()->create($validated);
        $product->load(['category', 'images']);

        return response()->json(['data' => $product->toCatalogArray(true)], 201);
    }

    public function show(Request $request, Product $product): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        $product->load(['category', 'images']);

        return response()->json(['data' => $product->toCatalogArray(true)]);
    }

    public function update(Request $request, Product $product): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        $validated = $this->validatedProduct($request, true);

        if (isset($validated['slug'])) {
            $validated['slug'] = $this->uniqueSlug($validated['slug'], $product->id);
        }

        $product->fill($validated);
        $product->save();
        $product->load(['category', 'images']);

        return response()->json(['data' => $product->toCatalogArray(true)]);
    }

    public function destroy(Request $request, Product $product): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        foreach ($product->images as $image) {
            $this->uploads->deletePublicPath($image->path);
        }

        $product->delete();

        return response()->json(['deleted' => true]);
    }

    public function uploadImage(Request $request, Product $product): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        $validated = $request->validate([
            'file' => ['required', 'file', 'mimes:jpeg,jpg,png,gif,webp,svg', 'max:8192'],
            'alt' => ['sometimes', 'nullable', 'string', 'max:255'],
        ]);

        $asset = $this->uploads->store($product, $validated['file']);
        $isPrimary = $request->boolean('is_primary') || ! $product->images()->exists();

        if ($isPrimary) {
            $product->images()->update(['is_primary' => false]);
        }

        $image = $product->images()->create([
            'path' => $asset['path'],
            'alt' => $validated['alt'] ?? $product->name,
            'sort_order' => (int) $product->images()->max('sort_order') + 1,
            'is_primary' => $isPrimary,
        ]);

        return response()->json(['data' => $image->toArray()], 201);
    }

    public function destroyImage(Request $request, Product $product, ProductImage $image): JsonResponse
    {
        $this->ensureCanManageProducts($request->user());

        abort_unless($image->product_id === $product->id, 404);

        $this->uploads->deletePublicPath($image->path);
        $wasPrimary = $image->is_primary;
        $image->delete();

        if ($wasPrimary) {
            $next = $product->images()->orderBy('sort_order')->first();
            $next?->update(['is_primary' => true]);
        }

        return response()->json(['deleted' => true]);
    }

    /**
     * @return array<string, mixed>
     */
    private function validatedProduct(Request $request, bool $partial = false): array
    {
        $rules = [
            'category_id' => ['nullable', 'integer', 'exists:product_categories,id'],
            'name' => [$partial ? 'sometimes' : 'required', 'string', 'max:255'],
            'slug' => ['sometimes', 'nullable', 'string', 'max:255'],
            'description' => ['sometimes', 'nullable', 'string'],
            'tagline' => ['sometimes', 'nullable', 'string', 'max:255'],
            'price' => ['sometimes', 'numeric', 'min:0'],
            'stock' => ['sometimes', 'integer', 'min:0'],
            'status' => ['sometimes', 'in:active,inactive'],
            'link_path' => ['sometimes', 'nullable', 'string', 'max:500'],
            'sort_order' => ['sometimes', 'integer', 'min:0'],
            'show_on_home' => ['sometimes', 'boolean'],
            'show_in_navbar' => ['sometimes', 'boolean'],
        ];

        return $request->validate($rules);
    }

    private function uniqueSlug(string $slug, ?int $ignoreId = null): string
    {
        $base = $slug ?: 'produit';
        $candidate = $base;
        $index = 2;

        while (Product::query()
            ->when($ignoreId, fn ($q) => $q->where('id', '!=', $ignoreId))
            ->where('slug', $candidate)
            ->exists()) {
            $candidate = "{$base}-{$index}";
            $index++;
        }

        return $candidate;
    }
}
