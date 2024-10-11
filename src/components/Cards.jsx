import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Cards({data}) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red",paddingRight:"4px",paddingTop:'1px',borderRadius:"50px"  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "grey",paddingRight:"4px",paddingTop:'1px',borderRadius:"50px" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="h-[300px] overflow-hidden px-10  w-full ">
      <Slider {...settings}>
       {data?.map(elem => <Card key={elem.id} url={elem.url}  />)} 
      </Slider>
    </div>
  );
}

export default Cards;
