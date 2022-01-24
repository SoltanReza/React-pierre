import React, { useState } from "react";
import HeaderV2 from "../components/HeaderV2/HeaderV2";
import FilterSection from "../components/PropertiesPageComponents/FilterSection/FilterSection";
import PropertiesSection from "../components/PropertiesPageComponents/PropertiesSection/PropertiesSection";

const PropertiesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderV2
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        transparent={false}
      />
      <div className="tx-dark flex-1 d-lg-flex nav-padding">
        <FilterSection />
        <PropertiesSection />
      </div>
    </>
  );
};

export default PropertiesPage;
