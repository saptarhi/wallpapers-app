import React, { useState } from 'react';
import './Favorites.css';
import CreateCollectionForm from '../components/CreateCollectionForm';
import { useFavorites } from '../context/FavoritesContext'; 
import { Link } from 'react-router-dom';

function Favorites() {
  const { collections, removeFavoriteFromCollection } = useFavorites();
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
                      onClick={() => openModal(wallpaper)}
                      style={{ cursor: 'pointer' }}
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
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.urls?.full}
              alt="Enlarged Wallpaper"
              className="modal-image"
            />
            <button onClick={closeModal} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Favorites;
