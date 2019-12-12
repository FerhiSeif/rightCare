import React from 'react';
import PropTypes from 'prop-types';
import TicketsPriority from './Priorities/TicketsPriority';
import TicketsStatus from './Statuses/TicketsStatus';
import TicketsCategory from './Categories/TicketsCategory';
import CustomerInformations from './Customers/CustomerInformations';
import TicketsTimer from './Timers/TicketsTimer';
import Modal from './Modal';

const Content = (props) => {
  const {
    kind,
  } = props;

  const agentModal = React.createRef();

  const handleAddRessourceModal = () => {
    document.body.classList.add('modal-opened');
    agentModal.current.classList.add('is-active');
  };

  const handleCloseRessourceModal = () => {
    document.body.classList.remove('modal-opened');
    agentModal.current.classList.remove('is-active');
  };

  return (
    <>
      <div className="card-content">
        <div className="content">
          <div className="content-container">
              <TicketsPriority handleCloseRessourceModal={handleCloseRessourceModal} handleAddRessourceModal={handleAddRessourceModal} />
              <TicketsStatus handleCloseRessourceModal={handleCloseRessourceModal} handleAddRessourceModal={handleAddRessourceModal} />
              <TicketsCategory handleCloseRessourceModal={handleCloseRessourceModal} handleAddRessourceModal={handleAddRessourceModal} />
              <CustomerInformations handleCloseRessourceModal={handleCloseRessourceModal} handleAddRessourceModal={handleAddRessourceModal} />
              <TicketsTimer handleCloseRessourceModal={handleCloseRessourceModal} handleAddRessourceModal={handleAddRessourceModal} />
          </div>
        </div>
      </div>
      <Modal
        agentModal={agentModal}
        handleCloseRessourceModal={handleCloseRessourceModal}
        title="Modal title"
        content="content text"
        kind={kind}
        buttonText="Conitnue"
      />
    </>

  );
};

Content.propTypes = {
  kind: PropTypes.string.isRequired,
  initialAgents: PropTypes.shape({}).isRequired,
};

export default Content;
