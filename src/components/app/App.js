import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Welcome from '../onboarding/Welcome';
import Steps from '../onboarding/Steps';
import Dashboard from '../dashboard/Dashboard';
import BrowserLanguage from '../../utils/BrowserLanguage';
import LangIconEn from '../../assets/images/locale/uk.png';
import LangIconFr from '../../assets/images/locale/fr.png';
import '../../assets/styles/bluma.scss';
import FakeChannels from '../../faker/channels';

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
      isLogged: true,
      checkedServices: this.getPrevServices(),
      activeServices: [],
      containerWidth: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    document.body.style.overflow = 'auto';
  }

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
      for (let prop in checkedServices) {
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

  updateServicesLocally = (setActiveServices, activeServices) => {
    // before we update everything locally,
    // we make sure we check if the previous channels
    // have agents assigned, if so then we merge the agents
    // otherwise, we just update with empty agents list.
    localStorage.setItem('cr_actservices', JSON.stringify(setActiveServices));
    const selectedServices = FakeChannels.filter((channel) => setActiveServices.indexOf(channel.type) >= 0);
    const prevServices = JSON.parse(localStorage.getItem('cr_services'));
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
