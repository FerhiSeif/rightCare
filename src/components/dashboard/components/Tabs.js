import React from 'react';
import PropTypes from 'prop-types';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs as Tabber, TabList, TabPanel } from 'react-tabs';
import Content from './Content';

const Tabs = (props) => {
  const {
    t,
    kind,
  } = props;


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
    },
  };

  return (
    <div style={cardStyle.titleContainer}>
      <h2 style={cardStyle.h2}>
        {kind === 'dashboard' ? t('dashboard.dashboard_overview') : 'Settings'}
      </h2>
      <div className="card" style={cardStyle.card}>
        <Tabber>
          <TabList>
            <Tab>Ticket Settings</Tab>
          </TabList>

          <TabPanel>
            <Content
              kind={kind}
              t={t}
            />
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
