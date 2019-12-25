import React from 'react';
import PropTypes from 'prop-types';

const TicketsCategoryContent = (props) => {
  const {
    t,
    handleCloseRessourceModal,
    handleAddRessourceModal,
    category,
  } = props;

  return (
    <>
      <div className="ticket-content">
        <div className="ticket-priorities">

          {category?.items.map((item, index) => (
            <div key={index}>
              <div className="children">
                <span className="label-title">
                  {item.label}
                </span>
              </div>
            </div>
          ))}

          
          <div>
            <div className="children">
              <span className="label-title">
                {t('settings.tickets_category_content.customer_care')}
              </span>
            </div>
          </div>
          <div>
            <div className="//mr-0 children">
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
  category: PropTypes.objectOf({}).isRequired,
};

export default TicketsCategoryContent;
