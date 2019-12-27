import React from 'react';
import PropTypes from 'prop-types';

const TicketsCategoryContent = (props) => {
  const {
    t,
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
                {t('settings.tickets_category_content.technical')}
              </span>
            </div>
          </div>
          <div>
            <div className="children">
              <span className="label-title">
                {t('settings.tickets_category_content.customer_care')}
              </span>
            </div>
          </div>
          <div>
            <div className="mr-0 children">
              <span className="label-title">
                {t('settings.tickets_category_content.enquires')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TicketsCategoryContent.propTypes = {
  t: PropTypes.func.isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
};

export default TicketsCategoryContent;
