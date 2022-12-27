import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from '../App';
import Register from './register';
import Signin from './signin';
import Newpost from './newpost';
import Preview from './preview';
import Viewpost from './viewpost';

const Routeswitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/articles/new' element={<Newpost/>}/>
                <Route path='/articles/:id' element={<Viewpost/>}/>
            </Routes>

        </BrowserRouter>
 
    );
}

export default Routeswitch;
