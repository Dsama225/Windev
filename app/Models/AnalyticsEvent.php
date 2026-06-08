<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AnalyticsEvent extends Model
{
    protected $fillable = [
        'visitor_id',
        'session_id',
        'type',
        'path',
        'route_name',
        'section',
        'referrer',
        'meta',
        'duration_seconds',
        'page_count',
        'occurred_at',
    ];

    protected function casts(): array
    {
        return [
            'meta' => 'array',
            'occurred_at' => 'datetime',
        ];
    }
}
