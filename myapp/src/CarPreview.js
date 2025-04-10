import React from 'react';
import './App.css'; // styling for .car-preview etc.

const CarPreview = ({ config }) => {
  const getColorImage = () => `/images/car_${config.color}.png`;
  const getRimImage = () => `/images/rims_${config.rims}.png`;

  return (
    <div className="car-preview">
      <img src="/images/car_base.png" alt="base" className="layer" />
      <img src={getColorImage()} alt="color" className="layer" />
      <img src={getRimImage()} alt="rims" className="layer" />
    </div>
  );
};

export default CarPreview;
