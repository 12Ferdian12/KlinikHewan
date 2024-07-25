<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function auth(Request $request){

        $username = $request->username;
        $password = $request->password;

        if($username == "admin" && $password == "admin"){
            return redirect()->route('home');
        } 
        return redirect()->route('login');
    }
}
