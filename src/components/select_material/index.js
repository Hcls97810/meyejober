import React, { Component } from "react";
import "./style.scss";
const SelectMaterial = ({ label }) => {
  return (
    <div class="selectmaterial">
      <select class="selectmaterial-text" required>
        <option value="" disabled selected></option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </select>
      <span class="selectmaterial-highlight"></span>
      <span class="selectmaterial-bar"></span>
      <label class="selectmaterial-label">{label}</label>
    </div>
  );
};

export default SelectMaterial;
