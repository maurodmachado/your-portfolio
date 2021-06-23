import React, { useState } from 'react';
import './Cover.css';
import CoverVideo from '../../media/cover.mp4';

const Cover = ({translate}) => {
    const [animate, setAnimate] = useState(false);
    return (
        <div className='cover-container' onMouseOver={() =>setAnimate(true)} onMouseLeave={()=>setAnimate(false)}>
            <video className='video' src={CoverVideo} autoPlay loop muted />
            <h1 className={animate ? "animate__animated animate__zoomIn" : ""}>{translate('cover.title')}</h1>
            <p className={animate ? "animate__animated animate__zoomIn" : ""}>{translate('cover.subtitle1')}</p>
            <p className={animate ? "animate__animated animate__zoomIn" : ""}>{translate('cover.subtitle2')}</p>
        </div>
    )
}

export default Cover;