import React, { Component } from "react";
import { TextField } from "@material-ui/core";
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
          <TextField label="Phone Number" className="pb-3" />
          <div className="forgot-section2-continue-btn">
            <a href="/verify" className="forgot-section2-continue-btn-text">
              CONTINUE
            </a>
          </div>
        </div>
        <a href="/" className="forgot-section2-signin">
          Sign In
        </a>
      </div>
      <div className="forgot-section--bkg">
        <div className="forgot-section--bkg-title">
          meye<b>jobber</b>
        </div>
        <div className="forgot-section--bkg-numbergroup">
          <div className="forgot-section--bkg-numbergroup-number">1</div>
          <div className="forgot-section--bkg-numbergroup-number">2</div>
          <div className="forgot-section--bkg-numbergroup-number">3</div>
          <div className="forgot-section--bkg-numbergroup-number">4</div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPage;
