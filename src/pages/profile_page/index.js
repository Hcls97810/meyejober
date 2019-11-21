import React, { Component } from "react";
import {
  makeStyles,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl
} from "@material-ui/core";
import BlackButton from "./../../components/black_button";
import BlackCircle from "./../../components/black_circle";
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

function ProfilePage() {
  const classes = useStyles();
  const [country, setCountry] = React.useState("");

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  const handleChange = event => {
    setCountry(event.target.value);
  };

  return (
    <div className="container profile">
      <div className="container profile-section1">
        <div className="profile-section1-large-title">Welcome,</div>
        <div className="profile-section1-small-title">
          let's complete your profile
        </div>
      </div>
      <div className="profile-section2">
        <div className="profile-personal">
          <div>
            <BlackCircle
              circle_label1="1"
              circle_label2="Personal Profile"
            ></BlackCircle>
          </div>
          <TextField label="First Name" className="pb-3" />
          <TextField label="Last Name" className="pb-3" />
          <TextField label="Post Code" className="pb-3" />
          <div className="mb-3 mt-3">
            <BlackButton btn_name="LOOKUP ADDRESS"></BlackButton>
          </div>
          <div className="profile-personal-select-country">
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Country of Residence
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
          </div>
        </div>
        <div className="profile-business">
          <div>
            <BlackCircle
              circle_label1="2"
              circle_label2="Business Profile"
            ></BlackCircle>
          </div>
          <TextField label="Business Name" className="pb-3" />
          <TextField label="Business Activity" className="pb-3" />
          <TextField label="Business Description" className="pb-3" />
          <TextField label="Website" className="pb-3" />
          <TextField label="Business Email" className="pb-3" />
          <TextField label="Job Title" className="pb-3" />
          <TextField label="Post Code" className="pb-3" />
          <div className="container mt-5">
            <BlackButton
              btn_name="CREATE PROFILE"
              page_url="/dashboard"
            ></BlackButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
