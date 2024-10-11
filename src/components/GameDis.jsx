import React from 'react'
import { Link } from 'react-router-dom'

function GameDis({title,textcolor}) {
  return (
    <div className='h-[100vh] w-full '>
      <div>
        <img className="w-[40vw] object-cover" src={title} alt="" />
      </div>
      <h2 className={`text-4xl text-white font-bold ${textcolor} pt-20`}>FEATURES</h2>
      <p className='text-2xl text-white font-semibold mb-5 mt-10 '>Explore a variety of landscapes, including mountains, forests, deserts, and ancient ruins.</p>
      <p className='text-2xl text-white font-semibold mb-5 w-[80%] '>Use the Alabay's abilities to solve puzzles that involve moving objects, activating mechanisms, or finding hidden clues.</p>
      <p className='text-2xl text-white font-semibold mb-5 w-[80%] '>Discover relics that tell the story of the Alabay’s ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.</p>
      <p className='text-2xl text-white font-semibold mb-5 '>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</p>
      <div className='h-[40vh] w-full '>
        <h1 className='text-4xl text-white capitalize font-bold'>challenge mode</h1>
        <h2 className='pl-10 text-white text-2xl font-semibold'>- Time Trials: Compete in special timed challenges where the Alabai must navigate through complex mazes or <br /> complete puzzles within a time limit.</h2>
        <h2 className='pl-10 text-white text-2xl font-semibold'>- Exploration Mastery: A mode that rewards players for fully exploring every nook and cranny of the game’s world,<br />
        uncovering all secrets</h2>
        <div className='py-10 w-full flex justify-start items-center gap-10'>
          <button className='px-10 py-4 bg-white rounded-full text-xl font-bold'>PLAY</button>
          <Link to="/">
          <button className='px-10 py-4 rounded-full text-white text-xl border-2 border-white font-bold'>EXIT</button>
          </Link>
        
        </div>
      </div>
    </div>
  )
}

export default GameDis
