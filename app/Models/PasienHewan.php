<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PasienHewan extends Model
{
    use HasFactory;    
    protected $table = 'pasien_hewan';
    protected $primaryKey = 'pasien_id';
    protected $fillable = ['nama','jenis','ras','usia','pemilik_id'];
}
