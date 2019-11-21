import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Carousel from "./../../components/carousel";
import AvatarCard from "./../../components/avatar_card";
import SideExMenu from "./../../components/side_exmenu";
import AddButton from "./../../components/add_button";
//import ImgPlus from "./../../assets/img_plus.png";
import "./style.scss";
export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <SideExMenu></SideExMenu>
        <div className="dashboard-job">
          <div className="dashboard-job-header">
            <AvatarCard
              avatar="http://www.hexatar.com/gallery/thumb/151208_041104_m646baa23a7_avatar.png"
              name="John Doe"
            ></AvatarCard>
          </div>
          <div className="dashboard-job-main">
            <div className="dashboard-job-main-title">Dashboard</div>
            <div className="dashboard-job-main-desp">
              Good morning John, here are your posted jobs!
            </div>
            <Carousel></Carousel>
          </div>
          <div className="dashboard-job-footer">
            <AddButton
              btn_label="Create Job"
              btn_url="/createjob_detail"
            ></AddButton>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
