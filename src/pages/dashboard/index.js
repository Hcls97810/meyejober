import React, { Component } from "react";
import Carousel from "./../../components/carousel";
import ImgDashboard from "./../../assets/img_dashboard.png";
import ImgJobs from "./../../assets/img_jobs.png";
import ImgProposals from "./../../assets/img_proposals.png";
import ImgWallet from "./../../assets/img_wallet.png";
import ImgProfile from "./../../assets/img_profile.png";
//import ImgPlus from "./../../assets/img_plus.png";
import "./style.scss";
export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard-exmenu">
          <div className="dashboard-exmenu-title">
            meye<b>jobber</b>
          </div>
          <div>
            <div className="dashboard-exmenu-items">
              <img src={ImgDashboard} className="imgsize" />
              <a href="#" className="exmenuitem">
                Dashboard
              </a>
            </div>
            <div className="dashboard-exmenu-items">
              <img src={ImgJobs} className="imgsize" />
              <a href="#" className="exmenuitem">
                My Jobs
              </a>
            </div>
            <div className="dashboard-exmenu-items">
              <img src={ImgProposals} className="imgsize" />
              <a href="#" className="exmenuitem">
                Proposals
              </a>
            </div>
            <div className="dashboard-exmenu-items">
              <img src={ImgWallet} className="imgsize" />
              <a href="#" className="exmenuitem">
                MEyeWallet
              </a>
            </div>
            <div className="dashboard-exmenu-items">
              <img src={ImgProfile} className="imgsize" />
              <a href="#" className="exmenuitem">
                Profile
              </a>
            </div>
          </div>
          <div className="dashboard-exmenu-footer">
            <div className="dashboard-exmenu-footer-section">
              2019 Instajobber Limitted |{" "}
              <a href="#" className="link-text">
                Privacy Policy
              </a>{" "}
              |{" "}
              <a href="#" className="link-text">
                Terms {"&"} Conditions
              </a>
            </div>
            <div className="dashboard-exmenu-social">
              <div className="dashboard-exmenu-social-section">
                Follow us on
              </div>
              <div className="dashboard-exmenu-social-section">
                <a href="#" className="link-text">
                  Facebook
                </a>{" "}
                {"| "}
                <a href="#" className="link-text">
                  Twitter
                </a>{" "}
                {"| "}
                <a href="#" className="link-text">
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-job">
          <div className="dashboard-job-header">
            <div>John Doe</div>
          </div>
          <div className="dashboard-job-main">
            <div className="dashboard-job-main-title">Dashboard</div>
            <div className="dashboard-job-main-desp">
              Good morning John, here are your posted jobs!
            </div>
            <Carousel></Carousel>
          </div>
          <div className="dashboard-job-footer">
            <div className="dashboard-job-footer-black-circle">+</div>
            <div className="dashboard-job-footer-label">Create Job</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
