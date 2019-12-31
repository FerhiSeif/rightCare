import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import MoreIcon from "../../../assets/images/dashboard/more.svg";
import FakeAgents from "../../../faker/agents";
import User from "../../../assets/images/tickets/user.svg";
import Envelope from "../../../assets/images/tickets/envelope.svg";
import SearchIcon from "../../../assets/images/profile/search.svg";
import ProfileIcon from "../../../assets/images/profile/idpic.jpg";
import Phone from "../../../assets/images/tickets/phone-call.svg";
import ArrowDown from "../../../assets/images/tickets/full-down-arrow.svg";
// import { render } from "enzyme";

const ticketsLog = [
  { agent: ProfileIcon, activity: "change ticket proprity", date: "1 min ago" },
  { agent: ProfileIcon, activity: "Change Ticket Status", date: "1 min ago" },
  {
    agent: ProfileIcon,
    activity: "Tag Jean-Julian & Venance to ticket",
    date: "1 min ago"
  },
  { agent: ProfileIcon, activity: "Assign himself to ticket", date: "1 min ago" },
  { agent: ProfileIcon, activity: "Create Ticket #34421231", date: "1 min ago" }
];
class MessageTicket extends Component {
  state = {
    displayMessage: false,
    assegneeModalOpen: false,
    initAgents: FakeAgents,
    multiValue: "High",
    multiValuestat:"Pending",
    priority: [
      { value: "High", label: "High" },
      { value: "Medium", label: "Medium" },
      { value: "Low", label: "Low" }
    ],
    status: [
      { value: "Pending", label: "Pending" },
      { value: "Resolved", label: "Resolved" },
      { value: "New", label: "New" }
    ]
  };

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
  handleOnChangePrio = value=> {
    this.setState({ multiValue: value });
  }

  handleOnChangeStat = value=> {
    this.setState({ multiValuestat: value });
  }

 
  
  render() {
    const { i18n, t, kind, createTicket } = this.props;
    const { displayMessage,status,priority,assegneeModalOpen } = this.state;
    const statusView= status.map((elm,i)=>{
      return {
        ...elm,
        label:<>
        <button className="list-ticket-btn"
        style={{background:`${elm.label=="Pending" ? "#FF9B21" : elm.label=="New" ? "#0089E1" : "#00BD39"  }`}}
        ></button>{elm.label}
      </>
      }
    })
    const priorutyView= priority.map((elm,i)=>{
      return {
        ...elm,
        label:<p className="list-ticket-textpriority" 
        style={{background:`${elm.label=="High" ? "#eb592321" : elm.label=="Low" ? "#6572884a" : "#ff9b214d"  }`,
        color:`${elm.label=="High" ? "#EB5923" : elm.label=="Low" ? "#657288" : "#FF9B21"  }`
      }}
        
        >{elm.label}</p>
      }
    })
    return (
      <>
        <div className="header-indicator">
        <h3 className="header-indic-title1">Ticket Table  </h3> >
        <p className="header-indic-title2"> {t("tickets.tickets_message")}</p>
        </div>
        <div className="ticketnalytics-header">
          <h2 className="dashboard-title">Ticket No. #34421231</h2>
          <button className="create_ticketbtn" onClick={() => createTicket()}>
            + {t("tickets.tickets_creation").toUpperCase()}
          </button>
        </div>
        <div className="columns analytics-columns MessageTicket-conaitner">
          <div className="section1 tecket-detail">
            <div className="profilePicture-contain">
              <img src={ProfileIcon} className="profilepicture" />
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
                 <span className="custumers-detail">Martins JoeCole</span> 
                </div>
                <div className="display-user-info">
                  <img
                    src={Envelope}
                    className="massageticket-log"
                    alt="icon mail"
                  />{" "}
                  <span className="custumers-detail"> Martins.JoeCole@yahoo.com</span> 
                </div>
                <div className="display-user-info">
                  <img
                    src={Phone}
                    className="massageticket-log"
                    alt="icon phone"
                  />{" "}
                  <span className="custumers-detail">+221-121-11-123</span>
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
                <span
                className="messagedisplay-btn"
                >
                  <img
                    src={ArrowDown}
                    style={{
                      height: "10px",
                      width: "19px"
                    }}
                    onClick={() =>
                      this.setState({ displayMessage: !displayMessage })
                    }
                  />
                </span>
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
              <p className="ticketinfos displayInput">
                {" "}
                <img
                  src={ProfileIcon}
                  className="profilepicture-Created"
                />{" "}
                Adisa Kola
              </p>
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys ">Assignee :</span>{" "}
              <p className="ticketinfos display-user-assegne">
                <img src={ProfileIcon} className="profilepicture-assignee" />
                <span className="custumers-detail"> Adisa Kola</span> 
              </p>{" "}
            
              <div className="assign-agent-Container">
              <p className="resseign-messageTick"
              onClick={() =>
                this.setState({
                  assegneeModalOpen: !this.state.assegneeModalOpen
                })
              }>
                Reassign
              
              </p>
                  <div
                    className="assign-text-modal"
                    style={{
                      display: `${assegneeModalOpen ? "flex" : "none"}`,
                      left: "-179px"
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
            <div className="ticketAgent-container">
              <span className="ticketkeys">Priority :</span>{" "}
             
                <Select
                  options={priorutyView}
                  onChange={this.handleOnChangePrio}
                  value={this.state.multiValue}
                  isSearchable={false}
                  className="ticket-Select"
                  placeholder=""
                />
           
              {/* <p className="ticketinfos">Adisa Kola</p> */}
            </div>
            <div className="ticketAgent-container">
              <span className="ticketkeys">Status :</span>{" "}
              <Select
                  options={statusView}
                  onChange={this.handleOnChangeStat}
                  value={this.state.multiValuestat}
                  isSearchable={false}
                  placeholder=""
                />
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
                    <img src={ticket.agent} className="profilepicture-log" />
                    <div className="ticket-activities">
                      <p className="activity">{ticket.activity}</p>
                      <p className="activity-date ">{ticket.date}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="clode_ticketbtn" onClick={() => createTicket()}>
              Close ticket
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default MessageTicket;
