import React from 'react'

function Gamecard({img}) {
  return (
    <div className='h-full w-[20vw] rounded-xl overflow-hidden flex justify-center items-center'>
      <img className='h-full  object-cover' src={img} alt="" />
    </div>
  )
}

export default Gamecard
