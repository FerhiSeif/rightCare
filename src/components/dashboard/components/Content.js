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
import { SOCKET, SIO_CREATE_CUSTOMER_TICKET_SETTINGS, SIO_UPDATE_SWITCH_TICKET_SETTINGS } from '../../../constants/Constants';

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

  /** Start - send customerFiled */
  const buildCreateCustomerFiled = (newObjectFiled) => {
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
    if (response && response.status === 200) {
      // console.log('onSocketCreateCustomerFiled : ', response);
    }
  };

  const initSocketCreateCustomerFiled = () => {
    socket.on(SIO_CREATE_CUSTOMER_TICKET_SETTINGS, (response) => onSocketCreateCustomerFiled(response));
    handleCreateCustomerFiled();
  };

  const handleAddFields = (elt, params) => {
    const { fieldType, fieldLabel } = params;
    const newObjectFiled = { name: fieldLabel.toLowerCase(), type: fieldType.toLowerCase() };

    const detect = customerFields.items.findIndex((item) => item.name.toLowerCase() === newObjectFiled.name && item.type.toLowerCase() === newObjectFiled.type);

    if (elt === 'customer') {
      if (detect >= 0) {
        customerFields.items.splice(customerFields.items.findIndex((item) => (item.name.toLowerCase() === newObjectFiled.name && item.type.toLowerCase() === newObjectFiled.type)), 1);

        return;
      }

      // build & save in dataBase
      buildCreateCustomerFiled(newObjectFiled);
      initSocketCreateCustomerFiled();
    }
  };
  /** End - send customerFiled */

  /** Start - Update Switch */
  const handleUpdateSwitch = (updateSwitch) => {
    TicketSettingsHttpService.updateSwitchTicketSettings(updateSwitch)
      .then((response) => {
        if (response && response.data && response.data.status === 202) {
          console.log(';jhebliqh qgqkhsqjdgsqjgdkq');

          console.log('customerFields : ', customerFields);
          

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

  const onSocketUpdateSwitch = (response) => {
    if (response && response.status === 200) {
      // console.log('onSocketUpdateSwitch : ', response);
    }
  };

  const initSocketUpdateSwitch = (updateSwitch) => {
    socket.on(SIO_UPDATE_SWITCH_TICKET_SETTINGS, (response) => onSocketUpdateSwitch(response));
    handleUpdateSwitch(updateSwitch);
  };

  const handleSwitchTicketSetting = (active, label) => {
    const updateSwitch = {
      sio_channel: SIO_UPDATE_SWITCH_TICKET_SETTINGS,
      settings: {
        active,
        label,
      },
    };
    initSocketUpdateSwitch(updateSwitch);
  };
  /** End - Update Switch */

  useEffect(() => {
    setCustomerFields(customerInformation);
    return () => {};
  }, [priority, status, category, customerInformation]);

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
              handleSwitchTicketSetting={handleSwitchTicketSetting}
            />
            <TicketsStatus
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}

              status={status}
              handleSwitchTicketSetting={handleSwitchTicketSetting}
            />
            <TicketsCategory
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}

              category={category}
              handleSwitchTicketSetting={handleSwitchTicketSetting}
            />
            <CustomerInformations
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}

              customerFields={customerFields}
              handleSwitchTicketSetting={handleSwitchTicketSetting}
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
