import React from 'react';
import PropTypes from 'prop-types';

const PendingRequest = (props) => {
  const {
    t,
    CalendarIcon,
    MoreIcon,
  } = props;

  return (
    <div className="column">
      <div className="card analytics-card-parent analytics-card-parent-pending-request">
        <div className="card-content analytics-card">
          <p className="subtitle">
            {t('dashboard.pending_request')}
          </p>
          <p className="title">
            0
          </p>
          <button className="button is-secondary is-outlined">
            <img className="calendar-icon" src={CalendarIcon} alt='caneldar' />
            September
            <img className="view-more" src={MoreIcon} alt='caneldar' />
          </button>
        </div>
      </div>
    </div>
  );
};

PendingRequest.propTypes = {
  t: PropTypes.func.isRequired,
  CalendarIcon: PropTypes.string.isRequired,
  MoreIcon: PropTypes.string.isRequired,
};

export default PendingRequest;
