import React, { useState } from "react";
import ImgDesp from "./../../assets/img_desp.png";
import ImgLocation from "./../../assets/img_location.png";
import ImgTime from "./../../assets/img_time.png";

import "./style.scss";
const ImageCard = ({ img, title, desc, location, time }) => {
  return (
    <div className="imagecard">
      <div className="imagecard-section1">
        <img src={img} className="imagecard-img"></img>
        <div className="imagecard--title">{title}</div>
      </div>
      <div className="imagecard-section2">
        <div className="imagecard-section2-desp">
          <img src={ImgDesp} className="imagecard-section2-img" />
          <div className="imagecard-section2-desp">{desc}</div>
        </div>
        <div className="imagecard-section2-footer">
          <div className="imagecard-section2-footer-imagetitle">
            <img src={ImgLocation} className="imagecard-section2-img" />
            <div className="imagecard-section2-small-title ml-2">
              {location}
            </div>
          </div>
          <div className="imagecard-section2-footer-imagetitle">
            <img src={ImgTime} className="imagecard-section2-img" />
            <div className="imagecard-section2-small-title ml-2">{time}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
