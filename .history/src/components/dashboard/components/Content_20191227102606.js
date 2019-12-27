import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TicketsPriority from './Priorities/TicketsPriority';
import TicketsStatus from './Statuses/TicketsStatus';
import TicketsCategory from './Categories/TicketsCategory';
import CustomerInformations from './Customers/CustomerInformations';
import Modal from './Modal';

const Content = (props) => {
  const {
    t,
    kind,
    i18n,
    priority,
    status,
    category,
    customerInformation,
  } = props;

  console.log('priority ; ', priority);
  console.log('status : ', status);
  console.log('category : ', category);
  console.log('customerInformation : ', customerInformation);

  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const [modalButton, setModalButton] = useState('');
  const [customerFields, setCustomerFields] = useState({});

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
    console.log('elt : ', elt);
    console.log('params : ', params);
    console.log('customerFields : ', customerFields);
    console.log('customerInformation : ', customerInformation);
    
    const { fieldType, fieldLabel } = params;
    const newObject = { label: fieldLabel.toLowerCase(), type: fieldType.toLowerCase() };

    const detect = customerFields.items.findIndex((item) => item.label.toLowerCase() === newObject.label && item.type.toLowerCase() === newObject.type);

    if (elt === 'customer') {
      if (detect >= 0) {
        customerFields.items.splice(customerFields.items.findIndex((item) => (item.label.toLowerCase() === newObject.label && item.type.toLowerCase() === newObject.type)), 1);
      }
      const constructData = customerFields;
      constructData.items.push(newObject);
      setCustomerFields(constructData);
    }
  };

  // useEffect(() => () => {},
  //   [priority, status, category, customerInformation]);

  useEffect(() => {
    setCustomerFields({ ...customerInformation });
    return () => {};
  }, [priority, status, category, customerInformation, customerFields]);

  console.log('customerFields : ', customerFields);
  console.log('customerInformation : ', customerInformation);

  return (
    <>
      <div className="card-content">
        <div className="content">
          <div className="content-container">
            <TicketsPriority
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}

              priority={priority}
            />
            <TicketsStatus
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}

              status={status}
            />
            <TicketsCategory
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}

              category={category}
            />
            <CustomerInformations
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}

              customerFields={customerFields}
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
  priority: PropTypes.objectOf.isRequired,
  status: PropTypes.objectOf.isRequired,
  category: PropTypes.objectOf.isRequired,
  customerInformation: PropTypes.objectOf.isRequired,
};

export default Content;
