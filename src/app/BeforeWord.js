import React from 'react'

const BeforeWord = ({ list }) => {
  return (
    <>
        <div>前の単語は"{list.at(-1)}"です。</div>
        <div>次の文字は"{list.at(-1).slice(-1)}"です。</div>
    </>
  )
}

export default BeforeWord