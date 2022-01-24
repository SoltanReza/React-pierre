import HeroSection from "../components/HomePageComponents/HeroSection/HeroSection";
import DataSection from "../components/DataSection/DataSection";
import FooterV2 from "../components/FooterV2/footerv2";
import HeaderV2 from "../components/HeaderV2/HeaderV2";
import { useState } from "react";

const MentionLegalesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderV2
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarken={false}
      />
      <HeroSection toggleMenu={(e) => setIsMenuOpen(e)} />
      <DataSection title="Titlre exemple" descrpition="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quos
          repellendus soluta repellat quae quo similique cumque commodi est.
          Voluptates facere maxime consectetur nulla iure commodi excepturi
          perferendis magnam neque?
        </p>
      </DataSection>
      <FooterV2 />
    </>
  );
};

export default MentionLegalesPage;
