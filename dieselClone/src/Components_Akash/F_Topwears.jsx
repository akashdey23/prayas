//Female_topwear

/// male_undi.jsx

//women_jeans_slider


import React, { useState } from "react";
import './Akash.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "./Product";
export default function F_Topwears() {
  
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
            "id": 50,
            "title": "Tops for Women",
            "oldprice":17999,
            "newprice": 12499,
            "description": "Unleash your feminine flair! Explore Diesel's EOSS deals on women's topwear.",
            "category": "women_top",
            "image": "Images/female_topwear1.jpg",
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
                "noc": "TOPS",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 51,
            "title": "Tops for Women",
            "oldprice":19999,
            "newprice": 17499,
            "description": "Dress for the confidence you deserve. Shop Diesel EOSS tops for her.",
            "category": "women_top",
            "image": "Images/female_topwear2.jpg",
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
                "noc": "TOPS",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 52,
            "title": "Tops for Women",
            "oldprice":17999,
            "newprice": 12499,
            "description": "EOSS savings, endless styles. Explore Diesel's topwear collection for women.",
            "category": "women_top",
            "image": "Images/female_topwear3.jpg",
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
                "noc": "TOPS",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 53,
            "title": "Tops for Women",
            "oldprice":17999,
            "newprice": 16499,
            "description": "From tanks to jackets, find your perfect statement piece with Diesel EOSS.",
            "category": "women_top",
            "image": "Images/female_topwear4.jpg",
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
                "noc": "TOPS",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 54,
            "title": "Tops for Women",
            "oldprice":11999,
            "newprice": 10099,
            "description": "Where edgy meets feminine. Explore Diesel's EOSS deals on women's tops.",
            "category": "women_top",
            "image": "Images/female_topwear5.jpg",
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
                "noc": "TOPS",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 55,
            "title": "Tops for Women",
            "oldprice":17999,
            "newprice": 12499,
            "description": "Elevate your everyday look. Shop Diesel EOSS topwear and embrace your individuality.",
            "category": "women_top",
            "image": "Images/female_topwear6.jpg",
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
                "noc": "TOPS",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 56,
            "title": "Tops for Women",
            "oldprice":17999,
            "newprice": 12499,
            "description": "Confidence is the best accessory. Shop Diesel EOSS women's tops and express yourself.",
            "category": "women_top",
            "image": "Images/female_topwear7.jpg",
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
                "noc": "TOPS",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 57,
            "title": "Tops for Women",
            "oldprice":15999,
            "newprice": 12499,
            "description": "Don't just wear clothes, own your style. Explore Diesel EOSS topwear deals.",
            "category": "women_top",
            "image": "Images/female_topwear8.jpg",
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
                "noc": "TOPS",
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
        />
      ))
       
  return (
    <div className="App">
      <h1 className="header1">Feminine Flair : Explore Diesel's Female Topwear Deals!</h1>
      <Carousel responsive={responsive} infinite={true} >
        {product}
      </Carousel>
    </div>
  );
}
