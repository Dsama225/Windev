<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Api\V1\Admin\Concerns\AuthorizesAdminAccess;
use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Services\OrderNotificationService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    use AuthorizesAdminAccess;

    public function __construct(private readonly OrderNotificationService $notifications) {}

    public function index(Request $request): JsonResponse
    {
        $this->ensureCanManageOrders($request->user());

        $query = Order::query()->with('product');

        if ($status = $request->query('status')) {
            $query->where('status', $status);
        }

        if ($search = $request->query('q')) {
            $query->where(function ($builder) use ($search) {
                $builder->where('order_number', 'like', "%{$search}%")
                    ->orWhere('customer_name', 'like', "%{$search}%")
                    ->orWhere('customer_email', 'like', "%{$search}%")
                    ->orWhere('order_identifier', 'like', "%{$search}%");
            });
        }

        $orders = $query
            ->orderByDesc('created_at')
            ->get()
            ->map(fn (Order $order) => $order->toAdminArray());

        return response()->json(['data' => $orders]);
    }

    public function pendingCount(Request $request): JsonResponse
    {
        $this->ensureCanManageOrders($request->user());

        $count = Order::query()->where('status', 'pending')->count();

        return response()->json(['data' => ['count' => $count]]);
    }

    public function show(Request $request, Order $order): JsonResponse
    {
        $this->ensureCanManageOrders($request->user());

        $order->load('product');

        return response()->json(['data' => $order->toAdminArray()]);
    }

    public function update(Request $request, Order $order): JsonResponse
    {
        $this->ensureCanManageOrders($request->user());

        $validated = $request->validate([
            'status' => ['required', 'in:pending,validated,rejected'],
        ]);

        $previousStatus = $order->status;

        $order->status = $validated['status'];
        $order->validated_at = $validated['status'] === 'validated' ? now() : null;
        $order->save();
        $order->load('product');

        $this->notifications->notifyStatusChange($order, $previousStatus);

        return response()->json(['data' => $order->toAdminArray()]);
    }

    public function destroy(Request $request, Order $order): JsonResponse
    {
        $this->ensureCanManageOrders($request->user());

        $order->delete();

        return response()->json(['deleted' => true]);
    }
}
