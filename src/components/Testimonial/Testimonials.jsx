import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/radompeople.jpeg'
import ava04 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {
   const settings = {
      dots:true,
      infinite:true,
      autoplay:true,
      speed:1000,
      swipeToSlide:true,
      autoplaySpeed:2000,
      slidesToShow:3,

      responsive: [
         {
            breakpoint: 992,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true,
               dots: true,
            },
         }
      ]
   }

   return <Slider {...settings}>
      <div className="testimonial py-4 px-3">
         <p>Desirous of doing a Jain pilgrimage tour of Uttar Pradesh which has many important Jain temples, I wrote to four tour operators. But only Tour My India replied positively. It was a first for them too, but they took up the challenge and worked out a plan for me.
I thank them for this. Beginning from prompt replies from Vishwa ji at the planning stage and the hotels and the driver, everything was well managed.
In terms of hotels, I have a suggestion to make. In Prayagraj, please opt for Shree Kanha Residency instead of Hotel Placid for your future guests. It is a much better managed hotel.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Sanjay Vasa</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>It was a wonderful experience for us. All your arrangements were up to the mark.
All hotels and transportation arrangements were excellent. Though we had faced some problems with hotel at Kedarnath you handled it swiftly and efficiently. Thanks for your support and prompt response.
The driver (Mahesh) just was very cooperative, polite and friendly. His driving skills were excellent and safe. In addition he was well travelled and well informed. We Enjoyed his company.
We look forward to collaborating with you in future.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Sunita Pawar</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>We had a great trip in India for 6days
And my family and I we can say that we have received a great service from your team.
All the hotels we stayed are very nice clean, staff served us the best including the clean and yummy food!
Especially I would like to say the big thank you for giving us the best driver in India. He is very humble, really calm and very friendly to drive us for the whole visit.
The guide, Ravy also a good person who always provided our need during this traveling. We had a low expectation before the trip but you have gave us the best service.
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>John Doe</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>

      <div className="testimonial py-4 px-3">
         <p>I want to thank you, and anyone who helped you, with your excellent service that you gave us.
Our stay at Bandhavgrah was outstanding. The hotel was excellent as were the game drives where we saw 4 tigers!
The driver you also organized for us was a very good driver and we felt very safe driving with him.
Once again thank you very much and I am sorry that I cannot thank you in person
         </p>

         <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
            <div>
               <h6 className='mb-0 mt-3'>Nitin Rawat</h6>
               <p>Customer</p>
            </div>
         </div> 
      </div>
   </Slider>
}

export default Testimonials