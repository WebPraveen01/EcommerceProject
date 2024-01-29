import React from "react";
import './Navbar.css';
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li><Link to="/" className="link-style">Shop</Link>
                    {/* <hr /> */}
                </li>
                <li><Link to="/mens" className="link-style">Men</Link></li>
                <li><Link to="/womens" className="link-style">Women</Link></li>
                <li><Link to="/kids" className="link-style">Kids</Link></li>
            </ul>
            <div className="nav-login-cart">
                <button> <Link to="/Login" className="link-style">Login</Link> </button>
                <img src={cart_icon} alt=""/>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar