<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Platos extends Model
{
    use HasFactory;

    protected $fillable = [
        'id',
        'nombre',
        'descripcion',
        'precio',
        'ingredientes',
        'categoria',
        'dieta_tipo',
        'etiquetas',
        'imagen'
    ];
}
