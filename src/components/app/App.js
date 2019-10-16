import React from 'react';
import Select from 'react-select';
import { withTranslation } from 'react-i18next';
import { options } from '../../configs/options';
import './App.css';

const App = ({lang, i18n, t}) => {
  const appStyles = {
    fontSize: '7rem',
    textAligne: 'center',
  }

  const changeLang = (lang) => {
    const { value } = lang;
    i18n.changeLanguage(value);
  };


  return (
    <div style={appStyles}>
      {t('Welcome to')} <span>RighCare</span>
      <div className="App__language">
        <Select
          defaultValue={options[0]}
          options={options}
          value={lang}
          onChange={changeLang}
          className="App-Select"
        />
      </div>
    </div>
  );
};

export default withTranslation()(App);
