import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TicketsPriority from './Priorities/TicketsPriority';
import TicketsStatus from './Statuses/TicketsStatus';
import TicketsCategory from './Categories/TicketsCategory';
import CustomerInformations from './Customers/CustomerInformations';
import TicketsTimer from './Timers/TicketsTimer';
import Modal from './Modal';

const Content = (props) => {
  const {
    t,
    kind,
    i18n,
  } = props;

  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [modalButton, setModalButton] = useState('');
  const [customerFields, setCustomerFields] = useState(['First Name', 'Last Name', 'Email', 'Telephone']);

  const agentModal = React.createRef();

  const handleAddRessourceModal = (textTitle, detectContent, buttonText) => {
    document.body.classList.add('modal-opened');
    agentModal.current.classList.add('is-active');
    setModalTitle(textTitle);
    setModalContent(detectContent);
    setModalButton(buttonText);
  };

  const handleCloseRessourceModal = () => {
    document.body.classList.remove('modal-opened');
    agentModal.current.classList.remove('is-active');
    setModalTitle('');
    setModalContent('');
  };

  const handleAddFields = (params) => {
    console.log('state', params);
    // setCustomerFields((prevState) => ({
    //   ...prevState,
    //   // customerFields: updatedFields,
    // }));
  };

  return (
    <>
      <div className="card-content">
        <div className="content">
          <div className="content-container">
            <TicketsPriority
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}
            />
            <TicketsStatus
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}
            />
            <TicketsCategory
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}
            />
            <CustomerInformations
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}
            />
            <TicketsTimer
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}
            />
          </div>
        </div>
      </div>
      <Modal
        i18n={i18n}
        t={t}
        agentModal={agentModal}
        handleCloseRessourceModal={handleCloseRessourceModal}
        title={modalTitle}
        content={modalContent}
        kind={kind}
        buttonText={modalButton}
        handleAddFields={handleAddFields}
      />
    </>

  );
};

Content.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
};

export default Content;
