import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nConfig from '../configs/i18nConfig';
import App from './app/App';

const Root = () => (
  <I18nextProvider i18n={i18nConfig}>
    <App />
  </I18nextProvider>
);

export default Root;
