import React from 'react'
function Card({url,key}) {
  return (
    <div className='h-[300px] w-[456px] overflow-hidden'>
      
      <div key={key} className='h-full w-[80%] p-10 rounded-3xl bg-zinc-700'>
        <img className='h-full w-full object-contain object-top' src={url} alt="" />
      </div>
    </div>
  )
}

export default Card
