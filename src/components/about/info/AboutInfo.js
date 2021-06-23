import React from 'react';
import imagenAbout from '../../../media/yourImage.png';

const AboutInfo = ({translate, animate})  => {
  return (
    <div className='about-info'>
      <div className='about-description'>
        <h3 className={animate ? "animate__animated animate__bounceInLeft animate__fast" : ""}>{translate('about.title')}</h3>
        <p className={animate ? "animate__animated animate__fadeIn animate__fast" : ""}>{translate('about.aboutInfo')}</p>
      </div>
      <div className='about-img'>
        <img className={animate ? 'img animate__animated animate__zoomIn' : 'img'} src={imagenAbout} alt='about' />
      </div>
    </div>
  );
};

export default AboutInfo;
