import React, { Component } from 'react';
import Select from 'react-select';
import { withTranslation } from 'react-i18next';
import BrowserLanguage from '../../utils/BrowserLanguage';
import { options } from '../../configs/options';
import './App.css';

const appStyles = {
  fontSize: '7rem',
  textAligne: 'center',
}

class App extends Component  {
  state = {
    defaultLang: {
      label: this.props.i18n.language === 'en' ? 'English' : 'Francais',
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
    return (
      <div style={appStyles}>
        {t('home.welcome_to')} <span>RighCare</span>
        <div className="App__language">
          <Select
            options={options}
            value={this.state.defaultLang}
            onChange={this.changeLang}
            className="App-Select"
          />
        </div>
      </div>
    );
  }
}
export default withTranslation()(App);
