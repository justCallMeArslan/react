import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gallery from './completeGallery'
import Form from './fixStuck'
import FeedbackForm from './fixCrash'
import FeedbackForm1 from './removeUnnesState'
import TrafficLight from './trafficLight'
import Clock from './fixNotUpdating'
import TravelPlan from './packingList'
import MailClient from './disappearSelect'
import MailClient1 from './implemMultSelect'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gallery />
    <Form />
    <FeedbackForm1 />
    <FeedbackForm />
    <TrafficLight />
    <Clock />
    <TravelPlan />
    <MailClient />
    <MailClient1 />
  </StrictMode>,
)
