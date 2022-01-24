import React from "react";
import { Link } from "react-router-dom";
import gpt3Logo from "../../assets/logo-white.png";
import TextField from "../../ui/TextField";
import "./styles.scss";

const FooterV2 = () => (
  <footer className="footer">
    <div className="footer-columns">
      <div id="footer-logos" className="footer-list">
        <Link to="/">
          <img src={gpt3Logo} alt="gpt3_logo" />{" "}
        </Link>
        <div className="icons">
          <a href="#" className="icon">
            <img
              src="https://assets.website-files.com/60a69d1ca4992d067a87d66a/60abc3ca2e2360227b8328f6_facebook--white.svg"
              alt="facebook logo"
            />
          </a>
          <a href="#" className="icon">
            <img
              src="https://assets.website-files.com/60a69d1ca4992d067a87d66a/60abc3cadb72e20aea9646fe_instagram--white.svg"
              alt="instagram logo"
            />
          </a>
          <a href="#" className="icon">
            <img
              src="https://assets.website-files.com/60a69d1ca4992d067a87d66a/60abc3cacb9ab7702f626e20_linkedin--white.svg"
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
      <ul id="links" className="footer-list">
        <h4>Links</h4>
        <li>Overons</li>
        <li>Social Media</li>
        <li>Counters</li>
        <li>Contact</li>
        <li>
          <a href="/mentions-legales">Mentions legales</a>
        </li>
        <li>
          <a href="/conditions-generales">conditions generales</a>
        </li>
      </ul>
      <ul id="company" className="footer-list">
        <h4>Company</h4>
        <li>Terms & Conditions </li>
        <li>Privacy Policy</li>
        <li>Contact</li>
      </ul>
      <ul id="form" className="footer-list">
        <h4>Get in touch</h4>
        <p>
          <input className="footer-input" placeholder="Votre email address " />
          <button className="btn-form">S'abonner</button>
        </p>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias iusto
          asperiores libero sapiente nobis quia
        </span>
      </ul>
    </div>

    <div className="footer-copyright">
      <p>@2022 CABINET BONAPARTE. All rights reserved.</p>
    </div>
  </footer>
);

export default FooterV2;
