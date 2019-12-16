import React from 'react';
import PropTypes from 'prop-types';

const ContentCategory = (props) => {
  const {
    t,
    buttonText,
    handleContinue,
  } = props;

  return (
    <div className="">
        <section className="modal-card-body">
            <div>
              <input className="input" type="text" placeholder={t('settings.tickets_category_content.category_input')} />
            </div>
        </section>
        <footer className="modal-card-foot">
            <button className="button is-primary button-round" aria-label="close" onClick={handleContinue}>{buttonText}</button>
        </footer>
    </div>
  );
};

ContentCategory.propTypes = {
  t: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentCategory;
