import React from 'react';
import './Signup1.css';
const SignUpForm1 = () => {
    return (
        
        <div class="container">
        <div class="row">
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-title">
                    SignUp Form 1
                </div>

                <div class="col-lg-12 ">
                    <div class="col-lg-12 ">
                        <form>
                            <div class="form-group">
                                <input type="text" placeholder='Write Fast Name' class="form-control" />
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder='Write Last Name' class="form-control" />
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
            {/* <div class="col-lg-12 loginbttm">
                  <p>Already have an account?<a href="/login">Login Here</a></p>
            </div> */}
        </div>
        </div>


 );
};

export default SignUpForm1;