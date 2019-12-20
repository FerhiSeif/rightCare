import React, { Component } from "react";
import PropTypes from "prop-types";
import Editor from "../components/Editor";
import MoreIcon from "../../../assets/images/dashboard/more.svg";
import User from "../../../assets/images/tickets/user.svg";
import Envelope from "../../../assets/images/tickets/envelope.svg";
import ProfileIcon from '../../../assets/images/profile/idpic.jpg';
import Phone from "../../../assets/images/tickets/phone-call.svg";
import ArrowDown from "../../../assets/images/tickets/arrow-down.svg";
// import { render } from "enzyme";

const ticketsLog = [
  { agent: "agent1", activity: "change ticket proprity", date: "1 min ago" },
  { agent: "agent2", activity: "Change Ticket Status", date: "1 min ago" },
  {
    agent: "agent3",
    activity: "Tag Jean-Julian & Venance to ticket",
    date: "1 min ago"
  },
  { agent: "agent4", activity: "Assign himself to ticket", date: "1 min ago" },
  { agent: "agent5", activity: "Create Ticket #34421231", date: "1 min ago" }
];
class MessageTicket extends Component {
  state = {
    displayMessage: false
  };
  render() {
    const { i18n, t, kind, createTicket } = this.props;
    const { displayMessage } = this.state;
    return (
      <>
        <div className="header-indicator">
          <h3 style={{ fontWeight: "bold" }}>Ticket Table > </h3>
          <p> {t("tickets.tickets_message")}</p>
        </div>
        <div className="ticketnalytics-header">
          <h2 className="dashboard-title">Ticket No. #34421231</h2>
          <button className="create_ticketbtn" onClick={() => createTicket()}>
            + {t("tickets.tickets_creation").toUpperCase()}
          </button>
        </div>
        <div className="columns analytics-columns createTicket-conaitner">
          <div className="section1 tecket-detail">
            <div className="profilePicture-contain">
            <img src={ProfileIcon} className="profilepicture"/> 
            </div>
            <div className="profil-contain">
              <h3 className="profil-name">Cara Doe</h3>
              <p className="creationDate">12 Sept 2019 7:00 PM</p>
              <h1 className="ticketTitle"> Downtime on RightKiosk</h1>
              <div className="dashet-line" />
              <h3 className="customer-text textblue">CUSTOMER'S DETAILS</h3>
              <div className="massageticket-input-cont">
                <div className="display-user-info">
                  <img
                    src={User}
                    className="massageticket-log"
                    alt="icon user"
                  />
                  Martins JoeCole
                </div>
                <div className="display-user-info">
                  <img
                    src={Envelope}
                    className="massageticket-log"
                    alt="icon mail"
                  />{" "}
                  Martins.JoeCole@yahoo.com
                </div>
                <div className="display-user-info">
                  <img
                    src={Phone}
                    className="massageticket-log"
                    alt="icon phone"
                  />{" "}
                  +221-121-11-123"
                </div>
              </div>
              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <div
                  style={{
                    borderTop: "1px dashed #c8d3d6",
                    width: "100%",
                    height: "1px"
                  }}
                />
                <img
                  src={ArrowDown}
                  style={{
                    border: "1px solid",
                    padding: "3px",
                    borderRadius: "33443px",
                    cursor: "pointer"
                  }}
                  onClick={() =>
                    this.setState({ displayMessage: !displayMessage })
                  }
                />
                <div
                  style={{
                    borderTop: "1px dashed #c8d3d6",
                    width: "100%",
                    height: "1px"
                  }}
                />
              </div>
              <div
                className="massageticket-container"
                style={{ display: displayMessage ? "block" : "none" }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <div className="section2">
            <div className="ticketAgent-container">
              <span className="ticketkeys">Date :</span>{" "}
              <p className="ticketinfos displayInput">12 Sept 2019 7:00 PM</p>
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys">Created :</span>{" "}
              <p className="ticketinfos displayInput"> <img src={ProfileIcon} className="profilepicture-Created"/> Adisa Kola</p>
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys ">Assignee :</span>{" "}
              <p className="ticketinfos display-user-assegne"><img src={ProfileIcon} className="profilepicture-assignee"/>Adisa Kola</p>{" "}
              <p style={{ color: "#0089E1", marginLeft: "10px" }}>Reassign</p>
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys">Priority :</span>{" "}
              <select className="ticketinfos selectPriority">
                <option style={{ color: "#eb5923", background: "#fad5c8" }}>
                  Hight
                </option>
                <option style={{ color: "#ff9b21", background: "#fad5c8" }}>
                  Medium
                </option>
                <option style={{ color: "#657288", background: "#d4d8de" }}>
                  Low
                </option>
              </select>
              {/* <p className="ticketinfos">Adisa Kola</p> */}
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys">status :</span>{" "}
              <select className="ticketinfos selectstatus">
                <option>
                  Pending{" "}
                
                </option>
                <option>
                  Resolved{" "}
                  
                </option>
                <option>
                  New{" "}
          
                </option>
              </select>
            </div>
            <div className="ticket-log-container">
              <div className="ticket-log-title">Ticket Log Activities</div>
              {ticketsLog.map((ticket, i) => {
                return (
                  <div
                    className={`ticket-log ${
                      i == ticketsLog.length - 1 ? "last" : ""
                    }`}
                  >
                    {/* <img src={} alt="profile picture"/> */}
                    <span className="ticket-log-profile">{ticket.agent}</span>
                    <div className="ticket-activities">
                      <p className="activity">{ticket.activity}</p>
                      <p className="activity-date ">{ticket.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="clode_ticketbtn" onClick={() => createTicket()}>
              Close Ticket
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default MessageTicket;
