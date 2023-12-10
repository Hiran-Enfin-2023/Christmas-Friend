import React from "react";
import slider from "../../assets/slider-01.jpg";
import "./Slider.css"
function Slider() {
  return (
    <div className="slider-div">
      <img src={slider} alt="" />
    </div>
  );
}

export default Slider;
