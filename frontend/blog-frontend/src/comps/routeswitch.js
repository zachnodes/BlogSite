import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './home';
import App from '../App';
import Register from './register';
import Signin from './signin';

const Routeswitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/signin' element={<Signin/>}/>
            </Routes>

        </BrowserRouter>
 
    );
}

export default Routeswitch;
