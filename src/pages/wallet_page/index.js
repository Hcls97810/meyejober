import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AvatarCard from "./../../components/avatar_card";
import Toggle from "./../../components/toggle";
import SideMinMenu from "./../../components/side_minmenu";
import Subscription from "./../../components/subscription";
import ImgVisa from "./../../assets/img_visa_card.png";
import ImgMaster from "./../../assets/img_master_card.png";
import ImgCheck from "./../../assets/img_check.png";
import AddButton from "./../../components/add_button";
import "./style.scss";

export default class WalletPage extends React.Component {
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
      <div className="walletpage">
        <SideMinMenu></SideMinMenu>
        <div className="walletpage-exmenu">
          <div className="walletpage-card-container">
            <img
              src={ImgVisa}
              className="walletpage-card"
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
          <div className="walletpage-card-container">
            <img
              src={ImgMaster}
              className="walletpage-card"
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
          <div className="walletpage-addbtn">
            <AddButton btn_label="Add Card" btn_url="/addcard"></AddButton>
          </div>
        </div>
        <div className="walletpage-section">
          <div className="walletpage-section-title">MEyeWallet</div>
          <div className="walletpage-row-section">
            <div className="walletpage-item-label">Available</div>
            <div className="walletpage-item-value">50.00</div>
          </div>
          <div className="walletpage-row-section">
            <div className="walletpage-item-label">Membership</div>
            <div className="walletpage-item-value">Basic Plan</div>
          </div>
          <div className="walletpage-row-section">
            <div className="walletpage-item-label">Purchagse Type</div>
            <div className="walletpage-item-toggle">
              <Toggle left_value="One-Time" right_value="Subscribe"></Toggle>
            </div>
          </div>
          <div className="walletpage-row-section">
            <div className="walletpage-item-label">Subscription Type</div>
            <div className="walletpage-item-toggle">
              <Toggle left_value="Monthly" right_value="Yearly"></Toggle>
            </div>
          </div>
          <Subscription></Subscription>
          <div className="walletpage-desp">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do,
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </div>
        </div>
        <div className="walletpage-header">
          <AvatarCard
            avatar="http://www.hexatar.com/gallery/thumb/151208_041104_m646baa23a7_avatar.png"
            name="John Doe"
          ></AvatarCard>
        </div>
      </div>
    );
  }
}
