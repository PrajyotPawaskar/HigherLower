import React from 'react'

function Question({data}) {
  return (
      <div>{`${data[0].optionName} is higher or lower than ${data[1].optionName}`}</div>
  )
}

export default Question