import React from 'react'
import './Akash.css';
import denim_img_men1 from "../assets/Images/denim_img_men1.jpg";

export default function Product() {
  return (
    <div>
      <div className="card">
            <img className="product--image" src={denim_img_men1} alt="productimage"  />
            <h2>Denim Men</h2>
            <p className="price">Rs.500</p>
            <p>Some description about product..</p>
            <p>
                <button>Add to cart</button>
            </p>
        </div>
    </div>
  )
}
