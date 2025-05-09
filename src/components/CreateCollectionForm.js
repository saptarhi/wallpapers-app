import React, { useState } from 'react';
import { useFavorites } from '../context/FavoritesContext'; 

function CreateCollectionForm() {
  const [collectionName, setCollectionName] = useState('');
  const { addCollection } = useFavorites();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (collectionName.trim()) {
      addCollection(collectionName.trim());
      setCollectionName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="collection-form">
      <input
        type="text"
        value={collectionName}
        onChange={(e) => setCollectionName(e.target.value)}
        placeholder="Enter collection name"
        className="collection-input"
      />
      <button type="submit" className="collection-button">Create</button>
    </form>
  );
}

export default CreateCollectionForm;
