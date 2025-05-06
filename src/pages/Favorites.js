import React from 'react';
import './Favorites.css';
import CreateCollectionForm from '../components/CreateCollectionForm';
import { useFavorites } from '../context/FavoritesContext'; 
import { Link } from 'react-router-dom';

function Favorites() {
  const { collections, removeFavoriteFromCollection } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <CreateCollectionForm />

      {Object.keys(collections).length === 0 ? (
        <p>No collections yet.</p>
      ) : (
        <div className="collections-row">
          {Object.entries(collections).map(([name, wallpapers]) => (
            <div key={name} className="collection-card">
              <h3>
                <Link to={`/favorites/${encodeURIComponent(name)}`}>{name}</Link>
              </h3>
              <div className="favorites-grid">
                {wallpapers.map((wallpaper) => (
                  <div key={wallpaper.id} className="favorite-item">
                    <img
                      src={wallpaper.urls?.thumb}
                      alt={wallpaper.name || 'Wallpaper'}
                    />
                    <button onClick={() => removeFavoriteFromCollection(name, wallpaper.id)}>
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Favorites;
