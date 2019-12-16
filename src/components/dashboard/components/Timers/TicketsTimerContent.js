import React from 'react';
import PropTypes from 'prop-types';
import TimerImg from '../../../../assets/images/settings/timer.svg';

const TicketsTimerContent = (props) => {
  const {
    t,
    handleCloseRessourceModal,
    handleAddRessourceModal,
  } = props;

  const imgStyle = {
    cursor: {
      cusror: 'pointer',
    },
  };

  return (
    <>
      <div className="ticket-content">
        <img src={TimerImg} onClick={() => handleAddRessourceModal(t('settings.tickets_timer_content.set_ticket_support_timer'), 'timer', t('settings.tickets_timer_content.button_text'))} className="img-cursor" />
        <div className="text-mueted">
          {t('settings.tickets_timer_content.set_timer_ticket')}
        </div>
      </div>
    </>
  );
};

TicketsTimerContent.propTypes = {
  t: PropTypes.func.isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
};

export default TicketsTimerContent;
