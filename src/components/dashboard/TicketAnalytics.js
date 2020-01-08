import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TicketDashboard from './tickets/TicketDashboard';
import CreateTicket from './tickets/CreateTicket';
import MessageTicket from './tickets/MessageTicket';
// import { render } from 'enzyme';

class TicketAnalytics extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, status: 0 };
  }

  getStepContent = step => {
    const { i18n, t } = this.props;
    switch (step) {
      case 0:
        return (
          <TicketDashboard
            t={t}
            i18n={i18n}
            kind="tickets"
            handleCreateTicket={() => this.handleCreateTicket()}
            handleMessageTicket={() => this.handleMessageTicket()}
          />
        );
      case 1:
        return (
          <CreateTicket
            t={t}
            i18n={i18n}
            kind="tickets"
            handleCreateTicket={() => this.handleCreateTicket()}
            handleMessageTicket={() => this.handleMessageTicket()}
          />
        );
      case 2:
        return (
          <MessageTicket
            t={t}
            i18n={i18n}
            kind="tickets"
            handleCreateTicket={() => this.setState({ status: 1 })}
          />
        );
      default:
        return 'Unknown step';
    }
  };


  handleOpenModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleMessageTicket = (data) => {
    console.log('data : ', data);

    this.setState({ status: 2 });
  }

  handleCreateTicket() {
    this.setState({ status: 1 });
  }

  render() {
    // const { i18n, t, kind } = this.props;
    const { status } = this.state;
    return <>{this.getStepContent(status)}</>;
  }
}

TicketAnalytics.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
};

export default TicketAnalytics;
