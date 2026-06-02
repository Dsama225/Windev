<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SitePage extends Model
{
    protected $fillable = [
        'route_name',
        'path',
        'title',
        'meta_description',
        'page_type',
        'status',
        'locale',
        'payload',
    ];

    protected function casts(): array
    {
        return [
            'payload' => 'array',
        ];
    }

    public function toPublicArray(): array
    {
        return [
            'route_name' => $this->route_name,
            'path' => $this->path,
            'title' => $this->title,
            'meta_description' => $this->meta_description,
            'page_type' => $this->page_type,
            'status' => $this->status,
            'payload' => $this->payload,
            'updated_at' => $this->updated_at?->toIso8601String(),
        ];
    }
}
