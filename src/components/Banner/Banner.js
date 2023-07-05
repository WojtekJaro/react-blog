import React from "react";
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Player from "../Player/Player";
import {Autoplay,Navigation} from 'swiper/modules'
import img1 from "../../images/img1.jpg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import img4 from "../../images/img4.webp";

const Banner = () => {
  return (
    <div className="banner-content">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false
        }}
        breakpoints={{
            '992': {
              slidesPerView: 2.2,
              spaceBetween: 10,
            },
        }}
      >
        <SwiperSlide>
          <Player image={img1} name="Robercik" />
        </SwiperSlide>
        <SwiperSlide>
          <Player image={img2} name="Iga Świątek" />
        </SwiperSlide>
        <SwiperSlide>
          <Player image={img3} name="Kamil Stoch" />
        </SwiperSlide>
        <SwiperSlide>
          <Player image={img4} name="Jeremy Sochan" />
        </SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Banner;
