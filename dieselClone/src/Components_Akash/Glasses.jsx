//premium_watches


import React, { useState } from "react";
import './Akash.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "./Product";
export default function Glasses() {
  
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
            "id": 89,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "A legendary dive watch renowned for its durability, functionality, and timeless design.",
            "category": "glasses",
            "image": "Images/glass1.jpg",
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
                "noc": "GLASSES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 90,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "Crafted for history, this iconic timepiece was the first watch worn on the moon.",
            "category": "glasses",
            "image": "Images/glass2.jpg",
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
                "noc": "GLASSES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 91,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "Patek Philippe Nautilus: A luxurious sports watch known for its elegant octagonal case and integrated bracelet",
            "category": "glasses",
            "image": "Images/glass3.jpg",
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
                "noc": "GLASSES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 92,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "A distinctive timepiece known for its square face and Roman numeral hour markers, oozing sophistication.",
            "category": "glasses",
            "image": "Images/glass4.jpg",
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
                "noc": "GLASSES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 93,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "A bold and audacious watch featuring an octagonal case and exposed screws, a symbol of luxury and innovation.",
            "category": "glasses",
            "image": "Images/glass5.jpg",
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
                "noc": "GLASSES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 94,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "A masterpiece of German engineering known for its large date complication and classic design.",
            "category": "glasses",
            "image": "Images/glass6.jpg",
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
                "noc": "GLASSES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 95,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "A versatile watch with a swiveling case that can be flipped over to protect the dial or reveal a second time zone.",
            "category": "glasses",
            "image": "Images/glass7.jpg",
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
                "noc": "GLASSES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 96,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "A luxurious travel watch featuring a world time complication and a sleek, integrated bracelet",
            "category": "glasses",
            "image": "Images/glass8.jpg",
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
                "noc": "GLASSES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 97,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "A technological marvel featuring a revolutionary Spring Drive movement and a mesmerizing, textured dial.",
            "category": "glasses",
            "image": "Images/glass9.jpg",
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
                "noc": "GLASSES",
                "sc": "Y03204 P5578"
            }
          },
          {
            "id": 98,
            "title": "Stylish Sunglasses",
            "oldprice":7599,
            "newprice": 6099,
            "description": "An epitome of elegance with its slender case, intricate complications, and historical significance.",
            "category": "glasses",
            "image": "Images/glass10.jpg",
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
                "noc": "GLASSES",
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
      <h1 className="header1">Block The Sun, Not The Savings : Diesel's Sunglass Deals!</h1>
      <Carousel responsive={responsive} infinite={true} >
        {product}
      </Carousel>
    </div>
  );
}
