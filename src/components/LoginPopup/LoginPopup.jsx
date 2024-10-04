import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [isForgetPassword, setIsForgetPassword] = useState(false); // New state for forget password

  const handleForgetPasswordSubmit = (e) => {
    e.preventDefault();
    // Handle the password recovery process here (e.g., send recovery email)
    alert("Recovery email sent!");
    setIsForgetPassword(false); // Return to login screen after submission
  };

  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{isForgetPassword ? "Forget Password" : currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
        </div>

        <div className="login-popup-inputs">
          {/* Render Forget Password Form */}
          {isForgetPassword ? (
            <>
              <input type="email" placeholder='Enter your email' required />
              <button type="submit" onClick={handleForgetPasswordSubmit}>Send Recovery Email</button>
            </>
          ) : (
            <>
              {/* Show 'Your name' input only if the state is 'Sign Up' */}
              {currState === "Sign Up" && (
                <>
                  <input type="text" placeholder='Your name' required />
                  <input type="email" placeholder='Your email' required />
                  <input type="password" placeholder='Password' required />
                  <input type="password" placeholder='Confirm Password' required />
                </>
              )}
              {currState === "Login" && (
                <>
                  <input type="email" placeholder='Your email' required />
                  <input type="password" placeholder='Password' required />
                </>
              )}
              <button type="submit">
                {currState === "Sign Up" ? "Create account" : "Login"}
              </button>

              <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
              </div>

              {currState === "Login" && (
                <p className="forgot-password">
                  <span onClick={() => setIsForgetPassword(true)}>Forget Password?</span>
                </p>
              )}
            </>
          )}
        </div>

        {!isForgetPassword && (
          <div>
            {currState === "Login" ? (
              <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
            ) : (
              <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
            )}
          </div>
        )}

        {/* Back to login link in the Forget Password view */}
        {isForgetPassword && (
          <p>
            <span onClick={() => setIsForgetPassword(false)}>Back to Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
