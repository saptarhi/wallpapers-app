import React, { useState, useRef, useEffect } from 'react';
import Modal from '../components/Modal.js';
import SizeFilter from '../components/SizeFilter.js';
import './Home.css';


const Home = ({ wallpapers, loading, onLoadMore }) => {
  const [selectedWallpaper, setSelectedWallpaper] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [favorites, setFavorites] = useState([]);
  const lastImageRef = useRef(null); // реф на останнє зображення

  useEffect(() => {
    if (lastImageRef.current) {
      lastImageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [wallpapers]); // запускається щоразу, коли змінюється список зображень

  const openModal = (wallpaper) => {
    setSelectedWallpaper(wallpaper);
  };

  const closeModal = () => {
    setSelectedWallpaper(null);
  };

  const toggleFavorite = (wallpaper) => {
    if (favorites.find((fav) => fav.id === wallpaper.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== wallpaper.id));
    } else {
      setFavorites([...favorites, wallpaper]);
    }
  };

  const downloadImage = (url) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = 'wallpaper.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredWallpapers = wallpapers.filter((wallpaper) => {
    const width = wallpaper.width;
    const height = wallpaper.height;

    switch (selectedSize) {
      case 'small':
        return width >= 800 && height >= 600 && width < 1920;
      case 'medium':
        return width >= 1920 && height >= 1080 && width < 2560;
      case 'large':
        return width >= 2560 && height >= 1440 && width < 3840;
      case 'ultra':
        return width >= 3840 && height >= 2160;
      default:
        return true;
    }
  });

  if (loading) {
    return <div className="loading">Loading wallpapers...</div>;
  }

  if (filteredWallpapers.length === 0) {
    return <div>No wallpapers found for this size.</div>;
  }

  return (
    <div className="home-container">
      <div className="filter-container">
        <SizeFilter selectedSize={selectedSize} onChange={setSelectedSize} />
      </div>
      {loading ? (
        <div className="loading">Loading wallpapers...</div>
      ) : filteredWallpapers.length === 0 ? (
        <div className="no-results">No wallpapers found for this size.</div>
      ) : (
        <>
          <div className="wallpapers-grid">
            {filteredWallpapers.map((wallpaper, index) => (
              <img
                key={wallpaper.id}
                ref={index === wallpapers.length - 1 ? lastImageRef : null}
                src={wallpaper.urls.small}
                alt={wallpaper.alt_description || 'Wallpaper'}
                className="wallpaper"
                onClick={() => openModal(wallpaper)}
              />
            ))}
          </div>

          <div className="load-more-container">
            <button className="load-more-button" onClick={onLoadMore}>
              Load More
            </button>
          </div>
        </>
      )}

      {selectedWallpaper && (
        <Modal
          selectedWallpaper={selectedWallpaper}
          closeModal={closeModal}
          toggleFavorite={toggleFavorite}
          downloadImage={downloadImage}
          favorites={favorites}
        />
      )}
    </div>
  );
}

  export default Home;
