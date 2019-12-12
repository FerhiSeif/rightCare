import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
  const {
    t,
    title,
    content,
    kind,
    buttonText,
    agentModal,
    handleCloseRessourceModal,
  } = props;

  const modalStyle = {
    title: {
      paddingBottom: kind === 'channel' ? 0 : '1.125rem',
    },
  };

  const addAgentsRef = React.createRef();

  const handleContinue = () => { addAgentsRef.current.click(); };

  return (
    <div className="modal" ref={agentModal}>
      <div className="modal-background" />
      <div className="modal-card">
        <button className="modal-close is-large" aria-label="close" ref={addAgentsRef} onClick={handleCloseRessourceModal} />
        <header className="modal-card-head">
          <div className="title-container" style={modalStyle.title}>
            <h2 className="title">{title}</h2>
          </div>
        </header>
        <section className="modal-card-body">
          {content}
        </section>
        <footer className="modal-card-foot">
          <button className="button is-primary" aria-label="close" onClick={handleContinue}>{buttonText}</button>
        </footer>
      </div>
    </div>
  );
};

Modal.propTypes = {
  t: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.shape({}).isRequired,
  kind: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  agentModal: PropTypes.shape({}).isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  checkedServices: PropTypes.shape({}).isRequired,
};

export default Modal;
