import React from 'react';
import PropTypes from 'prop-types';

const TicketsPriorityContent = (props) => {
  const {
    handleAddRessourceModal,
    handleCloseRessourceModal,
  } = props;

  return (
    <>
      <div className="ticket-content">
        <div className="ticket-priorities">
          <div>
            <div className="ml-0 children">
              <span className="label-title">Hight</span>
              <span className="tickets-close-incard" />
            </div>
            <div className="ticket-label ticket-very-urgent">Very urgent</div>
          </div>
          <div>
            <div className="children">
              <span className="label-title">Medium</span>
              <span className="tickets-close-incard" />
            </div>
            <div className="ticket-label ticket-urgent ml-1">Urgent</div>
          </div>
          <div>
            <div className="children mr-0">
              <span className="label-title">Low</span>
              <span className="tickets-close-incard" />
            </div>
            <div className="ticket-label ticket-not-urgent ml-1 mr-0">Not urgent</div>
          </div>
          <div>
            <div className="mr-0 children dash-child" onClick={handleAddRessourceModal}>
              <span className="tickets-plus">+</span>
              <span className="label-title mr-2">New Priority</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TicketsPriorityContent.propTypes = {
  handleAddRessourceModal: PropTypes.func.isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
};

export default TicketsPriorityContent;
