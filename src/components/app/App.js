import React, { Component, Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import BrowserLanguage from '../../utils/BrowserLanguage';
import Header from '../layouts/Header';
import { options } from '../../configs/options';
import LangIconEn from '../../assets/images/locale/uk.png';
import LangIconFr from '../../assets/images/locale/fr.png';
import 'bulma/css/bulma.css'
import './App.css';

const appStyles = {
  langIcons: {
    height: '1.6rem',
    marginRight: '.5rem',
  },
  langContainer: {
    display: 'flex',
  },
}

const enLabelIcon = <div style={appStyles.langContainer}><img alt="lang icon" src={LangIconEn} style={appStyles.langIcons}/><span>English</span></div>;
const frLabelIcon = <div style={appStyles.langContainer}><img alt="lang icon" src={LangIconFr} style={appStyles.langIcons}/><span>Francais</span></div>;

class App extends Component  {
  state = {
    defaultLang: {
      label: this.props.i18n.language === 'en' ? enLabelIcon : frLabelIcon,
      value: this.props.i18n.language === 'en' ? 'English' : 'Francais',
    }
  }

  changeLang = (lang) => {
   const { i18n } = this.props;
    if (!lang) {
      const tempLang = BrowserLanguage.getDefaultLanguage();
      lang = tempLang === "en" ? "fr" : "en";
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
    const { defaultLang } = this.state;
    return (
      <Fragment>
        <Header
          options={options}
          defaultLang={defaultLang}
          changeLang={this.changeLang}
          t={t}
        />
      </Fragment>
    );
  }
}
export default withTranslation()(App);
