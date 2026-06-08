<?php

namespace App\Enums;

enum UserRole: string
{
    case Administrator = 'administrator';
    case Editor = 'editor';
    case Analyst = 'analyst';

    public function canManagePages(): bool
    {
        return match ($this) {
            self::Administrator, self::Editor, self::Analyst => true,
        };
    }

    public function canManageNavigation(): bool
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
}
