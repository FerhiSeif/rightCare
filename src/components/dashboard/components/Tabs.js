import React from 'react';
import PropTypes from 'prop-types';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs as Tabber, TabList, TabPanel } from 'react-tabs';
import Content from './Content';

const Tabs = (props) => {
  const {
    t,
    kind,
    i18n,
  } = props;

  const cardStyle = {
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
    },
  };

  return (
    <div style={cardStyle.titleContainer}>
      <h2 style={cardStyle.h2}>
        {kind === 'dashboard' ? t('dashboard.dashboard_overview') : t('settings.settings_overview')}
      </h2>
      <div className="card tickets-card">
        <Tabber>
          <TabList>
            <Tab>
              {t('settings.agent_settings')}
            </Tab>
            <Tab>
              {t('settings.ticket_settings')}
            </Tab>
            <Tab>
              {t('settings.channel_settings')}
            </Tab>
          </TabList>

          <TabPanel>
            <div className="card-content">
              {t('settings.agent_settings')}
            </div>
          </TabPanel>
          <TabPanel>
            <Content
              kind={kind}
              t={t}
              i18n={i18n}
            />
          </TabPanel>
          <TabPanel>
            <div className="card-content">
              {t('settings.channel_settings')}
            </div>
          </TabPanel>
        </Tabber>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
};

export default Tabs;
