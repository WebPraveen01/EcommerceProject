import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart = () => {
    const [cartDetails,setCartDetails] =  useState([]);

    const fetchCartData = async () => {
        const response = await axios.get('http://localhost:5000/api/cart/getCartDetails');
        setCartDetails(response.data);
        console.log("cartData", response);
    }

    useEffect(() => {
        fetchCartData();
    }, [])

    return(<>
    {console.log("cartDetails",cartDetails)}
    {cartDetails.map((item,index)=>{
        return(
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          {item.catagory}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>)
    })}
        </>
    )
}

export default Cart;