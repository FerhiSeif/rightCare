import React from 'react';
import PropTypes from 'prop-types';

const ContentTimer = (props) => {
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
                Content Timer !!!
            </p>
        </section>
        <footer className="modal-card-foot">
            <button className="button is-primary button-round" aria-label="close" onClick={handleContinue}>{buttonText}</button>
        </footer>
    </div>
  );
};

ContentTimer.propTypes = {
  t: PropTypes.func.isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handleContinue: PropTypes.func.isRequired,
};

export default ContentTimer;
