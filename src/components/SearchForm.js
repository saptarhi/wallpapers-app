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
    <form onSubmit={handleSubmit} style={{margin: '20px',
    display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px'
       }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for wallpapers..."
        style={{
        padding: '10px 15px',
        width: '300px',
        fontSize: '15px',
        borderRadius: '5px',
        border: '1px solid rgb(174, 222, 254)',
        backgroundColor: '#F5F9FF',
        color: '#333333',
        fontFamily: '"Poppins", sans-serif',
        transition: 'all 0.3s ease',
        }}
      className="wallpapers-input"
      />
      <button
      type="submit"
      style={{
        padding: '10px 20px',
        fontSize: '15px',
        borderRadius: '8px',
        border: 'none',
        backgroundColor: '#ADD8E6',
        color: '#333333',
        cursor: 'pointer',
        fontFamily: '"Poppins", sans-serif',
        fontWeight: '200',
        transition: 'all 0.3s ease',
      }}
      >
        Search
      </button>
    </form>
  );
};


export default SearchForm;

