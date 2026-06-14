<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductImage;
use Illuminate\Database\Seeder;

class ProductCatalogSeeder extends Seeder
{
    public function run(): void
    {
        $suite = ProductCategory::query()->updateOrCreate(
            ['slug' => 'suite-logicielle'],
            [
                'name' => 'Suite logicielle',
                'description' => 'Produits phares PC SOFT',
                'sort_order' => 1,
                'status' => 'active',
            ],
        );

        $items = [
            [
                'slug' => 'windev',
                'name' => 'WINDEV',
                'tagline' => 'Windows · Linux · .NET',
                'description' => 'Développez des applications Windows, .Net, Linux et Mac 10 fois plus vite.',
                'link_path' => '/software/windev',
                'show_on_home' => true,
                'show_in_navbar' => true,
                'sort_order' => 1,
                'images' => [
                    ['path' => '/img/home/logo-windev.png', 'alt' => 'Logo WINDEV', 'is_primary' => false],
                    ['path' => '/img/home/windev-available.png', 'alt' => 'WINDEV 2026', 'is_primary' => true],
                ],
            ],
            [
                'slug' => 'webdev',
                'name' => 'WEBDEV',
                'tagline' => 'Web · SaaS · Intranet',
                'description' => 'Développez des sites et applications Intranet & Internet 10 fois plus vite.',
                'link_path' => '/software/webdev',
                'show_on_home' => true,
                'show_in_navbar' => true,
                'sort_order' => 2,
                'images' => [
                    ['path' => '/img/home/logo-webdev.png', 'alt' => 'Logo WEBDEV', 'is_primary' => false],
                    ['path' => '/img/home/webdev-available.png', 'alt' => 'WEBDEV 2026', 'is_primary' => true],
                ],
            ],
            [
                'slug' => 'windev-mobile',
                'name' => 'WINDEV Mobile',
                'tagline' => 'Android · iOS · UWP',
                'description' => 'Créez des applications pour iOS, Android, Windows 10 IoT, et bien plus en quelques heures.',
                'link_path' => '/software/windevmobile',
                'show_on_home' => true,
                'show_in_navbar' => true,
                'sort_order' => 3,
                'images' => [
                    ['path' => '/img/home/logo-windev-mobile.png', 'alt' => 'Logo WINDEV Mobile', 'is_primary' => false],
                    ['path' => '/img/home/windev-mobile-available.png', 'alt' => 'WINDEV Mobile 2026', 'is_primary' => true],
                ],
            ],
        ];

        foreach ($items as $item) {
            $images = $item['images'];
            unset($item['images']);

            $product = Product::query()->updateOrCreate(
                ['slug' => $item['slug']],
                [
                    ...$item,
                    'category_id' => $suite->id,
                    'price' => 0,
                    'stock' => 999,
                    'status' => 'active',
                ],
            );

            if ($product->images()->count() === 0) {
                foreach ($images as $index => $image) {
                    ProductImage::query()->create([
                        'product_id' => $product->id,
                        'path' => $image['path'],
                        'alt' => $image['alt'],
                        'sort_order' => $index + 1,
                        'is_primary' => $image['is_primary'],
                    ]);
                }
            }
        }
    }
}
