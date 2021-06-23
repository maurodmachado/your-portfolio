import React from 'react';
import './About.css';
import AboutInfo from './info/AboutInfo';
import AboutSkills from './skills/AboutSkills';

const About = ({translate}) => {  

  return (
    <div className='about-container' id='section1'>
      <AboutInfo translate={translate}/>
      <AboutSkills translate={translate}/>
    </div>
  );
};

export default About;
