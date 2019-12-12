import React from 'react';
import PropTypes from 'prop-types';
import TimerImg from '../../../../assets/images/settings/timer.svg';

const TicketsTimerContent = (props) => {
  const { t } = props;

  return (
    <>
      <div className="ticket-content">
        <img src={TimerImg} />
        <div className="text-mueted">
          {t('settings.tickets_timer_content.set_timer_ticket')}
        </div>
      </div>
    </>
  );
};

TicketsTimerContent.propTypes = {
  t: PropTypes.func.isRequired,
};

export default TicketsTimerContent;
