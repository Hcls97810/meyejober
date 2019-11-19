import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import "./style.scss";

function SignInPage() {
  return (
    <div className="container signin">
      <div className="container signin-section1">
        <div className="signin-section1-large-title">Welcome back,</div>
        <div className="signin-section1-small-title">sign in to continue</div>
      </div>
      <div className="container signin-section2">
        <TextField label="Email Address" className="pb-3" />
        <TextField label="Password" className="pb-5" />
        <div className="container signin-section2-sigin-btn">
          <a href="#" className="signin-section2-sigin-btn-text">
            SIGN IN
          </a>
        </div>
        <a href="/forgot" className="signin-section2-forgotpasswd pt-3">
          Forgot Password?
        </a>
      </div>
      <div className="container signin-section3">
        <a href="/signup" className="signin-section3-signup">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default SignInPage;

// export class SignInPage extends Component {
//   render() {
//     return (
//       <div className="container signin">
//         <div className="container section1">
//           <div className="section1-large-title">Welcome back,</div>
//           <div className="section1-small-title">sign in to continue</div>
//         </div>
//         <div className="container section2">
//           <TextField label="Email Address" classes={this.props.classes} />
//           <TextField label="Password" classes={this.props.classes} />
//           <Button variant="dark">Dark</Button>
//           <div>Forgot Password?</div>
//         </div>
//         <div className="container section3">
//           <div>Sign Up</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SignInPage;
