import React from 'react'
import './Cart.css'
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
    <div className='bigbox'>
        <div className='yourcart'>YOUR CART</div>
        <div className='mainbox'>
           <div className='shopping'>YOUR SHOPPING CART IS EMPTY</div>
           <br/>
           <div className='back'>
              <button id='mainbtn'>BACK TO SHOPPING</button>
            </div>
        </div>
    </div>
    </>
  )
}
export default Cart;