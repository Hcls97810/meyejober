import React, { Component } from "react";
import "./style.scss";

const SelectMaterial = ({ label, category, value, onChange }) => {
  var customData = require("./../../assets/category.json");
  //console.log("materail", customData[category]);
  return (
    <div className="selectmaterial">
      <select
        className="selectmaterial-text"
        value={value}
        onChange={onChange}
        required
      >
        <option value="" disabled selected></option>
        {customData[category] &&
          customData[category].map(item => {
            return <option value={item.name}>{item.name}</option>;
          })}
      </select>
      <span className="selectmaterial-highlight"></span>
      <span className="selectmaterial-bar"></span>
      <label className="selectmaterial-label">{label}</label>
    </div>
  );
};

export default SelectMaterial;
