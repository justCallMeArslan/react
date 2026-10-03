import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './completeGallery'
import Form from './fixStuck'
import FeedbackForm from './fixCrash'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
    <Form />
    <FeedbackForm />
  </StrictMode>,
)
