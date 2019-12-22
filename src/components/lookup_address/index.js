import React, { Component } from "react";
import { codes } from "iso-country-codes";
import BlackButton from "./../back_button";
import DisabledInput from "./../disabled_input";
import "./style.scss";

const GET_ADDRESS_KEY = "HezNwN_noUeSNI9NsDugiw20864";

export class LookupAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noData: false,
      addresses: null,
      selectedAddress: false,
      index: 0
    };
  }

  onShowAddress = async () => {
    console.log(this.state);
    const response = await fetch(
      `https://api.getAddress.io/find/${this.props.postcode}?api-key=${GET_ADDRESS_KEY}&expand=true`
    )
      .then(function(res) {
        return res.json();
      })
      .then(function(result) {
        return result;
      });
    if (response.Message) {
      this.setState({
        noData: false,
        addresses: null,
        selectedAddress: false
      });
    } else {
      this.setState({
        addresses: response,
        selectedAddress: false,
        noData: true
      });
    }
    console.log(this.state);
  };

  onSelectAddress = index => {
    this.setState({
      selectedAddress: true,
      index: index
    });
  };

  render() {
    return (
      <div className="mt-3">
        <div className="custom-button mb-3" onClick={this.onShowAddress}>
          LOOKUP ADDRESS
        </div>
        <div
          className={
            this.state.noData && !this.state.selectedAddress
              ? "addressList"
              : "addressList addressListHide"
          }
        >
          {this.state.noData && !this.state.selectedAddress
            ? this.state.addresses.addresses.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="addressList-item"
                    onClick={() => this.onSelectAddress(index)}
                  >
                    <div className="addressinfo">
                      <div>{item.building_number}</div>
                      <div>,&nbsp;</div>
                      <div>{item.district}</div>
                      <div>,&nbsp;</div>
                      <div>{item.county}</div>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        {this.state.selectedAddress ? (
          <div className="addressDisplay">
            <DisabledInput
              label="House Name / Number"
              value={
                this.state.addresses.addresses[this.state.index].building_number
              }
            ></DisabledInput>
            <DisabledInput
              label="Street Name"
              value={this.state.addresses.addresses[this.state.index].district}
            ></DisabledInput>
            <DisabledInput
              label="City"
              value={this.state.addresses.addresses[this.state.index].county}
            ></DisabledInput>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default LookupAddress;
