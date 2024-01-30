import React,{useContext, useState} from "react";
import { ShopContext } from '../context/ShopContext';
import { useParams } from "react-router-dom";
import ProductDisplay from "../components/ProductDisplay/ProductDisplay";
const Product = () => {

    const {all_product} = useContext(ShopContext);
     const{productId} = useParams(); 
     const product = all_product.find((e) => e.id === Number(productId))

     const [cart,setCart] = useState([]);
     const addToCart =(data) =>{

        setCart((prev) => ({...prev, data}))
        {console.log('cart',cart)}
     }
    return(
     <div>
     {console.log('cart',cart)}
      <ProductDisplay product ={product} addToCart={addToCart}/>
      <h1>This is product components</h1>
     </div>
    )
}

export default Product;