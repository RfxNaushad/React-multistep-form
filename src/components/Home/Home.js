import React from 'react';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import bodyImage from '../../images/istockphoto-1321277096-612x612 1.png';
import './Home.css';
import SignUpForm1 from '../form/SignUp/SignUpForm1';
import SignUpForm2 from '../form/SignUp/SignUpForm2';
import SignUpForm3 from '../form/SignUp/SignUpForm3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



const Home = () => {

    const [formStep, setFormStep] = useState(0);
    const [pressed, setPressed] = useState(false);


    const completeFormStep = () => {
        setFormStep(current => current + 1)
    }

    const renderButton =() => {
          if(formStep >2){
            return <h1>Congo!</h1>
          }
          else if(formStep === 2){
            return (
                <button onClick={completeFormStep} type="submit"
                class="btn btn-outline-primary">
                   Sign Up
                </button>
            )
          }
          else {
            return (
                <button onClick={completeFormStep} type="submit"
                class="btn btn-outline-primary">
                   Next Step<FontAwesomeIcon icon={faArrowRight} />
                </button>
            )
          }

    }

    const previousStep =() => {
          setFormStep(current => current - 1)
    }

    const renderPrevious = () => {
        if(formStep > 0) {
            return (
                <button onClick={previousStep} type="submit">
                   Back
                </button>
            )
        }

        else if(formStep === 0){
            return (  
            <div class="col-lg-12 loginbttm">
                  <p>Already have an account?<Link to="/login">Login Here</Link></p>
            </div>
            )
        }
    }
    
    return (
        <div>
            <NavBar></NavBar>
            <section>

                <div class="mx-auto row">
                    <div className='col-md-6'>
                        <img src={bodyImage} className="body_img" alt="bodyimage"></img>
                    </div>
                    
                    <div className='col-md-6 text-center login-box login-form p-4'>
                        { formStep === 0 && <SignUpForm1></SignUpForm1> }  
                        { formStep === 1 && <SignUpForm2></SignUpForm2> } 
                        { formStep === 2 && <SignUpForm3></SignUpForm3> }  
                        
                        {renderPrevious()}
                        {renderButton()}

                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;