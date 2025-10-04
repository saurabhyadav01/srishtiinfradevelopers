import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation.css'; // Import Swiper navigation styles
import { heroslides } from 'utils/nav'; 
import Slide from './Slide';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
import Slide5 from './Slide5';
import Slide6 from './Slide6';

const Slider = () => {
  return (
    <section>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop={true}
        effect="fade"
        parallax
        className="bg-black text-white position-relative"
        style={{ height: '540px' }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Slide data={heroslides[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <Slide2 />
        </SwiperSlide>
        {/* <SwiperSlide>
          <Slide3 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide4 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide5 />
        </SwiperSlide>
        <SwiperSlide>
          <Slide6 />
        </SwiperSlide> */}
      </Swiper>

    </section>
  );
};

export default Slider;
