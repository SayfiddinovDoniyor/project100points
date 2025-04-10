import React from 'react';

const CarConfigurator = ({ config, updateConfig }) => {
  return (
    <div className="controls">
      <label>
        Color:
        <select value={config.color} onChange={(e) => updateConfig('color', e.target.value)}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
      </label>

      <label>
        Rims:
        <select value={config.rims} onChange={(e) => updateConfig('rims', e.target.value)}>
          <option value="classic">Classic</option>
          <option value="sport">Sport</option>
          <option value="luxury">Luxury</option>
        </select>
      </label>
    </div>
  );
};

export default CarConfigurator;
