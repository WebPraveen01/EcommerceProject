import React from "react";
import './Offer.css';
import exclusive_image from '../assets/exclusive_image.png';


const Offer = () => {
    return(
        <div className="offers">
            <div className="offers-left mt-5">
                <h1>Exclusive Offers For You </h1>
                
                <p>Only on Best Selling Products</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" height={440} className="mt-5"/>
            </div>
        </div>
    )
}
export default Offer;