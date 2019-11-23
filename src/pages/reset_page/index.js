import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import BlackButton from "./../../components/black_button";
import CommonInput from "./../../components/common_input";
import HalfBkg from "./../../components/half_bkg";
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
          <CommonInput label="New Password"></CommonInput>
          <CommonInput label="Confirm Password"></CommonInput>
          <div className="mt-5">
            <BlackButton btn_name="UPDATE" page_url="/dashboard"></BlackButton>
          </div>
        </div>
      </div>
      <div className="reset-section--bkg">
        <HalfBkg></HalfBkg>
      </div>
    </div>
  );
}

export default ResetPage;
