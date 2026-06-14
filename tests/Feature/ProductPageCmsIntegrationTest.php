<?php

namespace Tests\Feature;

use App\Models\SitePage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProductPageCmsIntegrationTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        config(['cms.public_integrated_routes' => ['home', 'software.windev', 'software.webdev']]);
    }

    public function test_windev_cms_hero_is_available_when_published(): void
    {
        SitePage::query()->create([
            'route_name' => 'software.windev',
            'path' => '/software/windev',
            'title' => 'WINDEV édité',
            'meta_description' => '',
            'page_type' => 'product',
            'status' => 'published',
            'locale' => 'fr',
            'payload' => [
                'hero' => [
                    'title' => 'TITRE CMS WINDEV',
                    'eyebrow' => 'Sous-titre CMS',
                    'subtitle' => 'Corps CMS',
                ],
            ],
        ]);

        $response = $this->getJson('/api/v1/pages/software--windev');

        $response->assertOk();
        $response->assertJsonPath('payload.hero.title', 'TITRE CMS WINDEV');
    }

    public function test_webdev_cms_returns_not_found_when_draft_without_preview(): void
    {
        SitePage::query()->create([
            'route_name' => 'software.webdev',
            'path' => '/software/webdev',
            'title' => 'WEBDEV brouillon',
            'meta_description' => '',
            'page_type' => 'product',
            'status' => 'draft',
            'locale' => 'fr',
            'payload' => [],
        ]);

        $this->getJson('/api/v1/pages/software--webdev')->assertNotFound();
    }

    public function test_public_integrated_routes_config_matches_pilot(): void
    {
        $routes = config('cms.public_integrated_routes');

        $this->assertContains('home', $routes);
        $this->assertContains('software.windev', $routes);
        $this->assertContains('software.webdev', $routes);
        $this->assertNotContains('software.hfsql', $routes);
    }
}
