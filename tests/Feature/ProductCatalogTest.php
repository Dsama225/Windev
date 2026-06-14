<?php

namespace Tests\Feature;

use App\Enums\UserRole;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Models\ProductImage;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class ProductCatalogTest extends TestCase
{
    use RefreshDatabase;

    private function adminUser(): User
    {
        return User::query()->create([
            'name' => 'Admin',
            'email' => 'admin-products@test.local',
            'password' => Hash::make('password'),
            'role' => UserRole::Administrator->value,
        ]);
    }

    private function analystUser(): User
    {
        return User::query()->create([
            'name' => 'Analyst',
            'email' => 'analyst-products@test.local',
            'password' => Hash::make('password'),
            'role' => UserRole::Analyst->value,
        ]);
    }

    private function seedProduct(string $status = 'active', bool $showOnHome = true, string $slug = 'windev'): Product
    {
        $category = ProductCategory::query()->firstOrCreate(
            ['slug' => 'suite'],
            ['name' => 'Suite', 'status' => 'active'],
        );

        $product = Product::query()->create([
            'category_id' => $category->id,
            'name' => strtoupper(str_replace('-', ' ', $slug)),
            'slug' => $slug,
            'description' => 'Description test',
            'tagline' => 'Windows',
            'price' => 199.99,
            'stock' => 10,
            'status' => $status,
            'link_path' => '/software/windev',
            'show_on_home' => $showOnHome,
            'show_in_navbar' => true,
        ]);

        ProductImage::query()->create([
            'product_id' => $product->id,
            'path' => '/img/home/windev-available.png',
            'alt' => 'WINDEV',
            'sort_order' => 1,
            'is_primary' => true,
        ]);

        return $product->fresh(['category', 'images']);
    }

    public function test_public_catalog_lists_only_active_products(): void
    {
        $active = $this->seedProduct('active');
        $this->seedProduct('inactive', true, 'webdev');

        $response = $this->getJson('/api/v1/products');

        $response->assertOk();
        $response->assertJsonCount(1, 'data');
        $response->assertJsonPath('data.0.slug', $active->slug);
    }

    public function test_public_catalog_show_returns_product_detail(): void
    {
        $product = $this->seedProduct('active');

        $response = $this->getJson("/api/v1/products/{$product->slug}");

        $response->assertOk();
        $response->assertJsonPath('data.slug', $product->slug);
        $response->assertJsonPath('data.name', $product->name);
        $response->assertJsonPath('data.primary_image.path', '/img/home/windev-available.png');
    }

    public function test_public_catalog_show_returns_not_found_for_inactive_product(): void
    {
        $product = $this->seedProduct('inactive');

        $this->getJson("/api/v1/products/{$product->slug}")
            ->assertNotFound();
    }

    public function test_public_catalog_supports_placement_filter(): void
    {
        $home = $this->seedProduct('active', true);
        $this->seedProduct('active', false, 'webdev');

        $response = $this->getJson('/api/v1/products?placement=home');

        $response->assertOk();
        $response->assertJsonCount(1, 'data');
        $response->assertJsonPath('data.0.slug', $home->slug);
    }

    public function test_admin_can_manage_products_but_analyst_cannot(): void
    {
        $admin = $this->adminUser();
        $analyst = $this->analystUser();

        $this->actingAs($analyst)
            ->getJson('/api/v1/admin/products')
            ->assertForbidden();

        $create = $this->actingAs($admin)->postJson('/api/v1/admin/products', [
            'name' => 'WEBDEV',
            'price' => 0,
            'stock' => 5,
            'status' => 'active',
            'show_on_home' => true,
        ]);

        $create->assertCreated();
        $productId = $create->json('data.id');

        $this->actingAs($admin)
            ->putJson("/api/v1/admin/products/{$productId}", ['name' => 'WEBDEV 2026'])
            ->assertOk()
            ->assertJsonPath('data.name', 'WEBDEV 2026');

        $upload = $this->actingAs($admin)->post("/api/v1/admin/products/{$productId}/images", [
            'file' => UploadedFile::fake()->create('product.jpg', 100, 'image/jpeg'),
            'alt' => 'Pack WEBDEV',
            'is_primary' => '1',
        ]);

        $upload->assertCreated();

        $secondUpload = $this->actingAs($admin)->post("/api/v1/admin/products/{$productId}/images", [
            'file' => UploadedFile::fake()->create('product-2.jpg', 100, 'image/jpeg'),
            'is_primary' => '0',
        ]);

        $secondUpload->assertCreated();
        $imageId = $upload->json('data.id');

        $this->actingAs($admin)
            ->deleteJson("/api/v1/admin/products/{$productId}/images/{$imageId}")
            ->assertOk();

        $this->actingAs($admin)
            ->deleteJson("/api/v1/admin/products/{$productId}")
            ->assertOk();
    }

    public function test_admin_can_manage_categories(): void
    {
        $admin = $this->adminUser();

        $create = $this->actingAs($admin)->postJson('/api/v1/admin/product-categories', [
            'name' => 'Connecteurs',
            'status' => 'active',
        ]);

        $create->assertCreated();
        $categoryId = $create->json('data.id');

        $this->actingAs($admin)
            ->putJson("/api/v1/admin/product-categories/{$categoryId}", ['name' => 'Connecteurs natifs'])
            ->assertOk()
            ->assertJsonPath('data.name', 'Connecteurs natifs');

        $this->actingAs($admin)
            ->getJson('/api/v1/admin/product-categories')
            ->assertOk()
            ->assertJsonPath('data.0.name', 'Connecteurs natifs');
    }
}
