/// male_undi.jsx

//women_jeans_slider


import React, { useState } from "react";
import './Akash.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "./Product";
export default function M_underwear() {
  
    const responsive = {
        superLargeDesktop: {
          
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 800 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const productData = [
        {
            "id": 76,
            "title": "Diesel Undies",
            "oldprice":1599,
            "newprice": 1099,
            "description": "Unleash the power of comfort. Diesel EOSS: Unbelievable deals on men's innerwear.",
            "category": "men_undi",
            "image": "Images/men_undi1.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "stock": 327,
            "pdetails":{
                "Material": "61%Leather,39%Cotton",
                "Color": "Yellow",
                "Occasion": "Casual"
            },
            "Rtm": "Return Time Limit: Easy 30 days return",
            "otdetails": {
                "csd": "Support Number: 022- 48930102, Support Email: support@dieselindia.com",
                "mib": "Diesel Fashion India Reliance Pvt. Ltd., 8th Floor, Maker Tower E, Cuffe Parade, Mumbai, Maharashtra, 400005.",
                "nq": "1 N",
                "coo": "VIETNAM",
                "noc": "UNDIES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 77,
            "title": "Diesel Boxers",
            "oldprice":2599,
            "newprice": 1099,
            "description": "Stylish fasion equipped with swag and charishma of genz fashion taste",
            "category": "men_undi",
            "image": "Images/men_undi2.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "stock": 327,
            "pdetails":{
                "Material": "61%Leather,39%Cotton",
                "Color": "Yellow",
                "Occasion": "Casual"
            },
            "Rtm": "Return Time Limit: Easy 30 days return",
            "otdetails": {
                "csd": "Support Number: 022- 48930102, Support Email: support@dieselindia.com",
                "mib": "Diesel Fashion India Reliance Pvt. Ltd., 8th Floor, Maker Tower E, Cuffe Parade, Mumbai, Maharashtra, 400005.",
                "nq": "1 N",
                "coo": "VIETNAM",
                "noc": "UNDIES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 78,
            "title": "Diesel Undies",
            "oldprice":1099,
            "newprice": 999,
            "description": "Diesel EOSS: Level up your confidence from the inside out. Shop men's innerwear deals",
            "category": "men_undi",
            "image": "Images/men_undi3.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "stock": 327,
            "pdetails":{
                "Material": "61%Leather,39%Cotton",
                "Color": "Yellow",
                "Occasion": "Casual"
            },
            "Rtm": "Return Time Limit: Easy 30 days return",
            "otdetails": {
                "csd": "Support Number: 022- 48930102, Support Email: support@dieselindia.com",
                "mib": "Diesel Fashion India Reliance Pvt. Ltd., 8th Floor, Maker Tower E, Cuffe Parade, Mumbai, Maharashtra, 400005.",
                "nq": "1 N",
                "coo": "VIETNAM",
                "noc": "UNDIES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 79,
            "title": "Diesel Undies",
            "oldprice":1599,
            "newprice": 1099,
            "description": "Inner game strong. Outer game stronger. Diesel EOSS innerwear. Don't miss the sale!",
            "category": "men_undi",
            "image": "Images/men_undi4.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "stock": 327,
            "pdetails":{
                "Material": "61%Leather,39%Cotton",
                "Color": "Yellow",
                "Occasion": "Casual"
            },
            "Rtm": "Return Time Limit: Easy 30 days return",
            "otdetails": {
                "csd": "Support Number: 022- 48930102, Support Email: support@dieselindia.com",
                "mib": "Diesel Fashion India Reliance Pvt. Ltd., 8th Floor, Maker Tower E, Cuffe Parade, Mumbai, Maharashtra, 400005.",
                "nq": "1 N",
                "coo": "VIETNAM",
                "noc": "UNDIES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 80,
            "title": "Diesel Undies",
            "oldprice":1599,
            "newprice": 1099,
            "description": "Comfort meets confidence. Shop Diesel's End of Season Sale on men's innerwear.",
            "category": "men_undi",
            "image": "Images/men_undi7.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "stock": 327,
            "pdetails":{
                "Material": "61%Leather,39%Cotton",
                "Color": "Yellow",
                "Occasion": "Casual"
            },
            "Rtm": "Return Time Limit: Easy 30 days return",
            "otdetails": {
                "csd": "Support Number: 022- 48930102, Support Email: support@dieselindia.com",
                "mib": "Diesel Fashion India Reliance Pvt. Ltd., 8th Floor, Maker Tower E, Cuffe Parade, Mumbai, Maharashtra, 400005.",
                "nq": "1 N",
                "coo": "VIETNAM",
                "noc": "UNDIES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 81,
            "title": "Diesel Undies",
            "oldprice":1599,
            "newprice": 1099,
            "description": "Upgrade your base layer. Upgrade your confidence. Diesel EOSS innerwear deals.",
            "category": "men_undi",
            "image": "Images/men_undi8.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "stock": 327,
            "pdetails":{
                "Material": "61%Leather,39%Cotton",
                "Color": "Yellow",
                "Occasion": "Casual"
            },
            "Rtm": "Return Time Limit: Easy 30 days return",
            "otdetails": {
                "csd": "Support Number: 022- 48930102, Support Email: support@dieselindia.com",
                "mib": "Diesel Fashion India Reliance Pvt. Ltd., 8th Floor, Maker Tower E, Cuffe Parade, Mumbai, Maharashtra, 400005.",
                "nq": "1 N",
                "coo": "VIETNAM",
                "noc": "UNDIES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 82,
            "title": "Diesel Undies",
            "oldprice":1599,
            "newprice": 1099,
            "description": "Because feeling good starts from within. Shop Diesel EOSS men's innerwear sale.",
            "category": "men_undi",
            "image": "Images/men_undi9.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "stock": 327,
            "pdetails":{
                "Material": "61%Leather,39%Cotton",
                "Color": "Yellow",
                "Occasion": "Casual"
            },
            "Rtm": "Return Time Limit: Easy 30 days return",
            "otdetails": {
                "csd": "Support Number: 022- 48930102, Support Email: support@dieselindia.com",
                "mib": "Diesel Fashion India Reliance Pvt. Ltd., 8th Floor, Maker Tower E, Cuffe Parade, Mumbai, Maharashtra, 400005.",
                "nq": "1 N",
                "coo": "VIETNAM",
                "noc": "UNDIES",
                "sc": "Y03204 P5578"
            }
          }
      ];

      const product = productData.map((item) => (
        <Product
           name = {item.name} 
           url = {item.image}
           oldprice = {item.oldprice}
           newprice = {item.newprice}
           description = {item.description}
           id={item.id}
        />
      ))
       
  return (
    <div className="App">
      <h1 className="header1">Inner Confidence : Diesel's EOSS Deals On Men's Innerwear</h1>
      <Carousel responsive={responsive} infinite={true} >
        {product}
      </Carousel>
    </div>
  );
}
