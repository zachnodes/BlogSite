import React from 'react';
import Preview from './preview';
import homestyle from '../styles/Home.module.css'
import Navbar from './navbar';
import Register from './register';
import regstyles from '../styles/Register.module.css'
import Signin from './signin';

const Home = () => {
    return (
        <div>
        
            {/* <div className={regstyles.regcont}>
                <Signin/>
                <Register/>
            </div> */}

            {/* <div className={homestyle.cardcont}>
                <Preview/>
                <Preview/>
                <Preview/>
            </div> */}
        </div>
    );
}

export default Home;
