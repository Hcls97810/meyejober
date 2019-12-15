import React, { Component } from "react";
import "./style.scss";
const DisabledInput = ({ label, value }) => {
  return (
    <div className="disabledinput">
      <input
        className="disabledinput--input"
        type="text"
        id={label}
        placeholder={value}
      />
      <label className="disabledinput--label" for={label}>
        {label}
      </label>
      <div className="disabledinput--bar"></div>
    </div>
  );
};

export default DisabledInput;
