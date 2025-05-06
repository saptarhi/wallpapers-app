const config = {
  ACCESS_KEY: process.env.REACT_APP_UNSPLASH_API_KEY,
  BASE_URL: process.env.REACT_APP_API_BASE_URL,
  PER_PAGE: process.env.REACT_APP_IMAGES_PER_PAGE || 12
};

export default config;
