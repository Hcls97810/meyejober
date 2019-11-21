import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import BlackButton from "./../../components/black_button";
import "./style.scss";

function SignUpPage() {
  return (
    <div className="signup">
      <div className="signup-section--input">
        <div className="signup-section1">
          <div className="signup-section1-large-title">Sign up</div>
          <div className="signup-section1-small-title">
            your business to meye<b>jobber</b>
          </div>
        </div>
        <div className="signup-section2">
          <TextField label="Email Address" className="pb-3" />
          <TextField label="Password" className="pb-3" />
          <TextField label="Phone Number" className="pb-3" />
          <div className="pt-3">
            <input type="checkbox" name="vehicle1" value="Bike" /> By creating
            an account you agree to meyejobber's
          </div>
          <div className="container">
            <a href="#" className="signup-section2-term">
              Terms and Conditions
            </a>{" "}
            and
            <a href="#" className="signup-section2-privacy">
              {" "}
              PrivacyPolicy
            </a>
          </div>
          <div className="mt-5">
            <BlackButton btn_name="SIGN UP" page_url="/dashboard"></BlackButton>
          </div>
          <div className="signup-section2-textlink">
            <a href="/forgot" className="signup-section2-forgot">
              Forgot Password?
            </a>
            <a href="/" className="signup-section2-signin">
              Sign In
            </a>
          </div>
        </div>
      </div>
      <div className="signup-section--bkg"></div>
    </div>
  );
}

export default SignUpPage;
