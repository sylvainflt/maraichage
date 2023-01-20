<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RendezVous extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'rendez_vous';

    protected $fillable = [
        'dateRDV',
        'heureDebut',
        'heureFin',
        'Client'
    ];
}
