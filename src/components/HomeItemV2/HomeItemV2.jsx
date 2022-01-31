import img1 from "../../assets/1.jpeg";
import HeartButton from "../../ui/HeartButton/HeartButton";
import { useNavigate } from "react-router-dom";
import "./HomeItemV2.scss";
import Carousel from "../../ui/Carousel/Carousel";
import { SwiperSlide } from "swiper/react/swiper-react";
import { Swiper } from "swiper/react/swiper-react";
import "swiper/swiper.scss";
import { Pagination } from "swiper";
const HomeItemV2 = ({ className }) => {
  const navigate = useNavigate();
  return (
    <div className={` card-wrapper ${className}`}>
      <div className="card-img-wrapper">
        <div className={` imgWrapper`}>
          <Swiper modules={[Pagination]} slidesPerView={1} arrows={true}>
            <SwiperSlide>
              <img
                alt=""
                className=""
                src={img1}
                onClick={() => navigate("/properties/1")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                alt=""
                className=""
                src={img1}
                onClick={() => navigate("/properties/1")}
              />
            </SwiperSlide>
          </Swiper>

          <HeartButton className="position-absolute start-0 top-0 tx-light h5" />
        </div>
      </div>
      <div className="card-bottom" onClick={() => navigate("/properties/1")}>
        <h6 className="card-bottom-title">LYON 3EME - LA PART-DIEU</h6>
        <div className="card-bottom-subtitle">
          <span>Appartment</span>
          <span>114,99 m2</span>
          <span>3 chambres</span>
        </div>
        <span className="card-bottom-price">1 300 000 $</span>
        <span className="card-bottom-link">Decouvrir ce bien</span>
      </div>
    </div>
  );
};

export default HomeItemV2;
