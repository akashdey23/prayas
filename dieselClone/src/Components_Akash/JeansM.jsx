//Jeans.jsx without slider
import React from 'react';
import Skinny from './img_ak/Skinny.jpg';
import Slim from './img_ak/Slim.jpg';
import Tampered from './img_ak/Tampered.jpg';
import Straight from './img_ak/Straight.jpg';
import Bootcut from './img_ak/Bootcut.jpg';
import './M_F_Banner.css'
const JeansM = () => {
  return (
    <div className="slider">
      <div>
        <img src={Skinny} alt="Skinny" />
        <p>SKINNY</p>
      </div>
      <div>
        <img src={Slim} alt="Slim" />
        <p>SLIM</p>
      </div>
      <div>
        <img src={Tampered} alt="Tapered" />
        <p>TAPERED</p>
      </div>
      <div>
        <img src={Straight} alt="Straight" />
        <p>STRAIGHT</p>
      </div>
      <div>
        <img src={Bootcut} alt="Bootcut" />
        <p>BOOTCUT</p>
      </div>
    </div>
  );
};

export default JeansM;
