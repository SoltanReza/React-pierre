import BaseSlider from "../../../ui/Slider/Slider";
import img1 from "../../../assets/1.jpeg";
import img2 from "../../../assets/2.jpeg";
import img3 from "../../../assets/3.jpeg";
import ImageWrapper from "../../ImageWrapper/ImageWrapper";
import styles from "./Slider.module.scss";

const Slider = () => (
  <BaseSlider showArrows={true} className={`d-flex ${styles.root}`}>
    <ImageWrapper url={img1} height="33%" />
    <ImageWrapper url={img2} height="33%" />
    <ImageWrapper url={img3} height="33%" />
  </BaseSlider>
);

export default Slider;
