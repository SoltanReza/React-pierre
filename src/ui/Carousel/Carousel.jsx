import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper } from "swiper/react/swiper-react";
import "swiper/swiper.scss";
import "./styles.module.scss";
SwiperCore.use([Autoplay]);

export default function Carousel({ children }) {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={width > 768 ? 4 : 1.5}
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
