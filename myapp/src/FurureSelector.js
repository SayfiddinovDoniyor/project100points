import React from 'react';

const FeatureSelector = ({ label, options, onChange }) => {
  return (
    <div className="feature-selector">
      <label>{label}</label>
      <select onChange={(e) => onChange(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default FeatureSelector;
