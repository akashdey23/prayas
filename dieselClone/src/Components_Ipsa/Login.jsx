import React from 'react';
import './Login.css'; // Assuming you have defined styles in login.css
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='loginBox'>
      <div className='title'>Hi There!</div><br/>
      <div className='signin'>
        <label className='text'>SignIn Or SignUp</label><br/><br/>
        <div className='box'>
          <input className='box' type='number' placeholder='Mobile Number*' />
        </div> 
      </div><br/>
      <div className='terms'>
        <input type='checkbox' id='termsCheckbox' />
        <label htmlFor='termsCheckbox'>
          By proceeding, I agree to Terms of Services & Privacy policy.
        </label>   
      </div>
    </div>
  );
}

export default Login;
