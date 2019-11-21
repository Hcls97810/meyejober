import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./style.scss";
const BackButton = ({ page_url }) => {
  return (
    <div className="back-button">
      <Link to={page_url} className="back-button-link">
        <div className="back-button-label">{"<"}</div>
      </Link>
    </div>
  );
};

export default BackButton;
