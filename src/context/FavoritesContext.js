import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [collections, setCollections] = useState({});

  const addCollection = (name) => {
    setCollections((prev) => ({
      ...prev,
      [name]: prev[name] || [], // створює колекцію тільки якщо її ще немає
    }));
  };

 const addToCollection = (name, wallpaper) => {
    setCollections((prev) => {
      const existing = prev[name] || [];
      const isAlreadyAdded = existing.some((item) => item.id === wallpaper.id);
      if (isAlreadyAdded) return prev;

      return {
        ...prev,
        [name]: [...existing, wallpaper]
      };
    });
  };
const toggleFavorite = (wallpaper, collectionName = 'General') => {
  setCollections(prev => {
    const updated = { ...prev };
    const current = updated[collectionName] || [];

    const exists = current.find(w => w.id === wallpaper.id);
    if (exists) {
      updated[collectionName] = current.filter(w => w.id !== wallpaper.id);
    } else {
      updated[collectionName] = [...current, wallpaper];
    }

    return updated;
  });
};

  // Видалити обої з певної колекції
  const removeFavoriteFromCollection = (name, wallpaperId) => {
    setCollections((prev) => {
      const updated = prev[name].filter((item) => item.id !== wallpaperId);
      return {
        ...prev,
        [name]: updated
      };
    });
  };

  return (
    <FavoritesContext.Provider
      value={{
        collections,
        addCollection,
        addToCollection,
        toggleFavorite,
        removeFavoriteFromCollection
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext); 