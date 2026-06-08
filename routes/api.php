<?php

use App\Http\Controllers\Api\V1\Admin\AnalyticsController as AdminAnalyticsController;
use App\Http\Controllers\Api\V1\Admin\AuthController;
use App\Http\Controllers\Api\V1\Admin\PageController;
use App\Http\Controllers\Api\V1\Admin\UploadController;
use App\Http\Controllers\Api\V1\Analytics\EventController;
use App\Http\Controllers\Api\V1\ContactController;
use App\Http\Controllers\Api\V1\PageController as PublicPageController;
use App\Http\Controllers\Api\V1\Analytics\HealthController;
use App\Http\Middleware\EnsureAnalyticsEnabled;
use App\Http\Middleware\ValidateAnalyticsIngestKey;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->middleware(['web'])->group(function () {
    Route::get('pages/{routeName}', [PublicPageController::class, 'show'])->where('routeName', '.*');

    Route::post('contact', [ContactController::class, 'store'])->middleware('throttle:contact-form');

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
    });
});
