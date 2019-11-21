import React, { Component } from "react";
import "./style.scss";
const Journey = ({ job_state }) => {
  return job_state == 1 ? (
    <div className="journey">
      <div className="journey-circle-on">
        <div className="ml-5">Details</div>
      </div>
      <div className="journey-stick-off"></div>
      <div className="journey-circle-off">
        <div className="ml-5">Employment</div>
      </div>
      <div className="journey-stick-off"></div>
      <div className="journey-circle-off">
        <div className="ml-5">Address</div>
      </div>
    </div>
  ) : job_state == 2 ? (
    <div className="journey">
      <div className="journey-circle-on">
        <div className="ml-5">Details</div>
      </div>
      <div className="journey-stick-on"></div>
      <div className="journey-circle-on">
        <div className="ml-5">Employment</div>
      </div>
      <div className="journey-stick-off"></div>
      <div className="journey-circle-off">
        <div className="ml-5">Address</div>
      </div>
    </div>
  ) : (
    <div className="journey">
      <div className="journey-circle-on">
        <div className="ml-5">Details</div>
      </div>
      <div className="journey-stick-on"></div>
      <div className="journey-circle-on">
        <div className="ml-5">Employment</div>
      </div>
      <div className="journey-stick-on"></div>
      <div className="journey-circle-on">
        <div className="ml-5">Address</div>
      </div>
    </div>
  );
};

export default Journey;
