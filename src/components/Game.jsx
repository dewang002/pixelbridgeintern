import React from "react";
import yellow from "../assets/Rectangle 3.png";
import gameword from "../assets/games.png";
import doggame1 from "../assets/alabay guard prev 2 2.png"
import doggame2 from "../assets/alabay lost heritage prev 1.png"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
function Game() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      scroll: Infinity,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="relative md:h-[150vh] w-full pb-10 bg-white">
      <div className="md:-translate-y-[20vw] yellowbg h-[100%]">
        <img className="h-full w-full" src={yellow} alt="" />
      </div>
      <div className="absolute top-[10vw] w-full md:h-[20vw] flex flex-col justify-center items-center gap-10">
        <img src={gameword} alt="" />
        <p className="text-6xl font-black">stay tuned for upcoming games !</p>
      </div>

      <div className="p-10 w-full  md:-translate-y-[45vw]">
      <Carousel infinite={true} responsive={responsive}>
        <div className="md:h-[80%] ">
          <img className="object-contain h-full w-[100%]" src={doggame1} alt="" />
         <Link to="/game/id1">
          <button  className=" z-50 relative -translate-y-[9vw] -translate-x-[50%] left-[50%] py-4 px-[4vw] text-xl font-bold rounded-[50px] text-white drop-shadow-2xl bg-purple-600">DISCOVER</button>
         </Link> 
        
        </div>
        <div className="md:h-[80%]  overflow-hidden">
          <img className="object-contain h-full w-[100%]" src={doggame2} alt="" />
          <Link to="/game/id2">
          <button className=" z-50 relative -translate-y-[9vw] -translate-x-[50%] left-[50%] py-4 px-[4vw] text-xl font-bold rounded-[50px] text-white drop-shadow-2xl bg-purple-600">DISCOVER</button>
          </Link>
       
        </div>
        </Carousel> 
      </div>

    </div>
  );
}

export default Game;
