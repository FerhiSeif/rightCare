/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { Component } from 'react';
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

/* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

// Use Socket io - Init Socket & include service
import { SocketService, TicketSettingsHttpService } from '../../services/HttpService';
// import constants
import { SOCKET, SIO_TICKET_SETTINGS } from '../../constants/Constants';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultLang: {
        label: this.props.i18n.language === 'en' ? enLabelIcon : frLabelIcon,
        value: this.props.i18n.language === 'en' ? 'English' : 'Français',
      },
      isLogged: false, // true , false
      checkedServices: this.getPrevServices(),
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
    };
  }

  componentDidMount() {
    SocketService.socketConnect();
    SocketService.socketDisconnect();

    /* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */
    TicketSettingsHttpService.getDatasTicketSettings().then((response) => {
      console.log('getDatasTicketSettings : ', response);

      if ((response.status === 200 || response.status === 202)) {
        this.initSocketTicketSettings();
      }
    });
    /* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    document.body.style.overflow = 'hidden';

    const datasStorag = JSON.parse(localStorage.getItem('cr_services'));
    if (!datasStorag) {
      /*
        Ajout automatique des données dans le localStorage
      */
      // eslint-disable-next-line react/destructuring-assignment
      localStorage.setItem('cr_services', JSON.stringify(this.state.chanelAgent));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    document.body.style.overflow = 'auto';
  }

  /* START $$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

  // eslint-disable-next-line consistent-return
  onSocketGetTicketSettings = (response) => {
    if (response && (response.status === 200 || response.status === 202)) {
      console.log('onSocketGetTicketSettings : ', response);
    }
  }

  onSocketConnected(params) {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.socketConnected) {
      this.setState({ socketConnected: true });
      if (params === 'ticket-setting') {
        this.saveAsDraftNow();
      } else {
        this.fetchPublishLink();
      }
    }
  }

  initSocketTicketSettings = () => {
    socket.on(SIO_TICKET_SETTINGS, (response) => this.onSocketGetTicketSettings(response));

    // socket.on(SIO_TICKET_SETTINGS, (response) => response);
    // this.onSocketConnected('ticket-setting');
  }

  /* END $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ */

  updateWindowDimensions = () => {
    this.setState({ containerWidth: window.innerWidth });
  }

  getPrevServices = () => {
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
  }

  handleChooseService = (event) => {
    const { checkedServices } = this.state;
    event.persist();
    this.setState((prevState) => ({
      checkedServices: {
        ...prevState.checkedServices,
        [event.target.name]: event.target.checked,
      },
    }));
    return { checkedServices };
  };

  handleSimulateChooseServices = () => {
    const { checkedServices, activeServices } = this.state;
    const setActiveServices = [];
    const stateServices = Object.keys(checkedServices).length;
    if (stateServices > 0) {
      for (const prop in checkedServices) {
        if (checkedServices[prop]) {
          setActiveServices.push(prop);
          this.setState({ activeServices: setActiveServices });
        } else {
          this.setState({ activeServices: [] });
        }
        this.updateServicesLocally(setActiveServices, activeServices);
      }
    } else {
      {/* we just do nothing */}
    }
  }

  /*
    Ajout automatique des données dans le localStorage
  */
  updateServicesLocally = (setActiveServices, activeServices) => {
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
  }

  changeLang = (lang) => {
    const { i18n } = this.props;
    if (!lang) {
      const tempLang = BrowserLanguage.getDefaultLanguage();
      lang = tempLang === 'en' ? 'fr' : 'en';
    }
    this.setState({ defaultLang: lang });

    if (BrowserLanguage.setLanguage(lang.value)) {
      // Reload page if browser support localStorage
      window.location.reload(); // Relaod app after langue change
    } else {
      // Change language at runtime if localStorage not found
      i18n.changeLanguage(lang); // Need for change language at runtime
    }
  };

  render() {
    const { t, i18n } = this.props;
    const { changeLang, handleChooseService, handleSimulateChooseServices } = this;
    const {
      defaultLang,
      isLogged,
      checkedServices,
      activeServices,
      containerWidth,
    } = this.state;
    return (
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
    );
  }
}

App.propTypes = {
  i18n: PropTypes.shape({
    defaultNS: PropTypes.string,
    changeLanguage: PropTypes.func,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation()(App);
