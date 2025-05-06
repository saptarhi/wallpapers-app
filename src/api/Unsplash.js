import config from '../config';

export const fetchWallpapers = async (searchQuery = '', pageNumber = 1) => {
  const { ACCESS_KEY, BASE_URL, PER_PAGE } = config;

  try {
    const url = searchQuery
      ? `${BASE_URL}/search/photos?query=${searchQuery}&page=${pageNumber}&per_page=${PER_PAGE}&client_id=${ACCESS_KEY}`
      : `${BASE_URL}/photos?page=${pageNumber}&per_page=${PER_PAGE}&client_id=${ACCESS_KEY}`;
    
    
    const response = await fetch(url);
    const data = await response.json();

    return searchQuery ? data.results : data;
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
    return [];
  }
};
