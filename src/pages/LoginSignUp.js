import React from "react";
import './CSS/LoginSignup.css';

const LoginSignUp = () => {
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>SIGN UP</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your name"/>
                    <input type="email" placeholder="Your email"/>
                    <input type="password" placeholder="Your password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account?</p><button className="login-button">Login</button>
                
            </div>
        </div>
    )
}

export default LoginSignUp;