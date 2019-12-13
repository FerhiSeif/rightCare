import React from 'react';
import PropTypes from 'prop-types';

const ContentPriority = (props) => {
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
                Content Priority !!!
            </p>
        </section>
        <footer className="modal-card-foot">
            <button className="button is-primary" aria-label="close" onClick={handleContinue}>{buttonText}</button>
        </footer>
    </div>
  );
};

ContentPriority.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentPriority;
