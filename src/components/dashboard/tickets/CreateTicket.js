import React, { Component } from "react";
import PropTypes from "prop-types";
import FileUploadProgress from "react-fileupload-progress";
import Editor from "../components/Editor";
import MoreIcon from "../../../assets/images/dashboard/more.svg";
// import AntennaIcon from "../../assets/images/dashboard/antenna.svg";
import upload from "../../../assets/images/tickets/upload.svg";
import SearchIcon from "../../../assets/images/profile/search.svg";

// import { render } from "enzyme";

class CreateTicket extends Component {
  changeAvatre = event => {
    let image = event.target.files[0];
    //this.uploadPhoto(image);
    const fd = new FormData();

    fd.append("image", image);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    // return post(URL, fd, config).then(res => {
    //   let path = JSON.parse(res.data).file_path;
    //   this.setState({
    //     profile: path
    //   });
    // });
  };

  render() {
    const { i18n, t, kind, createTicket } = this.props;
    return (
      <>
        <div className="header-indicator">
          <h3 style={{ fontWeight: "bold" }}>Ticket Table > </h3>
          <p> {t("tickets.tickets_creation")}</p>
        </div>
        <div className="ticketnalytics-header">
          <h2 className="dashboard-title">
            {kind === "tickets"
              ? t("tickets.tickets_creation")
              : kind === "dashboard"
              ? t("dashboard.dashboard_overview")
              : t("settings.settings_overview")}
          </h2>
        </div>
        <div className="columns analytics-columns createTicket-conaitner">
          <div className="section1 ">
            <div className="firstInput-container">
              <div className="input-createTicket">
                <input
                  className="input createTicket"
                  type="text"
                  placeholder="AdisaKola"
                  style={{ background: "#A3A3A3" }}
                />
                <input
                  className="input createTicket"
                  type="text"
                  placeholder="AdisaKola@gmail.com"
                  style={{ background: "#A3A3A3" }}
                />
              </div>
              <h3 className="customer-text">CUSTOMER'S DETAILS</h3>
              <div className="input-createTicket">
                <input
                  className="input createTicket"
                  type="text"
                  placeholder="Enter First name"
                />
                <input
                  className="input createTicket"
                  type="text"
                  placeholder="Enter Last name"
                />
                <input
                  className="input createTicket"
                  type="text"
                  placeholder="name"
                />
                <input
                  className="input createTicket"
                  type="text"
                  placeholder="secondname"
                />
              </div>
            </div>
            <div className="secontInput-container">
              <h3 className="textInputcontainer">Ticket Subject</h3>
              <input
                className="input "
                type="text"
                placeholder="Ticket Subject"
                style={{ marginBottom: "30px" }}
              />
              <h3 className="textInputcontainer">Ticket Priority</h3>
              <input
                className="input createTicket "
                type="text"
                placeholder="Ticket Priority"
              />
              <h3 className="textInputcontainer">Ticket Massage</h3>
              <Editor />
              <div>
                <button
                  className="Submit-ticketbtn"
                  onClick={() => createTicket()}
                >
                  Submit Ticket
                </button>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="upload-file-container">
              <img
                className="btn-edit"
                src={upload}
                onClick={() => this.fileInput.click()}
              />
              <input
                style={{ display: "none" }}
                type="file"
                ref={fileInput => (this.fileInput = fileInput)}
              />
              <p style={{ color: "#C8D3D6" }}>Upload Files</p>
            </div>
            {/* <FileUploadProgress
              key="ex1"
              url="http://localhost:3000/api/upload"
              onProgress={(e, request, progress) => {
                console.log("progress", e, request, progress);
              }}
              onLoad={(e, request) => {
                console.log("load", e, request);
              }}
              onError={(e, request) => {
                console.log("error", e, request);
              }}
              onAbort={(e, request) => {
                console.log("abort", e, request);
              }}
            /> */}
          </div>
        </div>
      </>
    );
  }
}

export default CreateTicket;
