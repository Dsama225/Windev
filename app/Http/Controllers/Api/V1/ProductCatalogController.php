<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\ProductCategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductCatalogController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Product::query()
            ->with(['category', 'images'])
            ->where('status', 'active')
            ->where(function ($builder) {
                $builder->whereNull('category_id')
                    ->orWhereHas('category', fn ($q) => $q->where('status', 'active'));
            });

        if ($placement = $request->query('placement')) {
            if ($placement === 'home') {
                $query->where('show_on_home', true);
            } elseif ($placement === 'navbar') {
                $query->where('show_in_navbar', true);
            }
        }

        if ($categorySlug = $request->query('category')) {
            $query->whereHas('category', fn ($q) => $q->where('slug', $categorySlug));
        }

        $products = $query
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (Product $product) => $product->toCatalogArray());

        return response()->json(['data' => $products]);
    }

    public function show(string $slug): JsonResponse
    {
        $product = Product::query()
            ->with(['category', 'images'])
            ->where('slug', $slug)
            ->where('status', 'active')
            ->where(function ($builder) {
                $builder->whereNull('category_id')
                    ->orWhereHas('category', fn ($q) => $q->where('status', 'active'));
            })
            ->first();

        if ($product === null) {
            return response()->json(['message' => 'Produit introuvable.'], 404);
        }

        return response()->json(['data' => $product->toCatalogArray()]);
    }

    public function categories(): JsonResponse
    {
        $categories = ProductCategory::query()
            ->where('status', 'active')
            ->orderBy('sort_order')
            ->orderBy('name')
            ->get()
            ->map(fn (ProductCategory $category) => $category->toArray());

        return response()->json(['data' => $categories]);
    }
}
