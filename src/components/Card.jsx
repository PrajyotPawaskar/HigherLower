import React from 'react'

function Card({ optionName, src }) {
  return (
    <div className="flex flex-col md:flex-col items-center justify-center">
      <img src={src} alt={optionName} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full" />
      <h3 className="mt-4 md:mt-0 md:ml-4 text-lg font-semibold">{optionName}</h3>
    </div>
  )
}

export default Card
