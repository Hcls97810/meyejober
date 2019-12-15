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
import CommonInput from "./../../components/common_input";
import SelectMaterial from "./../../components/select_material";
import LookupAddress from "./../../components/lookup_address";
import UploadImage from "./../../components/upload_image";
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
    <div className="container profile mb-5">
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
          <CommonInput label="First Name"></CommonInput>
          <CommonInput label="Last Name"></CommonInput>
          <CommonInput label="Post Code"></CommonInput>
          <LookupAddress></LookupAddress>
          <SelectMaterial
            label="Country of Residence"
            category="countryResidence"
          ></SelectMaterial>
          <SelectMaterial
            label="Nationality"
            category="nationality"
          ></SelectMaterial>
          <CommonInput label="Birthday"></CommonInput>
          <div className="addressinfo mt-5">
            <UploadImage></UploadImage>
          </div>
        </div>
        <div className="profile-business">
          <div>
            <BlackCircle
              circle_label1="2"
              circle_label2="Business Profile"
            ></BlackCircle>
          </div>
          <CommonInput label="Business Name"></CommonInput>
          <CommonInput label="Business Activity"></CommonInput>
          <CommonInput label="Business Description"></CommonInput>
          <CommonInput label="Website"></CommonInput>
          <CommonInput label="Business Email"></CommonInput>
          <CommonInput label="Job Title"></CommonInput>
          <CommonInput label="Post Code"></CommonInput>
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
