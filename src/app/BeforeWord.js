import React from 'react'

const BeforeWord = ({ list }) => {
  return (
    <>
        <div>前の単語 : "{list.at(-1)}"</div>
    </>
  )
}

export default BeforeWord