import React from 'react'
import yellow from '../assets/Rectangle 3.png'
import token from '../assets/TOKENOMICS.png'
import moneydog from '../assets/money.png'
import box1 from '../assets/box1.png'
import box2 from '../assets/box2.png'
import box3 from '../assets/box3.png'
function Tocken() {
  return (
    <div className='relative h-[150vh] w-full bg-white'>
      <div className=' yellowbg h-[100%]'>
        <img className='h-full w-full' src={yellow} alt="" />
      </div>
      <div className='absolute h-[60%] w-full top-48'>
        <div className='pl-10'><img className='w-[60%]' src={token} alt="" /></div>
        <div className='h-full w-full flex'>
            <div className="left flex flex-col py-20 pl-44 items-end h-full w-[50%]">
                <div className=''><img className='' src={box1} alt="" /></div>
                <div className=''><img className='' src={box2} alt="" /></div>
                <div className=''><img className='' src={box3} alt="" /></div>   
            </div>
            <div className="right h-full p-14 w-[50%] ">
                <img src={moneydog} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Tocken
