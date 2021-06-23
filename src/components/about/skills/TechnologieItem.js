import React from 'react';

const TecnologieItem = ({ tecnologie }) => {
  return (
    <div className='technologies-item'>
      <img
        className='img-technologies'
        src={tecnologie.img}
        alt={tecnologie.info}
      />
      <label className='skillname'>{tecnologie.name}</label>
      <label className='skill'>{tecnologie.skill}</label>
    </div>
  );
};

export default TecnologieItem;
