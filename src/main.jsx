import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ferryPhoto from './assets/edmonds-ferry.webp'


// Preload the Vite-resolved image URL so the browser fetches the exact file the build emits.
const preloadImage = (href) => {
  if (!href || typeof document === 'undefined') return
  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.href = href
  document.head.appendChild(link)

  // Warm the browser cache immediately (optional)
  const img = new Image()
  img.src = href
}

preloadImage(ferryPhoto)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
