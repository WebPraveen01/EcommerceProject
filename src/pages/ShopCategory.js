import React, {useContext} from "react";
import './CSS/ShopCategory.css';
import {ShopContext} from '../context/ShopContext';
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from "../components/item/Item";
import footer_logo from '../components/assets/logo_big.png'
import instagram_icon from '../components/assets/instagram_icon.png';
import pinterest_icon from '../components/assets/pintester_icon.png';
import whatsapp_icon from '../components/assets/whatsapp_icon.png';

const ShopCategory = (props) => {
    const {all_product} = useContext(ShopContext);
    return(
        <>
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt=""/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
            </div>
            <div className="shopcategory-sort">
                Sort by <img src={dropdown_icon} alt=""/>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category == item.category){
                        return(
                            <Item
                            key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                          />
                        )
                    }
                    else{
                        return null;
                    }
                })}
            </div>
            <div className="shopcatrgory-loadmore">
                Explore More
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
    </>
    )
}

export default ShopCategory;