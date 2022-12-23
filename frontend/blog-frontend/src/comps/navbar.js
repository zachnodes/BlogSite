import React from 'react';
import navbar from '../styles/Nav.module.css'

const Navbar = () => {
    return (
        <div>
            <nav className={navbar.navbar}>
                <div className={navbar.logoandsearch}>
                    <div className={navbar.logo}>Logo</div>
                    <div className={navbar.searchbar}>
                        <input placeholder='Search'></input>
                    </div>
                </div>

                <div className={navbar.registerandsignin}>
                    <div className={navbar.register}>Register</div>
                    <div className={navbar.signin}>Sign in</div>
                </div>
            </nav>
            
        </div>
    );
}

export default Navbar;
