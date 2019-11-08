import React from 'react';
import PropTypes from 'prop-types';
import Agents from './Analytics/Agents';
import CompleteRequest from './Analytics/CompleteRequest';
import PendingRequest from './Analytics/PendingRequest';
import NewRequest from './Analytics/NewRequest';
import CalendarIcon from '../../assets/images/dashboard/calendar.svg';
import MoreIcon from '../../assets/images/dashboard/more.svg';
import AntennaIcon from '../../assets/images/dashboard/antenna.svg';

const Analytics = (props) => {
  const {
    t,
  } = props;

  return (
    <div>
      <h2 className="dashboard-title">{t('dashboard.dashboard_overview')}</h2>
      <div className="columns analytics-columns">
        <Agents t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
        <CompleteRequest t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
        <PendingRequest t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
        <NewRequest t={t} CalendarIcon={CalendarIcon} MoreIcon={MoreIcon} />
      </div>
      <div className="columns chart-columns">
        <div className="column">
          <div className="column-content column-content-a">
            <h2>{t('dashboard.live_updates')}</h2>
            <img src={MoreIcon} alt="Filter" />
          </div>
          <div className="column-content column-content-o">
            <img src={AntennaIcon} alt="Antenna" className="antenna" />
            <p>{t('dashboard.no_live_update')}</p>
          </div>
        </div>
        <div className="column column-chart">
          <h3>{t('dashboard.channel_chart')}</h3>
        </div>
      </div>
    </div>

  );
};

Analytics.propTypes = {
  t: PropTypes.func.isRequired,
};

export default Analytics;
