<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('site_pages')) {
            return;
        }

        Schema::create('site_pages', function (Blueprint $table) {
            $table->id();
            $table->string('route_name')->unique();
            $table->string('path');
            $table->string('title');
            $table->text('meta_description')->nullable();
            $table->string('page_type', 32)->default('product');
            $table->string('status', 32)->default('published');
            $table->string('locale', 8)->default('en');
            $table->json('payload')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('site_pages');
    }
};
