<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    protected $fillable = [
        'category_id',
        'name',
        'slug',
        'description',
        'tagline',
        'price',
        'stock',
        'status',
        'link_path',
        'sort_order',
        'show_on_home',
        'show_in_navbar',
    ];

    protected function casts(): array
    {
        return [
            'price' => 'decimal:2',
            'show_on_home' => 'boolean',
            'show_in_navbar' => 'boolean',
        ];
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(ProductCategory::class, 'category_id');
    }

    public function images(): HasMany
    {
        return $this->hasMany(ProductImage::class)->orderBy('sort_order');
    }

    public function primaryImage(): ?ProductImage
    {
        return $this->images->firstWhere('is_primary', true) ?? $this->images->first();
    }

    /**
     * @return array<string, mixed>
     */
    public function toCatalogArray(bool $includeAdminFields = false): array
    {
        $primary = $this->relationLoaded('images') ? $this->primaryImage() : null;

        $data = [
            'id' => $this->id,
            'slug' => $this->slug,
            'name' => $this->name,
            'description' => $this->description,
            'tagline' => $this->tagline,
            'price' => (float) $this->price,
            'stock' => $this->stock,
            'status' => $this->status,
            'link_path' => $this->link_path,
            'show_on_home' => $this->show_on_home,
            'show_in_navbar' => $this->show_in_navbar,
            'sort_order' => $this->sort_order,
            'category' => $this->category ? [
                'id' => $this->category->id,
                'name' => $this->category->name,
                'slug' => $this->category->slug,
            ] : null,
            'images' => $this->images->map(fn (ProductImage $image) => $image->toArray())->values()->all(),
            'primary_image' => $primary?->toArray(),
        ];

        if ($includeAdminFields) {
            $data['category_id'] = $this->category_id;
            $data['created_at'] = $this->created_at?->toIso8601String();
            $data['updated_at'] = $this->updated_at?->toIso8601String();
        }

        return $data;
    }
}
