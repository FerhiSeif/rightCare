import React from 'react';
import PropTypes from 'prop-types';
import Agents from './Analytics/Agents';
import ChartDatas from './canvas/ChartDatas';
import NewRequest from './Analytics/NewRequest';
import PendingRequest from './Analytics/PendingRequest';
import CompleteRequest from './Analytics/CompleteRequest';
import MoreIcon from '../../assets/images/dashboard/more.svg';
import AntennaIcon from '../../assets/images/dashboard/antenna.svg';
import CalendarIcon from '../../assets/images/dashboard/calendar.svg';

const Analytics = (props) => {
  const {
    i18n,
    t,
    kind,
  } = props;

  return (
    <>
      <h2 className="dashboard-title">
        {kind === 'dashboard' ? t('dashboard.dashboard_overview') : t('settings.settings_overview')}
      </h2>
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
          <ChartDatas i18n={i18n} />
        </div>
      </div>
    </>

  );
};

Analytics.propTypes = {
  i18n: PropTypes.shape({}).isRequired,
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
};

export default Analytics;
