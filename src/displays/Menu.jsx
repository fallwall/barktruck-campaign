import React from 'react';
import MenuPrint from '../assets/MenuPrint.jpg';
import MenuBoard from '../assets/MenuBoard.jpg';
import MenuBoardMockup from '../assets/MenuBoardMockup.jpg';

const Menu = () => {
  return (
    <div className="Display-Menu">
      <img
        style={{ width: `60vw`, marginLeft: `20vw` }}
        src={MenuPrint} alt="printed version on paper" />
      <img
        style={{ width: `50vw`, marginLeft: `25vw` }}
        src={MenuBoard} alt="board version print" />
      <img
        style={{ width: `50vw`, marginLeft: `25vw` }}
        src={MenuBoardMockup} alt="board version mockup" />
    </div>
  )
}

export default Menu;