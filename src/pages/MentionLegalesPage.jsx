import HeroSection from "../components/HomePageComponents/HeroSection/HeroSection";
import DataSection from "../components/DataSection/DataSection";
import FooterV2 from "../components/FooterV2/footerv2";
import HeaderV2 from "../components/HeaderV2/HeaderV2";
import { useState } from "react";
import Cards from "../components/Cards/Cards";
import Banner from "../components/Banner/Banner";

const MentionLegalesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <HeaderV2
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarken={false}
      />
      <Banner />
      <Cards />
      <FooterV2 />
    </div>
  );
};

export default MentionLegalesPage;
