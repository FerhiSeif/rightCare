import React from 'react';
import PropTypes from 'prop-types';
import ChartDatas from './canvas/ChartDatas';
import MoreIcon from '../../assets/images/dashboard/more.svg';
import AntennaIcon from '../../assets/images/dashboard/antenna.svg';
import CalendarIcon from '../../assets/images/dashboard/calendar.svg';
import ActiveChannelIcon from '../../assets/images/dashboard/menu/active/channel-active.svg';

const MobileAnalytics = (props) => {
  const {
    i18n,
    t,
    containerWidth,
  } = props;

  return (
    <>
      <h2 className="dashboard-title">{t('dashboard.dashboard_overview')}</h2>
      <div className={`${containerWidth > 768 ? 'analytics-columns' : 'mobile-analytics-columns'} columns`}>
        <div className="filter-container">
          <button className="button is-info is-light is-large first-btn"><img src={ActiveChannelIcon} alt="Channel" className="calendar"/>{t('dashboard.all_channels')}<img src={MoreIcon} alt="Filter" className="more-icon"/></button>
          <button className="button is-light is-large last-btn"><img src={CalendarIcon} className="calendar"/>{t('dashboard.september')}<img src={MoreIcon} alt="Filter" className="more-icon"/></button>
        </div>

        <div className="mobile-analytics-cards">
          <div className="analytics-children first-child">
            <p className="subtitle">
              {t('dashboard.number_of_agents')}
            </p>
            <h3 className="status-agents">23</h3>
          </div>
          <div className="analytics-children">
            <p className="subtitle">
              {t('dashboard.complete_request')}
            </p>
            <h3 className="status-complete">12</h3>
          </div>
        </div>
        <div className="mobile-analytics-cards">
          <div className="analytics-children first-child">
            <p className="subtitle">
              {t('dashboard.pending_request')}
            </p>
            <h3 className="status-pending">13</h3>
          </div>
          <div className="analytics-children">
            <p className="subtitle">
              {t('dashboard.new_request')}
            </p>
            <h3 className="status-new">123</h3>
          </div>
        </div>
      </div>
      <div className="columns chart-columns">
        <div className="column column-chart">
          <h3>{t('dashboard.channel_chart')}</h3>
          <ChartDatas i18n={i18n} />
        </div>
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
      </div>
    </>
  );
};

MobileAnalytics.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({}).isRequired,
  containerWidth: PropTypes.number.isRequired,
};

export default MobileAnalytics;
