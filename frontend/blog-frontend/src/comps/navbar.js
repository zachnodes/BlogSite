import React from 'react';
import { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import {Link} from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import navbar from '../styles/Nav.module.css'

const Navbar = () => {
    const {user} = useAuthContext()
    const {logout} = useLogout()
    const [signin, setsignin] = useState(user);
    useEffect(() => {
        
        setsignin(user)
    }, [user])

    if (signin) {
        return (
        <div>
            <nav className={navbar.navbar}>
                <div className={navbar.logoandsearch}>
                <Link to={'/'}>
                    <div className={navbar.logo}>Blogsite</div>
                </Link>
                    <div className={navbar.searchbar}>
                        <input placeholder='Search'></input>
                    </div>
                </div>

                <div className={navbar.createandgreeting}>
                <Link to={'/new'}>
                    <div className={navbar.createpost}>Create Post</div>
                </Link>
                    <div className={navbar.createpost}>Profile</div>
                    <div className={navbar.createpost} onClick={() => logout()}>Log out</div>
                    <div className={navbar.greeting}>Hello {signin && signin.username} </div>
                </div>
            </nav>
        </div>
        )
    } else {
        return (
            <div>
                <nav className={navbar.navbar}>
                
                    <div className={navbar.logoandsearch}>
                    <Link to={'/'}>
                        <div className={navbar.logo}>Blogsite</div>
                    </Link>
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
