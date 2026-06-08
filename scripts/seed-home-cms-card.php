<?php

require __DIR__.'/../vendor/autoload.php';

$app = require __DIR__.'/../bootstrap/app.php';
$app->make(Illuminate\Contracts\Console\Kernel::class)->bootstrap();

$service = app(App\Services\CmsPageService::class);
$page = $service->resolveForAdmin('home');
$payload = $page->payload ?? [];
$payload['components'] = [[
    'id' => 'comp-bo-test',
    'type' => 'card',
    'title' => 'Message du back-office',
    'body' => 'bonjour PCSOFT vien du backOffice',
    'image_src' => '',
    'image_alt' => '',
    'link' => '',
    'link_label' => '',
]];
$page->payload = $payload;
$page->status = 'published';
$page->save();

echo "OK: home page updated with ".count($payload['components'])." component(s)\n";
