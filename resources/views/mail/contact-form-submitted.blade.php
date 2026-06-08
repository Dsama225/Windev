Nouveau message via le formulaire de contact
============================

Nom : {{ $payload['first_name'] }} {{ $payload['last_name'] }}
E-mail : {{ $payload['email'] }}
Téléphone : {{ $payload['phone'] ?: '—' }}
Société : {{ $payload['company'] ?: '—' }}
Sujet : {{ $payload['topic_label'] }}

Message
-------
{{ $payload['message'] }}

Envoyé depuis : {{ $payload['submitted_from'] ?? 'Formulaire de contact WinDev.com' }}
