import React, { Component } from "react";
import {
  makeStyles,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl
} from "@material-ui/core";
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
          <div>Personal Profile</div>
          <TextField label="First Name" className="pb-3" />
          <TextField label="Last Name" className="pb-3" />
          <TextField label="Post Code" className="pb-3" />
          <div className="profile-personal-address-btn">
            <a href="#" className="profile-personal-address-btn-text">
              LOOKUP ADDRESS
            </a>
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
          <div>Business Profile</div>
          <TextField label="Business Name" className="pb-3" />
          <TextField label="Business Activity" className="pb-3" />
          <TextField label="Business Description" className="pb-3" />
          <TextField label="Website" className="pb-3" />
          <TextField label="Business Email" className="pb-3" />
          <TextField label="Job Title" className="pb-3" />
          <TextField label="Post Code" className="pb-3" />
        </div>
      </div>
      <div className="container">
        <div className="profile-personal-address-btn">
          <a href="/dashboard" className="profile-personal-address-btn-text">
            Create Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
