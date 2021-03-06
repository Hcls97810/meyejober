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
import ContractLength from "./../../../components/contract_length";
import BackButton from "./../../../components/back_button";
import SideMinMenu from "./../../../components/side_minmenu";
import CommonInput from "./../../../components/common_input";
import SelectMaterial from "./../../../components/select_material";
import "./style.scss";

function JobEmploy() {
  return (
    <div className="jobemploy">
      <SideMinMenu></SideMinMenu>
      <div className="jobemploy-exmenu">
        <Journey job_state="2"></Journey>
      </div>
      <div className="jobemploy-sectionback">
        <BackButton page_url="/createjob_detail"></BackButton>
      </div>
      <div className="jobemploy-section">
        <div className="jobemploy-section-title">
          <div className="jobemploy-job-main-title">Create Job</div>
        </div>
        <div>
          <CommonInput label="Salary"></CommonInput>
        </div>
        <SelectMaterial
          label="Payment Frequency"
          category="frequencyPermanent"
        ></SelectMaterial>
        <div className="jobemploy-title">Job Type</div>
        <Toggle left_value="Permanent" right_value="Contract"></Toggle>
        <div className="jobemploy-title">Contract Length</div>
        <ContractLength></ContractLength>
        <div className="jobemploy-title">Employment Type</div>
        <Toggle left_value="Full Time" right_value="Part Time"></Toggle>
        <div className="mt-5">
          <BlackButton
            page_url="/createjob_address"
            btn_name="NEXT"
          ></BlackButton>
        </div>
      </div>
      <div className="jobemploy-header">
        <AvatarCard
          avatar="http://www.hexatar.com/gallery/thumb/151208_041104_m646baa23a7_avatar.png"
          name="John Doe"
        ></AvatarCard>
      </div>
    </div>
  );
}

export default JobEmploy;
