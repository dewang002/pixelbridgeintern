import React from "react";
import title from "../assets/PROJECT VISION.png";
import bigYellowBox from "../assets/Rectangle 3.png";
import doggroup from "../assets/doggroup.png";
import rodemap from "../assets/rodemap.png";
import one from "../assets/mapdog.png";
function Vision() {
  return (
    <div className="h-[290vh] w-full bg-white py-20">
      <h1 className="w-[70vw] -translate-x-[50%] relative left-[50%]">
        <img src={title} alt="" />
      </h1>
      <div className="relative translate-y-[18vw]">
        <img
          className="relative object-cover h-full w-full"
          src={bigYellowBox}
          alt=""
        />
        <img className="absolute -top-[15vw] z-10 " src={doggroup} alt="" />
        <p className="-translate-y-[60vw] text-center leading-9 text-4xl font-bold">
          Our mission is to honor the heritage of the Alabay by creating a{" "}
          <br /> vibrant, loyal, and powerful community. Just as the Alabay
          protects its <br /> flock, we aim to build a pack that stands strong
          together.
        </p>
      </div>
      <div className=" px-10 h-[100vh] relative -translate-y-[55vh]">
        <h1>
          <img className="w-[50vw]" src={rodemap} alt="" />
        </h1>
        <div className="h-[90%] w-full flex">
          <div className="left w-[50%] flex flex-col  justify-center h-full pt-14">
            <h2 className="font-bold text-[26px] w-96">
              Our journey is just beginning. Explore our roadmap to see the
              exciting milestones and future plans we have in store.
            </h2>
            <p className="font-bold text-[26px] text-[#FFA800] w-70">
              Join us as we grow and achieve <br /> new heights.
            </p>
          </div>
          <div className="right w-[50%] h-full">
            {" "}
            <img className="w-[941px]" src={one} alt="mapdog" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
