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
                <div className={navbar.logo}><Link to={'/'}>Blogsite</Link></div>
                    {/* <div className={navbar.searchbar}>
                        <input placeholder='Search'></input>
                    </div> */}
                </div>

                <div className={navbar.createandgreeting}>
                    <div className={navbar.createpost}><Link to={'/new'}>Create</Link></div>
                    <div className={navbar.createpost}><Link to={`/${signin.username}`}>Profile</Link></div>
                    <div id={navbar.logout} onClick={() => logout()}>Log out</div>
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
                    <div className={navbar.logo}><Link to={'/'}>Blogsite</Link></div>
  
                        {/* <div className={navbar.searchbar}>
                            <input placeholder='Search'></input>
                        </div> */}
                    </div>

                <div className={navbar.registerandsignin}>
                    <div className={navbar.register}><Link to={'/register'}>Register </Link></div>
                    <div className={navbar.signin}><Link to={'/signin'}>Sign in</Link></div>
                </div> 

            </nav>
        </div>
        )
    }
}

export default Navbar;
