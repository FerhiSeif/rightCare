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
  const [customerFields, setCustomerFields] = useState([
    // { elt: 'First Name', value: '' },
    // { elt: 'Last Name', value: '' },
    // { elt: 'Email', value: '' },
    // { elt: 'Telephone', value: '' },
    { elt: t('settings.customer_informations_content.first_name'), value: 'NDri' },
    { elt: t('settings.customer_informations_content.last_name'), value: 'Jordy' },
    { elt: t('settings.customer_informations_content.email'), value: 'jordy@g.com' },
    { elt: t('settings.customer_informations_content.telephone'), value: '00010001' },
  ]);

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

  const handleAddFields = (elt, params) => {
    const { fieldType, fieldValue } = params;
    const objValue = { elt: fieldType, value: fieldValue };
    if (elt === 'customer') {
      setCustomerFields([
        ...customerFields,
        objValue,
      ]);
    }
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
              customerFields={customerFields}
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
