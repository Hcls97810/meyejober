import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.scss";
const BlackButton = ({ btn_name, handleEvent }) => {
  return (
    <div>
      <div className="custom-button" onClick={handleEvent}>
        {btn_name}
      </div>
    </div>
  );
};

export default BlackButton;
