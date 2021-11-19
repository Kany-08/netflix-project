import React from "react";
import Slider from "react-slick";

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  export default function Carousel() {
    return <Slider/>
  }