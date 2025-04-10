import React, { useState } from 'react';
import CarPreview from './CarPreview';
import CarConfigurator from './CarConfigurator';

const CarCustomizer = () => {
  const [config, setConfig] = useState({
    color: 'red',
    rims: 'classic',
  });

  const updateConfig = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <CarConfigurator config={config} updateConfig={updateConfig} />
      <CarPreview config={config} />
    </div>
  );
};

export default CarCustomizer;
