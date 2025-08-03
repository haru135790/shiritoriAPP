import React from 'react'

const ShiritoriLog = ({ list }) => {
  return (
    <>
      <div>---ShiritoriLog---</div>
      <div>{list.map((item, index) => (<div key={index}>{item}</div>))}</div>
    </>
  )
}

export default ShiritoriLog