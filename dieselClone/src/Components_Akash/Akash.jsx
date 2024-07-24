import React from "react";
import './Akash.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "./Product";
export default function Akash() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
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
            id : 1,
            name : "Designer Denim fit for Men",
            price :9999,
            "newprice": 8999,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your style and swag in your everyday fits",
            "category": "men_den",
            imageurl: "../assets/Images/denim_img_men1.jpg",
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
            id: 2,
            name: "Designer Denim fit for Men",
            price: 7999,
            "newprice": 4999,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your style and swag in your everyday fits",
            "category": "men_den",
            imageurl: "../assets/Images/denim_img_men2.jpg",
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
            id: 3,
            name: "Designer Denim fit for Men",
            price: 2999,
            "newprice": 1999,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your style and swag in your everyday fits",
            "category": "men_den",
            imageurl: "../assets/Images/denim_img_men2.jpg",
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
            id: 4,
            name: "Designer Denim fit for Men",
            price:5999,
            "newprice": 4999,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your style and swag in your everyday fits",
            "category": "men_den",
            imageurl: "../assets/Images/denim_img_men4.jpg",
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
            id: 5,
            name: "Designer Denim fit for Men",
            price:9999,
            "newprice": 8999,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your style and swag in your everyday fits",
            "category": "men_den",
            imageurl: "../assets/Images/denim_img_men5.jpg",
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
            id: 6,
            name: "Designer Denim fit for Men",
            price: 3999,
            "newprice": 2999,
            description: "hiiiiiii dickhead",
            "category": "men_den",
            imageurl: "../assets/Images/denim_img_men6.jpg",
            "rating": {
              "rate": 3.9,
              "count": 120
            },
            "stock": 37,
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
            id: 7,
            name: "Designer Denim fit for Men",
            price:7999,
            "newprice": 6999,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your style and swag in your everyday fits",
            "category": "men_den",
            imageurl: "../assets/Images/denim_img_men7.jpg",
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
            id: 8,
            name: "Designer Denim fit for Men",
            price:10999,
            "newprice": 8999,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your style and swag in your everyday fits",
            "category": "men_den",
            imageurl: "../assets/Images/denim_img_men8.jpg",
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
      ]

      const product = productData.map((item) => (
        <Product 
           name = {item.name} 
           url = {item.imageurl}
           price = {item.price}
           description = {item.description}
        />
      ))
       
  return (
    <div className="App">
      <h1>React Multi Carousel</h1>
      <Carousel responsive={responsive} infinite={true} >
        {product}
      </Carousel>
    </div>
  );
}
