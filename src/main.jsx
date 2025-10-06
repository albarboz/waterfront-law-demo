import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { imagePreloader } from './utils/imagePreloader.js'
import ferryUrl from '/src/assets/edmonds-ferry.webp?url'; // ensures correct resolution

// Multiple preloading strategies for maximum speed
const preloadHeroImage = async () => {
  // Strategy 1: Link preload
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = ferryUrl;
  link.fetchPriority = 'high';
  document.head.appendChild(link);

  // Strategy 2: Advanced preloader
  try {
    await imagePreloader.preloadImage(ferryUrl);
  } catch (error) {
    console.warn('Advanced preload failed:', error);
  }
};

// Start preloading immediately
preloadHeroImage();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
