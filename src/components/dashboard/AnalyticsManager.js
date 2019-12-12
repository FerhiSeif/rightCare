import React from 'react';
import PropTypes from 'prop-types';
import Analytics from './Analytics';
import MobileAnalytics from './MobileAnalytics';

const AnalyticsManager = (props) => {
  const {
    i18n,
    t,
    containerWidth,
  } = props;

  return (
    <>
      { containerWidth > 768 && <Analytics t={t} i18n={i18n} kind="dashboard" /> }
      { containerWidth <= 768 && <MobileAnalytics t={t} containerWidth={containerWidth} i18n={i18n} /> }
    </>

  );
};

AnalyticsManager.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({}).isRequired,
  containerWidth: PropTypes.number.isRequired,
};

export default AnalyticsManager;
