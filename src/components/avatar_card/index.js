import React, { Component } from "react";
import ImgDot from "./../../assets/img_dot.png";
import "./style.scss";
const AvatarCard = ({ avatar, name }) => {
  return (
    <div className="avatarcard-section">
      <img src={avatar} className="avatar-photo" />
      <div className="avatar-name">{name}</div>
      <img src={ImgDot} className="avatar-menu" />
    </div>
  );
};

export default AvatarCard;
