import React from 'react'
import "./Cell.css"

function Cell({ lit, value }){
    
  return (
    <div className={lit} id={value}>
        
    </div>
  )

}

export default Cell;