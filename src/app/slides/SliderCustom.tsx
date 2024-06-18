"use client";
import React from "react";
import Slider from "react-slick";
import Presentation from "./Presentation";
import Expertise from "./Expertise";
import Tools from "./Tools";
import Contact from "./Contact";

export default function SliderCustom() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  return (
    <Slider {...settings}>
      <Presentation />
      <Expertise />
      <Tools />
      <Contact />
    </Slider>
  );
}
