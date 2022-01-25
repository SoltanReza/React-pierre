import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
import "./Nav.scss";
import { useRef } from "react";
import { useEffect } from "react/cjs/react.development";

const Nav = ({ isMenuOpen, toggleMenu, transparent }) => {
  const navRef = useRef();
  return (
    <nav ref={navRef} className="nav-container">
      <div
        style={{ backgroundColor: transparent ? "transparent" : "white" }}
        className=" justify-content-between d-flex align-items-center container nav-height"
      >
        <div
          id="hamburger-icon"
          className=" h6 no-spacing"
          onClick={() => toggleMenu(!isMenuOpen)}
          onMouseEnter={() => toggleMenu(true)}
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