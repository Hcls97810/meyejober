import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  makeStyles,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl
} from "@material-ui/core";
import AvatarCard from "./../../../components/avatar_card";
import Journey from "./../../../components/journey";
import BlackButton from "./../../../components/black_button";
import Toggle from "./../../../components/toggle";
import BackButton from "./../../../components/back_button";
import UploadPreview from "./../../../components/upload_image";
import SideMinMenu from "./../../../components/side_minmenu";
import "./style.scss";

function JobAddress() {
  return (
    <div className="jobaddress">
      <SideMinMenu></SideMinMenu>
      <div className="jobaddress-exmenu">
        <Journey job_state="3"></Journey>
      </div>
      <div className="jobaddress-sectionback">
        <BackButton page_url="/createjob_employ"></BackButton>
      </div>
      <div className="jobaddress-section">
        <div className="jobaddress-section-title">
          <div className="jobaddress-job-main-title">Create Job</div>
        </div>
        <div className="jobaddress-title">
          Would you like to use the business address?
        </div>
        <Toggle left_value="Yes" right_value="No"></Toggle>
        <div className="jobaddress-desp-camera">
          Upload an image to use it as background for your post. This can
          increase the chances of having more applicants!
        </div>
        <div className="jobaddress-imagepreview">
          <UploadPreview></UploadPreview>
        </div>

        <div className="mt-5">
          <BlackButton page_url="/dashboard" btn_name="CREATE"></BlackButton>
        </div>
      </div>
      <div className="jobaddress-header">
        <AvatarCard
          avatar="http://www.hexatar.com/gallery/thumb/151208_041104_m646baa23a7_avatar.png"
          name="John Doe"
        ></AvatarCard>
      </div>
    </div>
  );
}

export default JobAddress;
