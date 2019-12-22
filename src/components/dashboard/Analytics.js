import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Agents from './Analytics/Agents';
import ChartDatas from './canvas/ChartDatas';
import NewRequest from './Analytics/NewRequest';
import PendingRequest from './Analytics/PendingRequest';
import CompleteRequest from './Analytics/CompleteRequest';
import MoreIcon from '../../assets/images/dashboard/more.svg';
import UserImg from '../../assets/images/dashboard/user.svg';
import CalendarIcon from '../../assets/images/dashboard/calendar.svg';
import LiveActivity from './Analytics/LiveActivity'

const Analytics = (props) => {
  const {
    i18n,
    t,
    kind,
  } = props;

  const [liveActivity, setLiveActivity] = useState([
    {
      img: UserImg,
      title: 'New Ticket #4424211 Open',
      time: '1 min ago',
      status: 'Ticket',
    },
    {
      img: UserImg,
      title: 'Response to ticket #3432131',
      time: '6 min ago',
      status: 'Ticket',
    },
    {
      img: UserImg,
      title: 'New Ticket #44211 Open',
      time: '23 min ago',
      status: 'Ticket',
    },
    {
      img: UserImg,
      title: 'Response to chat ticket #3432131',
      time: '1 day ago',
      status: 'Ticket',
    },
  ]);


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

          {/*  */}
          {liveActivity.map((item, i) => (
            <LiveActivity
              t={t}
              key={i}
              img={item.img}
              title={item.title}
              time={item.time}
              status={item.status}
            />
          ))}
          {/*  */}
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
