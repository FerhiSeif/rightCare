import React, { Component } from "react";
import PropTypes from "prop-types";
import CreateTicket from "../ticketAnalytics/CreateTicket";
import ResolveTicket from "../ticketAnalytics/ResolveTicket";
import PendingTicket from "../ticketAnalytics/PendingTicket";
import TotalTicket from "../ticketAnalytics/TotalTicket";
import MoreIcon from "../../../assets/images/dashboard/more.svg";
import CalendarIcon from "../../../assets/images/dashboard/calendar.svg";
import SearchIcon from "../../../assets/images/profile/search.svg";
import TicketsList from "../ticketAnalytics/TicketsList";
// import { render } from "enzyme";

class TicketDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false,
    status:1
    };

  }

  handleOpenModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { i18n, t, kind ,createTicket} = this.props;
   //const {createTicket} = this.state
    return (<>
      <div className="ticketnalytics-header">
        <h2 className="dashboard-title">
          {kind === "tickets"
            ? t("tickets.tickets_overview")
            : kind === "dashboard"
            ? t("dashboard.dashboard_overview")
            : t("settings.settings_overview")}
        </h2>
        <button className="create_ticketbtn" onClick={()=>createTicket()}>
             + {t('tickets.tickets_creation').toUpperCase()}
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
            <button className="button" onClick={() => this.handleOpenModal()}>
              Filtrer
              <img className="view-more" src={MoreIcon} alt="caneldar" />
            </button>
            </div>
              <TicketsList />
           
          </div>
          
        </div>
        
        {/* <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.handleOpenModal}
          name="seif"
        /> */}
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
