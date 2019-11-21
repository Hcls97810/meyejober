import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./style.scss";

const AddButton = ({ btn_label, btn_url }) => {
  return (
    <div className="add-btn">
      <div className="btn-circle">
        <a href={btn_url} className="btn-link">
          +
        </a>
      </div>
      <div className="btn-label">{btn_label}</div>
    </div>
  );
};

export default AddButton;
