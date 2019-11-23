import React, { Component } from "react";
import { Link } from "react-router-dom";
import ImgDashboard from "./../../assets/img_dashboard.png";
import ImgJobs from "./../../assets/img_jobs.png";
import ImgProposals from "./../../assets/img_proposals.png";
import ImgWallet from "./../../assets/img_wallet.png";
import ImgProfile from "./../../assets/img_profile.png";
import "./style.scss";
export class SideMinMenu extends Component {
  render() {
    return (
      <div className="dashboard-minmenu">
        <div className="mt-3 mb-5">
          <div className="dashboard-minmenu-title">meye</div>
          <div className="dashboard-minmenu-title">
            <b>jobber</b>
          </div>
        </div>
        <div className="mt-5">
          <Link to="/dashboard" className="dashboard-minmenu-items">
            <img src={ImgDashboard} className="dashboard-minmenu-imgsize" />
          </Link>
          <div className="dashboard-minmenu-items">
            <img src={ImgJobs} className="dashboard-minmenu-imgsize" />
          </div>
          <div className="dashboard-minmenu-items">
            <img src={ImgProposals} className="dashboard-minmenu-imgsize" />
          </div>
          <div className="dashboard-minmenu-items">
            <img src={ImgWallet} className="dashboard-minmenu-imgsize" />
          </div>
          <div className="dashboard-minmenu-items">
            <img src={ImgProfile} className="dashboard-minmenu-imgsize" />
          </div>
        </div>
      </div>
    );
  }
}

export default SideMinMenu;
