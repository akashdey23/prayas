//women_jeans_slider


import React, { useState } from "react";
import './Akash.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "./Product";
export default function F_Jeans() {
  
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
            "id": 9,
            "title": "Designer Denim fit for Women",
            "oldprice":10999,
            "newprice": 9999,
            "description": "Elevate your casual look with a touch of luxury - designer denim for the modern woman.",
            "category": "women_den",
            "image": "Images/denim_img_women1.jpg",
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
                "noc": "DENIM",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 10,
            "title": "Designer Denim fit for Women",
            "oldprice":7999,
            "newprice": 5999,
            "description": "Make a statement with designer denim that turns heads and sets trends.",
            "category": "women_den",
            "image": "Images/denim_img_women2.jpg",
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
                "noc": "DENIM",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 11,
            "title": "Designer Denim fit for Women",
            "oldprice":4999,
            "newprice": 3999,
            "description": "Confidence starts from the bottom up - invest in a pair of designer denim you'll love.",
            "category": "women_den",
            "image": "Images/denim_img_women3.jpg",
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
                "noc": "DENIM",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 12,
            "title": "Designer Denim fit for Women",
            "oldprice":10999,
            "newprice": 9999,
            "description":"Look effortlessly chic with a pair of designer jeans that become your everyday go-to",
            "category": "women_den",
            "image": "Images/denim_img_women4.jpg",
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
                "noc": "DENIM",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 13,
            "title": "Designer Denim fit for Women",
            "oldprice":10999,
            "newprice": 9999,
            "description": "Express yourself with a variety of washes, finishes, and details in our designer denim collection",
            "category": "women_den",
            "image": "Images/denim_img_women5.jpg",
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
                "noc": "DENIM",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 14,
            "title": "Designer Denim fit for Women",
            "oldprice":10999,
            "newprice": 9999,
            "description": "Experience the ultimate in comfort and style with premium designer denim.",
            "category": "women_den",
            "image": "Images/denim_img_women6.jpg",
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
                "noc": "DENIM",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 15,
            "title": "Designer Denim fit for Women",
            "oldprice":10999,
            "newprice": 9999,
            "description": "Find your perfect fit - choose from a range of silhouettes designed for women.",
            "category": "women_den",
            "image": "Images/denim_img_women7.jpg",
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
                "noc": "DENIM",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 16,
            "title": "Designer Denim for Women",
            "oldprice":10999,
            "newprice": 9999,
            "description": "Elevate your style with designer denim crafted to flatter the female form.",
            "category": "men_den",
            "image": "Images/denim_img_women8.jpg",
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
                "noc": "DENIM",
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
      <h1 className="header1">Iconic Denim Deals: EOSS Women's Edition!</h1>
      <Carousel responsive={responsive} infinite={true} >
        {product}
      </Carousel>
    </div>
  );
}
