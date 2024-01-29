import React from "react";
import "./NewCollection.css";
import new_collections from "../assets/new_collections";
import Item from "../item/Item";
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png';
import pinterest_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';

const NewCollection = () => {
  return (
    <div className="new-collections">
      <h1 className="collection-heading">NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
      <div className="newsletter">
        <h1 className="news-header mt-5">Get Exclusive Offers on your mail</h1>
        <p>Subscribe to our Newsletter and stay updated</p>
        <div className="email-input">
          <input type="email" placeholder="Enter your email address" />
          <button className="sub-btn">Subscribe</button>
        </div>
      </div>
      <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
              <li>Company</li>
              <li>Products</li>
              <li>Offices</li>
              <li>About</li>
              <li>Contact</li>
            </ul>

            <div className="footer-social-icon">
              <div className="footer-icons-container">
                <img src={instagram_icon} alt=""/>
              </div>
              <div className="footer-icons-container">
                <img src={pinterest_icon} alt=""/>
              </div>
              <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=""/>
              </div>
              
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2023. All rights reserved.</p>
            </div>

        </div>
    </div>
  );
};
export default NewCollection;
