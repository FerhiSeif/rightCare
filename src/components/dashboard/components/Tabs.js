import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

// Use Socket io - import
import io from 'socket.io-client';

import 'react-tabs/style/react-tabs.css';
import {
  Tab, Tabs as Tabber, TabList, TabPanel,
} from 'react-tabs';
import Content from './Content';

/* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
import { TicketSettingsHttpService, SocketService } from '../../../services/HttpService';
import { SOCKET, SIO_TICKET_SETTINGS } from '../../../constants/Constants';
/* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

import { SharedDataContext } from '../../app/UseContext';

const socket = io(SOCKET.BASE_URL);

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

  const { sharedDataContext, setSharedDataContext} = useContext(SharedDataContext);

  const [ticketSettings, setTicketSettings] = useState([]);

  const {
    priority, status, category, customer_information,
  } = ticketSettings;

  /* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
  const onSocketGetTicketSettings = (response) => {
    if (response && (response.status === 200 || response.status === 202)) {
      setTicketSettings(response.data[0]);
      console.log('onSocketGetTicketSettings : ', response.data[0]);
    }
  };

  const initSocketTicketSettings = () => {
    console.log('initSocketTicketSettings : **** ');

    socket.on(SIO_TICKET_SETTINGS, (response) => {
      console.log('initSocketTicketSettings : ', response);
      onSocketGetTicketSettings(response);
    });

    TicketSettingsHttpService.getDatasTicketSettings().then((response) => {
      console.log('getDatasTicketSettings : ', response);

      if ((response.status === 200 || response.status === 202)) {
        console.log('test success : ', response);
      } else {
        console.log('test error : ', response);
      }
    });
  };
  /* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

  useEffect(() => {
    initSocketTicketSettings();

    console.log('sharedDataContext : ', sharedDataContext);

    // if (sharedDataContext.socketConnected) {
    //   initSocketTicketSettings();
    // }
    return () => {
      // cleanup
    };
  }, [sharedDataContext]);

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
