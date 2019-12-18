import React, { useState } from "react";
import "./style.scss";
const CommonInput = props => {
  return (
    <div className="commoninput">
      <input
        className="commoninput--input"
        type="text"
        id={props.label}
        value={props.value}
        onChange={props.onChange}
        required
      />
      <label className="commoninput--label" htmlFor={props.label}>
        {props.label}
      </label>
      <div className="commoninput--bar"></div>
    </div>
  );
};

export default CommonInput;
