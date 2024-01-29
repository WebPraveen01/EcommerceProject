import React from "react";
import './Hero.css';
import arrow_icon from '../assets/arrow.png';
const Hero = () => {
    return(
        <div className="hero">
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hand-hand-icon">
                        <p>New</p>
                        {/* <img className="hand-style" src={hand_icon} alt=""/> */}
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>
            <div className="hero-right">
                {/* <img src={hero_image} alt=""/> */}
            </div>
        </div>
    )
}

export default Hero;