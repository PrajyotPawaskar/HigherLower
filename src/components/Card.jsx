import React from 'react'

function Card({optionName, src}) {
  return (
      <div className='card-info'>
        <img src={src} alt="" />
        <h3>{optionName}</h3>
    </div>
    
  )
}

export default Card