<?php

namespace App\Enums;

enum UserRole: string
{
    case Administrator = 'administrator';
    case Editor = 'editor';
    case Analyst = 'analyst';

    public function canViewPages(): bool
    {
        return $this->canManagePages();
    }

    public function canManagePages(): bool
    {
        return match ($this) {
            self::Administrator, self::Editor => true,
            self::Analyst => false,
        };
    }

    public function canUploadAssets(): bool
    {
        return $this->canManagePages();
    }

    public function canViewAnalytics(): bool
    {
        return true;
    }

    public function canExportAnalytics(): bool
    {
        return match ($this) {
            self::Administrator, self::Analyst => true,
            self::Editor => false,
        };
    }

    public function canManageAnalyticsSettings(): bool
    {
        return $this === self::Administrator;
    }

    public function canManageProducts(): bool
    {
        return match ($this) {
            self::Administrator, self::Editor => true,
            self::Analyst => false,
        };
    }

    public function canManageOrders(): bool
    {
        return match ($this) {
            self::Administrator, self::Editor => true,
            self::Analyst => false,
        };
    }

    public function canManageNavigation(): bool
    {
        return $this === self::Administrator;
    }

    public function canAccessSecurityModule(): bool
    {
        return $this === self::Administrator;
    }

    public function label(): string
    {
        return match ($this) {
            self::Administrator => 'Administrateur',
            self::Editor => 'Éditeur',
            self::Analyst => 'Analyste',
        };
    }

    public static function fromUserRole(?string $role): ?self
    {
        if ($role === null || $role === '') {
            return self::Administrator;
        }

        return self::tryFrom($role);
    }

    public static function resolveForAuth(?string $role): self
    {
        $resolved = self::fromUserRole($role);

        if ($resolved === null) {
            throw new \InvalidArgumentException('Invalid admin role.');
        }

        return $resolved;
    }

    public static function isValid(?string $role): bool
    {
        if ($role === null || $role === '') {
            return true;
        }

        return self::tryFrom($role) !== null;
    }
}
