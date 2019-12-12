import React from 'react';
import PropTypes from 'prop-types';

const TicketsCategoryContent = () => (
  <>
    <div className="ticket-content">
      <div className="ticket-priorities">
        <div>
          <div className="ml-0 children">
            <span className="label-title">Technical</span>
            <span className="tickets-close-incard" />
          </div>
        </div>
        <div>
          <div className="children">
            <span className="label-title">Customer Care</span>
            <span className="tickets-close-incard" />
          </div>
        </div>
        <div>
          <div className="mr-0 children">
            <span className="label-title">Enquires</span>
            <span className="tickets-close-incard" />
          </div>
        </div>
        <div>
          <div className="mr-0 children dash-child">
            <span className="tickets-plus">+</span>
            <span className="label-title mr-2">New Category</span>
          </div>
        </div>
      </div>
    </div>
  </>
);

TicketsCategoryContent.propTypes = {};

export default TicketsCategoryContent;
