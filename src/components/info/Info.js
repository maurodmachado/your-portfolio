import React from 'react';
import './Info.css';

const Info = ({translate}) => {
  
  return (
    <div className='info-container' id='section3'>
      <div className='info'>
        <h1>{translate('info.title')}</h1>
      </div>
    </div>
  );
};

export default Info;