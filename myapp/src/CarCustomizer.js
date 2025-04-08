import React, { useState } from 'react';
import carData from './carData'; // Store all available options

const CarCustomizer = () => {
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [rims, setRims] = useState('');
  
  const previewImage = `/assets/${model}_${color}_${rims}.png`; // change logic if needed

  return (
    <div className="customizer">
      <h2>Build Your Dream Car</h2>

      <select onChange={(e) => setModel(e.target.value)}>
        <option value="">Select Model</option>
        {carData.models.map(m => <option key={m}>{m}</option>)}
      </select>

      <select onChange={(e) => setColor(e.target.value)}>
        <option value="">Select Color</option>
        {carData.colors.map(c => <option key={c}>{c}</option>)}
      </select>

      <select onChange={(e) => setRims(e.target.value)}>
        <option value="">Select Rims</option>
        {carData.rims.map(r => <option key={r}>{r}</option>)}
      </select>

      <div className="car-preview">
        {model && color && rims ? (
          <img src={previewImage} alt="Your customized car" />
        ) : (
          <p>Select all options to preview your car.</p>
        )}
      </div>
    </div>
  );
};

export default CarCustomizer;
