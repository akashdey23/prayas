import React from "react";
import "./Akash.css";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Product(props) {
  let obj1=[];
  const [proarr,setPro]=useState([]);
	const [data,setData]=useState([]);


	async function getData() {
		let res = await fetch('http://localhost:3000/products')
		let deo=await res.json();
    deo = deo.map(item => ({
      ...item,
      id: Number(item.id)
  }));
		setPro(deo)
	}
		console.log(proarr);
	useEffect(()=>{
        getData()
    },[]);
  async function addto(id){
		obj1.push(...proarr.filter(x => x.id === id));
		console.log(obj1);
		for (let i = obj1.length-1; i < obj1.length; i++) {
			let res4 = await fetch('http://localhost:3000/cartprods', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(obj1[i])
			})

	}
}
    
  return (
    <div>

      <div className="card">
        <img className="product--image" src={props.url} alt="productimage" />
        <h2 className="header1">{props.name}</h2>
        <p className="price2">{props.oldprice}</p>
        <p className="price">{props.newprice}</p>
        <p className="desc">{props.description}</p>
        <p>
          <button onClick={()=>addto(props.id)}>Add to cart</button>
        </p>
      </div>
    </div>
  );
}
