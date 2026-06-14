<?php

return [
    'admin_path' => env('CMS_ADMIN_PATH', 'windevadmin'),
    'cache_ttl_seconds' => (int) env('CMS_CACHE_TTL_SECONDS', 300),
    'preview_token_ttl_minutes' => (int) env('CMS_PREVIEW_TOKEN_TTL_MINUTES', 60),
    'admin_isolated_from_vite_hmr' => filter_var(
        env('CMS_ADMIN_ISOLATED_FROM_VITE_HMR', true),
        FILTER_VALIDATE_BOOL,
    ),
    'upload_max_image_kb' => (int) env('CMS_UPLOAD_MAX_IMAGE_KB', 8192),
    'upload_max_document_kb' => (int) env('CMS_UPLOAD_MAX_DOCUMENT_KB', 20480),

    /*
    | Routes publiques (route_name Vue) branchées au CMS via useCmsPageWithFallback.
    | Vide par défaut — activer progressivement (étape 5+) via CMS_PUBLIC_ROUTES
    | ex. CMS_PUBLIC_ROUTES=software.windev,software.webdev
    */
    'public_integrated_routes' => array_values(array_filter(array_map(
        static fn (string $route): string => trim($route),
        explode(',', (string) env('CMS_PUBLIC_ROUTES', '')),
    ))),
];
