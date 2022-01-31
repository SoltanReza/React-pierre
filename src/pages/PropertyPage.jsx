import { useState } from "react";
import HeaderV2 from "../components/HeaderV2/HeaderV2";
import Gallery from "../components/PropertyPageComponents/Gallery/Gallery";
import Slider from "../components/PropertyPageComponents/HeroSection/Slider";
import Informations from "../components/PropertyPageComponents/Informations/Informations";
import MainSection from "../components/PropertyPageComponents/MainSection/MainSection";
import ProfileSection from "../components/PropertyPageComponents/ProfileSection/ProfileSection";
import VisiteSection from "../components/PropertyPageComponents/VisiteSection/VisiteSection";
import FooterV2 from "../components/FooterV2/footerv2";

import "../scss/property-page.scss";
const PropertyPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderV2
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={(e) => setIsMenuOpen(e)}
        transparent={false}
      />
      <div className="property-wrapper tx-dark nav-padding">
        <Slider />
        <Informations />
        <VisiteSection />
        <Gallery />
        {/* <MainSection /> */}
        <ProfileSection />
      </div>
      <FooterV2 />
    </>
  );
};

export default PropertyPage;
