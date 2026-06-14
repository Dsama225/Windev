<?php

namespace App\Services;

use App\Data\ConnectorContentCatalog;
use App\Data\SitePageCatalog;
use App\Models\SitePage;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Str;

class CmsPageService
{
    public function findPublished(string $routeName, string $locale = 'fr', ?string $previewToken = null): ?SitePage
    {
        $allowDraft = false;

        if ($previewToken !== null) {
            $cachedRoute = Cache::get($this->previewCacheKey($previewToken));
            $allowDraft = $cachedRoute === $routeName;
        }

        $page = $this->findPageByRouteAndLocale($routeName, $locale);

        if ($page === null) {
            return null;
        }

        if ($page->status !== 'published' && ! $allowDraft) {
            return null;
        }

        return $page;
    }

    public function createPreviewToken(string $routeName): string
    {
        $token = Str::random(48);
        Cache::put($this->previewCacheKey($token), $routeName, now()->addMinutes((int) config('cms.preview_token_ttl_minutes', 60)));

        return $token;
    }

    public function resolveForAdmin(string $routeName): SitePage
    {
        $entry = collect(SitePageCatalog::entries())->firstWhere('route_name', $routeName);

        if ($entry === null) {
            abort(404, 'Page hors catalogue public.');
        }

        $payload = $this->enrichPayload($routeName, $entry['payload']);

        return SitePage::query()->firstOrCreate(
            ['route_name' => $routeName],
            [
                'path' => $entry['path'],
                'title' => $entry['title'],
                'meta_description' => $entry['meta_description'],
                'page_type' => $entry['page_type'],
                'status' => 'published',
                'locale' => 'fr',
                'payload' => $payload,
            ],
        );
    }

    public function importFromCatalog(bool $force = false): array
    {
        $created = 0;
        $updated = 0;
        $skipped = 0;

        foreach (SitePageCatalog::entries() as $entry) {
            $existing = SitePage::query()->where('route_name', $entry['route_name'])->first();

            if ($existing !== null && ! $force) {
                $skipped++;

                continue;
            }

            $payload = $this->enrichPayload($entry['route_name'], $entry['payload']);

            SitePage::query()->updateOrCreate(
                ['route_name' => $entry['route_name']],
                [
                    'path' => $entry['path'],
                    'title' => $entry['title'],
                    'meta_description' => $entry['meta_description'],
                    'page_type' => $entry['page_type'],
                    'status' => 'published',
                    'locale' => 'fr',
                    'payload' => $payload,
                ],
            );

            $existing === null ? $created++ : $updated++;
        }

        $removed = SitePage::query()
            ->whereNotIn('route_name', SitePageCatalog::routeNames())
            ->delete();

        return [
            'total' => SitePageCatalog::count(),
            'created' => $created,
            'updated' => $updated,
            'skipped' => $skipped,
            'removed' => $removed,
        ];
    }

    /**
     * @param  array<string, mixed>  $payload
     * @return array<string, mixed>
     */
    private function enrichPayload(string $routeName, array $payload): array
    {
        $connectors = ConnectorContentCatalog::connectors();
        if (isset($connectors[$routeName])) {
            $connector = $connectors[$routeName];
            $payload['hero'] = array_merge($payload['hero'] ?? [], [
                'title' => $connector['title'],
                'subtitle' => 'Cross-platform application development software suite',
            ]);
            $payload['sections'] = [
                ['id' => 'intro', 'title' => '', 'body' => '<p><strong>WINDEV and WEBDEV</strong> '.$connector['intro'].'</p>'],
            ];
            $payload['features'] = ConnectorContentCatalog::defaultFeatures();
            $payload['asset_folder'] = $connector['img_folder'];
            $payload['resource_links'] = [
                ['group' => 'Documentation overview', 'links' => [
                    ['label' => 'New features', 'type' => 'internal', 'target' => '/software/new-features-2026'],
                    ['label' => 'WINDEV', 'type' => 'internal', 'target' => '/software/windev'],
                ]],
            ];
        }

        return $payload;
    }

    private function findPageByRouteAndLocale(string $routeName, string $locale): ?SitePage
    {
        $page = SitePage::query()
            ->where('route_name', $routeName)
            ->where('locale', $locale)
            ->first();

        if ($page !== null || $locale === 'fr') {
            return $page;
        }

        return SitePage::query()
            ->where('route_name', $routeName)
            ->where('locale', 'fr')
            ->first();
    }

    private function previewCacheKey(string $token): string
    {
        return 'cms:preview:'.$token;
    }
}

