import React, { useState } from 'react';

const TechnologieItem = ({ technologie }) => {
  
  const [overskill, setOverskill] = useState(false);

  return (
    <div className={overskill ? 'technologies-item over' : 'technologies-item'} 
    onMouseOver={() => setOverskill(true)}
    onMouseLeave={() => setOverskill(false)}>
      <img
        className='img-technologies'
        src={technologie.img}
        alt={technologie.info}
      />
      <label className='skillname'>{technologie.name}</label>
      <label className='skill'>{technologie.skill}</label>
    </div>
  );
};

export default TechnologieItem;
