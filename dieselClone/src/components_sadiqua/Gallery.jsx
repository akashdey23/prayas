// src/components/Gallery.jsx
import React from 'react';
import './Gallery.css'; // Create a CSS file for styling

const images = [
  { src: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/cms_images/1710844926DNA_WASH.webp?compress=true&q=70',label:'DNA WASH' },
  { src: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/cms_images/1710844952Metallic.webp?compress=true&q=70',label:'METALLIC' },
  { src: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/cms_images/1710844968OvalD.webp?compress=true&q=70', label: 'OVAL D' },
  { src: 'https://cdn.pixelbin.io/v2/black-bread-289bfa/qlNgW4/original/cms_images/1710844986Camouflage.webp?compress=true&q=70', label: 'CAMOUFLAGE' },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div className="gallery-item" key={index}>
          <img src={image.src} alt={image.label} className="gallery-image" />
          <div className="label">{image.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
