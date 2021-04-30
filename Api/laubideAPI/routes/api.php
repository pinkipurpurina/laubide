<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('platos', 'App\Http\Controllers\PlatosController@index');
Route::get('platos/{plato}', 'App\Http\Controllers\PlatosController@show');
Route::post('platos', 'App\Http\Controllers\PlatosController@store');
Route::put('platos/{plato}', 'App\Http\Controllers\PlatosController@update');
Route::delete('platos/{plato}', 'App\Http\Controllers\PlatosController@delete');
