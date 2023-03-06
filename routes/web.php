<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\CareerController;

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

Route::get('/', [AuthenticatedSessionController::class, 'create']);

Route::get('/dashboard', [CareerController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

    Route::get('careers', [CareerController::class, 'index'])->name('career');
    Route::get('career/create', [CareerController::class, 'create'])->name('career.create');
    Route::post('career/create', [CareerController::class, 'store'])->name('career.store');
    Route::get('career/{id}', [CareerController::class, 'view'])->name('career.view');
    Route::get('career/edit/{id}', [CareerController::class, 'edit'])->name('career.edit');
    Route::get('career/delete/{id}', [CareerController::class, 'delete'])->name('career.delete');
    Route::post('career/edit/{id}', [CareerController::class, 'update'])->name('career.update');
    Route::post('career/delete/{id}', [CareerController::class, 'remove'])->name('career.remove');

require __DIR__.'/auth.php';
