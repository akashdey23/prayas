import React from "react";
import "./Akash.css";


export default function Product(props) {
    
  return (
    <div>

      <div className="card">
        <img className="product--image" src={props.url} alt="productimage" />
        <h2 className="header1">{props.name}</h2>
        <p className="price2">{props.oldprice}</p>
        <p className="price">{props.newprice}</p>
        <p className="desc">{props.description}</p>
        <p>
          <button>Add to cart</button>
        </p>
      </div>
    </div>
  );
}
