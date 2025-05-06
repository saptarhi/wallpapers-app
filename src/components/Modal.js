import React, { useState } from 'react';
import './Modal.css';
import { useFavorites } from '../context/FavoritesContext';
import { HeartIcon, BrokenHeartIcon, DownloadIcon, CloseIcon } from './Icons';

const Modal = ({ selectedWallpaper, closeModal, downloadImage }) => {
  const { collections, toggleFavorite } = useFavorites();
  const [selectedCollection, setSelectedCollection] = useState('General');

  if (!selectedWallpaper) return null;

  const allFavorites = Object.values(collections || {}).flat();
  const isFavorite = allFavorites.find((fav) => fav.id === selectedWallpaper.id);

  const collectionNames = Object.keys(collections || { General: [] });

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img
          src={selectedWallpaper.urls.full}
          alt={selectedWallpaper.alt_description || 'Wallpaper'}
          className="modal-image"
        />

        <div className="modal-buttons">
          {/* Вибір колекції */}
          <select
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}
            className="collection-select"
          >
            {collectionNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>

          {/* Додати/видалити з колекції */}
          <button onClick={() => toggleFavorite(selectedWallpaper, selectedCollection)}>
            {isFavorite ? (
              <>
                <BrokenHeartIcon className="icon" /> Remove
              </>
            ) : (
              <>
                <HeartIcon className="icon" /> Add to {selectedCollection}
              </>
            )}
          </button>

          <button onClick={() => downloadImage(selectedWallpaper.urls.full)}>
            <DownloadIcon className="icon" /> Download
          </button>

          <button onClick={closeModal}>
            <CloseIcon className="icon" /> Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
