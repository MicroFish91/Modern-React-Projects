import React from 'react'
import "./Cell.css"

function Cell({ lit, handleClick, value }){
    
  return (
    <div className={lit} onClick={handleClick} id={value}>
        
    </div>
  )

}

export default Cell;