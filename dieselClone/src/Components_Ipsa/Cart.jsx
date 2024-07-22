import React from 'react'
import './Cart.css'

export const Cart = () => {
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
