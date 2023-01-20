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

    public function getJour(){
        /*
        $mois = array("Janvier", "Fevrier", "Mars",
                  "Avril","Mai", "Juin", 
                  "Juillet", "Août","Septembre",
                  "Octobre", "Novembre", "Decembre");
        $jours= array("Dimanche", "Lundi", "Mardi",
        "Mercredi", "Jeudi", "Vendredi",
        "Samedi");
        
        $jourEnCours = $jours[date("w")]." ".date("j").(date("j")==1 ? "er":" ").
        $mois[date("n")-1]." ".date("Y");
        */
        $datetime = new \DateTime();
        $jour = $datetime->format('Y-m-d');
        
        return response()->json([
            'jour' => $jour
        ]);
    }
    
    public function getJourPrecedent(Request $request){

 /*       $moisList = collect(["Janvier", "Fevrier", "Mars",
                  "Avril","Mai", "Juin", 
                  "Juillet", "Août","Septembre",
                  "Octobre", "Novembre", "Decembre"]);
        $joursList= collect(["Dimanche", "Lundi", "Mardi",
                    "Mercredi", "Jeudi", "Vendredi",
                    "Samedi"]);

        $jourTab = explode(' ', $request->input('jour'));
        $jour = $jourTab[0];
        $numeroJour = $jourTab[1];
        $mois = $jourTab[2];
        $annee = $jourTab[3];
        
        $jourEnCours = $jour." ".$numeroJour.($numeroJour==1 ? "er":" ").
        $mois." ".$annee;*/
/*
$jourEnCours = $jours[date("w")-1]." ".date("j").(date("j")==1 ? "er":" ").
$mois[date("n")-1]." ".date("Y");*/

        $jourEnCours = date('Y-m-d', strtotime('-1 day', strtotime($request->input('jour'))));

        return response()->json([
            'jour' => $jourEnCours
        ]);
    }

    public function getJourSuivant(Request $request){
       
        $jourEnCours = date('Y-m-d', strtotime('+1 day', strtotime($request->input('jour'))));

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
                
        $dateJour = $request->input('jour').'%';
        
        /*$rendezvousToday = 
            DB::table('rendez_vous')->where('heureDebut', '2023%')->get();*/

        $rendezvousToday = 
            DB::select('SELECT * FROM rendez_vous WHERE heureDebut like ?', [$dateJour]);
            
        return response()->json([
            'rendezvous' => $rendezvousToday
        ]);
    }
}
