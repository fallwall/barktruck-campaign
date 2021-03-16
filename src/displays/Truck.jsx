import React from 'react';
import TruckMockup from '../assets/truckmockup.jpg';


const Truck = () => {
  return (
    <div className="Display-Menu">
      <img
        style={{ width: `40vw`, marginLeft: `30vw` }}
        src={TruckMockup} alt="future truck" />
    </div>
  )
}

export default Truck;