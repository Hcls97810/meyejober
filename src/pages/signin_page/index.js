import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import BlackButton from "./../../components/black_button";
import CommonInput from "./../../components/common_input";
import AuthContext from "./../../components/auth-context/auth-context";
import "./style.scss";

export default class SignInPage extends React.Component {
  constructor(props) {
    super(props);
    this.emailEl = React.createRef();
    this.passwordEl = React.createRef();
  }

  static contextType = AuthContext;
  submitHandler = event => {
    event.preventDefault();
    const email = this.emailEl.current.value;
    const password = this.passwordEl.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    console.log(email, password);

    const requestBody = {
      query: `
        mutation {
          login (email: "${email}", password: "${password}") {
            token
            _id
            role
            newUser
          }
        }
      `
    };

    fetch("http://18.130.169.111:3000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if ((res.status !== 200) & (res.status !== 201)) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then(resData => {
        if (resData.data.login.token) {
          this.context.login(
            resData.data.login.newUser,
            resData.data.login.role,
            resData.data.login.token,
            resData.data.login._id
          );
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="container signin">
        <div className="container signin-section1">
          <div className="signin-section1-large-title">Welcome back,</div>
          <div className="signin-section1-small-title">sign in to continue</div>
        </div>
        <div className="container signin-section2">
          <div className="mb-2">
            <CommonInput label="Email Address"></CommonInput>
          </div>
          <div className="mb-4">
            <CommonInput label="Password"></CommonInput>
          </div>
          <div className="mb-3">
            <BlackButton btn_name="SIGNIN" page_url="/dashboard"></BlackButton>
          </div>
          <form className="mb-3" onSubmit={this.submitHandler}>
            <input type="email" id="email" ref={this.emailEl} />
            <input type="password" id="passwordd" ref={this.passwordEl} />
            <input type="submit" value="SIGNIN_TEST" />
          </form>
          <a href="/forgot" className="signin-section2-forgotpasswd pt-3">
            Forgot Password?
          </a>
        </div>
        <div className="container signin-section3 ">
          <a href="/signup" className="signin-section3-signup">
            Sign Up
          </a>
        </div>
      </div>
    );
  }
}
