<?php

use App\Http\Controllers\Api\V1\Admin\AnalyticsController as AdminAnalyticsController;
use App\Http\Controllers\Api\V1\Admin\AuthController;
use App\Http\Controllers\Api\V1\Admin\PageController;
use App\Http\Controllers\Api\V1\Admin\UploadController;
use App\Http\Controllers\Api\V1\Analytics\EventController;
use App\Http\Controllers\Api\V1\ContactController;
use App\Http\Controllers\Api\V1\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Api\V1\Admin\ProductCategoryController as AdminProductCategoryController;
use App\Http\Controllers\Api\V1\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Api\V1\OrderController;
use App\Http\Controllers\Api\V1\PageController as PublicPageController;
use App\Http\Controllers\Api\V1\ProductCatalogController;
use App\Http\Controllers\Api\V1\Analytics\HealthController;
use App\Http\Middleware\EnsureAnalyticsEnabled;
use App\Http\Middleware\ValidateAnalyticsIngestKey;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->middleware(['web'])->group(function () {
    Route::get('pages/{routeName}', [PublicPageController::class, 'show'])->where('routeName', '.*');

    Route::get('products', [ProductCatalogController::class, 'index']);
    Route::get('products/categories', [ProductCatalogController::class, 'categories']);
    Route::get('products/{slug}', [ProductCatalogController::class, 'show']);

    Route::post('contact', [ContactController::class, 'store'])->middleware('throttle:contact-form');
    Route::post('orders', [OrderController::class, 'store'])->middleware('throttle:contact-form');

    Route::get('analytics/health', HealthController::class);

    Route::middleware([EnsureAnalyticsEnabled::class, ValidateAnalyticsIngestKey::class, 'throttle:analytics-ingest'])
        ->post('analytics/events', [EventController::class, 'store']);
});

Route::prefix('v1/admin')->middleware(['web'])->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::get('me', [AuthController::class, 'me']);

    Route::middleware('auth')->group(function () {
        Route::post('logout', [AuthController::class, 'logout']);

        Route::prefix('analytics')->group(function () {
            Route::get('summary', [AdminAnalyticsController::class, 'summary']);
            Route::get('timeseries', [AdminAnalyticsController::class, 'timeseries']);
            Route::get('pages/top', [AdminAnalyticsController::class, 'topPages']);
            Route::get('live', [AdminAnalyticsController::class, 'live']);
            Route::get('export.csv', [AdminAnalyticsController::class, 'export']);
            Route::get('settings', [AdminAnalyticsController::class, 'settings']);
            Route::patch('settings', [AdminAnalyticsController::class, 'updateSettings']);
        });

        Route::get('pages', [PageController::class, 'index']);
        Route::post('pages/sync-routes', [PageController::class, 'syncRoutes']);
        Route::get('pages/{routeName}', [PageController::class, 'show'])->where('routeName', '.*');
        Route::put('pages/{routeName}', [PageController::class, 'update'])->where('routeName', '.*');
        Route::post('pages/{routeName}/preview-token', [PageController::class, 'previewToken'])->where('routeName', '.*');
        Route::post('pages/{routeName}/upload', [UploadController::class, 'store'])->where('routeName', '.*');
        Route::delete('pages/{routeName}/upload', [UploadController::class, 'destroy'])->where('routeName', '.*');

        Route::get('product-categories', [AdminProductCategoryController::class, 'index']);
        Route::post('product-categories', [AdminProductCategoryController::class, 'store']);
        Route::put('product-categories/{productCategory}', [AdminProductCategoryController::class, 'update']);
        Route::delete('product-categories/{productCategory}', [AdminProductCategoryController::class, 'destroy']);

        Route::get('products', [AdminProductController::class, 'index']);
        Route::post('products', [AdminProductController::class, 'store']);
        Route::get('products/{product}', [AdminProductController::class, 'show']);
        Route::put('products/{product}', [AdminProductController::class, 'update']);
        Route::delete('products/{product}', [AdminProductController::class, 'destroy']);
        Route::post('products/{product}/images', [AdminProductController::class, 'uploadImage']);
        Route::delete('products/{product}/images/{image}', [AdminProductController::class, 'destroyImage']);

        Route::get('orders/pending-count', [AdminOrderController::class, 'pendingCount']);
        Route::get('orders', [AdminOrderController::class, 'index']);
        Route::get('orders/{order}', [AdminOrderController::class, 'show']);
        Route::patch('orders/{order}', [AdminOrderController::class, 'update']);
        Route::delete('orders/{order}', [AdminOrderController::class, 'destroy']);
    });
});
