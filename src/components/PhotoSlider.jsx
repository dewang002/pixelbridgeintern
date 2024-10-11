import React, { useState } from "react";
import Cards from "./Cards";
import { cardsdata } from "../Utils/data";
function PhotoSlider() {
  const [filterdata, setFilterdata] = useState(cardsdata);
  
  const handleclick = (value) => {
    if (value === "all") {
      setFilterdata(cardsdata);
    } else {
      const filteredData = cardsdata.filter((elem) => elem.type === value);
      setFilterdata(filteredData);
    }
  };
  return (
    <div className="h-[55vh] relative z-[999] w-full bg-white flex flex-col items-center">
      <div className="flex text-xl font-bold gap-10 justify-center pb-8 cursor-default">
        <h2 onClick={() => handleclick("all")}>ALL</h2>
        <h2 onClick={() => handleclick("img")}>PHOTO</h2>
        <h2 onClick={() => handleclick("video")}>VIDEOS</h2>
      </div>
      <div className="h-full w-[100%]">
        <Cards  data={filterdata} />
      </div>
    </div>
  );
}

export default PhotoSlider;
