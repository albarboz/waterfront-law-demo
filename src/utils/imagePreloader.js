/**
 * Advanced image preloading utility for critical hero images
 */

export class ImagePreloader {
  constructor() {
    this.loadedImages = new Set();
    this.loadingPromises = new Map();
  }

  /**
   * Preload an image with highest priority and promise resolution
   */
  async preloadImage(src, options = {}) {
    if (this.loadedImages.has(src)) {
      return Promise.resolve();
    }

    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src);
    }

    const promise = new Promise((resolve, reject) => {
      const img = new Image();
      
      // Set attributes for optimal loading
      img.decoding = 'sync';
      img.loading = 'eager';
      img.fetchPriority = 'high';
      
      img.onload = () => {
        this.loadedImages.add(src);
        resolve(img);
      };
      
      img.onerror = () => {
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      // Start loading
      img.src = src;
    });

    this.loadingPromises.set(src, promise);
    return promise;
  }

  /**
   * Preload multiple critical images
   */
  async preloadCriticalImages(imageSources) {
    const promises = imageSources.map(src => this.preloadImage(src));
    return Promise.all(promises);
  }

  /**
   * Check if image is already loaded
   */
  isImageLoaded(src) {
    return this.loadedImages.has(src);
  }
}

// Create singleton instance
export const imagePreloader = new ImagePreloader();

// Auto-preload hero image on module load
if (typeof window !== 'undefined') {
  // Use a more robust path resolution
  const heroImageSrc = new URL('/src/assets/edmonds-ferry.webp', window.location.origin).href;
  imagePreloader.preloadImage(heroImageSrc).catch(console.error);
}
