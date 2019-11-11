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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultLang: {
        label: this.props.i18n.language === 'en' ? enLabelIcon : frLabelIcon,
        value: this.props.i18n.language === 'en' ? 'English' : 'Français',
      },
      isLogged: true,
      checkedServices: {},
    };
  }

  handleChooseService = (event) => {
    const { checkedServices } = this.state;
    this.setState({
      checkedServices: {
        ...checkedServices,
        [event.target.name]: event.target.checked,
      },
    });
  };

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
    const { t } = this.props;
    const { changeLang, handleChooseService } = this;
    const { defaultLang, isLogged, checkedServices } = this.state;
    return (
      <Router>
        <Route exact path="/">
          <Welcome
            t={t}
            changeLang={changeLang}
            defaultLang={defaultLang}
            kind="onboard"
            isLogged={false}
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
