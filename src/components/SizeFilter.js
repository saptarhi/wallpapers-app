import React from 'react';
import './SizeFilter.css';

const SizeFilter = ({ selectedSize, onChange }) => {
  return (
    <div className="size-filter">
      <label className= "size-label" htmlFor="size">Size:</label>
      <select
        id="size"
        value={selectedSize}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="small">Small (≥ 800x600)</option>
        <option value="medium">Medium (≥ 1920x1080)</option>
        <option value="large">Large (≥ 2560x1440)</option>
        <option value="ultra">Ultra (≥ 3840x2160)</option>
      </select>
    </div>
  );
};

export default SizeFilter;

