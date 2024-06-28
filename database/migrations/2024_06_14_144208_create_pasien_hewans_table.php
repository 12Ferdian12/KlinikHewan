<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pasien_hewan', function (Blueprint $table) {
            $table->id('pasien_id');
            $table->string('nama');
            $table->char('jenis', 1);
            $table->string('ras');
            $table->integer('usia');
            $table->unsignedBigInteger('pemilik_id');
            $table->foreign('pemilik_id')->references('pemilik_id')->on('pemilik')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pasien_hewan');
    }
};
