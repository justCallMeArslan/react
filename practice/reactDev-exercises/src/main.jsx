import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './completeGallery'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
  </StrictMode>,
)
