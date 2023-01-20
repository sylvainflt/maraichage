import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AjoutRDV from './AjoutRDV';

const Rendezvous = () => {

    const [jour, setJour] = useState("")
    const [rendezvous, setRendezvous] = useState([])

    const [debut, setDebut] = useState("")
    const [fin, setFin] = useState("")
    const [client, setClient] = useState("")

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

    const ajouterRDV = async (e) => {

        e.preventDefault()
        const formData = new FormData()
        formData.append('jour',jour)
        formData.append('debut',debut)
        formData.append('fin',fin)
        formData.append('client',client)

        await axios.post("/ajoutRDV", formData)
        getRendezvous()
    }

    return(
        <div className='container text-center'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>

                    <h2 className='text-center mt-4 mb-4'>Rendez vous</h2>                    
                        
                    <div className='bg-secondary p-2 text-white d-flex justify-content-between'>
                        <button className='btn btn-outline-primary' onClick={jourPrecedent}>précédent</button>
                        <h3>{jour}</h3>
                        <button className='btn btn-outline-primary' onClick={jourSuivant}>suivant</button>
                    </div>

                    <table className="table table-bordered border-primary table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Début</th>
                            <th scope="col">Fin</th>
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
                    <form>
                        <div>
                            
                            <span>Début : </span>
                        
                            <input type="time" value={debut} onChange={(event)=>{setDebut(event.target.value)}}/>  
                        
                            <span>Fin : </span>
                        
                            <input type="time" value={fin} onChange={(event)=>{setFin(event.target.value)}}/>  
                        
                            <span>Client : </span>
                        
                            <input type="text" size="12" value={client} onChange={(event)=>{setClient(event.target.value)}}/>  
                        
                            <button className='btn btn-outline-primary' onClick={(event)=>ajouterRDV(event)}>Ajouter</button>    
                                                                                    
                        </div>
                    </form>
                </div>
            </div>    
        </div>        
    )
}

export default Rendezvous