import React from 'react';
import PropTypes from 'prop-types';
import FakeChannels from '../../../faker/channels';

const CompleteRequest = (props) => {
  const {
    t,
    CalendarIcon,
    MoreIcon,
  } = props;
  const status = 'completed';
  const requestCount = FakeChannels.filter((request) => request
    .status
    .toLowerCase()
    .includes(status
      .toLowerCase()))
    .length;

  return (
    <div className="column">
      <div className="card analytics-card-parent analytics-card-parent-complete-request">
        <div className="card-content analytics-card">
          <p className="subtitle">
            {t('dashboard.complete_request')}
          </p>
          <p className="title">
            {requestCount}
          </p>
          <button className="button is-secondary is-outlined">
            <img className="calendar-icon" src={CalendarIcon} alt='caneldar' />
            {t('dashboard.september')}
            <img className="view-more" src={MoreIcon} alt='caneldar' />
          </button>
        </div>
      </div>
    </div>
  );
};

CompleteRequest.propTypes = {
  t: PropTypes.func.isRequired,
  CalendarIcon: PropTypes.string.isRequired,
  MoreIcon: PropTypes.string.isRequired,
};

export default CompleteRequest;
