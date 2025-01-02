<?php
use App\Http\Controllers\UserController;
use App\Models\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

use Inertia\Inertia;

Route::get('/', function () {
    redirect()->route('login');
});

Route::get('/login', function () {
    return Inertia('Auth/Login');
})->name('login');


Route::get('/home', function () {
    return Inertia('Home');
})->name('home');

Route::prefix('api')->group(function () {
    Route::post('login', [UserController::class, 'auth'])->name('auth');
    Route::group(['middleware' => ['jwt.verify']], function() {
        Route::post('logout', [UserController::class, 'logout']);
    });
});