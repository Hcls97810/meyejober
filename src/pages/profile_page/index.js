import React, { useState } from "react";
import axios from "axios";
import BlackButton from "./../../components/black_button";
import BlackCircle from "./../../components/black_circle";
import CommonInput from "./../../components/common_input";
import SelectMaterial from "./../../components/select_material";
import LookupAddress from "./../../components/lookup_address";
import UploadImage from "./../../components/upload_image";
import "./style.scss";

function ProfilePage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [postcode, setPostcode] = useState("");
  const [country, setCountry] = useState("");
  const [nation, setNation] = useState("");
  const [birthday, setBirthday] = useState("");
  const [pimg, setPimg] = useState("");

  const [bname, setBname] = useState("");
  const [bactivity, setBactivity] = useState("");
  const [bwebsite, setBwebsite] = useState("");
  const [bemail, setBemail] = useState("");
  const [bjobtitle, setBjobtitle] = useState("");
  const [bpostcode, setBpostcode] = useState("");

  const gotoDashboard = () => {
    console.log(pimg);
  };

  const callbackFunction = childData => {
    //setPimg(childData);
    console.log(childData);
    var CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dfr8tcfvq/upload";
    var CLOUDINARY_UPLOAD_PRESET = "rqr5viz0";
    var formData = new FormData();
    formData.append("file", childData);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    axios({
      url: CLOUDINARY_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: formData
    })
      .then(function(res) {
        console.log(formData);
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
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
          <CommonInput
            label="First Name"
            value={firstname}
            onChange={e => setFirstname(e.target.value)}
          ></CommonInput>
          <CommonInput
            label="Last Name"
            value={lastname}
            onChange={e => setLastname(e.target.value)}
          ></CommonInput>
          <CommonInput
            label="Post Code"
            value={postcode}
            onChange={e => setPostcode(e.target.value)}
          ></CommonInput>
          <LookupAddress postcode={postcode}></LookupAddress>
          <SelectMaterial
            label="Country of Residence"
            category="countryResidence"
            value={country}
            onChange={e => setCountry(e.target.value)}
          ></SelectMaterial>
          <SelectMaterial
            label="Nationality"
            category="nationality"
            value={nation}
            onChange={e => setNation(e.target.value)}
          ></SelectMaterial>
          <CommonInput
            label="Birthday"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
          ></CommonInput>
          <div className="addressinfo mt-5">
            <UploadImage parentCallback={callbackFunction}></UploadImage>
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
          <LookupAddress></LookupAddress>
          <div className="addressinfo mt-5">
            <UploadImage></UploadImage>
          </div>
          <div className="container mt-5">
            <BlackButton
              btn_name="CREATE PROFILE"
              handleEvent={gotoDashboard}
            ></BlackButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
