import React from 'react';
import PropTypes from 'prop-types';
import TicketAnalytics from './TicketAnalytics';
import MobileAnalytics from './MobileAnalytics';

const TicketsManager = (props) => {
  const {
    i18n,
    t,
    containerWidth,
  } = props;

  return (
    <>
      { containerWidth > 768 && <TicketAnalytics t={t} i18n={i18n} kind="tickets" /> }
      { containerWidth <= 768 && <MobileAnalytics t={t} containerWidth={containerWidth} i18n={i18n} /> }
    </>

  );
};

TicketsManager.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({}).isRequired,
  containerWidth: PropTypes.number.isRequired,
};

export default TicketsManager;