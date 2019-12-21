/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

const Notification = (props) => {
  const {
    t,
    handleCloseNotifification,
    statusNotification,
    contentNotification,
    i18n,
  } = props;

  return (
    <>
      {statusNotification === 'success' && (
        <div className="notification-card notification-card-success">
          <button className="modal-close is-large modal-close-ticket close-notif-success" aria-label="close" onClick={handleCloseNotifification} />
          <div className="notification-msg">
            <strong>
              { contentNotification.title }
            </strong>
            {' '}
            { contentNotification.msg }
          </div>
        </div>
      )}
      {statusNotification === 'danger' && (
        <div className="notification-card notification-card-danger">
          <button className="modal-close is-large modal-close-ticket close-notif-danger" aria-label="close" onClick={handleCloseNotifification} />
          <div className="notification-msg">
            <strong>
              { contentNotification.title }
            </strong>
            {' '}
            { contentNotification.msg }
          </div>
        </div>
      )}
    </>
  );
};

Notification.propTypes = {
  t: PropTypes.func.isRequired,
  statusNotification: PropTypes.bool.isRequired,
  contentNotification: PropTypes.string.isRequired,
  handleCloseNotifification: PropTypes.func.isRequired,
  i18n: PropTypes.shape({}).isRequired,
};

export default Notification;
