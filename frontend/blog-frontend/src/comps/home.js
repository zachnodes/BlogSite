import React from 'react';
import Preview from './preview';
import homestyle from '../styles/Home.module.css'
import Navbar from './navbar';

const Home = () => {
    return (
        <div>
            <div>
                <Navbar/>
            </div>

            <div className={homestyle.cardcont}>
                <Preview/>
                <Preview/>
                <Preview/>
            </div>
        </div>
    );
}

export default Home;
