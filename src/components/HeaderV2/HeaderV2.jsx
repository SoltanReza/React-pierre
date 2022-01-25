import { useEffect, useState } from 'react';
import './HeaderV2.scss';
import Nav from './Nav/Nav';
import NavLinks from './NavLinks/NavLinks';

const HeaderV2 = ({
  className,
  transparent,
  setIsMenuOpen,
  isMenuOpen,
  showLogo,
}) => {
  return (
    <header
      className={`
                HeaderV2
                ${className}
                // ${isMenuOpen ? `active bg-light tx-dark` : ""}`}
      style={{ position: transparent ? "sticky" : "relative" }}
    >
      <Nav
        isMenuOpen={isMenuOpen}
        transparent={transparent}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
        showLogo={showLogo}
      />
      <NavLinks toggleMenu={setIsMenuOpen} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default HeaderV2;