import React from 'react';
import Rendezvous from './rendezvous/Index';
import Header from './Header';
import Title from './Title';

const Index = () => {

    return(
        <div className='vh-100'>
            <Header />
            <Title />
            <Rendezvous />
        </div>
    )
}

export default Index