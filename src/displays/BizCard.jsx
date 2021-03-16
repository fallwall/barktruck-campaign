import React from 'react';
import card from '../assets/card.jpg';

const BizCard = () => {
  return (
    <div className="Display-BizCard">

      <img
        style={{ width: `50vw`, marginLeft: `25vw` }}
        className="center-fit"
        src={card} alt="business card" />

    </div>
  )
}

export default BizCard;