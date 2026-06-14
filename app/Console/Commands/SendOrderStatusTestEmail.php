<?php

namespace App\Console\Commands;

use App\Mail\OrderRejected;
use App\Mail\OrderValidated;
use App\Models\Order;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;

class SendOrderStatusTestEmail extends Command
{
    protected $signature = 'orders:send-test-email
                            {order? : ID de la commande (défaut : première commande)}
                            {--email= : Adresse de test (remplace celle de la commande)}
                            {--status= : validated ou rejected (défaut : statut actuel)}';

    protected $description = 'Envoie un e-mail de test de statut de commande au client';

    public function handle(): int
    {
        $orderId = $this->argument('order');

        $order = $orderId
            ? Order::query()->with('product')->find($orderId)
            : Order::query()->with('product')->orderBy('id')->first();

        if ($order === null) {
            $this->error('Aucune commande trouvée.');

            return self::FAILURE;
        }

        $testEmail = $this->option('email');

        if (is_string($testEmail) && $testEmail !== '') {
            $order->customer_email = $testEmail;
        }

        $status = $this->option('status') ?: $order->status;

        if (! in_array($status, ['validated', 'rejected'], true)) {
            $this->error('Le statut doit être validated ou rejected pour l\'envoi d\'un e-mail.');

            return self::FAILURE;
        }

        $mailable = $status === 'validated'
            ? new OrderValidated($order)
            : new OrderRejected($order);

        Mail::to($order->customer_email)->send($mailable);

        $this->info("E-mail « {$status} » envoyé à {$order->customer_email} pour la commande {$order->order_number}.");
        $this->line('Expéditeur : '.config('orders.mail_from.address'));
        $this->line('Transport : '.config('mail.default'));

        return self::SUCCESS;
    }
}
