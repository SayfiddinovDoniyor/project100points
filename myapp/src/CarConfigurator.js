import React, { useState } from 'react';
import FeatureSelector from './FeatureSelector';
import CarPreview from './CarPreview';

const CarConfigurator = () => {
  const [color, setColor] = useState('base');
  
  const handleColorChange = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="configurator">
      <h2>Customize Your Car</h2>
      <FeatureSelector 
        label="Choose Color"
        options={['base', 'red', 'blue']}
        onChange={handleColorChange}
      />
      <CarPreview color={color} />
    </div>
  );
};

export default CarConfigurator;
