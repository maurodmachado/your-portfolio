import React from 'react';
import './Footer.css';
import FooterContact from './contact/FooterContact';
import FooterExperience from './experience/FooterExperience';

const Footer = ({translate}) => {

  return (
    <footer>
      <div className='footer-container'>
        <FooterContact translate={translate}/>
        <FooterExperience translate={translate}/>
      </div>
    </footer>
  );
};

export default Footer;
