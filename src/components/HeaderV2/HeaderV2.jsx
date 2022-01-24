import { useEffect, useState } from 'react';
import './HeaderV2.scss';
import Nav from './Nav/Nav';
import NavLinks from './NavLinks/NavLinks';

const HeaderV2 = ({ className, transparent, setIsMenuOpen, isMenuOpen }) => {
  const [background, setBackground] = useState("transparent");

  const listenScrollEvent = (e) => {
    if (window.scrollY > 400) {
      setBackground("gray");
    } else {
      setBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header
      className={`
                HeaderV2
                ${className}
                // ${isMenuOpen ? `active bg-light tx-dark` : ""}`}
      style={{ backgroundColor: background }}
    >
      <Nav
        transparent={transparent}
        isMenuOpen={isMenuOpen}
        toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />
      <NavLinks
        onMouseOut={() => setIsMenuOpen(!isMenuOpen)}
        toggleMenu={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
    </header>
  );
};

export default HeaderV2;