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
import CommonInput from "./../../../components/common_input";
import SelectMaterial from "./../../../components/select_material";
import SideMinMenu from "./../../../components/side_minmenu";
import "./style.scss";

function JobDetail() {
  return (
    <div className="jobdetail">
      <SideMinMenu></SideMinMenu>
      <div className="jobdetail-exmenu">
        <Journey job_state="1"></Journey>
      </div>
      <div className="jobdetail-section">
        <div className="jobdetail-job-main-title">Create Job</div>
        <CommonInput label="Job Title"></CommonInput>
        <CommonInput label="Job Description"></CommonInput>
        <SelectMaterial
          label="Category"
          category="allCategories"
        ></SelectMaterial>
        <div className="mt-5">
          <BlackButton
            page_url="/createjob_employ"
            btn_name="NEXT"
          ></BlackButton>
        </div>
      </div>
      <div className="jobdetail-header">
        <AvatarCard
          avatar="http://www.hexatar.com/gallery/thumb/151208_041104_m646baa23a7_avatar.png"
          name="John Doe"
        ></AvatarCard>
      </div>
    </div>
  );
}

export default JobDetail;
