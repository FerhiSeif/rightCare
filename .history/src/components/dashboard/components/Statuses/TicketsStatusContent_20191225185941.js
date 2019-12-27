import React from 'react';
import PropTypes from 'prop-types';

const TicketsStatusContent = (props) => {
  const {
    t,
    kind,
    handleCloseRessourceModal,
    handleAddRessourceModal,
    status,
  } = props;

  return (
    <>
      <div className="ticket-content">
        <div className="ticket-priorities">

          {status?.items.map((item, index) => (
            <div key={index}>
              <div className="children">
                <span className="label-title">
                  {item.name}
                </span>
              </div>
              <div className={`ticket-label ticket-status-${index}`}>
                {item.label}
              </div>
            </div>
          ))}
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
  status: PropTypes.objectOf({}).isRequired,
};

export default TicketsStatusContent;
