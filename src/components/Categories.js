import React from 'react';
import './Categories.css';

const categories = [
  'Nature',
  'Technology',
  'Animals',
  'Travel',
  'People',
  'Food',
  'Architecture',
  'Art',
  'Fashion',
];

const Categories = ({ onSelectCategory }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <button
          key={category}
          className="category-button"
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
