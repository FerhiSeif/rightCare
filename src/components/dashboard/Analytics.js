import React from 'react';
import PropTypes from 'prop-types';
import Agents from './Analytics/Agents';
import CompleteRequest from './Analytics/CompleteRequest';
import PendingRequest from './Analytics/PendingRequest';
import NewRequest from './Analytics/NewRequest';
import CalendarIcon from '../../assets/images/dashboard/calendar.svg';
import MoreIcon from '../../assets/images/dashboard/more.svg';

const Analytics = (props) => {
  const {
    t,
  } = props;

  return (
    <div>
      <h2 className="dashboard-title">Dashboard overview</h2>
      <div className="columns analytics-columns">
        <Agents t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
        <CompleteRequest t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
        <PendingRequest t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
        <NewRequest t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
      </div>
    </div>

  );
};

Analytics.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Analytics;
