import React from "react";
import "./styles.scss";

import WppCompanyIcon from "../../assets/logo/wppcompany.svg";
import FacebookLogo from "../../assets/logo/facebook.svg";
import InstagramLogo from "../../assets/logo/instagram.svg";
import LinkedInLogo from "../../assets/logo/linkedin.svg";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='wrapper-footer'>
        <img className='logo-wpp' src={WppCompanyIcon} alt='WPP Company' />

        <ul className='social-media'>
          <li className='media'>
            <a href='https://www.facebook.com' target=''>
              <img src={FacebookLogo} alt='Facebook' />
            </a>
          </li>
          <li className='media'>
            <a href='https://www.instagram.com' target=''>
              <img src={InstagramLogo} alt='Instagram' />
            </a>
          </li>
          <li className='media'>
            <a href='https://www.linkedin.com' target=''>
              <img src={LinkedInLogo} alt='LinkedIn' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
