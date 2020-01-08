import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';

// Use Socket io - import
import io from 'socket.io-client';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Welcome from '../onboarding/Welcome';
import Steps from '../onboarding/Steps';
import Dashboard from '../dashboard/Dashboard';
import Settings from '../dashboard/Settings';
import Tickets from '../dashboard/Tickets';

import { SharedDataContext } from './UseContext';

/* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
import { SOCKET } from '../../constants/Constants';

const socket = io(SOCKET.BASE_URL);
/* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

const Routing = (props) => {
  const {
    t,
    changeLang,
    defaultLang,
    isLogged,
    handleChooseService,
    checkedServices,
    activeServices,
    selectServiceRef,
    handleSimulateChooseServices,
    containerWidth,
    i18n,
  } = props;

  const [sharedDataContext, setSharedDataContext] = useState({
    socketConnected: false,
  });

  const providerSharedDataContext = useMemo(() => ({ sharedDataContext, setSharedDataContext }), [sharedDataContext, setSharedDataContext]);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected socket');
      setSharedDataContext({ socketConnected: true });
    });
    socket.on('disconnect', () => {
      console.log('Disconnected socket');
      setSharedDataContext({ socketConnected: false });
    });
    return () => {
      // Use Socket io - connect Socket
      socket.on('connect', () => {
        console.log('Connected socket');
        setSharedDataContext({ socketConnected: true });
      });
      socket.on('disconnect', () => {
        console.log('Disconnected socket');
        setSharedDataContext({ socketConnected: false });
      });
    };
  }, [sharedDataContext]);

  return (
    <Router>
      <SharedDataContext.Provider value={providerSharedDataContext}>
        <Route exact path="/">
          <Welcome
            t={t}
            changeLang={changeLang}
            defaultLang={defaultLang}
            kind="onboard"
            isLogged={false}
            containerWidth={containerWidth}
          />
        </Route>
        <Switch>
          <Route path="/dashboard">
            <Dashboard
              t={t}
              changeLang={changeLang}
              defaultLang={defaultLang}
              kind="dashboard"
              isLogged={isLogged}
              i18n={i18n}
            />
          </Route>
          <Route path="/tickets">
            <Tickets
              t={t}
              changeLang={changeLang}
              defaultLang={defaultLang}
              kind="tickets"
              isLogged={isLogged}
              i18n={i18n}
            />
          </Route>
          <Route path="/settings">
            <Settings
              t={t}
              changeLang={changeLang}
              defaultLang={defaultLang}
              kind="settings"
              isLogged={isLogged}
              i18n={i18n}
            />
          </Route>
          <Route path="/onboard">
            <Steps
              t={t}
              changeLang={changeLang}
              defaultLang={defaultLang}
              kind="app"
              isLogged={isLogged}
              handleChooseService={handleChooseService}
              checkedServices={checkedServices}
              activeServices={activeServices}
              selectServiceRef={selectServiceRef}
              handleSimulateChooseServices={handleSimulateChooseServices}
              containerWidth={containerWidth}
            />
          </Route>
        </Switch>
      </SharedDataContext.Provider>
    </Router>
  );
};

Routing.propTypes = {
  t: PropTypes.func.isRequired,
  changeLang: PropTypes.func.isRequired,
  defaultLang: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired,
  containerWidth: PropTypes.number.isRequired,
  handleChooseService: PropTypes.func.isRequired,
  checkedServices: PropTypes.objectOf({}).isRequired,
  activeServices: PropTypes.arrayOf([]).isRequired,
  selectServiceRef: PropTypes.func.isRequired,
  handleSimulateChooseServices: PropTypes.func.isRequired,
};

export default Routing;
