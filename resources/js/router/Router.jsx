import React from "react";
import {Routes, Route} from 'react-router-dom'

import Index from "../components/Index";
import NotFound from "../components/NotFound";

const Router = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={ <Index /> } />
                <Route path="/*" element={ <NotFound /> } />
            </Routes>
        </div>
    )

}

export default Router