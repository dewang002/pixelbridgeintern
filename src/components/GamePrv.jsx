import React from 'react'
import Gamecards from './Gamecards'
import { gameprev } from '../Utils/data'
import socialheading from '../assets/Frame 49@2x.png'
function GamePrv() {
  const imgurl = gameprev
  return (
    <div className='h-[140vh] py-10 px-10  bg-white'>
      <h1 className='text-5xl font-black'> <span className='text-yellow-500 '>GAME</span> PREVIEWS</h1>
        {/* <Cards /> */}
        <Gamecards imgurl={imgurl} />

        <h1 className='h-[90%]'><img className=' h-full  object-contain' src={socialheading} alt="" /></h1>
    </div>
  )
}

export default GamePrv
