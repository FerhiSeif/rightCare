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
    i18n,
    title,
    content,
    kind,
    buttonText,
    agentModal,
    handleCloseRessourceModal,
    handleAddFields,
  } = props;

  const modalStyle = {
    title: {
      paddingTop: 0,
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
            buttonText={buttonText}
            handleContinue={handleContinue}
            i18n={i18n}
            handleAddFields={handleAddFields}
          />
        )}
        {content === 'status' && (
          <ContentStatus
            t={t}
            buttonText={buttonText}
            handleContinue={handleContinue}
            i18n={i18n}
            handleAddFields={handleAddFields}
          />
        )}
        {content === 'category' && (
          <ContentCategory
            t={t}
            buttonText={buttonText}
            handleContinue={handleContinue}
            handleAddFields={handleAddFields}
          />
        )}
        {content === 'informations' && (
          <ContentCustomer
            t={t}
            buttonText={buttonText}
            handleContinue={handleContinue}
            i18n={i18n}
            handleAddFields={handleAddFields}
          />
        )}
        {content === 'timer' && (
          <ContentTimer
            t={t}
            buttonText={buttonText}
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
  checkedServices: PropTypes.shape({}).isRequired,
  handleCloseRessourceModal: PropTypes.func.isRequired,
  handleAddFields: PropTypes.func.isRequired,
};

export default Modal;
