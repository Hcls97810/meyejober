import React, { Component } from "react";
import "./style.scss";
export class ContractLength extends Component {
  constructor() {
    super();
    this.state = {
      progress_state: 2
    };
    this.onMinus = this.onMinus.bind(this);
    this.onPlus = this.onPlus.bind(this);
    console.log(this.progress_state);
  }

  onMinus() {
    this.setState({
      progress_state:
        this.state.progress_state < 0
          ? (this.state.progress_state = 0)
          : this.state.progress_state - 1
    });
    console.log(this.progress_state);
  }
  onPlus() {
    this.setState({
      progress_state:
        this.state.progress_state > 5
          ? (this.state.progress_state = 5)
          : this.state.progress_state + 1
    });
    console.log(this.progress_state);
  }
  render() {
    return (
      <div>
        <div className="contract-length">
          <div className="minus-button" onClick={this.onMinus}>
            -
          </div>
          <div className="stick-bkg">
            <div
              className={
                this.state.progress_state == 0
                  ? "stick-plus-progress0"
                  : this.state.progress_state == 1
                  ? "stick-plus-progress1"
                  : this.state.progress_state == 2
                  ? "stick-plus-progress2"
                  : this.state.progress_state == 3
                  ? "stick-plus-progress3"
                  : this.state.progress_state == 4
                  ? "stick-plus-progress4"
                  : this.state.progress_state == 5
                  ? "stick-plus-progress5"
                  : this.state.progress_state > 5
                  ? "stick-plus-progress5"
                  : this.state.progress_state < 0
                  ? "stick-plus-progress0"
                  : "stick-plus-progress1"
              }
            ></div>
          </div>
          <div className="plus-button" onClick={this.onPlus}>
            +
          </div>
        </div>
        <div className="contract-length-label">
          {this.state.progress_state == 0
            ? "Less than a week"
            : this.state.progress_state == 1
            ? "Less than a month"
            : this.state.progress_state == 2
            ? "A month"
            : this.state.progress_state == 3
            ? "Two months"
            : this.state.progress_state == 4
            ? "Three months"
            : this.state.progress_state == 5
            ? "More than three months"
            : this.state.progress_state > 5
            ? "More than three months"
            : this.state.progress_state < 0
            ? "Less than a week"
            : "Error Contract"}
        </div>
      </div>
    );
  }
}
export default ContractLength;
