<?php

namespace App\Http\Controllers;

use App\Models\RendezVous;
use Illuminate\Http\Request;

class RendezvousController extends Controller
{
    public function index(){
               
        return view('premierePage');
    }

    public function getRendezvous(){
               
        return response()->json([
            'rendezvous' => RendezVous::all()
        ]);
    }
}
