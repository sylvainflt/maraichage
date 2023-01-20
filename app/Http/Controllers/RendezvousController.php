<?php

namespace App\Http\Controllers;

use App\Models\RendezVous;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class RendezvousController extends Controller
{

    public function index(){
        
        return view('premierePage');
    }

    public function getJourEcrit(){
        
        $datetime = new \DateTime();

        $numeroJour = $datetime->format('d'); 
        $numeroMois = $datetime->format('m'); 
        $annee = $datetime->format('Y');       

        $moisTab = array("Janvier", "Fevrier", "Mars",
                  "Avril","Mai", "Juin", 
                  "Juillet", "Août","Septembre",
                  "Octobre", "Novembre", "Decembre");
        $joursTab = array("Dimanche", "Lundi", "Mardi",
                    "Mercredi", "Jeudi", "Vendredi",
                    "Samedi");

        $jourMot = $joursTab[date("w", mktime(0, 0, 0, $numeroMois, $numeroJour, $annee))];
        $moisMot = $moisTab[date("n", mktime(0, 0, 0, $numeroMois, $numeroJour, $annee))-1];
        
        $jourEnCours = $jourMot." ".$numeroJour.($numeroJour==1 ? "er":" ").
        $moisMot." ".$annee;        
        
        return response()->json([
            'jour' => $jourEnCours
        ]);
    }

    public function getJour(){
        
        $datetime = new \DateTime();
        $jour = $datetime->format('d-m-Y');
        
        return response()->json([
            'jour' => $jour
        ]);
    }
    
    public function getJourPrecedent(Request $request){

        $jourEnCours = date('d-m-Y', strtotime('-1 day', strtotime($request->input('jour'))));

        return response()->json([
            'jour' => $jourEnCours
        ]);
    }

    public function getJourSuivant(Request $request){
       
        $jourEnCours = date('d-m-Y', strtotime('+1 day', strtotime($request->input('jour'))));

        return response()->json([
            'jour' => $jourEnCours
        ]);
    }

    public function getRendezvous(){
               
        return response()->json([
            'rendezvous' => RendezVous::all()
        ]);
    }

    public function getRendezvousToday(Request $request){
               
        // 20-01-2023
        $dateJour = $request->input('jour');
        // 2023-01-20        
        $dateJourInverse = date('Y-m-d', strtotime($dateJour));

        $rendezvousToday = 
            DB::table('rendez_vous')->where('dateRDV', $dateJourInverse)->get();
        /*
        $rendezvousToday = 
            DB::select('SELECT * FROM rendez_vous WHERE heureDebut like ?', [$dateJour]);
        */    
        return response()->json([
            'rendezvous' => $rendezvousToday
        ]);
    }
}
