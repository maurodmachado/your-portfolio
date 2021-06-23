import React from 'react';
import imagenCafecito from '../../../media/networks/cafecito_logo.svg';

const Coffee = ({translate}) => {
  return (
    <div className='sns-links'>
      <h3>{translate('footer.inviteme')}</h3>
      <div className='sns-item'>
        <a
          href='https://cafecito.app/maurodmachado'   //If the project helped you, don't forget about me 😄
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='cafecito'
            style={{ height: 50, width: 50 }}
            src={imagenCafecito}
            alt={translate('footer.inviteme')}
          />
        </a>
      </div>
    </div>
  );
};

export default Coffee;
