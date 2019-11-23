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
import "./style.scss";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

function JobEmploy() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    setCountry(event.target.value);
  };
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
        <TextField label="Salary" className="pb-3" />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Payment Frequency
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            onChange={handleChange}
          >
            <MenuItem value="United Kingdom">United Kingdom</MenuItem>
            <MenuItem value="Canada">Canada</MenuItem>
            <MenuItem value="Australia">Australia</MenuItem>
          </Select>
        </FormControl>
        <div className="jobemploy-title">Job Type</div>
        <Toggle left_value="Permanent" right_value="Contract"></Toggle>
        <div className="jobemploy-title">Contract Length</div>
        <ContractLength></ContractLength>
        <div className="jobemploy-title">Employment Type</div>
        {/* <Toggle left_value="Full Time" right_value="Part Time"></Toggle> */}
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
