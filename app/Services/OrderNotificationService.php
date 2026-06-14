<?php

namespace App\Services;

use App\Mail\OrderRejected;
use App\Mail\OrderValidated;
use App\Models\Order;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class OrderNotificationService
{
    public function notifyStatusChange(Order $order, string $previousStatus): void
    {
        if ($order->status === $previousStatus) {
            return;
        }

        $order->loadMissing('product');

        try {
            if ($order->status === 'validated') {
                Mail::to($order->customer_email)->send(new OrderValidated($order));

                return;
            }

            if ($order->status === 'rejected') {
                Mail::to($order->customer_email)->send(new OrderRejected($order));
            }
        } catch (\Throwable $exception) {
            Log::error('Échec envoi e-mail commande.', [
                'order_id' => $order->id,
                'order_number' => $order->order_number,
                'status' => $order->status,
                'message' => $exception->getMessage(),
            ]);
        }
    }
}
