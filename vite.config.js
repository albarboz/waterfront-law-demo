import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Keep hero image with predictable name for better caching
          if (assetInfo.name === 'edmonds-ferry.webp') {
            return 'assets/edmonds-ferry-[hash].webp';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    }
  },
  assetsInclude: ['**/*.webp'],
  server: {
    headers: {
      // Cache control for development
      'Cache-Control': 'public, max-age=31536000'
    }
  }
})
