import Animate from "../../../ui/Animate/Animate";
import HomeItemV2 from "../../HomeItemV2/HomeItemV2";
import "./PropertiesSection.scss";

const PropertiesSection = () => {
  return (
    <>
      <Animate type="bottom" className="tx-dark nav-padding">
        <h2 className=" h2 text-center ">Propriétaires</h2>
        <div className="properties-wrapper">
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
          <HomeItemV2 />
        </div>
      </Animate>
    </>
  );
};

export default PropertiesSection;
