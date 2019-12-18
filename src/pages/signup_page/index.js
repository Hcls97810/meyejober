import React, { Component, useState } from "react";
import { useMutation } from "react-apollo-hooks";
import { useHistory } from "react-router-dom";
import gql from "graphql-tag";
import Loader from "react-loader-spinner";
import BlackButton from "./../../components/black_button";
import CommonInput from "./../../components/common_input";
import "./style.scss";

function SignUpPage() {
  let history = useHistory();
  let role = "employer";
  let newUser = true;

  const auth = [{ token: "" }, { _id: 0 }, { role: "" }];

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const SIGN_UP = gql`
    mutation(
      $email: String!
      $password: String!
      $role: String!
      $phone: String!
      $newUser: Boolean!
    ) {
      signup(
        email: $email
        password: $password
        role: $role
        phone: $phone
        newUser: $newUser
      ) {
        token
        _id
        role
        newUser
      }
    }
  `;

  const [signup, { data, loading, error }] = useMutation(SIGN_UP, {
    variables: {
      email: email,
      password: password,
      role: role,
      phone: phone,
      newUser: newUser
    }
  });

  const gotoProfile = () => {
    console.log(data.signup.token);
    console.log(data.signup._id);
    history.push("/profile");
  };

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
          <CommonInput
            label="Email Address"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></CommonInput>
          <CommonInput
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></CommonInput>
          <CommonInput
            label="Phone Number"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          ></CommonInput>
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
            <BlackButton btn_name="SIGN UP" handleEvent={signup}></BlackButton>
            {loading ? (
              <Loader
                type="ThreeDots"
                color="#000000"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            ) : null}
            {error ? <div className="mt-5">*****Error******</div> : null}
            {data && data.signup ? <div>success</div> : null}
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
