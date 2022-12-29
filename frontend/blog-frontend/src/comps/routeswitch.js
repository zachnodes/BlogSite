import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import App from '../App';
import Register from './register';
import Signin from './signin';
import Newpost from './newpost';
import Viewpost from './viewpost';

const Routeswitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/register' element={<Register/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/new' element={<Newpost/>}/>
                <Route path='/articles/:slug' element={<Viewpost/>}/>
            </Routes>

        </BrowserRouter>
 
    );
}

export default Routeswitch;
