import React from 'react';
import PropTypes from 'prop-types';

const CustomerInformationContent = (props) => {
  const {
    t,
    handleAddRessourceModal,
    customerFieldsItems,
  } = props;

  return (
    <>
      <div className="ticket-content">
        <div className="ticket-priorities customer-tickets-priorities">

          {customerFieldsItems && customerFieldsItems.map((item, index) => (
            <div className="children" key={index}>
              <span className="label-title">
                {item.name}
              </span>
            </div>
          ))}

          {/* <div className="//mr-0 children dash-child" onClick={() => handleAddRessourceModal(t('settings.customer_informations'), 'customer', t('settings.customer_informations_content.button_text'))}>
            <span className="tickets-plus">+</span>
            <span className="label-title //mr-2">
              {t('settings.customer_informations_content.new_field')}
            </span>
          </div> */}

        </div>
      </div>
    </>
  );
};

CustomerInformationContent.propTypes = {
  t: PropTypes.func.isRequired,
  handleAddRessourceModal: PropTypes.func.isRequired,
  customerFieldsItems: PropTypes.arrayOf.isRequired,
};

export default CustomerInformationContent;
