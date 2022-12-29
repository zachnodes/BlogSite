import React from 'react';
import { useState } from 'react';
import navbar from '../styles/Nav.module.css'

const Navbar = () => {
    const [signin, setsignin] = useState(false);
    if (signin) {
        return (
        <div>
            <nav className={navbar.navbar}>
                <div className={navbar.logoandsearch}>
                    <div className={navbar.logo}>Logo</div>
                    <div className={navbar.searchbar}>
                        <input placeholder='Search'></input>
                    </div>
                </div>

                <div className={navbar.createandgreeting}>
                    <div className={navbar.createpost}>Create Post</div>
                    <div className={navbar.greeting}>Hello, User</div>
                </div>
            </nav>
        </div>
        )
    } else {
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
        )
    }
}

export default Navbar;
