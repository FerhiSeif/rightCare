import React from 'react';
import PropTypes from 'prop-types';

const TicketsStatusContent = (props) => {
  const {
    t,
    kind,
    handleCloseRessourceModal,
    handleAddRessourceModal,
  } = props;

  return (
    <>
      <div className="ticket-content">
        <div className="ticket-priorities">
          <div>
            <div className="ml-0 children">
              <span className="label-title">
                {t('settings.tickets_status_content.resolved')}
              </span>
            </div>
            <div className="ticket-label ticket-solved">
              {t('settings.tickets_status_content.ticket_solved_close')}
            </div>
          </div>
          <div>
            <div className="children">
              <span className="label-title">
                {t('settings.tickets_status_content.pending')}
              </span>
            </div>
            <div className="ticket-label ticket-urgent ml-1">
              {t('settings.tickets_status_content.on_going_ticket')}
            </div>
          </div>
          <div>
            <div className="mr-0 children">
              <span className="label-title">
                {t('settings.tickets_status_content.new')}
              </span>
            </div>
            <div className="ticket-label ticket-without-agent ml-1 mr-0">
              {t('settings.tickets_status_content.ticket_without_agent_assign')}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TicketsStatusContent.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  initialAgents: PropTypes.shape({}).isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
};

export default TicketsStatusContent;
