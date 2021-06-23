import React from 'react';
import technologies from '../skills/Technologies';
import TechnologieItem from './TechnologieItem';

const AboutSkills = ({translate}) => {
  return (
    <div className='about-technologies'>
      <div className='about-technologies-title'>
        <h3>{translate('about.skills')}</h3>
      </div>
      <div className='about-technologies-items'>
        {technologies.length !== 0 ? (
          technologies.map((tec) => <TechnologieItem tecnologie={tec} />)
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AboutSkills;
