import React, { useState } from 'react';
import Coffee from './Coffee';
import SocialNetworkItem from './SocialNetworkItem';

const FooterContact = ({ translate }) => {
  const [animate, setAnimate] = useState(false);
  const socialNetworks = [
    {
      network: 'linkedin',
      url: 'https://www.linkedin.com/in/',
      color: '#0e76a8',
    },
    {
      network: 'facebook',
      url: 'https://www.facebook.com/',
    },
    {
      network: 'twitter',
      url: 'https://twitter.com/',
    },
    {
      network: 'github',
      url: 'https://github.com/',
      color: '#ffffff',
    }
  ];

  return (
    <div className='footer-row'>
    <div className='footer-info' onMouseOver={() =>setAnimate(true)} onMouseLeave={()=>setAnimate(false)}>
        <h2 className={animate ? "animate__animated animate__bounce" : ""}>{translate('footer.name')}</h2>
        <p className={animate ? "animate__animated animate__bounce" : ""}>{translate('footer.location')}</p>
      </div>
      <div className='footer-contact'>
        <h3>{translate('footer.contactme')}</h3>
        <div className='sns-links'>
          {socialNetworks.length !== 0 ? (
            socialNetworks.map((socialNetwork) => (
              <SocialNetworkItem
                network={socialNetwork.network}
                url={socialNetwork.url}
                color={socialNetwork.color}
              />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='footer-contact coffee' >        
         <Coffee translate={translate}/>         
      </div>
    </div>
  );
};

export default FooterContact;
