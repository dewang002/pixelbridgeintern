import React from "react";
import { useParams } from "react-router-dom";
import { gamedata } from "../Utils/data";
import Gameplay from "./Gameplay";
import GameDis from "./GameDis";
function GamePage() {
  const { id } = useParams();
  const page = gamedata[id];
  console.log(page);
  return (
    <div className={``}>
      <div className="h-screen z-0 fixed top-0 left-0 w-full">
        {" "}
        <img
          className="object-cover object-left"
          src={page.mainImg}
          alt=""
        />{" "}
        <div className="absolute top-0 h-full w-full bg-black opacity-65"></div>
      </div>
      <div className="min-h-screen z-10 absolute flex flex-col px-10  w-full overflow-hidden">
        <Gameplay
          title={page.title}
          page1para={page.page1para}
          page1btn={page.page1btn}
          cardheading={page.cardheading}
          imgdata={page.imgdata}
        />
        <GameDis
        title={page.title}
        page2btn={page.page2btn}
        textcolor={page.textcolor}
        />
      </div>
    </div>
  );
}

export default GamePage;
