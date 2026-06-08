<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Mail\ContactFormSubmitted;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Validation\Rule;

class ContactController extends Controller
{
    private const TOPICS = [
        'sales' => 'Ventes et abonnements',
        'technical' => 'Support technique',
        'training' => 'Formation',
        'billing' => 'Facturation et licences',
        'other' => 'Autre',
    ];

    public function store(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'first_name' => ['required', 'string', 'max:80'],
            'last_name' => ['required', 'string', 'max:80'],
            'email' => ['required', 'email', 'max:255'],
            'phone' => ['nullable', 'string', 'max:40'],
            'company' => ['nullable', 'string', 'max:120'],
            'topic' => ['required', 'string', Rule::in(array_keys(self::TOPICS))],
            'message' => ['required', 'string', 'min:20', 'max:5000'],
            'consent' => ['accepted'],
        ]);

        $payload = [
            'first_name' => trim($validated['first_name']),
            'last_name' => trim($validated['last_name']),
            'email' => trim($validated['email']),
            'phone' => trim($validated['phone'] ?? ''),
            'company' => trim($validated['company'] ?? ''),
            'topic' => $validated['topic'],
            'topic_label' => self::TOPICS[$validated['topic']],
            'message' => trim($validated['message']),
            'submitted_from' => $request->headers->get('Referer') ?: 'Formulaire de contact WinDev.com',
        ];

        Mail::to(config('contact.recipient'))->send(new ContactFormSubmitted($payload));

        return response()->json([
            'data' => [
                'message' => 'Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.',
            ],
        ]);
    }
}
