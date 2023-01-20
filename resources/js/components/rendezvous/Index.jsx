import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Rendezvous = () => {

    const [jour, setJour] = useState("")
    const [rendezvous, setRendezvous] = useState([])

    useEffect(()=>{
        getJour()
    },[])

    useEffect(()=>{
        getRendezvous()
    },[jour])

    const getJour = async () => {
        await axios.get("/jour")
            .then(({data})=>{
                setJour(data.jour)
            })
    }

    const getRendezvous = async () => {
        await axios.post("/rendezvous",{jour})
            .then(({data})=>{
                setRendezvous(data.rendezvous)
            })
    }

    const jourPrecedent = async () => {                
        await axios.post("/jourPrecedent",{jour})
            .then(({data})=>{
                setJour(data.jour)
            })
    }
    const jourSuivant = async () => {                
        await axios.post("/jourSuivant",{jour})
            .then(({data})=>{
                setJour(data.jour)
            })
    }

    return(
        <div className='container text-center mt-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>

                    <h2 className='text-center mb-4'>Rendez vous</h2>                    
                        
                    <div className='bg-secondary p-2 text-white d-flex justify-content-between'>
                        <button className='btn btn-outline-primary' onClick={jourPrecedent}>précédent</button>
                        <h3>{jour}</h3>
                        <button className='btn btn-outline-primary' onClick={jourSuivant}>suivant</button>
                    </div>

                    <table className="table table-bordered border-primary table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Heure de début</th>
                            <th scope="col">Heure de fin</th>
                            <th scope="col">Client</th>
                            </tr>
                        </thead>
                        <tbody>    
                        {
                            rendezvous.length > 0 && (
                                rendezvous.map((item, key)=>(
                                
                                    <tr key={key}>
                                        <td>{item.id}</td>
                                        <td>{item.heureDebut}</td>
                                        <td>{item.heureFin}</td>
                                        <td>{item.Client}</td>                                                                                                                                
                                    </tr>    
                                )
                            ))
                        }
                    
                        </tbody>
                    </table>
                </div>
            </div>    
        </div>
        
    )
}

export default Rendezvous