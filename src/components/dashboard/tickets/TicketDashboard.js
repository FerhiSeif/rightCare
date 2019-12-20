import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateTicket from "../ticketAnalytics/CreateTicket";
import ResolveTicket from "../ticketAnalytics/ResolveTicket";
import PendingTicket from "../ticketAnalytics/PendingTicket";
import TotalTicket from "../ticketAnalytics/TotalTicket";
import MoreIcon from "../../../assets/images/dashboard/more.svg";
import CalendarIcon from "../../../assets/images/dashboard/calendar.svg";
import SearchIcon from "../../../assets/images/profile/search.svg";
import TicketsList from "../ticketAnalytics/TicketsList"; // SortBtn
import SortBtn from "../../../assets/images/tickets/sortBtn.svg";
import Modal from "../ticketAnalytics/Modal";
// import { render } from "enzyme";

class TicketDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, status: 1 };
    this.agentModal = React.createRef();
  }

  //open modal
  handleAddRessourceModal = (textTitle, detectContent, buttonText) => {
    document.body.classList.add("modal-opened");
    this.agentModal.current.classList.add("is-active");
    // setModalTitle('deee');
    // setModalContent('rrr');
    // setModalButton('tttt');
  };

  handleCloseRessourceModal = () => {
    document.body.classList.remove("modal-opened");
    this.agentModal.current.classList.remove("is-active");
    // setModalTitle('');
    // setModalContent('');
  };

  render() {
    const { i18n, t, kind, createTicket } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <div className="ticketnalytics-header">
          <h2 className="dashboard-title">
            {kind === "tickets"
              ? t("tickets.tickets_overview")
              : kind === "dashboard"
              ? t("dashboard.dashboard_overview")
              : t("settings.settings_overview")}
          </h2>
          <button className="create_ticketbtn" onClick={() => createTicket()}>
            + {t("tickets.tickets_creation").toUpperCase()}
          </button>
        </div>
        <div className="columns analytics-columns">
          <CreateTicket t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
          <ResolveTicket
            t={t}
            CalendarIcon={CalendarIcon}
            MoreIcon={MoreIcon}
          />
          <PendingTicket
            t={t}
            CalendarIcon={CalendarIcon}
            MoreIcon={MoreIcon}
          />
          <TotalTicket t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
        </div>
        <div className="columns chart-columns ">
          <div className="column column-chart ticketContainer">
            <div className="searchBar">
              <button className="buttonserch">
                <img className="view-more" src={SearchIcon} alt="SearchIcon" />
              </button>
              <input className="input" type="text" placeholder="Search" />

              <button
                className="button"
                onClick={() =>
                  this.setState({
                    isOpen: !isOpen
                  })
                }
              >
                <img className="view-more" src={SortBtn} alt="Sort Button" />
                Filtrer
                <img className="view-more" src={MoreIcon} alt="caneldar" />
              </button>
            </div>
            <div
              className="modalSerach"
              style={{ display: `${isOpen ? "flex" : "none"}` }}
            >
              <div className="priorityContainer"> Priority </div>
              <div className="statusContainer"> Status </div>
              <div className="CategorieContainer"> Category </div>
              <div className="modalSerachSetting">
                <p style={{ color: "#EB5923" }}> clear all filters</p>
                <p>
                  <span style={{ color: "#94A4BE", marginRight: "10px" }}>
                    Cancel
                  </span>
                  <span style={{ color: "##0089E1" }}>Apply</span>
                </p>
              </div>
            </div>
            <TicketsList />
          </div>
        </div>

        <Modal
          i18n={i18n}
          t={t}
          agentModal={this.agentModal}
          handleCloseRessourceModal={this.handleCloseRessourceModal}
          title={"sdfsdf"}
          content={"ertert"}
          kind={"tickets"}
          buttonText={"ttyty"}
          //handleAddFields={handleAddFields}
        />
      </>
    );
  }
}

TicketDashboard.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired
};

export default TicketDashboard;
