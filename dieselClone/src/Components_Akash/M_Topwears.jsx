//Male_topwear


import React, { useState } from "react";
import './Akash.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "./Product";
export default function M_Topwear() {
  
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
            "id": 67,
            "title": "Men Casuals",
            "oldprice":15999,
            "newprice": 12499,
            "description": "Top It Off with Diesel: EOSS deals on statement-making men's topwear.",
            "category": "male_eoss",
            "image": "Images/male_eoss1.jpg",
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
                "noc": "CASUAL",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 68,
            "title": "Men Casuals",
            "oldprice":12999,
            "newprice": 11499,
            "description": "Elevate your everyday look. Shop Diesel EOSS topwear and unleash your style.",
            "category": "male_eoss",
            "image": "Images/male_eoss2.jpg",
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
                "noc": "CASUAL",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 69,
            "title": "Men Casuals",
            "oldprice":25999,
            "newprice": 22499,
            "description": "From tees to jackets, find your perfect top with Diesel EOSS deals.",
            "category": "male_eoss",
            "image": "Images/male_eoss3.jpg",
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
                "noc": "CASUAL",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 70,
            "title": "Men Casuals",
            "oldprice":15999,
            "newprice": 12499,
            "description": "Unconventional style, unbeatable prices. Top It Off with Diesel EOSS.",
            "category": "male_eoss",
            "image": "Images/male_eoss4.jpg",
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
                "noc": "CASUAL",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 71,
            "title": "Men Casuals",
            "oldprice":35999,
            "newprice": 32499,
            "description": "Layer up in confidence. Shop Diesel EOSS topwear and redefine your look.",
            "category": "male_eoss",
            "image": "Images/male_eoss5.jpg",
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
                "noc": "CASUAL",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 72,
            "title": "Men Casuals",
            "oldprice":23999,
            "newprice": 21499,
            "description": "Refresh your wardrobe, refresh your style. Top It Off with Diesel EOSS deals.",
            "category": "male_eoss",
            "image": "Images/male_eoss6.jpg",
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
                "noc": "CASUAL",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 73,
            "title": "Men Casuals",
            "oldprice":15999,
            "newprice": 12499,
            "description": "Top It Off with Confidence: Diesel EOSS sale on men's topwear. Don't miss out!",
            "category": "male_eoss",
            "image": "Images/male_eoss7.jpg",
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
                "noc": "CASUAL",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 74,
            "title": "Men Casuals",
            "oldprice":15999,
            "newprice": 12499,
            "description": "Stylish fasion equipped with swag and charishma of genz fashion taste",
            "category": "male_eoss",
            "image": "Images/male_eoss8.jpg",
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
                "noc": "CASUAL",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 75,
            "title": "Men Casuals- Hoodies",
            "oldprice":15999,
            "newprice": 12499,
            "description": "Stylish fasion equipped with swag and charishma of genz fashion taste",
            "category": "male_eoss",
            "image": "Images/male_eoss9.jpg",
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
                "noc": "CASUAL",
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
      <h1 className="header1">Top It Off : Diesel Male Topwear EOSS Specials!</h1>
      <Carousel responsive={responsive} infinite={true} >
        {product}
      </Carousel>
    </div>
  );
}
