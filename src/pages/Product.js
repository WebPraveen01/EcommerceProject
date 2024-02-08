import React,{useContext, useEffect, useState} from "react";
import { ShopContext } from '../context/ShopContext';
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
import axios from "axios";
const Product = () => {
   const[productDetails,setProductDetails] = useState([]);

    const {all_product} = useContext(ShopContext);
     const{productId} = useParams(); 
    
     const [cart,setCart] = useState([]);
     const addToCart =(data) =>{
        setCart((prev) => ({...prev, data}))
        {console.log('cart',cart)}
     }
     const fetchData = async ()=>{
        const response = await axios.get('http://localhost:5000/api/product/getAllProducts');
        const product = response.data.find((e) => e.id === Number(productId))
        console.log("Response",response);
        setProductDetails(product);
     }
     useEffect(()=>{
        fetchData();
     },[])
    return(
     <div>
     {console.log('productDetails',productDetails)}
      <ProductDisplay product ={productDetails} addToCart={addToCart}/>
      <h1>This is product components</h1>
     </div>
    )
}

export default Product;