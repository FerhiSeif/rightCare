import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import TicketDashboard from './tickets/TicketDashboard';
import CreateTicket from './tickets/CreateTicket';
import MessageTicket from './tickets/MessageTicket';
// import { render } from 'enzyme';

import { SharedDataContext } from '../app/UseContext';

const TicketAnalytics = (props) => {
  const { i18n, t, kind } = props;

  // const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(0);
  const { sharedDataContext, setSharedDataContext } = useContext(SharedDataContext);

  // const handleOpenModal = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleMessageTicket = (statusValid, data, idNewTicket) => {
    console.log('data parameter : ', data, idNewTicket);

    if (statusValid === 'success') {
      setStatus(2);
      setSharedDataContext({
        ...sharedDataContext,
        notification: {
          active: true,
          status: 'success',
          content: { title: 'Tickets', msg: t('notification.msg_create_ticket_success') },
        },
      });

      return;
    }

    setSharedDataContext({
      ...sharedDataContext,
      notification: {
        active: true,
        status: 'danger',
        content: { title: '', msg: t('notification.msg_create_ticket_error') },
      },
    });
  };

  const handleCreateTicket = () => {
    setStatus(1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <TicketDashboard
            t={t}
            i18n={i18n}
            kind="tickets"
            handleCreateTicket={() => handleCreateTicket()}
            handleMessageTicket={() => handleMessageTicket()}
          />
        );
      case 1:
        return (
          <CreateTicket
            t={t}
            i18n={i18n}
            kind="tickets"
            handleCreateTicket={() => handleCreateTicket()}
            handleMessageTicket={(status, data, idNewTicket) => handleMessageTicket(status, data, idNewTicket)}
          />
        );
      case 2:
        return (
          <MessageTicket
            t={t}
            i18n={i18n}
            kind="tickets"
            handleCreateTicket={() => setStatus(1)}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      { getStepContent(status) }
    </>
  );
};

TicketAnalytics.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
};

export default TicketAnalytics;
