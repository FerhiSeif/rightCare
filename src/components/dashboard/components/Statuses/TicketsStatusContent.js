import React from 'react';
import PropTypes from 'prop-types';

const TicketsStatusContent = (props) => {
  const {
    kind,
  } = props;

  return (
    <>
      <div className="ticket-content">
        <div className="ticket-priorities">
          <div>
            <div className="ml-0 children">
              <span className="label-title">Resolved</span>
              <span className="tickets-close-incard" />
            </div>
            <div className="ticket-label ticket-solved">Ticket solved & close</div>
          </div>
          <div>
            <div className="children">
              <span className="label-title">Pending</span>
              <span className="tickets-close-incard" />
            </div>
            <div className="ticket-label ticket-urgent ml-1">On-going ticket</div>
          </div>
          <div>
            <div className="mr-0 children">
              <span className="label-title">New</span>
              <span className="tickets-close-incard" />
            </div>
            <div className="ticket-label ticket-without-agent ml-1 mr-0">Ticket without agent assign</div>
          </div>
          <div>
            <div className="mr-0 children dash-child">
              <span className="tickets-plus">+</span>
              <span className="label-title mr-2">New Status</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TicketsStatusContent.propTypes = {
  kind: PropTypes.string.isRequired,
  initialAgents: PropTypes.shape({}).isRequired,
};

export default TicketsStatusContent;
