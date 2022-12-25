import React from 'react';
import regstyles from '../styles/Register.module.css'
import Navbar from './navbar';

const Signin = () => {
    return (
        <div>
            <Navbar/>
                <div className={regstyles.wrapper}>
                    <div className={regstyles.formcont}>
                        <form action="">
                            <div>
                                <div>
                                    <label htmlFor="">Username</label>
                                </div>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="">Password</label>
                                </div>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className={regstyles.regbtn}>
                                <button >Register</button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );

}

export default Signin;
