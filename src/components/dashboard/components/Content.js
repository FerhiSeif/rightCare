import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// Use Socket io - import
import io from 'socket.io-client';
import TicketsPriority from './Priorities/TicketsPriority';
import TicketsStatus from './Statuses/TicketsStatus';
import TicketsCategory from './Categories/TicketsCategory';
import CustomerInformations from './Customers/CustomerInformations';
import Modal from './Modal';

/* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
import { TicketSettingsHttpService } from '../../../services/HttpService';
import { SOCKET, SIO_CREATE_CUSTOMER_TICKET_SETTINGS } from '../../../constants/Constants';

const socket = io(SOCKET.BASE_URL);
/* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

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

  // console.log('priority ; ', priority);
  // console.log('status : ', status);
  // console.log('category : ', category);
  // console.log('customerInformation : ', customerInformation);

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

  const buildCreateCustomerFiled = (newObjectFiled) => {

    console.log('buildCreateCustomerFiled : ', newObjectFiled);

    const createFiled = {
      sio_channel: SIO_CREATE_CUSTOMER_TICKET_SETTINGS,
      customer_information: newObjectFiled,
    };

    if (localStorage && createFiled) {
      localStorage.setItem('sv_tmp_create_field', JSON.stringify(createFiled));
    }
  };

  const handleCreateCustomerFiled = () => {
    const createCustomerFiled = JSON.parse(localStorage.getItem('sv_tmp_create_field'));

    TicketSettingsHttpService.createCustomerFiledTicketSettings(createCustomerFiled)
      .then((response) => {
        if (response && response.data && response.data.status === 202) {
          const construct = customerFields;
          construct.items.push(createCustomerFiled.customer_information);
          setCustomerFields(construct);
          localStorage.removeItem('sv_tmp_create_field');

          // toast(
          //   <Notification
          //     content={this.props.t("create_survey.new.created_successfully")}
          //     icon="success"
          //     reply={false}
          //   />, {
          //     type: toast.TYPE.SUCCESS,
          // });
        } else {
          // toast(
          //   <Notification
          //     content={this.props.t("create_survey.new.created_failed")}
          //     icon="danger"
          //     reply={false}
          //   />, {
          //     type: toast.TYPE.ERROR,
          // });
        }
      })
      .catch((error) => {
        console.log('**** print error ****', error);
      });
  };

  const onSocketCreateCustomerFiled = (response) => {
    console.log('onSocketCreateCustomerFiled : ', response);
    
    if (response && response.status === 200) {
      handleCreateCustomerFiled();
    }
  };

  const initSocketCreateCustomerFiled = () => {

    console.log('initSocketCreateCustomerFiled');

    socket.on(SIO_CREATE_CUSTOMER_TICKET_SETTINGS, (response) => onSocketCreateCustomerFiled(response));
  };

  const handleAddFields = (elt, params) => {
    console.log('elt : ', elt);
    console.log('params : ', params);
    console.log('customerFields : ', customerFields);
    console.log('customerInformation : ', customerInformation);

    const { fieldType, fieldLabel } = params;
    const newObjectFiled = { name: fieldLabel.toLowerCase(), type: fieldType.toLowerCase() };

    const detect = customerFields.items.findIndex((item) => item.name.toLowerCase() === newObjectFiled.name && item.type.toLowerCase() === newObjectFiled.type);

    if (elt === 'customer') {
      if (detect >= 0) {
        customerFields.items.splice(customerFields.items.findIndex((item) => (item.name.toLowerCase() === newObjectFiled.name && item.type.toLowerCase() === newObjectFiled.type)), 1);

        return;
      }

      console.log('hjqkgkjqsgkjqsdjksqhdgqsjk');

      buildCreateCustomerFiled(newObjectFiled);
      initSocketCreateCustomerFiled();
    }
  };

  useEffect(() => {
    setCustomerFields(customerInformation);
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
