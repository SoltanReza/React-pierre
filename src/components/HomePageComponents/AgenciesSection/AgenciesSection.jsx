import Slider from "../../../ui/Slider/Slider";
import img1 from "../../../assets/1.jpeg";
import img2 from "../../../assets/2.jpeg";
import img3 from "../../../assets/3.jpeg";
import SliderItem from "./SliderItem";
import { Component } from "react";

const AgenciesSection = () => {
  return (
    <Slider
      isTouchScrolling={false}
      className="d-flex"
      component={(props) => (
        <>
          <SliderItem
            url={img1}
            title="Agence lyon"
            address="805 Disu Highway"
            city="Kurwoha"
            {...props}
          />
          <SliderItem
            url={img2}
            title="Agence lyon"
            address="805 Disu Highway"
            city="Kurwoha"
            {...props}
          />
          <SliderItem
            url={img3}
            title="Agence lyon"
            address="805 Disu Highway"
            city="Kurwoha"
            {...props}
          />
        </>
      )}
    />
  );
};

export default AgenciesSection;

// export default AgenciesSection2;
