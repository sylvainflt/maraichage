import axios from 'axios';
import React, { useState } from 'react';

const AjoutRDV = () => {

    const [debut, setDebut] = useState("")
    const [fin, setFin] = useState("")
    const [client, setClient] = useState("")

    const ajouterRDV = async (e) => {

        e.preventDefault()
        const formData = new FormData()
        formData.append('dateRDV',jour)
        formData.append('debut',debut)
        formData.append('fin',fin)
        formData.append('client',client)

        await axios.post("/ajoutRDV", formData)
        
    }

    return(
        <div className='container text-center'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>
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

export default AjoutRDV