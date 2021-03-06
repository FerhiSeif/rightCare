import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import TicketsStatusContent from './TicketsStatusContent';

const TicketsStatus = (props) => {
  const {
    t,
    handleCloseRessourceModal,
    handleAddRessourceModal,
    status,
    handleSwitchTicketSetting,
  } = props;

  const [state, setState] = useState({
    checked: false,
    statusItems: [],
  });

  const handleChange = () => {
    setState({ ...state, checked: !state.checked });
    handleSwitchTicketSetting(!state.checked, 'status');
  };

  useEffect(() => {
    if (status) {
      setState({ checked: status.active, statusItems: status.items });
    }
    return () => {};
  }, [status]);

  const cardStyle = {
    emptyChannel: {
      background: '#ffffff',
    },
    titleContainer: {
      padding: '0 5rem',
    },
    h2: {
      padding: '1.5rem 0',
      fontSize: '2rem',
    },
    card: {
      marginRight: '0',
    },
    p: {
      color: '#4c4c4c',
      fontSize: '16px',
      fontWeight: 'bold',
      marginBottom: 0,
    },
  };

  return (
    <div className="card customer-card" style={cardStyle.card}>
      <header className="card-header">
        <p className="card-header-title" style={cardStyle.p}>
          {t('settings.tickets_status')}
        </p>
        <div className="card-header-icon" aria-label="more options">
          <Switch
            onChange={handleChange}
            checked={state.checked}
            onColor="#00bd39"
            onHandleColor="#ffffff"
            handleDiameter={15}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={15}
            width={28}
            className="react-switch"
            id="material-switch"
          />
        </div>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="content-container">
            <TicketsStatusContent
              t={t}
              handleCloseRessourceModal={handleCloseRessourceModal}
              handleAddRessourceModal={handleAddRessourceModal}

              statusItems={state.statusItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TicketsStatus.propTypes = {
  t: PropTypes.func.isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
  status: PropTypes.objectOf.isRequired,
  handleSwitchTicketSetting: PropTypes.func.isRequired,
};

export default TicketsStatus;
