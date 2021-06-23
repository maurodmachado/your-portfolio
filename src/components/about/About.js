import React, { useState } from 'react';
import './About.css';
import AboutInfo from './info/AboutInfo';
import AboutSkills from './skills/AboutSkills';

const About = ({translate}) => {  

  const [animate, setAnimate] = useState(false);

  return (
    <div className='about-container' id='section1' onMouseOver={() =>setAnimate(true)} onMouseLeave={()=>setAnimate(false)}>
      <AboutInfo translate={translate} animate={animate} setAnimate={setAnimate}/>
      <AboutSkills translate={translate} animate={animate} setAnimate={setAnimate}/>
    </div>
  );
};

export default About;
