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

function JobDetail() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    setCountry(event.target.value);
  };
  return (
    <div className="jobdetail">
      <div className="jobdetail-exmenu">
        <Journey job_state="1"></Journey>
      </div>
      <div className="jobdetail-section">
        <div className="jobdetail-job-main-title">Create Job</div>
        <TextField label="Job Title" className="pb-3" />
        <TextField label="Job Description" className="pb-3" />
        <TextField label="Email Address" className="pb-3" />
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
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
