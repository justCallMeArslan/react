import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './completeGallery'
import Form from './fixStuck'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
    <Form />
  </StrictMode>,
)
