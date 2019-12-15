import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AvatarCard from "./../../components/avatar_card";
import ImgVisa from "./../../assets/img_visa_card.png";
import ImgMaster from "./../../assets/img_master_card.png";
import ImgCheck from "./../../assets/img_check.png";
import AddButton from "./../../components/add_button";
import BlackButton from "./../../components/black_button";
import CommonInput from "./../../components/common_input";
import SideMinMenu from "./../../components/side_minmenu";
import { TextField } from "@material-ui/core";
import "./style.scss";

export default class AddCard extends React.Component {
  constructor() {
    super();
    this.state = {
      chkMaster: false,
      chkVisa: false
    };

    this.onCheckVisa = this.onCheckVisa.bind(this);
    this.onCheckMaster = this.onCheckMaster.bind(this);
  }
  onCheckMaster() {
    this.setState({
      chkMaster: true,
      chkVisa: false
    });
  }
  onCheckVisa() {
    this.setState({
      chkMaster: false,
      chkVisa: true
    });
  }
  render() {
    return (
      <div className="addcard">
        <SideMinMenu></SideMinMenu>
        <div className="addcard-exmenu">
          <div className="addcard-card-container">
            <img
              src={ImgVisa}
              className="addcard-card"
              onClick={this.onCheckVisa}
            />
            <img
              src={ImgCheck}
              className={
                this.state.chkVisa == false
                  ? "visacheck display-hide"
                  : "visacheck display-show"
              }
            />
          </div>
          <div className="addcard-card-container">
            <img
              src={ImgMaster}
              className="addcard-card"
              onClick={this.onCheckMaster}
            />
            <img
              src={ImgCheck}
              className={
                this.state.chkMaster == false
                  ? "mastercheck display-hide"
                  : "mastercheck display-show"
              }
            />
          </div>
          <div className="addcard-addbtn">
            <AddButton btn_label="Add Card" btn_url="/addcard"></AddButton>
          </div>
        </div>
        <div className="addcard-section">
          <div className="addcard-section-title">Register a new card</div>
          <CommonInput label="Card Number"></CommonInput>
          <div className="addcard-row-section">
            <div className="pr-3">
              <CommonInput label="Expire Date"></CommonInput>
            </div>
            <div className="pl-3">
              <CommonInput label="Security Code"></CommonInput>
            </div>
          </div>
          <CommonInput label="Cardholder Name"></CommonInput>
          <div className="addcard-desp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
          <div className="mt-5">
            <BlackButton btn_name="ADD CARD" page_url="/wallet"></BlackButton>
          </div>
        </div>
        <div className="addcard-header">
          <AvatarCard
            avatar="http://www.hexatar.com/gallery/thumb/151208_041104_m646baa23a7_avatar.png"
            name="John Doe"
          ></AvatarCard>
        </div>
      </div>
    );
  }
}
