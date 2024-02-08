import React, { useEffect } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import product1 from '../assets/product_1.png'
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ProductDisplay = (props) => {
  const { product, addToCart } = props;

  
  
  const onHandleClick = async() =>{ 

   const body ={
      id:product.id,
      name:product.name,
      catagory:product.catagory,
    };
    try{
    const response = await axios.post('http://localhost:5000/api/cart/addToCart',body);
    console.log("response",response);
    toast.success("Product added to cart!");
    }catch(error){
      console.log(error);
    }
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {/* <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" /> */}
        </div>
        <div className="procustdisplay-img">
          <img className="productdisplay-main-img" src={product1} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdiplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip
        </div>
        <div className="productdisplay-right-size">
          <label>Select a size:</label>
          <select name="cars" id="cars">
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>
        </div>
        <button className = "cart" onClick={onHandleClick}>Add to Cart</button>
        <p className="productdisplay-right-category"><span>Category: </span>Women, T-Shirts, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags: </span>Mordern, Latest</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDisplay;