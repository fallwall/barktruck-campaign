import React from 'react';
import InstaMotionAd from '../assets/InstaMotionAd.gif';
import InstaAdMockup from '../assets/InstaAdMockup.jpg';

const Insta = () => {
  return (
    <div className="Display-Insta">
      <img
        src={InstaMotionAd} alt="good enough for you. goof enough for the pup."
        style={{ objectFit: 'contain' }}
      />
      <img
        src={InstaAdMockup} alt="static for campaign."
        style={{ objectFit: 'contain' }}
      />
    </div>
  )
}

export default Insta;