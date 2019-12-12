import React from 'react';
import PropTypes from 'prop-types';

const CustomerInformationContent = () => (
  <>
    <div className="ticket-content">
      <div className="ticket-priorities">
        <div>
          <div className="ml-0 children">
            <span className="label-title">First Name</span>
            <span className="tickets-close-incard" />
          </div>
        </div>
        <div>
          <div className="children">
            <span className="label-title">Last Name</span>
            <span className="tickets-close-incard" />
          </div>
        </div>
        <div>
          <div className="mr-0 children">
            <span className="label-title">Email</span>
            <span className="tickets-close-incard" />
          </div>
        </div>
        <div>
          <div className="ml-0 mr-0 children">
            <span className="label-title">Telephone</span>
            <span className="tickets-close-incard" />
          </div>
        </div>
        <div>
          <div className="mr-0 children dash-child">
            <span className="tickets-plus">+</span>
            <span className="label-title mr-2">New Field</span>
          </div>
        </div>
      </div>
    </div>
  </>
);

CustomerInformationContent.propTypes = {};

export default CustomerInformationContent;
