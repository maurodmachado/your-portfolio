import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Info.css';

const Info = ({translate}) => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className='info-container' id='section3' onMouseOver={() =>setAnimate(true)} onMouseLeave={()=>setAnimate(false)}>
      <div className='info'>
        <h1  className={animate ? "animate__animated animate__fadeInLeft animate__slower" : ""}>{translate('info.title')}</h1>
      </div>
    </div>
  );
};

export default Info;