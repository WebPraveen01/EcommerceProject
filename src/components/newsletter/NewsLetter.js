import React from "react";
import './NewsLetter.css'
const NewsLetter = () => {
    return(
        <div className="newsletter">
            <h1>Get Exclusive Offers on your mail</h1>
            <p>Subscribe to our Newsletter and stay updated</p>
            <div>
                <input type="email" placeholder="Enter your email address"/>
                <button>Subscribe</button>
            </div>
        </div>
    )
}
export default NewsLetter;