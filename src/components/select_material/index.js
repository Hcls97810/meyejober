import React, { Component } from "react";
import "./style.scss";

const SelectMaterial = ({ label, category }) => {
  var customData = require("./../../assets/category.json");
  console.log("materail", customData[category]);
  return (
    <div class="selectmaterial">
      <select class="selectmaterial-text" required>
        <option value="" disabled selected></option>
        {customData[category] &&
          customData[category].map(item => {
            return <option value={item.name}>{item.name}</option>;
          })}
      </select>
      <span class="selectmaterial-highlight"></span>
      <span class="selectmaterial-bar"></span>
      <label class="selectmaterial-label">{label}</label>
    </div>
  );
};

export default SelectMaterial;
