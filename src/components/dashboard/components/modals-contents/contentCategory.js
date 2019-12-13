import React from 'react';
import PropTypes from 'prop-types';

const ContentCategory = (props) => {
  const {
    t,
    kind,
    buttonText,
    handleContinue,
  } = props;

  return (
    <div className="">
        <section className="modal-card-body">
            <p>
                Content Category !!!
            </p>
        </section>
        <footer className="modal-card-foot">
            <button className="button is-primary" aria-label="close" onClick={handleContinue}>{buttonText}</button>
        </footer>
    </div>
  );
};

ContentCategory.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentCategory;
