import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import './Portfolio.css'

import Img3 from '../../img/Img3.jpg'
import Img4 from '../../img/Img4.jpg'

function Portfolio() {
  return (
    <div className='portfolio' id='Portfolio'>
      {/* heading */}
      <span>Recent projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
    //   spaceBetween={20}
      slidesPerView={4}
      grabCursor={true}
      className='portfolio-slider'
      >
          <SwiperSlide>
              <img src={Img3} alt="" />
          </SwiperSlide>    
          <SwiperSlide>
              <img src={Img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src={Img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src={Img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src={Img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
              <img src={Img4} alt="" />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio
