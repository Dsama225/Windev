<?php

namespace Tests\Feature;

use App\Enums\UserRole;
use App\Models\Order;
use App\Models\Product;
use App\Models\ProductCategory;
use App\Mail\OrderRejected;
use App\Mail\OrderValidated;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    private function seedProduct(int $stock = 10): Product
    {
        $category = ProductCategory::query()->create([
            'name' => 'Suite',
            'slug' => 'suite',
            'status' => 'active',
        ]);

        return Product::query()->create([
            'category_id' => $category->id,
            'name' => 'WINDEV',
            'slug' => 'windev',
            'price' => 199,
            'stock' => $stock,
            'status' => 'active',
        ]);
    }

    private function adminUser(): User
    {
        return User::query()->create([
            'name' => 'Admin',
            'email' => 'admin-orders@test.local',
            'password' => Hash::make('password'),
            'role' => UserRole::Administrator->value,
        ]);
    }

    public function test_client_can_submit_order(): void
    {
        $product = $this->seedProduct();

        $response = $this->postJson('/api/v1/orders', [
            'product_slug' => $product->slug,
            'customer_name' => 'Jean Dupont',
            'customer_email' => 'jean@example.com',
        ]);

        $response->assertCreated();
        $response->assertJsonPath('data.status', 'pending');
        $orderNumber = $response->json('data.order_number');
        $this->assertMatchesRegularExpression('/^CMD-\d{4}-\d{5}$/', $orderNumber);
        $this->assertDatabaseHas('orders', [
            'product_id' => $product->id,
            'customer_email' => 'jean@example.com',
            'order_number' => $orderNumber,
            'status' => 'pending',
        ]);
    }

    public function test_order_rejected_when_product_out_of_stock(): void
    {
        $product = $this->seedProduct(0);

        $this->postJson('/api/v1/orders', [
            'product_slug' => $product->slug,
            'customer_name' => 'Jean Dupont',
            'customer_email' => 'jean@example.com',
        ])->assertUnprocessable();
    }

    public function test_admin_can_manage_orders_and_pending_count(): void
    {
        Mail::fake();

        $admin = $this->adminUser();
        $product = $this->seedProduct();

        Order::query()->create([
            'order_number' => Order::generateOrderNumber(),
            'product_id' => $product->id,
            'customer_name' => 'Client Test',
            'customer_email' => 'client@test.local',
            'status' => 'pending',
        ]);

        $this->actingAs($admin)
            ->getJson('/api/v1/admin/orders/pending-count')
            ->assertOk()
            ->assertJsonPath('data.count', 1);

        $orderId = Order::query()->value('id');

        $this->actingAs($admin)
            ->patchJson("/api/v1/admin/orders/{$orderId}", ['status' => 'validated'])
            ->assertOk()
            ->assertJsonPath('data.status', 'validated');

        Mail::assertSent(OrderValidated::class, function (OrderValidated $mail) {
            return $mail->hasTo('client@test.local')
                && $mail->envelope()->from->address === 'infos@mediasoftci.net';
        });

        $this->actingAs($admin)
            ->getJson('/api/v1/admin/orders/pending-count')
            ->assertJsonPath('data.count', 0);
    }

    public function test_admin_rejection_sends_email_to_customer(): void
    {
        Mail::fake();

        $admin = $this->adminUser();
        $product = $this->seedProduct();

        $order = Order::query()->create([
            'order_number' => Order::generateOrderNumber(),
            'product_id' => $product->id,
            'customer_name' => 'Marie Martin',
            'customer_email' => 'marie@example.com',
            'status' => 'pending',
        ]);

        $this->actingAs($admin)
            ->patchJson("/api/v1/admin/orders/{$order->id}", ['status' => 'rejected'])
            ->assertOk();

        Mail::assertSent(OrderRejected::class, function (OrderRejected $mail) {
            return $mail->hasTo('marie@example.com');
        });
    }
}
