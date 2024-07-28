import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const supcart=()=>{
const [cart,setCart]= useState([]);
const navigate = useNavigate();
async function rproducts(){
    let res = await fetch('http://localhost:3000/cartprods')
	setCart(await res.json());
	console.log(cart);
	}
    useEffect(()=>{
        rproducts();
    },[]);
const isCartEmpty = cart.length
useEffect(() => {
    if (isCartEmpty) {
      navigate('/Cart');
    } else {
      navigate('/CartWithItems');
    }
  }, [isCartEmpty, navigate]);
}
export default supcart
