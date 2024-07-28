import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import './Cartw.css';
import axios from 'axios';
const Cartwithitems = () => {
    const [cart,setCart]= useState([]);
    async function rproducts(){
        let res = await fetch('http://localhost:3000/cartprods')
		setCart(await res.json());
		console.log(cart);
	}
    useEffect(()=>{
        rproducts();
    },[]);
     const handleIncrement = (itemId) => {
    setCart((prevCart) => prevCart.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleDecrement = (itemId) => {
    setCart((prevCart) => prevCart.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    ));
  };

  const handleRemove = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  const total = cart.reduce((acc, item) => acc + (Number(item.discountPrice) * Number(item.quantity)), 0);

    return(
        <>
        <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} />
            <div className="cart-item-details">
              <h3>{item.title}</h3>
              <p>Color: {item.pdetails.Color}</p>
              <p>Material: {item.pdetails.Material}</p>
              <p>Item(s): {item.quantity}</p>
            </div>
            <div className="cart-item-controls">
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
              <button onClick={() => handleRemove(item.id)}>🗑️</button>
            </div>
            <div className="cart-item-price">
              <p><s>₹{item.oldprice}</s> ₹{item.newprice}</p>
            </div>
          </div>
        ))
      )}
      <div className="cart-summary">
        <input type="text" placeholder="Apply coupon" />
        <button>Apply</button>
        <p>USE CODE EXTRA10 to get additional 10% off on orders above 25,000 (Only on discounted articles)</p>
        <h3>Total: ₹{total.toFixed(2)}</h3>
        <p>Cash on Delivery applicable only on orders below ₹10000</p>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
        </>
    )
}
export default Cartwithitems