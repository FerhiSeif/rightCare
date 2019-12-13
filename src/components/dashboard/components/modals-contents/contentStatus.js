import React from 'react';
import PropTypes from 'prop-types';

const ContentStatus = (props) => {
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
                Content Status !!!
            </p>
        </section>
        <footer className="modal-card-foot">
            <button className="button is-primary" aria-label="close" onClick={handleContinue}>{buttonText}</button>
        </footer>
    </div>
  );
};

ContentStatus.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentStatus;
