import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import './CollectionPage.css';

const CollectionPage = () => {
  const { collectionName } = useParams();
  const decodedName = decodeURIComponent(collectionName);
  const { collections, removeFavoriteFromCollection } = useFavorites();

  const wallpapers = collections[decodedName] || [];

  return (
    <div className="collection-page">
      <h2>{decodedName}</h2>
      <Link to="/favorites">← Back to all collections</Link>
      <div className="favorites-grid">
        {wallpapers.map((wallpaper) => (
          <div key={wallpaper.id} className="favorite-item">
            <img src={wallpaper.urls.thumb} alt="Wallpaper" />
            <button onClick={() => removeFavoriteFromCollection(decodedName, wallpaper.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
