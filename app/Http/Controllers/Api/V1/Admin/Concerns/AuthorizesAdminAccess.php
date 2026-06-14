<?php

namespace App\Http\Controllers\Api\V1\Admin\Concerns;

use App\Enums\UserRole;
use App\Models\User;

trait AuthorizesAdminAccess
{
    protected function adminRole(?User $user): ?UserRole
    {
        if ($user === null) {
            return null;
        }

        return UserRole::fromUserRole($user->role);
    }

    protected function ensureAdminRole(?User $user): UserRole
    {
        $role = $this->adminRole($user);
        abort_unless($role !== null, 403);

        return $role;
    }

    protected function ensureCanViewPages(?User $user): UserRole
    {
        $role = $this->ensureAdminRole($user);
        abort_unless($role->canViewPages(), 403);

        return $role;
    }

    protected function ensureCanManagePages(?User $user): UserRole
    {
        $role = $this->ensureAdminRole($user);
        abort_unless($role->canManagePages(), 403);

        return $role;
    }

    protected function ensureCanUploadAssets(?User $user): UserRole
    {
        $role = $this->ensureAdminRole($user);
        abort_unless($role->canUploadAssets(), 403);

        return $role;
    }

    protected function ensureCanViewAnalytics(?User $user): UserRole
    {
        $role = $this->ensureAdminRole($user);
        abort_unless($role->canViewAnalytics(), 403);

        return $role;
    }

    protected function ensureCanExportAnalytics(?User $user): UserRole
    {
        $role = $this->ensureAdminRole($user);
        abort_unless($role->canExportAnalytics(), 403);

        return $role;
    }

    protected function ensureCanManageAnalyticsSettings(?User $user): UserRole
    {
        $role = $this->ensureAdminRole($user);
        abort_unless($role->canManageAnalyticsSettings(), 403);

        return $role;
    }

    protected function ensureCanManageProducts(?User $user): UserRole
    {
        $role = $this->ensureAdminRole($user);
        abort_unless($role->canManageProducts(), 403);

        return $role;
    }

    protected function ensureCanManageOrders(?User $user): UserRole
    {
        $role = $this->ensureAdminRole($user);
        abort_unless($role->canManageOrders(), 403);

        return $role;
    }
}
