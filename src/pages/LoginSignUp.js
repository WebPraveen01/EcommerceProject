import React, { useState } from "react";
import '/Users/praveenpal/Downloads/mernBkp(1)/src/pages/CSS/LoginSignup.css';
import axios from "axios";

const LoginSignUp = () => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
        role: ""
    });

    const handeleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    const handleClick = async () => {
      
        const response = await axios.post('http://localhost:5000/api/users/register',userDetails);
        console.log(response);
        
    }
    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>SIGN UP</h1>
                <div className="loginsignup-fields">
                    <input value={userDetails.email} name="email" type="email" onChange={handeleInputChange} placeholder="Enter Your email" />
                    <input value={userDetails.password} name="password" type="current-password" onChange={handeleInputChange} placeholder="Enter Your password" />
                    <input value={userDetails.role} name="role" type="text" onChange={handeleInputChange} placeholder="Enter Your role" />
                </div>
                <button onClick={handleClick}>Register</button>
                <p className="loginsignup-login">Already have an account?</p>
                <button className="login-button">Login</button>

            </div>
        </div>
    )
}

export default LoginSignUp;