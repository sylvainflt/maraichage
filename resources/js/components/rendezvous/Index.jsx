import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Rendezvous = () => {

    const [rendezvous, setRendezvous] = useState([])

    useEffect(()=>{
        getRendezvous()
    })

    const getRendezvous = async () => {
        await axios.get("/rendezvous")
            .then(({data})=>{
                setRendezvous(data.rendezvous)
            })
    }

    return(
        <div className='container text-center mt-4'>
            <div className='row justify-content-center'>
                <div className='col-md-8'>

                    <h2 className='text-center mb-4'>Rendez vous</h2>                    
                        
                    <div className='bg-secondary p-2 text-white'>
                        <h3>Lundi</h3>
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