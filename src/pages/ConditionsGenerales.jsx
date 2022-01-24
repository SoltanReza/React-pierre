import HeroSection from "../components/HomePageComponents/HeroSection/HeroSection";
import DataSection from "../components/DataSection/DataSection";
import FooterV2 from "../components/FooterV2/footerv2";
import HeaderV2 from "../components/HeaderV2/HeaderV2";
import MentionLegalesPage from "./MentionLegalesPage";
import { useState } from "react";

import FormSection from "../components/FormSection/FormSection";
const ConditionsGeneralesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderV2
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarken={false}
      />
      <HeroSection toggleMenu={(e) => setIsMenuOpen(e)} />
      <DataSection title="Titre exemple" description="description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quos
          repellendus soluta repellat quae quo similique cumque commodi est.
          Voluptates facere maxime consectetur nulla iure commodi excepturi
          perferendis magnam neque?
        </p>
      </DataSection>

      <FormSection />

      <DataSection title="Titre exemple" description="description">
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

export default ConditionsGeneralesPage;
