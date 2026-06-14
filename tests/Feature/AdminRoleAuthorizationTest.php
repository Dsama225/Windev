<?php

namespace Tests\Feature;

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AdminRoleAuthorizationTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @return array<string, User>
     */
    private function seedRoleUsers(): array
    {
        $password = Hash::make('password');

        return [
            'administrator' => User::query()->create([
                'name' => 'Admin',
                'email' => 'admin@test.local',
                'password' => $password,
                'role' => UserRole::Administrator->value,
            ]),
            'editor' => User::query()->create([
                'name' => 'Editor',
                'email' => 'editor@test.local',
                'password' => $password,
                'role' => UserRole::Editor->value,
            ]),
            'analyst' => User::query()->create([
                'name' => 'Analyst',
                'email' => 'analyst@test.local',
                'password' => $password,
                'role' => UserRole::Analyst->value,
            ]),
        ];
    }

    public function test_login_rejects_invalid_role(): void
    {
        User::query()->create([
            'name' => 'Invalid',
            'email' => 'invalid@test.local',
            'password' => Hash::make('password'),
            'role' => 'superuser',
        ]);

        $response = $this->postJson('/api/v1/admin/login', [
            'email' => 'invalid@test.local',
            'password' => 'password',
        ]);

        $response->assertUnprocessable();
        $response->assertJsonValidationErrors(['email']);
    }

    public function test_me_rejects_invalid_role_session(): void
    {
        $user = User::query()->create([
            'name' => 'Invalid',
            'email' => 'invalid@test.local',
            'password' => Hash::make('password'),
            'role' => 'superuser',
        ]);

        $response = $this->actingAs($user)->getJson('/api/v1/admin/me');

        $response->assertNoContent();
    }

    public function test_login_payload_includes_role_label(): void
    {
        $users = $this->seedRoleUsers();

        $response = $this->postJson('/api/v1/admin/login', [
            'email' => $users['editor']->email,
            'password' => 'password',
        ]);

        $response->assertOk();
        $response->assertJsonPath('role', 'editor');
        $response->assertJsonPath('role_label', 'Éditeur');
    }

    public function test_page_access_by_role(): void
    {
        $users = $this->seedRoleUsers();

        $this->actingAs($users['administrator'])->getJson('/api/v1/admin/pages')->assertOk();
        $this->actingAs($users['editor'])->getJson('/api/v1/admin/pages')->assertOk();
        $this->actingAs($users['analyst'])->getJson('/api/v1/admin/pages')->assertForbidden();
    }

    public function test_page_mutations_by_role(): void
    {
        $users = $this->seedRoleUsers();

        $this->actingAs($users['analyst'])->putJson('/api/v1/admin/pages/home', [
            'title' => 'Test',
        ])->assertForbidden();

        $this->actingAs($users['editor'])->putJson('/api/v1/admin/pages/home', [
            'title' => 'Test',
        ])->assertOk();
    }

    public function test_analytics_access_by_role(): void
    {
        $users = $this->seedRoleUsers();

        $this->actingAs($users['analyst'])->getJson('/api/v1/admin/analytics/summary')->assertOk();
        $this->actingAs($users['editor'])->getJson('/api/v1/admin/analytics/summary')->assertOk();

        $this->actingAs($users['analyst'])->getJson('/api/v1/admin/analytics/export.csv')->assertOk();
        $this->actingAs($users['editor'])->getJson('/api/v1/admin/analytics/export.csv')->assertForbidden();

        $this->actingAs($users['administrator'])->getJson('/api/v1/admin/analytics/settings')->assertOk();
        $this->actingAs($users['editor'])->getJson('/api/v1/admin/analytics/settings')->assertForbidden();
        $this->actingAs($users['analyst'])->getJson('/api/v1/admin/analytics/settings')->assertForbidden();
    }
}
