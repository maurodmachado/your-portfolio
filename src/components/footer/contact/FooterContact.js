import React from 'react';
import Coffee from './Coffee';
import SocialNetworkItem from './SocialNetworkItem';

const FooterContact = ({ translate }) => {
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
      <div className='footer-info'>
        <h2>{translate('footer.name')}</h2>
        <p>{translate('footer.location')}</p>
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
