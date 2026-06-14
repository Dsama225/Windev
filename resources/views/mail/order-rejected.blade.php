Bonjour {{ $order->customer_name }},

Nous avons examiné votre commande, mais nous ne sommes pas en mesure de la valider dans l'état actuel.

Numéro de commande : {{ $order->order_number }}
Produit : {{ $order->product?->name ?? '—' }}
Statut : Non validée

Pour connaître les motifs ou obtenir de l'aide, répondez à cet e-mail ou contactez-nous à {{ config('orders.mail_from.address') }}.

Cordialement,
{{ config('orders.mail_from.name') }}
