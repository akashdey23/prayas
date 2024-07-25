// Jeans.jsx without slider
import React from 'react';
import SuperSkinnyF from './img_ak/SuperSkinnyF.jpg';
import SkinnyF from './img_ak/SkinnyF.jpg';
import StraightF from './img_ak/StraightF.jpg';
import SlimF from './img_ak/SlimF.jpg';
import BoyfriendF from './img_ak/BoyfriendF.jpg';
import './M_F_Banner.css'
const JeansF = () => {
  return (
    <div className="slider">
      <div>
        <img src={SuperSkinnyF} alt="SuperSkinny" />
        <p>SUPERSKINNY</p>
      </div>
      <div>
        <img src={SkinnyF} alt="Skinny" />
        <p>SKINNY</p>
      </div>
      <div>
        <img src={StraightF} alt="Straight" />
        <p>STRAIGHT</p>
      </div>
      <div>
        <img src={SlimF} alt="slim" />
        <p>SLIM</p>
      </div>
      <div>
        <img src={BoyfriendF} alt="Boyfriend" />
        <p>BOYFRIEND</p>
      </div>
    </div>
  );
};

export default JeansF;
