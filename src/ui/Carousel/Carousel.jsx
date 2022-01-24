import { useRef } from 'react';
import styles from './styles.module.scss';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper } from 'swiper/react/swiper-react';
import 'swiper/swiper.scss';
import './styles.module.scss'
SwiperCore.use([Autoplay]);

export default function Carousel ({children})  {

    return (
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        style={{ width: "89%", margin: "2rem auto" }}
      >
        {children}
      </Swiper>
    );
}

