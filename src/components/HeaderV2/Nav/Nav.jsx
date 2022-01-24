import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import "./Nav.scss";
import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const Nav = ({ isMenuOpen, toggleMenu, transparent = true }) => {
  const navRef = useRef();
  // useEffect(() => {
  //   const nav = navRef.current;
  //   if (!nav) return;
  //   const { classList, offsetHeight } = nav;
  //   if (!classList.contains(styles.notVisible))
  //     classList.add(styles.notVisible);
  //   const scrollHandler = () => {
  //     const { classList, offsetHeight } = nav;
  //     if (window.scrollY >= offsetHeight) {
  //       if (!classList.contains(styles.notVisible))
  //         classList.add(styles.notVisible);
  //     }
  //     // else if(classList.contains(styles.notVisible)) classList.remove(styles.notVisible);
  //   };
  //   window.addEventListener("scroll", scrollHandler);
  //   return () => window.removeEventListener("scroll", scrollHandler);
  // }, []);
  return (
    <nav ref={navRef} className="nav-container">
      <div className=" justify-content-between d-flex align-items-center container nav-height">
        <div
          id="hamburger-icon"
          className=" h6 no-spacing"
          onClick={() => toggleMenu(!isMenuOpen)}
          onMouseOver={() => toggleMenu(true)}
        >
          <i
            className={`fas fa-${isMenuOpen ? "times" : "bars"}  elevation-3`}
          ></i>
        </div>
        <Link to="/" className="d-flex">
          <img alt="" src={logo} className="logo" />
        </Link>

        <Link className="btn-icon h6 no-spacing" to="/register">
          <i className="fas fa-user elevation-3"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;