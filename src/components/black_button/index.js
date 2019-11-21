import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.scss";
const BlackButton = ({ btn_name, page_url }) => {
  return (
    <div>
      <Link to={page_url} className="custom-button-link">
        <div className="custom-button">{btn_name}</div>
      </Link>
    </div>
  );
};

export default BlackButton;
