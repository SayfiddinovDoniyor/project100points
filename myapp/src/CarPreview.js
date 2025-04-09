import React from 'react';

const CarPreview = ({ color }) => {
  const carImages = {
    base: '/assets/images/car_base.png',
    red: '/assets/images/car_red.png',
    blue: '/assets/images/car_blue.png'
  };

  return (
    <div className="car-preview">
      <img src={carImages[color]} alt="Car Preview" />
    </div>
  );
};

export default CarPreview;
