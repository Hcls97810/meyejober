import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import "./style.scss";

function ResetPage() {
  return (
    <div className="reset">
      <div className="reset-section--input">
        <div className="reset-section1">
          <div className="reset-section1-large-title">Reset Password</div>
          <div className="reset-section1-small-title">
            Create a new password
          </div>
        </div>
        <div className="reset-section2">
          <TextField label="New Password" className="pb-3" />
          <TextField label="Confirm Password" className="pb-3" />
          <div className="reset-section2-update-btn">
            <a href="#" className="reset-section2-update-btn-text">
              UPDATE
            </a>
          </div>
        </div>
      </div>
      <div className="reset-section--bkg">
        <div className="reset-section--bkg-title">
          meye<b>jobber</b>
        </div>
        <div className="reset-section--bkg-numbergroup">
          <div className="reset-section--bkg-numbergroup-number">1</div>
          <div className="reset-section--bkg-numbergroup-number">2</div>
          <div className="reset-section--bkg-numbergroup-number">3</div>
          <div className="reset-section--bkg-numbergroup-number">4</div>
        </div>
      </div>
    </div>
  );
}

export default ResetPage;
