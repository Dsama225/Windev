<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    protected $fillable = [
        'order_number',
        'product_id',
        'customer_name',
        'customer_email',
        'customer_phone',
        'order_identifier',
        'status',
        'validated_at',
    ];

    protected function casts(): array
    {
        return [
            'validated_at' => 'datetime',
        ];
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    /**
     * @return array<string, mixed>
     */
    public function toAdminArray(): array
    {
        $this->loadMissing('product');

        return [
            'id' => $this->id,
            'order_number' => $this->order_number,
            'product_id' => $this->product_id,
            'product' => $this->product ? [
                'id' => $this->product->id,
                'name' => $this->product->name,
                'slug' => $this->product->slug,
            ] : null,
            'customer_name' => $this->customer_name,
            'customer_email' => $this->customer_email,
            'customer_phone' => $this->customer_phone,
            'order_identifier' => $this->order_identifier,
            'status' => $this->status,
            'validated_at' => $this->validated_at?->toIso8601String(),
            'created_at' => $this->created_at?->toIso8601String(),
            'updated_at' => $this->updated_at?->toIso8601String(),
        ];
    }

    public static function generateOrderNumber(): string
    {
        $year = now()->format('Y');
        $prefix = "CMD-{$year}-";

        return \Illuminate\Support\Facades\DB::transaction(function () use ($prefix, $year) {
            $latest = static::query()
                ->where('order_number', 'like', "{$prefix}%")
                ->lockForUpdate()
                ->orderByDesc('id')
                ->value('order_number');

            $sequence = 1;

            if (is_string($latest) && preg_match('/CMD-\d{4}-(\d+)$/', $latest, $matches)) {
                $sequence = (int) $matches[1] + 1;
            }

            return sprintf('CMD-%s-%05d', $year, $sequence);
        });
    }
}
