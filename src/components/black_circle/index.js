import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./style.scss";

const BlackCircle = ({ circle_label1, circle_label2 }) => {
  return (
    <div className="numcircle">
      <div className="blackcircle-innerlabel">{circle_label1}</div>
      <div className="blackcircle-outlabel">{circle_label2}</div>
    </div>
  );
};

export default BlackCircle;
