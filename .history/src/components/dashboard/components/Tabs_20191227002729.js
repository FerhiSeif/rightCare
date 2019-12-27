import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Use Socket io - import
import io from 'socket.io-client';

import 'react-tabs/style/react-tabs.css';
import {
  Tab, Tabs as Tabber, TabList, TabPanel,
} from 'react-tabs';
import Content from './Content';

/* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
// Use Socket io - Init Socket & include service
import { TicketSettingsHttpService } from '../../../services/HttpService';
// import constants
import { SOCKET, SIO_TICKET_SETTINGS } from '../../../constants/Constants';

const socket = io(SOCKET.BASE_URL);
/* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

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

  const [ticketSettings, setTicketSettings] = useState([]);

  /* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
  const onSocketGetTicketSettings = (response) => {
    if (response && (response.status === 200 || response.status === 202)) {
      console.log('onSocketGetTicketSettings : ', response.data[0]);
      setTicketSettings(response.data[0]);
    }
  };

  const {
    priority, status, category, customer_information,
  } = ticketSettings;

  const initSocketTicketSettings = () => {
    socket.on(SIO_TICKET_SETTINGS, (response) => new Promise((resolve) => resolve(onSocketGetTicketSettings(response))));
  };
  /* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

  useEffect(() => {
    TicketSettingsHttpService.getDatasTicketSettings().then((response) => {
      console.log('getDatasTicketSettings : ', response);

      if ((response.status === 200 || response.status === 202)) {
        initSocketTicketSettings();
      }
    });
    TicketSettingsHttpService.activeTicketSettings().then((response) => {
      console.log('activeTicketSettings : ', response);

      // if ((response.status === 200 || response.status === 202)) {
      //   initSocketTicketSettings();
      // }
    });
    return () => {
      // cleanup
    };
  }, []);

  return (
    <div style={cardStyle.titleContainer}>
      <h2 style={cardStyle.h2}>
        {kind === 'dashboard' ? t('dashboard.dashboard_overview') : t('settings.settings_overview')}
      </h2>
      <div className="card tickets-card">
        <Tabber>
          <TabList>
            <Tab>
              {t('settings.ticket_settings')}
            </Tab>
          </TabList>
          <TabPanel>
            <Content
              kind={kind}
              t={t}
              i18n={i18n}
              priority={priority}
              status={status}
              category={category}
              customerInformation={customer_information}
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
