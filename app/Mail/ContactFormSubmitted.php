<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ContactFormSubmitted extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @param  array<string, string>  $payload
     */
    public function __construct(public readonly array $payload) {}

    public function envelope(): Envelope
    {
        $topic = $this->payload['topic_label'] ?? 'Demande générale';

        return new Envelope(
            subject: "[WinDev.com] Formulaire de contact — {$topic}",
            replyTo: [$this->payload['email']],
        );
    }

    public function content(): Content
    {
        return new Content(
            text: 'mail.contact-form-submitted',
        );
    }
}
