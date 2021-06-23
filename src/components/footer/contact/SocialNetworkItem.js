import React from 'react'
import { SocialIcon } from 'react-social-icons'

const SocialNetworkItem = ({network, url, color}) => {
    return (
        <div className='sns-item'>
                <SocialIcon
                  network={network}
                  url={url}
                  target='_blank'
                  rel='noreferrer'
                  bgColor={color}
                  className={network}
                />
              </div>
    )
}

export default SocialNetworkItem
