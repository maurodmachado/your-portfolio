import React from 'react';
import './Cover.css';
import CoverVideo from '../../media/cover.mp4';

const Cover = ({translate}) => {
    return (
        <div className='cover-container'>
            <video className='video' src={CoverVideo} autoPlay loop muted />
            <h1>{translate('cover.title')}</h1>
            <p>{translate('cover.subtitle1')}</p>
            <p>{translate('cover.subtitle2')}</p>
        </div>
    )
}

export default Cover;