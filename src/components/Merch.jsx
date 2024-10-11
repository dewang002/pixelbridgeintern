import React from 'react'
import merchendies from '../assets/merchandise.png'
import Clothes from './Clothes';

function Merch() {
  return (
    <div className=' h-[130vh] w-full bg-white'>
      <div className='h-[24%] flex justify-center items-center w-full'>
        <img className='w-2/4' src={merchendies} alt="" />
      </div>
      <div className='z-10 w-[1652px] rounded-3xl overflow-hidden h-[990px] left-[50%] -translate-x-[50%] relative bg-red-800'>
        <Clothes />
      </div>
    </div>
  )
}

export default Merch ;
