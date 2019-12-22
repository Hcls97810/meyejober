import React, { Component } from "react";
import ImgCamera from "./../../assets/img_camera.png";
import "./style.scss";
export class UploadPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      imgData: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      file: event.target.files[0]
        ? URL.createObjectURL(event.target.files[0])
        : this.state.file,
      imgData: event.target.files[0]
        ? event.target.files[0]
        : this.state.imgData
    });
    this.sendData(this.state.imgData);
  }

  sendData = file => {
    this.props.parentCallback(file);
  };

  render() {
    return (
      <div className="uploadpreview">
        <div className="uploadpreview-imagecontainer">
          <input type="file" onChange={this.handleChange} />
          <img
            src={this.state.file == null ? ImgCamera : this.state.file}
            className="uploadpreview-image"
          />
        </div>
      </div>
    );
  }
}

export default UploadPreview;
