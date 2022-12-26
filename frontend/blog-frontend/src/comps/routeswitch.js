import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home';
import App from '../App';
import Register from './register';
import Signin from './signin';
import Newpost from './newpost';

const Routeswitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/articles' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/articles/new' element={<Newpost/>}/>
            </Routes>

        </BrowserRouter>
 
    );
}

export default Routeswitch;
