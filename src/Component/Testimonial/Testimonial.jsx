import React from 'react'
import './Testimonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import profile1 from '../../img/profile1.jpg'
import profile2 from '../../img/profile2.jpg'
import profile3 from '../../img/profile3.jpg'
import profile4 from '../../img/profile4.jpg'
import profile5 from '../../img/profile5.jpg'
import profile6 from '../../img/profile6.jpg'
import {Pagination} from "swiper"
import 'swiper/css/pagination'
import 'swiper/css'



function Testimonial() {
    const clients=[
        {
            img:profile1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti  quibusdam eius, asperiores ipsa praesentium, amet rerum consectetur molestias dicta fuga beatae quo. Sunt laudantium delectus libero doloribus maiores enim ullam"
         },
         {
            img:profile2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti  quibusdam eius, asperiores ipsa praesentium, amet rerum consectetur molestias dicta fuga beatae quo. Sunt laudantium delectus libero doloribus maiores enim ullam"
         },
         {
            img:profile3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti  quibusdam eius, asperiores ipsa praesentium, amet rerum consectetur molestias dicta fuga beatae quo. Sunt laudantium delectus libero doloribus maiores enim ullam"
         },
         {
            img:profile4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti  quibusdam eius, asperiores ipsa praesentium, amet rerum consectetur molestias dicta fuga beatae quo. Sunt laudantium delectus libero doloribus maiores enim ullam"
         },
         {
            img:profile5,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti  quibusdam eius, asperiores ipsa praesentium, amet rerum consectetur molestias dicta fuga beatae quo. Sunt laudantium delectus libero doloribus maiores enim ullam"
         },
         {
            img:profile6,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti  quibusdam eius, asperiores ipsa praesentium, amet rerum consectetur molestias dicta fuga beatae quo. Sunt laudantium delectus libero doloribus maiores enim ullam"
         },

    ]
  return (
      
    <div className='t-wrapper' id='Testmonials'>
        <div className="t-heading">
            <span>Client always get</span>
            <span>Excetional work</span>
            <span>from me....</span>
            <div className="blur t-blur1"></div>
            <div className="blur t-blur2"></div>
        </div>
        {/* slide section */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable:true}}
        >
           { clients.map((client,index)=>{
               return(
                   <SwiperSlide key={index}>
                       <div className="testimonial">
                       <img src={client.img} alt="" />
                       <span>{client.review}</span>
                       </div>

                   </SwiperSlide>
               )
           })}
        </Swiper>
    </div>
  )
}

export default Testimonial
