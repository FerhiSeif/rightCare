import React from 'react';
import PropTypes from 'prop-types';

const TicketsPriorityContent = (props) => {
  const {
    t,
    handleAddRessourceModal,
    handleCloseRessourceModal,
    priorityItems,
  } = props;

  return (
    <>
      <div className="ticket-content">
        <div className="ticket-priorities">

          {priorityItems && priorityItems.map((item, index) => (
            <div key={index}>
              <div className="children">
                <span className="label-title">
                  {item.name}
                </span>
              </div>
              <div className={`ticket-label ticket-priority-${index}`}>
                {item.label}
              </div>
            </div>
          ))}

          {/*<div>
            <div className="mr-0 children dash-child" onClick={() => handleAddRessourceModal(t('settings.tickets_priority'), 'priority', t('settings.tickets_priority_content.button_text'))}>
              <span className="tickets-plus">+</span>
              <span className="label-title mr-2">
                {t('settings.tickets_priority_content.new_priority')}
              </span>
            </div>
          </div>
          */}
        </div>
      </div>
    </>
  );
};

TicketsPriorityContent.propTypes = {
  t: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  priorityItems: PropTypes.arrayOf.isRequired,
};

export default TicketsPriorityContent;
