import React, { Component } from "react";
// import PropTypes from "prop-types";
// import FileUploadProgress from "react-fileupload-progress";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Select from "react-select";

import FakeAgents from "../../../faker/agents";
// import AntennaIcon from "../../assets/images/dashboard/antenna.svg";
import upload from "../../../assets/images/tickets/upload.svg";
import SearchIcon from "../../../assets/images/profile/search.svg";
import ProfileIcon from "../../../assets/images/profile/idpic.jpg";
//import "react-select/dist/react-select.css";
// import { render } from "enzyme";

class CreateTicket extends Component {
  state = {
    assegneeModalOpen: false,
    initAgents: FakeAgents,
    multiValue: "",
    multiValuecat: "",
    priority: [
      { value: "High", label: "High" },
      { value: "Medium", label: "Medium" },
      { value: "Low", label: "Low" }
    ],
    category: [
      { value: "Technical", label: "Technical" },
      { value: "Customer Care", label: "Customer Care" },
      { value: "Enquires", label: "Enquires" }
    ]
  };
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

  //add agent

  //liste agents

  listAgents = (
    <ul className=" menu-list menu-list-ticket">
      {this.state.initAgents &&
        this.state.initAgents.map((item, i) => (
          <li key={i}>
            <img src={item.profile_image} alt="portrait" />
            <span className="user-name">{item.full_name}</span>
            {
              // fetchDatas(item.id) ? (<span className="remove-user" onClick={()=>console.log('hii')/*(e) => handleRemoveAgent(e, item.id)*/}>-</span>)
              // :
              <span
                className="add-user"
                onClick={
                  () => console.log("hii") /*(e) => handleAddAgent(e, item.id)*/
                }
              >
                +
              </span>
            }
          </li>
        ))}
    </ul>
  );
  //change ticket priotity
  handleOnChangePrio = value => {
    this.setState({ multiValue: value });
  };

  handleOnChangeCat = value => {
    this.setState({ multiValuecat: value });
  };

  render() {
    const { i18n, t, kind, createTicket } = this.props;
    const { assegneeModalOpen } = this.state;
    const modalStyle = {
      title: {
        paddingBottom: kind === "channel" ? 0 : "1.125rem"
      }
    };
    // options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker', 'link', 'embedded', 'emoji', 'image', 'remove', 'history']
    return (
      <>
        <div className="header-indicator">
          <h3 className="header-indic-title1">Ticket Table </h3> >
          <p className="header-indic-title2">
            {" "}
            {t("tickets.tickets_creation")}
          </p>
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
                <div className="createTicket-div">
                  <img
                    src={ProfileIcon}
                    className="profilepicture-assignee"
                    alt="agent picture"
                  />
                  <span className="createTicket-div-text">AdisaKola </span>
                </div>
                <div className="createTicket-div">
                  <span className="createTicket-div-text">
                    {" "}
                    AdisaKola@gmail.com
                  </span>
                </div>
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
                  placeholder="Enter Email Adresse"
                />
                <input
                  className="input createTicket"
                  type="text"
                  placeholder="Enter Telephone"
                />
              </div>
            </div>
            <div className="secontInput-container">
              <h3 className="textInputcontainer">Ticket Subject</h3>
              <input
                className="input "
                type="text"
                placeholder=" Enter subject"
              />
              <h3 className="textInputcontainer">Ticket Priority</h3>
              <div>
                <Select
                  options={this.state.priority}
                  onChange={this.handleOnChangePrio}
                  value={this.state.multiValue}
                  isSearchable={false}
                  className="ticket-Select"
                  placeholder="Select Ticket Priority"
                />
              </div>
              <h3 className="textInputcontainer">Ticket Category</h3>
              <div>
                <Select
                  options={this.state.category}
                  onChange={this.handleOnChangeCat}
                  value={this.state.multiValuecat}
                  isSearchable={false}
                  placeholder="Select Ticket Category"
                />
              </div>
              <h3 className="textInputcontainer">Ticket Massage</h3>
              <Editor
                // toolbarHidden
                toolbar={{
                  fontSize: { className: "fontSizetoolbar" },
                  fontFamily: { className: "fontFamilytoolbar" },
                  textAlign: { inDropdown: true },
                  link: { className: "linktoolbar" },
                  emoji: { className: "emojitoolbar" },
                  image: { className: "imagetoolbar" },
                  remove: { className: "removetoolbar" },
                  blockType: { className: "blockTypetoolbar" },
                  embedded: { className: "embeddedtoolbar" },
                  inline:{
                    strikethrough: {className: "strikethroughtoolbar" },
                  monospace: {className: "monospacetoolbar" }
                  },
                  list:{indent: {className: "indenttoolbar" },
                  outdent : {className: "outdenttoolbar" }
                }
                  
                }}
              />
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
                multiple
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
            <div className="assegnee-Container">
              <div className="assign-text-Contain">
                <p style={{ color: "#657288", marginRight: "20px" }}>
                  Assignee
                </p>
                <div className="assign-agent-Container">
                  <span
                    className=" assign-agent-btn"
                    onClick={() =>
                      this.setState({
                        assegneeModalOpen: !this.state.assegneeModalOpen
                      })
                    }
                  >
                    +
                  </span>
                  <div
                    className="assign-text-modal"
                    style={{
                      display: `${assegneeModalOpen ? "flex" : "none"}`
                    }}
                  >
                    <h2 className="title assign-modal-title">
                      Assign Agent to Ticket
                    </h2>
                    <ul className="menu-list menu-list-ticket">
                      {" "}
                      <li className="assign-self">
                        <img src={ProfileIcon} alt="portrait" />
                        <span className="user-name">
                          Assign ticket to myself
                        </span>
                        {
                          // fetchDatas(item.id) ? (<span className="remove-user" onClick={()=>console.log('hii')/*(e) => handleRemoveAgent(e, item.id)*/}>-</span>)
                          // :
                          <span
                            className="add-user"
                            onClick={
                              () =>
                                console.log(
                                  "hii"
                                ) /*(e) => handleAddAgent(e, item.id)*/
                            }
                          >
                            +
                          </span>
                        }
                      </li>
                    </ul>
                    <div className="search-box assign-search">
                      <input
                        className="input"
                        type="text"
                        placeholder={t("onboard.steps.search_agent")}
                      />
                      <img src={SearchIcon} alt="search" />
                    </div>
                    <section
                      className="modal-card-body"
                      style={{ width: "100%" }}
                    >
                      {this.listAgents}
                      {/* { kind === 'agent' ? (<div>{agentCount === 0 &&<span>This agent can not be found in the list.</span>}{content}</div>) : <Services kind={kind} handleChooseService={handleChooseService} checkedServices={checkedServices} /> } */}
                    </section>
                    <footer className="assign-modal-footer">
                      <button
                        className="button is-primary"
                        aria-label="close"
                        style={{ width: "100%" }}
                      >
                        Assign
                      </button>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CreateTicket;
