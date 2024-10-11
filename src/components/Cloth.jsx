import React from 'react'

function Cloth({data,photo}) {

  return (
    <div className='h-full w-full bg-slate-200'>
      <img className='relative z-0' src={data} alt="" />
      <img className='absolute z-20 top-0' src={photo} alt="" />
    </div>
  )
}

export default Cloth
