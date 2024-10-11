import React from 'react'
import Gamecard from './Gamecard'

function Gamecards({imgurl}) {
  return (
    <div className='h-[26vh] flex gap-5 mt-10 w-full'>
     {imgurl.map(elem=>(
        <Gamecard img={elem.url} />
     ))}  {/*according to the data cards will get displayed. and send card img url map it*/}
    </div>
  )
}

export default Gamecards
