import React from 'react';
import './Signup2.css';
const SignUpForm2 = () => {
    return (
       
        <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-title">
                    SignUp Form 2
                </div>

                <div class="col-lg-12 ">
                    <div class="col-lg-12 ">
                        <form>
                           
                            <div class="form-group d-flex">
                            <div class="form-group">
                                <input type="text" placeholder='+880' class="form-control tel-num" />
                            </div>
                                <input type="text" placeholder='1xxxxxxxxxx' class="form-control" />
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder='Write Email Addresss' class="form-control" />
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>
        </div>

    );
};

export default SignUpForm2;