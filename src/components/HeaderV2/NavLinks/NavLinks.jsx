import { NavLink } from 'react-router-dom';
import "./NavLinks.scss";

const NavLinks = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`nav-links-container ${isMenuOpen ? "active" : ""}`}>
      <div className="">
        <i onClick={() => toggleMenu(false)} class="fas fa-times fa-2x"></i>
        <div className="menu-container">
          <div className="">
            <h2 className="h2">Auth</h2>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">
                  Register Register Register RegisterRegisterRegister
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="h2">Properties</h2>
            <ul>
              <li>
                <NavLink to="/properties">Properties</NavLink>
              </li>
              <li>
                <NavLink to="/properties">Link 1</NavLink>
              </li>
              <li>
                <NavLink to="/Link">Link 2</NavLink>
              </li>
              <li>
                <NavLink to="/Link">Link 3</NavLink>
              </li>
              <li>
                <NavLink to="/Link">Link 4</NavLink>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="h2">Properties</h2>
            <ul>
              <li>
                <NavLink to="/properties">Properties</NavLink>
              </li>
              <li>
                <NavLink to="/properties">Link 1</NavLink>
              </li>
              <li>
                <NavLink to="/Link">Link 2</NavLink>
              </li>
              <li>
                <NavLink to="/Link">Link 3</NavLink>
              </li>
              <li>
                <NavLink to="/Link">Link 4</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavLinks;