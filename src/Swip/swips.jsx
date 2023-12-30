import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import slide_image_1 from '../assets/do.jpg';
import slide_image_2 from '../assets/han.jpg';
import slide_image_3 from '../assets/mi.jpg';
import slide_image_4 from '../assets/ga.jpg';
import slide_image_5 from '../assets/ji.jpg';
import slide_image_6 from '../assets/kum.webp';
import slide_image_7 from '../assets/co.jpg'
import './swips.css'
const Swips = () => {
    return (
       

    <div className='containg'>
        <h1 className='tid'>Warlord of Sea - SWIPER JS</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} />
        </SwiperSlide>
      </Swiper>
    </div>
    );
}

export default Swips;
