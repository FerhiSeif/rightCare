import React from 'react';
import PropTypes from 'prop-types';

const CustomerInformationContent = (props) => {
  const {
    t,
    handleAddRessourceModal,
    customerFields,
  } = props;

  return (
    <>
      <div className="ticket-content">
        <div className="ticket-priorities customer-tickets-priorities">

          {customerFields?.items.map((item, i) => (
            <div className="children" key={i}>
              <span className="label-title">
                {item.label}
              </span>
            </div>
          ))}

          <div className="//mr-0 children dash-child" onClick={() => handleAddRessourceModal(t('settings.customer_informations'), 'customer', t('settings.customer_informations_content.button_text'))}>
            <span className="tickets-plus">+</span>
            <span className="label-title //mr-2">
              {t('settings.customer_informations_content.new_field')}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

CustomerInformationContent.propTypes = {
  t: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
  customerFields: PropTypes.objectOf.isRequired,
};

export default CustomerInformationContent;
