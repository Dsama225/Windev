<?php

namespace Database\Seeders;

use App\Enums\UserRole;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    public function run(): void
    {
        $password = Hash::make('WinDevAdmin2026!');

        User::query()->updateOrCreate(
            ['email' => 'admin@pcsoft.fr'],
            [
                'name' => 'Admin PC SOFT',
                'password' => $password,
                'role' => UserRole::Administrator->value,
            ],
        );

        User::query()->updateOrCreate(
            ['email' => 'editor@pcsoft.fr'],
            [
                'name' => 'Éditeur PC SOFT',
                'password' => $password,
                'role' => UserRole::Editor->value,
            ],
        );

        User::query()->updateOrCreate(
            ['email' => 'analyst@pcsoft.fr'],
            [
                'name' => 'Analyste PC SOFT',
                'password' => $password,
                'role' => UserRole::Analyst->value,
            ],
        );
    }
}
