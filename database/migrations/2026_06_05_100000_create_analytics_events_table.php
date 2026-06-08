<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('analytics_events')) {
            return;
        }

        Schema::create('analytics_events', function (Blueprint $table) {
            $table->id();
            $table->uuid('visitor_id');
            $table->uuid('session_id');
            $table->string('type', 32);
            $table->string('path')->nullable();
            $table->string('route_name')->nullable();
            $table->string('section', 64)->nullable();
            $table->string('referrer', 2048)->nullable();
            $table->json('meta')->nullable();
            $table->unsignedInteger('duration_seconds')->nullable();
            $table->unsignedInteger('page_count')->nullable();
            $table->timestamp('occurred_at');
            $table->timestamps();

            $table->index(['occurred_at', 'type']);
            $table->index(['route_name', 'occurred_at']);
            $table->index(['section', 'occurred_at']);
            $table->index(['visitor_id', 'occurred_at']);
            $table->index(['session_id', 'occurred_at']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('analytics_events');
    }
};
