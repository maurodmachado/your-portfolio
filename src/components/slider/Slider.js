import React from 'react';
import ProjectSlider from './ProjectSlider';

const Slider = ({translate}) => {   
  return (
    <div className='projects-container' id='section2'>
    <div className='projects-label'>
      <label>
     {translate('slider.title')}
     </label>
    </div>
    <div className='projects-cards'>
    <ProjectSlider translate={translate}/>
    </div>
    </div>
  );
};

export default Slider;
