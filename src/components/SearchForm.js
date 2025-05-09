import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      setQuery('');
    }
  };

return (
   <form onSubmit={handleSubmit} className="search-form">
  <input
    type="text"
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    placeholder="Search for wallpapers..."
    className="wallpapers-input"
  />
  <button type="submit" className="search-button">
    Search
  </button>
</form>
  );
};


export default SearchForm;

