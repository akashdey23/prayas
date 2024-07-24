import React from 'react';
import './Wishlist.css';
import { Link } from "react-router-dom";
const Wishlist = () => {
  return (
    <>
    <div className='outerBox'>
        <div className='wish'>WISHLIST</div>
        <div className='empty'>YOUR WISHLIST IS EMPTY</div><br/>
        <div className='home'>
            <button id='btn'>START SHOPPING</button>
        </div>
    </div>
    </>
  )
}
export default Wishlist;
