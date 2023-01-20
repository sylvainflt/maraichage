<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [\App\Http\Controllers\RendezvousController::class, 'index']);
Route::get('/jour', [\App\Http\Controllers\RendezvousController::class, 'getJour']);
Route::post('/rendezvous', [\App\Http\Controllers\RendezvousController::class, 'getRendezvousToday']);
Route::post('/jourPrecedent', [\App\Http\Controllers\RendezvousController::class, 'getJourPrecedent']);
Route::post('/jourSuivant', [\App\Http\Controllers\RendezvousController::class, 'getJourSuivant']);