import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TicketsPriorityContent = (props) => {
  const {
    t,
    handleAddRessourceModal,
    handleCloseRessourceModal,
  } = props;

  return (
    <>
      <div className="ticket-content">
        <div className="ticket-priorities">
          <div>
            <div className="ml-0 children">
              <span className="label-title">
                {t('settings.tickets_priority_content.hight')}
              </span>
              <span className="tickets-close-incard" />
            </div>
            <div className="ticket-label ticket-very-urgent">
              {t('settings.tickets_priority_content.very_urgent')}
            </div>
          </div>
          <div>
            <div className="children">
              <span className="label-title">
                {t('settings.tickets_priority_content.medium')}
              </span>
              <span className="tickets-close-incard" />
            </div>
            <div className="ticket-label ticket-urgent ml-1">
              {t('settings.tickets_priority_content.urgent')}
            </div>
          </div>
          <div>
            <div className="children mr-0">
              <span className="label-title">
                {t('settings.tickets_priority_content.low')}
              </span>
              <span className="tickets-close-incard" />
            </div>
            <div className="ticket-label ticket-not-urgent ml-1 mr-0">
              {t('settings.tickets_priority_content.not_urgent')}
            </div>
          </div>
          <div>
            <div className="mr-0 children dash-child" onClick={() => handleAddRessourceModal(t('settings.tickets_priority'))}>
              <span className="tickets-plus">+</span>
              <span className="label-title mr-2">
                {t('settings.tickets_priority_content.new_priority')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TicketsPriorityContent.propTypes = {
  t: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
};

export default TicketsPriorityContent;
