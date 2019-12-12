import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Switch from 'react-switch';
import TicketsTimerContent from './TicketsTimerContent';

const TicketsTimer = (props) => {
  const {
    t,
    kind,
    i18n,
  } = props;

  const [state, setState] = useState({
    checked: false,
  });

  const handleChange = (checked) => {
    setState({ checked });
  };

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
      width: 'initial',
      maxWidth: 'initial',
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
    <div className="card" style={cardStyle.card}>
      <header className="card-header">
        <p className="card-header-title" style={cardStyle.p}>
          {t('settings.tickets_timer')}
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
      <div className='card-content'>
        <div className="content">
          <div className="content-container">
            <TicketsTimerContent t={t} />
          </div>
        </div>
      </div>
    </div>
  );
};

TicketsTimer.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
};

export default TicketsTimer;