<?php

namespace App\Data;

class ConnectorContentCatalog
{
    /**
     * @return array<string, array<string, mixed>>
     */
    public static function connectors(): array
    {
        return [];
    }

    /**
     * @return list<array{label: string, value: string}>
     */
    public static function defaultFeatures(): array
    {
        return [];
    }
}
