import React, { useState } from 'react';
import JeansM from './JeansM';
import JeansF from './JeansF';
import './M_F_Banner.css'; // Import the CSS file

const M_F_Banner = () => {
  const [selectedGender, setSelectedGender] = useState('MAN');

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <div className="banner-container">
      <div className="banner-text-container">
        <h1>Find Your Fit</h1>
        <div className="gender-selection">
          <h3
            onClick={() => handleGenderClick('MAN')}
            className={selectedGender === 'MAN' ? 'selected' : ''}
          >
            MAN
          </h3>
          <h3
            onClick={() => handleGenderClick('WOMAN')}
            className={selectedGender === 'WOMAN' ? 'selected' : ''}
          >
            WOMAN
          </h3>
        </div>
        <p className="parag">
          Find your next denim among a wide range of timeless denim washes, icons of low impact style, better for people and the planet.
        </p>
      </div>
      <div className="slider">
        {selectedGender === 'MAN' ? <JeansM /> : <JeansF />}
      </div>
    </div>
  );
};

export default M_F_Banner;
