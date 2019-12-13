import React from 'react';
import PropTypes from 'prop-types';

const ContentCustomer = (props) => {
  const {
    t,
    content,
    kind,
    buttonText,
    handleCloseRessourceModal,
    handleContinue,
  } = props;

  return (
    <div className="">
        <section className="modal-card-body">
            <p>
                Content Customer !!!
            </p>
        </section>
        <footer className="modal-card-foot">
            <button className="button is-primary" aria-label="close" onClick={handleContinue}>{buttonText}</button>
        </footer>
    </div>
  );
};

ContentCustomer.propTypes = {
  t: PropTypes.func.isRequired,
  content: PropTypes.shape({}).isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentCustomer;
