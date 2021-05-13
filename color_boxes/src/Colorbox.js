import React from 'react';
import './Colorbox.css';


export default function Colorbox({ color, handleClick, id }) {
  const divStyle = {
    backgroundColor: color
  }

  return (
    
    <div className="Colorbox" id={id} style={divStyle} onClick={handleClick} >

    </div>
  )
}
