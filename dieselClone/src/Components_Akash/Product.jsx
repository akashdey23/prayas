import React from "react";
import "./Akash.css";
import denim_img_men1 from "../assets/Images/denim_img_men1.jpg";

export default function Product(props) {
  return (
    <div>
      <div className="card">
        <img className="product--image" src={props.url} alt="productimage" />
        <h2>{props.name}</h2>
        <p className="price">{props.price}</p>
        <p>{props.description}</p>
        <p>
          <button>Add to cart</button>
        </p>
      </div>
    </div>
  );
}
