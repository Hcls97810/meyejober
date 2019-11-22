import React, { Component } from "react";
import "./style.scss";
const CommonInput = ({ label }) => {
  return (
    <div className="commoninput">
      <input className="commoninput--input" type="text" id={label} required />
      <label className="commoninput--label" for={label}>
        {label}
      </label>
      <div className="commoninput--bar"></div>
    </div>
  );
};

export default CommonInput;
