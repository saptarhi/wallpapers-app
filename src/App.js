import React, { useState, useEffect, } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import About from './pages/About';
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
import Categories from './components/Categories';
import './App.css';
import { FavoritesProvider } from './context/FavoritesContext';
import Register from './pages/Register';
import CollectionPage from './components/CollectionPage';
import { fetchWallpapers } from './api/Unsplash'; 




function AppContent() {
  const location = useLocation();
  const [wallpapers, setWallpapers] = useState([]);
  const [loading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);




  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#0f172a' : '#f5f9ff';
  }, [darkMode]);

  

  const handleCategoryClick = (category) => {
    handleSearch(category);
  };

  const handleSearch = (searchText) => {
    setQuery(searchText);
    setPage(1);
    fetchWallpapers(searchText, 1).then((data) => setWallpapers(data));
  };

  const handleLoadMore = () => {
  const currentScroll = window.scrollY;
  const nextPage = page + 1;
  setPage(nextPage);
  fetchWallpapers(query, nextPage).then((data) => setWallpapers((prev) => [...prev, ...data]));

  requestAnimationFrame(() => {
    window.scrollTo({ top: currentScroll, behavior: 'auto' });
  });
};

  useEffect(() => {
    fetchWallpapers().then((data) => setWallpapers(data));
  }, []);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <Navbar />
      {/* Показуємо тільки на головній сторінці */}
      {location.pathname === '/' && (
        <>
          <div className="theme-toggle">
            <button onClick={toggleDarkMode}>
              {darkMode ? 'Light theme' : 'Dark theme'}
            </button>
          </div>
          <Categories onSelectCategory={handleCategoryClick} />
          <SearchForm onSearch={handleSearch} />
        </>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              wallpapers={wallpapers}
              loading={loading}
              onLoadMore={handleLoadMore}
              
            />
          }
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/favorites/:collectionName" element={<CollectionPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <AppContent />
      </Router>
    </FavoritesProvider>
  );
}

export default App;
