// src/components/Overlay.jsx
import React from 'react';
import './Overlay.css'; // Create a CSS file for styling

const Overlay = () => {
  return (
    <div className="overlay-container">
      <img src="https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/banner/1720602330Resized.webp?compress=true&q=70" alt="End of Season Sale" className="background-image" />
      <div className="overlay-content">
        {/* <h1>END OF SEASON SALE</h1>
        <p>UP TO 40% OFF</p> */}
        <div className="buttons">
          <button className="shop-button">SHOP MAN</button>
          <button className="shop-button">SHOP WOMAN</button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
