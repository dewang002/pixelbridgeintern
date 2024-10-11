import React from "react";
import Gamecards from "./Gamecards";

function Gameplay({ title, page1para, page1btn,cardheading , imgdata }) {
  return (
    <div className="h-[100vh] pt-20 px-10 w-full ">
      <div>
        <img className="w-[40vw] object-cover" src={title} alt="" />
      </div>
      <p className="text-white text-4xl font-semibold w-[48%] pt-16">
        {page1para}
      </p>
      <button
        className={`py-4 px-20 mt-10 rounded-full text-[21px] ${page1btn}`}
      >
        PLAY
      </button>
      <div className="pt-10">
        <h1 className="font-semibold text-4xl text-white">
          <span className={`text ${cardheading}`}>GAME</span> PREVIEW
        </h1>
        <Gamecards imgurl={imgdata}  />  { /* send data over here */}
      </div>
    </div>
  );
}

export default Gameplay;
