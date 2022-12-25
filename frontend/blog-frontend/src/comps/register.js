import React from 'react';
import regstyles from '../styles/Register.module.css'
import Navbar from './navbar';

const Register = () => {
    return (
        <div>
            <Navbar/>
                <div className={regstyles.wrapper}>
                     <div className={regstyles.formcont}>
                        <form action="">

                            <div>
                                <div>
                                    <label htmlFor="">First Name</label>
                                </div>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>

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
                                    <label htmlFor="">Email</label>
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
                            <div>
                                <div>
                                    <label htmlFor="">Confirm password</label>
                                </div>
                                <div>
                                    <input type="text" />
                                </div>
                            </div>
                
                            <div className={regstyles.regbtn}>
                                <button >Register</button>
                                <p>Already registered? <b>signin</b></p>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}

export default Register;
