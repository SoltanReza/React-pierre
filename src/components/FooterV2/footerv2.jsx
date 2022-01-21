import React from 'react';

import gpt3Logo from '../../assets/logo-white.png';
import './footerv2.css';

const FooterV2 = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p> Rue de brest</p>
        <p>04 12 12 12 12</p>
        <p>contact@cabinetbonaparte</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 CABINET BONAPARTE. All rights reserved.</p>
    </div>
  </div>
);

export default FooterV2;