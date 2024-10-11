import React from "react";
import Cloth from "./Cloth";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { capdata } from "../Utils/data";
import { clothdata } from "../Utils/data";
function Clothes() {
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
    <div className="h-full w-full bg-green-200">
      <Carousel infinite={true} responsive={responsive}>
        {capdata.map((elem) => {
            let photo = elem.url 
          {
           return clothdata.map((elem) => {
              return <Cloth data={elem.url} photo={photo} />;
            });
          }
        })}
      </Carousel>
    </div>
  );
}

export default Clothes;
