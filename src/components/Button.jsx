import React from 'react'

function Button({value, compare, data}) {
  return (
    <div>
      
      <button onClick={()=> compare(value)} >{value}</button>
    </div>
  )
}

export default Button