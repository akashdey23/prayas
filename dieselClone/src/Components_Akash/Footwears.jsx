//footwear_slider


import React, { useState } from "react";
import './Akash.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "./Product";
export default function Footwears() {
  
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
            "id": 39,
            "title": "Sports Shoes",
            "oldprice":11999,
            "newprice": 10499,
            "description": "Elevate your every stride. Shop Diesel EOSS footwear and walk the edge.",
            "category": "eoss",
            "image": "Images/eoss1.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 40,
            "title": "Sports Shoes",
            "oldprice":12999,
            "newprice": 10499,
            "description": "Unleash your inner rebel. Exclusive Diesel EOSS footwear deals are here.",
            "category": "eoss",
            "image": "Images/eoss2.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 41,
            "title": "Sports Shoes",
            "oldprice":10999,
            "newprice": 8499,
            "description": "Don't just walk, make a statement. Shop Diesel EOSS footwear at unbeatable prices.",
            "category": "eoss",
            "image": "Images/eoss3.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 42,
            "title": "Sports Shoes",
            "oldprice":16999,
            "newprice": 13499,
            "description": "Premium footwear, exclusive deals. Walk the Diesel Way with EOSS savings.",
            "category": "eoss",
            "image": "Images/eoss4.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 43,
            "title": "Sports Shoes",
            "oldprice":7999,
            "newprice": 5499,
            "description": "Reimagine your step. Diesel EOSS footwear: Comfort meets cutting-edge style.",
            "category": "eoss",
            "image": "Images/eoss5.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 44,
            "title": "Sports Shoes",
            "oldprice":11999,
            "newprice": 10499,
            "description": "From everyday kicks to statement pieces. Find your perfect pair with Diesel EOSS.",
            "category": "eoss",
            "image": "Images/eoss6.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 45,
            "title": "Sports Shoes",
            "oldprice":10999,
            "newprice": 7499,
            "description": "Unleash your individuality. Walk the Diesel Way with exclusive EOSS footwear deals.",
            "category": "eoss",
            "image": "Images/eoss7.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 46,
            "title": "Sports Shoes",
            "oldprice":11999,
            "newprice": 10499,
            "description": "Limited time only! Walk the Diesel Way with exclusive EOSS footwear savings.",
            "category": "eoss",
            "image": "Images/eoss8.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 47,
            "title": "Sports Shoes",
            "oldprice":8999,
            "newprice": 5499,
            "description": "Diesel EOSS: Where comfort meets confidence. Shop exclusive footwear deals now.",
            "category": "eoss",
            "image": "Images/eoss9.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 48,
            "title": "Sports Shoes",
            "oldprice":11999,
            "newprice": 10499,
            "description": "Stylish fasion equipped with swag and charishma of genz fashion taste",
            "category": "eoss",
            "image": "Images/eoss10.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 49,
            "title": "Sports Shoes",
            "oldprice":16999,
            "newprice": 12499,
            "description": "Stylish fasion equipped with swag and charishma of genz fashion taste",
            "category": "eoss",
            "image": "Images/eoss11.jpg",
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
                "noc": "SHOES",
                "sc": "Y03204 P5578"
            }
          },
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
      <h1 className="header1">Walk The Diesel Way! Exclusive EOSS Footwear Deals!</h1>
      <Carousel responsive={responsive} infinite={true} >
        {product}
      </Carousel>
    </div>
  );
}
