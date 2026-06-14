<?php

namespace Tests\Feature;

use App\Models\SitePage;
use App\Services\CmsPageService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

class PublicCmsPageTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        app()->setLocale('fr');
    }

    public function test_published_page_is_publicly_accessible(): void
    {
        SitePage::query()->create([
            'route_name' => 'software.windev',
            'path' => '/software/windev',
            'title' => 'WINDEV CMS',
            'meta_description' => 'Test',
            'page_type' => 'product',
            'status' => 'published',
            'locale' => 'fr',
            'payload' => ['hero' => ['title' => 'Hero CMS']],
        ]);

        $response = $this->getJson('/api/v1/pages/software--windev');

        $response->assertOk();
        $response->assertJsonPath('title', 'WINDEV CMS');
        $response->assertJsonPath('payload.hero.title', 'Hero CMS');
    }

    public function test_draft_page_is_hidden_without_preview_token(): void
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

    public function test_draft_page_is_visible_with_valid_preview_token(): void
    {
        SitePage::query()->create([
            'route_name' => 'software.webdev',
            'path' => '/software/webdev',
            'title' => 'WEBDEV preview',
            'meta_description' => '',
            'page_type' => 'product',
            'status' => 'draft',
            'locale' => 'fr',
            'payload' => ['hero' => ['title' => 'Preview hero']],
        ]);

        $token = app(CmsPageService::class)->createPreviewToken('software.webdev');

        $response = $this->getJson('/api/v1/pages/software--webdev?preview='.$token);

        $response->assertOk();
        $response->assertJsonPath('title', 'WEBDEV preview');
    }

    public function test_invalid_preview_token_returns_not_found_for_draft(): void
    {
        SitePage::query()->create([
            'route_name' => 'software.webdev',
            'path' => '/software/webdev',
            'title' => 'WEBDEV',
            'meta_description' => '',
            'page_type' => 'product',
            'status' => 'draft',
            'locale' => 'fr',
            'payload' => [],
        ]);

        $this->getJson('/api/v1/pages/software--webdev?preview=invalid-token')->assertNotFound();
    }

    public function test_unknown_route_returns_not_found(): void
    {
        $this->getJson('/api/v1/pages/unknown--route')->assertNotFound();
    }

    public function test_archived_page_is_hidden_from_public_api(): void
    {
        SitePage::query()->create([
            'route_name' => 'workspace',
            'path' => '/workspace',
            'title' => 'Workspace archivé',
            'meta_description' => '',
            'page_type' => 'workspace',
            'status' => 'archived',
            'locale' => 'fr',
            'payload' => [],
        ]);

        $this->getJson('/api/v1/pages/workspace')->assertNotFound();
    }

    protected function tearDown(): void
    {
        Cache::flush();
        parent::tearDown();
    }
}
