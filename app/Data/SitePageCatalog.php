<?php

namespace App\Data;

class SitePageCatalog
{
    /**
     * @return list<array{route_name: string, path: string, title: string, page_type: string, meta_description: string, payload: array<string, mixed>}>
     */
    public static function entries(): array
    {
        $path = resource_path('data/public-site-pages.json');

        if (! is_file($path)) {
            return [];
        }

        $raw = json_decode((string) file_get_contents($path), true);

        if (! is_array($raw)) {
            return [];
        }

        return array_map(static function (array $page): array {
            return [
                'route_name' => $page['route_name'],
                'path' => $page['path'],
                'title' => $page['title'],
                'page_type' => $page['page_type'] ?? 'product',
                'meta_description' => $page['meta_description'] ?? '',
                'payload' => $page['payload'] ?? [],
            ];
        }, $raw);
    }

    /**
     * @return list<string>
     */
    public static function routeNames(): array
    {
        return array_column(self::entries(), 'route_name');
    }

    public static function count(): int
    {
        return count(self::entries());
    }
}
