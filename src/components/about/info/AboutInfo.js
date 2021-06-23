import React from 'react';
import imagenAbout from '../../../media/yourImage.png';

const AboutInfo = ({translate})  => {
  return (
    <div className='about-info'>
      <div className='about-description'>
        <h3>{translate('about.title')}</h3>
        <p>{translate('about.aboutInfo')}</p>
      </div>
      <div className='about-img'>
        <img className='img' src={imagenAbout} alt='about' />
      </div>
    </div>
  );
};

export default AboutInfo;
