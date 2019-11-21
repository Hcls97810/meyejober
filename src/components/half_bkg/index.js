import React, { Component } from "react";
import "./style.scss";
export class HalfBkg extends Component {
  render() {
    return (
      <div className="halfbkg-section--bkg">
        <div className="halfbkg-section--bkg-title">
          meye<b>jobber</b>
        </div>
        <div className="halfbkg-section--bkg-numbergroup">
          <div className="halfbkg-section--bkg-numbergroup-number">1</div>
          <div className="halfbkg-section--bkg-numbergroup-number">2</div>
          <div className="halfbkg-section--bkg-numbergroup-number">3</div>
          <div className="halfbkg-section--bkg-numbergroup-number">4</div>
        </div>
      </div>
    );
  }
}

export default HalfBkg;
