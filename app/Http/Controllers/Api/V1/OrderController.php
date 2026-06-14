<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'product_slug' => ['required', 'string', 'max:255'],
            'customer_name' => ['required', 'string', 'max:255'],
            'customer_email' => ['required', 'email', 'max:255'],
            'customer_phone' => ['sometimes', 'nullable', 'string', 'max:50'],
        ]);

        $product = Product::query()
            ->where('slug', $validated['product_slug'])
            ->where('status', 'active')
            ->where(function ($builder) {
                $builder->whereNull('category_id')
                    ->orWhereHas('category', fn ($q) => $q->where('status', 'active'));
            })
            ->first();

        if ($product === null) {
            return response()->json(['message' => 'Produit introuvable ou indisponible.'], 404);
        }

        if ($product->stock <= 0) {
            return response()->json(['message' => 'Ce produit est en rupture de stock.'], 422);
        }

        $order = Order::query()->create([
            'order_number' => Order::generateOrderNumber(),
            'product_id' => $product->id,
            'customer_name' => $validated['customer_name'],
            'customer_email' => $validated['customer_email'],
            'customer_phone' => $validated['customer_phone'] ?? null,
            'status' => 'pending',
        ]);

        return response()->json([
            'data' => [
                'order_number' => $order->order_number,
                'status' => $order->status,
            ],
        ], 201);
    }
}
