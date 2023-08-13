import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Experience hassle-free travel planning with our weather calculation feature! Stay ahead of changing weather conditions and make informed decisions for your trips. Our real-time weather data and forecasts for various destinations will help you pack appropriately and plan activities that align with the local climate. Don't let unexpected weather surprises spoil your adventure - let us be your weather companion on your next unforgettable journey. Make you Happy                `,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Our handpicked guides are passionate about their destinations, equipped with in-depth knowledge, and dedicated to providing personalized experiences. Let them lead you through hidden gems, local culture, and fascinating stories, creating unforgettable memories on your journey. With our best tour guides by your side, every step of your trip will be filled with wonder and discovery. Get ready for a truly immersive and enriching travel experience like no other.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `We understand that every traveler is unique, and so are their travel preferences. With our tailored solutions, you can now craft your dream vacation exactly the way you envision it. Choose from a wide array of activities, accommodations, and itineraries, personalized to suit your interests and budget. Let us take care of the details while you embark on a journey that is truly yours. Start customizing your adventure today and create memories that last a lifetime with least cost.    `,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList