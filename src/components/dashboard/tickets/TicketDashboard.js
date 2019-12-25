import React, { Component } from "react";
import PropTypes from "prop-types";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import CreateTicket from "../ticketAnalytics/CreateTicket";
import ResolveTicket from "../ticketAnalytics/ResolveTicket";
import PendingTicket from "../ticketAnalytics/PendingTicket";
import TotalTicket from "../ticketAnalytics/TotalTicket";
import MoreIcon from "../../../assets/images/dashboard/more.svg";
import CalendarIcon from "../../../assets/images/dashboard/calendar.svg";
import SearchIcon from "../../../assets/images/profile/search.svg";
import TicketsList from "../ticketAnalytics/TicketsList"; // SortBtn
import SortBtn from "../../../assets/images/tickets/sortBtn.svg";
// import { render } from "enzyme";

class TicketDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      status: 1,
      allPriority: false,
      high: false,
      medium: false,
      low: false,
      allStatus: false,
      resolve: false,
      pending: false,
      new: false,
      allCategory: false,
      technical: false,
      support: false,
      enquires: false
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: !event.target.checked }, () => {
      console.log(...this.state);
    });
  };

  render() {
    const { i18n, t, kind, createTicket } = this.props;
    const { isOpen } = this.state;
    return (
      <>
        <div className="ticketnalytics-header">
          <h2 className="dashboard-title titledashboard">
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
          <div className="column column-chart ticketContainer container-dashboard-ticket ">
            <div className="searchBar">
              <button className="buttonserch">
                <img className="view-more" src={SearchIcon} alt="SearchIcon" />
              </button>
              <input
                className="input input-search"
                type="text"
                placeholder="Search"
              />

              <button
                className="button buttonFilter"
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
              <div className="priorityContainer">
                {" "}
                <span className="text-filter">Priority</span>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.allPriority}
                        onChange={this.handleChange}
                        value="allPriority"
                        color="primary"
                      />
                    }
                    label="All"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.high}
                        onChange={this.handleChange}
                        value="high"
                        color="primary"
                      />
                    }
                    label="High"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.medium}
                        onChange={this.handleChange}
                        value="medium"
                        color="primary"
                      />
                    }
                    label="Medium"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.low}
                        onChange={this.handleChange}
                        value="low"
                        color="primary"
                      />
                    }
                    label="Low"
                  />
                </FormGroup>
              </div>
              <div className="statusContainer">
                {" "}
                <span className="text-filter">Status</span>
                <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.allStatus}
                        onChange={this.handleChange}
                        value="allStatus"
                        color="primary"
                      />
                    }
                    label="All"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.new}
                        onChange={this.handleChange}
                        value="new"
                        color="primary"
                      />
                    }
                    label="New"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.pending}
                        onChange={this.handleChange}
                        value="pending"
                        color="primary"
                      />
                    }
                    label="Pending"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.resolve}
                        onChange={this.handleChange}
                        value="resolve"
                        color="primary"
                      />
                    }
                    label="Resolve"
                  />
                </FormGroup>
              </div>
              <div className="CategorieContainer"> <span className="text-filter">Category</span>
              <FormGroup row>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.allCategory}
                        onChange={this.handleChange}
                        value="allCategory"
                        color="primary"
                      />
                    }
                    label="All"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.technical}
                        onChange={this.handleChange}
                        value="technical"
                        color="primary"
                      />
                    }
                    label="Technical"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.support}
                        onChange={this.handleChange}
                        value="support"
                        color="primary"
                      />
                    }
                    label="Support"
                  />
                           <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.enquires}
                        onChange={this.handleChange}
                        value="enquires"
                        color="primary"
                      />
                    }
                    label="Enquires"
                  />
                </FormGroup>
               </div>
              <div className="modalSerachSetting">
                <p style={{ color: "#EB5923" }}> clear all filters</p>
                <p>
                  <span style={{ color: "#94A4BE", marginRight: "32px" }}>
                    Cancel
                  </span>
                  <span style={{ color: "##0089E1" }}>Apply</span>
                </p>
              </div>
            </div>
            <TicketsList />
          </div>
        </div>
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
