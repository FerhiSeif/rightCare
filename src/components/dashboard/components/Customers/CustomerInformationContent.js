import React from 'react';
import PropTypes from 'prop-types';

const CustomerInformationContent = (props) => {

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
                {t('settings.customer_informations_content.first_name')}
              </span>
              <span className="tickets-close-incard" />
            </div>
          </div>
          <div>
            <div className="children">
              <span className="label-title">
                {t('settings.customer_informations_content.last_name')}
              </span>
              <span className="tickets-close-incard" />
            </div>
          </div>
          <div>
            <div className="mr-0 children">
              <span className="label-title">
                {t('settings.customer_informations_content.email')}
              </span>
              <span className="tickets-close-incard" />
            </div>
          </div>
          <div>
            <div className="mr-0 children ml-0">
              <span className="label-title">
                {t('settings.customer_informations_content.telephone')}
              </span>
              <span className="tickets-close-incard" />
            </div>
          </div>
          <div>
            <div className="mr-0 children dash-child" onClick={() => handleAddRessourceModal(t('settings.customer_informations'))}>
              <span className="tickets-plus">+</span>
              <span className="label-title mr-2">
                {t('settings.customer_informations_content.new_field')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CustomerInformationContent.propTypes = {
  t: PropTypes.func.isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
};

export default CustomerInformationContent;
