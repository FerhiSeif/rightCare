import React, { Component } from "react";
import PropTypes from "prop-types";
//import CreateTicket from "./ticketAnalytics/CreateTicket";
import ResolveTicket from "./ticketAnalytics/ResolveTicket";
import PendingTicket from "./ticketAnalytics/PendingTicket";
import TotalTicket from "./ticketAnalytics/TotalTicket";
//import ChartDatas from './canvas/ChartDatas';
import NewRequest from "./Analytics/NewRequest";
import PendingRequest from "./Analytics/PendingRequest";
import CompleteRequest from "./Analytics/CompleteRequest";
import MoreIcon from "../../assets/images/dashboard/more.svg";
import AntennaIcon from "../../assets/images/dashboard/antenna.svg";
import CalendarIcon from "../../assets/images/dashboard/calendar.svg";
import SearchIcon from "../../assets/images/profile/search.svg";
import TicketsList from "./ticketAnalytics/TicketsList";
import TicketDashboard from "./tickets/TicketDashboard";
import CreateTicket from "./tickets/CreateTicket";
import MessageTicket from "./tickets/MessageTicket";
import { render } from "enzyme";

class TicketAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, status: 0 };
  }

  handleOpenModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  getStepContent = step => {
    const { i18n, t } = this.props;
    switch (step) {
      case 0:
        return (
          <TicketDashboard
            t={t}
            i18n={i18n}
            kind="tickets"
            createTicket={() => this.setState({ status: 1 })}
          />
        );
      case 1:
        return <CreateTicket t={t} i18n={i18n} kind="tickets" />;
      case 2:
        return (
          <MessageTicket
            t={t}
            i18n={i18n}
            kind="tickets"
            createTicket={() => this.setState({ status: 1 })}
          />
        );
      default:
        return "Unknown step";
    }
  };

  render() {
    const { i18n, t, kind } = this.props;
    const { status } = this.state;
    return <>{this.getStepContent(status)}</>;
  }
}

TicketAnalytics.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired
};

export default TicketAnalytics;
