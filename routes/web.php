<?php

use Illuminate\Support\Facades\Route;

$adminPath = trim((string) config('cms.admin_path', 'windevadmin'), '/');

if ($adminPath !== '') {
    Route::view("/{$adminPath}/{any?}", 'admin')->where('any', '.*');
}

Route::view('/{any?}', 'app')->where('any', '.*');
