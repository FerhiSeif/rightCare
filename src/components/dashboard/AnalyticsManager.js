import React from 'react';
import PropTypes from 'prop-types';
import Analytics from './Analytics';
import MobileAnalytics from './MobileAnalytics';

const AnalyticsManager = (props) => {
  const {
    t,
    containerWidth,
  } = props;

  return (
    <>
      { containerWidth > 768 && <Analytics t={t} /> }
      { containerWidth <= 768 && <MobileAnalytics t={t} containerWidth={containerWidth} /> }
    </>

  );
};

AnalyticsManager.propTypes = {
  t: PropTypes.func.isRequired,
  containerWidth: PropTypes.number.isRequired,
};

export default AnalyticsManager;
