/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useMemo, useEffect } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Use Socket io - import
import io from 'socket.io-client';

import Welcome from '../onboarding/Welcome';
import Steps from '../onboarding/Steps';
import Dashboard from '../dashboard/Dashboard';
import Settings from '../dashboard/Settings';
import BrowserLanguage from '../../utils/BrowserLanguage';
import LangIconEn from '../../assets/images/locale/uk.png';
import LangIconFr from '../../assets/images/locale/fr.png';
import '../../assets/styles/bluma.scss';
import FakeChannels from '../../faker/channels';

import { SharedDataContext } from './UseContext';

/* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

// import constants
import { SOCKET } from '../../constants/Constants';

const socket = io(SOCKET.BASE_URL);

/* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

const appStyles = {
  langIcons: {
    height: '1.6rem',
    marginRight: '.5rem',
  },
  langContainer: {
    display: 'flex',
  },
};

const enLabelIcon = (
  <div style={appStyles.langContainer}>
    <img alt="lang icon" src={LangIconEn} style={appStyles.langIcons} />
    <span>English</span>
  </div>
);

const frLabelIcon = (
  <div style={appStyles.langContainer}>
    <img alt="lang icon" src={LangIconFr} style={appStyles.langIcons} />
    <span>Français</span>
  </div>
);

const selectServiceRef = React.createRef();

const App = (props) => {
  const { t, i18n } = props;
  // const { changeLang, handleChooseService, handleSimulateChooseServices } = this;

  const getPrevServices = () => {
    // get previously saved services from the localStorage
    // the update the global state.
    const prevServices = JSON.parse(localStorage.getItem('cr_actservices'));
    const newValues = {};
    if (prevServices) {
      for (let i = 0; i < prevServices.length; i++) {
        newValues[prevServices[i]] = true;
      }
    }
    return newValues;
  };

  const [stateApp, setStateApp] = useState({
    defaultLang: {
      label: props.i18n.language === 'en' ? enLabelIcon : frLabelIcon,
      value: props.i18n.language === 'en' ? 'English' : 'Français',
    },
    isLogged: false, // true , false
    checkedServices: getPrevServices(),
    activeServices: [],
    containerWidth: 0,
    // eslint-disable-next-line react/no-unused-state
    chanelAgent: [
      {
        id: '5b56e70ab253020033362gs8',
        name: 'Agents',
        name_fr: 'Agents',
        type: 'agent',
        agentCount: 12,
        icon: '/static/media/facebook.5974443e.svg',
        darkIcon: '/static/media/facebook.92f23286.svg',
        greenIcon: '/static/media/facebook.38429045.svg',
        status: 'new',
        agents: [],
        is_active: false,
      },
    ],
    // Use Socket io - Init state
    socketConnected: false,
  });

  // const sharedDataContext = useMemo(() => { { stateApp, setStateApp } }, [stateApp, setStateApp]);

  const updateWindowDimensions = () => {
    setStateApp({ containerWidth: window.innerWidth });
  };

  const handleChooseService = (event) => {
    const { checkedServices } = stateApp;
    event.persist();
    setStateApp((prevState) => ({
      checkedServices: {
        ...prevState.checkedServices,
        [event.target.name]: event.target.checked,
      },
    }));
    return { checkedServices };
  };

  /*
    Ajout automatique des données dans le localStorage
  */
  const updateServicesLocally = (setActiveServices, activeServices) => {
    // before we update everything locally,
    // we make sure we check if the previous channels
    // have agents assigned, if so then we merge the agents
    // otherwise, we just update with empty agents list.
    localStorage.setItem('cr_actservices', JSON.stringify(setActiveServices));
    const selectedServices = FakeChannels.filter((channel) => setActiveServices.indexOf(channel.type) >= 0);
    const prevServices = JSON.parse(localStorage.getItem('cr_services'));

    console.log('prevServices : ', prevServices);

    if (prevServices && prevServices.length > 0) {
      for (let i = 0; i < prevServices.length; i++) {
        const currentChannel = prevServices[i];
        const agentList = currentChannel.agents;
        const channelId = currentChannel.id;
        if (agentList.length > 0) {
          const correspondingChannel = FakeChannels.find((channel) => channel.id === channelId);
          correspondingChannel.agents = agentList;
        }
      }
    } else if (!(activeServices && activeServices.length > 0)) {
      localStorage.setItem('cr_services', JSON.stringify([]));
    }
    localStorage.setItem('cr_services', JSON.stringify(selectedServices));
  };

  const handleSimulateChooseServices = () => {
    const { checkedServices, activeServices } = stateApp;
    const setActiveServices = [];
    const stateServices = Object.keys(checkedServices).length;
    if (stateServices > 0) {
      for (const prop in checkedServices) {
        if (checkedServices[prop]) {
          setActiveServices.push(prop);
          setStateApp({ activeServices: setActiveServices });
        } else {
          setStateApp({ activeServices: [] });
        }
        updateServicesLocally(setActiveServices, activeServices);
      }
    } else {
      {/* we just do nothing */}
    }
  };

  const changeLang = (lang) => {
    let language = 'en';
    if (!lang) {
      const tempLang = BrowserLanguage.getDefaultLanguage();
      language = tempLang === 'en' ? 'fr' : 'en';
    }
    setStateApp({ defaultLang: language });

    if (BrowserLanguage.setLanguage(lang.value)) {
      // Reload page if browser support localStorage
      window.location.reload(); // Relaod app after langue change
    } else {
      // Change language at runtime if localStorage not found
      i18n.changeLanguage(lang); // Need for change language at runtime
    }
  };

  useEffect(() => {
    /*
    SocketService.socketConnect();
    SocketService.socketDisconnect();
    */
    // Use Socket io - connect Socket
    socket.on('connect', () => {
      console.log('Connected socket');
      setStateApp({ socketConnected: true });
    });
    socket.on('disconnect', () => {
      console.log('Disconnected socket');
      setStateApp({ socketConnected: false });
    });

    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    document.body.style.overflow = 'hidden';

    localStorage.setItem('cr_services', JSON.stringify(stateApp.chanelAgent));

    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const {
    defaultLang,
    isLogged,
    checkedServices,
    activeServices,
    containerWidth,
  } = stateApp;

  return (
    <SharedDataContext.Provider value={stateApp}>
      <Router>
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
      </Router>
    </SharedDataContext.Provider>
  );
};

App.propTypes = {
  i18n: PropTypes.shape({
    defaultNS: PropTypes.string,
    changeLanguage: PropTypes.func,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(App);
