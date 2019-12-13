import React from 'react';
import PropTypes from 'prop-types';

import ContentPriority from './modals-contents/contentPriority';
import ContentStatus from './modals-contents/contentStatus';
import ContentCategory from './modals-contents/contentCategory';
import ContentCustomer from './modals-contents/contentCustomer';
import ContentTimer from './modals-contents/contentTimer';

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
        <button className="modal-close is-large modal-close-ticket" aria-label="close" ref={addAgentsRef} onClick={handleCloseRessourceModal} />
        <header className="modal-card-head">
          <div className="title-container" style={modalStyle.title}>
            <h2 className="ticket-title">{title}</h2>
          </div>
        </header>

        {content === 'priority' && (
          <ContentPriority
            t={t}
            kind={kind}
            buttonText={buttonText}
            handleCloseRessourceModal={handleCloseRessourceModal}
            handleContinue={handleContinue}
          />
        )}
        {content === 'status' && (
          <ContentStatus
            t={t}
            kind={kind}
            buttonText={buttonText}
            handleCloseRessourceModal={handleCloseRessourceModal}
            handleContinue={handleContinue}
          />
        )}
        {content === 'category' && (
          <ContentCategory
            t={t}
            kind={kind}
            buttonText={buttonText}
            handleCloseRessourceModal={handleCloseRessourceModal}
            handleContinue={handleContinue}
          />
        )}
        {content === 'informations' && (
          <ContentCustomer
            t={t}
            kind={kind}
            buttonText={buttonText}
            handleCloseRessourceModal={handleCloseRessourceModal}
            handleContinue={handleContinue}
          />
        )}
        {content === 'timer' && (
          <ContentTimer
            t={t}
            kind={kind}
            buttonText={buttonText}
            handleCloseRessourceModal={handleCloseRessourceModal}
            handleContinue={handleContinue}
          />
        )}

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
