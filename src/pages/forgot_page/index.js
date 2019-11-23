import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import HalfBkg from "./../../components/half_bkg";
import BlackButton from "./../../components/black_button";
import CommonInput from "./../../components/common_input";
import "./style.scss";

function ForgotPage() {
  return (
    <div className="forgot">
      <div className="forgot-section--input">
        <div className="forgot-section1">
          <div className="forgot-section1-large-title">Forgot Password</div>
          <div className="forgot-section1-small-title">
            We need your phone number to identify your account
          </div>
        </div>
        <div className="forgot-section2">
          <CommonInput label="Phone Number"></CommonInput>
          <div className="mt-5">
            <BlackButton btn_name="CONTINUE" page_url="/verify"></BlackButton>
          </div>
        </div>
        <a href="/" className="forgot-section2-signin">
          Sign In
        </a>
      </div>
      <div className="forgot-section--bkg">
        <HalfBkg></HalfBkg>
      </div>
    </div>
  );
}

export default ForgotPage;
