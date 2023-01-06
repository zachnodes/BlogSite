import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import {Link} from 'react-router-dom'
import navbar from '../styles/Nav.module.css'

const Navbar = () => {
    const {state} = useAuthContext()
    const [signin, setsignin] = useState(state.user);
    useEffect(() => {
        setsignin(state.user)
    }, [state.user])

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
                    <div className={navbar.createpost}>Log out</div>
                    <div className={navbar.greeting}>Hello {signin && signin.user.username} </div>
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
                <Link to={'/register'}>
                    <div className={navbar.register}>Register</div>
                </Link>
                <Link to={'/signin'}>
                    <div className={navbar.signin}>Sign in</div>
                </Link>
                </div> 

            </nav>
        </div>
        )
    }
}

export default Navbar;
