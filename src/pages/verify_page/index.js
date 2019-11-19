import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import "./style.scss";

function VerifyPage() {
  return (
    <div className="verify">
      <div className="verify-section--input">
        <div className="verify-section1">
          <div className="verify-section1-large-title">Verify Code</div>
          <div className="verify-section1-small-title">
            Enter the 4 digit code sent to you by text message.
          </div>
          <div className="verify-section1-tiny-title">
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
          <div className="verify-section2-verify-btn">
            <a href="/reset" className="verify-section2-verify-btn-text">
              VERIFY
            </a>
          </div>
        </div>
      </div>
      <div className="verify-section--bkg">
        <div className="verify-section--bkg-title">
          meye<b>jobber</b>
        </div>
        <div className="verify-section--bkg-numbergroup">
          <div className="verify-section--bkg-numbergroup-number">1</div>
          <div className="verify-section--bkg-numbergroup-number">2</div>
          <div className="verify-section--bkg-numbergroup-number">3</div>
          <div className="verify-section--bkg-numbergroup-number">4</div>
        </div>
      </div>
    </div>
  );
}

export default VerifyPage;
