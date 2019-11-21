import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import BlackButton from "./../../components/black_button";
import HalfBkg from "./../../components/half_bkg";
import "./style.scss";

function VerifyPage() {
  return (
    <div className="verify">
      <div className="verify-section--input">
        <div className="verify-section1">
          <div className="verify-section1-large-title">Verify Code</div>
          <div className="verify-section1-small-title">
            Enter the 4 digit code
          </div>
          <div className="verify-section1-small-title">
            sent to you by text message.
          </div>
          <div className="verify-section1-tiny-title mt-5">
            This code is valid for 05:00
          </div>
        </div>
        <div className="verify-section2">
          <div className="verify-section2-codegroup">
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
            <input
              type="text"
              maxLength="1"
              size="1"
              min="0"
              max="9"
              pattern="[0-9]{1}"
            />
          </div>
          <div className="mt-5">
            <BlackButton btn_name="VERIFY" page_url="/verify"></BlackButton>
          </div>
        </div>
      </div>
      <div className="verify-section--bkg">
        <HalfBkg></HalfBkg>
      </div>
    </div>
  );
}

export default VerifyPage;
