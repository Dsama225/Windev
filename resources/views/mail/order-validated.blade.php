Bonjour {{ $order->customer_name }},

Votre commande a été validée par notre équipe.

Numéro de commande : {{ $order->order_number }}
Produit : {{ $order->product?->name ?? '—' }}
Statut : Confirmée

Nous vous recontacterons si des informations complémentaires sont nécessaires.

Pour toute question, répondez à cet e-mail ou contactez-nous à {{ config('orders.mail_from.address') }}.

Cordialement,
{{ config('orders.mail_from.name') }}
