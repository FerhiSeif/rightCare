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
            messageTicket={() => this.setState({ status: 2 })}
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
        return 'Unknown step';
    }
  };

  render() {
    // const { i18n, t, kind } = this.props;
    const { status } = this.state;
    return <>{this.getStepContent(status)}</>;
  }
}

TicketAnalytics.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  // kind: PropTypes.string.isRequired,
};

export default TicketAnalytics;
