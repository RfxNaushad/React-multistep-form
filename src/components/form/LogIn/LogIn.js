import React from 'react';
import bodyImage from '../../../images/istockphoto-1321277096-612x612 1.png';
import NavBar from '../../NavBar/NavBar';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
    return (
        <div>
       <NavBar></NavBar>
            <section>

                <div class="mx-auto row">
                    <div className='col-md-6'>
                        <img src={bodyImage} className="body_img" alt="bodyimage"></img>
                    </div>
                    
                    <div className='col-md-6 text-center login-box login-form p-4'>
                        <div class="container">
                            <div class="row">

                            <div class="col-lg-3 col-md-2"></div>

                                <div class="col-lg-6 col-md-8 login-box">
                                    <div class="col-lg-12 login-title">
                                        Login Form
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="col-lg-12">
                                            <form>
                                                <div class="form-group">
                                                    <input type="Email" placeholder='Write Email Address' class="form-control" />
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" placeholder='Write Last Name' class="form-control" />
                                                </div>
                                                <div class="col-lg-12 loginbttm">
                                                    <div class="col-lg-12 login-btm">
                                                        <button type="submit"
                                                            class="btn btn-outline-primary">
                                                            LogIn
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>

                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div class="col-lg-12 col-md-12">
                                <p>Don't have an account?<NavLink to="/home">Sign Up</NavLink>
</p>
                            </div>

                        </div>


                    </div>
                </div>

            </section>
        </div>
           
    );
};

export default LogIn;