import React from 'react';
import PropTypes from 'prop-types';
import TimerImg from '../../../../assets/images/settings/timer.svg';

const TicketsTimerContent = (props) => {
  return (
    <>
      <div className="ticket-content">
        <img src={TimerImg} />
        <div className="text-mueted">Set timer on ticket</div>
      </div>
    </>
  );
};

TicketsTimerContent.propTypes = {};

export default TicketsTimerContent;
