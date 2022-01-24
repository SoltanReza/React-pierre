import { useState } from "react";
import HeaderV2 from "../components/HeaderV2/HeaderV2";
import Slider from "../components/PropertyPageComponents/HeroSection/Slider";
import MainSection from "../components/PropertyPageComponents/MainSection/MainSection";
import ProfileSection from "../components/PropertyPageComponents/ProfileSection/ProfileSection";

const PropertyPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="tx-dark nav-padding">
      <HeaderV2
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={(e) => setIsMenuOpen(e)}
        transparent={false}
      />
      <Slider />
      <div className="container my-5 py-md-5">
        <MainSection />
        <ProfileSection />
      </div>
    </div>
  );
};

export default PropertyPage;
