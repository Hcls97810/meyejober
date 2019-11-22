import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import BlackButton from "./../../components/black_button";
import CommonInput from "./../../components/common_input";
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
          <CommonInput label="Email Address"></CommonInput>
          <CommonInput label="Password"></CommonInput>
          <CommonInput label="Phone Number"></CommonInput>
          <div className="signup-section2-alignleft mt-3">
            <input type="checkbox" name="vehicle1" value="Bike" /> By creating
            an account you agree to meyejobber's
          </div>
          <div className="signup-section2-alignleft pl-3">
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
            <BlackButton btn_name="SIGN UP" page_url="/profile"></BlackButton>
          </div>
          <div className="signup-section2-textlink mt-3">
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
