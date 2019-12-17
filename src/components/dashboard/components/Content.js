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
    { label: t('settings.customer_informations_content.first_name'), type: 'text' },
    { label: t('settings.customer_informations_content.last_name'), type: 'text' },
    { label: t('settings.customer_informations_content.email'), type: 'email' },
    { label: t('settings.customer_informations_content.telephone'), type: 'number' },
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
    const { fieldType, fieldLabel } = params;
    const objValue = { label: fieldLabel, type: fieldType };
    if (elt === 'customer') {
      setCustomerFields([
        ...customerFields,
        objValue,
      ]);

      console.log('1 : ', customerFields);

      // const unique = [...new Set(customerFields)];
      // setCustomerFields([
      //   ...unique,
      // ]);

      const func = (names) => customerFields.filter((v, i) => {
        console.log('func : ', v, i);

        // return names.indexOf(v) === i;
      });
      func(customerFields);

      console.log('2 : ', customerFields);
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
