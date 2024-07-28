import React from 'react';
import './Login.css'; // Assuming you have defined styles in login.css
import { Link } from "react-router-dom";

import  { useState } from 'react';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpBar, setShowOtpBar] = useState(false);
  const [showPopUp, setShowPopUp] = useState(false);

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleSendOtp = () => {
    if (mobileNumber.length === 10) {
      setShowOtpBar(true);
      setShowPopUp(true);
    } else {
      alert('Please enter a valid mobile number');
    }
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className='loginBox'>
      <div className='title'>Hi There!</div><br/>
      <div className='signin'>
        <label className='text'>SignIn Or SignUp</label><br/><br/>
        <div className='box'>
          <input className='box' type='number' placeholder='Mobile Number*' value={mobileNumber} onChange={handleMobileNumberChange} />
        </div>
        {showOtpBar && (
          <div className='otp-bar'>
            <div className='box'>
              <input className='box' type='number' placeholder='Enter OTP*' value={otp} onChange={handleOtpChange} />
            </div>
            <button onClick={() => alert('OTP verified')}>Verify OTP</button>
          </div>
        )}
        <button onClick={handleSendOtp}>Send OTP</button>
      </div><br/>
      <div className='terms'>
        <input type='checkbox' id='termsCheckbox' />
        <label htmlFor='termsCheckbox'>
          By proceeding, I agree to Terms of Services & Privacy policy.
        </label>   
      </div>
      {showPopUp && (
        <div className='pop-up'>
          <p>OTP sent to your mobile number {mobileNumber}</p>
          <button onClick={handleClosePopUp}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Login;