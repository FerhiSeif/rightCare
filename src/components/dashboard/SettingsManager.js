import React from 'react';
import PropTypes from 'prop-types';
import Tabs from './components/Tabs';
import MobileAnalytics from './MobileAnalytics';

const SettingsManager = (props) => {
  const {
    i18n,
    t,
    containerWidth,
  } = props;

  return (
    <>
      { containerWidth > 768 && <Tabs t={t} i18n={i18n} /> }
      { containerWidth <= 768 && <MobileAnalytics t={t} containerWidth={containerWidth} i18n={i18n} /> }
    </>

  );
};

SettingsManager.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({}).isRequired,
  containerWidth: PropTypes.number.isRequired,
};

export default SettingsManager;
