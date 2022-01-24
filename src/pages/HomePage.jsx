import AgenciesSection from "../components/HomePageComponents/AgenciesSection/AgenciesSection";
import AboutUsSection from "../components/HomePageComponents/AboutUsSection/AboutUsSection";
import FormSection from "../components/HomePageComponents/FormSection/FormSection";
import HeroSection from "../components/HomePageComponents/HeroSection/HeroSection";
import PropertiesSection from "../components/HomePageComponents/PropertiesSection/PropertiesSection";
import PropertyAddressSection from "../components/HomePageComponents/PropertyAddressForm/PropertyAddressForm";
import NewsSection from "../components/HomePageComponents/NewsSection/NewsSection";
import ContactUsSection from "../components/HomePageComponents/ContactUsSection/ContactUsSection";
import JoinUsSection from "../components/HomePageComponents/JoinUsSection/JoinUsSection";
import Footer from "../components/Footer/Footer";
import FooterV2 from "../components/FooterV2/footerv2";
import HeaderV2 from "../components/HeaderV2/HeaderV2";
import { useState } from "react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderV2
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDarken={false}
      />
      <HeroSection toggleMenu={(e) => setIsMenuOpen(e)} />
      {/* <FormSection /> */}
      <AboutUsSection />
      <AgenciesSection />
      <PropertiesSection />
      <PropertyAddressSection />
      <NewsSection />
      <ContactUsSection />
      <JoinUsSection />
      <FooterV2 />
    </>
  );
};

export default HomePage;