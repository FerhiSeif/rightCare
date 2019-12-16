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
              <span className="tickets-close-incard" />
            </div>
          </div>
          <div>
            <div className="children">
              <span className="label-title">
                {t('settings.tickets_category_content.customer_care')}
              </span>
              <span className="tickets-close-incard" />
            </div>
          </div>
          <div>
            <div className="mr-0 children">
              <span className="label-title">
                {t('settings.tickets_category_content.enquires')}
              </span>
              <span className="tickets-close-incard" />
            </div>
          </div>
          <div>
            <div className="mr-0 children dash-child" onClick={() => handleAddRessourceModal(t('settings.tickets_category'), 'category', t('settings.tickets_category_content.button_text'))}>
              <span className="tickets-plus">+</span>
              <span className="label-title mr-2">
                {t('settings.tickets_category_content.new_category')}
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
